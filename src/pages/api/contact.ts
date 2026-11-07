import type { APIRoute } from 'astro';
import {
  WEB3FORMS_ACADEMY_ACCESS_KEY,
  WEB3FORMS_COURSE_ACCESS_KEY,
  WEB3FORMS_HOME_ACCESS_KEY,
  WEB3FORMS_PMU_ACCESS_KEY,
} from 'astro:env/server';

export const prerender = false;

const FORM_KEYS = {
  home: WEB3FORMS_HOME_ACCESS_KEY,
  pmu: WEB3FORMS_PMU_ACCESS_KEY,
  academy: WEB3FORMS_ACADEMY_ACCESS_KEY,
  course: WEB3FORMS_COURSE_ACCESS_KEY,
} as const;

const ALLOWED_HOSTS = new Set(['www.kingamiskolczi.com', 'kingamiskolczi.com']);
const MAX_BODY_BYTES = 20_000;

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export const POST: APIRoute = async ({ request }) => {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) return json({ success: false, message: 'Túl nagy kérés.' }, 413);

  const origin = request.headers.get('origin');
  if (origin) {
    try {
      const host = new URL(origin).hostname;
      if (!ALLOWED_HOSTS.has(host) && host !== 'localhost') {
        return json({ success: false, message: 'Tiltott kérés.' }, 403);
      }
    } catch {
      return json({ success: false, message: 'Érvénytelen kérés.' }, 400);
    }
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ success: false, message: 'Érvénytelen adatformátum.' }, 400);
  }

  // Honeypot: a valódi látogatók ezt a rejtett mezőt nem töltik ki.
  if (clean(payload.company, 200)) return json({ success: true });

  const formType = clean(payload.formType, 20) as keyof typeof FORM_KEYS;
  const accessKey = FORM_KEYS[formType];
  if (!accessKey) return json({ success: false, message: 'Az űrlap átmenetileg nem elérhető.' }, 503);

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 60);
  const message = clean(payload.message, 3000);
  const course = clean(payload.course, 200);
  const age = clean(payload.age, 20);

  if (!name || !phone || !email.includes('@') || (!message && !course)) {
    return json({ success: false, message: 'Kérjük, ellenőrizd a kötelező mezőket.' }, 400);
  }

  const upstream = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      phone,
      message,
      course,
      age,
      subject: `Új jelentkezés – ${formType}`,
      from_name: 'kingamiskolczi.com',
    }),
  });

  if (!upstream.ok) return json({ success: false, message: 'A küldés nem sikerült. Kérjük, próbáld újra.' }, 502);
  const result = (await upstream.json().catch(() => ({}))) as { success?: boolean };
  if (result.success === false) return json({ success: false, message: 'A küldés nem sikerült. Kérjük, próbáld újra.' }, 502);

  return json({ success: true });
};

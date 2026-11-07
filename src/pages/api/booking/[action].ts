import type { APIRoute } from 'astro';
import { WEB3FORMS_BOOKING_ACCESS_KEY } from 'astro:env/server';

export const prerender = false;

const services = [
  { id: 'pmu_consultation', label: 'Személyes sminktetoválási konzultáció', category: 'pmu' },
  { id: 'pmu_eyebrows', label: 'Szemöldöktetoválás', category: 'pmu' },
  { id: 'pmu_eyeliner', label: 'Szemhéjtetoválás', category: 'pmu' },
  { id: 'pmu_lips', label: 'Ajaktetoválás', category: 'pmu' },
  { id: 'pmu_correction', label: 'Korrekció', category: 'pmu' },
  { id: 'makeup', label: 'Professzionális smink', category: 'makeup' },
  { id: 'school_basic', label: 'Pro Makeup Mentorprogram', category: 'school' },
  { id: 'school_advanced', label: 'Haladó mesterprogram', category: 'school' },
  { id: 'school_competition', label: 'Versenyfelkészítés', category: 'school' },
  { id: 'school_self', label: 'Privát önsminkelés', category: 'school' },
] as const;

const MAX_BODY_BYTES = 16_000;
const ready = () => typeof WEB3FORMS_BOOKING_ACCESS_KEY === 'string' && WEB3FORMS_BOOKING_ACCESS_KEY.trim().length >= 20;
const clean = (value: unknown, maxLength: number) => typeof value === 'string' ? value.trim().slice(0, maxLength + 1) : '';
const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
});

function budapestToday() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Budapest', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value || '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export const ALL: APIRoute = async ({ request, params }) => {
  const action = params.action;
  if (action !== 'config' && action !== 'requests') return reply({ ok: false }, 404);
  if (action === 'config') {
    if (request.method !== 'GET') return reply({ ok: false }, 405);
    return reply({ mode: 'live', acceptingRequests: ready(), services });
  }
  if (request.method !== 'POST') return reply({ ok: false }, 405);
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply({ ok: false }, 415);
  if (request.headers.get('origin') !== new URL(request.url).origin) return reply({ ok: false }, 403);
  if (!ready()) return reply({ ok: false, message: 'Az időpontkérés jelenleg nem érhető el. Kérjük, hívd Kingát telefonon.' }, 503);

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) return reply({ ok: false, message: 'Túl nagy kérés.' }, 413);
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) return reply({ ok: false, message: 'Túl nagy kérés.' }, 413);
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Invalid body');
    data = parsed as Record<string, unknown>;
  } catch {
    return reply({ ok: false, message: 'Érvénytelen adatformátum.' }, 400);
  }

  const submittedId = typeof data.idempotencyKey === 'string' ? data.idempotencyKey : '';
  const id = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submittedId)
    ? submittedId
    : crypto.randomUUID();
  // Automated submissions use the hidden field; do not send those to Kinga.
  if (clean(data.website, 200)) return reply({ ok: true, mode: 'live', id }, 201);

  const name = clean(data.name, 100);
  const email = clean(data.email, 254);
  const phone = clean(data.phone, 40);
  const preferredDate = clean(data.preferredDate, 10);
  const preferredTime = clean(data.preferredTime, 20);
  const message = clean(data.message, 1000);
  const selected = services.find((service) => service.id === data.serviceId);
  if (name.length < 2 || name.length > 100 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length > 40 || message.length > 1000 || !selected || data.consent !== true) {
    return reply({ ok: false, message: 'Kérjük, ellenőrizd a kötelező mezőket.' }, 400);
  }
  if (preferredDate) {
    const parsedDate = new Date(`${preferredDate}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate) || Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== preferredDate || preferredDate < budapestToday()) {
      return reply({ ok: false, message: 'Mai vagy későbbi napot válassz.' }, 400);
    }
  }
  if (!['rugalmas', 'délelőtt', 'délután'].includes(preferredTime)) {
    return reply({ ok: false, message: 'Válassz érvényes napszakot.' }, 400);
  }

  const emailMessage = [
    'Új időpontkérés a kingamiskolczi.com oldalról. Az időpont még nincs visszaigazolva.',
    `Azonosító: ${id}`,
    `Szolgáltatás: ${selected.label}`,
    `Név: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || 'Nincs megadva'}`,
    `Javasolt nap: ${preferredDate || 'Nincs megadva'}`,
    `Napszak: ${preferredTime}`,
    `Üzenet: ${message || 'Nincs megadva'}`,
    'Adatkezelési hozzájárulás: igen',
  ].join('\n');

  try {
    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_BOOKING_ACCESS_KEY.trim(),
        subject: `Új időpontkérés · ${selected.label}`,
        from_name: 'kingamiskolczi.com',
        name,
        email,
        phone,
        message: emailMessage,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const result = await upstream.json().catch(() => null) as { success?: boolean } | null;
    if (!upstream.ok || result?.success !== true) throw new Error('Delivery rejected');
    return reply({ ok: true, mode: 'live', id }, 201);
  } catch {
    return reply({ ok: false, message: 'A kérés elküldése nem sikerült. Kérjük, próbáld újra vagy hívd Kingát.' }, 502);
  }
};

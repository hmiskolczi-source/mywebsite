import type { APIRoute } from 'astro';
import { META_CAPI_ACCESS_TOKEN, META_PIXEL_ID, META_TEST_EVENT_CODE } from 'astro:env/server';

// Runs as a Vercel Function; every other page stays static.
export const prerender = false;

const GRAPH_API_VERSION = 'v26.0';
const MAX_BODY_BYTES = 4096;

async function sha256(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

// Meta normalization: email lowercased + trimmed; phone digits only, with country code.
const normalizeEmail = (email: string) => email.trim().toLowerCase();

function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  else if (digits.startsWith('06')) digits = '36' + digits.slice(2);
  else if (!digits.startsWith('36') && digits.length === 9) digits = '36' + digits;
  return digits;
}

const asString = (v: unknown, max = 500) => (typeof v === 'string' ? v.slice(0, max) : '');

// Only our own pages may post here: the browser always sends Origin on a POST, and
// it can't be set from page JS. Doesn't stop scripted abuse (curl can fake it), that
// needs a Vercel Firewall rate-limit rule on this path.
function isSameOrigin(request: Request, url: URL): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return new URL(origin).host === url.host;
  } catch {
    return false;
  }
}

// The consent banner (src/components/shared/CookieConsent.astro) stores the visitor's
// choice in the `cc_cookie` cookie as URI-encoded JSON: { categories: [...] , ... }.
// Checked here as well, so the server never forwards personal data without consent.
function hasMarketingConsent(raw: string | undefined): boolean {
  if (!raw) return false;
  for (const candidate of [raw, safeDecode(raw)]) {
    try {
      const { categories } = JSON.parse(candidate) as { categories?: unknown };
      return Array.isArray(categories) && categories.includes('marketing');
    } catch {
      // try the next form
    }
  }
  return false;
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Receives the Lead event from src/lib/tracking.ts (sendBeacon) and forwards it to the
 * Meta Conversions API. The browser Pixel sends the same event_id, so Meta deduplicates.
 * Valid requests always get 204: tracking must never affect the visitor.
 */
export const POST: APIRoute = async ({ request, url, cookies, clientAddress }) => {
  if (!isSameOrigin(request, url)) return new Response(null, { status: 403 });
  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY_BYTES) {
    return new Response(null, { status: 413 });
  }
  if (!META_PIXEL_ID || !META_CAPI_ACCESS_TOKEN) return new Response(null, { status: 204 });
  if (!hasMarketingConsent(cookies.get('cc_cookie')?.value)) return new Response(null, { status: 204 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 204 });
  }

  const eventId = asString(body.eventId, 100);
  const email = asString(body.email, 320);
  const phone = asString(body.phone, 50);
  if (!eventId) return new Response(null, { status: 204 });

  const userData: Record<string, unknown> = {
    client_ip_address: clientAddress,
    client_user_agent: request.headers.get('user-agent') ?? undefined,
    fbp: cookies.get('_fbp')?.value,
    fbc: cookies.get('_fbc')?.value,
  };
  if (email.includes('@')) userData.em = [await sha256(normalizeEmail(email))];
  const normalizedPhone = normalizePhone(phone);
  if (normalizedPhone.length >= 8) userData.ph = [await sha256(normalizedPhone)];

  // Only URLs of this site are accepted as the event source.
  const sourceUrl = asString(body.eventSourceUrl, 2000);
  const eventSourceUrl = sourceUrl.startsWith(url.origin + '/') ? sourceUrl : undefined;

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: userData,
        custom_data: { content_name: asString(body.formName, 100) },
      },
    ],
    ...(META_TEST_EVENT_CODE ? { test_event_code: META_TEST_EVENT_CODE } : {}),
    // In the body rather than the query string, so it doesn't end up in URL logs.
    access_token: META_CAPI_ACCESS_TOKEN,
  };

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_API_VERSION}/${META_PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) console.error('Meta CAPI error', res.status, await res.text());
  } catch (err) {
    console.error('Meta CAPI request failed', err);
  }

  return new Response(null, { status: 204 });
};

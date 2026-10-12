import type { APIRoute } from 'astro';
import { META_CAPI_ACCESS_TOKEN, META_PIXEL_ID, META_TEST_EVENT_CODE } from 'astro:env/server';

// Runs as a Vercel Function; every other page stays static.
export const prerender = false;

const GRAPH_API_VERSION = 'v26.0';

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

/**
 * Receives the Lead event from src/lib/tracking.ts (sendBeacon) and forwards it to the
 * Meta Conversions API. The browser Pixel sends the same event_id, so Meta deduplicates.
 * Always answers 204: tracking must never affect the visitor.
 */
export const POST: APIRoute = async ({ request, cookies, clientAddress }) => {
  if (!META_PIXEL_ID || !META_CAPI_ACCESS_TOKEN) return new Response(null, { status: 204 });

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

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: asString(body.eventSourceUrl, 2000) || request.headers.get('referer') || undefined,
        user_data: userData,
        custom_data: { content_name: asString(body.formName, 100) },
      },
    ],
    ...(META_TEST_EVENT_CODE ? { test_event_code: META_TEST_EVENT_CODE } : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(META_CAPI_ACCESS_TOKEN)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );
    if (!res.ok) console.error('Meta CAPI error', res.status, await res.text());
  } catch (err) {
    console.error('Meta CAPI request failed', err);
  }

  return new Response(null, { status: 204 });
};

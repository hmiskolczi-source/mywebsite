import { PUBLIC_WEB3FORMS_BOOKING_FORM_ID } from 'astro:env/client';

/**
 * Űrlap beküldése a böngészőből a Web3Formsnak, Kinga Gmail-címére (ugyanaz az űrlap, mint az időpontkérőé).
 * A Web3Forms ingyenes csomagja csak böngészőből fogad beküldést; a kulcs nyilvános, ezért nem titok.
 */
export async function submitToWeb3Forms(subject: string, fields: Record<string, string>) {
  const accessKey = PUBLIC_WEB3FORMS_BOOKING_FORM_ID?.trim();
  if (!accessKey) throw new Error('Az űrlap átmenetileg nem elérhető. Kingát a +36 30 709 4370 számon éred el.');
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: accessKey, subject, from_name: 'kingamiskolczi.com', botcheck: false, ...fields }),
  });
  const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
  if (!response.ok || data?.success !== true) throw new Error('A küldés nem sikerült. Kérjük, próbáld újra.');
}

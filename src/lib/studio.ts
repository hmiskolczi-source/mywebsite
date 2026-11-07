/** A Kinga Stúdió nyilvános végpontja: ide kerül minden jelentkezés a Megkeresések listába. */
export const STUDIO_BOOKING_URL = 'https://kinga-studio-live.bianka20010221.workers.dev/api/booking/requests';

export type StudioServiceId =
  | 'pmu_consultation' | 'pmu_eyebrows' | 'pmu_eyeliner' | 'pmu_lips' | 'pmu_correction'
  | 'makeup' | 'school_basic' | 'school_advanced' | 'school_competition' | 'school_self';

interface StudioRequest {
  name: string;
  email: string;
  phone?: string;
  serviceId: StudioServiceId;
  message?: string;
  preferredDate?: string;
  preferredTime?: 'délelőtt' | 'délután' | 'rugalmas';
}

/**
 * Beküldi a jelentkezést a Stúdióba. Soha nem dob hibát: ha a Stúdió nem érhető el, `false`-t ad,
 * és az e-mailes értesítés ettől függetlenül megy.
 */
export async function sendToStudio(request: StudioRequest): Promise<boolean> {
  try {
    const response = await fetch(STUDIO_BOOKING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: request.name.trim(),
        email: request.email.trim(),
        phone: (request.phone || '').trim(),
        serviceId: request.serviceId,
        preferredDate: request.preferredDate || '',
        preferredTime: request.preferredTime || 'rugalmas',
        message: (request.message || '').trim().slice(0, 2000),
        consent: true,
        idempotencyKey: crypto.randomUUID(),
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

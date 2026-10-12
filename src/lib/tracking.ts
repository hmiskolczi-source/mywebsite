type DataLayerEvent = Record<string, unknown> & {
  event: string;
  eventCallback?: () => void;
  eventTimeout?: number;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
    google_tag_manager?: unknown;
    /** Set by src/components/shared/CookieConsent.astro. */
    CookieConsent?: typeof import('vanilla-cookieconsent');
  }
}

function pushToDataLayer(payload: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Pushes an event and resolves once GTM has fired its tags for it (or after
 * `timeoutMs`), so a page redirect right after doesn't cut the tags off.
 */
function pushAndWait(payload: DataLayerEvent, timeoutMs = 1000): Promise<void> {
  return new Promise((resolve) => {
    // GTM not loaded (dev build, missing ID, ad blocker) → nothing to wait for.
    if (!window.google_tag_manager) {
      pushToDataLayer(payload);
      resolve();
      return;
    }
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };
    pushToDataLayer({ ...payload, eventCallback: finish, eventTimeout: timeoutMs });
    setTimeout(finish, timeoutMs + 100);
  });
}

interface LeadData {
  formName: string;
  email: string;
  phone: string;
}

/**
 * Successful form submission:
 * - dataLayer `generate_lead` → GTM: GA4 `generate_lead` + Meta Pixel `Lead` (eventID = event_id)
 * - Meta Conversions API with the same event_id, so Meta deduplicates the two.
 *   Sent only with marketing consent.
 *
 * Await it before redirecting to /koszonjuk.
 */
export async function trackLead({ formName, email, phone }: LeadData): Promise<void> {
  const eventId = crypto.randomUUID();

  if (window.CookieConsent?.acceptedCategory('marketing')) {
    const body = JSON.stringify({
      eventId,
      formName,
      email,
      phone,
      eventSourceUrl: window.location.href,
    });
    // sendBeacon survives the navigation that follows.
    navigator.sendBeacon('/api/meta-capi', new Blob([body], { type: 'application/json' }));
  }

  await pushAndWait({ event: 'generate_lead', form_name: formName, event_id: eventId });
}

export function showCookiePreferences() {
  window.CookieConsent?.showPreferences();
}

export function trackContactClick(method: 'phone' | 'email' | 'instagram' | 'facebook') {
  pushToDataLayer({ event: 'contact_click', method });
}

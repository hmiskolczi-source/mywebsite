# Hovorka-Miskolczi Kinga weboldal

Astro (statikus) + React islandek, Vercelen. Teljesítmény-szabályok: [PERFORMANCE.md](PERFORMANCE.md).

## Futtatás lokálisan

```bash
npm install
cp .env.example .env   # értékek: lásd lent
npm run dev
```

## Környezeti változók

| Változó | Kötelező | Mire |
|---|---|---|
| `PUBLIC_GTM_ID` | igen (élesben) | Google Tag Manager konténer, pl. `GTM-XXXXXXX`. Csak production buildben töltődik be. |
| `META_PIXEL_ID` | CAPI-hoz | Meta Pixel (adatforrás) ID |
| `META_CAPI_ACCESS_TOKEN` | CAPI-hoz | Events Manager → Beállítások → Conversions API → token. **Titkos.** |
| `META_TEST_EVENT_CODE` | nem | Csak teszteléshez (Events Manager → Események tesztelése). Élesben üres. |

Vercelen: Project → Settings → Environment Variables (Production + Preview), utána redeploy.

## Mérés: hogyan működik

- **Süti-hozzájárulás:** [orestbida/cookieconsent](https://cookieconsent.orestbida.com/) (`src/components/shared/CookieConsent.astro`).
  Kategóriák: `analytics` → GA4, `marketing` → Meta Pixel + CAPI. A választás Consent Mode v2-n keresztül jut el
  a GTM-hez (`gtag('consent','update', …)` + `consent_update` dataLayer esemény). Alapból minden `denied`
  (`src/layouts/Layout.astro`).
- **Lead esemény:** mind a 4 űrlap sikeres beküldésekor `trackLead()` (`src/lib/tracking.ts`):
  - `dataLayer.push({ event: 'generate_lead', form_name, event_id })`
  - marketing hozzájárulás esetén `POST /api/meta-capi` (`src/pages/api/meta-capi.ts`, Vercel Function), ami a
    Meta Conversions API-nak küldi a `Lead` eseményt ugyanazzal az `event_id`-val, hashelt e-maillel és telefonnal.
  - `form_name` értékek: `home`, `sminktetovalas`, `sminkkepzes`, `sminkkepzes-kurzus`.
- **Telefon kattintás:** `dataLayer.push({ event: 'contact_click', method: 'phone' })` (Footer).

## GTM konténer beállítása

Változók (Data Layer Variable): `DLV - event_id` → `event_id`, `DLV - form_name` → `form_name`, `DLV - method` → `method`.

Triggerek (Custom Event): `generate_lead`, `contact_click`.

Tagek:

1. **Google tag** (GA4 Measurement ID `G-…`), trigger: Initialization – All Pages.
   Consent: beépített consent ellenőrzés (`analytics_storage`).
2. **GA4 Event** `generate_lead`, paraméter `form_name = {{DLV - form_name}}`, trigger: `generate_lead`.
   GA4-ben jelöld kulcseseménynek.
3. **GA4 Event** `contact_click`, paraméter `method = {{DLV - method}}`, trigger: `contact_click`.
4. **Meta Pixel** (Community Template Gallery: „Facebook Pixel” by facebookarchive), Pixel ID, esemény `PageView`,
   trigger: **`consent_update`** (Custom Event), consent: további hozzájárulás szükséges: `ad_storage`.
   A `consent_update` minden oldalbetöltéskor lefut, ha már van mentett döntés, és az első elfogadáskor is,
   így a PageView pontosan egyszer tüzel, és csak hozzájárulás után.
5. **Meta Pixel** `Lead`, **Event ID: `{{DLV - event_id}}`** (ez kell a CAPI deduplikációhoz), trigger: `generate_lead`,
   consent: `ad_storage`.

A GA4 Google tagnek elég az All Pages trigger: a Consent Mode a hozzájárulás után magától elküldi a page_view-t.

## Tesztelés

- GTM Preview (Tag Assistant): a süti elfogadása után küldj be egy űrlapot, és nézd meg, hogy lefut-e a
  `generate_lead` → GA4 + Meta Lead.
- GA4 → Admin → DebugView.
- Meta Events Manager → Események tesztelése: állítsd be a `META_TEST_EVENT_CODE`-ot, és a Lead eseménynek
  böngészőből és szerverről is meg kell jelennie, „Deduplikálva” jelöléssel. Utána töröld a teszt kódot.

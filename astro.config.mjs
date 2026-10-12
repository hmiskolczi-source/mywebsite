import { readFileSync } from 'node:fs';
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// The adapter writes its own Build Output config, which replaces vercel.json's
// `images` block — pass it through so /_vercel/image (src/lib/imageOpt.ts) keeps working.
const vercelJson = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf-8'));

// https://astro.build/config
export default defineConfig({
  // Pages stay prerendered (static); only routes with `prerender = false`
  // (src/pages/api/meta-capi.ts) run as Vercel Functions.
  adapter: vercel({ imagesConfig: vercelJson.images }),
  integrations: [react()],
  image: {
    domains: ['bgumoxbjyuzc6ytp.public.blob.vercel-storage.com'],
  },
  env: {
    schema: {
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      META_PIXEL_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      META_CAPI_ACCESS_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      META_TEST_EVENT_CODE: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

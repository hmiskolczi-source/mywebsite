import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    domains: ['bgumoxbjyuzc6ytp.public.blob.vercel-storage.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

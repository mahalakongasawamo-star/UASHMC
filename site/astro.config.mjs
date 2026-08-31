// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The domain named in docs/uashmc-design-guidelines.md §1 ("uashmc.com.ph —
  // the hospital's public website"). Required for canonical URLs and the
  // sitemap below. Update this the moment the real domain is confirmed —
  // nothing here should ship pointing at a domain UASHMC hasn't actually taken.
  site: 'https://uashmc.com.ph',

  integrations: [
    react(),
    sitemap({
      // Keep the dev-only component preview (already noindexed on the page
      // itself) out of the sitemap too, rather than relying on robots alone.
      filter: (page) => !page.includes('/doctors/gallery-preview'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
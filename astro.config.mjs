// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxsantana92.github.io',
  base: '/aguafertil',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
        prefixDefaultLocale: true // Recomendado para GitHub Pages
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
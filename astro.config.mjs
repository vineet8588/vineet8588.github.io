// Copyright © 2026 Vineet Yadav. All rights reserved.
// Portfolio source: https://github.com/vineet8588
// Original work — do not copy, clone-and-republish, or pass off as your own.
// Contact vineetyadav8588@gmail.com for permission to reuse.
// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vineet8588.github.io',
  base: '/',

  integrations: [
    react(),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
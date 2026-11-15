import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: { shikiConfig: { theme: "github-dark-high-contrast" } },
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [mdx(), sitemap()],
  site: 'https://cursoreact.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});
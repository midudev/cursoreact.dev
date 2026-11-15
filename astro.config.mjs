import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import codeTheme from "./src/themes/react-code.mjs";
import codeBlocks from "./src/themes/code-blocks.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: { shikiConfig: { theme: codeTheme, transformers: [codeBlocks] } },
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [mdx(), sitemap()],
  site: 'https://cursoreact.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});
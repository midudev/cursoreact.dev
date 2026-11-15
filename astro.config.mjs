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
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes("/transcripciones/") })],
  site: 'https://cursoreact.dev',
  vite: {
    plugins: [tailwindcss(), {
      name: 'local-demo-index',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && /^\/demos\/[^/]+\/?(?:\?.*)?$/.test(req.url)) {
            const url = new URL(req.url, 'http://localhost')
            req.url = url.pathname.replace(/\/?$/, '/index.html') + url.search
          }
          next()
        })
      }
    }]
  }
});
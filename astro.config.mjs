import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 250
      }
    }
  }
});


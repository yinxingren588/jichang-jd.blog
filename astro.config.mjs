import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichang-jd.blog',
  server: {
    port: 8899,
    host: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
  ],
});

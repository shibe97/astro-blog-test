// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60,
      bypassToken: 'astro-isr-bypass',
      exclude: ['/draft'],
    },
  }),
});

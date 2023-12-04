import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [svelte()],
  adapter: cloudflare(),
  experimental: {
    devOverlay: true,
  }
});
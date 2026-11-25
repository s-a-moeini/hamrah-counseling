import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://s-a-moeini.github.io',
  base: '/hamrah-counseling',
  integrations: [sitemap()],
});
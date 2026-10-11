// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://terencelu1.github.io',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // 產生 sitemap-index.xml，並標出中英對應頁（hreflang）
    sitemap({
      i18n: { defaultLocale: 'zh', locales: { zh: 'zh-Hant-TW', en: 'en' } },
    }),
  ],
});

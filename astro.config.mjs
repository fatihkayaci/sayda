// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const site = 'https://www.sayda.com.tr';

// lastmod for pages that have a real date: news and blog posts (their publish date).
/** @param {string} file @param {string} base @returns {[string, string][]} */
const dated = (file, base) =>
  JSON.parse(readFileSync(new URL(file, import.meta.url), 'utf-8')).map(
    (/** @type {{ slug: string; date: string }} */ item) => [`${site}${base}/${item.slug}/`, item.date]
  );
const lastmod = new Map([...dated('./src/data/haberler.json', '/haberler'), ...dated('./src/data/blog.json', '/blog')]);

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('.aspx'),
      serialize(item) {
        const date = lastmod.get(item.url);
        return date ? { ...item, lastmod: new Date(date).toISOString() } : item;
      },
    }),
  ],
});

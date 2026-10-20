// @ts-check
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
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

/** @param {string} dir @returns {string[]} */
const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
  });

// Pages are served from /path/ (canonical and sitemap use that form); the server 301s /path to /path/.
// Source links are written without the slash, so add it at build time and save crawlers a redirect per link.
/** @returns {import('astro').AstroIntegration} */
const trailingSlashLinks = () => ({
  name: 'trailing-slash-links',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const file of htmlFiles(root)) {
        const html = readFileSync(file, 'utf-8');
        const fixed = html.replace(/href="(\/[^"?#]*[^/"?#])([?#][^"]*)?"/g, (match, path, rest = '') =>
          existsSync(join(root, decodeURI(path), 'index.html')) ? `href="${path}/${rest}"` : match
        );
        if (fixed !== html) writeFileSync(file, fixed);
      }
    },
  },
});

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
    trailingSlashLinks(),
  ],
});

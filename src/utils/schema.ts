// schema.org JSON-LD builders shared by pages (passed to Layout's jsonLd prop).
import site from '../data/site.json';

const abs = (path: string) => new URL(path, site.url).toString();
/** Absolute URL of a page in its served (and canonical) form: with a trailing slash. */
export const pageUrl = (path: string) => abs(path.endsWith('/') ? path : `${path}/`);
const organization = { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url };

/** Breadcrumb trail; the last item may omit href (the current page). */
export function breadcrumbLd(items: { label: string; href?: string }[], currentPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: pageUrl(item.href ?? currentPath),
    })),
  };
}

export function articleLd(opts: {
  type: 'NewsArticle' | 'BlogPosting';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type,
    headline: opts.headline,
    description: opts.description,
    image: [abs(opts.image)],
    datePublished: opts.datePublished,
    mainEntityOfPage: pageUrl(opts.path),
    author: organization,
    publisher: { ...organization, logo: { '@type': 'ImageObject', url: abs(site.logo) } },
  };
}

export function serviceLd(opts: { name: string; description: string; path: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: pageUrl(opts.path),
    ...(opts.image ? { image: abs(opts.image) } : {}),
    provider: organization,
    areaServed: { '@type': 'Country', name: 'Türkiye' },
  };
}

export function faqLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

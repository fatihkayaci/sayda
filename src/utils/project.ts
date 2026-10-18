export function shortProjectTitle(name: string): string {
  return name.replace(/^Referans\s+/, '').replace(/\s+Projesi$/, '');
}

// Legacy names are often ALL CAPS ("CAVİAR BAR VE RESTAURANT PROJESİ"); show those in Turkish title case.
// Names that already have lowercase letters are left as written.
const KEEP_UPPER = new Set(['AVM', 'GYO', 'GMYO', 'M1', 'ŞTİ', 'A.Ş.', 'LTD.']);
const KEEP_LOWER = new Set(['ve', 'ile', 'de', 'da']);
// English words in legacy names, where a Turkish lowercase would turn I into ı
const FOREIGN: Record<string, string> = { RESIDANCE: 'Residance', RESIDENCE: 'Residence', RESORT: 'Resort', CITY: 'City', PRINT: 'Print' };
export function projectDisplayName(name: string): string {
  if (name !== name.toLocaleUpperCase('tr')) return name;
  return name
    .split(/(\s+|[-/()])/)
    .map((raw, i) => {
      if (FOREIGN[raw]) return FOREIGN[raw];
      const word = raw.toLocaleLowerCase('tr');
      if (KEEP_UPPER.has(raw)) return raw;
      if (i > 0 && KEEP_LOWER.has(word)) return word;
      return word.charAt(0).toLocaleUpperCase('tr') + word.slice(1);
    })
    .join('');
}

export function statusLabel(status: string): string {
  return status === 'devam-eden' ? 'DEVAM EDEN' : 'TAMAMLANDI';
}

export function formatDateRange(startDate: string, endDate: string): string {
  if (startDate && endDate) return `${startDate} — ${endDate}`;
  if (startDate) return `${startDate} — Devam Ediyor`;
  return '';
}

// Covers found for the redesign (`*-cover.webp`) come with -640 / -960 copies; older photos don't.
export function hasCoverVariants(image: string): boolean {
  return image.endsWith('-cover.webp');
}

export function splitLocation(location: string): { short: string; full: string } {
  const parts = location.split(' - ').map((part) => part.trim());
  if (parts.length === 2) {
    return { short: parts[0], full: `${parts[0]} / ${parts[1]}` };
  }
  return { short: location, full: location };
}

interface SeoProjectFields {
  name: string;
  location: string;
  works?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export function projectSeoTitle(project: SeoProjectFields): string {
  if (project.seoTitle) return project.seoTitle;
  const title = shortProjectTitle(project.name);
  return `${title} İnce İşler Projesi | Sayda İnşaat`;
}

export function projectSeoDescription(project: SeoProjectFields): string {
  if (project.seoDescription) return project.seoDescription;
  const title = shortProjectTitle(project.name);
  const { full } = splitLocation(project.location);
  const workSample = project.works?.length ? project.works.slice(0, 3).join(', ') : 'ince işler';
  return `${title} projesinde (${full}) ${workSample} uygulamalarını Sayda İnşaat yürütüyor.`;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = Math.floor(((s - 1) / 2147483646) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function pickRelatedProjects<T extends { slug: string; image?: string }>(
  projects: T[],
  currentSlug: string,
  count = 3
): T[] {
  const others = projects.filter((project) => project.slug !== currentSlug);
  const withImage = others.filter((project) => project.image);
  const withoutImage = others.filter((project) => !project.image);
  const seed = hashString(currentSlug);
  const ordered = [...seededShuffle(withImage, seed), ...seededShuffle(withoutImage, seed + 1)];
  return ordered.slice(0, count);
}

export function projectImageAlt(project: SeoProjectFields, index?: number): string {
  const title = shortProjectTitle(project.name);
  const { full } = splitLocation(project.location);
  const workSample = project.works?.length ? project.works.slice(0, 2).join(' ve ') : 'ince işler';
  const base = `${title} projesi, ${full} - Sayda İnşaat ${workSample} uygulaması`;
  return index === undefined ? base : `${base} - Fotoğraf ${index + 1}`;
}

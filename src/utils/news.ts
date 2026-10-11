export const newsCategories: { key: string; label: string }[] = [
  { key: 'teslim', label: 'Teslim & Açılış' },
  { key: 'devam-eden', label: 'Devam Eden İşler' },
  { key: 'satis-ofisi', label: 'Satış Ofisi' },
  { key: 'kurumsal', label: 'Kurumsal' },
];

export const newsCategoryLabel: Record<string, string> = Object.fromEntries(
  newsCategories.map((c) => [c.key, c.label])
);

const dateFormatter = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

export function formatNewsDate(date: string): string {
  return dateFormatter.format(new Date(date));
}

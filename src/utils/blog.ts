export const blogCategories: { key: string; label: string }[] = [
  { key: 'kentsel-donusum', label: 'Kentsel Dönüşüm' },
  { key: 'kat-karsiligi', label: 'Kat Karşılığı' },
];

export const blogCategoryLabel: Record<string, string> = Object.fromEntries(
  blogCategories.map((c) => [c.key, c.label])
);

// Post bodies live in `blog.json` as blocks; a post may override its reading time with `readMinutes`.
export type BlogBlock =
  | { type: 'lead' | 'p' | 'heading' | 'note'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'steps'; items: { title?: string; text: string }[] };

const blockText = (block: BlogBlock) =>
  block.type === 'steps' ? block.items.map((i) => `${i.title ?? ''} ${i.text}`).join(' ') : block.text;

export function readMinutes(post: { blocks: unknown[]; readMinutes?: number }): number {
  if (post.readMinutes) return post.readMinutes;
  const words = (post.blocks as BlogBlock[]).map(blockText).join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

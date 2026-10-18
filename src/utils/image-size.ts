import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Reads the pixel size of a WebP in /public at build time, so layouts can avoid
// stretching small photos (many old project photos are only 222–765px wide).
const cache = new Map<string, { width: number; height: number } | null>();

export function imageSize(src: string): { width: number; height: number } | null {
  if (cache.has(src)) return cache.get(src)!;
  let size: { width: number; height: number } | null = null;
  try {
    const buf = readFileSync(join(process.cwd(), 'public', src));
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8 ') {
      size = { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    } else if (chunk === 'VP8L') {
      const bits = buf.readUInt32LE(21);
      size = { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    } else if (chunk === 'VP8X') {
      size = { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
    }
  } catch {
    size = null;
  }
  cache.set(src, size);
  return size;
}

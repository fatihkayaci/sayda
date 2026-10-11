// Smaller copies live next to the original as `<name>-<width>.webp` (made once, offline).
export function variant(src: string, width: number): string {
  return src.replace(/\.webp$/, `-${width}.webp`);
}

export function srcset(src: string, smallWidth: number, fullWidth: number): string {
  return `${variant(src, smallWidth)} ${smallWidth}w, ${src} ${fullWidth}w`;
}

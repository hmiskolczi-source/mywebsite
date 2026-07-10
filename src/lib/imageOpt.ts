/// <reference types="vite/client" />
/**
 * Serves remote blob-storage images through Vercel's on-the-fly image
 * optimizer (/_vercel/image) so the browser downloads a correctly sized
 * file instead of the full-resolution original. The original files are
 * never modified and rendering (crop, object-fit, hover effects) is
 * unchanged — only the download size shrinks.
 *
 * Widths here must match "sizes" in vercel.json.
 */
const WIDTHS = [384, 640, 828, 1080, 1600];
const OPTIMIZABLE_HOST = '.public.blob.vercel-storage.com';
const QUALITY = 75;

function vercelImageUrl(src: string, width: number): string {
  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${QUALITY}`;
}

/**
 * Spread the result onto an <img>: `<img {...imgProps(url, sizes)} ... />`.
 * `sizes` tells the browser how wide the image renders (e.g.
 * "(min-width: 1024px) 42vw, 100vw") so it picks the smallest fitting file.
 * In local dev (no Vercel optimizer available) the raw URL is used.
 */
export function imgProps(src: string, sizes: string) {
  if (import.meta.env.DEV || !src.includes(OPTIMIZABLE_HOST)) {
    return { src };
  }
  return {
    src: vercelImageUrl(src, 1080),
    srcSet: WIDTHS.map((w) => `${vercelImageUrl(src, w)} ${w}w`).join(', '),
    sizes,
  };
}

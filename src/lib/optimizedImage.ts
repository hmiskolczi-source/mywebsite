/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Build-time only: relies on astro:assets' Sharp-backed image service.
// Only import this from .astro frontmatter, never from a React (.tsx) component.
import { getImage } from 'astro:assets';
import type { OptimizedImage } from '../types';

interface OptimizeRemoteImageOptions {
  /** Target rendered width (px) at the largest breakpoint; drives the responsive srcset. */
  width: number;
  layout?: 'constrained' | 'fixed' | 'full-width';
  /** Marks the image as the LCP candidate: eager + fetchpriority=high + sync decode. */
  priority?: boolean;
  format?: 'avif' | 'webp';
}

export async function optimizeRemoteImage(
  src: string,
  { width, layout = 'constrained', priority = false, format = 'avif' }: OptimizeRemoteImageOptions
): Promise<OptimizedImage> {
  const result = await getImage({
    src,
    inferSize: true,
    layout,
    width,
    priority,
    format,
  });

  return {
    src: result.src,
    srcSet: result.srcSet.attribute || undefined,
    width: Number(result.attributes.width),
    height: Number(result.attributes.height),
    sizes: result.attributes.sizes,
    loading: result.attributes.loading,
    decoding: result.attributes.decoding,
    fetchPriority: result.attributes.fetchpriority,
  };
}

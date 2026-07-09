/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import GalleryCarousel from '../shared/GalleryCarousel';

const galleryImages = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  src: `https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/sminktetovalas/gallery/${i + 1}.webp`,
  alt: `Sminktetoválás munka ${i + 1}`,
}));

export default function Gallery() {
  return (
    <GalleryCarousel
      images={galleryImages}
      label="Galéria"
      title="Munkáim"
      subtitle="Természetes, időtálló eredmények: válogatás az elmúlt évek sminktetoválás munkáiból."
    />
  );
}

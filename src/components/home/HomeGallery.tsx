/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/${i + 1}.webp`,
  alt: `Sminktetoválás munka ${i + 1}`,
}));

// 5 visible slots: center is largest and on top, each step outward is
// smaller (via GPU-composited scale, not height, to avoid reflow jank),
// sits behind its neighbor, and the outermost bleed off the edges.
const SLOT_BY_OFFSET: Record<number, { left: string; scale: number; z: number }> = {
  [-2]: { left: '9%', scale: 0.64, z: 10 },
  [-1]: { left: '28%', scale: 0.82, z: 20 },
  [0]: { left: '50%', scale: 1, z: 30 },
  [1]: { left: '72%', scale: 0.82, z: 20 },
  [2]: { left: '91%', scale: 0.64, z: 10 },
};

export default function HomeGallery() {
  const [index, setIndex] = useState(0);

  const count = galleryImages.length;

  const handlePrev = () => setIndex((i) => (i - 1 + count) % count);
  const handleNext = () => setIndex((i) => (i + 1) % count);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden py-12 sm:py-16"
        >
          {/* Header */}
          <div className="text-center space-y-3 px-6 mb-10 sm:mb-14">
            <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Galéria</span>
            <h2 className="font-serif-lux text-4xl sm:text-5xl font-light text-charcoal-800 tracking-tight">
              Munkáim
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700/70 font-light max-w-xl mx-auto">
              Minden projekt egyedi: az arc arányai, a bőr típusa és a személyes ízlés tökéletes kombinációja.
            </p>
          </div>

          {/* Carousel — all images stay mounted (hidden ones invisible) so
              navigation never re-fetches/decodes and transitions stay smooth */}
          <div className="relative h-[300px] sm:h-[380px] md:h-[440px]">
            {galleryImages.map((image, i) => {
              const raw = (i - index + count) % count;
              const offset = raw > count / 2 ? raw - count : raw;
              const slot = SLOT_BY_OFFSET[offset];
              const isCenter = offset === 0;
              const target = slot ?? {
                left: offset < 0 ? '-20%' : '120%',
                scale: 0.5,
                z: 0,
              };
              return (
                <motion.div
                  key={image.id}
                  initial={false}
                  animate={{
                    opacity: slot ? 1 : 0,
                    scale: target.scale,
                    x: '-50%',
                    y: '-50%',
                    left: target.left,
                    zIndex: target.z,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => slot && !isCenter && setIndex(i)}
                  className={`absolute top-1/2 h-full aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal-50 ${
                    isCenter || !slot ? '' : 'cursor-pointer'
                  }`}
                  style={{
                    boxShadow: isCenter
                      ? '0 30px 70px -10px rgba(28, 22, 20, 0.6)'
                      : '0 22px 50px -10px rgba(28, 22, 20, 0.45)',
                    willChange: 'transform',
                    pointerEvents: slot ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    draggable={false}
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12">
            <button
              onClick={handlePrev}
              aria-label="Előző kép"
              className="w-10 h-10 rounded-full border border-charcoal-800/40 flex items-center justify-center text-charcoal-800 hover:bg-charcoal-800 hover:text-white transition-colors duration-300"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              aria-label="Következő kép"
              className="w-10 h-10 rounded-full border border-charcoal-800/40 flex items-center justify-center text-charcoal-800 hover:bg-charcoal-800 hover:text-white transition-colors duration-300"
            >
              &rarr;
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

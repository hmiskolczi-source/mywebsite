/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/${i + 1}.webp`,
  alt: `Sminktetoválás munka ${i + 1}`,
}));

// 5 visible slots: center is tallest and on top, each step outward is
// shorter, sits behind its neighbor, and the outermost bleed off the edges.
const SLOTS = [
  { offset: -2, left: '9%', height: '64%', z: 10 },
  { offset: -1, left: '28%', height: '82%', z: 20 },
  { offset: 0, left: '50%', height: '100%', z: 30 },
  { offset: 1, left: '72%', height: '82%', z: 20 },
  { offset: 2, left: '91%', height: '64%', z: 10 },
];

export default function HomeGallery() {
  const [index, setIndex] = useState(0);

  const count = galleryImages.length;
  const imageAt = (offset: number) => galleryImages[(index + offset + count * 100) % count];

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

          {/* Carousel */}
          <div className="relative h-[300px] sm:h-[380px] md:h-[440px]">
            <AnimatePresence initial={false}>
              {SLOTS.map((slot) => {
                const image = imageAt(slot.offset);
                const isCenter = slot.offset === 0;
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.7, x: '-50%', y: '-50%' }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: '-50%',
                      y: '-50%',
                      left: slot.left,
                      height: slot.height,
                      zIndex: slot.z,
                    }}
                    exit={{ opacity: 0, scale: 0.7, x: '-50%', y: '-50%' }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => !isCenter && setIndex((index + slot.offset + count) % count)}
                    className={`absolute top-1/2 aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal-50 ${
                      isCenter ? '' : 'cursor-pointer'
                    }`}
                    style={{
                      boxShadow: isCenter
                        ? '0 25px 60px -12px rgba(28, 22, 20, 0.45)'
                        : '0 18px 40px -12px rgba(28, 22, 20, 0.3)',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      draggable={false}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
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

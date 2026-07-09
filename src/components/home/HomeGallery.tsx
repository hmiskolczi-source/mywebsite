/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/1.webp',
    alt: 'Sminktetoválás munka 1',
  },
  {
    id: 2,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/2.webp',
    alt: 'Sminktetoválás munka 2',
  },
  {
    id: 3,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/3.webp',
    alt: 'Sminktetoválás munka 3',
  },
  {
    id: 4,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/4.webp',
    alt: 'Sminktetoválás munka 4',
  },
  {
    id: 5,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/5.webp',
    alt: 'Sminktetoválás munka 5',
  },
  {
    id: 6,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/6.webp',
    alt: 'Sminktetoválás munka 6',
  },
  {
    id: 7,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/7.webp',
    alt: 'Sminktetoválás munka 7',
  },
  {
    id: 8,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/8.webp',
    alt: 'Sminktetoválás munka 8',
  },
  {
    id: 9,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/9.webp',
    alt: 'Sminktetoválás munka 9',
  },
  {
    id: 10,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/10.webp',
    alt: 'Sminktetoválás munka 10',
  },
  {
    id: 11,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/11.webp',
    alt: 'Sminktetoválás munka 11',
  },
  {
    id: 12,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/12.webp',
    alt: 'Sminktetoválás munka 12',
  },
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getPrevIndex = () => (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
  const getNextIndex = () => (selectedIndex + 1) % galleryImages.length;

  const prevImage = galleryImages[getPrevIndex()];
  const currentImage = galleryImages[selectedIndex];
  const nextImage = galleryImages[getNextIndex()];

  const handlePrev = () => setSelectedIndex(getPrevIndex());
  const handleNext = () => setSelectedIndex(getNextIndex());

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Munkaportfólió</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Kiváló munkáim
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700/70 font-light max-w-2xl mx-auto">
            Minden projekt egyedi: az arc arányok, a bőr típusa, és a személyes ízlés tökéletes kombinációja.
          </p>
        </div>

        {/* Carousel Gallery */}
        <div className="space-y-12">
          {/* Main Carousel - Overlapping Images */}
          <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-visible">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {[getPrevIndex(), selectedIndex, getNextIndex()].map((idx, position) => {
                  const image = galleryImages[idx];
                  const isCenter = position === 1;
                  const isLeft = position === 0;

                  let leftPos, zIndex, scale, opacity, imageScale;

                  if (isLeft) {
                    leftPos = 0;
                    zIndex = 1;
                    scale = 0.7;
                    opacity = 0.6;
                    imageScale = 0.85;
                  } else if (isCenter) {
                    leftPos = '50%';
                    zIndex = 10;
                    scale = 1;
                    opacity = 1;
                    imageScale = 1;
                  } else {
                    leftPos = 'auto';
                    zIndex = 1;
                    scale = 0.7;
                    opacity = 0.6;
                    imageScale = 0.85;
                  }

                  return (
                    <motion.div
                      key={`img-${idx}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity,
                        scale,
                        ...(isLeft ? { left: leftPos } : {}),
                        ...(isCenter ? { left: leftPos, x: '-50%' } : { right: leftPos, x: '50%' }),
                        zIndex
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute h-56 sm:h-64 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 ${
                        isCenter ? 'border-charcoal-800 shadow-2xl' : 'border-charcoal-200/50'
                      }`}
                      style={{
                        width: isCenter ? '280px' : '200px',
                        ...(isCenter ? {} : {}),
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        style={{ transform: `scale(${imageScale})`, transformOrigin: 'center' }}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-800 flex items-center justify-center hover:bg-charcoal-800 transition-colors"
            >
              <span className="text-charcoal-800 hover:text-white text-lg">←</span>
            </motion.button>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-800 flex items-center justify-center hover:bg-charcoal-800 transition-colors"
            >
              <span className="text-charcoal-800 hover:text-white text-lg">→</span>
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}

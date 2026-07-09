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
        <div className="space-y-10">
          {/* Main Carousel */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] flex items-center justify-center px-0 sm:px-8 md:px-12">
            <div className="relative w-full h-full flex items-center justify-center perspective">
              <AnimatePresence mode="wait">
                {/* Left Image */}
                <motion.div
                  key={`prev-${getPrevIndex()}`}
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  animate={{ opacity: 0.4, x: -80, scale: 0.7, zIndex: 1 }}
                  exit={{ opacity: 0, x: 100, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-32 sm:w-40 md:w-48 h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden border-2 border-charcoal-200 left-0"
                >
                  <img
                    src={prevImage.src}
                    alt={prevImage.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Center Image */}
                <motion.div
                  key={`center-${selectedIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, zIndex: 10 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-40 sm:w-56 md:w-72 h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden border-4 border-charcoal-800 shadow-2xl"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Right Image */}
                <motion.div
                  key={`next-${getNextIndex()}`}
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 0.4, x: 80, scale: 0.7, zIndex: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-32 sm:w-40 md:w-48 h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden border-2 border-charcoal-200 right-0"
                >
                  <img
                    src={nextImage.src}
                    alt={nextImage.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-800 flex items-center justify-center hover:bg-charcoal-800 transition-colors"
            >
              <span className="text-charcoal-800 group-hover:text-white text-lg sm:text-xl">←</span>
            </motion.button>

            <div className="text-center">
              <p className="text-xs sm:text-sm text-charcoal-600/70 font-light uppercase tracking-luxury">
                {selectedIndex + 1} / {galleryImages.length}
              </p>
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-800 flex items-center justify-center hover:bg-charcoal-800 transition-colors"
            >
              <span className="text-charcoal-800 group-hover:text-white text-lg sm:text-xl">→</span>
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}

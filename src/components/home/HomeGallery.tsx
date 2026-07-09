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
    alt: 'Portfolio work 1',
  },
  {
    id: 2,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/2.webp',
    alt: 'Portfolio work 2',
  },
  {
    id: 3,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/3.webp',
    alt: 'Portfolio work 3',
  },
  {
    id: 4,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/4.webp',
    alt: 'Portfolio work 4',
  },
  {
    id: 5,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/5.webp',
    alt: 'Portfolio work 5',
  },
  {
    id: 6,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/6.webp',
    alt: 'Portfolio work 6',
  },
  {
    id: 7,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/7.webp',
    alt: 'Portfolio work 7',
  },
  {
    id: 8,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/8.webp',
    alt: 'Portfolio work 8',
  },
  {
    id: 9,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/9.webp',
    alt: 'Portfolio work 9',
  },
  {
    id: 10,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/10.webp',
    alt: 'Portfolio work 10',
  },
  {
    id: 11,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/11.webp',
    alt: 'Portfolio work 11',
  },
  {
    id: 12,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/12.webp',
    alt: 'Portfolio work 12',
  },
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getImageByOffset = (offset: number) => {
    return galleryImages[(selectedIndex + offset + galleryImages.length) % galleryImages.length];
  };

  const handlePrev = () => setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % galleryImages.length);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Blurred Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/5 via-gold-500/5 to-charcoal-800/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Card Header */}
          <div className="px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 md:pb-12 text-center space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase block">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800">
              My Visual Diary
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
              See the world through my lens: adventures in photos and videos
            </p>
          </div>

          {/* Gallery Carousel */}
          <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-16">
            {/* Carousel Container */}
            <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {/* Left Image (offset -2) */}
                  <motion.div
                    key={`left-${getImageByOffset(-2).id}`}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 0.4, x: 0, zIndex: 2 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                    className="absolute h-40 sm:h-52 md:h-64 w-28 sm:w-36 md:w-44 left-0 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={getImageByOffset(-2).src}
                      alt={getImageByOffset(-2).alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Left-Center Image (offset -1) */}
                  <motion.div
                    key={`left-center-${getImageByOffset(-1).id}`}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 0.6, x: 0, scale: 0.85, zIndex: 3 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="absolute h-48 sm:h-60 md:h-72 w-32 sm:w-40 md:w-52 left-8 sm:left-12 md:left-16 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={getImageByOffset(-1).src}
                      alt={getImageByOffset(-1).alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Center Image */}
                  <motion.div
                    key={`center-${selectedIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 10 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="absolute h-56 sm:h-72 md:h-80 w-40 sm:w-52 md:w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img
                      src={getImageByOffset(0).src}
                      alt={getImageByOffset(0).alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Right-Center Image (offset +1) */}
                  <motion.div
                    key={`right-center-${getImageByOffset(1).id}`}
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 0.6, x: 0, scale: 0.85, zIndex: 3 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="absolute h-48 sm:h-60 md:h-72 w-32 sm:w-40 md:w-52 right-8 sm:right-12 md:right-16 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={getImageByOffset(1).src}
                      alt={getImageByOffset(1).alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Right Image (offset +2) */}
                  <motion.div
                    key={`right-${getImageByOffset(2).id}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.4, x: 0, zIndex: 2 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.6 }}
                    className="absolute h-40 sm:h-52 md:h-64 w-28 sm:w-36 md:w-44 right-0 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={getImageByOffset(2).src}
                      alt={getImageByOffset(2).alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-14">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.12, backgroundColor: '#2D2B2A', color: '#fff' }}
                whileTap={{ scale: 0.92 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-800 flex items-center justify-center text-charcoal-800 transition-all duration-300 hover:shadow-lg"
              >
                <span className="text-xl">←</span>
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.12, backgroundColor: '#2D2B2A', color: '#fff' }}
                whileTap={{ scale: 0.92 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-800 flex items-center justify-center text-charcoal-800 transition-all duration-300 hover:shadow-lg"
              >
                <span className="text-xl">→</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

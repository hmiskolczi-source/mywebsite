/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1487412992651-b8d4b53f0bb1?w=800&h=600&fit=crop',
    alt: 'Sminktetoválás munka 1',
    title: 'Egyedi szín harmónia',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    alt: 'Sminktetoválás munka 2',
    title: 'Precíziós vonalas technika',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    alt: 'Sminktetoválás munka 3',
    title: 'Természetes árnyalatok',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
    alt: 'Sminktetoválás munka 4',
    title: 'Klasszikus elegancia',
  },
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectImage = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedImage = galleryImages[selectedIndex];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Munkaportfólió</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Kiváló munkáim, <br /><span className="italic">melyekre büszke vagyok.</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl">
            Minden projekt egyedi: az arc arányok, a bőr típusa, és a személyes ízlés tökéletes kombinációja.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="space-y-8">
          {/* Main Image */}
          <motion.div
            className="relative overflow-hidden bg-charcoal-50 aspect-video rounded-lg border border-charcoal-800/10"
            layout
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Image Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-900 to-transparent p-6 lg:p-8">
              <p className="text-lg sm:text-xl text-white font-light">{selectedImage.title}</p>
            </div>
          </motion.div>

          {/* Preview Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => handleSelectImage(index)}
                className={`relative shrink-0 md:shrink cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === selectedIndex
                    ? 'border-gold-500 shadow-lg'
                    : 'border-charcoal-200 hover:border-charcoal-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Thumbnail Image */}
                <div className="w-24 h-24 md:w-full md:aspect-square overflow-hidden bg-charcoal-50">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      index === selectedIndex ? 'scale-100 brightness-100' : 'scale-95 brightness-75 hover:brightness-90'
                    }`}
                  />
                </div>

                {/* Active Indicator */}
                {index === selectedIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border-2 border-gold-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Navigation Info */}
          <div className="flex items-center justify-between pt-4 md:pt-8 border-t border-charcoal-800/10">
            <p className="text-xs text-charcoal-600/60 font-light uppercase tracking-luxury">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
            <p className="text-xs text-charcoal-600/60 font-light italic">
              Kattintson egy képre a megtekintéshez
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

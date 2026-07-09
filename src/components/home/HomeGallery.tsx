/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/1.webp',
    alt: 'Sminktetoválás munka 1',
    title: 'Egyedi szín harmónia',
  },
  {
    id: 2,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/2.webp',
    alt: 'Sminktetoválás munka 2',
    title: 'Precíziós vonalas technika',
  },
  {
    id: 3,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/3.webp',
    alt: 'Sminktetoválás munka 3',
    title: 'Természetes árnyalatok',
  },
  {
    id: 4,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/4.webp',
    alt: 'Sminktetoválás munka 4',
    title: 'Klasszikus elegancia',
  },
  {
    id: 5,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/5.webp',
    alt: 'Sminktetoválás munka 5',
    title: 'Szépségkezelés',
  },
  {
    id: 6,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/6.webp',
    alt: 'Sminktetoválás munka 6',
    title: 'Finom részletek',
  },
  {
    id: 7,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/7.webp',
    alt: 'Sminktetoválás munka 7',
    title: 'Kifejezésgazdag munka',
  },
  {
    id: 8,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/8.webp',
    alt: 'Sminktetoválás munka 8',
    title: 'Luxus kidolgozás',
  },
  {
    id: 9,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/9.webp',
    alt: 'Sminktetoválás munka 9',
    title: 'Tökéletes harmónia',
  },
  {
    id: 10,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/10.webp',
    alt: 'Sminktetoválás munka 10',
    title: 'Mestermunka',
  },
  {
    id: 11,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/11.webp',
    alt: 'Sminktetoválás munka 11',
    title: 'Egyedi jelleg',
  },
  {
    id: 12,
    src: 'https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/gallery/12.webp',
    alt: 'Sminktetoválás munka 12',
    title: 'Végeredmény',
  },
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedImage = galleryImages[selectedIndex];

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.children[selectedIndex] as HTMLElement;
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedIndex]);

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

        {/* Split Layout Gallery */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left: Main Image */}
          <div className="flex-1 lg:min-w-0">
            <motion.div
              className="relative overflow-hidden bg-charcoal-50 aspect-square rounded-lg border border-charcoal-800/10"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent p-4 sm:p-6">
                <p className="text-sm sm:text-base text-white font-light">{selectedImage.title}</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Vertical Scrollable Thumbnails */}
          <div className="lg:w-28 flex-shrink-0">
            <div
              ref={scrollContainerRef}
              className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:h-96 pb-2 lg:pb-0 lg:pr-1"
            >
              {galleryImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 w-20 h-20 lg:w-full lg:aspect-square ${
                    index === selectedIndex
                      ? 'border-gold-500 shadow-lg'
                      : 'border-charcoal-200 hover:border-charcoal-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      index === selectedIndex ? 'scale-100 brightness-100' : 'scale-90 brightness-75 hover:brightness-85'
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-8 flex items-center justify-between border-t border-charcoal-800/10 pt-6">
          <p className="text-xs text-charcoal-600/60 font-light uppercase tracking-luxury">
            {selectedIndex + 1} / {galleryImages.length}
          </p>
          <p className="text-xs text-charcoal-600/60 font-light italic">
            Kattintson egy képre a megtekintéshez
          </p>
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

const videos = [
  { id: '9O3CsZQZWLQ' },
  { id: 'XzuhWENGzSk' },
  { id: '40NcbfOGXvY' },
];

/**
 * Click-to-play facade: shows only the video thumbnail (~20 KB) until the
 * visitor clicks, then swaps in the real YouTube player with autoplay.
 * Avoids loading ~1 MB of YouTube player JS per video on page load.
 */
function LiteYouTube({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&fs=0`}
        title="Media appearance"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Videó lejátszása"
      className="relative w-full h-full bg-black cursor-pointer block"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain"
      />
      {/* YouTube-style play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <svg width="68" height="48" viewBox="0 0 68 48" aria-hidden="true">
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#f00"
          />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}

export default function HomeMedia() {
  return (
    <section className="py-20 md:py-28 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Médiaszereplések</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            A pályafutásom során <br /><span className="italic">számos exklúzív szakmai magazinban jelentek meg rólam cikkek..</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl">
          több televíziós műsorban szerepeltem, dolgoztam filmforgatásokon, reklámokban, fotózásokon, divatbemutatókon és különböző fashion eseményeken.
          </p>
        </div>

        {/* Media Grid - Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
              className="group relative border border-charcoal-800/5 overflow-hidden bg-white/50"
            >
              {/* Video Embed */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <LiteYouTube id={video.id} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

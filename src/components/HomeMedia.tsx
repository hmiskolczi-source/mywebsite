/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

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

        {/* Media Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item * 0.1 }}
              className="group relative border border-charcoal-800/5 overflow-hidden bg-white/50 cursor-pointer hover:border-charcoal-800/10 transition-all"
            >
              {/* Placeholder Image */}
              <div className="aspect-square bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center">
                <span className="text-charcoal-700/40 font-light text-sm">[PLACEHOLDER - Média {item}]</span>
              </div>

              {/* Info */}
              <div className="p-6 space-y-2">
                <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Médiajelenlét</p>
                <h3 className="font-serif-lux text-lg font-light text-charcoal-800">Megjelenés {item}</h3>
                <p className="text-xs text-charcoal-700/60 font-light">[Megjelenés helye és éve]</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

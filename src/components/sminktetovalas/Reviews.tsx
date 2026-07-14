/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "H. Petra",
      title: "Egy főnyeremény",
      text: "Kinga hibátlan munkája, és közvetlen, kedves személyisége miatt egy főnyeremény: csak ajánlani tudom"
    },
    {
      name: "N.K. Márta",
      title: "Az eredménnyel maximálisan elégedett vagyok!",
      text: "Szemöldök tetováláson voltam, az eredménnyel maximálisan elégedett vagyok! Nagyon kellemes hangulatban telt, Kinga személyisége imádnivaló!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Ügyfeleink Tapasztalatai</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Akik már találkoztak velem <br /><span className="italic">Magabiztosan sugároznak.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group space-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-white/50"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-charcoal-800/5 group-hover:text-gold-400/10 transition-colors duration-500" />

              <div className="space-y-3 relative z-10">
                <h3 className="font-serif-lux text-lg sm:text-xl font-light text-charcoal-800 leading-snug">
                  {review.title}
                </h3>
                <p className="text-sm text-charcoal-700/70 font-light leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal-800/5">
                <p className="font-serif-lux text-sm font-light text-charcoal-800">
                  {review.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

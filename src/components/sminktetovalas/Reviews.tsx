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

              <div className="pt-6 border-t border-charcoal-800/5 flex items-center justify-between">
                <p className="font-serif-lux text-sm font-light text-charcoal-800">
                  {review.name}
                </p>

                {/* Google Verified Badge */}
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-gold-200/40 shadow-xs shrink-0 select-none">
                  <svg className="w-2.5 h-2.5 shrink-0" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span className="font-mono text-[7px] font-bold text-charcoal-700 tracking-wider">VERIFIED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

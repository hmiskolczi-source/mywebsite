/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function HomeCaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: '[PLACEHOLDER - Esettanulmány 1]',
      who: '[Ki - Híresség vagy leírás]',
      occasion: '[Alkalom]',
      challenge: '[A kihívás]',
      solution: '[Hogyan oldottuk meg - 2-3 mondat Kinga saját szavaival]'
    },
    {
      id: 2,
      title: '[PLACEHOLDER - Esettanulmány 2]',
      who: '[Ki - Híresség vagy leírás]',
      occasion: '[Alkalom]',
      challenge: '[A kihívás]',
      solution: '[Hogyan oldottuk meg - 2-3 mondat Kinga saját szavaival]'
    },
    {
      id: 3,
      title: '[PLACEHOLDER - Esettanulmány 3]',
      who: '[Ki - Híresség vagy leírás]',
      occasion: '[Alkalom]',
      challenge: '[A kihívás]',
      solution: '[Hogyan oldottuk meg - 2-3 mondat Kinga saját szavaival]'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Esettanulmányok</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Néhány munka, <br /><span className="italic">ami megmaradt.</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-6"
            >
              {/* Placeholder Image */}
              <div className="aspect-square bg-gradient-to-br from-cream-200 to-cream-300 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-charcoal-700/40 font-light text-sm">[PLACEHOLDER - Fotó]</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-serif-lux text-xl font-light text-charcoal-800">
                  {study.title}
                </h3>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Ki</p>
                    <p className="text-charcoal-700 font-light">{study.who}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Alkalom</p>
                    <p className="text-charcoal-700 font-light">{study.occasion}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">A Kihívás</p>
                    <p className="text-charcoal-700 font-light">{study.challenge}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Hogyan Oldottuk Meg</p>
                    <p className="text-charcoal-700/80 font-light leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

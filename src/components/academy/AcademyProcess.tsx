/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function AcademyProcess() {
  const steps = [
    {
      title: "Gyors Jelentkezés",
      description: "Töltsd ki az alábbi 30 másodperces jelentkezési űrlapot. Gondosan szűrjük a résztvevőket, hogy elhivatott, valóban fejlődni akaró közösség alakuljon ki.",
      label: "Gondos előszűrés"
    },
    {
      title: "A Helybiztosítás",
      description: "A 10%-os helyfoglalási előleg teljesítésével azonnal zároljuk a helyedet a kis létszámú csoportban. Nincs meglepetés, a helyed 100%-ig foglalt.",
      label: "Biztosítsd be a helyedet"
    },
    {
      title: "100 Órás Mentorprogram",
      description: "10 héten át tartó, rendkívül intenzív, gyakorlat-fókuszú oktatás családias, professzionális lakásstúdióban, Kinga közvetlen mentorálása mellett.",
      label: "Intenzív Gyakorlat"
    },
    {
      title: "Piacra Lépés",
      description: "Sikeres vizsga után átveszed a hivatalos állami tanúsítványt és a kész digitális portfóliódat, amivel már másnap építheted a vevőkörödet.",
      label: "Hivatalos Tanúsítvány"
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block mb-4">Átlátható Út</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Az út a profivá váláshoz.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group space-y-8"
            >
              <div className="relative">
                <span className="font-serif-lux text-6xl italic text-charcoal-800/10 transition-colors group-hover:text-gold-400/20 duration-500">
                  0{idx + 1}
                </span>
                <div className="absolute top-1/2 left-0 w-8 h-px bg-gold-400/30" />
              </div>

              <div className="space-y-4">
                <h3 className="font-serif-lux text-2xl font-light text-charcoal-800">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-700/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4">
                <span className="text-[9px] font-bold tracking-luxury text-gold-600 uppercase">
                  {step.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

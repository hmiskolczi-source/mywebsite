/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function AcademyProblem() {
  const comparisonItems = [
    {
      typical: "20-30 fős csoport, ahol sablonokat sajátítasz el",
      kinga: "Kis létszámú csoportok, ahol a technikák mellett gondolkodásmódot is tanulsz"
    },
    {
      typical: "Drága kötelező kezdőcsomag (200-500 ezer Ft)",
      kinga: "Korlátlan prémium anyaghasználat (M·A·C, Urban Decay, Inglot) az első naptól"
    },
    {
      typical: "Portfólió nélkül kerülsz ki a képzésről",
      kinga: "Profin retusált digitális portfóliót kapsz, ami azonnal bevethető"
    },
    {
      typical: "Az oktatóddal gyakran nincs személyes kapcsolatod",
      kinga: "Kinga közvetlenül tanít és korrigál minden mozdulatot"
    },
    {
      typical: "Tanfolyam végén egyedül maradsz",
      kinga: "Aktív ajánlási hálózat + Kinga lehetőség szerint rangos eseményekre is magával visz"
    },
    {
      typical: "Bőrdiagnosztika = extra kurzus, extra pénz",
      kinga: "Kozmetikus alapú bőrismeretre építünk az alapoktól"
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Editorial & Minimal */}
        <div className="max-w-3xl mb-24 space-y-6">
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 leading-[1.1]">
            A különbség a részletekben rejlik.
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl">
            Miért választják a legigényesebb tanulók Kinga mentorprogramját a tömegképzések helyett?
          </p>
        </div>

        {/* Comparison System (Refined Editorial Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Card 1: A TIPIKUS SMINKISKOLA (Muted & Quiet) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-2 border-b border-charcoal-800/10 pb-8">
              <h3 className="text-[11px] font-bold uppercase tracking-luxury text-charcoal-700/50 font-sans">
                Standard Oktatás
              </h3>
              <p className="font-serif-lux text-2xl italic text-charcoal-700/60">
                Amivel máshol találkozhatsz...
              </p>
            </div>

            <ul className="space-y-8">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-6 group">
                  <span className="text-charcoal-700/30 font-light text-lg mt-[-2px]">—</span>
                  <p className="text-base font-light text-charcoal-700/70 leading-relaxed">
                    {item.typical}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: KINGA STÚDIÓJA (Confident & Elegant) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal-800 p-10 md:p-16 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]"
          >
            {/* Subtle Label */}
            <div className="absolute top-10 right-10 text-[9px] font-bold tracking-[0.3em] text-gold-400/50 uppercase">
              Atelier Standard
            </div>

            <div className="space-y-2 border-b border-white/10 pb-8 mb-12">
              <h3 className="text-[11px] font-bold uppercase tracking-luxury text-gold-400 font-sans">
                Kinga Stúdiója
              </h3>
              <p className="font-serif-lux text-2xl italic text-cream-100">
                Amit nálunk kapsz az első naptól
              </p>
            </div>

            <ul className="space-y-8">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-6">
                  <span className="text-gold-400 font-bold text-sm mt-1">✓</span>
                  <p className="text-base font-medium text-cream-100/90 leading-relaxed">
                    {item.kinga}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Museum Moment: A brief, confident statement instead of a boxy guarantee */}
        <div className="mt-48 text-center">
          <p className="font-serif-lux text-2xl sm:text-3xl italic text-charcoal-800 max-w-2xl mx-auto leading-relaxed">
            "A célom nem a tömegtermelés, hanem a szakmai elit kinevelése."
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-1 h-1 rounded-full bg-gold-400" />
            <div className="w-1 h-1 rounded-full bg-gold-400" />
            <div className="w-1 h-1 rounded-full bg-gold-400" />
          </div>
        </div>

      </div>
    </section>
  );
}

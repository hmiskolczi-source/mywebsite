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
      kingaHighlight: [
        { text: 'Kis létszámú csoportok' , bold: true },
        { text: ', ahol ' },
        { text: 'a technikák mellett gondolkodásmódot', bold: true },
        { text: ' is tanulsz' }
      ]
    },
    {
      typical: "Drága kötelező kezdőcsomag (200-500 ezer Ft)",
      kingaHighlight: [
        { text: 'Korlátlan prémium anyaghasználat' , bold: true },
        { text: ' (M·A·C, Urban Decay, Inglot) ' },
        { text: 'az első naptól' , bold: true }
      ]
    },
    {
      typical: "Portfólió nélkül kerülsz ki a képzésről",
      kingaHighlight: [
        { text: 'Profin retusált digitális portfóliót' , bold: true },
        { text: ' kapsz, ami ' },
        { text: 'azonnal bevethető' , bold: true }
      ]
    },
    {
      typical: "Az oktatóddal gyakran nincs személyes kapcsolatod",
      kingaHighlight: [
        { text: 'Kinga közvetlenül tanít' , bold: true },
        { text: ' és ' },
        { text: 'korrigál minden mozdulatot' , bold: true }
      ]
    },
    {
      typical: "Tanfolyam végén egyedül maradsz",
      kingaHighlight: [
        { text: 'Aktív ajánlási hálózat' , bold: true },
        { text: ' + ' },
        { text: 'Kinga lehetőség szerint rangos eseményekre' , bold: true },
        { text: ' is magával visz' }
      ]
    },
    {
      typical: "Bőrdiagnosztika = extra kurzus, extra pénz",
      kingaHighlight: [
        { text: 'Kozmetikus alapú bőrismeretre' , bold: true },
        { text: ' építünk az alapoktól' }
      ]
    },
    {
      typical: "Az oktatók gyakran tapasztalatlanok",
      kingaHighlight: [
        { text: '15 év tapasztalat' , bold: true },
        { text: ' az elite sminkesek oktatásában – ' },
        { text: 'nemzetközi bajnokok és elismert szakemberek' , bold: true },
        { text: ' mentora' }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Editorial & Minimal */}
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Közös célok, Közös sikerek</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 leading-[1.1]">
            Miben különbözik ez a tanfolyam minden más elérhető kurzustól?
          </h2>
        </div>

        {/* Comparison System (Refined Editorial Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Card 1: A TIPIKUS SMINKISKOLA (Muted & Quiet) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-2 border-b border-charcoal-800/10 pb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-luxury text-charcoal-700/50 font-sans">
                A TIPIKUS SMINKISKOLA
              </h3>
              <p className="font-serif-lux text-2xl italic text-charcoal-700/60">
                Mivel találkozhatsz máshol a piacon?
              </p>
            </div>

            <ul className="space-y-6">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-6 group">
                  <span className="text-charcoal-700/30 font-light text-lg mt-[-2px]">✗</span>
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
            className="bg-charcoal-800 p-8 md:p-12 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]"
          >
            {/* Subtle Label */}
            <div className="absolute top-8 right-8 text-[9px] font-bold tracking-[0.3em] text-gold-400/50 uppercase">
              PRÉMIUM VÁLASZTÁS
            </div>

            <div className="space-y-2 border-b border-white/10 pb-6 mb-10">
              <h3 className="text-[11px] font-bold uppercase tracking-luxury text-gold-400 font-sans">
                KINGA STÚDIÓJA
              </h3>
              <p className="font-serif-lux text-2xl italic text-cream-100">
                Amit nálunk kapsz az első naptól
              </p>
            </div>

            <ul className="space-y-6">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-6">
                  <span className="text-gold-400 font-bold text-sm mt-1">✓</span>
                  <p className="text-base font-medium text-cream-100/90 leading-relaxed">
                    {item.kingaHighlight ? item.kingaHighlight.map((part, pidx) => (
                      part.bold ? <span key={pidx} className="font-bold">{part.text}</span> : part.text
                    )) : item.kinga}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

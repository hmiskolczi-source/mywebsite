/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-[#EADFCB]/60 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#A67E2E] uppercase block">Közös célok, Közös sikerek</span>
          <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-medium tracking-tight text-[#161514] leading-tight">
            Miben különbözik ez a tanfolyam minden más elérhető kurzustól?
          </h2>
          <div className="h-0.5 w-16 bg-[#D7A84E] mx-auto mt-4" />
        </div>

        {/* Comparison System (Two Separated Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Box 1: A TIPIKUS SMINKISKOLA */}
          <div className="bg-white rounded-2xl border border-red-100 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="bg-red-500/10 border-b border-red-100 py-6 px-6 sm:px-8 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-mono font-bold text-xs">
                ✗
              </span>
              <div>
                <h3 className="font-mono font-bold uppercase tracking-wider text-xs text-red-700">
                  A TIPIKUS SMINKISKOLA
                </h3>
                <p className="text-[10px] text-red-600 font-light mt-0.5">Mivel találkozhatsz máshol a piacon?</p>
              </div>
            </div>

            {/* List */}
            <div className="p-6 sm:p-8 space-y-5 flex-grow">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✗</span>
                  <p className="text-sm font-light text-[#63615D] leading-relaxed">
                    {item.typical}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: KINGA STÚDIÓJA */}
          <div className="bg-[#1E1D1A] rounded-2xl border border-[#D7A84E]/30 shadow-2xl overflow-hidden flex flex-col relative hover:shadow-gold-500/5 transition-shadow duration-300">
            {/* Premium Gold Ribbon or Indicator */}
            <div className="absolute top-0 right-0 bg-[#D7A84E] text-charcoal-950 font-mono font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-bl-lg">
              PRÉMIUM VÁLASZTÁS
            </div>

            {/* Header */}
            <div className="bg-charcoal-950/40 border-b border-charcoal-800 py-6 px-6 sm:px-8 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#E1C083] shrink-0" />
              <div>
                <h3 className="font-mono font-bold uppercase tracking-wider text-xs text-[#E1C083]">
                  KINGA STÚDIÓJA
                </h3>
                <p className="text-[10px] text-cream-300 font-light mt-0.5">Amit nálunk kapsz az első naptól</p>
              </div>
            </div>

            {/* List */}
            <div className="p-6 sm:p-8 space-y-5 flex-grow bg-gradient-to-b from-[#1E1D1A] to-[#161514]">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-gold-400 font-bold shrink-0 mt-0.5">✓</span>
                  <p className="text-sm font-medium text-cream-100 leading-relaxed">
                    {item.kinga}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Micro Guarantee Label */}
        <div className="max-w-5xl mx-auto mt-8 bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-[#EADFCB]/30 text-center shadow-sm">
          <p className="text-xs text-[#857B69] font-light flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A67E2E]" />
            Garantáljuk a 100%-os anyagbiztosítást és az egyénre szabott, exkluzív mentorálást.
          </p>
        </div>

      </div>
    </section>
  );
}

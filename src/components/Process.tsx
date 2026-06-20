/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, Sparkles, ArrowRight } from 'lucide-react';

export default function Process() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      step: '1. lépés',
      title: 'Konzultáció & Egészségügyi szűrés',
      desc: 'Küldd be az űrlapot mindössze 30 másodperc alatt, és 24 órán belül felhívlak egy kellemes egyeztetésre. Már az első beszélgetés alatt kiszűrjük az esetleges kontraindikációkat, kizáró tényezőket a biztonságodért.',
      subtext: 'Nincs elköteleződés, csak egy kellemes, szakértői beszélgetés.',
      icon: Calendar,
      color: 'bg-gold-50 border-gold-200 text-gold-600'
    },
    {
      step: '2. lépés',
      title: 'Fájdalommentes érzéstelenítés és előrajzoláss',
      desc: 'A beleegyező nyilatkozat aláírása után megkezdjük a hatékony érzéstelenítést (injekció nélkü), majd milliméter pontosan megtervezem az arcodhoz illő egyedi formát. Te hagyod jóvá a vonalakat, én pedig egy felületes átkarcolással rögzítem a kontúrt, így pontosan azt a formát kapod, amire rábolintottál.',
      subtext: 'Te hagyod jóvá a vonalakat, én pontosan megrajzolom.',
      icon: Compass,
      color: 'bg-gold-50 border-gold-300 text-gold-600'
    },
    {
      step: '3. lépés',
      title: 'Fájdalommentes pigmentálás és ingyenes korrekció',
      desc: 'Az átkarcolt területre felviszem a másodlagos érzéstelenítőt, ami akár 1–1,5 órára teljesen elzsibbasztja a bőrt a tökéletes kényelemért. Ezután mikrotűs géppel és orvosi tisztaságú színgarantált pigmentekkel elkészítem a finom satírt. A csomagod tartalmazza a teljesen ingyenes korrekciós alkalmat is!',
      subtext: 'Fájdalommentes beavatkozás és esztétikus gyógyulás.',
      icon: Sparkles,
      color: 'bg-gold-100 border-gold-400 text-gold-700'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vertical flow separator */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cream-300/40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">Egyszerű & Átlátható Út</span>
          <h2 className="font-serif-lux text-3.5xl sm:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
            Érd el a 24/7 természetes szépséget 3 egyszerű lépésben.
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto" />
          <p className="text-charcoal-700 font-light text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Nincs stressz, nincs bizonytalanság. Nálam minden pillanat a Te kényelmedet és az arcod egyediségének kiemelését szolgálja.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Connecting line indicators for desktop */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold-200/20 via-gold-400/40 to-gold-200/20 hidden lg:block -translate-y-6 -z-10" />

          {steps.map((s, idx) => {
            const StepIcon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-cream-100 border border-cream-300/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start space-y-6 hover:border-gold-300 hover:shadow-xl transition-all duration-300 shadow-sm relative group"
              >
                {/* Visual Number Badge */}
                <div className="flex items-center justify-between w-full">
                  <div className="font-serif-lux text-3xl font-bold tracking-tight text-gold-500/30">
                    {s.step}
                  </div>
                  <div className={`p-3 rounded-xl border ${s.color} shrink-0`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Text Block */}
                <div className="space-y-3">
                  <h3 className="font-serif-lux text-xl sm:text-2xl font-bold text-charcoal-900 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-800 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Subtext Tag */}
                <div className="w-full pt-4 border-t border-cream-300/60 font-mono text-[11px] text-gold-600 font-semibold flex items-center justify-between">
                  <span>{s.subtext}</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick action beneath steps */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2.5 bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-950 px-8 py-4 rounded-xl font-sans font-bold uppercase tracking-wider text-xs sm:text-sm border border-charcoal-900 hover:border-gold-400 cursor-pointer shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Jelentkezem egyéni tervezésre Kingához
          </button>
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function AcademyPricing() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const inclusions = [
    "10 héten át tartó, 100 órás rendkívül intenzív, gyakorlat-orientált élő oktatás",
    "Korlátlan luxus & prémium anyaghasználat (M·A·C, Inglot, Makeup Forever stb.)",
    "Államilag elismert szakmai tanúsitvány Hajas László aláírásával",
    "Kizárólag kis létszámú, elit csoportos mentorálás",
    "Online pótlási lehetőség és visszanézhető órák zárt csoportban"
  ];

  const bonuses = [
    "Komplett, profi portfólió",
    "Saját szakmai tankönyv",
    "Személyre szabott vásárlási tanácsadás",
    "Azonnali szakmai ajánlás (Márkagarancia)",
    "Folyamatos szakmai mentoráció"
  ];

  return (
    <section id="academy-pricing" className="py-32 md:py-48 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial */}
        <div className="mb-24 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Befektetés a jövődbe</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Transzparens árazás, <br /><span className="italic">rejtett költségek nélkül.</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl leading-relaxed">
            Nálunk nincsenek kötelező kezdőcsomagok. Egyetlen, mindenre kiterjedő díjért mindent megkapsz a sikeres induláshoz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          
          {/* Main Pricing Card - Elegant & Isolated */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-charcoal-800/5 relative"
          >
            {/* Minimal Badge */}
            <div className="absolute top-10 right-10">
              <span className="text-[9px] font-bold tracking-[0.3em] text-gold-500 uppercase border border-gold-500/30 px-3 py-1">
                Exkluzív Előfoglalás
              </span>
            </div>

            <div className="space-y-16">
              <div className="space-y-4">
                <h3 className="font-serif-lux text-3xl font-light text-charcoal-800">
                  Pro Makeup Mentorprogram
                </h3>
                <p className="text-[10px] font-bold tracking-luxury text-charcoal-700/40 uppercase">
                  100 órás, 10 hetes elit csoportos képzés
                </p>
              </div>

              {/* Price Highlight */}
              <div className="py-12 border-y border-charcoal-800/5 flex flex-col md:flex-row justify-between items-baseline gap-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-luxury text-charcoal-700/40 uppercase">Teljes díj</span>
                  <div className="font-serif-lux text-5xl sm:text-6xl text-charcoal-800 font-light tracking-tight">
                    990 000 <span className="text-2xl ml-[-8px]">Ft</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-luxury text-gold-600 uppercase">Részletfizetés</span>
                  <div className="text-lg text-charcoal-700 font-light italic">
                    3 × 330 000 Ft
                  </div>
                  <p className="text-[10px] text-charcoal-700/40 uppercase tracking-widest">Kamatmentes opció</p>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <h4 className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase">A program tartalma</h4>
                  <ul className="space-y-4">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-base text-charcoal-700/80 font-light leading-relaxed">
                        <span className="text-gold-500 font-bold mt-[-2px]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[11px] font-bold tracking-luxury text-gold-600 uppercase italic">Ajándék bónuszok</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bonuses.map((bonus, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-charcoal-800 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={scrollToForm}
                  className="w-full bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase py-6 transition-all duration-500 hover:bg-charcoal-700 rounded-none shadow-xl"
                >
                  Jelentkezés a képzésre
                </button>
                <p className="text-center text-[10px] text-charcoal-700/40 uppercase tracking-[0.2em] mt-6">
                  Helyfoglalás a 10% előleg beérkezése után válik véglegessé.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Testimonial Moment */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <span className="text-[11px] font-bold tracking-luxury text-charcoal-700/40 uppercase block">Tanulói vélemények</span>
              
              <div className="space-y-12">
                {[
                  {
                    name: "Nagy Melinda",
                    text: "Soha életemben nem hoztam ennél jobb döntést. Már tanulás közben megtérült a tanfolyam. Nemcsak festeni, hanem vállalkozást építeni is megtanultam."
                  },
                  {
                    name: "Szabó Eszter",
                    text: "Már a képzés 6. hetén saját munkákból kerestem meg az árát! Kinga professzionalizmusa teljesen magával ragadott."
                  }
                ].map((review, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className="space-y-4"
                  >
                    <p className="font-serif-lux text-xl italic text-charcoal-800 leading-relaxed">
                      „{review.text}”
                    </p>
                    <p className="text-[10px] font-bold tracking-luxury text-gold-600 uppercase">— {review.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Guarantee Section - Refined */}
            <div className="pt-16 border-t border-charcoal-800/10 space-y-8">
              <h4 className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase italic">Gyakorlati Garancia</h4>
              <p className="text-sm text-charcoal-700/70 font-light leading-relaxed">
                Addig támogatlak minden technikai elakadásnál, amíg el nem érjük a sikert. A célom, hogy olyan szakmai alapot kapj, amellyel magabiztosan érvényesülsz a piacon.
              </p>
              <div className="flex gap-4">
                <div className="w-1 h-1 rounded-full bg-gold-400" />
                <div className="w-1 h-1 rounded-full bg-gold-400" />
                <div className="w-1 h-1 rounded-full bg-gold-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

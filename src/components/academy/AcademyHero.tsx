/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Award as Trophy } from 'lucide-react';

export default function AcademyHero() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-10 pb-20 md:py-24 overflow-hidden border-b border-cream-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Social Brands Badge Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-center lg:justify-start"
        >
          <div className="space-y-2 border-l-2 border-gold-400 pl-4 py-1 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-1">
              <span className="font-serif-lux text-sm font-bold tracking-widest text-charcoal-900 bg-gold-100/60 border border-gold-200 px-2 py-0.5 rounded">BABOR</span>
              <span className="text-[10px] font-mono text-charcoal-700">magyarországi sminkmestere</span>
            </div>
            <div className="h-4 w-px bg-cream-300 font-light hidden sm:inline" />
            <span className="font-serif-lux font-semibold italic text-charcoal-800 text-sm tracking-wider">Playboy</span>
            <div className="h-4 w-px bg-cream-300 font-light hidden sm:inline" />
            <span className="font-serif-lux font-semibold text-charcoal-800 text-sm tracking-wider">Esküvő Classic</span>
            <div className="h-4 w-px bg-cream-300 font-light hidden sm:inline" />
            <span className="font-sans font-black uppercase text-red-600 text-sm tracking-tighter">Blikk</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Copywriting Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal-900 leading-[1.15]">
              Válj <span className="text-gold-500 font-semibold">elismert, magasan fizetett sminkessé</span> mindössze 10 hét alatt, hogy végre a saját kreativitásodból élhess, kötöttségek nélkül.
            </h1>
            
            <p className="text-base sm:text-lg text-charcoal-800 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sajátítsd el a sémamentes sminkelés logikáját egy háromszoros világbajnoki ezüstérmes sminkmester felügyelete alatt. A képzés végén portfólióval, állami tanúsítvánnyal, és gyakorlati tudással távozol: akár már másnap fogadhatsz vendégeket.
            </p>

            {/* Action and Click-triggers */}
            <div className="pt-4 flex flex-col items-center lg:items-start gap-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-sm sm:text-base font-bold tracking-wider uppercase px-8 py-4 sm:py-5 rounded-xl border border-gold-400 hover:border-gold-500 transition-all cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Jelentkezem Kingához képzésre &rarr;
              </button>
              
              <p className="text-xs text-charcoal-700 font-mono flex items-center gap-1.5 justify-center lg:justify-start">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                5 elérhető hely maradt!
              </p>
            </div>

            {/* Official Pecsétek (Two Forms of Social Proof with Context Quotes) */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-cream-300/60 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center p-2 bg-white shrink-0 shadow-sm">
                  <Trophy className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 font-mono">
                    MFKKE MINŐSÍTÉS
                  </h4>
                  <p className="text-xs text-charcoal-700 font-light mt-1">
                    A Magyar Fodrász-Kozmetikus-Körmös Egyesület hivatalos felnőttképzési minősítése.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center p-2 bg-white shrink-0 shadow-sm">
                  <Award className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 font-mono">
                    HAJAS LÁSZLÓ AJÁNLÁSÁVAL
                  </h4>
                  <p className="text-xs text-charcoal-700 font-light mt-1">
                    Szakmai garancia, amellyel azonnal komolyan vesznek a divat- és esküvői piacon.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-300/20 max-w-md mx-auto aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
                alt="Sminkes asztal és ecsetek" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-serif-lux text-xl italic font-medium leading-relaxed">
                  "Nem kapkodunk sablonokkal. Minden mozdulatot és arcarány-elemzést személyesen, türelemmel rögzítünk."
                </p>
                <p className="text-gold-400 text-xs font-mono tracking-widest uppercase mt-3">
                  — Hovorka-Miskolczi Kinga
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

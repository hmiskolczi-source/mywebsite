/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy } from 'lucide-react';

export default function AcademyHero() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-cream-100">
      {/* Background accents - subtle and airy */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-200/50 -skew-x-12 transform origin-top translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified, Monochromatic Press/Logo Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 grayscale opacity-60"
        >
          <span className="font-serif-lux text-sm font-bold tracking-widest uppercase">BABOR</span>
          <div className="w-px h-4 bg-charcoal-700/20" />
          <span className="font-serif-lux font-semibold italic text-sm tracking-wider">Playboy</span>
          <div className="w-px h-4 bg-charcoal-700/20" />
          <span className="font-serif-lux font-semibold text-sm tracking-wider">Esküvő Classic</span>
          <div className="w-px h-4 bg-charcoal-700/20" />
          <span className="font-sans font-black uppercase text-sm tracking-tighter">Blikk</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-start">
          
          {/* Main Content Area */}
          <div className="lg:w-7/12 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 leading-[1.1]">
                Válj <span className="italic">elismert, magasan fizetett</span> sminkessé mindössze 10 hét alatt.
              </h1>
              
              <div className="max-w-xl space-y-6">
                <p className="text-lg sm:text-xl text-charcoal-700 font-light leading-relaxed">
                  Válj elismert, magasan fizetett szakemberré 10 hét alatt. Sajátítsd el a sémamentes sminkelés logikáját egy háromszoros világbajnoki ezüstérmes mentorálása mellett.
                </p>
                <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                  A képzés végén nem csak egy állami tanúsítványt kapsz, hanem egy olyan szakmai identitást, amellyel magabiztosan léphetsz a prémium piacra.
                </p>
              </div>
            </motion.div>

            {/* CTA and Scarcity - Moved to a quiet note */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-8 pt-4"
            >
              <button
                onClick={scrollToForm}
                className="group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
              >
                <span className="relative z-10">Jelentkezés a képzésre</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </button>
              
              <p className="text-xs text-charcoal-700/60 italic font-serif-lux tracking-wide">
                Csak 5 elérhető hely a következő kurzusra.
              </p>
            </motion.div>

            {/* Refined Trust Indicators */}
            <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-charcoal-800/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-gold-500 stroke-[1.5]" />
                  <h4 className="text-[11px] font-bold uppercase tracking-luxury text-charcoal-800 font-sans">
                    MFKKE Minősítés
                  </h4>
                </div>
                <p className="text-xs text-charcoal-700/70 font-light leading-relaxed">
                  Hivatalos felnőttképzési minősítés, mely garantálja a legmagasabb szakmai standardokat.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold-500 stroke-[1.5]" />
                  <h4 className="text-[11px] font-bold uppercase tracking-luxury text-charcoal-800 font-sans">
                    Szakmai Garancia
                  </h4>
                </div>
                <p className="text-xs text-charcoal-700/70 font-light leading-relaxed">
                  Hajas László ajánlásával: egy név, amely azonnali belépőt jelent a divat- és esküvői piacra.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column - Large, editorial, asymmetrical */}
          <div className="lg:w-5/12 w-full mt-12 lg:mt-0 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-cream-200">
                <img 
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
                  alt="Hovorka-Miskolczi Kinga Atelier" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[1.02]"
                />
              </div>
              
              {/* Floating Quote Moment */}
              <div className="absolute -bottom-12 -left-12 p-10 bg-white shadow-xl max-w-xs hidden md:block">
                <p className="font-serif-lux text-xl italic text-charcoal-800 leading-relaxed">
                  "A technika tanítható. <br /> Az ízlés nem."
                </p>
                <p className="text-[10px] font-bold tracking-luxury uppercase mt-6 text-gold-600">
                  Kinga
                </p>
              </div>
              
              {/* Delicate Framing Corners */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-gold-300/30 -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

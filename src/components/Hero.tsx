/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Award, Quote, CheckCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream-100">
      {/* Background accents - subtle and airy */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-200/50 -skew-x-12 transform origin-top translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="hero-section">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Main Content Area */}
          <div className="lg:w-7/12 flex flex-col justify-center space-y-8">
            
            {/* Unified, Monochromatic Press/Logo Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-60"
            >
              <span className="font-serif-lux text-sm font-bold tracking-widest uppercase">BABOR</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-serif-lux font-semibold italic text-sm tracking-wider">Playboy</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-serif-lux font-semibold text-sm tracking-wider">Esküvő Classic</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-sans font-black uppercase text-sm tracking-tighter">Blikk</span>
            </motion.div>

            {/* Core Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-charcoal-800 leading-[1.2]">
                Ébredj minden nap <span className="italic text-gold-600">természetes tökéletességben</span>: Tartós, Elegáns és Teljesen Natúr sminktetoválás akár egyetlen exklúzív alkalom után.
              </h1>
            </motion.div>

            {/* Core Sub-headline */}
            <div className="max-w-xl space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-charcoal-700 font-light leading-relaxed"
              >
                Ha már láttál elszíneződött, aszimmetrikus munkákat, és attól félsz, hogy veled is ez történik.. ez a félelem jogos. A 15 éves nemzetközi tapasztalatom és a kétfázisú érzéstelenítési protokollom pontosan ezt zárja ki.
              </motion.p>
            </div>

            {/* CTA and Scarcity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-8 pt-2"
            >
              <button
                onClick={scrollToForm}
                className="group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
              >
                <span className="relative z-10">Jelentkezem egyéni tervezésre Kingához &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </button>

              <p className="text-xs text-charcoal-700/60 italic font-serif-lux tracking-wide">
                Ingyenes konzultáció!
              </p>
            </motion.div>

          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:w-5/12 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-lg bg-charcoal-900 h-96 lg:h-full min-h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1632017402126-d868ced47ef7?auto=format&fit=crop&q=80&w=600"
                alt="Premium makeup tattoo service"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

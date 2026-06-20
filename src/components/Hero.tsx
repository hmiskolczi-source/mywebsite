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
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-200">
      {/* Elegantly styled absolute blur backdrops */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-200/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-16 -right-32 w-96 h-96 bg-gold-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-stretch">
          
          {/* LEFT COLUMN: Strategic Copy Block + Brand Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Media Badges Container (Moved to the top, now directly at top) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 border-l-2 border-gold-400 pl-4 py-1"
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
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

            {/* Core Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal-900 leading-[1.15]">
                Ébredj minden nap <span className="text-gold-500 font-semibold">természetes tökéletességben</span>: Tartós, Elegáns és Teljesen Natúr sminktetoválás akár egyetlen exklúzív alkalom után.
              </h1>
            </motion.div>

            {/* Core Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-charcoal-800 font-light leading-relaxed max-w-2xl"
            >
              Ha már láttál elszíneződött, aszimmetrikus munkákat, és attól félsz, hogy veled is ez történik.. ez a félelem jogos. A 15 éves nemzetközi tapasztalatom és a kétfázisú érzéstelenítési protokollom pontosan ezt zárja ki.
            </motion.p>

            {/* CTA Button with FUD reduction labels below */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-5 pt-2 max-w-2xl"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                <button
                  onClick={scrollToForm}
                  className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-sm sm:text-base font-bold tracking-wider uppercase px-8 py-4 sm:py-5 rounded-xl border border-gold-400 hover:border-gold-500 transition-all cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0 text-center shrink-0"
                >
                  Jelentkezem egyéni tervezésre Kingához
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-xs text-charcoal-900 font-semibold shadow-sm transition-all duration-300 hover:bg-gold-400/20">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>Ingyenes Konzultáció</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-xs text-charcoal-900 font-semibold shadow-sm transition-all duration-300 hover:bg-gold-400/20">
                  <Shield className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>100% garancia</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-xs text-charcoal-900 font-semibold shadow-sm transition-all duration-300 hover:bg-gold-400/20">
                  <Award className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>15 év élvonalbeli tapasztalat</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: The Luxury Image Banner representing Kinga's work */}
          <div className="lg:col-span-5 flex flex-col lg:h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex-grow flex flex-col relative rounded-2xl overflow-hidden shadow-xl border border-cream-300 bg-white p-3.5 group h-full"
            >
              <div className="relative flex-grow min-h-[460px] lg:h-0 rounded-xl bg-charcoal-900 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://scontent.fbud4-1.fna.fbcdn.net/v/t39.30808-6/480733913_648769010993032_6000515720281305315_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z5MlZhqPDjEQ7kNvwHL5KE4&_nc_oc=AdovYCja1yYbJBmu3RMJUMpwHvkxBtKWR3acK0GBwAlQDJwbmQbzAhHRx82R59aFUQ8aPxFttVygcWaV_RU9yKgo&_nc_zt=23&_nc_ht=scontent.fbud4-1.fna&_nc_gid=EdPBYC_bpnSSwkVqEXMITA&_nc_ss=7b2a8&oh=00_Af8YsVA7FJy06fdPsZwCgjBsmXNnx-sozDXc71hcGVIuxA&oe=6A247F9F"
                  alt="Hovorka-Miskolczi Kinga — EB & VB Bajnoki Sminkmester"
                  className="absolute inset-0 w-full h-full object-cover opacity-95 transition-all duration-700"
                  style={{ transform: 'scaleX(-1)' }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual design indicators subtle touch of premium elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/20 via-transparent to-transparent pointer-events-none" />

                {/* Delicate framing corners */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-gold-400" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t border-r border-gold-400" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b border-l border-gold-400" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-gold-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import SocialProof from '../../shared/SocialProof';
import BrandLogos from '../../shared/BrandLogos';

export default function AcademyHero() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream-100">
      {/* Background accents - subtle and airy */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-200/50 -skew-x-12 transform origin-top translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Main Content Area */}
          <div className="lg:w-7/12 flex flex-col justify-center space-y-8">

            {/* Social Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-60"
            >
              <SocialProof />
            </motion.div>

            {/* Core Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-charcoal-800 leading-[1.2]">
                Ne csak sminkelni tanulj meg. Válj <span className="italic text-gold-600">kiemelkedő, keresett szakemberré</span> mindössze 10 hét alatt és élj a <span className="italic">saját kreativitásodból</span> kötöttségek nélkül.
              </h1>
            </motion.div>

            {/* Core Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-charcoal-700 font-light leading-relaxed max-w-2xl"
            >
              Sajátítsd el a sminkelés valódi logikáját egy háromszoros világbajnoki ezüstérmes sminkmester mentorálásával. A 10 hetes, gyakorlatorientált képzés végén hivatalos állami tanúsítvánnyal és kész portfólióval indíthatod el a saját, prémium praxisodat.
            </motion.p>

            {/* CTA and Scarcity - Moved to a quiet note */}
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
                <span className="relative z-10">Jelentkezem Kingához képzésre &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </button>
              
              <p className="text-xs text-charcoal-700/60 italic font-serif-lux tracking-wide">
                5 elérhető hely maradt!
              </p>
            </motion.div>

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
              
              {/* Delicate Framing Corners */}
              <div className="absolute -top-4 -right-4 w-20 h-24 border-t border-r border-gold-300/30 -z-10" />
            </motion.div>
          </div>

        </div>

        {/* Brand Logos at Bottom Center */}
        <div className="mt-20 flex justify-center">
          <BrandLogos />
        </div>
      </div>
    </section>
  );
}

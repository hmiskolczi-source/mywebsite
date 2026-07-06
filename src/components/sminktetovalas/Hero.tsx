/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Award, Quote, CheckCircle, Sparkles } from 'lucide-react';
import SocialProof from '../shared/SocialProof';
import BrandLogos from '../shared/BrandLogos';
import ImageWatermark from '../shared/ImageWatermark';

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
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Main Content Area */}
          <div className="lg:w-7/12 flex flex-col justify-center space-y-8 text-center md:text-left">

            {/* Social Proof Badges */}
            <SocialProof />

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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-charcoal-700 font-light leading-relaxed max-w-2xl"
            >
              Ha már láttál elszíneződött, aszimmetrikus munkákat, és attól félsz, hogy veled is ez történik.. ez a félelem jogos. A <span className="font-bold">15 éves nemzetközi tapasztalatom</span> és a <span className="font-bold">kétfázisú érzéstelenítési protokollom</span> pontosan ezt zárja ki.
            </motion.p>

            {/* CTA and Scarcity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8 pt-2"
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
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg bg-charcoal-900 h-96 lg:h-full min-h-[400px]"
            >
              <ImageWatermark className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src="https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/sminktetovalas/sminktetovalas_hero.webp"
                  alt="Premium makeup tattoo service"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none" />
              </ImageWatermark>
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

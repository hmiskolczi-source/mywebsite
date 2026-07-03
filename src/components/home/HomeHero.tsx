/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import SocialProof from '../shared/SocialProof';
import BrandLogos from '../shared/BrandLogos';

export default function HomeHero() {
  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Main Content Area */}
          <div className="lg:w-7/12 flex flex-col justify-center space-y-8">

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-60"
            >
              <span className="font-serif-lux text-sm font-bold tracking-widest uppercase">Nemzetközi zsűritag</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-serif-lux font-semibold text-sm tracking-wider">Versenyfelkészítő</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-serif-lux font-semibold text-sm tracking-wider">3× VB ezüstérmes</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-sans font-black uppercase text-sm tracking-tighter">EB-arany</span>
            </motion.div>

            {/* Core Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-serif-lux text-4xl sm:text-5xl lg:text-5xl font-light tracking-tight text-charcoal-800 leading-[1.2]">
                Hovorka-Miskolczi Kinga vagyok, <br />
                <span className="italic text-gold-600">többszörös VB ezüstérmes és EB aranyérmes sminkmester.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-charcoal-700 font-light leading-relaxed max-w-2xl"
            >
              <span className="font-bold">Több mint 20 éve</span> foglalkozom professzionális sminkeléssel, és ugyanennyi ideje aktív szereplője vagyok a hazai és nemzetközi sminkversenyek világának. Ma pedig <span className="font-bold">hazai és nemzetközi zsűritagként, valamint versenyfelkészítőként és oktatóként</span> veszek részt a szakmai életben.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#lead-form-anchor"
                className="group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none inline-block"
              >
                <span className="relative z-10">Kapcsolatba lépek Kingával &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Portrait */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-lg bg-charcoal-900 aspect-[3/4]"
            >
              <img
                src="https://ihbwkp8vwcp4igya.public.blob.vercel-storage.com/home/main_hero.webp"
                alt="Hovorka-Miskolczi Kinga - Premium portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
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

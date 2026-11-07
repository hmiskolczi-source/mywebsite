/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import BrandLogos from '../shared/BrandLogos';
import ImageWatermark from '../shared/ImageWatermark';
import { imgProps } from '../../lib/imageOpt';

export default function HomeHero() {
  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Main Content Area */}
          <div className="lg:w-7/12 flex flex-col justify-center space-y-8 text-center md:text-left">

            {/* Social Proof */}
            <div className="font-system-ui flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-charcoal-700">
              <span className="text-sm font-bold tracking-widest uppercase">Nemzetközi zsűritag</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-semibold text-sm tracking-wider">Versenyfelkészítő</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-semibold text-sm tracking-wider">3× VB ezüstérmes</span>
              <div className="w-px h-4 bg-charcoal-700/20" />
              <span className="font-sans font-black uppercase text-sm tracking-tighter">EB-arany</span>
            </div>

            {/* Core Headline */}
            <div className="space-y-6">
              <h1 className="font-serif-lux text-4xl sm:text-5xl lg:text-5xl font-light tracking-tight text-charcoal-800 leading-[1.2]">
                Hovorka-Miskolczi Kinga vagyok, <br />
                <span className="italic text-gold-600">többszörös VB ezüstérmes és EB aranyérmes sminkmester.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="font-system-ui text-lg sm:text-xl text-charcoal-700 font-normal leading-relaxed max-w-2xl">
              <span className="font-bold">Több mint 20 éve</span> foglalkozom professzionális sminkeléssel, és ugyanennyi ideje aktív szereplője vagyok a hazai és nemzetközi sminkversenyek világának. Ma pedig <span className="font-bold">hazai és nemzetközi zsűritagként, valamint versenyfelkészítőként és oktatóként</span> veszek részt a szakmai életben.
            </p>

            {/* CTA */}
            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="#lead-form-anchor"
                className="font-system-ui group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none inline-block"
              >
                <span className="relative z-10">Kapcsolatba lépek Kingával &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </a>
            </div>

          </div>

          {/* Right Column: Portrait */}
          <div className="lg:w-5/12">
            <div className="rounded-lg overflow-hidden shadow-lg bg-charcoal-900 aspect-[3/4]">
              <ImageWatermark className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  {...imgProps("https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/home/main_hero.webp", "(min-width: 1024px) 42vw, 100vw")}
                  alt="Hovorka-Miskolczi Kinga - Premium portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
              </ImageWatermark>
            </div>
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SocialProof from '../../shared/SocialProof';
import BrandLogos from '../../shared/BrandLogos';
import ImageWatermark from '../../shared/ImageWatermark';
import { imgProps } from '../../../lib/imageOpt';

export default function AcademyHero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cream-100">
      {/* Background accents - subtle and airy */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-200/50 -skew-x-12 transform origin-top translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Main Content Area */}
          <div className="lg:w-7/12 flex flex-col justify-center space-y-8 text-center md:text-left">

            {/* Social Proof Badges */}
            <SocialProof />

            {/* Core Headline */}
            <div className="space-y-6">
              <h1 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-charcoal-800 leading-[1.2]">
                Ne csak sminkelni tanulj meg. Válj <span className="italic text-gold-600">kiemelkedő, keresett szakemberré</span> mindössze 10 hét alatt és élj a <span className="italic">saját kreativitásodból</span> kötöttségek nélkül.
              </h1>
            </div>

            {/* Core Sub-headline */}
            <p className="font-system-ui text-lg sm:text-xl text-charcoal-700 font-normal leading-relaxed max-w-2xl">
              Sajátítsd el a sminkelés valódi logikáját egy háromszoros világbajnoki ezüstérmes sminkmester mentorálásával. A 10 hetes, gyakorlatorientált képzés végén hivatalos állami tanúsítvánnyal és kész portfólióval indíthatod el a saját, prémium praxisodat.
            </p>

            {/* CTA and Scarcity - Moved to a quiet note */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8 pt-2">
              <a
                href="#academy-form-anchor"
                className="font-system-ui group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
              >
                <span className="relative z-10">Elindítom a sminkes karrierem &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </a>
              
              <p className="text-xs text-charcoal-700 italic font-serif-lux tracking-wide">
                5 elérhető hely maradt!
              </p>
            </div>

          </div>

          {/* Visual Column - Large, editorial, asymmetrical */}
          <div className="lg:w-5/12 w-full mt-12 lg:mt-0 lg:sticky lg:top-32">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-cream-200">
                <ImageWatermark className="relative w-full h-full">
                  <img
                    {...imgProps("https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/academy/academy_hero.webp", "(min-width: 1024px) 42vw, 100vw")}
                    alt="Hovorka-Miskolczi Kinga Atelier"
                    className="w-full h-full object-cover md:grayscale-[0.2] contrast-[1.1] brightness-[1.02]"
                    fetchPriority="high"
                  />
                </ImageWatermark>
              </div>
              
              {/* Delicate Framing Corners */}
              <div className="absolute -top-4 -right-4 w-20 h-24 border-t border-r border-gold-300/30 -z-10" />
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

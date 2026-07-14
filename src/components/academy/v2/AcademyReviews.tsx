/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function AcademyReviews() {
  const reviews = [
    {
      name: "V. Jázmin",
      role: "Divatsmink Képzés Végzett",
      title: "Tényleg inspirálva érzi magát, szívvel-lélekkel adja át a tudását.",
      text: "Először sminkmodellként kerültem Kingához több alkalommal, és már akkor teljesen lenyűgözött a profizmusa, a kedvessége és az a nyugodt, támogató légkör, amit megteremtett maga körül. Később nála végeztem el a 100 órás divatsmink képzést. A képzés minden percét imádtam. Kinga hihetetlen türelemmel és odafigyeléssel tanít, tényleg fontos számára, hogy minden tanítványa fejlődjön."
    },
    {
      name: "P.B. Noémi",
      role: "Fodrász & Sminkes",
      title: "A lehető legjobb alapokat tanulhattam meg.",
      text: "Kingánál az alapképzésen vettem részt 2021-ben. Nagyon profi szakember, minden mozdulatunkra figyelt, kedves és segítőkész. Az órák mindig jó hangulatban teltek, bármi kérdésünk volt, mindenre válaszolt. Amikor végeztünk a smink elkészítésével, mindig készültek profi fotók a modellekről. Azóta is sminkesként (is) dolgozom, és magabiztosan állnak az ecsetek a kezemben!"
    },
    {
      name: "Cs. Anna",
      role: "Fodrász & Sminkes",
      title: "Mindenkinek szívből ajánlom, mind emberileg, mind szakmailag.",
      text: "2017-ben 60órás profi sminktanfolyamon vettem részt Kingánál. Kinga nagyon kedves, türelmes, segítőkész és nem utolsó sorban profi sminkes. A tanfolyam elvégzése után sem hagyott magamra, ha volt kérdésem készségesen segített. Frissen végzettként már lehetőségem is volt a Szegedi Szabadtérin sminkelni Kingának köszönhetően. Azóta is dolgozom a szakmában, rengeteg kismama, menyasszony, első bálozó szavazott bizalmat nekem."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Magazine Style */}
        <div className="mb-12 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Tanulóim Véleménye</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Tanítványaim 80%-a <br /><span className="italic">Aktívan a Szakmában Dolgozik és Oktat.</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl">
            Nézd meg, hogyan építettek sikeres karriert az esküvői és divatszakmában a Kingánál megszerzett bajnoki tudással.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group space-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-white/50"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-charcoal-800/5 group-hover:text-gold-400/10 transition-colors duration-500" />
              
              <div className="space-y-3 relative z-10">
                <h4 className="font-serif-lux text-xl lg:text-2xl font-light text-charcoal-800 leading-snug">
                  „{review.title}”
                </h4>
                <p className="text-base text-charcoal-700/70 font-light leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal-800/5">
                <h5 className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase">
                  {review.name}
                </h5>
                <p className="text-[10px] text-gold-600 font-medium italic mt-1 font-serif-lux">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

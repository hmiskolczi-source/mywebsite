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
      name: "Kovács Petra",
      role: "Esküvői & Divatsminkes • Szeged",
      title: "A végzés után azonnal felkértek egy esküvői fotózásra.",
      text: "A tanfolyam alatt készített és Kinga által retusált képekkel azonnal el tudtam indulni valódi munkát keresni. Az oklevélnek köszönhetően az ügynökségek és a menyasszonyok azonnal komolyan vettek."
    },
    {
      name: "Németh Laura",
      role: "Szépségipari Vállalkozó & Oktató • Budapest",
      title: "Végre megértettem a sminkelés valódi logikáját.",
      text: "Kinga megtanította a bőrdiagnosztika, a színdiagnózis és az arc-architektúra kőkemény logikáját, így ma már teljesen magabiztosan javítok érett vagy kifejezetten problémás bőrt is."
    },
    {
      name: "Szabó Júlia",
      role: "Esküvői Sminkes • Kecskemét",
      title: "Az egyéni figyelem tényleg 100%-os volt.",
      text: "A maximum 5 fős exkluzív limit miatt Kinga minden egyes ecsetvonásomnál mögöttem állt és közvetlenül javította a tartást és a satírozást. Ez a támogatás hihetetlen gyorsan átlendített az akadályokon."
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Magazine Style */}
        <div className="mb-24 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Wall of Love</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Tanítványaink <br /><span className="italic">sikertörténetei.</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl">
            Tanítványaink 80%-a aktívan a szakmában dolgozik. Nézd meg, hogyan építettek karriert a Kingánál megszerzett tudással.
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
              className="group space-y-8 relative"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-charcoal-800/5 group-hover:text-gold-400/10 transition-colors duration-500" />
              
              <div className="space-y-4 relative z-10">
                <h4 className="font-serif-lux text-2xl font-light text-charcoal-800 leading-snug">
                  „{review.title}”
                </h4>
                <p className="text-base text-charcoal-700/70 font-light leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="pt-8 border-t border-charcoal-800/5">
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

        {/* Museum Moment / Social Evidence */}
        <div className="mt-32 pt-24 border-t border-charcoal-800/5 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-30 grayscale hover:opacity-60 transition-opacity duration-1000">
            <span className="font-serif-lux text-lg tracking-[0.2em] font-bold uppercase">Magyarország Szépe</span>
            <span className="font-serif-lux text-lg tracking-[0.2em] font-bold uppercase">Fashion Week</span>
            <span className="font-serif-lux text-lg tracking-[0.2em] font-bold uppercase">Nők Lapja</span>
          </div>
          <p className="text-[10px] font-bold tracking-luxury text-charcoal-700/30 uppercase mt-8">
            Események, ahol diákjaink Kinga mellett bizonyíthattak
          </p>
        </div>

      </div>
    </section>
  );
}

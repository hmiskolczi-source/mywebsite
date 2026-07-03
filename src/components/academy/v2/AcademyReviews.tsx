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
      role: "Esküvői & Divatsminkes specialistaként dolgozik • Szeged",
      title: "A végzés után azonnal felkértek egy esküvői fotózásra a portfólióm alapján!",
      text: "A tanfolyam alatt készített és Kinga professzionális fényképezőjével retusált képekkel azonnal el tudtam indulni valódi munkát keresni és feltölteni a közösségi oldalaimat. A nevének és az oklevélnek köszönhetően az ügynökségek és a menyasszonyok azonnal komolyan vettek és szóba álltak velem."
    },
    {
      name: "Németh Laura",
      role: "Szépségipari Vállalkozó & Oktató • Budapest",
      title: "Végre megértettem a sminkelés valódi logikáját a merev szabályok helyett.",
      text: "Más sminkiskolákban csak lemásoltatták az éppen divatos maszkos formákat az azonos arckarakterű diákokon. Kinga megtanította a bőrdiagnosztika, a színdiagnózis és az arc-architektúra kőkemény logikáját, így ma már teljesen magabiztosan sminkelek és javítok érett vagy kifejezetten problémás bőrt is."
    },
    {
      name: "Szabó Júlia",
      role: "Esküvői Sminkes • Kecskemét",
      title: "A legcsodásabb mentorprogram, ahol az egyéni figyelem tényleg 100%-os volt.",
      text: "Nem egy zajos, harmincfős teremben ültünk. A maximum 5 fős exkluzív limit miatt Kinga minden egyes ecsetvonásomnál mögöttem állt és közvetlenül javította a tartást, nyomást és a satírozást. Ez a támogatás hihetetlen gyorsan átlendített az akadályokon."
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

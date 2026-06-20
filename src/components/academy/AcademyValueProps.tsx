/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function AcademyValueProps() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const brands = [
    "MAKE UP FOR EVER", "INGLOT", "BEN NYE", "GRIMAS", "M·A·C", 
    "URBAN DECAY", "ANASTASIA BH", "JEFFREE STAR", "BOBBI BROWN", 
    "MAKE-UP ATELIER", "LIME CRIME", "COLOURPOP", "MADE BY MITCHELL", 
    "STACEY MARIE", "P.LOUISE"
  ];

  const techniques = [
    "AQUA TECHNIKA", "TINTA TECHNIKA", "GEL TECHNIKA", "COLOR SMOKEY", 
    "CUT CREASE TECHNIKA", "KREATÍV MAKEUP-OK", "STAGE MAKEUP-OK", "KIEGÉSZÍTŐ ELEMEK"
  ];

  return (
    <section className="bg-cream-100 py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-32 max-w-2xl">
          <h2 className="font-serif-lux text-4xl sm:text-6xl font-light text-charcoal-800 tracking-tight leading-none mb-8">
            A szakmai <br /><span className="italic">kiteljesedés</span> útja.
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light leading-relaxed">
            Nem titkolózunk, nincsenek kötelező kezdőcsomagok. Az egyetlen célunk, hogy gondolkodó, sikeres szakembert képezzünk belőled.
          </p>
        </div>
        
        <div className="space-y-48 md:space-y-64">
          
          {/* Pillar 1: Material Security - Asymmetrical Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">01 / Anyagellátás</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  Teljes körű prémium anyagbiztosítás <br /> extra költségek nélkül.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                A képzés teljes időtartama alatt minden luxus- és professzionális alapanyagot korlátlanul biztosítunk számodra. Így egyetlen forintot sem kell felesleges kezdőcsomagokra kidobnod. Kinga pontosan megmutatja, mi az a 3 kulcspaletta, amivel a munka 90%-át megoldhatod.
              </p>
              
              <div className="pl-8 border-l border-gold-400/30">
                <p className="font-serif-lux text-lg italic text-charcoal-700 leading-relaxed">
                  „Hatalmas megkönnyebbülés volt, hogy nem kellett százezreket elköltenem sminkcuccokra az első nap előtt.”
                </p>
                <p className="text-[10px] font-bold tracking-luxury uppercase mt-4 text-gold-600">— D. Eszter</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" 
                  alt="Profi sminkek" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold-300/20 -z-10" />
            </motion.div>
          </div>

          {/* Subdued Brand Bar - Replacing loud marquee */}
          <div className="py-20 border-y border-charcoal-800/5">
            <p className="text-[10px] font-bold tracking-luxury text-charcoal-700/40 uppercase text-center mb-12">
              Korlátlanul biztosított prémium márkáink
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-1000">
              {brands.slice(0, 8).map((brand, idx) => (
                <span key={idx} className="font-serif-lux text-sm tracking-widest font-medium text-charcoal-900">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: Retouched Portfolio - Reversed Asymmetry */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">02 / Portfólió</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  Saját fotóstúdió és retusált <br /> digitális portfólió.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                A tanfolyam során elkészített legjobb sminkjeidről professzionális stúdiókörnyezetben készítünk képeket. A kész, precízen retusált fotókból egy olyan komplett portfóliót kapsz, amivel azonnal magabiztosan szerezhetsz prémium vendégeket.
              </p>

              <div className="pl-8 border-l border-gold-400/30">
                <p className="font-serif-lux text-lg italic text-charcoal-700 leading-relaxed">
                  „A portfólióm miatt azonnal megkerestek esküvői felkérésekkel az első hetekben. Döbbenetes volt!”
                </p>
                <p className="text-[10px] font-bold tracking-luxury uppercase mt-4 text-gold-600">— László Petra</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800" 
                  alt="Portfólió fotózás" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold-300/20 -z-10" />
            </motion.div>
          </div>

          {/* Pillar 3: Metodika */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">03 / Metodika</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  Legkeresettebb, legmodernebb <br /> technikák.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                Úgy építettük fel a tanmenetet, hogy minden héten egy-egy modern, piacképes technikát sajátíts el mélyrehatóan. A második napon egy teljesen új karakterű modellen alkotod meg ugyanazt a sminket, így a technika azonnal rögzül.
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                {techniques.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-bold tracking-widest text-charcoal-700/50 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800" 
                  alt="Modell sminkelés" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
            </motion.div>
          </div>

          {/* Pillar 4: Bőrdiagnosztika */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">04 / Bőrdiagnosztika</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  A bőr ismerete nélkül <br /> a smink csak festék.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                Kinga közel 10 év kozmetikusi tapasztalattal tanít. Megtanulod olvasni az arcot: a bőrtípust, a bőrdiagnózist, az arcformát. Azt a gondolkodást, amivel minden vendéghez másképpen állsz hozzá.
              </p>

              <button 
                onClick={scrollToForm}
                className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase border-b border-gold-400 pb-1 hover:text-gold-600 transition-colors"
              >
                Megtanulom a bőr rejtelmeit &rarr;
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800" 
                  alt="Bőrdiagnosztika" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

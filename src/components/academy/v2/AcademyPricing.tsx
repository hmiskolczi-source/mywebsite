/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function AcademyPricing() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const inclusions = [
    "10 héten át tartó, 100 órás rendkívül intenzív, gyakorlat-orientált élő oktatás",
    "Korlátlan luxus & prémium anyaghasználat (M·A·C, Inglot, Makeup Forever stb.)",
    "Felnőttképzési regisztrációs számmal ellátott, a Magyar Fodrász-Kozmetikus-Körmös Egyesület pecsétjével és Hajas László aláírásával hitelesített, államilag elismert szakmai tanúsítvány",
    "Kizárólag kis létszámú, elit csoportos mentorálás",
    "Online pótlási lehetőség: Hiányzás esetén élő videós közvetítés és visszanézhető órák egy zárt Facebook-csoportban."
  ];

  const bonuses = [
    "Komplett, profi portfólió",
    "Saját szakmai tankönyv",
    "Személyre szabott vásárlási tanácsadás",
    "Azonnali szakmai ajánlás (Márkagarancia)",
    "Folyamatos szakmai mentoráció"
  ];

  const reviews = [
    {
      initials: "NM",
      name: "Nagy Melinda",
      role: "Diplomás Pro Sminkes tanulónk",
      title: "„Soha életemben nem hoztam ennél jobb döntést. Már tanulás közben megtérült a tanfolyam.”",
      text: "„Mindenki le akart beszélni a sminkiskolákról, mert azt mondták, túl telített a piac. Kingáéknál teljesen más szemléletet kaptam: nemcsak festeni, hanem vállalkozást építeni, karaktert olvasni és vendéget megtartani is megtanultam.”"
    },
    {
      initials: "SE",
      name: "Szabó Eszter",
      role: "Végzett Mentorprogramos tanulónk",
      title: "„Már a képzés 6. hetén saját munkákból kerestem meg az árát!”",
      text: "„Úgy érkeztem ide, hogy csak az alapokat akartam tudni, de Kinga energiája és professzionalizmusa teljesen magával ragadott. Amikor a modulok végén elkészültek a profi, retusált képek, azonnal jöttek a felkérések.”"
    },
    {
      initials: "KP",
      name: "Kovács Petra",
      role: "Profi Sminkes mentoráltunk",
      title: "„A legfinomabb szakmai titkokat és a márkafüggetlen igazságot kaptam.”",
      text: "„Sokáig kerestem olyan iskolát, ahol nem akarnak kötelező márkacsomagot rám erőszakolni. Itt a legjobb high-end és drogériás alternatívákat is megismertük, így százezres felesleges költésektől mentett meg Kinga.”"
    }
  ];

  return (
    <section id="academy-pricing" className="py-20 md:py-32 lg:py-48 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 space-y-6">
          <span className="text-[10px] md:text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Befektetés a jövődbe</span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1] max-w-4xl">
            Transzparens árazás, <br className="hidden sm:block" /><span className="italic">rejtett költségek nélkül.</span>
          </h2>
          <p className="text-base md:text-lg text-charcoal-700/70 font-light max-w-xl leading-relaxed">
            Nálunk nincsenek kötelező kezdőcsomagok és kötelezően megvásárolandó sminkkészletek. Egyetlen, magába foglaló díjért mindent megkapsz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32 items-stretch">
          
          {/* Main Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white p-6 sm:p-10 md:p-16 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-charcoal-800/5 relative flex flex-col min-w-0"
          >
            {/* Minimal Badge */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-gold-500 uppercase border border-gold-500/30 px-2 py-1 md:px-3 md:py-1">
                Exkluzív Előfoglalás
              </span>
            </div>

            <div className="space-y-10 md:space-y-16 flex-grow">
              <div className="space-y-4 pt-4 sm:pt-0">
                <h3 className="font-serif-lux text-2xl md:text-3xl font-light text-charcoal-800">
                  Pro Makeup Mentorprogram
                </h3>
                <p className="text-[9px] md:text-[10px] font-bold tracking-luxury text-charcoal-700/40 uppercase">
                  100 órás, 10 hetes elit csoportos képzés
                </p>
              </div>

              {/* Price Highlight */}
              <div className="py-8 md:py-12 border-y border-charcoal-800/5 flex flex-col sm:flex-row justify-between items-baseline gap-6 md:gap-8">
                <div className="space-y-1">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-luxury text-charcoal-700/40 uppercase">Teljes díj</span>
                  <div className="font-serif-lux text-4xl md:text-5xl lg:text-6xl text-charcoal-800 font-light tracking-tight">
                    990 000 <span className="text-xl md:text-2xl ml-[-4px] md:ml-[-8px]">Ft</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-luxury text-gold-600 uppercase">Részletfizetés</span>
                  <div className="text-base md:text-lg text-charcoal-700 font-light italic">
                    3 × 330 000 Ft
                  </div>
                  <p className="text-[9px] text-charcoal-700/40 uppercase tracking-widest">Kamatmentes opció</p>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <h4 className="text-[10px] md:text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase">A program tartalma</h4>
                  <ul className="space-y-4">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-charcoal-700/80 font-light leading-relaxed">
                        <span className="text-gold-500 font-bold mt-[-2px]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] md:text-[11px] font-bold tracking-luxury text-gold-600 uppercase italic">Ajándék bónuszok</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {bonuses.map((bonus, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-charcoal-800 font-medium">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold-400" />
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 md:pt-8">
                <button
                  onClick={scrollToForm}
                  className="w-full bg-charcoal-800 text-cream-100 text-[10px] md:text-xs font-bold tracking-luxury uppercase py-5 md:py-6 transition-all duration-500 hover:bg-charcoal-700 rounded-none shadow-xl"
                >
                  Jelentkezem Kingához képzésre
                </button>
                <p className="text-center text-[9px] md:text-[10px] text-charcoal-700/40 uppercase tracking-[0.2em] mt-6">
                  🔒 A helyfoglalás a 10% előleg után válik véglegessé.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:w-[400px] xl:w-[450px] flex flex-col min-w-0">
            <div className="space-y-8 flex-grow flex flex-col">
              <span className="text-[11px] font-bold tracking-luxury text-charcoal-700/40 uppercase block text-center lg:text-left">Tanulói vélemények</span>
              
              <div className="relative flex-grow min-h-[450px] lg:min-h-0 overflow-hidden rounded-sm bg-cream-200/20 border border-charcoal-800/5">
                <style>{`
                  @keyframes marquee-v2-vertical {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                  }
                  .marquee-v2-scroller {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    animation: marquee-v2-vertical 60s linear infinite;
                    height: max-content;
                    padding: 1.5rem;
                  }
                  .marquee-v2-scroller:hover {
                    animation-play-state: paused;
                  }
                `}</style>

                <div className="absolute inset-0 flex flex-col">
                  <div className="marquee-v2-scroller">
                    {[...reviews, ...reviews, ...reviews].map((review, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white p-6 md:p-8 border border-charcoal-800/5 shadow-sm hover:shadow-md transition-all duration-300 w-full flex flex-col"
                      >
                        <div className="space-y-4">
                          <div className="flex text-gold-400 gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <h4 className="font-serif-lux text-lg md:text-xl font-light text-charcoal-800 leading-snug">
                            {review.title}
                          </h4>
                          <p className="text-xs md:text-sm text-charcoal-700/70 font-light leading-relaxed line-clamp-4 lg:line-clamp-none">
                            {review.text}
                          </p>
                          <div className="pt-4 border-t border-charcoal-800/5 mt-auto">
                            <h5 className="text-[10px] md:text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase">{review.name}</h5>
                            <p className="text-[9px] text-gold-600 font-medium italic mt-1 font-serif-lux">{review.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gradient Masks */}
                  <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-cream-100 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-gradient-to-t from-cream-100 to-transparent pointer-events-none z-10" />
                </div>
              </div>
            </div>

            {/* Guarantee Section */}
            <div className="pt-16 mt-12 border-t border-charcoal-800/10 space-y-8">
              <h4 className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase italic text-center lg:text-left">100%-os Gyakorlati Garancia</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  {
                    title: "Személyes szakmai garancia:",
                    desc: "Addig támogatlak minden technikai elakadásnál, amíg el nem érjük a sikert."
                  },
                  {
                    title: "Szigorú szakmai korlát:",
                    desc: "Addig senkit nem engedek vizsgára, amíg nem látom rajta a képességet."
                  },
                  {
                    title: "Biztos piaci belépő:",
                    desc: "Tanulóim 80%-a ma is a szakmából él – a nálam megszerzett alapok ajánlólevél."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] md:text-[11px] text-charcoal-800 font-bold uppercase tracking-widest">{item.title}</p>
                    <p className="text-xs md:text-sm text-charcoal-700/70 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="w-1 h-1 rounded-full bg-gold-400" />
                <div className="w-1 h-1 rounded-full bg-gold-400" />
                <div className="w-1 h-1 rounded-full bg-gold-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

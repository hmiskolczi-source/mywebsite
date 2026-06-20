/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function AcademyValueProps() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-cream-100 space-y-24 md:space-y-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">Kiemelkedő Értékajánlataink</span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
            Minden részlet a szakmai kiteljesedést szolgálja
          </h2>
          <p className="text-charcoal-700 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Nem titkolózunk, nincsenek kötelező kezdőcsomagok. Az egyetlen célunk, hogy gondolkodó, sikeres szakembert képezzünk belőled gyorsan és alaposan.
          </p>
        </div>
        
        <div className="flex flex-col">
          
          {/* Pillar 1: Material Security */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[11px] font-mono font-bold text-gold-600 uppercase tracking-widest block">01 / ANYAGELLÁTÁS</span>
              <h3 className="font-serif-lux text-3xl sm:text-4xl font-medium text-charcoal-900 tracking-tight leading-tight">
                Teljes Körű Prémium Anyagbiztosítás Extra Költségek Nélkül
              </h3>
              <p className="text-charcoal-700 font-light leading-relaxed">
                A képzés teljes időtartama alatt minden luxus- és professzionális alapanyagot, nemzetközi világmárkák termékeit és csúcskategóriás eszközeit korlátlanul biztosítjuk számodra szegedi és budapesti lakásstúdiónkban. Így egyetlen forintot sem kell felesleges, méregdrága kezdőcsomagokra kidobnod a beiratkozás előtt. Ráadásul Kinga segít összeállítani a kezdő sminkkészletedet a pénztárcád és a céljaid alapján. Pontosan megmutatja, mi az a 3 kulcspaletta, amivel a munka 90%-át megoldhatod felesleges kiadások nélkül.
              </p>
              
              <div className="bg-gold-50 border-l-4 border-gold-400 p-4 rounded-r-lg italic text-charcoal-800 text-sm shadow-sm">
                „Hatalmas megkönnyebbülés volt, hogy nem kellett százezreket elköltenem sminkcuccokra az első nap előtt. Mindenből a legfelsőbb kategóriát kaptuk!” – D. Eszter, végzett tanuló.
              </div>

              <div className="pt-2">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-gold-600 uppercase hover:text-gold-700 transition-colors cursor-pointer"
                >
                  Felveszem a kapcsolatot Kingával &rarr;
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-cream-300">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600" 
                alt="Profi sminkek" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Endless Moving Logo Marquee for Luxury Brands */}
          <div className="relative py-12 my-12 lg:my-16 overflow-hidden bg-cream-200/50 border-y border-cream-350/40 -mx-4 sm:-mx-6 lg:-mx-8">
            <style>{`
              @keyframes marquee-scroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-scroll {
                display: flex;
                width: max-content;
                animation: marquee-scroll 40s linear infinite;
              }
            `}</style>
            
            <div className="text-center mb-6 px-4">
              <span className="text-[10px] font-mono tracking-widest text-gold-700 font-bold uppercase block">
                A stúdiókban korlátlanul biztosított prémium márkáink:
              </span>
            </div>

            <div className="flex overflow-hidden relative w-full select-none">
              <div className="animate-marquee-scroll py-2 flex items-center">
                {[
                  "MAKE UP FOR EVER", "INGLOT", "BEN NYE", "GRIMAS", "M·A·C", 
                  "URBAN DECAY", "ANASTASIA BH", "JEFFREE STAR", "BOBBI BROWN", 
                  "MAKE-UP ATELIER", "LIME CRIME", "COLOURPOP", "MADE BY MITCHELL", 
                  "STACEY MARIE", "P.LOUISE",
                  "MAKE UP FOR EVER", "INGLOT", "BEN NYE", "GRIMAS", "M·A·C", 
                  "URBAN DECAY", "ANASTASIA BH", "JEFFREE STAR", "BOBBI BROWN", 
                  "MAKE-UP ATELIER", "LIME CRIME", "COLOURPOP", "MADE BY MITCHELL", 
                  "STACEY MARIE", "P.LOUISE"
                ].map((brand, idx) => (
                  <span 
                    key={idx}
                    className="font-sans text-xs sm:text-sm tracking-[0.2em] font-semibold text-charcoal-900 bg-white border border-cream-300/80 px-6 py-3 rounded-full shadow-sm mx-4 inline-block transition-all hover:border-gold-400 hover:bg-gold-50/50 whitespace-nowrap"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              
              {/* Fade masks for elegant edge transition */}
              <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Pillar 2: Retouched Portfolio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-cream-300">
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600" 
                alt="Portfólió fotózás" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-[11px] font-mono font-bold text-gold-600 uppercase tracking-widest block">02 / PORTFÓLIÓ</span>
              <h3 className="font-serif-lux text-3xl sm:text-4xl font-medium text-charcoal-900 tracking-tight leading-tight">
                Saját Fotóstúdió és Retusált Digitális Portfólió
              </h3>
              <p className="text-charcoal-700 font-light leading-relaxed">
                A tanfolyam során elkészített legjobb sminkjeidről és a záróvizsgádról professzionális stúdiókörnyezetben, csúcsminőségű felszereléssel készítünk képeket. A kész, precízen retusált, magazin-minőségű fotókból egy olyan komplett digitális portfóliót kapsz, amivel azonnal magabiztosan szerezhetsz prémium vendégeket.
              </p>

              <div className="bg-gold-50 border-l-4 border-gold-400 p-4 rounded-r-lg italic text-charcoal-800 text-sm shadow-sm">
                „A portfólióm miatt azonnal megkerestek esküvői felkérésekkel az első hetekben. Döbbenetes magabiztosságot adott!” – László Petra.
              </div>

              <div className="pt-2">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-gold-600 uppercase hover:text-gold-700 transition-colors cursor-pointer"
                >
                  Jelentkezem a képzésre &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Endless Moving Photo Marquee for Student Portfolio */}
          <div className="relative py-12 my-12 lg:my-16 overflow-hidden bg-cream-200/50 border-y border-cream-350/40 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="text-center mb-8 px-4">
              <span className="text-[10px] font-mono tracking-widest text-gold-700 font-bold uppercase block">
                Néhány profi fotó korábbi diákjaink portfóliójából:
              </span>
            </div>

            <div className="flex overflow-hidden relative w-full select-none">
              <div className="animate-marquee-scroll py-2 flex items-center">
                {[
                  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
                  // Loop redundancy for seamless scrolling marquee
                  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                ].map((imgUrl, idx) => (
                  <div 
                    key={idx}
                    className="w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shadow-md border border-cream-300/80 mx-4 inline-block transition-transform duration-300 hover:scale-[1.03] hover:border-gold-400 select-none pointer-events-none bg-charcoal-900"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Student Portfolio Work ${idx}`} 
                      className="w-full h-full object-cover select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              
              {/* Fade masks for elegant edge transition */}
              <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Pillar 3: Duplicated Modeling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 md:mt-16 lg:mt-24">
            <div className="space-y-6">
              <span className="text-[11px] font-mono font-bold text-gold-600 uppercase tracking-widest block">03 / METODIKA</span>
              <h3 className="font-serif-lux text-3xl sm:text-4xl font-medium text-charcoal-900 tracking-tight leading-tight">
                Legkeresettebb, legmodernebb technikák
              </h3>
              <p className="text-charcoal-700 font-light leading-relaxed">
                Úgy építettük fel a tanmenetet, hogy minden héten egy-egy modern, piacképes technikát sajátíts el mélyrehatóan. Miután az első napon végignézted a professzionális bemutatót és begyakoroltad a lépéseket, a második napon egy teljesen új karakterű modellen, más színvilággal alkotod meg ugyanazt a sminket. Így a technika azonnal rögzül a kezedben, és pontosan látni fogod, hogyan alakítsd a mozdulatokat a különböző arcformákhoz.
              </p>

              <div className="pt-2">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-gold-600 uppercase hover:text-gold-700 transition-colors cursor-pointer"
                >
                  Szeretném elsajátítani a technikákat &rarr;
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-cream-300">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600" 
                alt="Modell sminkelés" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Endless Moving Tech Marquee for Techniques */}
          <div className="relative py-12 mt-16 md:mt-24 lg:mt-32 overflow-hidden bg-cream-200/50 border-y border-cream-350/40 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="text-center mb-6 px-4">
              <span className="text-[10px] font-mono tracking-widest text-gold-700 font-bold uppercase block">
                Néhány technika a sok közül, amit nálunk elsajátítasz majd:
              </span>
            </div>

            <div className="flex overflow-hidden relative w-full select-none">
              <div className="animate-marquee-scroll py-2 flex items-center">
                {[
                  "AQUA TECHNIKA", "TINTA TECHNIKA", "GEL TECHNIKA", "COLOR SMOKEY", 
                  "CUT CREASE TECHNIKA", "KREATÍV MAKEUP-OK", "STAGE MAKEUP-OK", "KIEGÉSZÍTŐ ELEMEK",
                  "AQUA TECHNIKA", "TINTA TECHNIKA", "GEL TECHNIKA", "COLOR SMOKEY", 
                  "CUT CREASE TECHNIKA", "KREATÍV MAKEUP-OK", "STAGE MAKEUP-OK", "KIEGÉSZÍTŐ ELEMEK"
                ].map((tech, idx) => (
                  <span 
                    key={idx}
                    className="font-sans text-xs sm:text-sm tracking-[0.2em] font-semibold text-charcoal-900 bg-white border border-cream-300/80 px-6 py-3 rounded-full shadow-sm mx-4 inline-block transition-all hover:border-gold-400 hover:bg-gold-50/50 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Fade masks for elegant edge transition */}
              <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Pillar 4: Skin Logic & Cosmetics Base */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 md:mt-16 lg:mt-24">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-cream-300">
              <img 
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=600" 
                alt="Bőrdiagnosztika és bőrismeret" 
                className="w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-[11px] font-mono font-bold text-gold-600 uppercase tracking-widest block">04 / BŐRDIAGNOSZTIKA</span>
              <h3 className="font-serif-lux text-3xl sm:text-4xl font-medium text-charcoal-900 tracking-tight leading-tight">
                A bőr ismerete nélkül a smink csak festék. Itt az alapoktól sajátítod el a lényeget.
              </h3>
              <p className="text-charcoal-700 font-light leading-relaxed">
                Kinga közel 10 év kozmetikusi tapasztalattal tanít sminkelést. Nem divatos stílusokat tanulsz meg lemásolni, hanem megtanulod olvasni az arcot: a bőrtípust, a bőrdiagnózist, az arcformát. Azt a gondolkodást, amivel minden egyes vendéghez másképpen állsz hozzá – amitől a munkád prémium lesz, nem csak szép.
              </p>

              <div className="pt-2">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-gold-600 uppercase hover:text-gold-700 transition-colors cursor-pointer"
                >
                  Megtanulom a bőr rejtelmeit &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

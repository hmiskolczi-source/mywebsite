/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, Flame, HelpCircle, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function AcademyPricing() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="academy-pricing" className="py-20 md:py-32 bg-cream-100 border-t border-cream-300 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">Befektetés a Jövődbe</span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal-900 leading-tight">
            Transzparens árazás, rejtett költségek nélkül
          </h2>
          <div className="h-0.5 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-charcoal-700 font-light text-sm max-w-lg mx-auto leading-relaxed pt-2">
            Nálunk nincsenek kötelező kezdőcsomagok és kötelezően megvásárolandó sminkkészletek. Egyetlen, magába foglaló, részletekben is fizethető díjért mindent megkapsz a sikeres induláshoz.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-stretch items-start">
          
          {/* SaaS-Style Plan Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-cream-300/80 shadow-xl overflow-hidden relative transition-all duration-300 hover:shadow-2xl">
            
            {/* Visual Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
            
            {/* Popular/Exclusive Badge */}
            <div className="sm:absolute sm:top-6 sm:right-6 px-6 pt-6 sm:px-0 sm:pt-0">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-500 text-charcoal-950 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full shadow-sm">
                <Flame className="w-3 h-3 animate-pulse" /> EXKLUZÍV ELŐFOGLALÁS
              </span>
            </div>

            <div className="p-6 sm:p-10 pt-4 sm:pt-10 space-y-8">
              
              {/* Heading Area */}
              <div className="space-y-2">
                <h3 className="font-serif-lux text-2xl sm:text-3xl font-bold text-charcoal-900">
                  Pro Makeup Mentorprogram
                </h3>
                <p className="text-xs text-gold-600 font-mono font-bold tracking-widest uppercase">
                  100 órás, 10 hetes elit csoportos gyakorlat-fókuszú képzés
                </p>
              </div>

              {/* Price Tag with Installment option */}
              <div className="bg-cream-100/60 p-6 rounded-2xl border border-cream-300/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs text-charcoal-600 uppercase tracking-wider font-semibold block">Teljes díj:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif-lux font-bold text-charcoal-900">990 000 Ft</span>
                  </div>
                </div>
                <div className="sm:border-l sm:border-cream-350 sm:pl-6 space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold rounded">
                    Kérhető opció
                  </span>
                  <p className="text-sm font-semibold text-charcoal-900">
                    3 részletben fizethető:
                  </p>
                  <p className="text-xs text-charcoal-700 font-light">
                    3 × 330 000 Ft (külön kamat nélkül)
                  </p>
                </div>
              </div>

              {/* What is Included Checklist */}
              <div className="space-y-4">
                <p className="text-xs font-mono font-bold tracking-wider text-charcoal-700 uppercase">
                  A program teljes tartalma az első naptól:
                </p>
                <ul className="space-y-3.5">
                  {[
                    "10 héten át tartó, 100 órás rendkívül intenzív, gyakorlat-orientált élő oktatás",
                    "Korlátlan luxus & prémium anyaghasználat (M·A·C, Inglot, Makeup Forever stb.)",
                    "Felnőttképzési regisztrációs számmal ellátott, a Magyar Fodrász-Kozmetikus-Körmös Egyesület pecsétjével és Hajas László aláírásával hitelesített, államilag elismert szakmai tanúsítvány",
                    "Kizárólag kis létszámú, elit csoportos mentorálás",
                    "Online pótlási lehetőség: Hiányzás esetén élő videós közvetítés és visszanézhető órák egy zárt Facebook-csoportban."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-800 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-400/25 flex items-center justify-center text-gold-700 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High-Value Bonuses */}
              <div className="pt-6 border-t border-cream-200 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <p className="text-xs font-mono font-bold tracking-wider text-gold-700 uppercase">
                    Exkluzív ajándék bónuszok (0 Ft plusz költséggel):
                  </p>
                </div>
                
                <div className="space-y-3 pl-1">
                  {[
                    "Komplett, profi portfólió",
                    "Saját szakmai tankönyv",
                    "Személyre szabott vásárlási tanácsadás",
                    "Azonnali szakmai ajánlás (Márkagarancia)",
                    "Folyamatos szakmai mentoráció"
                  ].map((bonus, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-charcoal-800 font-medium">
                      <span className="text-gold-600 font-extrabold text-base shrink-0 select-none">✓</span>
                      <span>{bonus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-charcoal-900 text-cream-100 p-6 sm:p-8 rounded-2xl space-y-6 border border-gold-500/20 shadow-md">
                <div className="flex items-center gap-3 border-b border-charcoal-800 pb-4">
                  <ShieldCheck className="w-6 h-6 text-gold-400 flex-shrink-0" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase block">100%-os Gyakorlati Garancia</span>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Személyes szakmai garancia:",
                      desc: "Ha elkötelezetten látogatod az órákat és beleteszed a szükséges szorgalmat, addig támogatlak minden technikai elakadásnál, amíg el nem érjük a sikert."
                    },
                    {
                      title: "Szigorú szakmai korlát:",
                      desc: "Addig senkit nem engedek záróvizsgára, amíg nem látom rajta a kitartó gyakorlást, és azt, hogy képes profi szinten, önállóan sminkelni."
                    },
                    {
                      title: "Biztos piaci belépő:",
                      desc: "Ennek a maximalizmusnak köszönhető, hogy a tanulóim 80%-a ma is a szakmából él vagy oktat – a nálam megszerzett alapok azonnali ajánlólevelet jelentenek a piacon."
                    }
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="text-gold-400 shrink-0 text-sm mt-0.5">✓</span>
                      <p className="text-xs sm:text-sm text-cream-200 font-light leading-relaxed">
                        <strong className="text-white font-semibold block sm:inline sm:mr-1.5">{bullet.title}</strong>
                        {bullet.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={scrollToForm}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold tracking-wider uppercase py-4 rounded-xl border border-gold-400 hover:border-gold-500 transition-all cursor-pointer shadow-md text-center text-sm hover:-translate-y-0.5 active:translate-y-0"
                >
                  Jelentkezem Kingához képzésre &rarr;
                </button>
                <p className="text-center text-[11px] text-charcoal-600 pt-3 font-mono">
                  🔒 A helyfoglalás a 10% előleg beérkezése után válik 100% véglegessé.
                </p>
              </div>

            </div>
          </div>
          
          {/* Reviews & Informative Sticky Sidebar Column */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[420px] lg:h-full min-h-[340px] lg:min-h-0 overflow-hidden rounded-3xl bg-cream-100/20">
            <style>{`
              @keyframes marquee-vertical-down {
                0% { transform: translateY(-50%); }
                100% { transform: translateY(0%); }
              }
              @keyframes marquee-horizontal-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              
              /* Default Mobile: horizontal scrolling */
              .marquee-scroller {
                display: flex;
                flex-direction: row;
                gap: 1.5rem;
                animation: marquee-horizontal-left 45s linear infinite;
                width: max-content;
                padding: 1rem;
              }
              
              /* Desktop: vertical scrolling */
              @media (min-width: 1024px) {
                .marquee-scroller {
                  display: flex;
                  flex-direction: column;
                  gap: 1.5rem;
                  animation: marquee-vertical-down 45s linear infinite;
                  width: auto;
                  height: max-content;
                  padding: 0.25rem 0;
                }
              }
            `}</style>

            {/* Scrolling container */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="marquee-scroller">
                {[
                  {
                    initials: "NM",
                    name: "Nagy Melinda",
                    role: "Diplomás Pro Sminkes tanulónk",
                    title: "„Soha életemben nem hoztam ennél jobb döntést. Már tanulás közben megtérült a tanfolyam.”",
                    text: "„Mindenki le akart beszélni a sminkiskolákról, mert azt mondták, túl telített a piac. Kingáéknál teljesen más szemléletet kaptam: nemcsak festeni, hanem vállalkozást építeni, karaktert olvasni és vendéget megtartani is megtanultam. Az esküvői szezonban már teli volt a naptáram Szeged és Budapest környékén.”"
                  },
                  {
                    initials: "SE",
                    name: "Szabó Eszter",
                    role: "Végzett Mentorprogramos tanulónk",
                    title: "„Már a képzés 6. hetén saját munkákból kerestem meg az árát!”",
                    text: "„Úgy érkeztem ide, hogy csak az alapokat akartam tudni, de Kinga energiája és professzionalizmusa teljesen magával ragadott. Amikor a modulok végén elkészültek a profi, retusált képek a modelljeimről és kitettem őket, azonnal jöttek az első felkérések.”"
                  },
                  {
                    initials: "KP",
                    name: "Kovács Petra",
                    role: "Profi Sminkes mentoráltunk",
                    title: "„A legfinomabb szakmai titkokat és a márkafüggetlen igazságot kaptam.”",
                    text: "„Sokáig kerestem olyan iskolát, ahol nem akarnak kötelező márkacsomagot rám erőszakolni. Itt a legjobb high-end és drogériás alternatívákat is megismertük, így százezres felesleges költésektől mentett meg Kinga tanácsa. Az elméleti tankönyve pedig egy kincs!”"
                  },
                  {
                    initials: "HS",
                    name: "Horváth Sára",
                    role: "Elit Sminkes tanulónk",
                    title: "„Kinga nemcsak oktat, hanem valódi partnerként támogat a karrieremben.”",
                    text: "„Nem csak a technikáig tart a felelőssége. Bármilyen bizonytalanságom volt a vendégkezeléssel vagy a smink tartósságával kapcsolatban, mindig azonnali, gyakorlatias választ kaptam tőle. Itt egy igazi közösség tagja lehetsz!”"
                  },
                  // Duplicate for seamless infinite loop
                  {
                    initials: "NM",
                    name: "Nagy Melinda",
                    role: "Diplomás Pro Sminkes tanulónk",
                    title: "„Soha életemben nem hoztam ennél jobb döntést. Már tanulás közben megtérült a tanfolyam.”",
                    text: "„Mindenki le akart beszélni a sminkiskolákról, mert azt mondták, túl telített a piac. Kingáéknál teljesen más szemléletet kaptam: nemcsak festeni, hanem vállalkozást építeni, karaktert olvasni és vendéget megtartani is megtanultam. Az esküvői szezonban már teli volt a naptáram Szeged és Budapest környékén.”"
                  },
                  {
                    initials: "SE",
                    name: "Szabó Eszter",
                    role: "Végzett Mentorprogramos tanulónk",
                    title: "„Már a képzés 6. hetén saját munkákból kerestem meg az árát!”",
                    text: "„Úgy érkeztem ide, hogy csak az alapokat akartam tudni, de Kinga energiája és professzionalizmusa teljesen magával ragadott. Amikor a modulok végén elkészültek a profi, retusált képek a modelljeimről és kitettem őket, azonnal jöttek az első felkérések.”"
                  },
                  {
                    initials: "KP",
                    name: "Kovács Petra",
                    role: "Profi Sminkes mentoráltunk",
                    title: "„A legfinomabb szakmai titkokat és a márkafüggetlen igazságot kaptam.”",
                    text: "„Sokáig kerestem olyan iskolát, ahol nem akarnak kötelező márkacsomagot rám erőszakolni. Itt a legjobb high-end és drogériás alternatívákat is megismertük, így százezres felesleges költésektől mentett meg Kinga tanácsa. Az elméleti tankönyve pedig egy kincs!”"
                  },
                  {
                    initials: "HS",
                    name: "Horváth Sára",
                    role: "Elit Sminkes tanulónk",
                    title: "„Kinga nemcsak oktat, hanem valódi partnerként támogat a karrieremben.”",
                    text: "„Nem csak a technikáig tart a felelőssége. Bármilyen bizonytalanságom volt a vendégkezeléssel vagy a smink tartósságával kapcsolatban, mindig azonnali, gyakorlatias választ kaptam tőle. Itt egy igazi közösség tagja lehetsz!”"
                  }
                ].map((review, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-cream-200/40 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgba(20,15,10,0.04)] hover:shadow-[0_16px_48px_rgba(181,149,85,0.1)] relative hover:border-gold-400/40 transition-all duration-300 cursor-pointer pointer-events-auto flex-shrink-0 w-[290px] xs:w-[330px] sm:w-[420px] lg:w-full lg:shrink-0"
                  >
                    <span className="text-5xl text-gold-400/20 font-serif absolute top-2 left-4">”</span>
                    
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-gold-500 fill-current" />
                        ))}
                      </div>
                      
                      <h4 className="font-serif-lux text-lg sm:text-xl font-bold text-charcoal-900 leading-snug">
                        {review.title}
                      </h4>
                      
                      <p className="text-xs sm:text-sm text-charcoal-800 font-light leading-relaxed">
                        {review.text}
                      </p>
 
                      <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
                        <div className="w-10 h-10 rounded-full bg-gold-200/50 text-gold-800 flex items-center justify-center font-bold font-mono text-sm">
                          {review.initials}
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-charcoal-900">{review.name}</h5>
                          <p className="text-[10px] text-charcoal-600 font-mono">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
 
              {/* Edge Gradient Fades */}
              {/* Horizontal fade for mobile/tablet */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10 lg:hidden" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10 lg:hidden" />

              {/* Vertical fade for desktop */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-cream-100 via-cream-100/70 to-transparent pointer-events-none z-10 hidden lg:block" />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-cream-100 via-cream-100/70 to-transparent pointer-events-none z-10 hidden lg:block" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

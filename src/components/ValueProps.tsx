/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, ShieldCheck, Heart, Search, Eye, RefreshCw, 
  Settings, Check, Compass, Layers, Zap, Info, Award 
} from 'lucide-react';

export default function ValueProps() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const props = [
    {
      id: 'no-makeup',
      num: '01',
      badge: 'Természetes Esztétika',
      headline: 'Személyre szabott tervezés, hogy a végeredmény a valódi szépségedet tükrözze.',
      body: 'Nem dolgozom sablonokkal. Minden vonalat az arcodra tervezek: az arányaidhoz, a bőrszínedhez, az arcformádhoz, hogy a modern, észrevétlen hatás tökéletesen beleolvadjon a vonásaidba. Technikáim könnyedek és légiesek, így az idő múlásával esztétikusan gyógyulnak és halványodnak, elkerülve a régi, drasztikus és elszíneződött tetoválások hatását.',
      img: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600',
      features: [
        { icon: Search, title: 'Komplex Arc-architektúra', desc: 'Személyre szabott arcarány-elemzés' },
        { icon: Layers, title: 'Légies soft-powder satír', desc: 'Lágy, természetes tónusok' },
        { icon: Sparkles, title: 'Esztétikus halványodás', desc: 'Szép és egyenletes kopás' },
      ],
      tagline: 'A szépség, ami nem látszik tetoválásnak — csak sugárzó, lágy észrevétlenségnek.'
    },
    {
      id: 'pain-elimination',
      num: '02',
      badge: 'Fájdalommentes Wellness',
      headline: 'Kétfázisú lidokainos érzéstelenítés injekció nélkül a teljes fájdalommentességért.',
      body: 'Soha nem alkalmazok fájdalmas injekciókat. Ehelyett prémium minőségű, lidokain alapú krémet (vagy érzékenység esetén alternatív krémeket) használok elő- és folyamat közbeni kétlépcsős érzéstelenítésként, ami tökéletesen elzsibbasztja a területet akár 1-1,5 órára.',
      img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
      features: [
        { icon: ShieldCheck, title: 'Kétfázisú Érzéstelenítés', desc: 'Elő- és folyamatközbeni zsibbasztás' },
        { icon: Zap, title: 'Soha nincs injekció', desc: 'Csak gyengéd prémium krémek' },
        { icon: Heart, title: 'Wellness hangulat', desc: '100% kényelem, pihentető szépülés' },
      ],
      tagline: 'Felejtsd el a félelmet: nálam a teljes zsibbadás tiszta komfortot garantál.'
    },
    {
      id: 'risk-correction',
      num: '03',
      badge: 'Abszolút Biztonság',
      headline: 'Kétlépcsős, óvatos pigmentálás teljesen ingyenes korrekcióval',
      body: 'Első alkalommal mindig halványabb és finomabb alapokat rajzolok, így a gyógyulás alatt teljesen nyugodtan barátkozhatsz meg az új vonásaiddal. A tökéletes, tartós tónust a teljesen ingyenes korrekció során, közösen érjük el. Ha pedig egy elrontott régi tetoválásod van, teljesen őszintén megmondom a lehetőségeket: a túl mély és sötét sebekre először lézeres eltávolítást javaslok a szép végeredményért, míg a halványabbakat azonnal, biztonságosan kijavítom.',
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
      features: [
        { icon: Compass, title: 'Biztonsági stratégia', desc: 'Fokozatos sötétítés, nincs sokk' },
        { icon: Award, title: 'Ingyenes korrekció', desc: 'Az alapár tartalmazza a 2. alkalmat' },
        { icon: RefreshCw, title: 'Rontott munkák javítása', desc: 'Lézeres és camouflage protokoll' },
      ],
      tagline: 'Nincsenek rejtett költségek — transzparencia, orvosi tisztaság és bajnoki garancia.'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Kiemelkedő Értékajánlataink</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 leading-[1.1]">
            Személyreszabott, egyedi élmény, fájdalommentes eljárás, gyors regenerálódás.
          </h2>
        </div>

        {/* Big Rows */}
        <div className="space-y-24">
          {props.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={p.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
              >
                {/* Visual block */}
                <div className={`col-span-1 lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden aspect-square border border-cream-300 shadow-xl bg-white p-3 group"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-charcoal-900">
                      <img 
                        src={p.img} 
                        alt={p.headline}
                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                      
                      {/* Big elegant counter number */}
                      <div className="absolute top-6 right-6 font-serif-lux text-7xl font-light italic text-gold-300/20 z-10 select-none">
                        {p.num}
                      </div>

                      {/* Floating tag */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 bg-gold-400 text-charcoal-950 font-mono text-[10px] font-bold uppercase rounded-full tracking-wider mb-2">
                          {p.badge}
                        </span>
                        <p className="text-white text-xs font-light tracking-wide leading-relaxed italic block">
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Text Copy & Icon Row */}
                <div className={`col-span-1 lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-4">
                    <span className="text-gold-600 font-mono font-semibold text-xs tracking-widest uppercase">
                      Pillér {p.num}
                    </span>
                    <h3 className="font-serif-lux text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-charcoal-900 leading-tight">
                      {p.headline}
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal-800 font-light leading-relaxed">
                      {p.body}
                    </p>
                  </div>

                  {/* Visual Economy horizontal icon rows (Accelerating Visual Learning) */}
                  <div className="pt-6 border-t border-cream-300">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-semibold block mb-4">
                      Szakmai és technikai garanciák:
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {p.features.map((f, fIdx) => {
                        const FeatureIcon = f.icon;
                        return (
                          <div 
                            key={fIdx} 
                            className="bg-white/80 border border-cream-300 px-4 py-3 rounded-xl flex items-start gap-3 shadow-sm hover:border-gold-300 transition-colors"
                          >
                            <div className="p-1.5 rounded-lg bg-gold-400/10 text-gold-600">
                              <FeatureIcon className="w-4 h-4 shrink-0" />
                            </div>
                            <div>
                              <h5 className="font-sans font-bold text-xs text-charcoal-900">
                                {f.title}
                              </h5>
                              <p className="text-[10px] text-charcoal-700 font-light mt-0.5 leading-snug">
                                {f.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interconnected click tag */}
                  <div className="pt-4 flex items-center gap-2">
                    <button
                      onClick={scrollToForm}
                      className="inline-flex items-center gap-1 text-xs text-gold-600 hover:text-gold-700 font-mono font-bold tracking-wider uppercase group cursor-pointer"
                    >
                      Jelentkezem egyéni tervezésre Kingához
                      <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function AcademyProcess() {
  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">Átlátható Út</span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
            Válj Elismert, Profi Sminkessé 4 Egyszerű Lépésben
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl border border-cream-350 p-6 relative flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-gold-500 uppercase block mb-1">
                1. LÉPÉS
              </span>
              <h3 className="font-serif-lux text-lg font-bold text-charcoal-900 mb-3">
                Gyors Jelentkezés
              </h3>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                Töltsd ki az alábbi 30 másodperces jelentkezési űrlapot, és írd le röviden a céljaidat. Gondosan szűrjük a résztvevőket, hogy elhivatott, valóban fejlődni akaró közösség alakuljon ki.
              </p>
            </div>
            <div className="text-[10px] font-mono text-gold-650 tracking-wider uppercase mt-4 block pt-2 border-t border-cream-200">
              Gondos előszűrés
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl border border-cream-350 p-6 relative flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-gold-500 uppercase block mb-1">
                2. LÉPÉS
              </span>
              <h3 className="font-serif-lux text-lg font-bold text-charcoal-900 mb-3">
                A Helybiztosítás
              </h3>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                A 10%-os helyfoglalási előleg banki átutalásával vagy készpénzes teljesítésével azonnal zároljuk a helyedet a kis létszámú csoportban. Nincs meglepetés, a helyed 100%-ig foglalt.
              </p>
            </div>
            <div className="text-[10px] font-mono text-gold-650 tracking-wider uppercase mt-4 block pt-2 border-t border-cream-200">
              Biztosítsd be a helyedet
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl border border-cream-350 p-6 relative flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-gold-500 uppercase block mb-1">
                3. LÉPÉS
              </span>
              <h3 className="font-serif-lux text-lg font-bold text-charcoal-900 mb-3">
                100 Órás Élő Mentorprogram
              </h3>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                10 héten át tartó, rendkívül intenzív, gyakorlat-fókuszú sminkes oktatás Szegeden vagy Budapesten, családias, átjáróház-mentes, professzionális lakásstúdióban, Kinga közvetlen mentorálása mellett.
              </p>
            </div>
            <div className="text-[10px] font-mono text-gold-650 tracking-wider uppercase mt-4 block pt-2 border-t border-cream-200">
              Intenzív Gyakorlat
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl border border-cream-350 p-6 relative flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-gold-500 uppercase block mb-1">
                4. LÉPÉS
              </span>
              <h3 className="font-serif-lux text-lg font-bold text-charcoal-900 mb-3">
                Piacra Lépés
              </h3>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                Sikeres elméleti és gyakorlati vizsga után átveszed a hivatalos, Hajas László elnök által aláírt állami tanúsítványt és a kész, retusált digitális portfóliódat, amivel már másnap elkezdheted építeni a vevőkörödet.
              </p>
            </div>
            <div className="text-[10px] font-mono text-gold-655 tracking-wider uppercase mt-4 block pt-2 border-t border-cream-200">
              Hivatalos Tanúsítvány
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

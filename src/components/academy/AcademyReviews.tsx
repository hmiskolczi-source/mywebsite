/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star } from 'lucide-react';

export default function AcademyReviews() {
  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">Tanulóink Véleményei</span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
            Tanítványaink 80%-a Aktívan a Szakmában Dolgozik és Oktat
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto" />
          <p className="text-xs sm:text-sm text-charcoal-700 font-light">
            Nézd meg, hogyan építettek sikeres karriert az esküvői és divatszakmában a Kingánál megszerzett bajnoki tudással.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-cream-200/60 shadow-[0_8px_30px_rgba(20,15,10,0.04)] hover:shadow-[0_16px_48px_rgba(181,149,85,0.1)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex text-gold-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <h4 className="font-serif-lux text-lg font-bold text-charcoal-900 leading-snug">
                „A végzés után azonnal felkértek egy esküvői fotózásra a portfólióm alapján!”
              </h4>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                A tanfolyam alatt készített és Kinga professzionális fényképezőjével retusált képekkel azonnal el tudtam indulni valódi munkát keresni és feltölteni a közösségi oldalaimat. A nevének és az oklevélnek köszönhetően az ügynökségek és a menyasszonyok azonnal komolyan vettek és szóba álltak velem.
              </p>
            </div>
            <div className="pt-4 border-t border-cream-200">
              <h5 className="font-mono text-xs font-bold text-charcoal-900">Kovács Petra</h5>
              <p className="text-[10px] text-gold-650 uppercase font-mono tracking-widest mt-0.5">Esküvői & Divatsminkes specialistaként dolgozik • Szeged</p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-cream-200/60 shadow-[0_8px_30px_rgba(20,15,10,0.04)] hover:shadow-[0_16px_48px_rgba(181,149,85,0.1)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex text-gold-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <h4 className="font-serif-lux text-lg font-bold text-charcoal-900 leading-snug">
                „Végre megértettem a sminkelés valódi logikáját a merev szabályok helyett.”
              </h4>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                Más sminkiskolákban csak lemásoltatták az éppen divatos maszkos formákat az azonos arckarakterű diákokon. Kinga megtanította a bőrdiagnosztika, a színdiagnózis és az arc-architektúra kőkemény logikáját, így ma már teljesen magabiztosan sminkelek és javítok érett vagy kifejezetten problémás bőrt is.
              </p>
            </div>
            <div className="pt-4 border-t border-cream-200">
              <h5 className="font-mono text-xs font-bold text-charcoal-900">Németh Laura</h5>
              <p className="text-[10px] text-gold-650 uppercase font-mono tracking-widest mt-0.5">Szépségipari Vállalkozó & Oktató • Budapest</p>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-cream-200/60 shadow-[0_8px_30px_rgba(20,15,10,0.04)] hover:shadow-[0_16px_48px_rgba(181,149,85,0.1)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex text-gold-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <h4 className="font-serif-lux text-lg font-bold text-charcoal-900 leading-snug">
                „A legcsodásabb mentorprogram, ahol az egyéni figyelem tényilg 100%-os volt.”
              </h4>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                Nem egy zajos, harmincfős teremben ültünk. A maximum 5 fős exkluzív limit miatt Kinga minden egyes ecsetvonásomnál mögöttem állt és közvetlenül javította a tartást, nyomást és a satírozást. Ez a támogatás hihetetlen gyorsan átlendített az akadályokon.
              </p>
            </div>
            <div className="pt-4 border-t border-cream-200">
              <h5 className="font-mono text-xs font-bold text-charcoal-900">Szabó Júlia</h5>
              <p className="text-[10px] text-gold-650 uppercase font-mono tracking-widest mt-0.5">Esküvői Sminkes • Kecskemét</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AcademyFounder() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image on left for founder block */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-300/20 max-w-md mx-auto aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=600" 
                alt="Hovorka-Miskolczi Kinga sminkmester"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-950/80 backdrop-blur-md p-4 rounded-xl border border-gold-400/20">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase">
                  A MENTOROD
                </span>
                <h4 className="font-serif-lux text-lg font-medium text-white">
                  Hovorka-Miskolczi Kinga
                </h4>
                <p className="text-[10px] text-cream-300 font-light mt-1">
                  Bajnoki dobogós sminkmester, BABOR sminkmester
                </p>
              </div>
            </div>
          </div>

          {/* Biographical Narrative on right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-700 text-xs rounded-full font-mono font-bold uppercase tracking-wider">
              A MENTOROD A SIKER ÚTJÁN
            </span>
            
            <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-medium text-charcoal-900 tracking-tight leading-tight col-span-12">
              Nem konkurenciát képzek. A jövőbeli szakmai partnereimet.
            </h2>
            
            <div className="w-16 h-0.5 bg-gold-400" />
            
            <div className="space-y-4 text-charcoal-700 font-light text-sm sm:text-base leading-relaxed">
              <p>
                Hovorka-Miskolczi Kinga vagyok. Több mint 21 éve foglalkozom professzionális sminkeléssel filmforgatásokon, reklámokban, divatbemutatókon, menyasszonyi sminkeken és rangos fashion eseményeken. Közel 10 évig dolgoztam kozmetikusként, mielőtt teljesen a sminkre specializálódtam: a bőrismeret nem kiegészítő a munkámban, hanem az alapja.
              </p>
              <p>
                Nemzetközi versenyeken háromszoros világbajnoki ezüstérmet és Európa-bajnoki aranyérmet szereztem. Ma már nem versenyző vagyok, hanem hazai és nemzetközi zsűritag és versenyfelkészítő.
              </p>
              <p>
                15 éve oktatok. Számos sminkest képeztem, akik ma már országszerte és külföldön dolgoznak. 
              </p>
            </div>

            <blockquote className="border-l-4 border-gold-500 pl-4 py-1 text-charcoal-900 font-serif-lux text-lg italic bg-gold-50/50 p-3 rounded-r-lg shadow-sm">
              „Az én nevem és szakmai ajánlásom komoly garanciát jelent a piacon: ha a fotósok, divatszakemberek vagy prémium esküvői irodák megtudják, hogy nálam tanultál, az egyet jelent azzal, hogy valóban kiemelkedően sminkelsz, stabil és logikus technikai alapokkal rendelkezel.”
            </blockquote>

            <div className="pt-2">
              <button
                onClick={scrollToForm}
                className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 border border-gold-400 hover:border-gold-500 px-8 py-4 rounded-xl text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer inline-flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                Jelentkezem Kingához képzésre <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

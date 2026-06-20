/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function AcademyFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 'fa1',
      question: 'Nincs sminkes előképzettségem. Nekem való ez a képzés?',
      answer: 'Igen. A feltétel nem az előképzettség, hanem az elhivatottság. Az első naptól az alapoktól indulunk, de az ütem és a szint azt teszi lehetővé, hogy 10 hét alatt piacképes tudással kerülj ki. Kinga személyesen szűri a jelentkezőket — hogy biztosan csak komoly, fejlődni vágyó emberek kerüljenek a csoportba.'
    },
    {
      id: 'fa2',
      question: 'Mi a garancia, hogy utána munkát kapok?',
      answer: 'Munkát nem ígérünk — portfóliót, állami tanúsítványt és Kinga személyes ajánlását igen. A végzett tanítványaink 80%-a aktívan dolgozik a szakmában. Az ajánlási hálózatba automatikusan bekerülsz: ha valaki sminkest keres, Kinga téged ajánl. A többi rajtad múlik — de az eszközöket garantáltan megkapod.'
    },
    {
      id: 'fa3',
      question: 'Mi történik, ha betegség vagy utazás miatt lemaradok egy alkalomról?',
      answer: 'Online pótlási lehetőség: Hiányzás esetén élő videós közvetítés és visszanézhető órák egy zárt Facebook-csoportban. A kis létszám miatt a pótlás egyénileg is kezelhető.'
    },
    {
      id: 'fa4',
      question: 'Nekem kell biztosítanom a modelleket az órákra?',
      answer: 'Nem kötelező. Kinga segít modelleket találni, és a portfóliófotózáshoz is biztosítanak modellt. Ha nem találsz senkit, nem maradsz le semmit.'
    },
    {
      id: 'fa5',
      question: 'Mi van, ha nem teljesítem a záróvizsgát?',
      answer: 'Kinga addig tartja a kezed, amíg el nem éred a szintet. Egyetlen tanítványát sem engedte ki záróvizsgára, aki nem állt készen — és egyet sem hagyott el az úton. A biztonsági ismétlési lehetőség ezt garantálja.'
    },
    {
      id: 'fa6',
      question: 'Milyen hivatalos oklevelet kapok a tanfolyam végén?',
      answer: 'Felnőttképzési regisztrációs számmal ellátott, a Magyar Fodrász-Kozmetikus-Körmös Egyesület pecsétjével és Hajas László elnök aláírásával hitelesített, államilag elismert szakmai tanúsítványt. Ezt a fotósok, divatirodák és esküvőszervezők azonnal ismerik.'
    },
    {
      id: 'fa7',
      question: 'Lehetséges a képzési díjat részletekben fizetni?',
      answer: 'Igen. A helyfoglalás a 10%-os előleg beérkezésével zárul. A maradék összeg 3 részletben, kamat nélkül fizethető (3 × 330 000 Ft).'
    }
  ];

  return (
    <section className="py-20 bg-cream-200 border-t border-cream-300/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">GYIK</span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
            Kérdésed van? Talán itt rögtön megtalálod:
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((f) => {
            const isOpen = openFaq === f.id;
            return (
              <div 
                key={f.id} 
                className="bg-white rounded-xl border border-cream-200/50 shadow-[0_6px_24px_rgba(20,15,10,0.04)] hover:shadow-[0_12px_32px_rgba(181,149,85,0.08)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(f.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-charcoal-900 hover:text-gold-600 cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gold-500 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed border-t border-cream-100">
                        {f.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

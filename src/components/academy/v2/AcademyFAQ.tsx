/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function AcademyFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 'fa1',
      question: 'Nincs sminkes előképzettségem. Nekem való ez a képzés?',
      answer: 'Igen. A feltétel nem az előképzettség, hanem az elhivatottság. Az alapoktól indulok, de az ütem és a szint azt teszi lehetővé, hogy 10 hét alatt piacképes tudással kerülj ki. Kinga személyesen szűri a jelentkezőket — hogy biztosan csak komoly, fejlődni vágyó emberek kerüljenek a csoportba.'
    },
    {
      id: 'fa2',
      question: 'Mi a garancia, hogy utána munkát kapok?',
      answer: 'Munkát nem ígérek — portfóliót, állami tanúsítványt és Kinga személyes ajánlását igen. A végzett tanítványaim 80%-a aktívan dolgozik a szakmában. Az ajánlási hálózatba automatikusan bekerülsz: ha valaki sminkest keres, Kinga téged ajánl. A többi rajtad múlik — de az eszközöket garantáltan megkapod.'
    },
    {
      id: 'fa3',
      question: 'Mi történik, ha betegség vagy utazás miatt lemaradok egy alkalomról?',
      answer: 'Online pótlási lehetőség: Hiányzás esetén élő videós közvetítés és visszanézhető órák egy zárt Facebook-csoportban. A kis létszám miatt a pótlás egyénileg is kezelhető.'
    },
    {
      id: 'fa4',
      question: 'Nekem kell biztosítanom a modelleket az órákra?',
      answer: 'Nem kötelező. Kinga segít modelleket találni, és a portfóliófotózáshoz is biztosítok modellt. Ha nem találsz senkit, nem maradsz le semmit.'
    },
    {
      id: 'fa5',
      question: 'Mi van, ha nem teljesítem a záróvizsgát?',
      answer: 'Kinga addig tartja a kezed, amíg el nem éred a szintet. Egyetlen tanítványát sem engedte ki záróvizsgára, aki nem állt készen — és egyet sem hagyott el az úton. A biztonsági ismétlési lehetőség ezt garantálja.'
    },
    {
      id: 'fa6',
      question: 'Milyen hivatalos oklevelet kapok a tanfolyam végén?',
      answer: 'Felnőttképzési regisztrációs számmal ellátott, a Magyar Fodrász-Kozmetikus-Körmös Egyesület pecsétjével és elnöki aláírásával hitelesített, államilag elismert szakmai tanúsítványt. Ezt a fotósok, divatirodák és esküvőszervezők azonnal ismerik.'
    },
    {
      id: 'fa7',
      question: 'Lehetséges a képzési díjat részletekben fizetni?',
      answer: 'Igen. A helyfoglalás a 10%-os előleg beérkezésével zárul. A maradék összeg 3 részletben, kamat nélkül fizethető (3 × 330 000 Ft).'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">GYIK</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Kérdésed van? <br /><span className="italic">Talán itt rögtön megtalálod.</span>
          </h2>
        </div>

        <div className="divide-y divide-charcoal-800/5">
          {faqs.map((f) => {
            const isOpen = openFaq === f.id;
            return (
              <div key={f.id} className="py-6">
                <button
                  onClick={() => toggleFaq(f.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-serif-lux text-xl sm:text-2xl font-light text-charcoal-800 group-hover:text-gold-600 transition-colors duration-500 pr-8">
                    {f.question}
                  </span>
                  <span className="text-gold-400 font-light text-2xl transition-transform duration-500" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="pt-4 text-base text-charcoal-700/70 font-light leading-relaxed max-w-2xl">
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

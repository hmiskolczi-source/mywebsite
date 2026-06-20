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
      answer: 'Igen. A feltétel nem az előképzettség, hanem az elhivatottság. Az alapoktól indulunk, de az ütem lehetővé teszi, hogy 10 hét alatt piacképes tudással kerülj ki.'
    },
    {
      id: 'fa2',
      question: 'Mi a garancia, hogy utána munkát kapok?',
      answer: 'Portfóliót, állami tanúsítványt és Kinga személyes ajánlását adjuk. A végzett tanítványaink 80%-a aktívan dolgozik a szakmában. A többi rajtad múlik, de az eszközöket garantáltan megkapod.'
    },
    {
      id: 'fa3',
      question: 'Mi történik, ha lemaradok egy alkalomról?',
      answer: 'Online pótlási lehetőséget biztosítunk zárt csoportban, visszanézhető órákkal. A kis létszám miatt a pótlás egyénileg is rugalmasan kezelhető.'
    },
    {
      id: 'fa4',
      question: 'Nekem kell biztosítanom a modelleket?',
      answer: 'Nem kötelező. Kinga segít modelleket találni a gyakorlati órákhoz és a portfóliófotózáshoz is. Semmiben nem maradsz le, ha nincs saját modelled.'
    },
    {
      id: 'fa5',
      question: 'Milyen oklevelet kapok a tanfolyam végén?',
      answer: 'Hivatalos, államilag elismert szakmai tanúsítványt, Hajas László elnök aláírásával és az MFKKE pecsétjével hitelesítve.'
    },
    {
      id: 'fa6',
      question: 'Lehetséges a részletfizetés?',
      answer: 'Igen. A helyfoglalás a 10%-os előleggel zárul, a fennmaradó összeg pedig 3 kamatmentes részletben is fizethető.'
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-cream-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-24 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Gyakori kérdések</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Részletek, <br /><span className="italic">amikre szükséged lehet.</span>
          </h2>
        </div>

        <div className="divide-y divide-charcoal-800/5">
          {faqs.map((f) => {
            const isOpen = openFaq === f.id;
            return (
              <div key={f.id} className="py-8">
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
                      <div className="pt-6 text-base text-charcoal-700/70 font-light leading-relaxed max-w-2xl">
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 'fa1',
      question: 'Mennyire kellemetlen az eljárás?',
      answer: 'Az érzékenység egyénenként eltérő. Tűs injekció helyett kétfázisú, helyileg alkalmazott érzéstelenítést használok a kellemetlenség csökkentésére. A vendégeim többsége jól tolerálhatónak írja le a kezelést, de teljes fájdalommentességet nem lehet mindenkinél ígérni.'
    },
    {
      id: 'fa2',
      question: 'Mi van, ha túl sötét vagy túl drasztikus lesz a változás? (Félek a sokktól)',
      answer: 'Szakmai biztonsági stratégiám lényege a fokozatosság: ha bizonytalan vagy a formát vagy a szín sötétségét illetően, az első alkalommal mindig visszafogottabb, világosabb és vékonyabb formát készítek neked. Így elkerüljük az arc hirtelen megváltozását kísérő sokkot. A végleges, dúsabb vagy sötétebb hatást a korrekció alkalmával, közösen finomítva érjük el.'
    },
    {
      id: 'fa3',
      question: 'Mit tartalmaz a prémium ár? Vannak-e rejtett költségek?',
      answer: 'Teljes transzparenciával dolgozom, nincsenek rejtett költségek. A feltüntetett árak egy komplex, értékalapú csomagot fednek le. Magában foglalja az előzetes egészségügyi szűrést, az egyedi arcarány-elemzést és előrajzolást, a kétlépcsős érzéstelenítést, a prémium pigmenteket és a szükséges korrekciós alkalmat is. Sok szalonnal ellentétben a korrekció nálam teljesen ingyenes.'
    },
    {
      id: 'fa4',
      question: 'Plasztikai műtétet vagy botoxot tervezek a közeljövőben. Mikor jöjjek sminktetoválásra?',
      answer: 'A szigorú szakmai szabály az, hogy a sminktetoválást mindenképpen a plasztikai beavatkozások vagy botox UTÁN (1–2 hónappal) érdemes elvégezni. A műtét ugyanis megváltoztatja a bőr szöveteit és feszülését, míg a botox átmenetileg átrendezi a mimikai izmokat. Ha előbb tetoválnánk, a későbbi feszültség miatt a tökéletes szimmetria teljesen eltolódhatna.'
    },
    {
      id: 'fa5',
      question: 'Régi, más által elrontott tetoválásom van. Át tudod alakítani?',
      answer: 'Igen, vállalok javítást, de csak szigorú szakmai szűrést követően. Ha a régi tetoválás még nagyon sötét, mélyen van, vagy rossz tónusú pigmenteket tartalmaz, akkor először lézeres (Q-kapcsolt YAG) eltávolítást fogok javasolni. A modern, légies technikám ugyanis gyorsan lekopna a túl sötét alap elfedése közben, és a rontott forma újra előbukkanna. Ha a régi forma már kellően elhalványult, azonnal tudunk rá dolgozni.'
    },
    {
      id: 'fa6',
      question: 'Hogyan kerülhető el a sablonos vagy aszimmetrikus eredmény?',
      answer: 'Egyedi arcelemzéssel és precíz mérőeszközökkel dolgozom. A formát a pigmentálás előtt megrajzolom, közösen finomítjuk, és csak a jóváhagyásod után kezdődik a kezelés.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Gyakori Kérdések</span>
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
                      <div className="pt-4 text-base text-charcoal-700 font-light leading-relaxed max-w-2xl">
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

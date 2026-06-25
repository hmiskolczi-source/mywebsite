/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldQuestion, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>('q1');

  const faqs: FAQItem[] = [
    {
      id: 'q1',
      question: 'Tényleg teljesen fájdalommentes az eljárás?',
      answer: 'Igen. Nálam nem kell tartanod a tűs injekcióktól (szuritól) — soha nem használok ilyet. Ehelyett egy prémium, kétfázisú lidokainos érzéstelenítő krémet alkalmazok elő- és folyamatközben is. Az átkarcolás után felvitt zselé tökéletesen elzsibbasztja a bőrt akár 1–1,5 órára, a vendégeim többsége pedig kellemes, pihentető eljárást tapasztal feszültség nélkül.'
    },
    {
      id: 'q2',
      question: 'Mi van, ha túl sötét vagy túl drasztikus lesz a változás? (Félek a sokktól)',
      answer: 'Szakmai biztonsági stratégiám lényege a fokozatosság: ha bizonytalan vagy a formát vagy a szín sötétségét illetően, az első alkalommal mindig visszafogottabb, világosabb és vékonyabb formát készítek neked. Így elkerüljük az arc hirtelen megváltozását kísérő sokkot. A végleges, dúsabb vagy sötétebb hatást a korrekció alkalmával, közösen finomítva érjük el.'
    },
    {
      id: 'q3',
      question: 'Mit tartalmaz a prémium ár? Vannak-e rejtett költségek?',
      answer: 'Teljes transzparenciával dolgozom, nincsenek rejtett költségek. A feltüntetett árak egy komplex, értékalapú csomagot fednek le. Magában foglalja az előzetes egészségügyi szűrést, az egyedi arcarány-elemzést és előrajzolást, a prémium kétlépcsős érzéstelenítést, az orvosi minőségű, színgarantált pigmenteket és a szükséges korrekciós alkalmat is. Sok szalonnal ellentétben a korrekció nálam teljesen ingyenes.'
    },
    {
      id: 'q4',
      question: 'Plasztikai műtétet vagy botoxot tervezek a közeljövőben. Mikor jöjjek sminktetoválásra?',
      answer: 'A szigorú szakmai szabály az, hogy a sminktetoválást mindenképpen a plasztikai beavatkozások vagy botox UTÁN (1–2 hónappal) érdemes elvégezni. A műtét ugyanis megváltoztatja a bőr szöveteit és feszülését, míg a botox átmenetileg átrendezi a mimikai izmokat. Ha előbb tetoválnánk, a későbbi feszültség miatt a tökéletes szimmetria teljesen eltolódhatna.'
    },
    {
      id: 'q5',
      question: 'Régi, más által elrontott tetoválásom van. Át tudod alakítani?',
      answer: 'Igen, vállalok javítást, de csak szigorú szakmai szűrést követően. Ha a régi tetoválás még nagyon sötét, mélyen van, vagy rossz tónusú pigmenteket tartalmaz, akkor először lézeres (Q-kapcsolt YAG) eltávolítást fogok javasolni. A modern, légies technikám ugyanis gyorsan lekopna a túl sötét alap elfedése közben, és a rontott forma újra előbukkanna. Ha a régi forma már kellően elhalványult, azonnal tudunk rá dolgozni.'
    },
    {
      id: 'q6',
      question: 'Mi a garancia arra, hogy nem kapok aszimmetrikus tucat-sablont?',
      answer: 'A sablonok teljes elutasítása. 15 éves bajnoki sminkmesteri rutinnal, egyedi arc-architektúra elemzéssel és precíz mérőeszközökkel dolgozom. Vakon soha nem tetoválok: a formát milliméter pontosan megrajzolom neked, és addig finomítjuk, amíg te magad teljesen jóvá nem hagyod. Csak azután kezdődik a pigmentálás, ha 100%-ig szereted a skiccet.'
    }
  ];

  const toggle = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-24 bg-cream-100 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,149,85,0.08),transparent_50%)]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 border border-gold-200 text-gold-600 text-xs rounded-full font-mono font-medium tracking-wider uppercase">
            <ShieldQuestion className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            Gyakori Kérdések & Kifogások
          </div>
          <h2 className="font-serif-lux text-3xl sm:text-5xl font-light text-charcoal-800 tracking-tight leading-tight">
           Felmerült benned egy kérdés? Talán itt megtalálod rá a választ:
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto" />
        </div>

        {/* FAQ Accordion Lists */}
        <div className="space-y-4">
          {faqs.map((f) => {
            const isOpen = activeId === f.id;
            return (
              <div 
                key={f.id}
                className="border border-cream-300 rounded-2xl bg-cream-100 overflow-hidden transition-all duration-300"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggle(f.id)}
                  className="w-full flex items-center justify-between text-left px-6 sm:px-8 py-5 sm:py-6 text-charcoal-900 hover:text-gold-600 transition-colors cursor-pointer select-none"
                >
                  <span className="font-serif-lux text-base sm:text-lg lg:text-xl font-bold tracking-wide pr-4">
                    {f.question}
                  </span>
                  <div className="shrink-0 p-1 rounded-full bg-white border border-cream-300 text-gold-600 group">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </button>

                {/* Animated Dropdown Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-xs sm:text-sm text-charcoal-800 leading-relaxed font-light border-t border-cream-300/40 pt-4 bg-white/60">
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

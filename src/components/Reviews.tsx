/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Kovács Beatrix",
      role: "Irodavezető • Budapest",
      title: "Megszűnt a reggeli stressz és az állítgatás",
      text: "Minden reggel 25-30 percet töltöttem azzal, hogy megpróbáljam egyformára rajzolni a szemöldökömet, de sose sikerült. Kinga hibrid tetoválása óta szó szerint megváltozott a reggelem. Tiszta luxus, tiszta szabadság."
    },
    {
      name: "Horváth Nóra",
      role: "Grafikai Tervező • Debrecen",
      title: "A kétfázisú érzéstelenítő csodát tesz",
      text: "Rettenetesen alacsony a fájdalomküszöböm, szinte remegve ültem be a székbe. De a kétfázisú eljárás alatt konkrétan semmit sem éreztem! Olyan volt, mint egy finom kozmetikai kezelés. Mindenkinek csak ajánlani tudom!"
    },
    {
      name: "Dr. Farkas Réka",
      role: "Jogász • Budapest",
      title: "Rejtett, de mégis ragyogó tetoválás",
      text: "Nem szeretem a mesterkélt, láthatóan mű dolgokat. Kingánál az volt a kérésem, hogy rejtett legyen. A végeredmény zseniális: az ismerőseim kérdezgetik, mitől vagyok ilyen sugárzó, de senki sem veszi észre a tetoválást."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Ügyfeleink Tapasztalatai</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Akik már találkoztak velem <br /><span className="italic">Magabiztosan sugároznak.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group space-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-white/50"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-charcoal-800/5 group-hover:text-gold-400/10 transition-colors duration-500" />

              <div className="space-y-3 relative z-10">
                <h3 className="font-serif-lux text-lg sm:text-xl font-light text-charcoal-800 leading-snug">
                  {review.title}
                </h3>
                <p className="text-sm text-charcoal-700/70 font-light leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal-800/5">
                <p className="font-serif-lux text-sm font-light text-charcoal-800">
                  {review.name}
                </p>
                <p className="text-xs text-charcoal-700/60 font-light">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

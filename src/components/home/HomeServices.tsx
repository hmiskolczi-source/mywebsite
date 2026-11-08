/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import HomeTestimonial from './HomeTestimonial';

export default function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Eredmények, Szemlélet, Szolgáltatások</span>
          <p className="text-lg sm:text-xl text-charcoal-700/80 font-light leading-relaxed">
          A legnagyobb szakmai eredményeim közé tartozik a <span className="font-bold">háromszoros világbajnoki ezüstérem</span>, valamint az <span className="font-bold">Európa-bajnoki aranyérem</span>. Ezekre rendkívül büszke vagyok, de még ennél is fontosabb számomra az a <span className="font-bold">szakmai szemlélet</span>, amelyet az évek során kialakítottam.
          </p>
        </div>

        {/* Two Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Service 1: Sminktetoválás */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-rows-[auto_auto_auto] md:row-span-3 md:grid-rows-subgrid gap-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-cream-100/50"
          >
            <div className="space-y-4">
              <h2 className="font-serif-lux text-3xl font-light text-charcoal-800">Sminktetoválás</h2>
              <p className="text-base text-charcoal-700 font-light leading-relaxed">
                Egy jó sminktetoválás <span className="font-bold">nem feltűnő</span>. Ehhez pontosan kell érteni az arc arányait, a bőr sajátosságait és azt, hogy mi áll jól valakinek, nem csak most, hanem évek múlva is. Kozmetikusként kezdtem, és ez a <span className="font-bold">bőrismeret</span> azóta is minden munkám alapja.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/sminktetovalas"
                className="inline-flex items-center gap-1 text-xs text-gold-600 hover:text-gold-700 font-mono font-bold tracking-wider uppercase group cursor-pointer"
              >
                Tovább a sminktetováláshoz
                <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </a>
            </div>

            <div className="pt-6 border-t border-charcoal-800/5">
              <HomeTestimonial
                text="Kinga pár évvel ezelőtt készített szemöldök és szemhéj tetoválást nekem és gyönyörű munkát végzett, pont olyan lett a végeredmény amilyet szerettem volna. Nagyon kedves, türelmes és remek szakember, jó szívvel ajánlom mindenkinek."
                name="Lili Pálfi"
                role="★★★★★ Google-értékelés · szemöldök- és szemhéjtetoválás"
              />
            </div>
          </motion.div>

          {/* Service 2: Sminkoktatás */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-rows-[auto_auto_auto] md:row-span-3 md:grid-rows-subgrid gap-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-cream-100/50"
          >
            <div className="space-y-4">
              <h2 className="font-serif-lux text-3xl font-light text-charcoal-800">Sminkoktatás</h2>
              <p className="text-base text-charcoal-700 font-light leading-relaxed">
                Oktatással immár <span className="font-bold">15 éve</span> foglalkozom. Ez idő alatt <span className="font-bold">számos sikeres sminkes</span> került ki a kezeim alól, akik ma már országszerte és külföldön is eredményesen dolgoznak. Nem tartok vissza semmit: minden technikát, logikát, munkafolyamatot átadok, ami a mindennapi munkában valóban szükséges.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/sminkkepzes"
                className="inline-flex items-center gap-1 text-xs text-gold-600 hover:text-gold-700 font-mono font-bold tracking-wider uppercase group cursor-pointer"
              >
                Tovább a sminkoktatáshoz
                <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </a>
            </div>

            <div className="pt-6 border-t border-charcoal-800/5">
              <HomeTestimonial
                text="2023-ban jártam Kingánál Szegeden a sminkiskolában 100 órás alaptanfolyamon. Nagyon jó élmény volt, rengeteg tudást szereztem és még jobban megszerettem a szakmát. Kinga amellett, hogy naprakész a tudásában, kedves és türelmes oktató is."
                name="Emma Petrikné Faragó"
                role="★★★★★ Google-értékelés · 100 órás sminkképzés"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

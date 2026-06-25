/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Eredmények, Szemlélet, Szolgáltatások</span>
          <p className="text-lg sm:text-xl text-charcoal-700/80 font-light leading-relaxed">
            Háromszoros világbajnoki ezüstérem. Európa-bajnoki aranyérem. Ezek az eredmények fontosak — de nem azért, amit jelképeznek rólam, hanem azért, amit megtanítottak. A versenyeken minden apróság számít. Ez a fegyelem, ez a szemlélet az, amit ma is magammal viszek.
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
            className="space-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-cream-100/50"
          >
            <div className="space-y-4">
              <h3 className="font-serif-lux text-3xl font-light text-charcoal-800">Sminktetoválás</h3>
              <p className="text-base text-charcoal-700/70 font-light leading-relaxed">
                Egy jó sminktetoválás nem feltűnő. Ehhez pontosan kell érteni az arc arányait, a bőr sajátosságait és azt, hogy mi áll valakinek — nem csak most, hanem tíz év múlva is. Kozmetikusként kezdtem, és ez a bőrismeret azóta is minden munkám alapja.
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
          </motion.div>

          {/* Service 2: Sminkoktatás */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 relative border border-charcoal-800/5 p-8 lg:p-10 bg-cream-100/50"
          >
            <div className="space-y-4">
              <h3 className="font-serif-lux text-3xl font-light text-charcoal-800">Sminkoktatás</h3>
              <p className="text-base text-charcoal-700/70 font-light leading-relaxed">
                Az oktatásban soha nem volt cél, hogy jól csináljam a dolgokat helyetted. Az volt a cél, hogy te tudd jól csinálni — nélkülem. Nem tartok vissza semmit: minden technikát, logikát, munkafolyamatot átadok, ami a mindennapi munkában valóban szükséges.
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
          </motion.div>

        </div>

      </div>
    </section>
  );
}

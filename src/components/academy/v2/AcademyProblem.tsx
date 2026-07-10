/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { imgProps } from '../../../lib/imageOpt';

export default function AcademyProblem() {
  const problems = [
    {
      title: "Elveszett figyelem",
      description: "A zsúfolt, 20-30 fős csoportokban a tapasztalatlan oktató figyelme óhatatlanul megoszlik, így a valódi személyes kapcsolat és a támogatás elmarad."
    },
    {
      title: "Felesleges anyagi terhek",
      description: "A beiratkozás után kötelezően előírt, 200-500 ezer forintos kezdőcsomagok sokaknak jelentettek komoly anyagi gátat, mielőtt egyáltalán ecsetet foghattak volna a kezükbe."
    },
    {
      title: "Magukra hagyott kezdők",
      description: "A képzések végén a hallgatók gyakran szakmai háttér, kész portfólió és valós gyakorlati tapasztalat nélkül maradtak, így képtelenek voltak magabiztosan elindítani a saját praxisukat."
    }
  ];

  const solutions = [
    {
      title: "Exkluzív mentorprogram",
      description: "Szakmai tapasztalataim alapján a precíz technika elsajátítása megismételhetetlen figyelmet igényel. Ezt biztosítom mindenki számára a kis létszámú, exkluzív csoportos mentorálás során."
    },
    {
      title: "Teljes körű, prémium anyagbiztosítás",
      description: "A képzés alatt extra költség nélkül biztosítom a legnevesebb nemzetközi világmárkák csúcskategóriás termékeit."
    },
    {
      title: "Biztos alapok",
      description: "Azokat az alapokat adom át, amik elkísértek a VB és EB dobogójához is. A 10 hetes kurzus végén hivatalos állami tanúsítvánnyal, profi portfólióval és valódi gyakorlati tapasztalatokkal léphetsz ki a piacra."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">A STABIL ALAPOK A LEGFONTOSABBAK</span>
        </div>

        {/* Problems Section */}
        <div className="mb-20 space-y-12 mx-auto max-w-3xl text-center">
          <div>
            <h3 className="font-serif-lux text-2xl sm:text-3xl font-bold text-charcoal-800 mb-8">
              Gyakran érkeznek hozzám olyan tanítványok, akik korábban már megpróbálták megszerezni az alapokat máshol, de falakba ütköztek:
            </h3>

            <ul className="space-y-6">
              {problems.map((problem, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex justify-center gap-4"
                >
                  <span className="text-gold-400 font-bold text-lg mt-1 shrink-0">•</span>
                  <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                    {problem.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-charcoal-800/10 my-16" />

        {/* Solutions Section */}
        <div className="space-y-12">
          <div className="text-center mb-12 mx-auto max-w-3xl">
            <h3 className="font-serif-lux text-2xl sm:text-3xl font-bold text-charcoal-800">
              Az ilyen történetek inspiráltak arra, hogy az alapképzésemet egy teljesen más, értékrend alapú szemlélet mentén építsem fel:
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-sm text-charcoal-700/80 font-light">
                    Wéber Kata beauty és esküvői sminkes
                  </p>
                  <a
                    href="https://eskuvoclassic.hu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-500 font-bold tracking-luxury uppercase hover:text-gold-600 transition-colors"
                  >
                    eskuvoclassic.hu
                  </a>
                </div>
                <img
                  {...imgProps("https://ihbwkp8vwcp4igya.public.blob.vercel-storage.com/academy_problemreview.webp", "(min-width: 1024px) 50vw, 100vw")}
                  alt="Wéber Kata beauty és esküvői sminkes"
                  className="w-full h-auto rounded-sm shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <ul className="space-y-6">
                {solutions.map((solution, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <span className="text-gold-400 font-bold text-lg mt-1 shrink-0">✓</span>
                    <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                      {solution.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => {
                const el = document.getElementById('academy-form-anchor');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
            >
              <span className="relative z-10">Elindítom a sminkes karrierem &rarr;</span>
              <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

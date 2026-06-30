/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

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
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">A STABIL ALAPOK A LEGFONTOSABBAK</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 leading-[1.1]">
          Számos lehetőségünk van, ha úgy döntünk, hogy a sminkelés lesz a hivatásunk.  A legelitebb nemzetközi eseményeken tapasztalhattam meg versenyzőként és zsűritagként is, hogy milyen fontosak a stabil alapok. A szakma legjobbjaitól tanulhattam, azonban ez keveseknek adatik meg:
          </h2>
        </div>

        {/* Problems Section */}
        <div className="mb-20 space-y-12">
          <div className="max-w-3xl">
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
                  className="flex gap-4"
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
          <div className="max-w-3xl">
            <h3 className="font-serif-lux text-2xl sm:text-3xl font-bold text-charcoal-800 mb-8">
              Az ilyen történetek inspiráltak arra, hogy az alapképzésemet egy teljesen más, értékrend alapú szemlélet mentén építsem fel:
            </h3>

            <ul className="space-y-6">
              {solutions.map((solution, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
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
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function HomeCaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Párizsi Luxussminkelés Egy Királynő-Döntösnek',
      who: 'Hamikus Renáta (influenszer, Miss Hungary döntős)',
      occasion: 'Egy exklúzív párizsi workshopra készültünk együtt',
      challenge: 'Egy nemzetközileg elismert szépségkirálynő-döntős és influenszer esetében olyan magazin-minőségű, sémamentes luxussminket kellett alkotni a divat fővárosában, amely a kamerák előtt és élőben, a workshop fényeinél is hozza a prémium, hibátlan eleganciát.',
      solution: 'Nem sablonokból dolgoztunk, hanem Reni egyedi arc-architectúráját és bőrtónusát vettük alapul, hogy kiemeljük a benne rejlő természetes királynői kisugárzást. A finom, rétegzett textúrákkal és a precíz formatervezéssel egy olyan lélegzetelállító, high-end megjelenést hoztunk össze, ami a párizsi környezetben is tökéletesen megállta a helyét.'
    },
    {
      id: 2,
      title: 'Fotós Workshop — Párizs, Két Modell, Egy Vizuális Harmónia',
      who: 'Balogh Eleni (Miss Balaton)',
      occasion: 'Egy párizsi fotós workshop, ahol a párjával közösen modellkedtek',
      challenge: 'Egy fotós workshopon a sminknek egyszerre kell ellenállnia a stúdiófények és a külső helyszínek megpróbáltatásainak, miközben egy Miss Balaton győztes esetében elvárás a magazin-kompatibilis, nemzetközi szintű prémium elegancia.',
      solution: 'Egy olyan tartós, high-end fotósminket építettem fel Eleni arc-architectúrájára, amely a vaku villanásánál és természetes fényben is tökéletesen texturált maradt a kamerák előtt. A természetes adottságait emeltem ki ahelyett, hogy elfedtem volna azokat, így a szerelmével közös képeken egy végtelenül elegáns, tiszta és sugárzó vizuális harmóniát tudtunk teremteni.'
    },
    {
      id: 3,
      title: 'Évek Alatt a Vörös Szőnyegen — Egy Közszereplő Stabil Elegancia',
      who: 'Sarka Kata (üzletasszony, celeb)',
      occasion: 'Különböző prémium társasági események, gálák és forgatások egy többéves időszakon át (kb. 2013–2015 között)',
      challenge: 'Egy országosan ismert, folyamatos kereszttűzben lévő közszereplő esetében olyan stabil, tartós és kifogástalan megjelenést kellett biztosítani, amely a vörös szőnyegtől a televíziós stúdiókig, mindenféle megvilágításban konzisztensen hozza a luxus elvárásokat.',
      solution: 'Éveken át dolgoztunk együtt Katával, ami alatt a merev sémák helyett mindig az aktuális esemény hangulatához és az ő egyedi karakteréhez igazítottam a sminkjeit. A titok a precíz bőr- és arc-architectúra elemzésben rejlett: olyan high-end textúrákat és formákat használtam, amelyek órákon át, a legapróbb részletekig makulátlan és elegáns hatást nyújtottak a kamerák előtt. Ez a hosszú távú bizalom a legszebb visszajelzése annak a kompromisszummentes szakmaiságnak, amit az üzlethez hozok.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Esettanulmányok</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Az évek alatt lehetőségem volt, <br /><span className="italic">együtt dolgozni néhány kiemelkedő hírességgel és modellel.</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-6"
            >
              {/* Placeholder Image */}
              <div className="aspect-square bg-gradient-to-br from-cream-200 to-cream-300 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-charcoal-700/40 font-light text-sm">[PLACEHOLDER - Fotó]</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-serif-lux text-xl font-light text-charcoal-800">
                  {study.who}
                </h3>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">A Kihívás</p>
                    <p className="text-charcoal-700 font-light">{study.challenge}</p>
                  </div>

                  <AnimatePresence>
                    {expandedId === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <div>
                          <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Ki</p>
                          <p className="text-charcoal-700 font-light">{study.who}</p>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Alkalom</p>
                          <p className="text-charcoal-700 font-light">{study.occasion}</p>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase">Hogyan Oldottuk Meg</p>
                          <p className="text-charcoal-700/80 font-light leading-relaxed">{study.solution}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                    className="text-[11px] font-bold tracking-luxury text-gold-600 hover:text-gold-700 uppercase transition-colors pt-2"
                  >
                    {expandedId === study.id ? '— Összecsukás' : '→ Tovább olvasok'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

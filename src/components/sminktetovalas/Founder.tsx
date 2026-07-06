/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import ImageWatermark from '../shared/ImageWatermark';

export default function Founder() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Visual Column - Large, editorial portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-5/12 w-full"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl bg-cream-200">
                <ImageWatermark className="relative w-full h-full rounded-sm overflow-hidden">
                  <img
                    src="https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/shared/kingafounder.webp"
                    alt="Hovorka-Miskolczi Kinga sminkmester"
                    className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </ImageWatermark>
              </div>

              {/* Floating Name Moment */}
              <div className="absolute -bottom-8 -right-8 p-8 bg-white shadow-xl hidden md:block border border-charcoal-800/5">
                <span className="text-[10px] font-bold tracking-luxury text-gold-500 uppercase block mb-2">
                  A szépség mestere
                </span>
                <h4 className="font-serif-lux text-2xl font-light text-charcoal-800">
                  Hovorka-Miskolczi <br /> Kinga
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Biographical Narrative - Clean typography & wide spacing */}
          <div className="lg:w-7/12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">
                Személyes garancia az arcod biztonságáért
              </span>

              <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
                15 év nemzetközi bajnoki tapasztalat. <br />
                <span className="italic">Az arcod teljes biztonságáért.</span>
              </h2>
            </motion.div>

            <div className="space-y-6 text-charcoal-700/80 font-light text-lg leading-relaxed max-w-2xl">
              <p>
                Hovorka-Miskolczi Kinga vagyok, sminkmester. Számomra a smink az önkifejezés egyik legszebb formája – egy erő és egy fegyver, hogy magabiztosabbnak érezd magad. Többszörös Európa- és Világbajnoki dobogósként, valamint a Babor volt magyarországi sminkmestereként az elmúlt 15 évben Londontól Miami-ig képeztem magam.
              </p>
              <p>
                Célom minden alkalommal ugyanaz: nem sablonokat gyártani, hanem megtalálni és kiemelni a benned rejlő egyedi szépséget, hogy önmagad legragyogóbb változata köszönjön vissza a tükörben. A 15 éves nemzetközi tapasztalatom és az orvosi tisztaságú protokolljaim garantálják a fájdalommentességet és a tökéletes eredményt.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative p-10 bg-charcoal-800"
            >
              <div className="relative z-10">
                <p className="font-serif-lux text-xl italic text-cream-100 leading-relaxed">
                  „Nálam nem kapsz sablonokat, sem elrontott vagy elszíneződött tetoválásokat. Minden vonalat az arcodra tervezek, és minden pigmentet személyre szabok. Ez a 15 éves bajnoki garanciám: az arcod nálam biztonságban van."
                </p>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 -z-0" />
            </motion.blockquote>

            <div className="pt-4">
              <button
                onClick={scrollToForm}
                className="group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
              >
                <span className="relative z-10">Jelentkezem egyéni tervezésre Kingához &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function AcademyOtherCourses() {
  const handleApplyClick = (courseTitle: string) => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = `Szia Kinga! Szeretnék érdeklődni és jelentkezni a "${courseTitle}" képzésre.`;
        const event = new Event('input', { bubbles: true });
        textarea.dispatchEvent(event);
      }
    }
  };

  const courses = [
    {
      badge: "Mesterképzés",
      title: "Haladó anyag- és formatechnikai mesterprogram",
      description: "Ez a 60 órás képzés a tiszta technikáról szól. Megtanulod az Aqua, Tinta, Gel és Cut Crease rejtelmeit, valamint a látványos színpadi és kreatív elemek magabiztos használatát.",
      details: [
        { label: "Időtartam", value: "60 óra" },
        { label: "Létszám", value: "Max. 5 fő" }
      ]
    },
    {
      badge: "Versenyfelkészítés",
      title: "Személyre szabott, egyéni bajnoki mentorprogram",
      description: "Privát felkészítés Kinga több mint 100 élő versenyének tapasztalatával. Legalább 3 személyes találkozón vezetünk végig a pontos téma meghatározásától a versenymunkáig.",
      details: [
        { label: "Időkeret", value: "2 hónap" },
        { label: "Formátum", value: "Privát" }
      ]
    },
    {
      badge: "Privát Kurzus",
      title: "Személyre szabott önsminkelési mesterkurzus",
      description: "3 órás tanácsadás nőknek, akik szeretnének magabiztos hétköznapi sminket készíteni maguknak. Átvesszük a bőrápolást, az arcformádat, majd jön a közös gyakorlat.",
      details: [
        { label: "Időtartam", value: "3 óra" },
        { label: "Létszám", value: "Egyéni" }
      ]
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-cream-100 overflow-hidden border-t border-charcoal-800/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-24 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Fejlődj tovább Kingával</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            További képzések <br /><span className="italic">a stúdióban.</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl">
            Legyél akár ambiciózus kezdő vagy versenyre készülő profi — fedezd fel speciális mentorprogramjaimat.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col h-full space-y-8 group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-luxury text-gold-600/60 uppercase">
                  {course.badge}
                </span>
                <h3 className="font-serif-lux text-2xl font-light text-charcoal-800 leading-snug group-hover:text-gold-600 transition-colors duration-500">
                  {course.title}
                </h3>
                <p className="text-base text-charcoal-700/70 font-light leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="flex-grow space-y-3 pt-6 border-t border-charcoal-800/5">
                {course.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex justify-between items-center text-xs">
                    <span className="text-charcoal-700/40 uppercase tracking-widest">{detail.label}</span>
                    <span className="text-charcoal-800 font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleApplyClick(course.title)}
                  className="w-full py-4 border border-charcoal-800/10 text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase hover:bg-charcoal-800 hover:text-cream-100 transition-all duration-500"
                >
                  Részletek és jelentkezés
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

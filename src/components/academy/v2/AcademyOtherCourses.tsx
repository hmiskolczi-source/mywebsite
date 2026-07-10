/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import AcademyForm from '../../AcademyForm';

export default function AcademyOtherCourses() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>();

  const handleApplyClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsFormOpen(true);
  };

  const courses = [
    {
      badge: "Mesterképzés",
      title: "Haladó anyag- és formatechnikai mesterprogram",
      description: "Ez a 60 órás képzés nem a modellekről, hanem a tiszta technikáról szól. Megtanulod az Aqua, Tinta, Gel, a Creative és Stage Makeup technikák rejtelmeit, a Color Smokey-t, valamint a látványos színpadi és kreatív elemek (csillámok, kövek, tollak) magabiztos használatát.",
      spots: "5 elérhető hely maradt!",
      details: [
        { label: "Időtartam", value: "60 óra (10 alkalom × 6 óra)" },
        { label: "Létszám", value: "Max. 5 fő" },
        { label: "Feltétel", value: "Sminkes előképzettség" },
        { label: "A képzés ára", value: "800 000 Ft" }
      ]
    },
    {
      badge: "Versenyfelkészítés",
      title: "Személyre szabott, egyéni bajnoki mentorprogram",
      description: "Teljesen egyéni, privát felkészítés Kinga több mint 100 élő versenyének tapasztalatával. Körülbelül 2 hónappal a verseny előtt kezdem: legalább 3 személyes találkozón vezetek végig a pontos téma meghatározásától és a modell kiválasztásától a begyakorláson át a kimagasló, gyors versenymunkáig.",
      spots: "1 elérhető hely maradt!",
      details: [
        { label: "Időkeret", value: "2 hónap" },
        { label: "Formátum", value: "Privát, egyéni felkészítés" },
        { label: "Feltétel", value: "Sminkes előképzettség" },
        { label: "Hazai versenyek", value: "150 000 Ft / szám" },
        { label: "Nemzetközi versenyek", value: "500 000 Ft / szám" }
      ]
    },
    {
      badge: "Exkluzív smink tanácsadás",
      title: "3 órás privát önsminkelési mesterkurzus",
      description: "3 órás személyre szabott tanácsadás nőknek, akik szeretnének magabiztos hétköznapi vagy alkalmi sminket készíteni maguknak. Átvesszük a helyes bőrápolást, az arcformádat, kiszelektáljuk a neszesszeredet, majd jön a közös gyakorlat: az arcod egyik felét Kinga készíti el, a másikat te magad fested meg lépésről lépésre.",
      spots: "1 elérhető hely maradt!",
      details: [
        { label: "Időtartam", value: "3 óra" },
        { label: "Létszám", value: "1 fő (vagy max. 2-3 barátnő)" },
        { label: "Eredmény", value: "Saját, egyedi sminkrutin" },
        { label: "A képzés ára", value: "60 000 Ft" }
      ]
    }
  ];

  return (
    <>
      <AcademyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} courseTitle={selectedCourse} />
      <section className="py-20 md:py-24 bg-cream-100 overflow-hidden border-t border-charcoal-800/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">FEJLŐDJ TOVÁBB KINGÁVAL</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            További Képzéseim <br /><span className="italic">a stúdióban.</span>
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light max-w-xl leading-relaxed">
            Legyél akár ambiciózus kezdő, versenyre készülő profi, vagy egyszerűen önmagad legszebb arcát kereső nő — fedezd fel speciális mentorprogramjaimat.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col h-full space-y-8 group border border-charcoal-800/5 p-8 lg:p-10 bg-white/50"
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

              <div className="pt-6 space-y-4">
                <button
                  onClick={() => handleApplyClick(course.title)}
                  className="w-full py-4 border border-charcoal-800/10 text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase hover:bg-charcoal-800 hover:text-cream-100 transition-all duration-500"
                >
                  Részletek és jelentkezés
                </button>
                <div className="text-center">
                  <p className="text-xs text-charcoal-700/60 italic font-serif-lux tracking-wide">
                    {course.spots}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}

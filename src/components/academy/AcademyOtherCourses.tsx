/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Crown, Clock, Users, GraduationCap, ChevronRight } from 'lucide-react';

export default function AcademyOtherCourses() {
  const handleApplyClick = (courseTitle: string) => {
    // Smooth scroll down to the formulation anchor
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Let's populate the motivation text with beautiful pre-filled request
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = `Szia Kinga! Szeretnék érdeklődni és jelentkezni a "${courseTitle}" képzésre.`;
        // Trigger a React state transition if possible, though writing directly to value helps.
        const event = new Event('input', { bubbles: true });
        textarea.dispatchEvent(event);
      }
    }
  };

  const courses = [
    {
      badge: "Mesterképzés",
      title: "Haladó anyag- és formatechnikai mesterprogram",
      description: "Ez a 60 órás képzés nem a modellekről, hanem a tiszta technikáról szól. Megtanulod az Aqua, Tinta, Gel és Cut Crease rejtelmeit, a Color Smokey-t, valamint a látványos színpadi és kreatív elemek (csillámok, kövek, tollak) magabiztos használatát.",
      spots: "csak 5 elérhető hely maradt",
      bgColor: "bg-white",
      borderColor: "border-cream-200/60",
      accentIcon: Sparkles,
      accentColor: "text-gold-500 bg-gold-50",
      btnTheme: "bg-gold-500 border-gold-400 text-charcoal-950 hover:bg-gold-600 hover:border-gold-500",
      details: [
        { icon: Clock, label: "Időtartam", value: "60 óra (10 alkalom × 6 óra)" },
        { icon: Users, label: "Létszám", value: "Max. 5 fő" },
        { icon: GraduationCap, label: "Feltétel", value: "Sminkes előképzettség" }
      ]
    },
    {
      badge: "Versenyfelkészítés",
      title: "Személyre szabott, egyéni bajnoki mentorprogram",
      description: "Teljesen egyéni, privát felkészítés Kinga több mint 100 élő versenyének tapasztalatával. Körülbelül 2 hónappal a verseny előtt kezdünk: legalább 3 személyes találkozón vezetünk végig a pontos téma meghatározásától és a modell kiválasztásától a begyakorláson át a kimagasló, gyors versenymunkáig.",
      spots: "csak 1 elérhető hely maradt",
      bgColor: "bg-white",
      borderColor: "border-cream-200/60",
      accentIcon: Trophy,
      accentColor: "text-amber-600 bg-amber-50",
      btnTheme: "bg-gold-500 border-gold-400 text-charcoal-950 hover:bg-gold-600 hover:border-gold-500",
      details: [
        { icon: Clock, label: "Időkeret", value: "2 hónap" },
        { icon: Users, label: "Formátum", value: "Privát, egyéni felkészítés" },
        { icon: GraduationCap, label: "Feltétel", value: "Sminkes előképzettség" }
      ]
    },
    {
      badge: "Exkluzív smink tanácsadás",
      title: "3 órás privát önsminkelési mesterkurzus",
      description: "3 órás személyre szabott tanácsadás nőknek, akik szeretnének magabiztos hétköznapi vagy alkalmi sminket készíteni maguknak. Átvesszük a helyes bőrápolást, az arcformádat, kiszelektáljuk a neszesszeredet, majd jön a közös gyakorlat: az arcod egyik felét Kinga készíti el, a másikat te magad fested meg lépésről lépésre.",
      spots: "1 elérhető hely maradt",
      bgColor: "bg-white",
      borderColor: "border-cream-200/60",
      accentIcon: Crown,
      accentColor: "text-rose-500 bg-rose-50",
      btnTheme: "bg-gold-500 border-gold-400 text-charcoal-950 hover:bg-gold-600 hover:border-gold-500",
      details: [
        { icon: Clock, label: "Időtartam", value: "3 óra" },
        { icon: Users, label: "Létszám", value: "1 fő (vagy max. 2-3 barátnő)" },
        { icon: Sparkles, label: "Eredmény", value: "Saját, egyedi sminkrutin" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden border-t border-cream-300/20">
      {/* Background Decorative Accents */}
      <div className="absolute top-2/3 -left-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gold-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-400/10 border border-gold-400/20 text-gold-700 text-xs font-mono font-bold tracking-wider uppercase rounded-full">
            FEJLŐDJ TOVÁBB KINGÁVAL
          </span>
          <h2 className="font-serif-lux text-3.5xl sm:text-4.5xl font-medium text-charcoal-900 tracking-tight">
            További Képzéseim
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
          <p className="text-charcoal-700 font-light text-sm sm:text-base leading-relaxed">
            Legyél akár ambiciózus kezdő, versenyre készülő profi, vagy egyszerűen önmagad legszebb arcát kereső nő — fedezd fel speciális mentorprogramjaimat.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course, idx) => {
            const IconComponent = course.accentIcon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${course.bgColor} rounded-3xl border ${course.borderColor} p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(20,15,10,0.03)] hover:shadow-[0_16px_48px_rgba(181,149,85,0.08)] hover:-translate-y-1.5 transition-all duration-350 relative group`}
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center text-[10px] sm:text-xs font-mono font-bold tracking-widest text-gold-700 bg-gold-500/10 border border-gold-500/20 px-3/5 py-1 rounded-full uppercase">
                      {course.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${course.accentColor} flex items-center justify-center shadow-inner transition-transform group-hover:scale-110 duration-300`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Program Title & Narrative */}
                  <h3 className="font-serif-lux text-xl sm:text-2xl font-bold text-charcoal-900 leading-snug group-hover:text-gold-700 transition-colors duration-300 min-h-[3.2rem] flex items-center">
                    {course.title}
                  </h3>
                  
                  <p className="text-charcoal-700 text-xs sm:text-sm font-light leading-relaxed mt-4 mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Metadata & CTA Button */}
                <div className="space-y-6 pt-5 border-t border-cream-200">
                  {/* Detailed Specs List */}
                  <div className="space-y-3">
                    {course.details.map((detail, dIdx) => {
                      const DetailIcon = detail.icon;
                      return (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs">
                          <DetailIcon className="w-4 h-4 text-charcoal-500 shrink-0 mt-0.5" />
                          <span className="text-charcoal-800 font-light leading-snug">
                            <strong className="font-semibold text-charcoal-900">{detail.label}:</strong> {detail.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Link & Spots Badge */}
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => handleApplyClick(course.badge)}
                      className={`w-full py-4 px-4 border rounded-xl text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 shadow-md hover:-translate-y-0.5 active:translate-y-0 ${course.btnTheme}`}
                    >
                      Jelentkezem <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    {/* Spots Remaining Tag */}
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-red-500 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full animate-pulse">
                        ⚠️ {course.spots}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

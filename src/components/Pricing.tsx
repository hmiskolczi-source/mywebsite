/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkle, Info, Compass, Calendar, ChevronRight, Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react';

export default function Pricing() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      category: 'SZEMÖLDÖKTETOVÁLÁS',
      items: [
        { name: 'MICROBLADING (SZÁLAS) SZEMÖLDÖKTETOVÁLÁS:', price: '80.000.-', desc: 'Ultra-vonalas kézi szálas technika, amely tökéletesen leutánozza a természetes szemöldökszálak növekedési irányát.' },
        { name: 'OMBRE SZEMÖLDÖKTETOVÁLÁS:', price: '90.000.-', desc: 'Lágy satírszerű porozás a púderes és elegánsan kontúros, sminkelt hatásért.' },
        { name: 'MICROSHADING (OMBRE, SZÁLAS) SZEMÖLDÖKTETOVÁLÁS:', price: '100.000.-', desc: 'Kombinált prémium technika: hiperrealisztikus szálak az orr tőnél és lágy púderes satír a szemöldök testében.' }
      ]
    },
    {
      category: 'SZEMHÉJTETOVÁLÁS',
      items: [
        { name: 'SZEMPILLA SŰRÍTÉS:', price: '60.000.-', desc: 'Diszkrét sötétítés közvetlenül a szempillatőben, amely dúsabbnak mutatja a pillákat és finoman nyitja a tekintetet.' },
        { name: 'SZEMHÉJ KONTÚR FELÜL:', price: '80.000.-', desc: 'Precízen megrajzolt, elegáns tusvonal, amely tökéletesen igazodik a szem formájához.' },
        { name: 'FÜSTÖS SZEMHÉJ KONTÚR:', price: '100.000.-', desc: 'Lágyan satírozott, sejtelmesen ombre hatású sminkelt szemhéj, amely elmélyíti és hangsúlyozza a tekintetet.' },
        { name: 'ALSÓ SZEMKONTÚR:', price: '60.000.-', desc: 'Finom alsó vonal vagy lágy satír, amely teljessé teszi és keretbe foglalja a szem sminkeltségét.' }
      ]
    },
    {
      category: 'AJAKTETOVÁLÁS',
      items: [
        { name: 'AJAK FÉLSATÍR:', price: '90.000.-', desc: 'Diszkrét kontúrvonal és befelé finoman mosódó lágy satírozás, amely természetes volument kölcsönöz.' },
        { name: 'AJAK TELJES SATÍR:', price: '120.000.-', desc: 'Teljes felületű, gyönyörűen pigmentált rúzs hatású vagy lágy Lip Blush technika az egyenletes, ragyogó tónusért.' }
      ]
    },
    {
      category: 'KORREKCIÓK & SZABÁLYOK',
      items: [
        { name: 'KORREKCIÓ 3 HÓNAPON BELÜL:', price: 'INGYENES', desc: 'Alapvető, szükséges garanciális igazítás a pigmentek tökéletes beépüléséért.' },
        { name: 'ELMARADT ELSŐ KORREKCIÓ 3 HÓNAPON TÚL, DE 6 HÓNAPON BELÜL:', price: 'AZ ALAPÁR 20%-A', desc: 'Ha kicsúsztál az ingyenes időszakból, de a forma és a pigmentzettség még stabil.' },
        { name: 'ELMARADT ELSŐ KORREKCIÓ 6 HÓNAPON TÚL, DE 1 ÉVEN BELÜL:', price: 'AZ ALAPÁR 40%-A', desc: 'A megkopott részek pótlása, forma-igazítás és a szín frissítése.' },
        { name: 'KEDVEZMÉNYES 2. KORREKCIÓS LEHETŐSÉG 6 HÓNAPON BELÜL:', price: 'AZ ALAPÁR 60%-A', desc: 'Abban a ritka esetben, ha a bőr egyedi tulajdonságai miatt további pótlást igényel.' },
        { name: '1,5 ÉVEN BELÜL SZÍNFRISSÍTÉS:', price: 'AZ ALAPÁR 20% KEDVEZMÉNNYEL', desc: '1 alkalomra és a meglévő forma frissítésére vonatkozik.' }
      ]
    },
    {
      category: 'EGYÉB SZOLGÁLTATÁSOK',
      items: [
        { name: 'KONZULTÁCIÓ:', price: '10.000.-', desc: 'Alapos egészségügyi szűrés, arcarány-elemzés és előrajzolás. A díj 50%-a (5.000 Ft) levonásra kerül a tetoválás árából.' }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-cream-100 relative overflow-hidden border-t border-cream-300/40">
      {/* Decorative premium accents */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase block">SZOLGÁLTATÁSOK & ÁRAK</span>
          <h2 className="font-serif-lux text-3.5xl sm:text-4.5xl font-medium tracking-tight text-charcoal-900 leading-tight">
            Nincsenek Rejtett Költségek
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto mt-3" />
        </div>

        {/* SINGLE ELEGANT PRICING CARD (Direct translation of the beautiful physical price booklet) */}
        <div className="bg-white rounded-[32px] border border-cream-200/60 shadow-[0_15px_50px_rgba(20,15,10,0.04)] sm:shadow-[0_30px_80px_rgba(181,149,85,0.06)] p-6 sm:p-12 md:p-16 relative overflow-hidden">
          
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,149,85,0.015),transparent_40%)]" />

          {/* Card Header matching physical layout */}
          <div className="relative text-center mb-10 sm:mb-14">
            <span className="font-serif-lux text-2.5xl sm:text-3.5xl md:text-4xl text-gold-500 font-normal tracking-wide block italic select-none">
              Kinga Miskolczi
            </span>
            <span className="text-[9px] sm:text-[11px] font-mono font-semibold tracking-[0.25em] text-charcoal-600 block mt-1 uppercase">
              MAKEUP ARTIST
            </span>
            
            <h3 className="font-serif-lux text-lg sm:text-xl md:text-2xl font-bold tracking-[0.18em] text-charcoal-900 mt-6 md:mt-8 mb-4 uppercase">
              SMINKTETOVÁLÓ ÁRLISTA
            </h3>

            {/* Premium Divider Line with centered circle */}
            <div className="flex items-center justify-center my-6 max-w-xs sm:max-w-md mx-auto">
              <div className="h-0.5 w-3 bg-gold-400 rounded-full shrink-0"></div>
              <div className="h-px bg-gold-300 w-full opacity-60"></div>
              <div className="w-2.5 h-2.5 border-2 border-gold-400 bg-white rounded-full mx-2 shrink-0"></div>
              <div className="h-px bg-gold-300 w-full opacity-60"></div>
              <div className="h-0.5 w-3 bg-gold-400 rounded-full shrink-0"></div>
            </div>
          </div>

          {/* Pricing Sections */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {services.map((group, gIdx) => (
              <div key={gIdx} className="space-y-6 sm:space-y-8">
                
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <span className="h-1 lg:h-1.5 w-6 bg-gold-400 rounded-full shrink-0"></span>
                  <h4 className="font-serif-lux text-sm sm:text-base font-bold tracking-[0.14em] text-charcoal-900 uppercase">
                    {group.category}
                  </h4>
                </div>

                {/* Category Items */}
                <div className="space-y-6">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="group unique-pricing-row space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        
                        {/* Name (on desktop we uppercase and add dots) */}
                        <span className="font-serif-lux text-xs sm:text-[13px] font-bold text-charcoal-900 uppercase tracking-wider group-hover:text-gold-700 transition-colors duration-300">
                          {item.name}
                        </span>
                        
                        {/* Dot Leader for premium salon feeling (visible on tablet/desktop) */}
                        <span className="hidden sm:inline flex-1 border-b border-dotted border-cream-300 group-hover:border-gold-300 transition-colors duration-300"></span>
                        
                        {/* Price */}
                        <span className="font-mono text-xs sm:text-sm font-bold text-gold-700 shrink-0">
                          {item.price}
                        </span>

                      </div>

                      {/* Clean micro description of the technique */}
                      <p className="text-[11px] sm:text-xs text-charcoal-700 font-light leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Card Footer matching printed card */}
          <div className="mt-14 sm:mt-20 pt-10 border-t border-cream-200/60 text-center relative z-10">
            
            {/* Fine decorative line */}
            <div className="flex items-center justify-center my-6 max-w-xs mx-auto">
              <div className="h-px bg-gold-200 w-full opacity-65"></div>
              <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mx-2 shrink-0"></div>
              <div className="h-px bg-gold-200 w-full opacity-65"></div>
            </div>

            {/* Socials & Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-xl mx-auto text-xs sm:text-sm text-charcoal-700 font-light mb-8 pt-3">
              <a href="https://instagram.com/sminktetovalas_miskolczikinga" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 hover:text-gold-600 transition-colors py-1">
                <Instagram className="w-4 h-4 text-gold-500" />
                <span>sminktetovalas_miskolczikinga</span>
              </a>
              <a href="https://facebook.com/kingamiskolcziprofessionelmakeup" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 hover:text-gold-600 transition-colors py-1">
                <Facebook className="w-4 h-4 text-gold-500" />
                <span>kingamiskolcziprofessionelmakeup</span>
              </a>
              <div className="flex items-center justify-center gap-2 py-1 col-span-1 sm:col-span-2 lg:col-span-1">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+36 30 709 43 70</span>
              </div>
            </div>

            <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-cream-500">
              © 2026 KINGA MISKOLCZI MAKEUP ARTIST • ALL RIGHTS RESERVED
            </div>
          </div>

        </div>

        {/* Global CTA Banner */}
        <div className="mt-16 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto flex flex-col items-center">
              <button
                onClick={scrollToForm}
                className="group relative px-10 py-5 bg-charcoal-800 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
              >
                <span className="relative z-10">Ingyenes Konzultációt Kérek &rarr;</span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
              </button>
          </div>
        </div>

      </div>
    </section>
  );
}

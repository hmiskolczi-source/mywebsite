/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Eye, ShieldAlert, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const cards = [
    {
      id: 'time-saved',
      category: 'Időmegtakarítás',
      title: 'Időszuverenitás & Reggeli Szabadság',
      desc: '„Nincs többé reggeli fáradt sminkelés és stresszes méricskélés a tükör előtt. Minden áldott nap úgy ébredek, hogy az arcom teljesen kimerült vonások nélkül, kamera-készen tündököl. Életem legjobb befektetése.”',
      author: 'Szabó Laura',
      role: 'Cégvezető, Budapesti ügyfél',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
      tagIcon: Clock,
      themeColor: 'border-gold-300'
    },
    {
      id: 'pain-avoided',
      category: 'Fájdalommentesség',
      title: 'Wellness Eljárás Mikrostressz Nélkül',
      desc: '„Sokáig rettegtem a fájdalomtól és a kékülő elszíneződéstől. Kinga kétfázisú protokollja egy csoda: konkrétan semmit nem éreztem, a hangulat pedig megnyugtató luxust árasztott. Teljes biztonságban voltam.”',
      author: 'Molnár Petra',
      role: 'Tartalomgyártó & Modell',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
      tagIcon: CheckCircle2,
      themeColor: 'border-gold-400'
    },
    {
      id: 'natural-beauty',
      category: 'Természetesség',
      title: 'Hajszálvékony, Lágy Poros Hatás',
      desc: '„Nem tetoválást akartam, hanem gyönyörű, mértéktartó korrigálást. A környezetemből senki nem mondja meg, hogy sminktetoválásom van. Csak azt látják és dicsérik, hogy mennyire kisimultam és friss lettem!”',
      author: 'Dr. Varga Beatrix',
      role: 'Jogász, 45 éves prémium vendég',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      tagIcon: Eye,
      themeColor: 'border-gold-300'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Ügyfeleink szavai</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 leading-[1.1]">
            Csatlakozz azokhoz a tudatos nőkhöz, akik nem kötnek kompromisszumot az arcukkal kapcsolatban.
          </h2>
        </div>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            const IconComponent = card.tagIcon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white overflow-hidden border border-charcoal-800/5 shadow-sm flex flex-col justify-between group"
              >
                {/* Visual Header Image representation of client's healed confidence */}
                <div className="relative h-56 w-full overflow-hidden bg-charcoal-900">
                  <img 
                    src={card.image} 
                    alt={`${card.author} healed faces representation`}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/15 to-transparent pointer-events-none" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-wider font-bold text-cream-100 shadow-sm border border-charcoal-700/40 flex items-center gap-1.5 uppercase">
                    <IconComponent className="w-3 text-gold-400" />
                    {card.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif-lux text-lg font-semibold leading-tight tracking-wide">
                      {card.title}
                    </p>
                  </div>
                </div>

                {/* Card Content & Copy */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <p className="text-sm text-charcoal-800 leading-relaxed font-light italic">
                    {card.desc}
                  </p>

                  <div className="pt-4 border-t border-cream-300/40 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={card.image} 
                        alt={card.author} 
                        className="w-10 h-10 rounded-full object-cover border border-gold-200 shrink-0 shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-serif-lux font-bold text-base text-charcoal-900 tracking-wide">
                          {card.author}
                        </h4>
                        <p className="text-xs text-charcoal-700 font-mono mt-0.5 font-medium uppercase tracking-wider">
                          {card.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex text-gold-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-md leading-none">&#9733;</span>
                        ))}
                      </div>

                      {/* Google Verified Badging */}
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-gold-200/40 shadow-xs shrink-0 select-none">
                        <svg className="w-2.5 h-2.5 shrink-0" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                        </svg>
                        <span className="font-mono text-[7px] font-bold text-charcoal-700 tracking-wider">VERIFIED</span>
                      </div>
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

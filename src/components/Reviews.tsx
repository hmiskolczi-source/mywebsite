/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote, Check, Sparkles, Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 'time',
      tag: 'Időmegtakarítás',
      title: 'Megszűnt a reggeli stressz',
      quote: '„Minden reggel 25-30 percet töltöttem azzal, hogy megpróbáljam egyformára rajzolni a szemöldökömet, de sose sikerült. Kinga hibrid tetoválása óta szó szerint megváltozott a reggelem. Megszűnt az állandó igazítgatás, dörzsölés és stressz. Csodálatos érzés!”',
      author: 'Kovács Beatrix',
      age: '32 éves',
      service: 'Hibrid szemöldök tetoválás',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 'pain',
      tag: 'Fájdalommentesség',
      title: 'A kétfázisú érzéstelenítő csodát tesz',
      quote: '„Rettenetesen alacsony a fájdalomküszöböm, szinte remegve ültem be a székbe. But a kétfázisú eljárás alatt konkrétan semmit sem éreztem! Olyan volt, mint egy finom kozmetikai masszázs vagy wellness kezelés. Mindenkinek csak ajánlani tudom!”',
      author: 'Horváth Nóra',
      age: '26 éves',
      service: 'Selymes ajaksatírozás (Lip Blush)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 'older',
      tag: 'Optikai Lifting',
      title: 'Gyönyörű, diszkrét optikai lifting 60 felett is',
      quote: '„Féltem, hogy az idősödő bőrömet megsérti a tű, vagy hogy túl markáns lesz az eredmény. Kinga hihetetlen finomsággal dolgozott. A szemhéj- és szemöldöktetoválás olyan gyönyörű, diszkrét optikai emelést adott az arcomnak, hogy tíz évet letagadhatok.”',
      author: 'Szabóné Katalin',
      age: '61 éves',
      service: 'Lágy szemhéj tus & Poros szemöldök',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 'corrections',
      tag: 'Szakmai Korrekció',
      title: 'Megmentette az elrott, kékülő szemöldökömet',
      quote: '„Éveken át takargattam egy másik szalonban készült, csúnyán elszíneződött, aszimmetrikus tetoválást. Kinga mesteri camouflage technikával és precíz előrajzolással teljesen újjávarázsolta az arcomat. Végre újból bátran merek mosolyogni!”',
      author: 'Vincze Emese',
      age: '38 éves',
      service: 'Mesteri színkorrekció & Camouflage',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 'natural',
      tag: 'Természetes Hatás',
      title: 'A környezetem csak azt látja, hogy kisimultam',
      quote: '„Nem szeretem a mesterkélt, láthatóan mű dolgokat. Kingánál az volt a kérésem, hogy rejtett legyen a tetoválás. A végeredmény zseniális: az ismerőseim folyamatosan kérdezgetik, mitől vagyok ilyen sugárzó, de senki sem veszi észre, hogy beavatkozás történt.”',
      author: 'Dr. Farkas Réka',
      age: '42 éves',
      service: 'Hiperrealisztikus szálazott szemöldök',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 'artistry',
      tag: 'Bajnoki Színvonal',
      title: 'Pontosan az az elit minőség, amit kerestem',
      quote: '„Premium kategóriás szolgáltatást kerestem, ahol az arcom a legnagyobb biztonságban van. Kinga szakértelme és a nemzetközi bajnoki múltja azonnal meggyőzött. A konzultációtól a gyógyulásig minden pillanat kompromisszummentes luxus volt.”',
      author: 'Zsigmond Vivien',
      age: '31 éves',
      service: 'Prémium Ajak & Szemöldök Kombináció',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    }
  ];

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gold-200/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 border border-gold-200 text-gold-600 text-xs rounded-full font-mono font-semibold tracking-wider uppercase">
            <MessageSquareQuote className="w-3 shrink-0" />
            Vendégeim Írták
          </div>
          <h2 className="font-serif-lux text-3.5xl sm:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
            Több ezer nő döntött a mindennapi időszuverenitás és a biztonság mellett.
          </h2>
          <div className="h-0.5 w-12 bg-gold-400 mx-auto" />
        </div>

        {/* Masonry/Grid of Reviews: No carousels, stacked vertically on mobile, 3-column grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-gold-300/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              {/* Star Rating & Category */}
              <div className="flex items-center justify-between w-full">
                <div className="flex text-gold-400 gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="bg-gold-50 text-[10px] text-gold-600 font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border border-gold-100">
                  {r.tag}
                </span>
              </div>

              {/* Review Text */}
              <div className="space-y-3 flex-grow">
                <h3 className="font-serif-lux text-lg sm:text-xl font-bold text-charcoal-900 leading-snug group-hover:text-gold-600 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-light italic">
                  {r.quote}
                </p>
              </div>

              {/* Client detail */}
              <div className="pt-4 border-t border-cream-200/50 flex justify-between items-center text-xs gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.author}
                    className="w-10 h-10 rounded-full object-cover border border-gold-200 shrink-0 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-serif-lux font-bold text-charcoal-900 tracking-wide block">
                      {r.author}
                    </span>
                    <span className="text-[10px] text-charcoal-700 font-mono mt-0.5 font-medium block uppercase tracking-wider">
                      {r.age} &bull; {r.service}
                    </span>
                  </div>
                </div>

                {/* Google Verified Badging */}
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-cream-100/60 border border-gold-200/40 shadow-sm shrink-0 select-none">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span className="font-mono text-[8px] font-bold text-charcoal-700 tracking-wider">VERIFIED</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

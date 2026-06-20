/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, Phone, Mail, Bookmark, ShieldCheck } from 'lucide-react';

export default function AcademyCloser() {
  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [motivation, setMotivation] = useState('');
  const [agree, setAgree] = useState(true);

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!name.trim()) {
      setError('Kérjük, add meg a teljes nevedet.');
      return;
    }
    if (!phone.trim()) {
      setError('Kérjük, add meg a telefonszámodat.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Kérjük, érvényes e-mail címet adj meg.');
      return;
    }
    if (!age.trim()) {
      setError('Kérjük, add meg az életkorodat.');
      return;
    }
    if (!motivation.trim() || motivation.trim().length < 10) {
      setError('Kérjük, írd le pár mondatban a motivációdat (legalább 10 karakterben).');
      return;
    }
    if (!agree) {
      setError('Kérjük, fogadd el az adatkezelési tájékoztatót.');
      return;
    }

    setIsSubmitting(true);

    // Simulate elite application submission
    setTimeout(() => {
      const newApplication = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        phone,
        email,
        age,
        motivation,
        createdAt: new Date().toISOString(),
      };

      try {
        const existingApps = JSON.parse(localStorage.getItem('makeup_course_leads') || '[]');
        existingApps.push(newApplication);
        localStorage.setItem('makeup_course_leads', JSON.stringify(existingApps));
      } catch (err) {
        console.error('Error saving academy lead:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setAge('');
    setMotivation('');
    setIsSuccess(false);
  };

  return (
    <section id="academy-form-anchor" className="py-20 bg-charcoal-900 text-cream-100 relative overflow-hidden">
      
      {/* Subtle Luxury Ambient Light */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column values stack */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 border border-gold-400/20 text-gold-300 text-xs rounded-full font-mono font-medium uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 animate-pulse text-gold-400" />
              UTOLSÓ HELYEK A SZEPTEMBERI CSOPORTBA
            </div>

            <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-medium text-white tracking-tight leading-tight">
              Ne csak sminkelni tanulj meg. Válj keresett szakemberré egy exkluzív, 5 fős mentorprogramban — drága kezdőcsomagok és rejtett költségek nélkül.
            </h2>

            <p className="text-cream-300 font-light leading-relaxed">
              A prémium piaci belépéshez hiteles szakmai alapok szükségesek. Ez a 100 órás,  exklúzív mentorprogram a legmagasabb szintű gyakorlati logikát adja át, melynek végén az államilag elismert oklevéllel, portfólióval és valódi tudással  magabiztosan indíthatod el az önálló karrieredet.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-gold-405 uppercase mb-3">
                Amit az első naptól kapsz:
              </h4>
              <div className="flex gap-3 items-start">
                <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                <p className="text-sm text-cream-200">
                  <strong className="text-white font-medium">Személyes, privát lakásstúdió:</strong> Anyag- és luxustermék-biztosítás a kurzus ideje alatt
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                <p className="text-sm text-cream-200">
                  <strong className="text-white font-medium">Saját fotóstúdió:</strong> Retusált, azonnali bevethető digitális portfólió fotók
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                <p className="text-sm text-cream-200">
                  <strong className="text-white font-medium">Állami felnőttképzési tanúsítvány:</strong> Hajas László elnöki aláírásával
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                <p className="text-sm text-cream-200">
                  <strong className="text-white font-medium">Exkluzív lépték:</strong> Mentorálás kis létszámú csoportban
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                <p className="text-sm text-cream-200">
                  Bekerülsz Kinga ajánlási hálózatába — és rangos divatprogramokra is magával visz
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Academy Registration Card */}
          <div className="lg:col-span-6 bg-charcoal-800 rounded-2xl p-6 sm:p-8 border border-gold-400/20 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="academy-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-6">
                    <h3 className="font-serif-lux text-2xl font-semibold text-white tracking-tight">
                      JELENTKEZÉSI ÜRLAP
                    </h3>
                    <p className="text-xs text-cream-300 font-mono uppercase tracking-widest mt-1 text-gold-405">
                      ALAPOZÓ SMINKKÉPZÉS (100 ÓRA)
                    </p>
                    <p className="text-xs text-cream-350 font-light mt-2">
                      Küldd be motivációdat és adataidat, Kinga személyesen értékel minden jelentkezést.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name input */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-cream-350 mb-1">
                        Teljes Név *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-cream-400" />
                        <input 
                          type="text" 
                          placeholder="Pl.: Kovács Eszter"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-charcoal-900 text-cream-100 placeholder:text-cream-500 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 border border-charcoal-700 focus:border-gold-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone input */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-cream-350 mb-1">
                        Telefonszám *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-cream-400" />
                        <input 
                          type="tel" 
                          placeholder="Pl.: +36 30 123 4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-charcoal-900 text-cream-100 placeholder:text-cream-500 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 border border-charcoal-700 focus:border-gold-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email and Age Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-cream-350 mb-1">
                          E-mail Cím *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-cream-400" />
                          <input 
                            type="email" 
                            placeholder="Pl.: eszter@pelda.hu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-charcoal-900 text-cream-100 placeholder:text-cream-500 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 border border-charcoal-700 focus:border-gold-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-cream-350 mb-1">
                          Életkor *
                        </label>
                        <input 
                          type="text" 
                          placeholder="Pl.: 24"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full bg-charcoal-900 text-cream-100 placeholder:text-cream-550 rounded-lg px-4 py-3 text-sm text-center focus:outline-none focus:ring-1 focus:ring-gold-400 border border-charcoal-700 focus:border-gold-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Motivation Essay */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-cream-350 mb-1">
                        Írd le pár mondatban a motivációdat: Miért szeretnél profi sminkessé válni és mit csináltál eddig? *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Írd le miért keresed a fejlődést, Kinga kizárólag az elhivatott és alkotni vágyó diákokat fogadja be."
                        value={motivation}
                        onChange={(e) => setMotivation(e.target.value)}
                        className="w-full bg-charcoal-900 text-cream-100 placeholder:text-cream-500 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 border border-charcoal-700 focus:border-gold-400 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {/* Explicit Opt-in Checkbox */}
                    <label className="flex items-start gap-2.5 cursor-pointer group mt-2 pt-1 select-none">
                      <input 
                        type="checkbox" 
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-1 accent-gold-400 h-4 w-4 shrink-0 rounded text-charcoal-950 border-charcoal-700 focus:ring-gold-400"
                      />
                      <span className="text-[11px] text-cream-300 font-light leading-relaxed group-hover:text-white transition-colors">
                        Elfogadom az Adatkezelési Tájékoztatót és hozzájárulok a jelentkezésem feldolgozásához.
                      </span>
                    </label>

                    {/* Apply button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-600 text-charcoal-950 py-4 px-6 rounded-xl font-sans font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg border border-gold-400 hover:border-gold-500 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-charcoal-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          JELENTKEZÉS FELDOLGOZÁSA...
                        </>
                      ) : (
                        <>
                          <Bookmark className="w-4 h-4 text-charcoal-950 fill-current" />
                          KÜLDÖM A JELENTKEZÉSEM ÉS A MOTIVÁCIÓMAT
                        </>
                      )}
                    </button>

                  </form>

                  {/* FUD Footer Box */}
                  <div className="mt-4 p-3 bg-charcoal-950/40 rounded-lg border border-charcoal-700/60">
                    <p className="text-[10px] text-cream-300 font-light leading-relaxed text-center">
                      🔒 Az űrlap kitöltése után egy automatikus megerősítő e-mailt kapsz a helyfoglaláshoz szükséges számlaszámmal. A csoportok telítettsége után 3-4 héttel a részletes heti órarendet és a modellszükségleti listát is kiküldjük.
                    </p>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="academy-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-400/40">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif-lux text-2xl font-bold text-white tracking-tight">
                      Gratulálunk!
                    </h3>
                    <p className="text-xs text-gold-400 uppercase font-mono tracking-widest">
                      A Motivációs jelentkezésed sikeresen beérkezett!
                    </p>
                  </div>

                  <p className="text-sm text-cream-200 font-light max-w-sm mx-auto leading-relaxed">
                    Kinga 24 órán belül személyesen hívni fog a megadott számon a tervezéssel kapcsolatban. Küldtünk egy automatikus tájékoztató levelet e-mail fiókodba a heti órarenddel és a banki adatokkal.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-charcoal-700 hover:border-gold-400/40 rounded-lg text-xs font-mono tracking-wider uppercase text-cream-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Új Jelentkezés leadása
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

    </section>
  );
}

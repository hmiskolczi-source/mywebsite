/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

    if (!name.trim() || !phone.trim() || !email.trim() || !age.trim() || !motivation.trim()) {
      setError('Kérjük, tölts ki minden kötelező mezőt.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="academy-form-anchor" className="py-32 md:py-48 bg-charcoal-800 text-cream-100 overflow-hidden relative">
      {/* Editorial background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal-900/30 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">
          
          {/* Left Column - Editorial Content */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Jelentkezés a képzésre</span>
              <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
                Válj keresett szakemberré <br /><span className="italic">egy exkluzív közösségben.</span>
              </h2>
            </div>

            <p className="text-lg text-cream-100/70 font-light leading-relaxed max-w-xl">
              A prémium piaci belépéshez hiteles szakmai alapok szükségesek. Ez a 100 órás mentorprogram a legmagasabb szintű gyakorlati logikát adja át.
            </p>

            <div className="space-y-10 pt-8">
              <h4 className="text-[11px] font-bold tracking-luxury text-gold-400/60 uppercase">Amit biztosítunk számodra</h4>
              <ul className="space-y-6">
                {[
                  "Személyes lakásstúdió és teljes anyagbiztosítás",
                  "Retusált, azonnal bevethető digitális portfólió",
                  "Állami tanúsítvány Hajas László aláírásával",
                  "Mentorálás kizárólag kis létszámú csoportban"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-base text-cream-100/80 font-light">
                    <span className="text-gold-500 font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Refined Form */}
          <div className="lg:w-1/2 w-full">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-12"
                >
                  <div className="space-y-2 border-b border-white/10 pb-8">
                    <h3 className="font-serif-lux text-3xl font-light text-white">Jelentkezési űrlap</h3>
                    <p className="text-[10px] font-bold tracking-luxury text-gold-400 uppercase">Alapozó sminkképzés / 100 óra</p>
                  </div>

                  {error && (
                    <p className="text-xs text-rose-400 italic font-serif-lux">{error}</p>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Name */}
                      <div className="relative group">
                        <input 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-gold-400 transition-colors placeholder:text-cream-100/20"
                          placeholder="TELJES NÉV"
                        />
                      </div>
                      {/* Phone */}
                      <div className="relative group">
                        <input 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-gold-400 transition-colors placeholder:text-cream-100/20"
                          placeholder="TELEFONSZÁM"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      {/* Email */}
                      <div className="md:col-span-2 relative group">
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-gold-400 transition-colors placeholder:text-cream-100/20"
                          placeholder="E-MAIL CÍM"
                        />
                      </div>
                      {/* Age */}
                      <div className="relative group">
                        <input 
                          type="text" 
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-gold-400 transition-colors placeholder:text-cream-100/20"
                          placeholder="ÉLETKOR"
                        />
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="relative group">
                      <textarea
                        rows={3}
                        value={motivation}
                        onChange={(e) => setMotivation(e.target.value)}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-gold-400 transition-colors placeholder:text-cream-100/20 resize-none"
                        placeholder="ÍRD LE PÁR MONDATBAN A MOTIVÁCIÓDAT..."
                      />
                    </div>

                    <div className="space-y-8">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                          className="mt-1 accent-gold-400 h-4 w-4 shrink-0 bg-transparent border-white/20"
                        />
                        <span className="text-[11px] text-cream-100/40 font-light leading-relaxed uppercase tracking-widest group-hover:text-cream-100 transition-colors">
                          Elfogadom az adatkezelési tájékoztatót.
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full py-6 bg-gold-500 text-charcoal-900 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-gold-400 rounded-none"
                      >
                        <span className="relative z-10">{isSubmitting ? 'Feldolgozás...' : 'Jelentkezés küldése'}</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-8 border border-white/10"
                >
                  <div className="space-y-4">
                    <h3 className="font-serif-lux text-4xl font-light text-white">Köszönjük.</h3>
                    <p className="text-xs text-gold-400 uppercase tracking-luxury">Jelentkezésedet rögzítettük.</p>
                  </div>
                  <p className="text-sm text-cream-100/60 font-light max-w-xs mx-auto leading-relaxed">
                    Kinga 24 órán belül személyesen keresni fog a megadott telefonszámon.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[10px] font-bold tracking-luxury text-white/40 uppercase hover:text-white transition-colors"
                  >
                    Vissza az űrlaphoz
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

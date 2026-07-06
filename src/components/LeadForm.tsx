/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle, Shield, Sparkles, User, Phone, Mail, FileText } from 'lucide-react';
import { Lead } from '../types';

interface LeadFormProps {
  idPrefix: string;
}

export default function LeadForm({ idPrefix }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [agree, setAgree] = useState(false);

  // States for validation & submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!name.trim()) {
      setError('Kérjük, adja meg a nevét.');
      return;
    }
    if (!phone.trim()) {
      setError('Kérjük, adja meg a telefonszámát.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Kérjük, adjon meg egy érvényes e-mail címet.');
      return;
    }
    if (!area) {
      setError('Kérjük, válassza ki a keresett területet.');
      return;
    }
    if (!agree) {
      setError('Kérjük, fogadja el az adatkezelési tájékoztatót.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury reservation submit
    setTimeout(() => {
      const newLead: Lead = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        phone,
        email,
        area,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage so leads are persistent and real
      try {
        const existingLeads = JSON.parse(localStorage.getItem('makeup_leads') || '[]');
        existingLeads.push(newLead);
        localStorage.setItem('makeup_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error('Error saving lead:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setArea('');
    setIsSuccess(false);
  };

  return (
    <div 
      id={`${idPrefix}-form-container`} 
      className="bg-charcoal-800 text-cream-50 rounded-2xl p-6 md:p-8 border border-gold-300/20 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative luxury ambient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-200 text-xs rounded-full font-mono tracking-wider uppercase mb-2">
                <Sparkles className="w-3 shrink-0" />
                Személyre Szabott Konzultáció kompromisszummentes minőséget kereső nőknek
              </div>
              <h3 className="font-serif-lux text-2xl md:text-3xl font-medium tracking-tight text-white">
                Kérj egyéni anatómiai konzultációt
              </h3>
              <p className="text-sm text-cream-300 mt-2 font-light">
                Kérjük, adja meg adatait, és Kinga személyesen, 24 órán belül felveszi Önnel a kapcsolatot a prémium tervezéshez.
              </p>
            </div>

            {error && (
              <div className="mb-4 bg-red-950/40 border border-red-500/30 text-red-200 text-sm p-3 rounded-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3 text-gold-300" />
                  Név *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Pl.: Kovács Anna"
                    className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3 text-gold-300" />
                  Telefonszám *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Pl.: +36 30 123 4567"
                    className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3 text-gold-300" />
                  E-mail *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Pl.: anna@pelda.hu"
                    className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300"
                  />
                </div>
              </div>

              {/* Area of Interest */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3 text-gold-300" />
                  Melyik terület érdekel? *
                </label>
                <select
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 text-cream-300 text-sm transition-all focus:ring-1 focus:ring-gold-300 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C5A059' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.2em',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="" disabled className="bg-charcoal-900">Válassz egy területet...</option>
                  <option value="Szemöldök" className="bg-charcoal-900">Szemöldök (Hiperrealisztikus / Poros hatás)</option>
                  <option value="Ajak" className="bg-charcoal-900">Ajak (Selymes ajaksatírozás / Lip blush)</option>
                  <option value="Szemhéj" className="bg-charcoal-900">Szemhéj (Lágy tusvonal / Füstös hatás)</option>
                  <option value="Javítás" className="bg-charcoal-900">Elrontott tetoválás javítása / Korrekció</option>
                </select>
              </div>

              {/* GDPR Agree */}
              <div className="pt-1 select-none">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-cream-300 font-light leading-relaxed">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required
                    className="mt-0.5 rounded border-amber-200/15 text-gold-400 bg-charcoal-900 focus:ring-gold-400 focus:ring-opacity-20 accent-gold-400"
                  />
                  <span>
                    Elfogadom az{' '}
                    <a
                      href="/adatvedelem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-300 hover:text-gold-200 underline underline-offset-1 transition-colors"
                    >
                      Adatkezelési Tájékoztatót
                    </a>
                    {' '}és hozzájárulok a személyre szabott konzultáció megszervezéséhez.
                  </span>
                </label>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-charcoal-900 hover:text-charcoal-950 font-sans font-semibold tracking-wide uppercase py-4 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-gold-300 flex items-center justify-center gap-2 relative shadow-lg shadow-gold-500/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Tervezés indítása...
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    Jelentkezem egyéni tervezésre Kingához
                  </>
                )}
              </button>

              {/* FUD Reducer under button */}
              <div className="pt-2 text-center border-t border-cream-100/5 mt-4 flex items-center justify-center gap-2">
                <Shield className="w-3.5 h-3.5 text-gold-300 leading-none shrink-0" />
                <span className="text-[11px] font-mono tracking-normal text-cream-300">
                  Fájdalommentes technológia és 100% elszíneződés elleni anatómiai garancia.
                </span>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-300 text-gold-300 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif-lux text-3xl font-medium text-white tracking-tight">
              Sikeres Foglalás!
            </h3>
            <p className="text-sm text-gold-200 font-mono uppercase tracking-wider mt-1">
              Köszönjük a bizalmat, {name}!
            </p>
            <p className="text-sm text-cream-300 font-light leading-relaxed max-w-sm mx-auto mt-4">
              Az egyedi anatómiai tervezési igényeidet regisztráltam. Kinga személyesen hamarosan hívni fog a megadott 
              <strong className="text-white block font-medium mt-1 font-mono">{phone}</strong> telefonszámon az időpont egyeztetéséhez.
            </p>

            <div className="mt-8 pt-6 border-t border-amber-200/5">
              <div className="bg-charcoal-900 rounded-xl p-4 inline-block text-left w-full max-w-xs text-xs font-mono text-cream-300 space-y-2">
                <div className="text-amber-100/50 pb-1.5 border-b border-amber-200/5 flex justify-between items-center">
                  <span>REGISZTRÁCIÓS ADATOK:</span>
                  <span className="text-gold-300 font-bold">PRÉMIUM</span>
                </div>
                <div className="flex justify-between">
                  <span>Terület:</span>
                  <span className="text-white font-medium">{area}</span>
                </div>
                <div className="flex justify-between">
                  <span>E-mail:</span>
                  <span className="text-white font-medium truncate max-w-[160px]">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Technológia:</span>
                  <span className="text-gold-300 font-medium">Fájdalommentes (Kétfázisú)</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 text-xs text-cream-300/60 hover:text-gold-300 font-mono uppercase tracking-wider underline underline-offset-4 transition-all cursor-pointer"
            >
              Új időpont rögzítése
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

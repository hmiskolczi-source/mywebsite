/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, User, Mail, Phone, FileText, MessageSquare, X } from 'lucide-react';
import { AcademyLead } from '../types';

interface AcademyFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
}

export default function AcademyForm({ isOpen, onClose, courseTitle }: AcademyFormProps) {
  const courseMap: { [key: string]: string } = {
    'Haladó anyag- és formatechnikai mesterprogram': 'mesterképzés',
    'Személyre szabott, egyéni bajnoki mentorprogram': 'versenyfelkészítés',
    '3 órás privát önsminkelési mesterkurzus': 'smink-tanácsadás',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [course, setCourse] = useState(courseTitle ? courseMap[courseTitle] || '' : '');
  const [agree, setAgree] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courseOptions = [
    { value: 'mesterképzés', label: 'Mesterképzés' },
    { value: 'versenyfelkészítés', label: 'Versenyfelkészítés' },
    { value: 'smink-tanácsadás', label: 'Smink tanácsadás' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Kérjük, adja meg a nevét.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Kérjük, adjon meg egy érvényes e-mail címet.');
      return;
    }
    if (!phone.trim()) {
      setError('Kérjük, adja meg a telefonszámát.');
      return;
    }
    if (!course) {
      setError('Kérjük, válassza ki a képzést.');
      return;
    }
    if (!agree) {
      setError('Kérjük, fogadja el az adatvédelmi nyilatkozatot.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newLead = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        phone,
        message,
        course,
        createdAt: new Date().toISOString(),
      };

      try {
        const existingLeads = JSON.parse(localStorage.getItem('academy_leads') || '[]');
        existingLeads.push(newLead);
        localStorage.setItem('academy_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error('Error saving lead:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setCourse(courseTitle ? courseMap[courseTitle] || '' : '');
      setAgree(false);
      setError(null);
      setIsSuccess(false);
      onClose();
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCourse('');
    setAgree(false);
    setError(null);
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-charcoal-800 text-cream-50 rounded-2xl p-6 md:p-8 border border-gold-300/20 shadow-2xl relative overflow-hidden">
              {/* Decorative ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

              {/* Close button */}
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 p-2 text-cream-300 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-6 pr-6">
                      <h3 className="font-serif-lux text-2xl md:text-3xl font-medium tracking-tight text-white">
                        Képzési Jelentkezés
                      </h3>
                      <p className="text-sm text-cream-300 mt-2 font-light">
                        Kinga személyesen fogja feldolgozni a jelentkezésed. Hamarosan felveszi veled a kapcsolatot.
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
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Pl.: Kovács Anna"
                          className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3 text-gold-300" />
                          E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Pl.: anna@pelda.hu"
                          className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3 text-gold-300" />
                          Telefonszám *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Pl.: +36 30 123 4567"
                          className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300"
                        />
                      </div>

                      {/* Course Selection */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                          <FileText className="w-3 text-gold-300" />
                          Képzés kiválasztása *
                        </label>
                        <select
                          required
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 text-cream-300 text-sm transition-all focus:ring-1 focus:ring-gold-300 appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C5A059' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.2em',
                            backgroundRepeat: 'no-repeat',
                            paddingRight: '2.5rem'
                          }}
                        >
                          <option value="" disabled className="bg-charcoal-900">
                            Válassz egy képzést...
                          </option>
                          {courseOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-charcoal-900">
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-amber-100/70 mb-1.5 flex items-center gap-1.5">
                          <MessageSquare className="w-3 text-gold-300" />
                          Üzenet (opcionális)
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Pl.: Milyen tapasztalatod van a sminkelésben?"
                          rows={4}
                          className="w-full bg-charcoal-900 border border-amber-200/10 focus:border-gold-300 focus:outline-none rounded-lg px-4 py-3 placeholder-cream-300/30 text-white text-sm transition-all focus:ring-1 focus:ring-gold-300 resize-none"
                        />
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
                              Adatvédelmi Nyilatkozatot
                            </a>
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-charcoal-900 hover:text-charcoal-950 font-sans font-semibold tracking-wide uppercase py-4 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-gold-300 flex items-center justify-center gap-2 relative shadow-lg shadow-gold-500/10 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Feldolgozás...
                          </>
                        ) : (
                          'Jelentkezés Küldése'
                        )}
                      </button>
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
                      Sikeres Jelentkezés!
                    </h3>
                    <p className="text-sm text-gold-200 font-mono uppercase tracking-wider mt-1">
                      Köszönjük, {name}!
                    </p>
                    <p className="text-sm text-cream-300 font-light leading-relaxed max-w-sm mx-auto mt-4">
                      A jelentkezésed regisztráltam. Kinga személyesen hamarosan felveszi veled a kapcsolatot a
                      <strong className="text-white block font-medium mt-1 font-mono">{phone}</strong>
                      telefonszámon az időpont egyeztetéséhez.
                    </p>

                    <button
                      onClick={handleReset}
                      className="mt-6 text-xs text-cream-300/60 hover:text-gold-300 font-mono uppercase tracking-wider underline underline-offset-4 transition-all cursor-pointer"
                    >
                      Bezárás
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

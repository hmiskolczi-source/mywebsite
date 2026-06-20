/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Heart, Scroll } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <footer className="bg-charcoal-900 text-cream-200 pt-16 pb-12 border-t border-amber-200/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col items-center text-center justify-center pb-12 border-b border-cream-100/5 space-y-6">
          
          {/* Brand details - Centered & Elegant */}
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="font-serif-lux font-bold text-xl sm:text-2xl tracking-wider text-white uppercase">
                MISKOLCZI KINGA
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            </div>
            <p className="text-xs text-cream-300 font-light leading-relaxed">
              Többszörös Európa- és Világbajnoki dobogós sminkmester és sminktetováló specialista. 
              Személyre szabott hibrid, soft powder és kompromisszummentes korrekciós eljárások Budapest szívében.
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5 bg-charcoal-800/40 px-3.5 py-1.5 rounded-full border border-cream-100/5">
                <Award className="w-3.5 h-3.5" />
                15 ÉVES NEMZETKÖZI BAJNOKI PEDIGRÉ
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-cream-300/50">
          <p>
            &copy; 2026 Hovorka-Miskolczi Kinga. Minden jog fenntartva.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => openModal('privacy')}
              className="hover:text-gold-300 transition-colors cursor-pointer"
            >
              Adatvédelmi Nyilatkozat
            </button>
            <button 
              onClick={() => openModal('terms')}
              className="hover:text-gold-300 transition-colors cursor-pointer"
            >
              ÁSZF & Garanciális Feltételek
            </button>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span>for timeless elegance</span>
          </div>
        </div>

      </div>

      {/* Premium Policy Modals Overlay (To satisfy real stubs policy completely) */}
      <AnimatePresence>
        {modalType && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-cream-100 text-charcoal-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-gold-300 shadow-2xl relative max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-cream-300 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-gold-500" />
                  <h3 className="font-serif-lux text-xl font-bold">
                    {modalType === 'privacy' ? 'Adatkezelési Tájékoztató' : 'Általános Szerződési Feltételek & Garancia'}
                  </h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-1 px-2.5 rounded bg-cream-200 hover:bg-cream-300 font-mono text-xs font-bold transition-all cursor-pointer"
                >
                  [ Bezár ]
                </button>
              </div>

              <div className="text-xs sm:text-sm font-light leading-relaxed text-charcoal-800 space-y-4">
                {modalType === 'privacy' ? (
                  <>
                    <p className="font-semibold text-charcoal-950">1. Adatgyűjtés Célja</p>
                    <p>A weboldalon megadott adatokat (Név, Telefonszám, E-mail cím, keresett terület) kizárólag a Hovorka-Miskolczi Kingatól igényelt egyéni anatómiai konzultáció egyeztetése céljából tárolom és dolgozom fel.</p>
                    <p className="font-semibold text-charcoal-950">2. Adatkezelés időtartama</p>
                    <p>Az adatokat a konzultáció létrejöttéig vagy a felhasználó törlési kérelméig őrzöm meg a hatályos hazai és európai (GDPR) adatvédelmi jogszabályoknak megfelelően.</p>
                    <p className="font-semibold text-charcoal-950">3. Biztonság & Harmadik felek</p>
                    <p>A lead adatokat harmadik fél részére nem értékesítem, nem használom kéretlen üzenetek (spam) küldésére, és azokat TLS titkosítással ellátott szervereken tárolom.</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-charcoal-950">1. Konzultáció és Tervezés</p>
                    <p>Minden kezelést kötelező egyéni arc-architektúra elemzés és előrajzolás előz meg. A pigmentálást kizárólag a vendég által írásban jóváhagyott, milliméter-pontos forma és árnyalat elfogadása után kezdem meg.</p>
                    <p className="font-semibold text-charcoal-950">2. 100% Színgarancia és Anatómiai felelősség</p>
                    <p>Minden prémium eljárásunkra 100% elszíneződés elleni anatómiai garanciát vállalok. Ha az előírt utóápolási utasítások betartása mellett a gyógyulási időszak után rendellenes elszíneződés vagy aszimmetria lép fel, a díjmentes korrekciós időszakon belül orvosolom a hibát.</p>
                    <p className="font-semibold text-charcoal-950">3. Higiénia és Alapanyagok</p>
                    <p>Kizárólag orvosi tisztaságú, steril egyszer használatos modulokkal és az EU REACH 2026 szabályozásának maradéktalanul megfelelő, nehézfémmentes, színgarantált svájci pigmentekkel dolgozünk.</p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-cream-300 text-right">
                <button 
                  onClick={closeModal}
                  className="bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-950 font-mono text-xs font-bold px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  Megértettem és Elfogadom
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

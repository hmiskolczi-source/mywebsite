/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface NavbarProps {
  currentPage: 'home' | 'sminktetovalas' | 'sminkkepzes';
}

export default function Navbar({ currentPage }: NavbarProps) {
  const scrollToForm = () => {
    const anchorId = currentPage === 'sminkkepzes' ? 'academy-form-anchor' : 'lead-form-anchor';
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-cream-100/90 backdrop-blur-md border-b border-cream-300/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4">
        
        {/* Brand logo & tagline representation */}
        <a 
          href="/" 
          className="flex flex-col cursor-pointer select-none shrink-0 no-underline"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-serif-lux font-bold text-base sm:text-2xl tracking-wider text-charcoal-900 uppercase">
              MISKOLCZI KINGA
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          <span className="text-[8px] sm:text-[11px] font-mono uppercase tracking-widest text-charcoal-700 font-medium whitespace-nowrap">
            Többszörös EB & VB Bajnoki Dobogós sminkmester
          </span>
        </a>

        {/* Dynamic Nav Tabs */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider">
          <a
            href="/sminktetovalas"
            className={`cursor-pointer transition-all relative py-2 no-underline ${
              currentPage === 'sminktetovalas' ? 'text-charcoal-900 font-extrabold' : 'text-charcoal-700 hover:text-gold-650'
            }`}
          >
            SMINKTETOVÁLÁS
            {currentPage === 'sminktetovalas' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
          <a
            href="/sminkkepzes"
            className={`cursor-pointer transition-all relative py-2 no-underline ${
              currentPage === 'sminkkepzes' ? 'text-charcoal-900 font-extrabold' : 'text-charcoal-700 hover:text-gold-650'
            }`}
          >
            100 ÓRÁS SMINKKÉPZÉS
            {currentPage === 'sminkkepzes' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile view text indicator for navigation alternative */}
          <div className="flex md:hidden items-center bg-cream-200 p-1 rounded-lg border border-cream-300">
            <a
              href="/sminktetovalas"
              className={`px-2.5 py-1.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded no-underline ${
                currentPage === 'sminktetovalas' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700'
              }`}
            >
              Tetoválás
            </a>
            <a
              href="/sminkkepzes"
              className={`px-2.5 py-1.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded no-underline ${
                currentPage === 'sminkkepzes' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700'
              }`}
            >
              Képzés
            </a>
          </div>

          <button
            onClick={scrollToForm}
            className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal-800 text-cream-100 text-[10px] sm:text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
          >
            <span className="relative z-10">{currentPage === 'sminkkepzes' ? 'Jelentkezem képzésre' : 'Konzultáció'}</span>
            <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
          </button>
        </div>
      </div>
    </header>
  );
}

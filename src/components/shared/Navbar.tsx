/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'sminktetovalas' | 'sminkkepzes';
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
        
        {/* Brand logo */}
        <a
          href="/"
          className="cursor-pointer select-none shrink-0 no-underline"
        >
          <img
            src="https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/shared/KMLOGO.png"
            alt="Kinga Miskolczi Logo"
            className="h-[57.6px] sm:h-[76.8px] w-auto"
          />
        </a>

        {/* Dynamic Nav Tabs */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider">
          <a
            href="/"
            className={`cursor-pointer transition-all relative py-2 no-underline ${
              currentPage === 'home' ? 'text-charcoal-900 font-extrabold' : 'text-charcoal-700 hover:text-gold-650'
            }`}
          >
            RÓLAM
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
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
            SMINKISKOLA
            {currentPage === 'sminkkepzes' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-charcoal-800 p-2 hover:bg-cream-200 rounded transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            onClick={scrollToForm}
            className="hidden md:block group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-charcoal-800 text-cream-100 text-[10px] sm:text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-charcoal-700 rounded-none"
          >
            <span className="relative z-10">
              {currentPage === 'home' ? 'Kapcsolatba lépek Kingával' : currentPage === 'sminkkepzes' ? 'Elindítom a sminkes karrierem' : 'Jelentkezem egyéni tervezésre Kingához'}
            </span>
            <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream-100/95 backdrop-blur-md border-b border-cream-300/30 md:hidden">
            <div className="flex flex-col items-start gap-0 px-4 py-4 max-w-7xl mx-auto">
              <a
                href="/"
                className={`w-full px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider rounded transition-colors no-underline ${
                  currentPage === 'home' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700 hover:bg-cream-200'
                }`}
              >
                Rólam
              </a>
              <a
                href="/sminktetovalas"
                className={`w-full px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider rounded transition-colors no-underline ${
                  currentPage === 'sminktetovalas' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700 hover:bg-cream-200'
                }`}
              >
                Sminktetoválás
              </a>
              <a
                href="/sminkkepzes"
                className={`w-full px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider rounded transition-colors no-underline ${
                  currentPage === 'sminkkepzes' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700 hover:bg-cream-200'
                }`}
              >
                Sminkiskola
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

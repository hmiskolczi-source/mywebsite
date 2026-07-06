/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-charcoal-900 text-cream-200 pt-16 pb-12 border-t border-amber-200/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col items-center text-center justify-center pb-12 border-b border-cream-100/5 space-y-6">
          
          {/* Brand details - Centered & Elegant */}
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <img
                src="https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/shared/footerlogo.png"
                alt="Kinga Miskolczi Footer Logo"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-xs text-cream-300 font-light leading-relaxed">
              EB aranyérmes és 3x-os VB ezüstérmes sminkmester, nemzetközi zsűrítag és oktató.
            </p>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[11px] font-mono text-cream-300/50">
          <p className="order-1 sm:order-1 sm:absolute sm:left-4 sm:lg:left-8">
            &copy; 2026 Hovorka-Miskolczi Kinga. Minden jog fenntartva.
          </p>

          <a
            href="/adatvedelem"
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 hover:text-gold-300 transition-colors cursor-pointer"
          >
            Adatvédelmi Nyilatkozat
          </a>

          <div className="order-3 sm:order-3 sm:absolute sm:right-4 sm:lg:right-8 flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span>care by</span>
            <a
              href="https://norb.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors underline"
            >
              Norb
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

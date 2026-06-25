/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FloatingCTAProps {
  page: 'tetovalas' | 'sminktetovalas' | 'sminkkepzes';
}

export default function FloatingCTA({ page }: FloatingCTAProps) {
  const scrollToForm = () => {
    const anchorId = page === 'sminkkepzes'
      ? 'academy-form-anchor'
      : 'lead-form-anchor';
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden max-w-[calc(100vw-3rem)]">
      <button
        onClick={scrollToForm}
        className="bg-gold-400 text-charcoal-950 px-4 py-3 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-xl border border-gold-300 hover:bg-gold-300 transition-all cursor-pointer flex items-center gap-1.5 text-left"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        {page === 'sminkkepzes' ? 'Jelentkezem Kingához képzésre' : 'Jelentkezem egyéni tervezésre Kingához'}
      </button>
    </div>
  );
}

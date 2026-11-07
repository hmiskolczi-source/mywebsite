/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function BrandLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-charcoal-700">
      <span className="font-serif-lux text-sm font-bold tracking-widest uppercase">BABOR</span>
      <div className="w-px h-4 bg-charcoal-700/20" />
      <span className="font-serif-lux font-semibold italic text-sm tracking-wider">Playboy</span>
      <div className="w-px h-4 bg-charcoal-700/20" />
      <span className="font-serif-lux font-semibold text-sm tracking-wider">Esküvő Classic</span>
      <div className="w-px h-4 bg-charcoal-700/20" />
      <span className="font-sans font-black uppercase text-sm tracking-tighter">Blikk</span>
    </div>
  );
}

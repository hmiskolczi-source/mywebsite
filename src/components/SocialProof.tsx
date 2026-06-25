/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-60"
    >
      <span className="font-serif-lux text-sm font-bold tracking-widest uppercase">Nemzetközi zsűrítag</span>
      <div className="w-px h-4 bg-charcoal-700/20" />
      <span className="font-serif-lux font-semibold text-sm tracking-wider">Versenyfelkészítő</span>
      <div className="w-px h-4 bg-charcoal-700/20" />
      <span className="font-serif-lux font-semibold text-sm tracking-wider">3× VB-dobogós</span>
      <div className="w-px h-4 bg-charcoal-700/20" />
      <span className="font-sans font-black uppercase text-sm tracking-tighter">EB-arany</span>
    </motion.div>
  );
}

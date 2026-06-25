/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';

interface HomeTestimonialProps {
  text: string;
  name: string;
  role: string;
}

export default function HomeTestimonial({ text, name, role }: HomeTestimonialProps) {
  return (
    <div className="border border-charcoal-800/5 p-6 bg-white/50">
      <div className="flex items-start gap-4">
        <Quote className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" strokeWidth={1} />
        <div className="space-y-3">
          <p className="text-sm text-charcoal-700 font-light leading-relaxed italic">
            "{text}"
          </p>
          <div>
            <p className="text-xs font-bold text-charcoal-800 uppercase tracking-wide">{name}</p>
            <p className="text-[11px] text-gold-600 uppercase tracking-wider">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

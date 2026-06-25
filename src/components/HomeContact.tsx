/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

export default function HomeContact() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-800 text-cream-100 overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal-900/30 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Content */}
        <div className="text-center space-y-8 max-w-2xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Ha bármi kérdésed van
            </h2>
            <p className="text-lg text-cream-100/70 font-light leading-relaxed">
              Akár sminktetoválásról, akár oktatásról — nyugodtan írj. Nem egy automata válaszol.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4"
          >
            {/* Email Link */}
            <a
              href="mailto:[email@example.com]"
              className="group relative px-10 py-5 bg-gold-500 text-charcoal-900 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-gold-400 rounded-none inline-flex items-center gap-3"
            >
              <Mail className="w-4 h-4" />
              <span className="relative z-10">Írj Kingának</span>
              <div className="absolute inset-0 bg-charcoal-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
            </a>

            {/* Instagram Link - Optional */}
            <a
              href="https://instagram.com/[instagram-handle]"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 border border-cream-100 text-cream-100 text-xs font-bold tracking-luxury uppercase overflow-hidden transition-all duration-500 hover:bg-cream-100 hover:text-charcoal-900 rounded-none inline-flex items-center gap-3"
            >
              <Instagram className="w-4 h-4" />
              <span className="relative z-10">Instagram</span>
            </a>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs text-cream-100/40 font-light pt-4"
          >
            Napi munkáimat az Instagramon osztom meg.
          </motion.p>

        </div>

      </div>
    </section>
  );
}

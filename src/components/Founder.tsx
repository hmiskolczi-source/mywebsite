/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Check, Sparkles, MapPin, Stamp } from 'lucide-react';

export default function Founder() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const milestones = [
    'Többszörös Európa- és Világbajnoki dobogós sminkes',
    'A BABOR hivatalos magyarországi sminkmestere',
    '15+ év nemzetközi tapasztalat (London, Miami, Milánó)',
    'Több mint 150 diplomás sminktanítvány képzése',
    'Ezer feletti sikeresen elkészített prémium sminktetoválás',
  ];

  return (
    <section className="py-24 bg-cream-250 relative overflow-hidden">
      {/* Absolute background accent */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-gold-200/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait representation of Kinga */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-cream-300 bg-white p-3 group"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-charcoal-900">
                {/* Clean professional portrait representative photo of Miskolczi Kinga */}
                <img 
                  src="https://scontent.fbud4-1.fna.fbcdn.net/v/t39.30808-6/472141294_18480923419003329_8740953818239765070_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jj_M-tdF3dcQ7kNvwHUhlpu&_nc_oc=AdrwlPs4SrHjcX11wPRfdykSKAqUul0tMe0bMkHa3r_OwVcK4m9bGiUGWJVwziiaKAwXtEtuGFYdL9_j7_H2sKkm&_nc_zt=23&_nc_ht=scontent.fbud4-1.fna&_nc_gid=SKKNedSSrVVvgq-P6niR4g&_nc_ss=7b2a8&oh=00_Af_QRprhdkoTvdRnZeG_OKT9MpfG5xCn_gKt4nX3GqcSrw&oe=6A249092" 
                  alt="Hovorka-Miskolczi Kinga sminkmester"
                  className="w-full h-full object-cover opacity-90 object-top group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent pointer-events-none" />
                
                {/* Quick overlay badges on portrait to convey absolute realism */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400 text-charcoal-950 text-xs font-mono font-bold uppercase rounded-full">
                    <Stamp className="w-3" />
                    Bajnoki Garancia
                  </div>
                  <p className="text-white font-serif-lux text-xl font-bold tracking-wide">
                    Hovorka-Miskolczi Kinga
                  </p>
                  <p className="text-[10px] font-mono text-cream-300 uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3 text-gold-400" />
                    Budapest & Nemzetközi Műhelyek
                  </p>
                </div>
              </div>

              {/* Decorative design arches */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400 rounded-br-xl pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Narrative Biography & Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 border border-gold-200 text-gold-600 text-xs rounded-full font-mono font-semibold tracking-wider uppercase">
                <Award className="w-3 h-3 text-gold-500 shrink-0" />
                Személyes Garancia Az Arcodra
              </div>
              
              <h2 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
                15 év nemzetközi bajnoki tapasztalat, amely a Te arcod biztonságát garantálja.
              </h2>
              <div className="h-0.5 w-16 bg-gold-400" />
            </div>

            {/* Exact Hungarian bio text */}
            <p className="text-charcoal-800 font-light text-base leading-relaxed">
              Hovorka-Miskolczi Kinga vagyok, sminkmester. Számomra a smink az önkifejezés egyik legszebb formája – egy erő és egy fegyver, hogy magabiztosabbnak érezd magad. Többszörös Európa- és Világbajnoki dobogósként, valamint a Babor magyarországi sminkmestereként az elmúlt 15 évben Londontól Miami-ig képeztem magam. Célom minden alkalommal ugyanaz: nem sablonokat gyártani, hanem megtalálni és kiemelni a benned rejlő egyedi szépséget, hogy önmagad legragyogóbb változata köszönjön vissza a tükörben.
            </p>

            {/* Dynamic visual checkpoints lists */}
            <div className="pt-4 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold block">
                Szakmai Mérföldkövek & Garancia:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-0.5 bg-gold-400/10 border border-gold-400/30 rounded-full text-gold-600 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-charcoal-800 leading-tight">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action integration */}
            <div className="pt-6 border-t border-cream-300 flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-950 px-6 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Jelentkezem egyéni tervezésre Kingához
              </button>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-charcoal-700">A héten még 3 konzultációs hely elérhető</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

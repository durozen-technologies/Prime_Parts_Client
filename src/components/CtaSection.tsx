'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { ArrowRight, PhoneCall, CheckCircle2, Shield } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Red Ambient Glow Shadows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-700/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>PARTNER WITH INDUSTRY LEADERS</span>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight uppercase leading-[1.08] mb-3 sm:mb-5">
            Looking for Reliable Spare Parts?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm sm:leading-relaxed text-slate-200 mb-6 sm:mb-8 max-w-xl">
            {COMPANY_DATA.cta.subheading}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-10">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 min-w-0">
              <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-red-400 shrink-0" />
              <span className="truncate">Bulk Wholesale Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 min-w-0">
              <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-red-400 shrink-0" />
              <span className="truncate">Zero-Defect Standards</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 min-w-0">
              <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-red-400 shrink-0" />
              <span className="truncate">Instant Cross-Ref Lookup</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 min-w-0">
              <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-red-400 shrink-0" />
              <span className="truncate">Express Priority Delivery</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all group text-center"
            >
              <span>{COMPANY_DATA.cta.primaryButton}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${COMPANY_DATA.contactInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-md transition-all text-center"
            >
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>Call Direct: {COMPANY_DATA.contactInfo.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

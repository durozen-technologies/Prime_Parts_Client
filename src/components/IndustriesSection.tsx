'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers 
} from 'lucide-react';

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
            <Layers className="w-3.5 h-3.5 text-red-700" />
            <span>APPLICATIONS & VERTICALS</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight mb-2.5 sm:mb-3">
            Industries We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Engineered spare parts solutions tailored for diverse automotive segments, transit networks, and heavy-duty industrial machinery.
          </p>
        </div>

        {/* Industry Cards Grid - 2 columns side-by-side on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {COMPANY_DATA.industries.map((ind, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-red-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-card-soft hover:shadow-card-elevated min-w-0"
            >
              {/* Image Banner */}
              <div className="relative h-32 sm:h-48 w-full overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Sector Number */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-slate-200 text-xs font-mono font-bold text-red-700 shadow-sm">
                  SECTOR 0{idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-red-700 mb-0.5 sm:mb-1 truncate">
                    {ind.tagline}
                  </div>
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-1 sm:mb-2.5 font-display uppercase tracking-wide leading-snug line-clamp-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 sm:mb-6 line-clamp-2 hidden xs:block">
                    {ind.description}
                  </p>

                  {/* Applications List */}
                  <div className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-2 sm:pt-4 mb-2 sm:mb-4">
                    {ind.applications.slice(0, 2).map((app, appIdx) => (
                      <div key={appIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-700 shrink-0" />
                        <span className="truncate">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-700 hover:text-red-800 uppercase tracking-wider group-hover:underline"
                  >
                    <span>Supply</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

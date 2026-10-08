'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  ShieldCheck, 
  PackageCheck, 
  TrendingUp, 
  Truck, 
  Cpu, 
  Award, 
  Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  PackageCheck,
  TrendingUp,
  Truck,
  Cpu,
  Award,
};

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-700" />
            <span>THE PRIME ADVANTAGE</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight mb-2.5 sm:mb-3">
            Why Choose Prime Parts?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Engineered precision, direct tier-1 sourcing, and an uncompromising dedication to reliability ensure your fleet and customer vehicles keep moving without interruption.
          </p>
        </div>

        {/* Feature Cards Grid - 2 columns side-by-side on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {COMPANY_DATA.whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative p-3.5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-red-300 transition-all duration-300 hover:-translate-y-1 shadow-card-soft hover:shadow-card-elevated flex flex-col justify-between min-w-0"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-5 gap-1.5">
                    <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-red-100/80 border border-red-200 flex items-center justify-center text-red-700 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      <IconComponent className="w-4 sm:w-5.5 h-4 sm:h-5.5" />
                    </div>

                    <span className="text-xs font-mono font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-red-700 border border-slate-200 shadow-sm truncate max-w-[65%]">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-1.5 group-hover:text-red-700 transition-colors font-display uppercase tracking-wide leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Index */}
                <div className="mt-2.5 sm:mt-6 pt-2 sm:pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-bold text-slate-600">
                  <span>PILLAR 0{idx + 1}</span>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

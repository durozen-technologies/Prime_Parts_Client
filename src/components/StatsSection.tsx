'use client';

import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_DATA } from '@/data/companyData';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 bg-slate-100/70 border-y border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {COMPANY_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-card-soft hover:shadow-card-elevated hover:border-red-200 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-4 sm:left-6 right-4 sm:right-6 h-[2px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent group-hover:via-red-600 transition-all" />

              {/* Number Value */}
              <div className="flex items-baseline gap-1 mb-1 sm:mb-1.5">
                <span className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight group-hover:text-red-600 transition-colors">
                  {isVisible ? stat.value : '0'}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 uppercase tracking-wider mb-1 font-display leading-snug">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {stat.description}
              </p>

              {/* Index chip */}
              <div className="text-right mt-2 text-xs font-mono font-bold text-slate-600">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

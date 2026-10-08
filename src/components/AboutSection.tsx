'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Warehouse, 
  ShieldCheck 
} from 'lucide-react';

export default function AboutSection() {
  const { about } = COMPANY_DATA;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Subtle light background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack (Hidden on Mobile view, visible on Desktop) */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image with Crisp Border & Shadow */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-card-elevated group">
                <img
                  src={about.imageMain}
                  alt="Prime Parts Central Logistics Facility"
                  className="w-full h-[380px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-md">
                  <Warehouse className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Central Distribution Facility
                  </span>
                </div>
              </div>

              {/* Floating Overlap Card */}
              <div className="absolute -bottom-8 -right-6 w-64 rounded-2xl overflow-hidden border border-slate-200 shadow-card-elevated bg-white p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700 font-extrabold text-lg">
                    {about.experienceYears}
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Years in Industry
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      Unbroken Supply Chain
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                  Serving over 1,200 commercial fleets, dealerships & independent repair centers.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Content & Pillars */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start w-full">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              <Award className="w-3.5 h-3.5 text-red-700" />
              <span>{about.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight mb-3 sm:mb-5">
              {about.heading}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-7 max-w-xl">
              {about.description}
            </p>

            {/* Key Pillars */}
            <div className="space-y-3 w-full mb-6 sm:mb-8">
              {about.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/80 hover:border-red-200 transition-all duration-200"
                >
                  <div className="p-1.5 rounded-lg bg-red-100 text-red-700 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#why-us"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all text-center"
              >
                <span>Know More About Our Process</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#awards"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all text-center"
              >
                <span>View Awards & Network</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

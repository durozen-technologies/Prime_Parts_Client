'use client';

import React, { useState } from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

interface FeaturedSectionProps {
  onInquireProduct?: (productName: string) => void;
}

export default function FeaturedSection({ onInquireProduct }: FeaturedSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = COMPANY_DATA.featuredProducts;
  const current = products[activeIndex];

  const nextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="featured" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-red-700" />
              <span>EDITORIAL SHOWCASE</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
              Precision Components
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl">
              Engineered for dependable performance under extreme thermal and mechanical demands.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevProduct}
              className="p-2.5 sm:p-3 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 border border-slate-200 transition-all"
              aria-label="Previous Featured Product"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <div className="text-xs font-mono font-bold text-slate-600 px-2">
              <span className="text-red-700 font-black">0{activeIndex + 1}</span> / 0{products.length}
            </div>
            <button
              onClick={nextProduct}
              className="p-2.5 sm:p-3 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 border border-slate-200 transition-all"
              aria-label="Next Featured Product"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Showcase Card */}
        <div className="relative rounded-3xl bg-[#f8fafc] border border-slate-200 overflow-hidden shadow-card-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Product Image Stage (Left 7 cols) */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[380px] lg:min-h-[500px] overflow-hidden bg-slate-900 flex items-center justify-center p-4 sm:p-6 group">
              <img
                key={current.image}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-center rounded-xl transition-all duration-700 filter brightness-95 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-black text-red-700 uppercase tracking-wider shadow-lg flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-red-700" />
                <span>{current.badge}</span>
              </div>
            </div>

            {/* Product Specifications & Details (Right 5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-red-700 uppercase mb-1.5 sm:mb-2">
                  {current.subtitle}
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 font-display uppercase tracking-tight leading-tight mb-2.5 sm:mb-3">
                  {current.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  {current.description}
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2 mb-6 sm:mb-8 bg-slate-50 p-3.5 sm:p-5 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 sm:mb-2 font-mono">
                    Engineering Benchmarks:
                  </div>
                  {current.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1 sm:py-1.5 border-b border-slate-200/80 last:border-0 gap-2"
                    >
                      <span className="text-slate-600 truncate">{spec.label}</span>
                      <span className="font-bold text-slate-900 font-mono text-right shrink-0">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => onInquireProduct && onInquireProduct(current.name)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-all text-center"
                >
                  <span>Inquire This Line</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#awards"
                  className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200 transition-colors text-center"
                >
                  View Network
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
          {products.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 p-2 sm:p-4 rounded-xl sm:rounded-2xl border text-center sm:text-left transition-all min-w-0 ${
                activeIndex === idx
                  ? 'bg-red-50/70 border-red-400 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl object-cover border border-slate-200 shrink-0"
              />
              <div className="flex-1 min-w-0 w-full">
                <div className="text-xs font-mono font-bold text-red-700 uppercase truncate">
                  0{idx + 1}
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">
                  {prod.name}
                </div>
                <div className="text-xs text-slate-600 truncate hidden sm:block">
                  {prod.badge}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

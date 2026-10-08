'use client';

import React from 'react';
import { ProductCategory } from '@/data/companyData';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Package } from 'lucide-react';

interface CategoryDetailModalProps {
  category: ProductCategory | null;
  onClose: () => void;
  onInquire: (categoryName: string) => void;
}

export default function CategoryDetailModal({
  category,
  onClose,
  onInquire,
}: CategoryDetailModalProps) {
  if (!category) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-modal-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/60 hover:bg-red-600 text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-56 w-full bg-slate-900">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6">
            <span className="text-[11px] font-mono font-bold text-red-300 uppercase tracking-widest block mb-1">
              {category.tagline}
            </span>
            <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">
              {category.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {category.description}
          </p>

          {/* Key Specifications */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 font-mono">
              Engineering Features & Compliance:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                <span>OEM Verified Tolerances</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <Package className="w-4 h-4 text-red-600 shrink-0" />
                <span>{category.itemsCount} Ready In Stock</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-500">
              Bulk Supply & Dealer Pricing Available
            </span>

            <button
              onClick={() => {
                onInquire(category.name);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-red-600/25 transition-all"
            >
              <span>Inquire This Line</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

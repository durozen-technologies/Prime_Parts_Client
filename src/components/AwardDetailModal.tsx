'use client';

import React from 'react';
import { AwardItem } from '@/data/companyData';
import { 
  X, 
  Trophy, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Star, 
  Share2, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface AwardDetailModalProps {
  award: AwardItem | null;
  onClose: () => void;
  onInquire: (subject: string) => void;
}

export default function AwardDetailModal({
  award,
  onClose,
  onInquire,
}: AwardDetailModalProps) {
  if (!award) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-modal-in overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl flex flex-col max-h-[90vh] my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-slate-900/70 hover:bg-red-600 text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-64 md:h-72 w-full bg-slate-950 shrink-0">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          {/* Top Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-amber-500 text-slate-950 font-black px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-mono shadow-lg flex items-center gap-1.5">
            <Trophy className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-slate-950 text-slate-950" />
            <span>{award.badge}</span>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-1 truncate">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400 shrink-0" />
              <span>{award.yearOrEvent}</span>
              <span>•</span>
              <span className="truncate">{award.tagline}</span>
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-black text-white font-display uppercase tracking-wide leading-tight line-clamp-2">
              {award.title}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto">
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2 font-mono flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span className="truncate">Location / Stage: {award.recipientOrLocation}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {award.description}
            </p>
          </div>

          {/* Key Event & Award Highlights */}
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 font-mono">
              Event & Felicitation Highlights:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {award.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs font-medium text-slate-800"
                >
                  <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-600 fill-amber-500 shrink-0" />
                  <span className="truncate">{hl}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-red-600 shrink-0" />
                <span>Certified Genuine Distribution Partner</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <span className="text-[11px] sm:text-xs font-mono text-slate-500 text-center sm:text-left">
              Want to join our retail & dealership network?
            </span>

            <button
              onClick={() => {
                onInquire(`Dealer Network Inquiry: ${award.title}`);
                onClose();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-red-600/25 transition-all text-center"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

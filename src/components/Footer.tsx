'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  ChevronUp, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-8 sm:gap-y-10">
          
          {/* Brand Info (2 cols on lg, full on mobile) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl border border-slate-700 inline-flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_DATA.logo}
                  alt="Prime Parts Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base sm:text-lg font-black tracking-tight text-white font-display leading-tight whitespace-nowrap">
                  PRIME PARTS
                </span>
                <span className="text-xs text-red-400 font-bold uppercase tracking-widest font-mono">
                  The Prime Choice
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {COMPANY_DATA.subtext}
            </p>

            <div className="pt-2 text-xs text-slate-300 font-mono">
              <span className="text-white font-bold">GSTIN:</span> {COMPANY_DATA.contactInfo.gstin}
            </div>
          </div>

          {/* Quick Links (Full on mobile, 1 col on sm/lg) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 sm:mb-4 font-display">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs text-slate-300">
              {COMPANY_DATA.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-red-400 transition-colors block break-words"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Lines (Side-by-side Left Column on Mobile) */}
          <div className="col-span-1 min-w-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 sm:mb-4 font-display">
              Spare Part Lines
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {COMPANY_DATA.categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#awards"
                    className="hover:text-red-400 transition-colors block break-words"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Desk (Side-by-side Right Column on Mobile) */}
          <div className="col-span-1 min-w-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 sm:mb-4 font-display">
              Support & Desk
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_DATA.contactInfo.phone}`} className="hover:text-white transition-colors break-words">
                  {COMPANY_DATA.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_DATA.contactInfo.salesEmail}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_DATA.contactInfo.salesEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span className="break-words">{COMPANY_DATA.contactInfo.city}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 Prime Parts. All Rights Reserved. Designed for Automotive & Industrial Excellence.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white text-slate-200 text-xs font-semibold transition-colors shrink-0"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

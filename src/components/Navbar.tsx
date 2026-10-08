'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  Menu, 
  X, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'py-3 bg-white shadow-md border-b border-slate-200'
          : scrolled
            ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-md shadow-nav-light border-b border-slate-200'
            : 'py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0"
            aria-label="Prime Parts Home"
          >
            <div className="relative h-8 sm:h-9 md:h-10 w-auto flex items-center">
              <img
                src={COMPANY_DATA.logo}
                alt="Prime Parts Logo"
                className="h-full w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex items-center">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 font-display leading-none whitespace-nowrap">
                PRIME PARTS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 whitespace-nowrap">
            {COMPANY_DATA.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50/80 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Phone (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_DATA.contactInfo.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-red-600 transition-colors bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{COMPANY_DATA.contactInfo.phone}</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-600/25 hover:shadow-lg active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href="#contact"
              className="sm:hidden text-xs font-bold px-2.5 py-1.5 bg-red-600 text-white rounded-lg whitespace-nowrap"
            >
              Enquiry
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-red-600 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Backdrop Screen Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer (100% Solid Opaque Directly Below Navbar) */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl z-50 transition-all duration-300 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 visible max-h-[calc(100vh-60px)] py-5 border-t border-slate-100'
            : 'opacity-0 invisible max-h-0 py-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-3 bg-white">
          <div className="text-[11px] font-bold text-red-600 uppercase tracking-widest px-1">
            Navigation Menu
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {COMPANY_DATA.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-800 text-sm font-semibold transition-colors border border-slate-100"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 mt-1 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_DATA.contactInfo.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold border border-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call: {COMPANY_DATA.contactInfo.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider shadow-md shadow-red-600/30 transition-colors text-center"
            >
              Send Direct Enquiry
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

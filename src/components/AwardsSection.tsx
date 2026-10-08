'use client';

import React, { useState } from 'react';
import { COMPANY_DATA, AwardItem } from '@/data/companyData';
import { 
  Trophy, 
  Award, 
  Medal, 
  Search, 
  Sparkles, 
  ArrowRight, 
  Check, 
  MapPin, 
  Calendar, 
  Users,
  Eye,
  Star
} from 'lucide-react';

interface AwardsSectionProps {
  onSelectAward?: (award: AwardItem) => void;
}

export default function AwardsSection({ onSelectAward }: AwardsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Awards & Rewards' },
    { id: 'retailer-year', label: 'Retailer of the Year' },
    { id: 'annual-meet', label: 'Annual Meets' },
    { id: 'distributor-honor', label: 'Distributor Honors' },
    { id: 'performance', label: 'Performance Awards' },
    { id: 'felicitation', label: 'Felicitations' },
  ];

  const filteredAwards = COMPANY_DATA.awards.filter((award) => {
    const matchesFilter = selectedFilter === 'all' || award.category === selectedFilter;
    const matchesSearch = 
      award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.yearOrEvent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="awards" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-r from-red-100/40 via-amber-100/30 to-red-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>HONORS, REWARDS & CONVENTIONS</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
              Awards & Rewards
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Celebrating our exceptional network of retail stalwarts, top-volume distributors, and channel partners across regional conventions and annual meets.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search awards, meets, trophies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 shadow-sm flex items-center gap-1.5 shrink-0 ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm ring-2 ring-red-600/20'
                  : 'bg-white text-slate-600 hover:text-red-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab.id === 'all' && <Sparkles className="w-3 h-3 text-amber-300" />}
              {tab.id === 'retailer-year' && <Trophy className="w-3 h-3 text-amber-400" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Awards Cards Grid - 2 columns side-by-side on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              onClick={() => onSelectAward && onSelectAward(award)}
              className="group relative flex flex-col rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 shadow-card-soft hover:shadow-card-elevated cursor-pointer min-w-0"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-32 sm:h-52 w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Badge (Top Right) */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-amber-500 text-slate-950 font-bold px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-mono shadow-md backdrop-blur-sm flex items-center gap-1 max-w-[85%] truncate">
                  <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-slate-950 text-slate-950 shrink-0" />
                  <span className="truncate">{award.badge}</span>
                </div>

                {/* Event Name (Bottom Left) */}
                <div className="absolute bottom-2 sm:bottom-3 left-2.5 sm:left-4 right-2.5 sm:right-4">
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-0.5 truncate">
                    {award.yearOrEvent}
                  </span>
                  <div className="text-xs font-bold text-white truncate drop-shadow-sm">
                    {award.tagline}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs font-mono font-semibold text-red-600 mb-1 truncate">
                    <Medal className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{award.categoryLabel}</span>
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                    {award.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed hidden xs:block">
                    {award.description}
                  </p>

                  {/* Highlights Badges */}
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-1">
                    {award.highlights.slice(0, 1).map((hl, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-medium border border-slate-200 max-w-full"
                      >
                        <Check className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-red-600 group-hover:text-amber-600 transition-colors uppercase tracking-wider">
                    <span>Details</span>
                    <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>

                  <button
                    type="button"
                    className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 transition-colors"
                    aria-label="View info"
                  >
                    <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredAwards.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-md mx-auto">
            <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">No awards matching your search</h4>
            <p className="text-xs text-slate-500 mt-1">Try clearing filters or searching for keywords like "Retailer", "Meet", or "Trophy".</p>
            <button
              onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { COMPANY_DATA, ProductCategory } from '@/data/companyData';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  Search, 
  Info 
} from 'lucide-react';

interface ProductsSectionProps {
  onSelectCategory?: (category: ProductCategory) => void;
}

export default function ProductsSection({ onSelectCategory }: ProductsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Spare Parts' },
    { id: 'engine', label: 'Engine' },
    { id: 'brakes', label: 'Brakes' },
    { id: 'suspension', label: 'Suspension' },
    { id: 'electrical', label: 'Electrical' },
    { id: 'transmission', label: 'Transmission' },
    { id: 'filters', label: 'Filters & Fluids' },
    { id: 'cooling', label: 'Cooling' },
    { id: 'body', label: 'Body & Lighting' },
  ];

  const filteredCategories = COMPANY_DATA.categories.filter((cat) => {
    const matchesFilter = selectedFilter === 'all' || cat.id === selectedFilter;
    const matchesSearch = 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-red-700" />
              <span>PRECISION PRODUCT CATALOGUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-none">
              Our Spare Parts
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl">
              Quality components designed to deliver reliability, durability and uncompromising performance across passenger, commercial, and industrial platforms.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search spare parts / SKUs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 shadow-sm ${
                selectedFilter === tab.id
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-red-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-red-400 transition-all duration-300 hover:-translate-y-1.5 shadow-card-soft hover:shadow-card-elevated min-w-0"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-28 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* SKU Badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-slate-200 text-xs font-mono font-bold text-red-700 shadow-sm">
                  {category.itemsCount}
                </div>

                {/* Subtitle tag */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-4 text-xs font-bold uppercase tracking-wider text-white font-mono drop-shadow-sm truncate max-w-[85%]">
                  {category.tagline}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-1 sm:mb-2 truncate">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-tight sm:leading-relaxed line-clamp-2 mb-2 sm:mb-4">
                    {category.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-5">
                    {category.features.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium truncate max-w-full"
                      >
                        <Check className="w-3 h-3 text-red-700 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between gap-1">
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(category)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-700 hover:text-red-800 uppercase tracking-wider group-hover:underline truncate"
                  >
                    <span className="truncate">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="#contact"
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-600 hover:text-white text-slate-600 transition-colors shrink-0"
                    title="Inquire about this category"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Top Card Subtle Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-600 transition-all duration-300" />
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-base text-slate-700 mb-2">No spare parts match your query.</p>
            <button
              onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-red-600 uppercase tracking-wider hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

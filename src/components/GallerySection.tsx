'use client';

import React, { useState } from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  Maximize2, 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Awards', 'Retailer Meets', 'Conferences', 'Felicitations', 'Facility', 'Operations'];

  const filteredGallery = COMPANY_DATA.gallery.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-red-600" />
              <span>EVENT & FACILITY MOMENTS</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
              Meets, Awards & Hub Gallery
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Explore authentic high-resolution moments from our Retailers Meetings, trophy presentations, dealer conventions, and central distribution facilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-red-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid - 2 columns side-by-side on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 auto-rows-[150px] sm:auto-rows-[220px]">
          {filteredGallery.map((item, index) => {
            const isFeatured = index === 0 || index === 5 || index === 10;
            const spanClass = isFeatured 
              ? 'md:col-span-2 md:row-span-2' 
              : index % 3 === 0 
                ? 'md:col-span-1 md:row-span-2' 
                : 'md:col-span-1 md:row-span-1';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-950 hover:border-red-400 transition-all duration-500 ${spanClass} shadow-card-soft hover:shadow-card-elevated min-w-0`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Permanent dark gradient for WCAG contrast compliance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-3.5 sm:w-5 h-3.5 sm:h-5" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-4 transition-transform duration-300">
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-red-300 block mb-0.5 truncate">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white truncate drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-mono font-bold text-slate-900 border border-slate-200 shadow-sm">
                  REF-{String(item.id).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 animate-modal-in"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center px-4"
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-[68vh] sm:max-h-[75vh] w-auto max-w-[90vw] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            
            <div className="mt-3 sm:mt-4 text-center">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-0.5 sm:mb-1">
                {filteredGallery[lightboxIndex].category} • Photo 0{lightboxIndex + 1} of 0{filteredGallery.length}
              </span>
              <h4 className="text-base sm:text-xl font-bold text-white px-2">
                {filteredGallery[lightboxIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

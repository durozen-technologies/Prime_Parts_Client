'use client';

import React, { useRef, useState, useEffect } from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Truck, 
  Layers, 
  Search, 
  Wrench, 
  Cog, 
  Zap, 
  ChevronDown 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenVideoModal?: () => void;
}

export default function HeroSection({ onOpenVideoModal }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const floatingHeroCards = [
    {
      icon: Cog,
      title: "Precision Engineering",
      description: "Certified OEM replacement components engineered for maximum cycle endurance and thermal resilience.",
      linkText: "Explore Parts",
      href: "#awards"
    },
    {
      icon: Search,
      title: "Quality Verification",
      description: "Multi-point precision testing verifying micro-tolerances, material grade compliance, and pressure thresholds.",
      linkText: "Quality Standards",
      href: "#why-us"
    },
    {
      icon: Truck,
      title: "Supply Chain & Hubs",
      description: "Automated warehouse logistics delivering fast dispatch across nationwide service centers and fleet depots.",
      linkText: "Facility Tour",
      href: "#video-tour"
    }
  ];

  return (
    <div className="relative bg-slate-50 pt-16 sm:pt-20">
      {/* Upper Hero Stage with Visual/Video Backdrop */}
      <section
        id="hero"
        className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-black"
      >
        {/* Background Video / Image Visual */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster={COMPANY_DATA.hero.fallbackPoster}
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-100"
          >
            <source src={COMPANY_DATA.hero.videoSrc} type="video/mp4" />
          </video>

          {/* Ultra-Soft Gradients for Maximum Video Clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          
          {/* Atmospheric Ambient Red Shadow Halos */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-700/15 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>{COMPANY_DATA.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase leading-[1.05] tracking-tight mb-3 sm:mb-4">
              <span className="block text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]">
                PRIME PARTS
              </span>
              <span className="block text-base sm:text-xl lg:text-2xl font-bold text-red-500 mt-1.5 sm:mt-2 tracking-normal capitalize font-sans leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Powering Performance. Built for Reliability.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm sm:leading-relaxed text-white max-w-xl mb-6 sm:mb-8 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {COMPANY_DATA.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#awards"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                <span>{COMPANY_DATA.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-red-600/20 text-white border border-red-500/30 hover:border-red-500/60 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all text-center"
              >
                {COMPANY_DATA.hero.ctaSecondary}
              </a>

              {onOpenVideoModal && (
                <button
                  onClick={onOpenVideoModal}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-200 hover:text-red-300 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-500/25 border border-red-400/40 flex items-center justify-center text-red-300 shadow-md">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  </div>
                  <span>Watch Facility Tour</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Video Controls in Corner */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-slate-300">
          <button
            onClick={togglePlay}
            className="p-1 hover:text-red-400 transition-colors"
            aria-label="Play or Pause"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-1 hover:text-red-400 transition-colors"
            aria-label="Mute or Unmute"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <span className="text-xs font-mono text-slate-300">FACILITY VIDEO</span>
        </div>
      </section>

      {/* Floating 3 White Cards Overlapping Hero & Page Body */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 lg:-mt-20 mb-8 sm:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {floatingHeroCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-7 border border-slate-200/90 shadow-card-elevated hover:shadow-card-red transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-3 sm:mb-4">
                    <Icon className="w-5 sm:w-5.5 h-5 sm:h-5.5" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-1.5 font-display whitespace-nowrap">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-5">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.href}
                  className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap text-center"
                >
                  <span className="whitespace-nowrap">{card.linkText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Focus Icons Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-4 sm:pt-6">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest font-mono whitespace-nowrap">
            OUR STRATEGIC FOCUS
          </span>
          <h2 className="text-base sm:text-xl font-bold text-slate-900 mt-1 font-display uppercase">
            Excellence Across Every Automotive Metric
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-card-soft text-center flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 text-red-700 flex items-center justify-center mb-2 sm:mb-3">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 whitespace-nowrap">Performance</h3>
            <p className="text-xs text-slate-600">Uncompromised horsepower & torque</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-card-soft text-center flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 sm:mb-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 whitespace-nowrap">Reliability</h3>
            <p className="text-xs text-slate-600">Rigorous quality benchmarks</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-card-soft text-center flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-2 sm:mb-3">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 whitespace-nowrap">Inventory</h3>
            <p className="text-xs text-slate-600">5,000+ active parts ready</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-card-soft text-center flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-2 sm:mb-3">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 whitespace-nowrap">Express Dispatch</h3>
            <p className="text-xs text-slate-600">Rapid delivery networks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useRef, useState } from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Film, 
  Warehouse 
} from 'lucide-react';

export default function VideoTourSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video-tour" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
            <Film className="w-3.5 h-3.5 text-red-700" />
            <span>{COMPANY_DATA.videoSection?.badge || "FACILITY & OPERATIONS"}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight mb-2 sm:mb-3">
            {COMPANY_DATA.videoSection?.heading || "Inside Prime Parts"}
          </h2>
          <p className="text-sm sm:text-base font-bold text-red-700 font-sans tracking-normal">
            {COMPANY_DATA.videoSection?.subheading || "Driven by Quality. Built for Performance."}
          </p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            {COMPANY_DATA.videoSection?.description || "Take an exclusive look inside our modern central warehousing hub."}
          </p>
        </div>

        {/* Video Player Frame with aspect-ratio: 16/9 */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-300 bg-slate-950 shadow-card-elevated group"
        >
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            playsInline
            loop
            muted={isMuted}
            poster={COMPANY_DATA.videoSection?.poster || "/images/part-15.jpg"}
            className="w-full aspect-video object-cover object-center block"
            onClick={togglePlay}
          >
            <source src={COMPANY_DATA.videoSection?.videoSrc || "/videos/prime-parts-hero.mp4"} type="video/mp4" />
          </video>

          {/* Dark Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-300">
              <button
                onClick={togglePlay}
                className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Play facility video tour"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 fill-current translate-x-0.5" />
              </button>

              <div className="mt-3 sm:mt-6">
                <div className="text-base sm:text-xl lg:text-2xl font-black text-white font-display uppercase tracking-wider">
                  Watch Logistics & Warehouse Tour
                </div>
                <div className="text-xs text-slate-300 mt-0.5 sm:mt-1">
                  High Definition 1080p • Facility Walkthrough
                </div>
              </div>
            </div>
          )}

          {/* Top Video Overlay Bar */}
          <div className="absolute top-0 inset-x-0 p-3 sm:p-6 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-600/30 border border-red-400/40 flex items-center justify-center text-red-300 shrink-0">
                <Warehouse className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-display truncate">
                  Prime Parts Operational Facility
                </div>
                <div className="text-xs text-red-300 font-mono">
                  Live Operations Feed
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs text-slate-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full Stock Verification</span>
            </div>
          </div>

          {/* Bottom Custom Controller Bar */}
          <div className="absolute bottom-0 inset-x-0 p-3 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={togglePlay}
                className="p-2 sm:p-2.5 rounded-xl bg-white/15 hover:bg-red-600 text-white transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 sm:w-5 h-4 sm:h-5" /> : <Play className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 sm:p-2.5 rounded-xl bg-white/15 hover:bg-red-600 text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 sm:w-5 h-4 sm:h-5" /> : <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />}
              </button>

              <span className="text-xs font-mono text-slate-200 hidden xs:inline">
                {isPlaying ? 'PLAYING LIVE' : 'PAUSED'}
              </span>
            </div>

            <div className="hidden md:block text-xs font-mono text-red-300 uppercase tracking-widest truncate">
              Driven by Quality • Built for Performance
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleFullscreen}
                className="p-2 sm:p-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors"
                aria-label="Toggle Fullscreen"
              >
                <Maximize className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

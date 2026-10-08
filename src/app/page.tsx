'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import AwardsSection from '@/components/AwardsSection';
import FeaturedSection from '@/components/FeaturedSection';
import VideoTourSection from '@/components/VideoTourSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import GallerySection from '@/components/GallerySection';
import IndustriesSection from '@/components/IndustriesSection';
import CtaSection from '@/components/CtaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AwardDetailModal from '@/components/AwardDetailModal';
import { AwardItem } from '@/data/companyData';

export default function HomePage() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [inquiredSubject, setInquiredSubject] = useState<string>('');

  const handleInquire = (subject: string) => {
    setInquiredSubject(subject);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. Hero Section with TVS Video & Background */}
      <HeroSection />

      {/* 2. About Preview */}
      <AboutSection />

      {/* 3. Company Highlights / Stats */}
      <StatsSection />

      {/* 4. Awards, Rewards & Retailer Recognition Showcase */}
      <AwardsSection onSelectAward={(award) => setSelectedAward(award)} />

      {/* 5. Featured Precision Engineering Lines */}
      <FeaturedSection onInquireProduct={handleInquire} />

      {/* 6. Inside Prime Parts Distribution Hub */}
      <VideoTourSection />

      {/* 7. Why Choose Prime Parts */}
      <WhyChooseSection />

      {/* 8. Event, Meet & Facility Gallery */}
      <GallerySection />

      {/* 9. Industries & Applications */}
      <IndustriesSection />

      {/* 10. Final Call-to-Action */}
      <CtaSection />

      {/* 11. Contact & Network Partner Form */}
      <ContactSection initialRequirement={inquiredSubject} />

      {/* 12. Professional Footer */}
      <Footer />

      {/* Award & Recognition Detail Lightbox Modal */}
      <AwardDetailModal
        award={selectedAward}
        onClose={() => setSelectedAward(null)}
        onInquire={handleInquire}
      />
    </main>
  );
}

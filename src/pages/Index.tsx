
import React from 'react';
import LazyReviewsSection from '@/components/optimized/LazyReviewsSection';
import LazyTestimonialsSection from '@/components/optimized/LazyTestimonialsSection';
import LazyCTASection from '@/components/optimized/LazyCTASection';
import LazyHowItWorksSection from '@/components/optimized/LazyHowItWorksSection';
import LazyComparisonSection from '@/components/optimized/LazyComparisonSection';
import LazyFinalCTASection from '@/components/optimized/LazyFinalCTASection';
import LazyContactSection from '@/components/optimized/LazyContactSection';
import DeferredScripts from '@/components/optimized/DeferredScripts';
import FloatingCTA from '@/components/FloatingCTA';
import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <PromoBanner />
      
      {/* Desktop spacing adjustment - increased for promo banner */}
      <div className="hidden md:block h-16"></div>
      <div className="md:hidden h-14"></div>
      
      {/* Above the fold - load immediately */}
      <HeroSection />
      <FeaturesSection />
      
      {/* Below the fold - lazy loaded */}
      <LazyComparisonSection />
      <LazyReviewsSection />
      <LazyTestimonialsSection />
      <LazyCTASection />
      <LazyHowItWorksSection />
      <LazyFinalCTASection />
      <LazyContactSection />
      
      <FloatingCTA />
      <DeferredScripts />
    </div>
  );
};

export default Index;

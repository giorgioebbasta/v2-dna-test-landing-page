import React from 'react';
import LazyReviewsSection from '@/components/optimized/LazyReviewsSection';
import LazyTestimonialsSection from '@/components/optimized/LazyTestimonialsSection';
import LazyCTASection from '@/components/optimized/LazyCTASection';
import LazyHowItWorksSection from '@/components/optimized/LazyHowItWorksSection';
import LazyComparisonSection from '@/components/optimized/LazyComparisonSection';
import LazyFinalCTASection from '@/components/optimized/LazyFinalCTASection';
import LazyContactSection from '@/components/optimized/LazyContactSection';
import LazyDNAExplainerSection from '@/components/optimized/LazyDNAExplainerSection';
import LazyReportPreviewSection from '@/components/optimized/LazyReportPreviewSection';
import DeferredScripts from '@/components/optimized/DeferredScripts';
import FloatingCTA from '@/components/FloatingCTA';
import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQsSection from '@/components/FAQsSection';
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      <Header />
      <PromoBanner />
      
      {/* Spacing for fixed header and promo banner */}
      <div className="hidden md:block h-[108px]"></div>
      <div className="md:hidden h-[97px]"></div>
      
      {/* Above the fold - load immediately */}
      <HeroSection className="py-[5px]" />
      <FeaturesSection />
      <LazyDNAExplainerSection />
      <LazyReportPreviewSection />
      
      {/* Below the fold - lazy loaded */}
      <LazyComparisonSection />
      <LazyReviewsSection />
      <LazyTestimonialsSection />
      <LazyCTASection />
      <LazyHowItWorksSection />
      <FAQsSection />
      <LazyFinalCTASection />
      <LazyContactSection />
      
      <FloatingCTA />
      <DeferredScripts />
    </div>;
};
export default Index;

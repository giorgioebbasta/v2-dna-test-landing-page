import React from 'react';
import LazyReviewsSection from '@/components/optimized/LazyReviewsSection';
import LazyTestimonialsSection from '@/components/optimized/LazyTestimonialsSection';
import LazyBundleBoxes from '@/components/optimized/LazyBundleBoxes';
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
      <div id="hero">
        <HeroSection className="py-4 md:py-8" />
      </div>
      
      <div id="features">
        <FeaturesSection />
      </div>
      
      <div id="dna-explainer">
        <LazyDNAExplainerSection />
      </div>
      
      <div id="report-preview">
        <LazyReportPreviewSection />
      </div>
      
      <div id="how-it-works">
        <LazyHowItWorksSection />
      </div>
      
      {/* Social proof - moved after How It Works */}
      <div id="reviews" className="text-center py-8 md:py-12 px-4 bg-white">
        <h2 className="text-4xl font-bold text-slate-900">
          Cosa dicono di noi
        </h2>
      </div>
      <LazyReviewsSection />
      
      <div id="testimonials">
        <LazyTestimonialsSection />
      </div>
      
      {/* Below the fold - lazy loaded */}
      <div id="comparison">
        <LazyComparisonSection />
      </div>
      
      <div id="pricing">
        <LazyBundleBoxes />
      </div>
      
      <div id="faqs">
        <FAQsSection />
      </div>
      
      <div id="final-cta">
        <LazyFinalCTASection />
      </div>
      
      <div id="contact">
        <LazyContactSection />
      </div>
      
      <FloatingCTA />
      <DeferredScripts />
    </div>;
};
export default Index;

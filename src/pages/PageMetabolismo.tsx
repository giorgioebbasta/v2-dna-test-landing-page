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
import FeaturesSection from '@/pages/metabolismo/FeaturesSection';
import FAQsSection from '@/components/FAQsSection';
import HeroBanner from '@/pages/metabolismo/HeroBanner';
import SEOHelmet from '@/components/seo/SEOHelmet';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';

const PageMetabolismo = () => {
  return (
    <>
      <SEOHelmet 
        title="Test DNA Metabolismo - Scopri Come Accelerare il Tuo Metabolismo | Holifya"
        description="Analizza i tuoi geni del metabolismo e scopri come il tuo DNA influenza il peso, il metabolismo energetico e la capacità di bruciare grassi. Test certificato CE-IVD."
        canonical="https://test-completo-del-dna.holifya.com/metabolismo"
        ogImage="https://test-completo-del-dna.holifya.com/lovable-uploads/quadrato.webp"
      />
      <StructuredData type="product" />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
        <Header />
        <PromoBanner />
        
        {/* Spacing for fixed header and promo banner */}
        <div className="hidden md:block h-[108px]" aria-hidden="true"></div>
        <div className="md:hidden h-[97px]" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Metabolismo', href: '/metabolismo' }]} />
        </div>
        
        {/* Above the fold - load immediately */}
        <section id="hero" aria-label="Test DNA Metabolismo">
          <HeroSection className="py-4 md:py-8" heroBannerComponent={HeroBanner} />
        </section>
        
        <section id="features" aria-label="Problemi di metabolismo">
          <FeaturesSection />
        </section>
        
        <section id="dna-explainer" aria-label="Genetica e metabolismo">
          <LazyDNAExplainerSection />
        </section>
        
        <section id="report-preview" aria-label="Report metabolismo">
          <LazyReportPreviewSection />
        </section>
        
        <section id="how-it-works" aria-label="Come funziona">
          <LazyHowItWorksSection />
        </section>
        
        <section id="reviews" aria-label="Recensioni" className="text-center py-8 md:py-12 px-4 bg-white">
          <h2 className="text-4xl font-bold text-slate-900">
            Cosa dicono di noi
          </h2>
          <LazyReviewsSection />
        </section>
        
        <section id="testimonials" aria-label="Testimonianze">
          <LazyTestimonialsSection />
        </section>
        
        <section id="comparison" aria-label="Confronto">
          <LazyComparisonSection />
        </section>
        
        <section id="pricing" aria-label="Prezzi">
          <LazyBundleBoxes />
        </section>
        
        <section id="faqs" aria-label="FAQ">
          <FAQsSection />
        </section>
        
        <section id="final-cta" aria-label="Ordina ora">
          <LazyFinalCTASection />
        </section>
        
        <section id="contact" aria-label="Contatti">
          <LazyContactSection />
        </section>
        
        <FloatingCTA />
        <DeferredScripts />
      </main>
    </>
  );
};

export default PageMetabolismo;

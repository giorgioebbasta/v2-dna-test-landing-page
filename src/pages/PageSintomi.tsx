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
import FeaturesSection from '@/pages/sintomi/FeaturesSection';
import FAQsSection from '@/components/FAQsSection';
import HeroBanner from '@/pages/sintomi/HeroBanner';
import SEOHelmet from '@/components/seo/SEOHelmet';
import StructuredData from '@/components/seo/StructuredData';


const PageSintomi = () => {
  return (
    <>
      <SEOHelmet 
        title="Test DNA Sintomi - Scopri le Cause Genetiche dei Tuoi Sintomi | Holifya"
        description="Analizza gonfiore, stanchezza, mal di testa e altri sintomi attraverso il tuo DNA. Scopri intolleranze alimentari e predisposizioni genetiche. Certificato CE-IVD."
        canonical="https://test-completo-del-dna.holifya.com/sintomi"
        ogImage="https://test-completo-del-dna.holifya.com/lovable-uploads/quadrato.webp"
      />
      <StructuredData type="product" />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
        <Header />
        <PromoBanner />
        
        {/* Spacing for fixed header and promo banner */}
        <div className="hidden md:block h-[108px]" aria-hidden="true"></div>
        <div className="md:hidden h-[97px]" aria-hidden="true"></div>
        
        
        {/* Above the fold - load immediately */}
        <section id="hero" aria-label="Test DNA Sintomi">
          <HeroSection className="pt-12 pb-4 md:py-8" heroBannerComponent={HeroBanner} />
        </section>
        
        <section id="features" aria-label="Sintomi analizzati">
          <FeaturesSection />
        </section>
        
        <section id="dna-explainer" aria-label="DNA e sintomi">
          <LazyDNAExplainerSection />
        </section>
        
        <section id="report-preview" aria-label="Report sintomi">
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

export default PageSintomi;

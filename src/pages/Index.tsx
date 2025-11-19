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
import FeaturesSection from '@/pages/index/FeaturesSection';
import FAQsSection from '@/components/FAQsSection';
import HeroBanner from '@/pages/index/HeroBanner';
import SEOHelmet from '@/components/seo/SEOHelmet';
import StructuredData from '@/components/seo/StructuredData';

const Index = () => {
  return (
    <>
      <SEOHelmet 
        title="Test del DNA Online Professionale | Holifya"
        description="Fai il tuo test del DNA da casa e scopri tutto su nutrizione, salute, sport e benessere. Holifya ti svela i segreti del tuo corpo in 15 giorni."
        canonical="https://test-completo-del-dna.holifya.com/"
        ogImage="https://test-completo-del-dna.holifya.com/lovable-uploads/quadrato.webp"
      />
      <StructuredData type="homepage" />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
        <Header />
        <PromoBanner />
        
        {/* Spacing for fixed header and promo banner */}
        <div className="hidden md:block h-[108px]" aria-hidden="true"></div>
        <div className="md:hidden h-[97px]" aria-hidden="true"></div>
        
        {/* Above the fold - load immediately */}
        <section id="hero" aria-label="Sezione principale prodotto">
          <HeroSection className="pt-8 pb-4 md:py-8" heroBannerComponent={HeroBanner} />
        </section>
        
        <section id="features" aria-label="Caratteristiche del test DNA">
          <FeaturesSection />
        </section>
        
        <section id="dna-explainer" aria-label="Come funziona il DNA">
          <LazyDNAExplainerSection />
        </section>
        
        <section id="report-preview" aria-label="Anteprima del report">
          <LazyReportPreviewSection />
        </section>
        
        <section id="how-it-works" aria-label="Come funziona il servizio">
          <LazyHowItWorksSection />
        </section>
        
        {/* Social proof - moved after How It Works */}
        <section id="reviews" aria-label="Recensioni clienti" className="text-center py-8 md:py-12 px-4 bg-white">
          <h2 className="text-4xl font-bold text-slate-900">
            Cosa dicono di noi
          </h2>
          <LazyReviewsSection />
        </section>
        
        <section id="testimonials" aria-label="Testimonianze video">
          <LazyTestimonialsSection />
        </section>
        
        {/* Below the fold - lazy loaded */}
        <section id="comparison" aria-label="Confronto con la concorrenza">
          <LazyComparisonSection />
        </section>
        
        <section id="pricing" aria-label="Prezzi e pacchetti">
          <LazyBundleBoxes />
        </section>
        
        <section id="faqs" aria-label="Domande frequenti">
          <FAQsSection />
        </section>
        
        <section id="final-cta" aria-label="Chiamata finale all'azione">
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

export default Index;


import React from 'react';
import ReviewsSection from '@/components/ReviewsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FloatingCTA from '@/components/FloatingCTA';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import FinalCTASection from '@/components/FinalCTASection';
import ContactSection from '@/components/ContactSection';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <Separator className="my-8" />
      <ReviewsSection />
      <HowItWorksSection />
      <FinalCTASection />
      <ContactSection />
      
      <FloatingCTA />
    </div>
  );
};

export default Index;

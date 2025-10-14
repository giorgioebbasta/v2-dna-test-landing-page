import React from 'react';
import { Badge } from "@/components/ui/badge";
const HeroBanner = React.memo(() => {
  const scrollToComparison = () => {
    const comparisonSection = document.getElementById('comparison-section');
    if (comparisonSection) {
      comparisonSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };
  return <div className="space-y-2 pt-2">
      <Badge className="text-[#E8FFC9] px-4 py-2 text-sm font-medium mt-4 bg-[#0b4650]">
        Test Completo del DNA
      </Badge>
      <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
        Il <span className="bg-gradient-to-r from-[#E8FFC9] via-[#d4f5b1] to-[#c0eb99] bg-clip-text text-transparent">DNA</span> ti dice cosa funziona per te.
      </h1>
      
      <p className="text-xl text-slate-600 leading-relaxed cursor-pointer hover:text-emerald-600 active:text-emerald-700 active:scale-95 hover:scale-105 transition-all duration-200 touch-manipulation select-none" onClick={scrollToComparison} role="button" tabIndex={0} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToComparison();
      }
    }}>
        +2000 analisi genetiche certificate per scoprire cosa mangiare, come allenarti e dormire meglio.
      </p>
    </div>;
});
HeroBanner.displayName = 'HeroBanner';
export default HeroBanner;
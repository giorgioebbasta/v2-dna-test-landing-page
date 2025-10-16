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
      <Badge className="text-[#E8FFC9] text-sm font-medium mt-4 bg-[#0b4650] py-[6px] px-[14px]">
        Test Completo del DNA
      </Badge>
      <h1 className="text-[41px] md:text-[47px] lg:text-6xl font-bold text-slate-900 leading-tight py-[2px]">
        Il <span className="bg-gradient-to-r from-[#0B4650] via-[#0d6875] to-[#0f8a9a] bg-clip-text text-transparent">DNA</span> ti dice cosa funziona per te.
      </h1>
      
      <p className="text-[15px] md:text-[17px] lg:text-xl text-slate-600 leading-relaxed !pl-0">
        +2000 analisi genetiche certificate per scoprire cosa mangiare, come allenarti e dormire meglio.
      </p>
    </div>;
});
HeroBanner.displayName = 'HeroBanner';
export default HeroBanner;
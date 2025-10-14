import React from 'react';
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
      <p className="text-sm font-semibold text-primary uppercase tracking-wide mt-4">
        Test Completo del DNA
      </p>
      <h1 className="text-[41px] md:text-[47px] lg:text-6xl font-bold text-slate-900 leading-tight py-[2px]">
        Il <span className="bg-gradient-to-r from-[#0B4650] via-[#0d6875] to-[#0f8a9a] bg-clip-text text-transparent">DNA</span> ti dice cosa funziona per te.
      </h1>
      
      <p onClick={scrollToComparison} role="button" tabIndex={0} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToComparison();
      }
    }} className="text-[15px] md:text-[17px] lg:text-xl text-slate-600 leading-relaxed cursor-pointer hover:text-emerald-600 active:text-emerald-700 active:scale-95 hover:scale-105 transition-all duration-200 touch-manipulation select-none !pl-0">
        +2000 analisi genetiche certificate per scoprire cosa mangiare, come allenarti e dormire meglio.
      </p>
    </div>;
});
HeroBanner.displayName = 'HeroBanner';
export default HeroBanner;
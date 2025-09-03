
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

  return (
    <div className="space-y-3 pt-2">
      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
        Test Completo del DNA
      </Badge>
      <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
        Una vita sana,<br />
        <span className="italic bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Più a lungo
        </span>
      </h1>
      
      <p 
        className="text-xl text-slate-600 leading-relaxed cursor-pointer hover:text-emerald-600 active:text-emerald-700 active:scale-95 hover:scale-105 transition-all duration-200 touch-manipulation select-none"
        onClick={scrollToComparison}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToComparison();
          }
        }}
      >
        Scopri i segreti del tuo DNA, con il test genetico più completo in Italia*.
      </p>
      <p className="text-xl text-slate-600 leading-relaxed">
        <em>Ora disponibile a casa tua.</em>
      </p>
    </div>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;

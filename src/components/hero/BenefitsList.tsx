
import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const BenefitsList = React.memo(() => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Trustpilot Box */}
      <a 
        href="https://it.trustpilot.com/review/holifya.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity cursor-pointer flex-wrap lg:flex-nowrap"
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#00B67A] text-[#00B67A]" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-700">4.7/5</span>
        </div>
        <span className="text-sm text-slate-600">|</span>
        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">3,000+ utenti</span>
      </a>

      {/* Certifications Box */}
      <div className="flex items-center justify-center gap-3">
        <ShieldCheck className="w-5 h-5 text-slate-700" />
        <span className="text-sm font-medium text-slate-700">CE-IVD / ISO / GDPR</span>
      </div>
    </div>
  );
});

BenefitsList.displayName = 'BenefitsList';

export default BenefitsList;


import React from 'react';
import { Star } from 'lucide-react';

const BenefitsList = React.memo(() => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Trustpilot Box */}
      <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#00B67A] text-[#00B67A]" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-700">4.8/5</span>
        </div>
        <span className="text-sm text-slate-600">|</span>
        <span className="text-sm font-medium text-slate-700">1,200+ recensioni</span>
      </div>

      {/* Certifications Box */}
      <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
        <span className="text-sm font-medium text-slate-700">CE-IVD / ISO / GDPR / Spedizione 48h</span>
      </div>
    </div>
  );
});

BenefitsList.displayName = 'BenefitsList';

export default BenefitsList;


import React from 'react';
import { Truck, Clock, RotateCcw, Calendar } from 'lucide-react';

const benefits = [
  { icon: Truck, text: "Spedizione gratuita" },
  { icon: Clock, text: "Ricevilo in 72h" },
  { icon: RotateCcw, text: "Reso entro 14 giorni" },
  { icon: Calendar, text: "Risultati in 15 giorni" }
];

const BenefitsList = React.memo(() => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {benefits.map((benefit, index) => {
        const IconComponent = benefit.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-[#0B4650] mb-2">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
          </div>
        );
      })}
    </div>
  );
});

BenefitsList.displayName = 'BenefitsList';

export default BenefitsList;

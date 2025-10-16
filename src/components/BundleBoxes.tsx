import React from 'react';
import { Card } from "@/components/ui/card";

interface BundleBoxProps {
  name: string;
  currentPrice: number;
  originalPrice: number;
  savings: number;
  url: string;
  extraDiscount?: string;
  promoCode?: string;
}

const BundleBox: React.FC<BundleBoxProps> = ({
  name,
  currentPrice,
  originalPrice,
  savings,
  url,
  extraDiscount,
  promoCode
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="border-2 cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden relative"
      style={{ borderColor: '#D0C5FB' }}
      onClick={handleClick}
    >
      {promoCode && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          {promoCode}
        </div>
      )}
      
      <div className="p-3 sm:p-4 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
          {name}
        </h3>
        
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#994AFF' }}>
            €{currentPrice}
          </div>
          
          <div className="text-base sm:text-lg text-slate-500 line-through">
            €{originalPrice}
          </div>
          
          <div className="text-sm font-medium" style={{ color: '#994AFF' }}>
            Risparmi €{savings}
          </div>
          
          {promoCode && (
            <div className="mt-2 inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
              Codice: {promoCode} (-40%)
            </div>
          )}
          
          {extraDiscount && (
            <div className="mt-2 text-xs font-semibold px-2 py-1 rounded inline-block" style={{ backgroundColor: '#DCFE54', color: '#1E293B' }}>
              {extraDiscount}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const BundleBoxes = () => {
  const bundles = [
    {
      name: "1 Test del DNA",
      currentPrice: 289,
      originalPrice: 349,
      savings: 60,
      url: "https://holifya.com/cart/43782964445448:1"
    },
    {
      name: "2 Test del DNA",
      currentPrice: 499,
      originalPrice: 698,
      savings: 199,
      url: "https://holifya.com/cart/43782964445448:2",
      extraDiscount: "Per te e per chi ami (-€80)"
    }
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
          Scegli il piano giusto per te
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {bundles.map((bundle, index) => (
            <BundleBox key={index} {...bundle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundleBoxes;

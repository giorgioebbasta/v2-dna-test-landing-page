
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface PriceCardProps {
  name: string;
  currentPrice: number;
  originalPrice: number;
  savings: number;
  promoCode?: string;
  url: string;
  onClick?: () => void;
  extraDiscount?: string;
}

const PriceCard = React.memo(({ name, currentPrice, originalPrice, savings, promoCode, url, onClick, extraDiscount }: PriceCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer relative overflow-hidden"
      onClick={handleClick}
    >
      {promoCode && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
          {promoCode}
        </div>
      )}
      <CardContent className="p-3 sm:p-4 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">{name}</h3>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-bold text-emerald-600">€{currentPrice}</div>
          <div className="text-base sm:text-lg text-slate-500 line-through">€{originalPrice}</div>
          <div className="text-sm font-medium text-emerald-700">
            Risparmi €{savings}
          </div>
          {promoCode && (
            <div className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded mt-2">
              Codice: {promoCode} (-40%)
            </div>
          )}
          {extraDiscount && (
            <div className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded mt-2">
              {extraDiscount}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

PriceCard.displayName = 'PriceCard';

export default PriceCard;

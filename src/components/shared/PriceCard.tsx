
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
  compact?: boolean;
  horizontal?: boolean;
}

const PriceCard = React.memo(({ name, currentPrice, originalPrice, savings, promoCode, url, onClick, extraDiscount, compact = false, horizontal = false }: PriceCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (horizontal) {
    return (
      <Card 
        className="gtm_addtocart border-2 border-[#0B4650] hover:border-[#0B4650]/80 transition-all duration-300 hover:shadow-lg cursor-pointer relative overflow-hidden h-full"
        onClick={handleClick}
      >
        <CardContent className="p-3 h-full flex items-center justify-between gap-3">
          {/* Left side - Test name */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
          </div>
          
          {/* Right side - Price info */}
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end">
              <div className="text-xs text-slate-500 line-through">€{originalPrice}</div>
              <div className="text-lg font-bold text-[#0B4650]">€{currentPrice}</div>
            </div>
            <div className="text-xs font-medium text-[#0B4650] mt-1">Risparmi €{savings}</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={`gtm_addtocart border-2 border-[#0B4650] hover:border-[#0B4650]/80 transition-all duration-300 hover:shadow-lg cursor-pointer relative overflow-hidden ${compact ? 'h-full' : ''}`}
      onClick={handleClick}
    >
      {promoCode && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
          {promoCode}
        </div>
      )}
      <CardContent className={compact ? "p-3 flex flex-col justify-center h-full" : "p-3 sm:p-4 text-center"}>
        <div className="text-center space-y-1">
          <h3 className={compact ? "text-sm font-semibold text-slate-900" : "text-base sm:text-lg font-semibold text-slate-900 mb-3"}>{name}</h3>
          <div className={compact ? "text-xl font-bold text-[#0B4650]" : "text-2xl sm:text-3xl font-bold text-[#0B4650]"}>€{currentPrice}</div>
          <div className={compact ? "text-xs text-slate-500 line-through" : "text-base sm:text-lg text-slate-500 line-through"}>€{originalPrice}</div>
          <div className={compact ? "text-xs font-medium text-[#0B4650]" : "text-sm font-medium text-[#0B4650]"}>
            Risparmi €{savings}
          </div>
          {promoCode && (
            <div className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded mt-2">
              Codice: {promoCode} (-40%)
            </div>
          )}
          {extraDiscount && !compact && (
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


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface PriceCardProps {
  name: string;
  currentPrice: number;
  originalPrice: number;
  savings: number;
  url: string;
  onClick?: () => void;
}

const PriceCard = React.memo(({ name, currentPrice, originalPrice, savings, url, onClick }: PriceCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <CardContent className="p-3 text-center">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">{name}</h3>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-emerald-600">€{currentPrice}</div>
          <div className="text-lg text-slate-500 line-through">€{originalPrice}</div>
          <div className="text-sm font-medium text-emerald-700">
            Risparmi €{savings}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

PriceCard.displayName = 'PriceCard';

export default PriceCard;

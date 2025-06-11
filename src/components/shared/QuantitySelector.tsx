
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onOrder: () => void;
  disabled?: boolean;
  variant?: 'default' | 'white';
}

const QuantitySelector = React.memo(({ 
  quantity, 
  onIncrease, 
  onDecrease, 
  onOrder, 
  disabled = false,
  variant = 'default'
}: QuantitySelectorProps) => {
  const isWhiteVariant = variant === 'white';
  
  const containerClasses = isWhiteVariant 
    ? "text-white bg-white/10 backdrop-blur-sm rounded-lg p-2"
    : "border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg";

  const buttonClasses = isWhiteVariant
    ? "h-8 w-8 p-0 hover:bg-white/20 text-white"
    : "h-8 w-8 p-0 hover:bg-slate-100";

  const orderButtonClasses = isWhiteVariant
    ? "bg-white text-indigo-600 hover:bg-white/90 px-4 py-2 w-full"
    : "bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2";

  const content = (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center space-x-3">
        <span className={`text-sm font-medium ${isWhiteVariant ? 'text-white' : 'text-slate-700'}`}>
          Quantità:
        </span>
        <div className={`flex items-center rounded-lg ${isWhiteVariant ? 'bg-white/20' : 'border border-slate-300'}`}>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDecrease}
            disabled={quantity <= 1 || disabled}
            className={buttonClasses}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className={`px-3 py-1 text-lg font-semibold min-w-[2rem] text-center ${isWhiteVariant ? 'text-white' : 'text-slate-900'}`}>
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onIncrease}
            disabled={disabled}
            className={buttonClasses}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <Button 
        className={orderButtonClasses}
        onClick={onOrder}
        disabled={disabled}
      >
        Ordina Ora
      </Button>
    </div>
  );

  if (isWhiteVariant) {
    return <div className={containerClasses}>{content}</div>;
  }

  return (
    <Card className={containerClasses}>
      <CardContent className="p-3">
        {content}
      </CardContent>
    </Card>
  );
});

QuantitySelector.displayName = 'QuantitySelector';

export default QuantitySelector;

import React from 'react';
import PriceCard from '@/components/shared/PriceCard';
import QuantitySelector from '@/components/shared/QuantitySelector';
import { useQuantity } from '@/hooks/useQuantity';
const FinalCTASection = () => {
  const {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    handleOrder
  } = useQuantity(1);
  const testPackage = {
    name: "Test del DNA",
    currentPrice: 289,
    originalPrice: 349,
    savings: 60,
    url: "https://holifya.com/cart/43782964445448:1"
  };
  return <section className="px-4 bg-gradient-to-r from-green-500 to-emerald-600 py-[28px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
          Inizia il tuo viaggio verso una vita più sana
        </h2>
        <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8">
          Unisciti a migliaia di italiani che hanno già scoperto i segreti del loro DNA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="block">
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer relative" onClick={() => window.open(testPackage.url, '_blank', 'noopener,noreferrer')}>
              <div className="text-base sm:text-lg font-semibold mb-1">{testPackage.name}</div>
              <div className="text-xl sm:text-2xl font-bold">€{testPackage.currentPrice}</div>
              <div className="text-sm text-green-200 line-through">€{testPackage.originalPrice}</div>
              <div className="text-xs text-yellow-300 font-semibold">-20% di sconto!</div>
            </div>
          </div>
          
          <div className="px-2">
            <QuantitySelector quantity={quantity} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onOrder={handleOrder} variant="white" />
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;
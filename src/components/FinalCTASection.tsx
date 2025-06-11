
import React from 'react';
import PriceCard from '@/components/shared/PriceCard';
import QuantitySelector from '@/components/shared/QuantitySelector';
import { useQuantity } from '@/hooks/useQuantity';

const FinalCTASection = () => {
  const { quantity, increaseQuantity, decreaseQuantity, handleOrder } = useQuantity(1);

  const testPackage = {
    name: "Test del DNA",
    currentPrice: 299,
    originalPrice: 349,
    savings: 50,
    url: "https://holifya.com/cart/43782964445448:1"
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Inizia il tuo viaggio verso una vita più sana
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Unisciti a migliaia di italiani che hanno già scoperto i segreti del loro DNA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="block">
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                 onClick={() => window.open(testPackage.url, '_blank', 'noopener,noreferrer')}>
              <div className="text-lg font-semibold mb-1">{testPackage.name}</div>
              <div className="text-2xl font-bold">€{testPackage.currentPrice}</div>
              <div className="text-sm text-indigo-200 line-through">€{testPackage.originalPrice}</div>
            </div>
          </div>
          
          <QuantitySelector
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onOrder={handleOrder}
            variant="white"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Minus } from 'lucide-react';

const FinalCTASection = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const getQuantityCartUrl = (qty: number) => {
    return `https://holifya.com/cart/43782964445448:${qty}`;
  };

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
          <a 
            href={testPackage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-lg font-semibold mb-1">{testPackage.name}</div>
              <div className="text-2xl font-bold">€{testPackage.currentPrice}</div>
              <div className="text-sm text-indigo-200 line-through">€{testPackage.originalPrice}</div>
            </div>
          </a>
          
          <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <span className="text-sm font-medium">Quantità:</span>
              <div className="flex items-center bg-white/20 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-8 w-8 p-0 hover:bg-white/20 text-white"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-3 py-1 text-lg font-semibold text-white min-w-[2rem] text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={increaseQuantity}
                  className="h-8 w-8 p-0 hover:bg-white/20 text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <a
              href={getQuantityCartUrl(quantity)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-indigo-600 hover:bg-white/90 px-4 py-2 w-full">
                Ordina ora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

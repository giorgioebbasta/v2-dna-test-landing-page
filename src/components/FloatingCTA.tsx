
import React from 'react';
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a 
        href="https://holifya.com/cart/43782964445448:1"
        target="_blank"
        rel="noopener noreferrer"
        className="gtm_addtocart"
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-[#E8FFC9] to-[#d4f5b1] hover:from-[#d4f5b1] hover:to-[#E8FFC9] text-[#0B4650] font-semibold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          style={{
            animation: 'gentlePulse 3s ease-in-out infinite'
          }}
        >
          Ordina ora - €289
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

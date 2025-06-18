
import React from 'react';
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <a 
        href="https://holifya.com/cart/43782964445448:1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full animate-pulse relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-xs sm:text-sm opacity-90">ESTATE40 -40%</div>
            <div className="font-bold">€209 invece di €349</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-300/20 animate-pulse"></div>
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

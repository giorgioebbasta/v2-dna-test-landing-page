
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
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full relative overflow-hidden animate-[pulse_4s_ease-in-out_infinite]"
          style={{
            animation: 'gentlePulse 3s ease-in-out infinite'
          }}
        >
          <div className="relative z-10 text-center">
            <div className="text-xs sm:text-sm opacity-90">-20%</div>
            <div className="flex items-center justify-center gap-2 font-bold">
              <span className="text-xs line-through opacity-70">€349</span>
              <span>€289</span>
            </div>
          </div>
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

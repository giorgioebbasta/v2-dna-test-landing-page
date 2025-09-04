
import React from 'react';
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a 
        href="https://holifya.com/cart/43782964445448:1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center gap-0"
          style={{
            animation: 'gentlePulse 3s ease-in-out infinite'
          }}
        >
          <span className="text-lg leading-tight">Ordina ora - €289</span>
          <span className="text-xs leading-tight -mt-1">€60 di sconto</span>
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

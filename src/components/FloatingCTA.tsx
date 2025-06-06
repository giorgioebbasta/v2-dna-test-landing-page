
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
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full"
        >
          Ordina ora - €299
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

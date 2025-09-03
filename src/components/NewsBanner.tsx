import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 flex-1">
          <div className="animate-pulse">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm">
              ESTATE40
            </span>
          </div>
          
          <div className="text-sm md:text-base font-medium">
            <span className="hidden md:inline">🌟 Offerta Estate Limitata: </span>
            <strong>-40% su tutti i test genetici</strong>
            <span className="hidden md:inline"> - Solo fino al 30 Settembre!</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="secondary"
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm text-xs md:text-sm"
            onClick={() => {
              const heroSection = document.querySelector('section');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Approfitta Ora
          </Button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Chiudi banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
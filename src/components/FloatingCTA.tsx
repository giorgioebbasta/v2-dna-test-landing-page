
import React from 'react';
import { Button } from "@/components/ui/button";
import { useFloatingCTAColor } from "@/hooks/useFloatingCTAColor";
import { cn } from "@/lib/utils";

const FloatingCTA = () => {
  const colorScheme = useFloatingCTAColor();

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
          className={cn(
            colorScheme.className,
            colorScheme.textColor,
            "font-semibold text-lg px-8 py-4 rounded-full shadow-md shadow-[#0B4650]/20 lg:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          )}
          style={{
            animation: 'gentlePulse 3s ease-in-out infinite',
            transition: 'background 300ms ease-in-out, transform 300ms ease-in-out',
            ...colorScheme.style
          }}
        >
          Ordina ora - €229
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

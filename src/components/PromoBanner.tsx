import React from "react";
import { useLocation } from "react-router-dom";
import { useFloatingCTAColor } from "@/hooks/useFloatingCTAColor";
import { cn } from "@/lib/utils";

const PromoBanner = () => {
  const location = useLocation();
  const colorScheme = useFloatingCTAColor();
  const isAdvertorialPage = location.pathname === '/dieta-non-funziona';
  const paddingClass = isAdvertorialPage ? 'py-2' : 'pt-5 pb-2';
  
  return (
    <div 
      className={cn(
        "fixed top-[42px] md:top-[49px] left-0 right-0 z-40 px-4 shadow-lg",
        paddingClass,
        colorScheme.textColor
      )}
      style={{
        transition: 'background 300ms ease-in-out',
        ...colorScheme.style
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-base md:text-lg">
          <span className="hidden md:inline">Dicembre - Regala il Test del DNA - €300 di sconto per te e per chi ami</span>
          <span className="md:hidden">Dicembre - Regala il Test del DNA<br />€300 di sconto per te e per chi ami</span>
        </p>
      </div>
    </div>
  );
};
export default PromoBanner;

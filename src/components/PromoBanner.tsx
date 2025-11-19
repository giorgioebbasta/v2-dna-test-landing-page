import React from "react";
import { useLocation } from "react-router-dom";

const PromoBanner = () => {
  const location = useLocation();
  const isAdvertorialPage = location.pathname === '/dieta-non-funziona';
  const paddingClass = isAdvertorialPage ? 'py-2' : 'py-4';
  
  return (
    <div className={`fixed top-[42px] md:top-[49px] left-0 right-0 z-40 bg-[#E8FFC9] text-[#0B4650] ${paddingClass} px-4 shadow-lg`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-base md:text-lg">
          <span className="hidden md:inline">Novembre Mese della Prevenzione - €100 di sconto</span>
          <span className="md:hidden">Novembre Mese della Prevenzione<br />€100 di sconto</span>
        </p>
      </div>
    </div>
  );
};
export default PromoBanner;

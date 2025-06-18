
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Promo banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-1 px-4">
        <div className="text-xs sm:text-sm font-semibold">
          🔥 ESTATE40: -40% fino a fine estate! €209 invece di €349
        </div>
      </div>
      
      {/* Logo section */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
        <img 
          src="/lovable-uploads/2b3fd25b-1ca6-4335-a493-38d9a74cd75f.png" 
          alt="Holifya Logo" 
          className="h-8"
        />
      </div>
    </header>
  );
};

export default Header;

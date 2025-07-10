
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Mobile version - stacked layout */}
      <div className="md:hidden">
        {/* Logo section */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
          <a 
            href="https://www.holifya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="/lovable-uploads/2b3fd25b-1ca6-4335-a493-38d9a74cd75f.png" 
              alt="Holifya Logo" 
              className="h-8 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </div>
        
        {/* Promo banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 px-4">
          <div className="text-sm sm:text-base font-semibold">
            🔥 ESTATE40: -40% continua anche a luglio!
          </div>
          <div className="text-sm sm:text-base font-semibold">
            €209 invece di €349
          </div>
        </div>
      </div>

      {/* Desktop version - single row with rolling ticker */}
      <div className="hidden md:flex items-center justify-between px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="https://www.holifya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="/lovable-uploads/2b3fd25b-1ca6-4335-a493-38d9a74cd75f.png" 
              alt="Holifya Logo" 
              className="h-10 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </div>
        
        {/* Rolling ticker container */}
        <div className="flex-1 mx-8 overflow-hidden">
          <div className="animate-[scroll_20s_linear_infinite] whitespace-nowrap text-white font-semibold text-lg">
            🔥 ESTATE40: -40% continua anche a luglio! €209 invece di €349 • 🔥 ESTATE40: -40% continua anche a luglio! €209 invece di €349 • 🔥 ESTATE40: -40% continua anche a luglio! €209 invece di €349 • 
          </div>
        </div>
        
        {/* Right spacer to balance the logo */}
        <div className="flex-shrink-0 w-[120px]"></div>
      </div>
    </header>
  );
};

export default Header;

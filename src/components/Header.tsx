
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
              width={154}
              height={40}
              sizes="154px"
              style={{ maxWidth: '154px', maxHeight: '40px' }}
            />
          </a>
        </div>
        
        {/* Promo banner */}
        {/* ESTATE40 promotion banner deactivated */}
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
              width={193}
              height={50}
              sizes="193px"
              style={{ maxWidth: '193px', maxHeight: '50px' }}
            />
          </a>
        </div>
        
        {/* Rolling ticker container */}
        <div className="flex-1 mx-8 overflow-hidden">
          {/* ESTATE40 scrolling banner deactivated */}
        </div>
        
        {/* Right spacer to balance the logo */}
        <div className="flex-shrink-0 w-[120px]"></div>
      </div>
    </header>
  );
};

export default Header;

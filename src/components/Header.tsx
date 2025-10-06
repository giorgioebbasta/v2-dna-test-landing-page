
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Mobile version - logo only */}
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
      </div>

      {/* Desktop version - logo only */}
      <div className="hidden md:flex items-center justify-center px-4 py-2">
        {/* Logo */}
        <div>
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
      </div>
    </header>
  );
};

export default Header;

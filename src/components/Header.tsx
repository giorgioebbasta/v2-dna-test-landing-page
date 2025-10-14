import React from 'react';
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Mobile version - logo only */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-[2px]">
          <a href="https://www.holifya.com/" target="_blank" rel="noopener noreferrer" className="block">
            <img src="/lovable-uploads/logo-holifya.jpeg" alt="Holifya Logo" className="h-10 hover:opacity-80 transition-opacity cursor-pointer" />
          </a>
          <img src="/lovable-uploads/payoff-nero.jpeg" alt="Care at its core" className="h-3 mt-4" />
        </div>
      </div>

      {/* Desktop version - split layout */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 py-0.5">
        <a href="https://www.holifya.com/" target="_blank" rel="noopener noreferrer" className="block">
          <img src="/lovable-uploads/logo-holifya.jpeg" alt="Holifya Logo" className="h-12 hover:opacity-80 transition-opacity cursor-pointer" />
        </a>
        <img src="/lovable-uploads/payoff-nero.jpeg" alt="Care at its core" className="h-4 mt-4" />
      </div>
    </header>;
};
export default Header;
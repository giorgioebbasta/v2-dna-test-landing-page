import React from 'react';
import { smoothScrollToSection } from '@/lib/utils';

const Header = () => {
  const navItems = [
    { label: 'Come Funziona', sectionId: 'how-it-works' },
    { label: 'Perché Holifya', sectionId: 'comparison' },
    { label: 'Recensioni', sectionId: 'reviews' },
    { label: 'Prezzi', sectionId: 'pricing' },
    { label: 'FAQ', sectionId: 'faqs' },
  ];

  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Mobile version - logo only */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-[2px]">
          <a href="https://test-completo-del-dna.holifya.com" target="_blank" rel="noopener noreferrer" className="block">
            <img src="/lovable-uploads/logo-holifya.jpeg" alt="Holifya Logo" className="h-10 hover:opacity-80 transition-opacity cursor-pointer" />
          </a>
          <img src="/lovable-uploads/payoff-nero.jpeg" alt="Care at its core" className="h-3 mt-4" />
        </div>
      </div>

      {/* Desktop version - logo, navigation, payoff */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-0.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="https://test-completo-del-dna.holifya.com" target="_blank" rel="noopener noreferrer" className="block flex-shrink-0">
              <img src="/lovable-uploads/logo-holifya.jpeg" alt="Holifya Logo" className="h-12 hover:opacity-80 transition-opacity cursor-pointer" />
            </a>

            {/* Navigation Menu */}
            <nav className="flex items-center gap-4 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => smoothScrollToSection(item.sectionId)}
                  className="text-sm font-medium text-slate-700 hover:text-primary transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Payoff */}
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/payoff-nero.jpeg" alt="Care at its core" className="h-4 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
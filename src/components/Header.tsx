import React, { useEffect, useState, useRef } from 'react';
import { smoothScrollToSection } from '@/lib/utils';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    let rafId: number;
    
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScroll = documentHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      const clampedProgress = Math.min(100, Math.max(0, progress));
      
      // Only update if changed by at least 0.001%
      if (Math.abs(clampedProgress - lastProgressRef.current) >= 0.001) {
        setScrollProgress(clampedProgress);
        lastProgressRef.current = clampedProgress;
      }
    };

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

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

      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#EAEAEA]"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div 
          className="h-full bg-gradient-to-r from-[#0A121A] to-[#2F3F4C] transition-all duration-100 ease-linear rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>;
};
export default Header;
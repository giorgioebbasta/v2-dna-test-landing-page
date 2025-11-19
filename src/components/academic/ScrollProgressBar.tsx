import { useEffect, useState, useRef } from 'react';

export const ScrollProgressBar = () => {
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

  return (
    <div 
      className="fixed top-[61px] md:top-[73px] left-0 right-0 h-[3px] bg-[#EAEAEA] z-40 shadow-sm"
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
  );
};

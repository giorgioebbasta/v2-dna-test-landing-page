import { useEffect, useState } from 'react';

export interface ScrollSpySection {
  id: string;
  label: string;
}

export const useScrollSpy = (sections: ScrollSpySection[], containerSelector?: string) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const container = containerSelector 
      ? document.querySelector(containerSelector) 
      : window;
    
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = containerSelector
        ? (container as Element).scrollTop + 150
        : window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = containerSelector
            ? section.offsetTop - (container as Element).scrollTop + scrollPosition - 150
            : section.offsetTop;
          
          if (sectionTop <= scrollPosition) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => container.removeEventListener('scroll', handleScroll);
  }, [sections, containerSelector]);

  return activeSection;
};

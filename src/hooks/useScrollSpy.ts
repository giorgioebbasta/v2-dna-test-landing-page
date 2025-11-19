import { useEffect, useState } from 'react';

export interface ScrollSpySection {
  id: string;
  label: string;
}

export const useScrollSpy = (sections: ScrollSpySection[], containerSelector?: string) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const container = containerSelector 
      ? document.querySelector(containerSelector) 
      : null;
    
    const handleScroll = () => {
      if (containerSelector && container) {
        // For custom scroll container
        const scrollPosition = (container as Element).scrollTop + 100;
        
        // If near the top, always show first section
        if ((container as Element).scrollTop < 50) {
          setActiveSection(sections[0]?.id || '');
          return;
        }

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (section) {
            const rect = section.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const relativeTop = rect.top - containerRect.top + (container as Element).scrollTop;
            
            if (relativeTop <= scrollPosition) {
              setActiveSection(sections[i].id);
              break;
            }
          }
        }
      } else {
        // For window scroll
        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    const scrollElement = container || window;
    scrollElement.addEventListener('scroll', handleScroll as any);
    handleScroll();

    return () => scrollElement.removeEventListener('scroll', handleScroll as any);
  }, [sections, containerSelector]);

  return activeSection;
};

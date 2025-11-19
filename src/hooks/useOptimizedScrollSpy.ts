import { useEffect, useState, useRef } from 'react';

export interface ScrollSpySection {
  id: string;
  label: string;
}

export const useOptimizedScrollSpy = (sections: ScrollSpySection[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Track which sections are currently visible
    const visibleSections = new Set<string>();

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Set the first visible section as active (top-most)
        if (visibleSections.size > 0) {
          // Find the topmost visible section by checking order in sections array
          for (const section of sections) {
            if (visibleSections.has(section.id)) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      },
      {
        // Trigger when section is 20% visible from top of viewport
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections]);

  return activeSection;
};

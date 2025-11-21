import { useEffect, useState, useRef } from 'react';

export interface ColorScheme {
  className: string;
  textColor: string;
  style?: React.CSSProperties;
}

const colorSchemes: Record<string, ColorScheme> = {
  default: {
    className: "bg-gradient-to-r from-[#E8FFC9] to-[#d4f5b1] hover:from-[#d4f5b1] hover:to-[#E8FFC9]",
    textColor: "text-[#0B4650]"
  },
  pinkPeach: {
    className: "bg-gradient-to-r from-[#FCE8E6] to-[#fbd5d1] hover:from-[#fbd5d1] hover:to-[#f9c2bc]",
    textColor: "text-[#1A1A31]"
  },
  lightBlue: {
    className: "",
    textColor: "text-[#1A1A31]",
    style: { background: '#C4EDFF' }
  },
  darkTeal: {
    className: "bg-[#0B4650] hover:bg-[#0B4650]/90",
    textColor: "text-[#E8FFC9]"
  }
};

export const useFloatingCTAColor = () => {
  const [activeColor, setActiveColor] = useState<ColorScheme>(colorSchemes.default);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Track which sections are currently visible
    const visibleSections = new Set<string>();

    // Section priority order (top to bottom)
    const sections = [
      'dna-explainer',
      'report-preview',
      'how-it-works',
      'testimonials',
      'final-cta'
    ];

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

        // Determine active color based on topmost visible section
        let newColorScheme = colorSchemes.default;

        for (const sectionId of sections) {
          if (visibleSections.has(sectionId)) {
            // Map section to color scheme
            if (sectionId === 'dna-explainer' || sectionId === 'report-preview') {
              newColorScheme = colorSchemes.pinkPeach;
            } else if (sectionId === 'how-it-works' || sectionId === 'testimonials') {
              newColorScheme = colorSchemes.lightBlue;
            } else if (sectionId === 'final-cta') {
              newColorScheme = colorSchemes.darkTeal;
            }
            break; // Use the first (topmost) visible section
          }
        }

        setActiveColor(newColorScheme);
      },
      {
        // Trigger when section is 20% visible from top of viewport
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
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
  }, []);

  return activeColor;
};

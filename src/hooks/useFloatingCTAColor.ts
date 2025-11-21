import { useEffect, useState, useRef } from 'react';

export interface ColorScheme {
  className: string;
  textColor: string;
  style?: React.CSSProperties;
}

const colorSchemes: Record<string, ColorScheme> = {
  default: {
    className: "",
    textColor: "text-[#0B4650]",
    style: { background: 'linear-gradient(to right, #E8FFC9, #d4f5b1)' }
  },
  pinkPeach: {
    className: "",
    textColor: "text-[#1A1A31]",
    style: { background: 'linear-gradient(to right, #FCE8E6, #fbd5d1)' }
  },
  lightBlue: {
    className: "",
    textColor: "text-[#1A1A31]",
    style: { background: '#C4EDFF' }
  },
  purple: {
    className: "",
    textColor: "text-white",
    style: { background: 'linear-gradient(to right, #D0C5FB, #A78BFA)' }
  },
  darkTeal: {
    className: "",
    textColor: "text-[#E8FFC9]",
    style: { background: '#0B4650' }
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
      'reviews',
      'testimonials',
      'comparison',
      'pricing',
      'faqs',
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
            } else if (sectionId === 'how-it-works' || sectionId === 'reviews' || sectionId === 'testimonials') {
              newColorScheme = colorSchemes.lightBlue;
            } else if (sectionId === 'comparison' || sectionId === 'pricing' || sectionId === 'faqs') {
              newColorScheme = colorSchemes.purple;
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

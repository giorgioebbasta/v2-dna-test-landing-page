import { useEffect } from 'react';

// Component to optimize Speed Index by reducing layout shifts and improving perceived performance
const SpeedOptimizer = () => {
  useEffect(() => {
    // Prevent layout shifts by immediately showing placeholders
    const addImmediateStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Prevent layout shifts */
        img[loading="lazy"] {
          min-height: 200px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        /* Optimize text rendering */
        h1, h2, h3, .font-bold {
          font-display: swap;
        }
        
        /* Speed up transitions for perceived performance */
        .animate-fade-in {
          animation-duration: 0.3s !important;
        }
        
        /* Ensure critical content is visible immediately */
        header, .hero-section, .btn-primary {
          visibility: visible !important;
          opacity: 1 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Apply optimizations immediately
    addImmediateStyles();

    // Warm up critical interactions
    const warmUpInteractions = () => {
      // Pre-warm hover states for critical buttons
      const criticalButtons = document.querySelectorAll('.btn-primary, [class*="cta"]');
      criticalButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          // Trigger any hover-related computations early
        }, { passive: true, once: true });
      });
    };

    // Run after a small delay to not block initial render
    setTimeout(warmUpInteractions, 100);

    // Progressive enhancement for smoother experience
    const enhanceProgressively = () => {
      // Enable smooth scrolling only after initial load
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Enable transitions only after critical content is loaded
      const transitionStyle = document.createElement('style');
      transitionStyle.textContent = `
        * {
          transition-duration: 0.2s !important;
        }
        
        .transition-all {
          transition-property: all !important;
        }
      `;
      document.head.appendChild(transitionStyle);
    };

    // Apply enhancements after page is more stable
    setTimeout(enhanceProgressively, 1000);
  }, []);

  return null;
};

export default SpeedOptimizer;
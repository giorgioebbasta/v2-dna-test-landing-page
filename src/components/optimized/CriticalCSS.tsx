import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // Re-enable animations and transitions after full CSS loads
    const enableFullStyling = () => {
      // Remove the critical CSS restrictions
      const style = document.createElement('style');
      style.textContent = `
        .skeleton, 
        [class*="animate-"]:not(.animate-fade-in),
        .transition-all,
        .hover\\:scale-105:hover {
          display: revert !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Wait for main CSS to load, then enable full styling
    const checkCSSLoaded = () => {
      const cssLoaded = Array.from(document.styleSheets).some(sheet => {
        try {
          return sheet.href && (sheet.href.includes('index.css') || sheet.href.includes('index-'));
        } catch (e) {
          return false;
        }
      });
      
      if (cssLoaded) {
        enableFullStyling();
      } else if ('requestIdleCallback' in window) {
        requestIdleCallback(checkCSSLoaded, { timeout: 2000 });
      } else {
        setTimeout(checkCSSLoaded, 100);
      }
    };

    // Start checking after a brief delay
    setTimeout(checkCSSLoaded, 100);
  }, []);

  return null;
};

export default CriticalCSS;
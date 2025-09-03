import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // Monitor for CSS loading completion
    const checkCSSLoaded = () => {
      // Check if any stylesheet contains our CSS rules
      const cssLoaded = Array.from(document.styleSheets).some(sheet => {
        try {
          // Check if the sheet has rules and contains our application styles
          return sheet.cssRules && sheet.cssRules.length > 50;
        } catch (e) {
          // Cross-origin or other access issues
          return sheet.href && (sheet.href.includes('index.css') || sheet.href.includes('index-'));
        }
      });
      
      if (cssLoaded) {
        // CSS is loaded, enable all features
        const style = document.createElement('style');
        style.textContent = `
          .skeleton, 
          [class*="animate-"]:not(.animate-fade-in),
          .transition-all,
          .hover\\:scale-105:hover,
          .hover\\:opacity-80:hover,
          .cursor-pointer {
            display: revert !important;
          }
        `;
        document.head.appendChild(style);
      } else {
        // Keep checking
        setTimeout(checkCSSLoaded, 100);
      }
    };

    // Start monitoring after a brief delay
    setTimeout(checkCSSLoaded, 100);
  }, []);

  return null;
};

export default CriticalCSS;

import { useEffect } from 'react';

const DeferredScripts = () => {
  useEffect(() => {
    let scriptsLoaded = false;
    
    // Utility to break up heavy operations
    const scheduleWork = (callback: () => void, delay = 0) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 1000 });
      } else {
        setTimeout(callback, delay);
      }
    };
    
    const loadScriptsGradually = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;
      
      // Stage 1: Load minimal GTM (most delayed)
      scheduleWork(() => {
        const gtmScript = document.createElement('script');
        gtmScript.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P9DJPS6B');
        `;
        document.head.appendChild(gtmScript);
      }, 100);

      // Stage 2: Load Klaviyo much later and in idle time
      scheduleWork(() => {
        const klaviyoScript = document.createElement('script');
        klaviyoScript.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UKq26T';
        klaviyoScript.async = true;
        klaviyoScript.defer = true;
        klaviyoScript.type = 'text/javascript';
        document.head.appendChild(klaviyoScript);
      }, 4000);
    };

    // More conservative interaction triggers - only scroll and click
    const interactionEvents = ['scroll', 'click'];
    
    const handleUserInteraction = () => {
      // Add small delay even after interaction to avoid blocking initial user action
      setTimeout(loadScriptsGradually, 300);
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };

    // Add interaction listeners with passive flag
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { 
        passive: true, 
        once: true 
      } as AddEventListenerOptions);
    });

    // Much longer fallback delay - prioritize page performance
    const fallbackTimer = setTimeout(() => {
      loadScriptsGradually();
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    }, 8000); // Increased from 5000 to 8000

    return () => {
      clearTimeout(fallbackTimer);
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  return null;
};

export default DeferredScripts;

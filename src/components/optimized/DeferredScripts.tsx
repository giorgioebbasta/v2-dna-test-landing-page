
import { useEffect } from 'react';

const DeferredScripts = () => {
  useEffect(() => {
    let scriptsLoaded = false;
    
    const loadDeferredScripts = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;
      
      // Load GTM with minimal configuration first
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P9DJPS6B');
      `;
      document.head.appendChild(gtmScript);

      // Load Klaviyo even later to reduce initial bundle impact
      setTimeout(() => {
        const klaviyoScript = document.createElement('script');
        klaviyoScript.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UKq26T';
        klaviyoScript.async = true;
        klaviyoScript.type = 'text/javascript';
        document.head.appendChild(klaviyoScript);
      }, 2000);
    };

    // Load scripts only after user interaction or after significant delay
    const interactionEvents = ['scroll', 'click', 'touchstart', 'mousemove', 'keydown'];
    
    const handleUserInteraction = () => {
      loadDeferredScripts();
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };

    // Add interaction listeners
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { passive: true } as AddEventListenerOptions);
    });

    // Fallback: load after longer delay if no interaction
    const fallbackTimer = setTimeout(() => {
      loadDeferredScripts();
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    }, 5000);

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

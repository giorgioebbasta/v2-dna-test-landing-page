
import { useEffect } from 'react';

const DeferredScripts = () => {
  useEffect(() => {
    const loadDeferredScripts = () => {
      // Load GTM after page is interactive
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P9DJPS6B');
      `;
      document.head.appendChild(gtmScript);

      // Load Klaviyo after GTM
      const klaviyoScript = document.createElement('script');
      klaviyoScript.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UKq26T';
      klaviyoScript.async = true;
      klaviyoScript.type = 'text/javascript';
      document.head.appendChild(klaviyoScript);
    };

    // Load scripts after page is interactive - use requestIdleCallback if available
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadDeferredScripts, { timeout: 3000 });
    } else {
      setTimeout(loadDeferredScripts, 1000);
    }
  }, []);

  return null;
};

export default DeferredScripts;

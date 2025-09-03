import { useEffect } from 'react';

// Third-party script manager with intelligent loading strategies
const ThirdPartyManager = () => {
  useEffect(() => {
    let loadingStage = 0;
    let isPageVisible = true;
    
    // Monitor page visibility to pause heavy operations when not visible
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Smart scheduler that respects browser idle time and page visibility
    const smartSchedule = (callback: () => void, priority: 'low' | 'normal' = 'low') => {
      if (!isPageVisible && priority === 'low') {
        // Don't load low-priority scripts when page is not visible
        return;
      }
      
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { 
          timeout: priority === 'low' ? 5000 : 2000 
        });
      } else {
        setTimeout(callback, priority === 'low' ? 500 : 100);
      }
    };
    
    // Progressive loading of scripts based on user engagement
    const loadByStage = (stage: number) => {
      if (loadingStage >= stage) return;
      loadingStage = stage;
      
      switch (stage) {
        case 1: // Essential analytics only
          smartSchedule(() => {
            if (!document.querySelector('script[src*="gtm.js"]')) {
              const gtmScript = document.createElement('script');
              gtmScript.innerHTML = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;
                j.setAttribute('data-priority','low');j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P9DJPS6B');
              `;
              document.head.appendChild(gtmScript);
            }
          }, 'low');
          break;
          
        case 2: // Marketing tools
          smartSchedule(() => {
            if (!document.querySelector('script[src*="klaviyo.js"]')) {
              const klaviyoScript = document.createElement('script');
              klaviyoScript.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UKq26T';
              klaviyoScript.async = true;
              klaviyoScript.defer = true;
              klaviyoScript.setAttribute('data-priority', 'low');
              document.head.appendChild(klaviyoScript);
            }
          }, 'low');
          break;
      }
    };
    
    // Engagement-based loading
    let engagementScore = 0;
    const incrementEngagement = () => {
      engagementScore++;
      
      if (engagementScore === 1) {   // First interaction
        setTimeout(() => loadByStage(1), 1000);
      } else if (engagementScore === 3) {  // More engaged user
        setTimeout(() => loadByStage(2), 2000);
      }
    };
    
    // Light interaction tracking
    const lightEvents = ['scroll', 'click'];
    const heavyEvents = ['mousemove', 'keydown', 'touchstart'];
    
    lightEvents.forEach(event => {
      document.addEventListener(event, incrementEngagement, { 
        passive: true, 
        once: true 
      });
    });
    
    // Only add heavy event listeners after initial engagement
    setTimeout(() => {
      if (engagementScore > 0) {
        heavyEvents.forEach(event => {
          document.addEventListener(event, incrementEngagement, { 
            passive: true, 
            once: true 
          });
        });
      }
    }, 3000);
    
    // Conservative fallback - only load stage 1 after very long delay
    const conservativeFallback = setTimeout(() => {
      loadByStage(1);
    }, 12000); // Increased to 12 seconds
    
    return () => {
      clearTimeout(conservativeFallback);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      [...lightEvents, ...heavyEvents].forEach(event => {
        document.removeEventListener(event, incrementEngagement);
      });
    };
  }, []);
  
  return null;
};

export default ThirdPartyManager;
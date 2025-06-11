
import { useEffect } from 'react';

const DeferredScripts = () => {
  useEffect(() => {
    // Defer non-critical scripts until after initial page load
    const loadDeferredScripts = () => {
      // Prefetch important pages on hover
      const prefetchOnHover = () => {
        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach(link => {
          link.addEventListener('mouseenter', () => {
            const href = (link as HTMLAnchorElement).href;
            if (!document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              document.head.appendChild(prefetchLink);
            }
          }, { once: true });
        });
      };

      // Enable hover prefetching after a delay
      setTimeout(prefetchOnHover, 3000);

      console.log('Deferred scripts and optimizations loaded');
    };

    // Load scripts after a short delay to prioritize initial page render
    const timer = setTimeout(loadDeferredScripts, 2000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default DeferredScripts;

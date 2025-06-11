
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (import.meta.env.DEV) return;

    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        console.log('FCP:', fcpEntry.startTime);
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Cumulative Layout Shift
        new PerformanceObserver((list) => {
          let cumulativeScore = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cumulativeScore += (entry as any).value;
            }
          }
          console.log('CLS:', cumulativeScore);
        }).observe({ entryTypes: ['layout-shift'] });

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', (entry as any).processingStart - entry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });
      }
    };

    // Run after page is fully loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;

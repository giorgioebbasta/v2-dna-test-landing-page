
import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images, priority = false }) => {
  useEffect(() => {
    const preloadLinks: HTMLLinkElement[] = [];

    images.forEach((src, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      
      // Only set high priority for first few images
      if (priority && index < 2) {
        link.setAttribute('fetchpriority', 'high');
      }
      
      document.head.appendChild(link);
      preloadLinks.push(link);
    });

    return () => {
      preloadLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [images, priority]);

  return null;
};

export default ImagePreloader;

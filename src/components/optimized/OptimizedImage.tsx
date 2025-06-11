
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate WebP source if available
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {isInView && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            sizes={sizes}
          />
        </picture>
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;

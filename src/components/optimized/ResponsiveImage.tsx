
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  displayWidth?: number;
  displayHeight?: number;
  maxDisplayWidth?: number;
  maxDisplayHeight?: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  onLoad,
  displayWidth,
  displayHeight,
  maxDisplayWidth,
  maxDisplayHeight
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  });

  const shouldLoad = priority || isIntersecting;

  // Calculate optimal display dimensions
  const optimalWidth = maxDisplayWidth || displayWidth || width || 400;
  const optimalHeight = maxDisplayHeight || displayHeight || height || 320;

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"
          style={{ 
            width: width || '100%', 
            height: height || 'auto',
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}
      
      {shouldLoad && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? "eager" : "lazy"}
          width={optimalWidth}
          height={optimalHeight}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            aspectRatio: optimalWidth && optimalHeight ? `${optimalWidth}/${optimalHeight}` : undefined,
            maxWidth: `${optimalWidth}px`,
            maxHeight: `${optimalHeight}px`
          }}
          decoding="async"
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <span className="text-slate-500 text-sm">Immagine non disponibile</span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;

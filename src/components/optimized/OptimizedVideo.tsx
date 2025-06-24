
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface OptimizedVideoProps {
  embedUrl: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  embedUrl,
  title,
  thumbnailUrl,
  className = "w-full aspect-[9/16] md:aspect-video"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`${className} bg-slate-200 flex items-center justify-center`}>
        <p className="text-slate-500">Video non disponibile</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div 
        className={`${className} bg-slate-200 relative overflow-hidden cursor-pointer group`}
        onClick={handleLoadVideo}
      >
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={embedUrl}
      title={title}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      onError={handleError}
    />
  );
};

export default OptimizedVideo;

import { useEffect, useState } from 'react';

interface LazyScriptLoaderProps {
  src: string;
  onLoad?: () => void;
  delay?: number;
}

const LazyScriptLoader: React.FC<LazyScriptLoaderProps> = ({ src, onLoad, delay = 0 }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          setLoaded(true);
          onLoad?.();
        };
        document.head.appendChild(script);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [src, onLoad, delay, loaded]);

  return null;
};

export default LazyScriptLoader;

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '100px',
  triggerOnce = true,
  delay = 0
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (triggerOnce) {
          if (isVisible && !hasTriggered) {
            if (delay > 0) {
              setTimeout(() => {
                setIsIntersecting(true);
                setHasTriggered(true);
              }, delay);
            } else {
              setIsIntersecting(true);
              setHasTriggered(true);
            }
          }
        } else {
          setIsIntersecting(isVisible);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    elementRef,
    isIntersecting: triggerOnce ? hasTriggered : isIntersecting
  };
};

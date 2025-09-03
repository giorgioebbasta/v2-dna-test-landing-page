import { lazy, Suspense, ComponentType } from 'react';

interface LazyComponentLoaderProps {
  componentName: string;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

const componentMap: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  ProductCarousel: () => import('@/components/ProductCarousel'),
  TestimonialsSection: () => import('@/components/TestimonialsSection'),
  ReviewsSection: () => import('@/components/ReviewsSection'),
  ComparisonSection: () => import('@/components/ComparisonSection'),
  HowItWorksSection: () => import('@/components/HowItWorksSection'),
  ContactSection: () => import('@/components/ContactSection'),
  CTASection: () => import('@/components/CTASection'),
  FinalCTASection: () => import('@/components/FinalCTASection'),
};

const LazyComponentLoader: React.FC<LazyComponentLoaderProps> = ({ 
  componentName, 
  fallback = <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />,
  children
}) => {
  if (!componentMap[componentName]) {
    console.warn(`Component ${componentName} not found in componentMap`);
    return null;
  }

  const LazyComponent = lazy(componentMap[componentName]);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent>
        {children}
      </LazyComponent>
    </Suspense>
  );
};

export default LazyComponentLoader;
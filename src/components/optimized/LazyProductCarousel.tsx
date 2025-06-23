
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const OptimizedProductCarousel = React.lazy(() => import('./OptimizedProductCarousel'));

const LazyProductCarousel = () => {
  return (
    <Suspense fallback={
      <div className="w-full max-w-lg mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Skeleton className="w-full h-80" />
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-3 h-3 rounded-full" />
          ))}
        </div>
      </div>
    }>
      <OptimizedProductCarousel />
    </Suspense>
  );
};

export default LazyProductCarousel;

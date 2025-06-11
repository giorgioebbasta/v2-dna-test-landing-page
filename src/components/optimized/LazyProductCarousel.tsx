
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ProductCarousel = React.lazy(() => import('@/components/ProductCarousel'));

const LazyProductCarousel = () => {
  return (
    <Suspense fallback={
      <div className="w-full max-w-lg mx-auto">
        <Skeleton className="w-full h-80 rounded-2xl" />
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-3 h-3 rounded-full" />
          ))}
        </div>
      </div>
    }>
      <ProductCarousel />
    </Suspense>
  );
};

export default LazyProductCarousel;

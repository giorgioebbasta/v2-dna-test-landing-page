
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const TestimonialsSection = React.lazy(() => import('@/components/TestimonialsSection'));

const LazyTestimonialsSection = () => {
  return (
    <Suspense fallback={
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton 
                key={i} 
                className={`h-80 w-full rounded-lg ${i === 2 ? 'hidden lg:block' : ''}`} 
              />
            ))}
          </div>
        </div>
      </section>
    }>
      <TestimonialsSection />
    </Suspense>
  );
};

export default LazyTestimonialsSection;

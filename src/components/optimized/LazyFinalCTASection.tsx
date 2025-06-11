
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const FinalCTASection = React.lazy(() => import('@/components/FinalCTASection'));

const LazyFinalCTASection = () => {
  return (
    <Suspense fallback={
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-12 w-96 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-80 mx-auto mb-8 bg-white/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md mx-auto">
            <Skeleton className="h-24 w-full bg-white/20" />
            <Skeleton className="h-24 w-full bg-white/20" />
          </div>
        </div>
      </section>
    }>
      <FinalCTASection />
    </Suspense>
  );
};

export default LazyFinalCTASection;

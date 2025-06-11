
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ComparisonSection = React.lazy(() => import('@/components/ComparisonSection'));

const LazyComparisonSection = () => {
  return (
    <Suspense fallback={
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          <Skeleton className="h-96 w-full rounded-lg" />
        </div>
      </section>
    }>
      <ComparisonSection />
    </Suspense>
  );
};

export default LazyComparisonSection;

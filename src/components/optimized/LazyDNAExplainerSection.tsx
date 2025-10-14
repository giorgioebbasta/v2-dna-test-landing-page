import React, { Suspense, lazy } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const DNAExplainerSection = lazy(() => import('@/components/DNAExplainerSection'));

const LazyDNAExplainerSection = () => {
  return (
    <Suspense fallback={
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-32 w-full" />
          <div className="grid md:grid-cols-3 gap-6">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </div>
    }>
      <DNAExplainerSection />
    </Suspense>
  );
};

export default LazyDNAExplainerSection;

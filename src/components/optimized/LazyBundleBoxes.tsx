import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const BundleBoxes = React.lazy(() => import('@/components/BundleBoxes'));

const LazyBundleBoxes = () => {
  return (
    <Suspense fallback={
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </section>
    }>
      <BundleBoxes />
    </Suspense>
  );
};

export default LazyBundleBoxes;

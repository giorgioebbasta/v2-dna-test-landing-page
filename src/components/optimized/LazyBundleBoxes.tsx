import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const BundleBoxes = React.lazy(() => import('@/components/BundleBoxes'));

const LazyBundleBoxes = () => {
  return (
    <Suspense fallback={
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        </div>
      </section>
    }>
      <BundleBoxes />
    </Suspense>
  );
};

export default LazyBundleBoxes;

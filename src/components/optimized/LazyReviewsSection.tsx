
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ReviewsSection = React.lazy(() => import('@/components/ReviewsSection'));

const LazyReviewsSection = () => {
  return (
    <Suspense fallback={
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    }>
      <ReviewsSection />
    </Suspense>
  );
};

export default LazyReviewsSection;

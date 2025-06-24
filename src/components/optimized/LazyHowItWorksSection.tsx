
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const HowItWorksSection = React.lazy(() => import('@/components/HowItWorksSection'));

const LazyHowItWorksSection = () => {
  return (
    <Suspense fallback={
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-80 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    }>
      <HowItWorksSection />
    </Suspense>
  );
};

export default LazyHowItWorksSection;

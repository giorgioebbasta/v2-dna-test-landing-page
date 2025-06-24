import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const CTASection = React.lazy(() => import('@/components/CTASection'));

const LazyCTASection = () => {
  return (
    <Suspense fallback={
      <section className="py-5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-12 w-80 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-96 mx-auto mb-8 bg-white/20" />
          <Skeleton className="h-14 w-48 mx-auto bg-white/20" />
        </div>
      </section>
    }>
      <CTASection />
    </Suspense>
  );
};

export default LazyCTASection;

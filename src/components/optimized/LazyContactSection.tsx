
import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ContactSection = React.lazy(() => import('@/components/ContactSection'));

const LazyContactSection = () => {
  return (
    <Suspense fallback={
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-80 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </section>
    }>
      <ContactSection />
    </Suspense>
  );
};

export default LazyContactSection;

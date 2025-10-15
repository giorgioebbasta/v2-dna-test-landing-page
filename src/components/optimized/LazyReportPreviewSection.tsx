import React, { Suspense, lazy } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ReportPreviewSection = lazy(() => import('@/components/ReportPreviewSection'));

const LazyReportPreviewSection = () => {
  return (
    <Suspense fallback={
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    }>
      <ReportPreviewSection />
    </Suspense>
  );
};

export default LazyReportPreviewSection;

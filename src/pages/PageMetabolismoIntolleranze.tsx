import React from 'react';
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import StructuredData from "@/components/seo/StructuredData";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { ArticleContentMetabolismoIntolleranze } from "@/components/academic/ArticleContentMetabolismoIntolleranze";
import type { ScrollSpySection } from "@/hooks/useOptimizedScrollSpy";

// Memoize sections array - it never changes
const sections: ScrollSpySection[] = [
  { id: 'intro', label: 'E se non fossi davvero intollerante?' },
  { id: 'confusione', label: 'La confusione delle "intolleranze moderne"' },
  { id: 'test', label: 'Perché "test intolleranze" spesso confondono' },
  { id: 'genetica', label: 'Il ruolo della genetica e del metabolismo digestivo' },
  { id: 'microbiota', label: 'Il microbiota: un mondo che cambia tutto' },
  { id: 'precisione', label: 'La nuova frontiera: la nutrizione di precisione' },
  { id: 'sintomi', label: 'Quando il corpo parla: sintomi comuni da interpretare' },
  { id: 'esperienze', label: 'Esperienze reali, non prove scientifiche' },
  { id: 'cta-section', label: 'Vuoi capire se il problema è davvero un\'intolleranza?' }
];

const PageMetabolismoIntolleranze = () => {
  return (
    <>
      <SEOHelmet 
        title="Metabolismo e Intolleranze: Come il DNA Influenza la Tua Risposta | Holifya" 
        description="Scopri come i tuoi geni determinano il modo in cui il tuo corpo metabolizza gli alimenti e come ottimizzare salute e benessere." 
        canonical="https://test-completo-del-dna.holifya.com/metabolismo-intolleranze" 
      />
      <StructuredData type="article" />
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Mobile Layout - Single Column */}
        <article className="lg:hidden">
          <ArticleContentMetabolismoIntolleranze />
        </article>

        {/* Desktop Layout - Two Column with Sticky TOC */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto flex gap-8 px-6">
            {/* Left Sidebar - Table of Contents (25%) */}
            <aside className="w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </aside>

            {/* Right Content Area (75%) */}
            <article className="flex-1">
              <ArticleContentMetabolismoIntolleranze />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageMetabolismoIntolleranze;

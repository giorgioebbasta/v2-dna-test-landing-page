import React from 'react';
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import StructuredData from "@/components/seo/StructuredData";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { ArticleContentMigliorareSport } from "@/components/academic/ArticleContentMigliorareSport";
import type { ScrollSpySection } from "@/hooks/useOptimizedScrollSpy";

// Memoize sections array - it never changes
const sections: ScrollSpySection[] = [
  { id: 'intro', label: 'Il tuo DNA determina le tue performance?' },
  { id: 'confusione', label: 'Perché lo stesso allenamento funziona diversamente' },
  { id: 'test', label: 'Genetica e performance: cosa dice la scienza' },
  { id: 'genetica', label: 'Il ruolo del metabolismo energetico nello sport' },
  { id: 'microbiota', label: 'Recupero muscolare e infiammazione: la chiave genetica' },
  { id: 'precisione', label: 'Segnali che il tuo corpo ti sta mandando' },
  { id: 'sintomi', label: 'La nutrizione sportiva personalizzata' },
  { id: 'esperienze', label: 'Storie di atleti che hanno scoperto il loro potenziale' },
  { id: 'cta-section', label: 'Vuoi scoprire come ottimizzare le tue performance?' }
];

const PageMigliorareSport = () => {
  return (
    <>
      <SEOHelmet 
        title="Migliora le Tue Performance Sportive con il DNA | Holifya" 
        description="Scopri come i tuoi geni influenzano le performance sportive e come ottimizzare allenamento e recupero." 
        canonical="https://test-completo-del-dna.holifya.com/migliorare-sport" 
      />
      <StructuredData type="article" />
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Mobile Layout - Single Column */}
        <article className="lg:hidden">
          <ArticleContentMigliorareSport />
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
              <ArticleContentMigliorareSport />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageMigliorareSport;

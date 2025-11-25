import React from 'react';
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import StructuredData from "@/components/seo/StructuredData";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { ArticleContentMetabolismoCaffeina } from "@/components/academic/ArticleContentMetabolismoCaffeina";
import type { ScrollSpySection } from "@/hooks/useOptimizedScrollSpy";

// Memoize sections array - it never changes
const sections: ScrollSpySection[] = [
  { id: 'section-1', label: 'Quando "fare tutto bene" non basta' },
  { id: 'section-2', label: 'Non esiste una dieta per tutti' },
  { id: 'section-3', label: 'La svolta scientifica: la nutrizione di precisione' },
  { id: 'section-4', label: 'Lo studio che ha cambiato tutto' },
  { id: 'section-5', label: 'Perché le diete standard falliscono' },
  { id: 'section-6', label: 'I benefici di un percorso su misura' },
  { id: 'section-7', label: 'Esperienze reali, non prove scientifiche' },
  { id: 'cta-section', label: 'Vuoi capire come funziona davvero il tuo corpo?' }
];

const PageMetabolismoCaffeina = () => {
  return (
    <>
      <SEOHelmet 
        title="Metabolismo e Caffeina: Come il DNA Influenza la Tua Risposta | Holifya" 
        description="Scopri come i tuoi geni determinano il modo in cui il tuo corpo metabolizza la caffeina e come ottimizzare energia e salute." 
        canonical="https://test-completo-del-dna.holifya.com/metabolismo-caffeina" 
      />
      <StructuredData type="article" />
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Mobile Layout - Single Column */}
        <article className="lg:hidden">
          <ArticleContentMetabolismoCaffeina />
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
              <ArticleContentMetabolismoCaffeina />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageMetabolismoCaffeina;

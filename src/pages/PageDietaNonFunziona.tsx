import React from 'react';
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { ArticleContent } from "@/components/academic/ArticleContent";
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

const PageDietaNonFunziona = () => {
  return (
    <>
      <SEOHelmet 
        title="Perché la stessa dieta non funziona per tutti | Holifya" 
        description="Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio." 
        canonical="https://test-completo-del-dna.holifya.com/dieta-non-funziona" 
      />
      
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden">
          <ArticleContent />
        </div>

        {/* Desktop Layout - Two Column with Sticky TOC */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto flex gap-8 px-6">
            {/* Left Sidebar - Table of Contents (25%) */}
            <div className="w-64 flex-shrink-0">
              <TableOfContents sections={sections} />
            </div>

            {/* Right Content Area (75%) */}
            <div className="flex-1">
              <ArticleContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDietaNonFunziona;

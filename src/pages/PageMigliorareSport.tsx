import React from 'react';
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import StructuredData from "@/components/seo/StructuredData";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { ArticleContentMigliorareSport } from "@/components/academic/ArticleContentMigliorareSport";
import type { ScrollSpySection } from "@/hooks/useOptimizedScrollSpy";

// Memoize sections array - it never changes
const sections: ScrollSpySection[] = [
  { id: 'intro', label: 'Perché ti alleni ma i risultati non arrivano?' },
  { id: 'section-2', label: 'Il mito del "più ti alleni, meglio è"' },
  { id: 'section-3', label: 'Oltre la forza di volontà: la scienza della performance' },
  { id: 'section-4', label: 'Il ruolo della genetica nella risposta all\'allenamento' },
  { id: 'section-5', label: 'Recupero: il segreto nascosto dei campioni' },
  { id: 'section-6', label: 'Segnali che il tuo corpo ti sta mandando' },
  { id: 'section-7', label: 'La nuova era: l\'allenamento di precisione' },
  { id: 'esperienze', label: 'Storie di trasformazione reale' },
  { id: 'cta-section', label: 'Scopri il tuo potenziale atletico nascosto' }
];

const PageMigliorareSport = () => {
  return (
    <>
      <SEOHelmet 
        title="Perché Ti Alleni ma i Risultati Non Arrivano? | Holifya" 
        description="Scopri come la genetica influenza la tua risposta all'allenamento e ottieni un piano personalizzato per massimizzare i risultati sportivi." 
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

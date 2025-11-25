import React from 'react';
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import StructuredData from "@/components/seo/StructuredData";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { ArticleContentMetabolismoCaffeina } from "@/components/academic/ArticleContentMetabolismoCaffeina";
import type { ScrollSpySection } from "@/hooks/useOptimizedScrollSpy";

// Memoize sections array - it never changes
const sections: ScrollSpySection[] = [
  { id: 'intro', label: 'Perché il caffè ti dà energia...' },
  { id: 'reazioni', label: 'Una tazza, mille reazioni diverse' },
  { id: 'scienza', label: 'La scienza dietro al metabolismo della caffeina' },
  { id: 'rischi', label: 'Rischi e benefici: non è quanto bevi, ma quanto resta' },
  { id: 'performance', label: 'Caffeina e performance: energia o ostacolo?' },
  { id: 'futuro', label: 'Il futuro: personalizzare anche l\'energia' },
  { id: 'sensibilita', label: 'Come conoscere la tua sensibilità alla caffeina' },
  { id: 'esperienze', label: 'Esperienze reali, non prove scientifiche' },
  { id: 'cta-section', label: 'Vuoi scoprire come il tuo corpo reagisce alla caffeina?' }
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

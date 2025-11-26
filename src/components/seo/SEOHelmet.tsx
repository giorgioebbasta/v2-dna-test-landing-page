import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHelmetProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "Test DNA Online Italia | Metabolismo e Intolleranze | Holifya",
  description = "Test del DNA da casa in 48h. Analisi di 150+ geni per scoprire intolleranze, metabolismo e predisposizioni genetiche. Oltre 3.000 clienti soddisfatti. Spedizione gratuita.",
  canonical = "https://test-completo-del-dna.holifya.com/",
  ogImage = "https://test-completo-del-dna.holifya.com/lovable-uploads/quadrato.webp",
  ogType = "website",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Test del DNA Holifya" />
      <meta property="og:site_name" content="Holifya" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Test del DNA Holifya" />
    </Helmet>
  );
};

export default SEOHelmet;

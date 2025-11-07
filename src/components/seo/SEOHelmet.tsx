import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "Test del DNA Online Professionale | Holifya",
  description = "Fai il tuo test del DNA da casa e scopri tutto su nutrizione, salute, sport e benessere. Holifya ti svela i segreti del tuo corpo in 15 giorni.",
  canonical = "https://test-completo-del-dna.holifya.com/",
  ogImage = "https://test-completo-del-dna.holifya.com/lovable-uploads/logo-holifya.jpeg",
  ogType = "website"
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

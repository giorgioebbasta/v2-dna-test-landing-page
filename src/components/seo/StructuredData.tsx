import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'homepage' | 'product' | 'page';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type }) => {
  // Organization Schema - appears on all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Holifya",
    "url": "https://test-completo-del-dna.holifya.com",
    "logo": "https://test-completo-del-dna.holifya.com/lovable-uploads/logo-holifya.jpeg",
    "description": "Test del DNA professionale per nutrizione, salute, sport e benessere personalizzato",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-333-202-2743",
      "contactType": "Customer Service",
      "email": "support@holifya.com",
      "availableLanguage": "Italian"
    },
    "sameAs": [
      "https://www.trustpilot.com/review/holifya.com"
    ]
  };

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Test del DNA Completo Holifya",
    "description": "Test del DNA professionale che analizza oltre 2000 varianti genetiche per fornire insight personalizzati su nutrizione, salute, sport, sonno, intolleranze e anti-aging",
    "brand": {
      "@type": "Brand",
      "name": "Holifya"
    },
    "image": "https://test-completo-del-dna.holifya.com/lovable-uploads/quadrato.webp",
    "offers": {
      "@type": "Offer",
      "url": "https://test-completo-del-dna.holifya.com",
      "priceCurrency": "EUR",
      "price": "289",
      "priceValidUntil": "2025-11-30",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Holifya"
      },
      "itemCondition": "https://schema.org/NewCondition",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "EUR"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "3000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Trustpilot"
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IT",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto tempo ci vuole per ricevere il kit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il kit arriva a casa tua in 48 ore lavorative dall'ordine. Spedizione gratuita in tutta Italia."
        }
      },
      {
        "@type": "Question",
        "name": "I laboratori sono certificati?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, lavoriamo con BMR Genomics Srl, laboratori certificati CE-IVD e ISO 9001, tra i più avanzati in Europa per l'analisi genetica."
        }
      },
      {
        "@type": "Question",
        "name": "I miei dati sono al sicuro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assolutamente sì. Il tuo campione viene analizzato in forma anonima e i tuoi dati sono protetti secondo le normative GDPR. Puoi richiedere la cancellazione in qualsiasi momento."
        }
      },
      {
        "@type": "Question",
        "name": "Quali metodi di pagamento accettate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accettiamo tutte le principali carte di credito (Visa, Mastercard), PayPal, Apple Pay, Google Pay, Klarna e contrassegno."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa succede ai miei dati dopo l'analisi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I tuoi dati genetici vengono conservati in modo sicuro e crittografato. Hai il pieno controllo e puoi richiederne la cancellazione in qualsiasi momento tramite il tuo account o contattando il supporto."
        }
      },
      {
        "@type": "Question",
        "name": "Posso fare il test se sono minorenne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il test è consigliato per persone dai 18 anni in su. Per i minori è necessario il consenso dei genitori o tutori legali."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://test-completo-del-dna.holifya.com"
      }
    ]
  };

  const getSchemas = () => {
    const schemas: any[] = [organizationSchema];
    
    if (type === 'homepage' || type === 'product') {
      schemas.push(productSchema, faqSchema, breadcrumbSchema);
    }
    
    return schemas;
  };

  return (
    <Helmet>
      {getSchemas().map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;

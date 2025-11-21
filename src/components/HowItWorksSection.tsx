
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Ricevi il Kit",
      description: "Ti arriva a casa in 48h, già pronto per l'analisi. Spedizione gratuita e packaging sterile conforme CE-IVD.",
      image: "/lovable-uploads/1-1.webp"
    },
    {
      id: 2,
      title: "Raccogli il Campione",
      description: "Bastano 2 minuti per il prelievo di saliva. Il campione è stabile 7 giorni - nessuna conservazione particolare richiesta.",
      image: "/lovable-uploads/1-2.webp"
    },
    {
      id: 3,
      title: "Analisi nei Laboratori Certificati",
      description: "I nostri laboratori, certificati ISO 9001, analizzano +2000 varianti genetiche con tecnologia NGS su 6 aree: Nutrizione, Sonno, Energia, Intolleranze, Sport, Anti-aging. Ogni campione è anonimo e tracciato fino al risultato.",
      image: "/lovable-uploads/1-3.webp"
    },
    {
      id: 4,
      title: "Ricevi il tuo Piano d'Azione",
      description: "In 15 giorni ricevi il tuo report digitale e un piano pratico per alimentazione, sonno ed energia. Tutti i dati restano anonimi (GDPR) e consultabili nella tua area personale.",
      image: "/lovable-uploads/1-4.webp"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 px-4 bg-[#F8FAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Come funziona Holifya
          </h2>
          <p className="text-2xl font-semibold text-slate-700 mb-4">
            4 step semplici e sicuri
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dal kit al tuo piano d&apos;azione personalizzato.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                    width={400}
                    height={192}
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.id}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://holifya.com/cart/43782964445448:1"
            target="_blank"
            rel="noopener noreferrer"
            className="gtm_addtocart"
          >
            <Button 
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 text-[#1A1A31]"
              style={{ background: '#C4EDFF' }}
            >
              Fai il primo passo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

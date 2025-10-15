
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Ricevi il Kit",
      description: "Ordina online e ricevi il kit a casa in 72 ore con spedizione gratuita",
      image: "/lovable-uploads/e0638d78-febc-4e6c-b542-7a925922877a.png"
    },
    {
      id: 2,
      title: "Raccogli il Campione",
      description: "Semplice campione di saliva in 2 minuti, seguendo le istruzioni incluse",
      image: "/lovable-uploads/99e5d8f0-5559-4501-a827-0c59a2c8b2a1.png"
    },
    {
      id: 3,
      title: "Attendi i Risultati",
      description: "Il laboratorio analizza il tuo DNA con tecnologie all'avanguardia entro 15 giorni",
      image: "/lovable-uploads/646b20c9-bdb9-4390-a2c1-cd35f97dde2b.png"
    },
    {
      id: 4,
      title: "Scopri il tuo Benessere",
      description: "Accedi alla tua area personale e scopri tutti i segreti sul tuo DNA",
      image: "/lovable-uploads/140cc655-21e4-4221-a05c-0604623a8509.png"
    }
  ];

  return (
    <section className="py-8 pt-8 px-4 bg-[#F8FAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Come funziona
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            In soli 4 semplici passaggi scopri i segreti del tuo DNA e inizia 
            il tuo percorso verso una vita più sana e consapevole.
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
      </div>
    </section>
  );
};

export default HowItWorksSection;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Ricevi il Kit",
      description: "Ordina online e ricevi il kit a casa in 72 ore con spedizione gratuita",
      image: "/lovable-uploads/fc3f5485-b98e-4b9e-8a88-9f3de07ef3e8.png"
    },
    {
      id: 2,
      title: "Raccogli il Campione",
      description: "Semplice campione di saliva in 2 minuti, seguendo le istruzioni incluse",
      image: "/lovable-uploads/eaf8527f-d980-4f4d-824f-7127fc45095f.png"
    },
    {
      id: 3,
      title: "Attendi i Risultati",
      description: "Il laboratorio analizza il tuo DNA con tecnologie all'avanguardia entro 15 giorni",
      image: "/lovable-uploads/60a7e2ef-a1b0-40a7-817a-635353f4a26c.png"
    },
    {
      id: 4,
      title: "Scopri il tuo Benessere",
      description: "Accedi alla tua area personale e scopri tutti i segreti sul tuo DNA",
      image: "/lovable-uploads/7c39ab6b-1e6d-4601-b28a-62b0195ba3af.png"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
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
                    loading="lazy"
                    onError={(e) => {
                      console.log('Image failed to load:', step.image);
                      e.currentTarget.style.display = 'none';
                    }}
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

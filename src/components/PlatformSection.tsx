
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Heart, Utensils, Dumbbell, Brain, Shield } from 'lucide-react';

const PlatformSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Completa",
      description: "Visualizza tutti i tuoi dati genetici in un'interfaccia intuitiva e moderna"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Salute Personalizzata",
      description: "Scopri le tue predisposizioni genetiche e ricevi consigli mirati"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Nutrizione su Misura",
      description: "Piano alimentare personalizzato basato sul tuo profilo genetico"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness Ottimizzato",
      description: "Allenamenti efficaci adattati alle tue caratteristiche genetiche"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Insights Cognitivi",
      description: "Comprendi i tuoi tratti mentali e migliora le performance cognitive"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy Garantita",
      description: "I tuoi dati genetici sono protetti con standard di sicurezza bancari"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            La tua piattaforma genetica personale
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Accesso a vita a una piattaforma avanzata che trasforma i tuoi dati genetici 
            in consigli pratici per migliorare la tua salute e il tuo benessere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="Dashboard Holifya"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </CardContent>
            </Card>
            <p className="text-center text-slate-600 italic">
              La dashboard principale dove potrai esplorare tutti i tuoi risultati genetici
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

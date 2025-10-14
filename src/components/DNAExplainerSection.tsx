import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Apple } from 'lucide-react';

const DNAExplainerSection = () => {
  const examples = [
    {
      gene: "CYP1A2",
      effect: "Metabolizzazione lenta della caffeina",
      action: "Niente caffè dopo le 14:00, preferisci tè leggero",
      icon: Coffee,
      color: "from-amber-500 to-orange-500"
    },
    {
      gene: "FTO",
      effect: "Tendenza al sovrappeso",
      action: "Mangia in questo ordine: verdure a inizio pasto, poi piatto proteico e carboidrati alla fine (per evitare picco glicemico)",
      icon: Apple,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const scrollToComparison = () => {
    const comparisonSection = document.getElementById('comparison-section');
    if (comparisonSection) {
      comparisonSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section className="px-4 bg-white py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Cos'è il Test del DNA e perché farlo
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600">
            <p className="text-2xl font-semibold text-slate-900">
              Il tuo DNA è il manuale d'uso del tuo corpo.
            </p>
            <p className="text-xl">
              Piccole varianti genetiche influenzano metabolismo, fame, sonno, sport, stress.
            </p>
            <p className="text-xl">
              Conoscendole, trasformiamo i dati in azioni concrete su alimentazione, integrazione e stile di vita.
            </p>
            <p className="text-lg font-medium text-slate-700 mt-8">
              Tecnologia NGS su 2000+ polimorfismi, risultati chiari e applicabili in 10 giorni.
            </p>
          </div>
        </div>

        {/* 3-Step Infographic */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Come funziona in 3 passaggi
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🧬</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Gene</h4>
              <p className="text-slate-600 text-base">
                Analizziamo il tuo DNA per identificare varianti genetiche specifiche
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">⚡</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Effetto</h4>
              <p className="text-slate-600 text-base">
                Comprendiamo come influenzano il tuo metabolismo e benessere
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">✅</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Azione</h4>
              <p className="text-slate-600 text-base">
                Ti forniamo strategie concrete e personalizzate da applicare subito
              </p>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="space-y-8 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Esempi pratici
          </h3>
          
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[200px,1fr] gap-0">
                    {/* Icon Section */}
                    <div className={`bg-gradient-to-br ${example.color} p-8 flex flex-col items-center justify-center`}>
                      <IconComponent className="w-16 h-16 text-white mb-4" />
                      <div className="text-white font-bold text-xl text-center">
                        {example.gene}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 bg-white">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            Effetto
                          </div>
                          <div className="text-slate-900 text-lg font-medium">
                            {example.effect}
                          </div>
                        </div>
                        
                        <div className="hidden md:block">
                          <ArrowRight className="w-8 h-8 text-emerald-500" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                            Azione
                          </div>
                          <div className="text-slate-900 text-base font-semibold leading-relaxed">
                            {example.action}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={scrollToComparison}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
          >
            Scopri come funziona
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DNAExplainerSection;

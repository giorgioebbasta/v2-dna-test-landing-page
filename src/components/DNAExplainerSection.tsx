import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const DNAExplainerSection = () => {
  const examples = [
    {
      gene: "CYP1A2",
      effect: "Metabolizzazione lenta della caffeina",
      action: "Niente caffè dopo le 14:00, preferisci tè leggero"
    },
    {
      gene: "FTO",
      effect: "Tendenza al sovrappeso",
      action: "Mangia in questo ordine: verdure a inizio pasto, poi piatto proteico e carboidrati alla fine (per evitare picco glicemico)"
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
    <section className="px-4 bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Cos'è il Test del DNA e perché farlo
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600">
            <p className="font-semibold text-xl text-slate-900">
              Il tuo DNA è il manuale d'uso del tuo corpo.
            </p>
            <p>
              Piccole varianti genetiche influenzano metabolismo, fame, sonno, sport, stress.
            </p>
            <p>
              Conoscendole, trasformiamo i dati in azioni concrete su alimentazione, integrazione e stile di vita.
            </p>
            <p className="font-medium text-slate-700">
              Tecnologia NGS su 2000+ polimorfismi, risultati chiari e applicabili in 10 giorni.
            </p>
          </div>
        </div>

        {/* 3-Step Infographic */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Come funziona in 3 passaggi
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Step 1 */}
            <Card className="relative overflow-hidden border-2 border-slate-100 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
                <div className="text-4xl mb-4">🧬</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Gene</h4>
                <p className="text-slate-600">
                  Analizziamo il tuo DNA per identificare varianti genetiche specifiche
                </p>
              </CardContent>
            </Card>

            {/* Arrow connector - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-500" />
            </div>

            {/* Step 2 */}
            <Card className="relative overflow-hidden border-2 border-slate-100 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Effetto</h4>
                <p className="text-slate-600">
                  Comprendiamo come influenzano il tuo metabolismo e benessere
                </p>
              </CardContent>
            </Card>

            {/* Arrow connector - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-500" />
            </div>

            {/* Step 3 */}
            <Card className="relative overflow-hidden border-2 border-slate-100 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Azione</h4>
                <p className="text-slate-600">
                  Ti forniamo strategie concrete e personalizzate da applicare subito
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Examples */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Esempi pratici
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {examples.map((example, index) => (
                <Card key={index} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {/* Icon Header */}
                    <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="text-5xl">{index === 0 ? '☕' : '🍎'}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Gene */}
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <div>
                          <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Gene</div>
                          <div className="font-bold text-slate-900 text-xl">{example.gene}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center py-2">
                        <ArrowRight className="w-5 h-5 text-slate-300" />
                      </div>
                      
                      {/* Effect */}
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                        <div>
                          <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">Effetto</div>
                          <div className="text-slate-700 font-medium">{example.effect}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center py-2">
                        <ArrowRight className="w-5 h-5 text-slate-300" />
                      </div>
                      
                      {/* Action */}
                      <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">Azione</div>
                        <div className="text-slate-900 font-semibold leading-relaxed">{example.action}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={scrollToComparison}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg border-0"
          >
            Scopri come funziona
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DNAExplainerSection;

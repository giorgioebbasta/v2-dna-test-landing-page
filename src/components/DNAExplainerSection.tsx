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
    <section className="px-4 bg-[#F8FAFA] pt-8 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Cos'è il Test del DNA e perché farlo
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600">
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <em>Il tuo DNA è il manuale d'uso del tuo corpo.</em>
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
            <Card className="relative overflow-hidden border-2 border-slate-100 hover:border-[#FCE8E6] transition-colors">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FCE8E6] opacity-50 rounded-bl-full"></div>
                <div className="text-4xl mb-4">🧬</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Gene</h4>
                <p className="text-slate-600">
                  Analizziamo il tuo DNA per identificare varianti genetiche specifiche.
                </p>
              </CardContent>
            </Card>

            {/* Arrow connector - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-500" />
            </div>

            {/* Step 2 */}
            <Card className="relative overflow-hidden border-2 border-slate-100 hover:border-[#FCE8E6] transition-colors">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FCE8E6] opacity-50 rounded-bl-full"></div>
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Effetto</h4>
                <p className="text-slate-600">
                  Comprendiamo come influenzano il tuo metabolismo e benessere.
                </p>
              </CardContent>
            </Card>

            {/* Arrow connector - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-500" />
            </div>

            {/* Step 3 */}
            <Card className="relative overflow-hidden border-2 border-slate-100 hover:border-[#FCE8E6] transition-colors">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FCE8E6] opacity-50 rounded-bl-full"></div>
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Azione</h4>
                <p className="text-slate-600">
                  Ti forniamo strategie concrete e personalizzate da applicare subito.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <Button 
              onClick={scrollToComparison}
              size="lg"
              className="bg-gradient-to-r from-[#FCE8E6] to-[#fbd5d1] hover:from-[#fbd5d1] hover:to-[#f9c2bc] text-[#1A1A31] px-8 py-4 text-lg font-semibold shadow-lg border border-slate-200"
            >
              Scopri come funziona
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Examples */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center text-slate-900 mb-6">
              Esempi pratici
            </h3>
            
            {examples.map((example, index) => (
              <Card key={index} className={`border-l-4 shadow-md ${index === 0 ? 'border-l-[#E8FFC9]' : 'border-l-[#FCE8E6]'}`}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs font-semibold text-[#0B4650] uppercase tracking-wide mb-1">
                        Gene
                      </div>
                      <div className="font-bold text-slate-900 text-lg">
                        {example.gene}
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-[#DCFE54] uppercase tracking-wide mb-1">
                        Effetto
                      </div>
                      <div className="text-slate-700">
                        {example.effect}
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                    
                    <div className="md:col-span-1">
                      <div className="text-xs font-semibold text-[#994AFF] uppercase tracking-wide mb-1">
                        Azione
                      </div>
                      <div className="text-slate-900 font-medium">
                        {example.action}
                      </div>
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

export default DNAExplainerSection;

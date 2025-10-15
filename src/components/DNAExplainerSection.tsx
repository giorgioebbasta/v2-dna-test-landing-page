import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  return (
    <section className="px-4 bg-[#F8FAFA] py-16">
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
          
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 mb-12 items-center">
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

            {/* Arrow connector */}
            <div className="flex items-center justify-center md:px-2 rotate-90 md:rotate-0">
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

            {/* Arrow connector */}
            <div className="flex items-center justify-center md:px-2 rotate-90 md:rotate-0">
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

          {/* Examples */}
          <div id="esempi-pratici">
            <h3 className="text-xl font-bold text-center text-slate-900 mb-6">
              Esempi pratici
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <div key={index} className="relative">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {/* Slide 1: Gene */}
                    <CarouselItem>
                      <Card className="border-l-4 shadow-md border-l-[#FCE8E6] relative">
                        <div className="absolute top-4 left-4">
                          <div className="w-8 h-8 rounded-full bg-[#FCE8E6] flex items-center justify-center">
                            <span className="text-sm font-bold text-[#1A1A31]">1</span>
                          </div>
                        </div>
                        <CardContent className="p-8 pt-16 min-h-[200px] flex flex-col justify-center">
                          <div className="text-center">
                            <div className="text-xs font-bold text-[#1A1A31] uppercase tracking-wide mb-4">
                              Gene
                            </div>
                            <div className="text-xl text-slate-900 font-semibold mb-3">
                              {example.gene}
                            </div>
                            <p className="text-xs text-slate-600">Analizzato dal nostro test</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    {/* Slide 2: Effetto */}
                    <CarouselItem>
                      <Card className="border-l-4 shadow-md border-l-[#FCE8E6] relative">
                        <div className="absolute top-4 left-4">
                          <div className="w-8 h-8 rounded-full bg-[#FCE8E6] flex items-center justify-center">
                            <span className="text-sm font-bold text-[#1A1A31]">2</span>
                          </div>
                        </div>
                        <CardContent className="p-8 pt-16 min-h-[200px] flex flex-col justify-center">
                          <div className="text-center">
                            <div className="text-xs font-bold text-[#1A1A31] uppercase tracking-wide mb-4">
                              Effetto
                            </div>
                            <div className="text-lg text-slate-700 mb-3">
                              {example.effect}
                            </div>
                            <p className="text-xs text-slate-600">Studiato dai nostri medici</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    {/* Slide 3: Azione */}
                    <CarouselItem>
                      <Card className="border-l-4 shadow-md border-l-[#FCE8E6] relative">
                        <div className="absolute top-4 left-4">
                          <div className="w-8 h-8 rounded-full bg-[#FCE8E6] flex items-center justify-center">
                            <span className="text-sm font-bold text-[#1A1A31]">3</span>
                          </div>
                        </div>
                        <CardContent className="p-8 pt-16 min-h-[200px] flex flex-col justify-center">
                          <div className="text-center">
                            <div className="text-xs font-semibold text-[#994AFF] uppercase tracking-wide mb-4">
                              Azione
                            </div>
                            <div className="text-lg text-slate-900 font-medium mb-3">
                              {example.action}
                            </div>
                            <p className="text-xs text-slate-600">Scoperto con il nostro report</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://holifya.com/cart/43782964445448:1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#FCE8E6] to-[#fbd5d1] hover:from-[#fbd5d1] hover:to-[#f9c2bc] text-[#1A1A31] px-8 py-4 text-lg font-semibold shadow-lg border border-slate-200"
              >
                Scopri come funziona
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNAExplainerSection;

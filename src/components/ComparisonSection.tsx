
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from 'lucide-react';

const ComparisonSection = () => {
  const testAreas = [
    { icon: "🧠", name: "Metabolismo e nutrizione", competitorPrice: "€199" },
    { icon: "🥛", name: "Intolleranze e sensibilità", competitorPrice: "€229" },
    { icon: "❤️", name: "Prevenzione e salute", competitorPrice: "€219" },
    { icon: "🧬", name: "Anti-aging e benessere cellulare", competitorPrice: "€189" },
    { icon: "🏃", name: "Sport e performance", competitorPrice: "€199" },
    { icon: "🧘", name: "Stress e stile di vita", competitorPrice: "€209" }
  ];

  const totalCompetitorPrice = 1244;
  const holifyaPrice = 299;
  const savings = totalCompetitorPrice - holifyaPrice;

  return (
    <section id="comparison-section" className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            *Perché pagare di più, per meno?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Altri competitor ti vendono test separati per ogni area.
            Con Holifya ottieni tutto in un unico test completo.
          </p>
        </div>

        <Tabs defaultValue="comparison" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="comparison">Confronto Prezzi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="comparison" className="mt-6">
            <Card className="overflow-hidden ml-2">
              <CardHeader className="bg-slate-50 p-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-left">
                    <CardTitle className="text-lg text-slate-900">Area di analisi</CardTitle>
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-lg text-red-600">Altri Competitor</CardTitle>
                    <p className="text-xs text-slate-600 mt-1">Test separati</p>
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-lg text-emerald-600">Holifya</CardTitle>
                    <p className="text-xs text-slate-600 mt-1">Un test completo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {testAreas.map((area, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 items-center py-4 px-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{area.icon}</span>
                        <span className="text-sm font-medium text-slate-700">{area.name}</span>
                      </div>
                      <div className="text-center">
                        <span className="font-semibold text-red-600">
                          {area.competitorPrice}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                          <Check className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Total row */}
                  <div className="grid grid-cols-3 gap-4 items-center py-6 px-6 bg-slate-100 font-bold">
                    <div className="text-slate-900 text-lg">
                      Totale:
                    </div>
                    <div className="text-center">
                      <span className="text-2xl text-red-600">€{totalCompetitorPrice}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl text-emerald-600">€{holifyaPrice}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Savings Highlight */}
        <div className="text-center mt-8">
          <Card className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-lg font-medium">Risparmia con Holifya</p>
                <p className="text-4xl font-bold">oltre €{savings}</p>
                <div className="text-emerald-100 leading-relaxed">
                  <p>Un solo test. Un'analisi completa.</p>
                  <p>Il miglior prezzo.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://holifya.com/cart/43782964445448:1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Ordina ora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

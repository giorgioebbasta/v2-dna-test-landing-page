
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';

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
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Perché pagare di più per meno?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Altri competitor ti vendono test separati per ogni area. Con Holifya ottieni tutto in un unico test completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Competitors Card */}
          <Card className="border-2 border-red-200 relative">
            <CardHeader className="text-center bg-red-50 rounded-t-lg">
              <CardTitle className="text-slate-900 flex items-center justify-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                Altri Competitor
              </CardTitle>
              <p className="text-sm text-slate-600">Test separati per ogni area</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {testAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{area.icon}</span>
                      <span className="text-sm text-slate-700">{area.name}</span>
                    </div>
                    <span className="font-semibold text-slate-900">{area.competitorPrice}</span>
                  </div>
                ))}
                <div className="pt-4 border-t-2 border-red-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Totale:</span>
                    <span className="font-bold text-2xl text-red-600">€{totalCompetitorPrice}+</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Holifya Card */}
          <Card className="border-2 border-emerald-200 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1">
              MIGLIORE OFFERTA
            </Badge>
            <CardHeader className="text-center bg-emerald-50 rounded-t-lg">
              <CardTitle className="text-slate-900 flex items-center justify-center gap-2">
                <Check className="w-6 h-6 text-emerald-500" />
                Holifya
              </CardTitle>
              <p className="text-sm text-slate-600">Un test completo per tutto</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {testAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{area.icon}</span>
                      <span className="text-sm text-slate-700">{area.name}</span>
                    </div>
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                ))}
                <div className="pt-4 border-t-2 border-emerald-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Totale:</span>
                    <span className="font-bold text-3xl text-emerald-600">€{holifyaPrice}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Highlight */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-lg font-medium">Risparmia con Holifya</p>
                <p className="text-4xl font-bold">€{savings}+</p>
                <p className="text-emerald-100">Stessa analisi completa, prezzo imbattibile</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Ordina ora il tuo test completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

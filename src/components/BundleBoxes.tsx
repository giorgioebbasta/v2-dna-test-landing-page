import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const BundleBoxes = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Scegli il tuo percorso
          </h2>
          <p className="text-xl text-slate-600">
            Due opzioni complete per il tuo benessere
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bundle 1 */}
          <Card className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-slate-50 pb-4">
              <CardTitle className="text-2xl text-slate-900 text-center">
                Test DNA Base
              </CardTitle>
              <div className="text-center mt-2">
                <span className="text-sm text-slate-500 line-through">€349</span>
                <span className="text-4xl font-bold text-emerald-600 ml-2">€289</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Analisi genetica completa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Report personalizzato</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">6 aree di analisi</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Piano alimentare e sportivo</span>
                </li>
              </ul>
              <a 
                href="https://holifya.com/cart/43782964445448:1"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  Acquista ora
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Bundle 2 */}
          <Card className="border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Più popolare
              </span>
            </div>
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 pb-4">
              <CardTitle className="text-2xl text-slate-900 text-center">
                Test DNA Premium
              </CardTitle>
              <div className="text-center mt-2">
                <span className="text-sm text-slate-500 line-through">€449</span>
                <span className="text-4xl font-bold text-purple-600 ml-2">€349</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tutto del pacchetto Base</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Consulenza nutrizionale inclusa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Supporto prioritario</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Aggiornamenti gratuiti per 1 anno</span>
                </li>
              </ul>
              <a 
                href="https://holifya.com/cart/43782964445448:1"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3">
                  Acquista ora
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BundleBoxes;

import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
const ReviewsSection = () => {
  const reviews = [{
    id: 1,
    name: "Sara M.",
    rating: 5,
    comment: "Incredibile! Ho scoperto di avere un metabolismo lento per i carboidrati e ora finalmente riesco a perdere peso seguendo le indicazioni del test. In 3 mesi ho perso 8 kg!",
    date: "2 settimane fa"
  }, {
    id: 2,
    name: "Luca R.",
    rating: 5,
    comment: "Il test mi ha salvato la vita. Ho scoperto di essere intollerante al nichel e questo spiegava tutti i miei problemi digestivi. Ora sto benissimo e ho più energia.",
    date: "1 mese fa"
  }, {
    id: 3,
    name: "Francesca T.",
    rating: 5,
    comment: "Fantastico! Grazie al test ho capito che devo assumere più vitamina D e acido folico. Il mio medico era sorpreso dai risultati così dettagliati.",
    date: "3 settimane fa"
  }, {
    id: 4,
    name: "Marco P.",
    rating: 5,
    comment: "Ho sempre avuto problemi con lo sport, ora so che il mio corpo risponde meglio agli allenamenti di resistenza. I risultati si vedono già!",
    date: "1 mese fa"
  }];
  return <section className="px-4 bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <a href="https://it.trustpilot.com/review/holifya.com" target="_blank" rel="noopener" className="inline-flex flex-col items-center justify-center space-y-4 mb-4 hover:opacity-80 transition-opacity">
            <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" alt="Trustpilot" className="h-8" />
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />)}
              </div>
              <span className="text-lg font-semibold text-slate-700">4.8/5</span>
            </div>
          </a>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Oltre 3.000 utenti soddisfatti
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Scopri cosa dicono di noi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map(review => <Card key={review.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Verificato da Trustpilot</span>
            </div>
            <div className="text-sm text-slate-500">
              Basato su +100 recensioni
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ReviewsSection;
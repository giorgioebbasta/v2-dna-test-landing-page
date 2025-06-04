
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Marco Rossi",
      rating: 5,
      comment: "Incredibile! Ho scoperto cose sul mio DNA che non sapevo. I consigli nutrizionali hanno cambiato la mia vita.",
      date: "2 settimane fa"
    },
    {
      id: 2,
      name: "Giulia Bianchi",
      rating: 5,
      comment: "Servizio impeccabile, risultati dettagliati e supporto clienti fantastico. Consiglio vivamente!",
      date: "1 mese fa"
    },
    {
      id: 3,
      name: "Alessandro M.",
      rating: 5,
      comment: "La piattaforma è intuitiva e i report sono molto chiari. Finalmente capisco il mio metabolismo!",
      date: "3 settimane fa"
    },
    {
      id: 4,
      name: "Francesca T.",
      rating: 5,
      comment: "Ho fatto il test per curiosità e ora seguo un piano alimentare personalizzato. Risultati sorprendenti!",
      date: "1 settimana fa"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <a 
            href="https://it.trustpilot.com/review/holifya.com" 
            target="_blank" 
            rel="noopener"
            className="inline-flex items-center justify-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" alt="Trustpilot" className="h-8" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-700">4.8/5</span>
          </a>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Oltre 50.000 clienti soddisfatti
          </h2>
          <p className="text-xl text-slate-600">
            Scopri cosa dicono i nostri clienti del Test DNA Holifya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Verificato da Trustpilot</span>
            </div>
            <div className="text-sm text-slate-500">
              Basato su 12.847 recensioni
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

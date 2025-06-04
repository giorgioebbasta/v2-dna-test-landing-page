
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Giulia R.",
      rating: 5,
      comment: "Finalmente ho capito perché non riuscivo a perdere peso! Il test ha rivelato che il mio metabolismo dei carboidrati è lento. Ora seguo le indicazioni e sto vedendo risultati incredibili.",
      date: "1 settimana fa"
    },
    {
      id: 2,
      name: "Marco T.",
      rating: 5,
      comment: "Ho scoperto di essere intollerante al lattosio e al nichel. Dopo aver eliminato questi alimenti dalla mia dieta, i problemi digestivi sono spariti completamente.",
      date: "2 settimane fa"
    },
    {
      id: 3,
      name: "Elena B.",
      rating: 5,
      comment: "Il report è dettagliatissimo e molto chiaro. Ho imparato tanto sul mio DNA e ora so esattamente quali vitamine assumere e come gestire lo stress.",
      date: "3 settimane fa"
    },
    {
      id: 4,
      name: "Alessandro M.",
      rating: 5,
      comment: "Consiglio vivamente questo test! Ha cambiato completamente il mio approccio all'alimentazione e all'allenamento. I risultati parlano da soli.",
      date: "1 mese fa"
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
              Basato su +100 recensioni
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ReviewsSection = () => {
  const reviews = [{
    id: 1,
    name: "Sara M.",
    rating: 5,
    comment: "In 3 settimane ho capito perché non perdevo peso.",
    date: "2 settimane fa"
  }, {
    id: 2,
    name: "Luca R.",
    rating: 5,
    comment: "Ho scoperto l'intolleranza che mi causava gonfiore.",
    date: "1 mese fa"
  }, {
    id: 3,
    name: "Francesca T.",
    rating: 5,
    comment: "Finalmente dormo bene ogni notte.",
    date: "3 settimane fa"
  }];

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
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
    </Card>
  );

  return <section className="px-4 bg-white py-12 md:py-16">
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
          <p className="text-xl text-slate-600">
            Oltre 3.000 utenti soddisfatti
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-sm mx-auto">
            <CarouselContent className="-ml-2">
              {reviews.map(review => (
                <CarouselItem key={review.id} className="pl-2">
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

      </div>
    </section>;
};
export default ReviewsSection;
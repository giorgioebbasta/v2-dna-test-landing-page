import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import OptimizedVideo from '@/components/optimized/OptimizedVideo';
const TestimonialsSection = () => {
  const {
    elementRef,
    isIntersecting
  } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px',
    triggerOnce: true
  });
  const testimonials = [{
    id: 1,
    embedUrl: "https://www.youtube.com/embed/zFzfl18iKIg",
    name: "Francesco V.",
    description: "Mangiavo bene, mi allenavo, ma la bilancia non si muoveva. Poi ho fatto il test DNA Holifya e ho scoperto che il mio metabolismo è geneticamente lento: ora so cosa funziona davvero per il mio corpo e finalmente vedo risultati.",
    thumbnailUrl: "https://img.youtube.com/vi/zFzfl18iKIg/maxresdefault.jpg"
  }, {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/28IhrnDW1p4",
    name: "Luciana C.",
    description: "Bevevo caffè per ricaricarmi, ma mi sentivo ancora più stanca e agitata. Poi ho fatto il test DNA Holifya e ho scoperto che sono ipersensibile alla caffeina: da quando l'ho ridotta, dormo meglio, ho più energia e mi sento finalmente in equilibrio.",
    thumbnailUrl: "https://img.youtube.com/vi/28IhrnDW1p4/maxresdefault.jpg"
  }, {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/2m6h_YbsJbI",
    name: "Elisa Z.",
    description: "Mi svegliavo stanca, andavo a dormire stanca, e nessuno capiva perché. Poi ho fatto il test DNA Holifya e ho scoperto che alcuni cibi mi infiammavano e rallentavano il mio metabolismo: ora so cosa evitare, ho più energia e mi sento finalmente leggera.",
    thumbnailUrl: "https://img.youtube.com/vi/2m6h_YbsJbI/maxresdefault.jpg"
  }];
  return <section ref={elementRef} className="pt-0 pb-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-base text-slate-500 font-semibold">Storie vere di persone che hanno trasformato la loro salute con il test del DNA Holifya.</p>
        </div>

        <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      {isIntersecting ? <OptimizedVideo embedUrl={testimonial.embedUrl} title={`Testimonianza ${testimonial.name}`} thumbnailUrl={testimonial.thumbnailUrl} /> : <div className="w-full aspect-[9/16] md:aspect-video bg-slate-200 animate-pulse" />}
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-slate-900 mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-slate-600">"{testimonial.description}"</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="lg:hidden left-2" />
          <CarouselNext className="lg:hidden right-2" />
        </Carousel>

      </div>
    </section>;
};
export default TestimonialsSection;
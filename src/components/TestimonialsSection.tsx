
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/zFzfl18iKIg",
      name: "Francesco V.",
      description: "Grazie al test DNA ho scoperto perchè il mio peso non scendesse"
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/28IhrnDW1p4",
      name: "Luciana C.",
      description: "Non dormivo bene perchè ero sensibile alla caffeina"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/2m6h_YbsJbI",
      name: "Elisa Z.",
      description: "Dopo il test ho dato una spiegazione a tutta quella stanchezza"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Testimonianze di chi ha cambiato vita
          </h2>
          <p className="text-xl text-slate-600">
            Ascolta le storie di chi ha scelto di stare meglio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                index === 2 ? 'hidden lg:block' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <iframe
                    src={testimonial.embedUrl}
                    title={`Testimonianza ${testimonial.name}`}
                    className="w-full aspect-[9/16] md:aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600">{testimonial.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Storie vere di persone che hanno trasformato la loro salute con il test del DNA Holifya
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

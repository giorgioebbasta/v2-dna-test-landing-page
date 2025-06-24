
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/zFzfl18iKIg?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0",
      name: "Francesco V.",
      description: "Grazie al test DNA ho scoperto perchè il mio peso non scendesse"
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/28IhrnDW1p4?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0",
      name: "Luciana C.",
      description: "Non dormivo bene perchè ero sensibile alla caffeina"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/2m6h_YbsJbI?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0",
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
            Ascolta le storie di trasformazione dei nostri clienti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                index === 2 ? 'hidden lg:block' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg bg-black">
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-t-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <iframe
                    src={testimonial.embedUrl}
                    title={`Testimonianza ${testimonial.name}`}
                    className="w-full aspect-[9/16] md:aspect-video border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center bg-slate-50 rounded-b-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600">{testimonial.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Storie vere di persone che hanno trasformato la loro salute
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

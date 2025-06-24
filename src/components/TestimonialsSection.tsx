
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      id: 1,
      embedUrl: "https://youtube.com/shorts/zFzfl18iKIg",
      name: "Francesco V.",
      description: "Grazie al test DNA ho scoperto perchè il mio peso non scendesse"
    },
    {
      id: 2,
      embedUrl: "https://youtube.com/shorts/28IhrnDW1p4",
      name: "Luciana C.",
      description: "Non dormivo bene perchè ero sensibile alla caffeina"
    },
    {
      id: 3,
      embedUrl: "https://youtube.com/shorts/2m6h_YbsJbI",
      name: "Elisa Z.",
      description: "Dopo il test ho dato una spiegazione a tutta quella stanchezza"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideos) {
            setShouldLoadVideos(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );

    // Look for the comparison section to trigger video loading
    const comparisonSection = document.getElementById('comparison-section');
    if (comparisonSection) {
      observer.observe(comparisonSection);
    } else if (sectionRef.current) {
      // Fallback: observe this section if comparison section is not found
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideos]);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
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
                  {shouldLoadVideos ? (
                    <iframe
                      src={testimonial.embedUrl}
                      title={`Testimonianza ${testimonial.name}`}
                      className="w-full aspect-[9/16] md:aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full aspect-[9/16] md:aspect-video bg-slate-200 flex items-center justify-center">
                      <div className="text-slate-500 text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-slate-300 rounded-full flex items-center justify-center">
                          ▶
                        </div>
                        <p className="text-sm">Video in caricamento...</p>
                      </div>
                    </div>
                  )}
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


import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/quadrato-photoroom.webp",
      title: "Ricevi il Tuo Kit",
      description: "Kit di raccolta campione certificato"
    },
    {
      id: 2,
      image: "/lovable-uploads/group-41.webp",
      title: "Test Salivare Semplice",
      description: "Semplice campione di saliva da casa tua"
    },
    {
      id: 3,
      image: "/lovable-uploads/group-45.webp",
      title: "Analisi Certificata",
      description: "Ordina e ricevi il kit a casa in 72 ore"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleImageLoad = useCallback((slideId: number) => {
    setImagesLoaded(prev => new Set(prev).add(slideId));
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-80 object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                width={400}
                height={320}
                onLoad={() => handleImageLoad(slide.id)}
                style={{
                  opacity: imagesLoaded.has(slide.id) ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
              {!imagesLoaded.has(slide.id) && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-white/90 text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 shadow-lg"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 shadow-lg"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-indigo-600 scale-110' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

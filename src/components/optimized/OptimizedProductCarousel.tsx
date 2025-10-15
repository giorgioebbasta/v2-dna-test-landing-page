
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ResponsiveImage from './ResponsiveImage';

const OptimizedProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());

  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/quadrato.webp",
      title: "Kit a casa in 48h"
    },
    {
      id: 2,
      image: "/lovable-uploads/group-41.webp",
      title: "Supporto umano 7/7"
    },
    {
      id: 3,
      image: "/lovable-uploads/group-45.webp",
      title: "Laboratori CE-IVD / ISO 9001"
    }
  ];

  // Preload next and previous images
  const preloadAdjacentImages = useCallback((currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    
    [nextIndex, prevIndex].forEach(index => {
      if (!preloadedImages.has(index)) {
        const img = new Image();
        img.src = slides[index].image;
        img.onload = () => {
          setPreloadedImages(prev => new Set(prev).add(index));
        };
      }
    });
  }, [slides, preloadedImages]);

  useEffect(() => {
    // Preload current and adjacent images
    preloadAdjacentImages(currentSlide);
  }, [currentSlide, preloadAdjacentImages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleImageLoad = (slideId: number) => {
    setPreloadedImages(prev => new Set(prev).add(slideId - 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <ResponsiveImage
                src={slide.image}
                alt={slide.title}
                className="w-full h-80 object-cover"
                priority={index === 0}
                onLoad={() => handleImageLoad(slide.id)}
                width={400}
                height={320}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pb-6">
                <h3 className="text-white text-xl font-bold text-center">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm"
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

export default OptimizedProductCarousel;

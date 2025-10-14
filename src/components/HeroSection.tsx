
import React from 'react';
import HeroBanner from '@/components/hero/HeroBanner';
import BenefitsList from '@/components/hero/BenefitsList';
import ProductPricing from '@/components/hero/ProductPricing';
import PaymentMethods from '@/components/hero/PaymentMethods';
import QuantitySelector from '@/components/shared/QuantitySelector';
import LazyProductCarousel from '@/components/optimized/LazyProductCarousel';
import ImagePreloader from '@/components/optimized/ImagePreloader';
import { useQuantity } from '@/hooks/useQuantity';

const HeroSection = ({ className }: { className?: string }) => {
  const { quantity, increaseQuantity, decreaseQuantity, handleOrder } = useQuantity(1);

  // Preload critical images for faster initial load
  const priorityImages = [
    '/lovable-uploads/f2d314d3-ab01-49c2-84e3-f6b59b117dbf.png',
    '/lovable-uploads/e0638d78-febc-4e6c-b542-7a925922877a.png'
  ];

  return (
    <section className={`relative py-8 px-4 -mt-6 lg:mt-0 lg:pt-2 ${className || ''}`} style={{ backgroundColor: '#F8FAFA' }}>
      <ImagePreloader images={priorityImages} priority />
      
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 animate-fade-in">
          <HeroBanner />
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <LazyProductCarousel />
          </div>
          
          <div className="max-w-md">
            <QuantitySelector
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onOrder={handleOrder}
            />
          </div>

          <BenefitsList />
          
          <PaymentMethods />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block animate-fade-in space-y-6">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* Left side - Carousel */}
            <div className="animate-fade-in">
              <LazyProductCarousel />
            </div>
            
            {/* Right side - Text content and benefits */}
            <div className="space-y-6 animate-fade-in">
              <HeroBanner />
              <BenefitsList />
            </div>
          </div>
          
          {/* Full width quantity selector */}
          <div className="w-[70%] mx-auto">
            <QuantitySelector
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onOrder={handleOrder}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

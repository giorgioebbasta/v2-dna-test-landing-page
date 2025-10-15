
import React from 'react';
import HeroBanner from '@/components/hero/HeroBanner';
import PriceCard from '@/components/shared/PriceCard';
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
          
          {/* Feature points - Mobile & Tablet only */}
          <div className="flex flex-col gap-1 max-w-lg mx-auto px-4 -mt-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm text-foreground/80">Kit a casa in 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm text-foreground/80">Supporto umano 7/7</span>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
              <span className="text-sm text-foreground/80">Laboratori CE-IVD / ISO 9001</span>
            </div>
          </div>
          
          <div className="max-w-md md:mx-auto">
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
        <div className="hidden lg:block space-y-6">
          {/* Top section - 2 columns */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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

          {/* Bottom section - Full width container with 3 boxes - all same height */}
          <div className="flex gap-4 animate-fade-in items-stretch">
            {/* Box 1: Quantity Selector - takes more space */}
            <div className="flex-[2]">
              <QuantitySelector
                quantity={quantity}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onOrder={handleOrder}
              />
            </div>

            {/* Box 2: 1 Test Package - narrower */}
            <div className="flex-1">
              <PriceCard
                name="1 Test del DNA"
                currentPrice={289}
                originalPrice={349}
                savings={60}
                url="https://holifya.com/cart/43782964445448:1"
                horizontal
              />
            </div>

            {/* Box 3: 2 Tests Package - narrower */}
            <div className="flex-1">
              <PriceCard
                name="2 Test del DNA"
                currentPrice={499}
                originalPrice={698}
                savings={199}
                url="https://holifya.com/cart/43782964445448:2"
                horizontal
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

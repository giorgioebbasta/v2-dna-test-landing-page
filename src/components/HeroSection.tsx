
import React from 'react';
import DefaultHeroBanner from '@/components/hero/HeroBanner';
import PriceCard from '@/components/shared/PriceCard';
import BenefitsList from '@/components/hero/BenefitsList';
import ProductPricing from '@/components/hero/ProductPricing';
import PaymentMethods from '@/components/hero/PaymentMethods';
import QuantitySelector from '@/components/shared/QuantitySelector';
import LazyProductCarousel from '@/components/optimized/LazyProductCarousel';
import ImagePreloader from '@/components/optimized/ImagePreloader';
import { useQuantity } from '@/hooks/useQuantity';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = ({ className, heroBannerComponent }: { className?: string; heroBannerComponent?: React.ComponentType }) => {
  const { quantity, increaseQuantity, decreaseQuantity, handleOrder } = useQuantity(1);
  const HeroBanner = heroBannerComponent || DefaultHeroBanner;

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

          {/* Mobile Pricing Boxes */}
          <div className="max-w-md md:mx-auto flex gap-2">
            {/* Box 1: 1 Test */}
            <Card 
              className="gtm_addtocart flex-1 border-2 border-[#1A1A31] hover:border-[#1A1A31]/80 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => window.open('https://holifya.com/cart/43782964445448:1', '_blank', 'noopener,noreferrer')}
            >
              <CardContent className="p-2 flex flex-col items-center justify-center text-center">
                <span className="font-semibold text-slate-900 text-sm">1 Test</span>
                <span className="text-lg font-bold text-[#0B4650]">€249</span>
              </CardContent>
            </Card>

            {/* Box 2: 2 Test - Promo Natale */}
            <Card 
              className="gtm_addtocart flex-1 border-2 border-[#1E792C] bg-gradient-to-b from-green-50/50 to-white shadow-md shadow-green-100 hover:border-[#1E792C]/80 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              onClick={() => window.open('https://holifya.com/cart/43782964445448:2', '_blank', 'noopener,noreferrer')}
            >
              <CardContent className="p-2 pb-5 flex flex-col items-center justify-center text-center">
                <span className="font-semibold text-slate-900 text-sm">2 Test</span>
                <span className="text-lg font-bold text-[#0B4650]">€399</span>
              </CardContent>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#C30F16] text-white px-1.5 py-0.5 text-[10px] font-bold rounded-t-md whitespace-nowrap">
                Promo Natale
              </div>
            </Card>

            {/* Box 3: 3 Test */}
            <Card 
              className="gtm_addtocart flex-1 border-2 border-[#1A1A31] hover:border-[#1A1A31]/80 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => window.open('https://holifya.com/cart/43782964445448:3', '_blank', 'noopener,noreferrer')}
            >
              <CardContent className="p-2 flex flex-col items-center justify-center text-center">
                <span className="font-semibold text-slate-900 text-sm">3 Test</span>
                <span className="text-lg font-bold text-[#0B4650]">€649</span>
              </CardContent>
            </Card>
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
                currentPrice={249}
                originalPrice={349}
                savings={100}
                url="https://holifya.com/cart/43782964445448:1"
                horizontal
              />
            </div>

            {/* Box 3: 2 Tests Package - narrower */}
            <div className="flex-1">
              <PriceCard
                name="2 Test del DNA"
                currentPrice={449}
                originalPrice={698}
                savings={249}
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

import React from 'react';
import { Check } from 'lucide-react';
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
const HeroSection = ({
  className,
  heroBannerComponent
}: {
  className?: string;
  heroBannerComponent?: React.ComponentType;
}) => {
  const {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    handleOrder
  } = useQuantity(1);
  const HeroBanner = heroBannerComponent || DefaultHeroBanner;

  // Preload critical images for faster initial load
  const priorityImages = ['/lovable-uploads/f2d314d3-ab01-49c2-84e3-f6b59b117dbf.png', '/lovable-uploads/e0638d78-febc-4e6c-b542-7a925922877a.png'];
  return <section className={`relative py-8 px-4 -mt-6 lg:mt-0 lg:pt-2 ${className || ''}`} style={{
    backgroundColor: '#F8FAFA'
  }}>
      <ImagePreloader images={priorityImages} priority />
      
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 animate-fade-in">
          <HeroBanner />
          
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
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
            <QuantitySelector quantity={quantity} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onOrder={handleOrder} />
          </div>

          {/* Mobile Pricing Boxes */}
          <div className="max-w-md md:mx-auto flex gap-2">
            {/* Box 1: 1 Test */}
            <Card className="gtm_addtocart flex-1 border-2 border-[#1A1A31] hover:border-[#1A1A31]/80 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => window.open('https://holifya.com/cart/43782964445448:1', '_blank', 'noopener,noreferrer')}>
              <CardContent className="p-2 flex flex-col items-center justify-center text-center gap-0.5">
                <span className="font-semibold text-slate-900 text-sm">1 Test</span>
                <span className="text-xs text-slate-400 line-through">€349</span>
                <span className="text-lg font-bold text-[#0B4650]">€249</span>
                <span className="text-[10px] text-slate-500">€249/test</span>
              </CardContent>
            </Card>

            {/* Box 2: 2 Test - Best Value */}
            <Card className="gtm_addtocart flex-1 border-2 border-[#C41E3A] hover:border-[#C41E3A]/80 transition-all duration-300 hover:shadow-lg cursor-pointer bg-gradient-to-b from-white to-red-50" onClick={() => window.open('https://holifya.com/cart/43782964445448:2', '_blank', 'noopener,noreferrer')}>
              <CardContent className="px-1 py-2 flex flex-col items-center justify-center text-center gap-0.5">
                <span className="font-semibold text-slate-900 text-sm">2 Test 🎁</span>
                <span className="text-[9px] font-bold text-amber-600 whitespace-nowrap">MIGLIOR VALORE </span>
                <span className="text-xs text-slate-400 line-through">€698</span>
                <span className="text-lg font-bold text-[#C41E3A]">€399</span>
                <span className="text-[10px] text-green-600 flex items-center gap-0.5">
                  <Check className="w-2.5 h-2.5" /> €199,50/test
                </span>
              </CardContent>
            </Card>

            {/* Box 3: 3 Test */}
            <Card className="gtm_addtocart flex-1 border-2 border-[#1A1A31] hover:border-[#1A1A31]/80 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => window.open('https://holifya.com/cart/43782964445448:3', '_blank', 'noopener,noreferrer')}>
              <CardContent className="p-2 flex flex-col items-center justify-center text-center gap-0.5">
                <span className="font-semibold text-slate-900 text-sm">3 Test</span>
                <span className="text-xs text-slate-400 line-through">€1.047</span>
                <span className="text-lg font-bold text-[#0B4650]">€649</span>
                <span className="text-[10px] text-slate-500">€216/test</span>
              </CardContent>
            </Card>
          </div>

          {/* Christmas promotional tagline */}
          <p className="text-center text-xs text-slate-600 italic px-4">A Natale, regalati prevenzione. Per te e chi ami.
2 Test del DNA al prezzo più basso di sempre.</p>

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

          {/* Bottom section - Full width container with 4 boxes */}
          <div className="flex gap-4 animate-fade-in items-stretch">
            {/* Quantity Selector - reduced width */}
            <div className="flex-[1.2]">
              <QuantitySelector quantity={quantity} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onOrder={handleOrder} />
            </div>

            {/* Box 1: 1 Test */}
            <Card className="gtm_addtocart flex-1 border-2 border-[#1A1A31] hover:border-[#1A1A31]/80 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => window.open('https://holifya.com/cart/43782964445448:1', '_blank', 'noopener,noreferrer')}>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
                <span className="font-semibold text-slate-900 text-base">1 Test</span>
                <span className="text-sm text-slate-400 line-through">€349</span>
                <span className="text-2xl font-bold text-[#0B4650]">€249</span>
                <span className="text-xs text-slate-500">€249/test</span>
              </CardContent>
            </Card>

            {/* Box 2: 2 Test - Best Value */}
            <Card className="gtm_addtocart flex-1 border-2 border-[#C41E3A] hover:border-[#C41E3A]/80 transition-all duration-300 hover:shadow-lg cursor-pointer bg-gradient-to-b from-white to-red-50" onClick={() => window.open('https://holifya.com/cart/43782964445448:2', '_blank', 'noopener,noreferrer')}>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
                <span className="font-semibold text-slate-900 text-base">2 Test 🎁</span>
                <span className="text-xs font-bold text-amber-600">⭐ MIGLIOR PREZZO</span>
                <span className="text-sm text-slate-400 line-through">€698</span>
                <span className="text-2xl font-bold text-[#C41E3A]">€399</span>
                <span className="text-xs text-green-600 flex items-center gap-1">
                  <Check className="w-3 h-3" /> €199,50/test
                </span>
              </CardContent>
            </Card>

            {/* Box 3: 3 Test */}
            <Card className="gtm_addtocart flex-1 border-2 border-[#1A1A31] hover:border-[#1A1A31]/80 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => window.open('https://holifya.com/cart/43782964445448:3', '_blank', 'noopener,noreferrer')}>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full gap-1">
                <span className="font-semibold text-slate-900 text-base">3 Test</span>
                <span className="text-sm text-slate-400 line-through">€1.047</span>
                <span className="text-2xl font-bold text-[#0B4650]">€649</span>
                <span className="text-xs text-slate-500">€216/test</span>
              </CardContent>
            </Card>
          </div>

          {/* Christmas promotional tagline */}
          <p className="text-center text-sm text-slate-600 italic">
            A Natale, regalati prevenzione. Per te e chi ami. 2 Test del DNA al prezzo più basso di sempre.
          </p>
        </div>
      </div>
    </section>;
};
export default HeroSection;
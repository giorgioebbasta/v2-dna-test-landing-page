
import React from 'react';
import PriceCard from '@/components/shared/PriceCard';

const testPackages = [
  {
    name: "1 Test del DNA",
    currentPrice: 209,
    originalPrice: 349,
    savings: 140,
    promoCode: "ESTATE40",
    url: "https://holifya.com/cart/43782964445448:1"
  },
  {
    name: "2 Test del DNA",
    currentPrice: 418,
    originalPrice: 698,
    savings: 280,
    promoCode: "ESTATE40",
    url: "https://holifya.com/cart/43782964445448:2"
  }
];

const ProductPricing = React.memo(() => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {testPackages.map((pkg, index) => (
        <PriceCard
          key={index}
          name={pkg.name}
          currentPrice={pkg.currentPrice}
          originalPrice={pkg.originalPrice}
          savings={pkg.savings}
          promoCode={pkg.promoCode}
          url={pkg.url}
        />
      ))}
    </div>
  );
});

ProductPricing.displayName = 'ProductPricing';

export default ProductPricing;


import React from 'react';
import PriceCard from '@/components/shared/PriceCard';

const testPackages = [
  {
    name: "1 Test del DNA",
    currentPrice: 299,
    originalPrice: 349,
    savings: 50,
    url: "https://holifya.com/cart/43782964445448:1"
  },
  {
    name: "2 Test del DNA",
    currentPrice: 528,
    originalPrice: 598,
    savings: 70,
    url: "https://holifya.com/cart/43782964445448:2"
  }
];

const ProductPricing = React.memo(() => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {testPackages.map((pkg, index) => (
        <PriceCard
          key={index}
          name={pkg.name}
          currentPrice={pkg.currentPrice}
          originalPrice={pkg.originalPrice}
          savings={pkg.savings}
          url={pkg.url}
        />
      ))}
    </div>
  );
});

ProductPricing.displayName = 'ProductPricing';

export default ProductPricing;

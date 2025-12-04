
import React from 'react';
import PriceCard from '@/components/shared/PriceCard';

const testPackages = [
  {
    name: "1 Test del DNA",
    currentPrice: 229,
    originalPrice: 349,
    savings: 120,
    url: "https://holifya.com/cart/43782964445448:1"
  },
  {
    name: "2 Test del DNA",
    currentPrice: 399,
    originalPrice: 698,
    savings: 299,
    url: "https://holifya.com/cart/43782964445448:2",
    extraDiscount: "Per te e per chi ami"
  },
  {
    name: "3 Test del DNA",
    currentPrice: 649,
    originalPrice: 1047,
    savings: 398,
    url: "https://holifya.com/cart/43782964445448:3"
  },
  {
    name: "4 Test del DNA",
    currentPrice: 849,
    originalPrice: 1396,
    savings: 547,
    url: "https://holifya.com/cart/43782964445448:4"
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
          url={pkg.url}
          extraDiscount={pkg.extraDiscount}
        />
      ))}
    </div>
  );
});

ProductPricing.displayName = 'ProductPricing';

export default ProductPricing;

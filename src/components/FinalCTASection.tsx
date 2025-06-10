
import React from 'react';

const FinalCTASection = () => {
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

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Inizia il tuo viaggio verso una vita più sana
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Unisciti a migliaia di italiani che hanno già scoperto i segreti del loro DNA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          {testPackages.map((pkg, index) => (
            <a 
              key={index}
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-lg font-semibold mb-1">{pkg.name}</div>
                <div className="text-2xl font-bold">€{pkg.currentPrice}</div>
                <div className="text-sm text-indigo-200 line-through">€{pkg.originalPrice}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;


import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Scegli di stare meglio
        </h2>
        <p className="text-lg sm:text-xl text-indigo-100 mb-8">
          Non aspettare oltre. Inizia ora.
        </p>
        <a 
          href="https://holifya.com/cart/43782964445448:1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Fai il tuo test del DNA
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;

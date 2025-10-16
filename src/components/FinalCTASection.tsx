import React from 'react';
import { Button } from '@/components/ui/button';
import PaymentMethods from '@/components/hero/PaymentMethods';

const FinalCTASection = () => {
  const handleOrder = () => {
    window.open("https://holifya.com/cart/43782964445448:1", '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="px-4 bg-gradient-to-r from-green-500 to-emerald-600 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Unisciti a 3.000+ clienti che hanno trasformato la loro routine.
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          <span className="sm:hidden">Inizia senza rischi:<br />Kit a casa in 48h, risultati in 10 giorni.</span>
          <span className="hidden sm:inline">Inizia senza rischi: kit a casa in 48h, risultati in 10 giorni.</span>
        </p>
        
        <Button 
          onClick={handleOrder}
          size="lg"
          className="bg-white text-green-600 hover:bg-white/90 font-bold text-lg px-8 py-6 mb-12"
        >
          Scopri cosa dice il tuo DNA
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Payment Methods Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4 text-lg">Metodi di Pagamento</h3>
            <PaymentMethods />
          </div>

          {/* Certifications Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4 text-lg">Certificazioni</h3>
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">🔒 GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">🏥 Laboratorio CE-IVD</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">✓ ISO 9001 Certificato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
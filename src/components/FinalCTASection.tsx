import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import PaymentMethods from '@/components/hero/PaymentMethods';

const FinalCTASection = () => {
  const handleOrder = () => {
    window.open("https://holifya.com/cart/43782964445448:1", '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="px-4 bg-gradient-to-r from-[#E8FFC9] to-[#d4f5b1] py-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B4650] mb-6">
          Unisciti a 3.000+ clienti che hanno trasformato la loro routine.
        </h2>
        <p className="text-lg sm:text-xl text-[#0B4650]/90 mb-8">
          <span className="sm:hidden">Inizia senza rischi:<br />Kit a casa in 48h, risultati in 15 giorni.</span>
          <span className="hidden sm:inline">Inizia senza rischi: kit a casa in 48h, risultati in 15 giorni.</span>
        </p>
        
        <Button 
          onClick={handleOrder}
          size="lg"
          className="bg-[#0B4650] text-[#E8FFC9] hover:bg-[#0B4650]/90 font-bold text-lg px-8 py-6 mb-6"
        >
          Scopri cosa dice il tuo DNA
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {/* Payment Methods Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
            <h3 className="text-[#0B4650] font-semibold mb-4 text-lg">Metodi di Pagamento</h3>
            <PaymentMethods />
          </div>

          {/* Certifications Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0B4650]" />
              <span className="text-sm font-medium text-[#0B4650]">CE-IVD / ISO / GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
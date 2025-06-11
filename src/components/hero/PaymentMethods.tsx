
import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentMethods = React.memo(() => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-6">
          {/* PayPal */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/96f9f2ef-7261-4da8-a18f-89922dae3f97.png" 
              alt="PayPal" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Apple Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/db94bdeb-5dc2-44dd-b6ae-b308d09050c6.png" 
              alt="Apple Pay" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Google Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/96bd72f4-a0d0-48d5-84e5-71c10cfb7633.png" 
              alt="Google Pay" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Contrassegno */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-1">
              <CreditCard className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Contrassegno</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

PaymentMethods.displayName = 'PaymentMethods';

export default PaymentMethods;

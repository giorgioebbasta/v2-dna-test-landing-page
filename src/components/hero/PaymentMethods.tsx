import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentMethods = React.memo(() => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          {/* PayPal */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/96f9f2ef-7261-4da8-a18f-89922dae3f97.png" 
              alt="PayPal" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Apple Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/apple-pay.svg" 
              alt="Apple Pay" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Google Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/google-pay.svg" 
              alt="Google Pay" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Contrassegno */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-1">
              <CreditCard className="w-6 h-6 text-slate-600" />
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

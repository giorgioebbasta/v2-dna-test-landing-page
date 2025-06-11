
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
              className="h-10 w-auto object-contain"
            />
          </div>
          
          {/* Apple Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/07484c08-dcd5-4617-b01f-a96ba093392c.png" 
              alt="Apple Pay" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          {/* Google Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/b80d2d67-3761-424f-a231-6dbbecb45d6f.png" 
              alt="Google Pay" 
              className="h-10 w-auto object-contain"
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

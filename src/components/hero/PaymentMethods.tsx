
import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentMethods = React.memo(() => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* PayPal */}
          <div className="flex items-center justify-center w-12 h-8 bg-blue-600 rounded text-white text-xs font-bold">
            PayPal
          </div>
          
          {/* Apple Pay */}
          <div className="flex items-center justify-center w-12 h-8 bg-black rounded text-white text-xs font-bold">
            Pay
          </div>
          
          {/* Google Pay */}
          <div className="flex items-center justify-center w-12 h-8 bg-gray-800 rounded text-white text-xs font-bold">
            GPay
          </div>
          
          {/* Contrassegno */}
          <div className="flex items-center space-x-1">
            <CreditCard className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-medium text-slate-700">Contrassegno</span>
          </div>
        </div>
        
        <span className="text-xs text-slate-500 font-medium">Metodi di pagamento</span>
      </div>
    </div>
  );
});

PaymentMethods.displayName = 'PaymentMethods';

export default PaymentMethods;

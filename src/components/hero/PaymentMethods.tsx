import React from 'react';

const PaymentMethods = React.memo(() => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          {/* PayPal */}
          <div className="flex items-center justify-center -mr-3">
            <img 
              src="/lovable-uploads/96f9f2ef-7261-4da8-a18f-89922dae3f97.png" 
              alt="PayPal" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Klarna */}
          <div className="flex items-center justify-center mr-1">
            <img 
              src="/klarna.svg" 
              alt="Klarna" 
              className="h-6 w-auto object-contain"
            />
          </div>
          
          {/* Apple Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/apple-pay.svg" 
              alt="Apple Pay" 
              className="h-5 w-auto object-contain"
            />
          </div>
          
          {/* Google Pay */}
          <div className="flex items-center justify-center">
            <img 
              src="/google-pay.svg" 
              alt="Google Pay" 
              className="h-5 w-auto object-contain"
            />
          </div>
          
          {/* Contrassegno */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-1">
              <img 
                src="/contrassegno.svg" 
                alt="Contrassegno" 
                className="h-5 w-auto object-contain"
              />
              <span className="text-xs font-medium text-slate-700">Contrassegno</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

PaymentMethods.displayName = 'PaymentMethods';

export default PaymentMethods;

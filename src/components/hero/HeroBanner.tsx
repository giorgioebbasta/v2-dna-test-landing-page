
import React from 'react';
import { Badge } from "@/components/ui/badge";

const HeroBanner = React.memo(() => {
  return (
    <div className="space-y-4">
      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
        Test Completo del DNA
      </Badge>
      <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
        Una vita sana,<br />
        <span className="italic bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Più a lungo
        </span>
      </h1>
      
      <p className="text-xl text-slate-600 leading-relaxed">
        Scopri i segreti del tuo DNA, con il test genetico più completo in Italia.
      </p>
      <p className="text-xl text-slate-600 leading-relaxed">
        <em>Ora disponibile a casa tua.</em>
      </p>
    </div>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;

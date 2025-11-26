import React from "react";
import { Badge } from "@/components/ui/badge";

const HeroBanner = React.memo(() => {
  return (
    <div className="space-y-2 pt-0">
      <Badge className="text-[#E8FFC9] text-sm font-medium mt-4 bg-[#0b4650] py-[6px] px-[14px]">
        Test Completo del DNA
      </Badge>
      <h1 className="text-[41px] md:text-[47px] lg:text-6xl font-bold text-slate-900 leading-tight py-[2px]">
        Test del{" "}
        <span className="bg-gradient-to-r from-[#0B4650] via-[#0d6875] to-[#0f8a9a] bg-clip-text text-transparent">
          DNA
        </span>
        : Scopri Cosa Funziona per Te
      </h1>
      <p className="text-[15px] md:text-[17px] lg:text-xl text-slate-600 leading-relaxed !pl-0">
        Oltre 150 geni analizzati per scoprire cosa mangiare, come allenarti e dormire meglio
      </p>
    </div>
  );
});

HeroBanner.displayName = "HeroBanner";

export default HeroBanner;

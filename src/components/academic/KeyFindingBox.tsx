import { ReactNode } from 'react';

interface KeyFindingBoxProps {
  children: ReactNode;
  icon?: string;
  title?: string;
}

export const KeyFindingBox = ({ 
  children, 
  icon = "🔬", 
  title = "Evidenza Chiave" 
}: KeyFindingBoxProps) => {
  return (
    <div className="my-8 p-6 bg-[#F8FAFA] border-l-4 border-[#0A121A] rounded-r-lg">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <h4 className="text-lg font-semibold text-[#0A121A]">{title}</h4>
      </div>
      <div className="text-[#2F3F4C] leading-relaxed">
        {children}
      </div>
    </div>
  );
};

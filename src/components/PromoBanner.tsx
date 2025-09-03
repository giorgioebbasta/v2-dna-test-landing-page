import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 text-center relative overflow-hidden">
      <div className="relative z-10">
        <span className="font-semibold text-lg">
          Test del DNA -20%
        </span>
      </div>
      
      {/* Subtle animation background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default PromoBanner;
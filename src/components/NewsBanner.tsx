import React from 'react';

const NewsBanner = () => {
  return (
    <div className="fixed top-[60px] left-0 right-0 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded uppercase">
              Offerta Speciale
            </span>
            <span className="font-semibold text-lg">
              Test del DNA -€60 di Sconto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
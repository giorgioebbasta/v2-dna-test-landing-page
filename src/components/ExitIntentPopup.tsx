
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('hasSeenExitPopup', 'true');
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('hasSeenExitPopup', 'true');
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Check if user has already seen the popup
    const hasSeenBefore = localStorage.getItem('hasSeenExitPopup');
    if (hasSeenBefore) {
      setHasShown(true);
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  const handleOrder = () => {
    window.open('https://holifya.com/cart/43782964445448:1', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-white border-2 border-red-500 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="text-center space-y-3 pt-2">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-red-600">
            Aspetta! Non perdere questa offerta! 🔥
          </DialogTitle>
          
          <DialogDescription className="text-lg text-gray-700 space-y-2">
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
              <div className="font-bold text-red-600 text-xl">SCONTO 40% - SOLO OGGI!</div>
              <div className="text-lg">
                <span className="line-through text-gray-500">€349</span>
                <span className="ml-2 font-bold text-green-600">€209</span>
              </div>
              <div className="text-sm font-semibold text-orange-600">
                Codice: ESTATE40
              </div>
            </div>
            
            <p className="text-base">
              Migliaia di italiani hanno già scoperto i segreti del loro DNA. 
              <strong> Non lasciare che questa opportunità ti sfugga!</strong>
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <Button
            onClick={handleOrder}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 text-lg shadow-lg animate-pulse"
          >
            🎯 ORDINA ORA - SCONTO 40%
          </Button>
          
          <button
            onClick={handleClose}
            className="w-full text-sm text-gray-500 hover:text-gray-700 py-2"
          >
            No grazie, preferisco pagare il prezzo pieno
          </button>
        </div>
        
        <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 text-center">
          ⏰ Offerta limitata nel tempo
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

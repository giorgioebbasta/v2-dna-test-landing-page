
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle, Clock, Gift } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown

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

    // Mobile-specific exit intent (scroll to top quickly)
    const handleScroll = () => {
      if (window.scrollY === 0 && !hasShown) {
        setTimeout(() => {
          if (window.scrollY === 0) {
            setIsOpen(true);
            setHasShown(true);
            localStorage.setItem('hasSeenExitPopup', 'true');
          }
        }, 1000);
      }
    };

    // Check if user has already seen the popup
    const hasSeenBefore = localStorage.getItem('hasSeenExitPopup');
    if (hasSeenBefore) {
      setHasShown(true);
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  // Countdown timer effect
  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOrder = () => {
    window.open('https://holifya.com/cart/43782964445448:1', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm sm:max-w-md mx-auto bg-white border-2 border-red-500 shadow-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="text-center space-y-3 pt-2">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
          </div>
          
          <DialogTitle className="text-xl sm:text-2xl font-bold text-red-600 leading-tight">
            Aspetta! Non perdere questa offerta! 🔥
          </DialogTitle>
          
          <DialogDescription className="text-base sm:text-lg text-gray-700 space-y-3">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 sm:p-4 rounded-lg border-2 border-yellow-300 shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-red-600" />
                <div className="font-bold text-red-600 text-lg sm:text-xl">SCONTO 40% - SOLO OGGI!</div>
              </div>
              <div className="text-lg sm:text-xl mb-2">
                <span className="line-through text-gray-500">€349</span>
                <span className="ml-2 font-bold text-green-600 text-xl sm:text-2xl">€209</span>
              </div>
              <div className="text-sm font-semibold text-orange-600 mb-2">
                Codice: ESTATE40
              </div>
              <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                <Clock className="w-4 h-4" />
                <span>Scade tra: {formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-medium">
                🎯 <strong>Migliaia di italiani</strong> hanno già scoperto i segreti del loro DNA
              </p>
              <p className="text-sm sm:text-base text-red-600 font-semibold">
                ⚡ Non lasciare che questa opportunità ti sfugga!
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <Button
            onClick={handleOrder}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 text-base sm:text-lg shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
          >
            🎯 ORDINA ORA - SCONTO 40%
          </Button>
          
          <div className="grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
            <div className="bg-green-50 p-2 rounded border border-green-200">
              <div className="font-semibold text-green-700">✓ Spedizione</div>
              <div className="text-green-600">Gratuita</div>
            </div>
            <div className="bg-blue-50 p-2 rounded border border-blue-200">
              <div className="font-semibold text-blue-700">✓ Garanzia</div>
              <div className="text-blue-600">30 giorni</div>
            </div>
            <div className="bg-purple-50 p-2 rounded border border-purple-200">
              <div className="font-semibold text-purple-700">✓ Sicuro</div>
              <div className="text-purple-600">100%</div>
            </div>
          </div>
          
          <button
            onClick={handleClose}
            className="w-full text-xs sm:text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors"
          >
            No grazie, preferisco pagare il prezzo pieno
          </button>
        </div>
        
        <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 text-center border-t">
          ⏰ Offerta limitata nel tempo - Solo per oggi!
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

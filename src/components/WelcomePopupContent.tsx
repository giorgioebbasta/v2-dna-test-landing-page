
import React from 'react';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from 'lucide-react';

interface WelcomePopupContentProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSkip: () => void;
  isSubmitting: boolean;
}

const WelcomePopupContent = ({ 
  email, 
  setEmail, 
  onSubmit, 
  onSkip, 
  isSubmitting 
}: WelcomePopupContentProps) => {
  return (
    <>
      <DialogHeader className="text-center space-y-3 sm:space-y-4">
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
          <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        
        <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-900 px-2">
          Benvenuto! 🎉
        </DialogTitle>
        
        <DialogDescription className="text-base sm:text-lg text-slate-600 px-2">
          Iscriviti alla nostra newsletter e ricevi uno <strong className="text-emerald-600">sconto del 5%</strong> sul tuo primo ordine!
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={onSubmit} className="space-y-4 mt-4 sm:mt-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            type="email"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-11 sm:h-10"
            required
          />
        </div>
        
        <div className="flex space-x-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-11 sm:h-10 text-sm sm:text-base"
          >
            {isSubmitting ? "Iscrizione..." : "Ottieni il 5% di sconto"}
          </Button>
        </div>
        
        <button
          type="button"
          onClick={onSkip}
          className="w-full text-sm text-slate-500 hover:text-slate-700 transition-colors py-2"
        >
          No grazie, continua senza sconto
        </button>
      </form>

      <div className="mt-3 sm:mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
        <p className="text-xs text-emerald-800 text-center leading-relaxed">
          📧 Riceverai email occasionali su offerte esclusive e consigli sulla salute. Puoi annullare l'iscrizione in qualsiasi momento.
        </p>
      </div>
    </>
  );
};

export default WelcomePopupContent;

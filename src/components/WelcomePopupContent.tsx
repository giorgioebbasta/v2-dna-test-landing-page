
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
      <DialogHeader className="text-center space-y-2">
        <div className="mx-auto w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
          <Gift className="w-8 h-8 text-white" />
        </div>
        
        <DialogTitle className="text-2xl font-bold text-slate-900">
          Benvenuto! 🎉
        </DialogTitle>
        
        <DialogDescription className="text-lg text-slate-600">
          Iscriviti alla nostra newsletter e ricevi uno <strong className="text-teal-600">sconto del 5%</strong> sul tuo primo ordine!
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={onSubmit} className="space-y-4 mt-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            type="email"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-10"
            required
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white h-10"
        >
          {isSubmitting ? "Iscrizione..." : "Ottieni il 5% di sconto"}
        </Button>
        
        <button
          type="button"
          onClick={onSkip}
          className="w-full text-sm text-slate-500 hover:text-slate-700 transition-colors py-2"
        >
          No grazie, continua senza sconto
        </button>
      </form>

      <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-200">
        <p className="text-xs text-teal-800 text-center leading-relaxed">
          📧 Riceverai email occasionali su offerte esclusive e consigli sulla salute. Puoi annullare l'iscrizione in qualsiasi momento.
        </p>
      </div>
    </>
  );
};

export default WelcomePopupContent;

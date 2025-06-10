
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Gift } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 2 seconds if user hasn't seen it before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Iscrizione completata! 🎉",
        description: "Controlla la tua email per ricevere il codice sconto del 5%",
      });
      setIsSubmitting(false);
      handleClose();
    }, 1000);
  };

  const handleSkip = () => {
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md mx-4 rounded-lg">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Benvenuto! 🎉
          </DialogTitle>
          
          <DialogDescription className="text-lg text-slate-600">
            Iscriviti alla nostra newsletter e ricevi uno <strong className="text-emerald-600">sconto del 5%</strong> sul tuo primo ordine!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubscribe} className="space-y-4 mt-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              type="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
          
          <div className="flex space-x-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {isSubmitting ? "Iscrizione..." : "Ottieni il 5% di sconto"}
            </Button>
          </div>
          
          <button
            type="button"
            onClick={handleSkip}
            className="w-full text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            No grazie, continua senza sconto
          </button>
        </form>

        <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
          <p className="text-xs text-emerald-800 text-center">
            📧 Riceverai email occasionali su offerte esclusive e consigli sulla salute. Puoi annullare l'iscrizione in qualsiasi momento.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;

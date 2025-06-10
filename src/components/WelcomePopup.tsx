
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
import { Mail, Gift } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Klaviyo configuration
const KLAVIYO_LIST_ID = 'Yp9bpB';

// Declare Klaviyo global for TypeScript
declare global {
  interface Window {
    _learnq: any[];
    klaviyo?: any;
  }
}

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds if user hasn't seen it before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  const subscribeToKlaviyo = async (email: string): Promise<boolean> => {
    console.log('Starting Klaviyo subscription for email:', email);
    
    // Method 1: Try Klaviyo's JavaScript SDK
    try {
      if (window._learnq) {
        console.log('Using Klaviyo _learnq method');
        window._learnq.push(['identify', { email: email }]);
        window._learnq.push(['track', 'Newsletter Signup', { 
          source: 'Welcome Popup',
          list_id: KLAVIYO_LIST_ID 
        }]);
        
        // Add to specific list
        const listData = {
          list: KLAVIYO_LIST_ID,
          email: email,
          properties: {
            source: 'Welcome Popup'
          }
        };
        window._learnq.push(['subscribe', listData]);
        
        console.log('Klaviyo subscription successful via _learnq');
        return true;
      }
    } catch (error) {
      console.warn('Klaviyo _learnq method failed:', error);
    }

    // Method 2: Try direct Klaviyo object if available
    try {
      if (window.klaviyo) {
        console.log('Using direct Klaviyo object');
        await window.klaviyo.push(['identify', { email: email }]);
        await window.klaviyo.push(['subscribe', {
          list: KLAVIYO_LIST_ID,
          email: email,
          properties: { source: 'Welcome Popup' }
        }]);
        
        console.log('Klaviyo subscription successful via direct object');
        return true;
      }
    } catch (error) {
      console.warn('Direct Klaviyo method failed:', error);
    }

    // Method 3: Form-based fallback (most reliable)
    try {
      console.log('Using form-based fallback method');
      
      // Create a hidden form and submit it to Klaviyo
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `https://manage.kmail-lists.com/subscriptions/subscribe`;
      form.target = '_blank';
      form.style.display = 'none';
      
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'email';
      emailInput.value = email;
      
      const listInput = document.createElement('input');
      listInput.type = 'hidden';
      listInput.name = 'g';
      listInput.value = KLAVIYO_LIST_ID;
      
      form.appendChild(emailInput);
      form.appendChild(listInput);
      document.body.appendChild(form);
      
      // Submit form in new tab/window
      form.submit();
      document.body.removeChild(form);
      
      console.log('Form-based subscription initiated');
      return true;
      
    } catch (error) {
      console.error('Form-based fallback failed:', error);
      return false;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email richiesta",
        description: "Per favore inserisci il tuo indirizzo email",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted with email:', email);
    setIsSubmitting(true);
    
    try {
      const success = await subscribeToKlaviyo(email);
      
      if (success) {
        toast({
          title: "Iscrizione completata! 🎉",
          description: "Controlla la tua email per ricevere il codice sconto del 5%",
        });
        handleClose();
      } else {
        throw new Error('Tutti i metodi di iscrizione hanno fallito');
      }
      
    } catch (error) {
      console.error('Subscription failed:', error);
      
      toast({
        title: "Errore nell'iscrizione",
        description: "Si è verificato un problema. Riprova più tardi o contattaci direttamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    console.log('User skipped signup');
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-md mx-auto rounded-lg p-6 sm:p-6 max-h-[90vh] overflow-y-auto">
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

        <form onSubmit={handleSubscribe} className="space-y-4 mt-4 sm:mt-6">
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
            onClick={handleSkip}
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
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;

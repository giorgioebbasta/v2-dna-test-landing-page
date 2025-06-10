
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
const KLAVIYO_API_KEY = 'pk_2d11aeed537aad31130215bbdca2a4d334';
const KLAVIYO_LIST_ID = 'XvqVvT'; // You'll need to get your actual list ID from Klaviyo

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

  const subscribeToKlaviyo = async (email: string) => {
    try {
      console.log('Subscribing to Klaviyo list:', KLAVIYO_LIST_ID);
      
      // Use Klaviyo's public subscription endpoint
      const response = await fetch(`https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/`, {
        method: 'POST',
        headers: {
          'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
          'Content-Type': 'application/json',
          'revision': '2024-06-15'
        },
        body: JSON.stringify({
          data: {
            type: 'profile-subscription-bulk-create-job',
            attributes: {
              profiles: {
                data: [
                  {
                    type: 'profile',
                    attributes: {
                      email: email,
                      properties: {
                        source: 'Welcome Popup',
                        language: 'it',
                        subscription_date: new Date().toISOString()
                      }
                    }
                  }
                ]
              }
            },
            relationships: {
              list: {
                data: {
                  type: 'list',
                  id: KLAVIYO_LIST_ID
                }
              }
            }
          }
        })
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Klaviyo API error:', errorData);
        throw new Error(`Klaviyo subscription failed: ${response.status}`);
      }

      const result = await response.json();
      console.log('Successfully subscribed to Klaviyo:', result);
      
      return result;
    } catch (error) {
      console.error('Klaviyo subscription error:', error);
      throw error;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      await subscribeToKlaviyo(email);
      
      toast({
        title: "Iscrizione completata! 🎉",
        description: "Controlla la tua email per ricevere il codice sconto del 5%",
      });
      
      handleClose();
    } catch (error) {
      console.error('Subscription failed:', error);
      
      toast({
        title: "Errore nell'iscrizione",
        description: "Si è verificato un problema. Riprova più tardi o contattaci.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
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

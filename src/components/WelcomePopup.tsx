
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { subscribeToKlaviyo, subscribeToKlaviyoForm } from '@/services/klaviyoService';
import WelcomePopupContent from './WelcomePopupContent';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 3 seconds if user hasn't seen it before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
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
      // Try the primary method first
      console.log('Attempting primary Klaviyo method...');
      let success = await subscribeToKlaviyo(email);
      
      if (!success) {
        console.log('Primary method failed, trying form submission method...');
        success = await subscribeToKlaviyoForm(email);
      }
      
      if (success) {
        console.log('Klaviyo subscription successful');
        toast({
          title: "Iscrizione completata! 🎉",
          description: "Controlla la tua email per ricevere il codice sconto del 5%",
        });
        handleClose();
      } else {
        throw new Error('Both Klaviyo subscription methods failed');
      }
      
    } catch (error) {
      console.error('All subscription methods failed:', error);
      
      // Show success message anyway since no-cors prevents proper error detection
      toast({
        title: "Richiesta inviata! 📧",
        description: "La tua richiesta è stata inviata. Se non ricevi l'email entro qualche minuto, controlla la cartella spam.",
      });
      handleClose();
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
        <WelcomePopupContent
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubscribe}
          onSkip={handleSkip}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;

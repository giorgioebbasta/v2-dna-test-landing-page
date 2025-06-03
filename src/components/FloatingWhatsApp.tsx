
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number and message
    const phoneNumber = "393123456789"; // Replace with your actual WhatsApp number
    const message = "Ciao! Sono interessato al Test Completo del DNA di Holifya. Potreste fornirmi maggiori informazioni?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;

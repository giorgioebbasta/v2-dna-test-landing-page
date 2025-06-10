import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-11 px-1 md:px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Hai ancora dei dubbi?
        </h2>
        <p className="text-2xl text-slate-700 mb-8">
          Contattaci
        </p>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
          <a 
            href="mailto:support@holifya.com"
            className="block"
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">Email</h3>
                <span className="text-sm md:text-lg text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                  support@holifya.com
                </span>
              </CardContent>
            </Card>
          </a>

          <a 
            href="https://wa.me/393332022743?text=Ciao%2C%20vorrei%20più%20informazioni%20sul%20Test%20del%20DNA"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">WhatsApp</h3>
                <span className="text-sm md:text-lg text-green-600 hover:text-green-700 transition-colors duration-300">
                  +39 333 202 2743
                </span>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

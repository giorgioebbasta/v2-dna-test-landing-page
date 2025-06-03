import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronDown, ChevronRight, Truck, Clock, RotateCcw, Calendar, Shield, Award, Users } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import DropdownSection from '@/components/DropdownSection';
import ReviewsSection from '@/components/ReviewsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PlatformSection from '@/components/PlatformSection';
import FloatingCTA from '@/components/FloatingCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    { icon: <Truck className="w-6 h-6" />, text: "Spedizione gratuita" },
    { icon: <Clock className="w-6 h-6" />, text: "Ricevilo in 72h" },
    { icon: <RotateCcw className="w-6 h-6" />, text: "Reso entro 14 giorni" },
    { icon: <Calendar className="w-6 h-6" />, text: "Risultati in 15 giorni" }
  ];

  const bulletPoints = [
    "Analisi completa del tuo DNA con oltre 350 tratti genetici",
    "Scopri la tua predisposizione a oltre 150 condizioni di salute",
    "Ricevi consigli personalizzati per alimentazione e fitness",
    "Accesso a vita alla piattaforma con aggiornamenti continui",
    "Supporto scientifico da parte del nostro team di genetisti"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                  Test DNA Completo
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Una vita più sana,{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    più a lungo
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Scopri i segreti del tuo DNA per vivere una vita più sana e consapevole. 
                  Il test genetico più avanzato d'Italia, ora disponibile a casa tua.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900">299€</div>
                  <div className="text-lg text-slate-500 line-through">349€</div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="text-emerald-600 mb-2">{benefit.icon}</div>
                    <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ProductCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Cosa rende unico il nostro Test DNA
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Il Test Completo del DNA di Holifya analizza oltre 350 tratti genetici per fornirti 
              insights personalizzati sulla tua salute, nutrizione e benessere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bulletPoints.map((point, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <DropdownSection />
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Platform Section */}
      <PlatformSection />

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Inizia il tuo viaggio verso una vita più sana
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Unisciti a migliaia di italiani che hanno già scoperto i segreti del loro DNA
          </p>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">299€</div>
            <div className="text-lg text-indigo-200 line-through">349€</div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <FloatingCTA />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;

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

  const testPackages = [
    {
      name: "1 test",
      currentPrice: 299,
      originalPrice: 349,
      savings: 50
    },
    {
      name: "2 test",
      currentPrice: 528,
      originalPrice: 598,
      savings: 70
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4 mt-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                  Test DNA Completo
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Una vita sana,<br />
                  <span className="italic bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Più a lungo
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Scopri i segreti del tuo DNA, con il test genetico più completo in Italia.<br />
                  <em>Ora disponibile a casa tua.</em>
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mt-4">
                {testPackages.map((pkg, index) => (
                  <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">{pkg.name}</h3>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-emerald-600">€{pkg.currentPrice}</div>
                        <div className="text-lg text-slate-500 line-through">€{pkg.originalPrice}</div>
                        <div className="text-sm font-medium text-emerald-700">
                          Risparmi €{pkg.savings}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            {testPackages.map((pkg, index) => (
              <div key={index} className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-lg font-semibold mb-1">{pkg.name}</div>
                <div className="text-2xl font-bold">€{pkg.currentPrice}</div>
                <div className="text-sm text-indigo-200 line-through">€{pkg.originalPrice}</div>
              </div>
            ))}
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

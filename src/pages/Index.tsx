
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, ChevronDown, ChevronRight, Truck, Clock, RotateCcw, Calendar, Shield, Award, Users, Minus, Plus } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import DropdownSection from '@/components/DropdownSection';
import ReviewsSection from '@/components/ReviewsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FloatingCTA from '@/components/FloatingCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(3);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const basePrice = 299;
  const totalPrice = basePrice * quantity;

  const benefits = [
    { icon: <Truck className="w-6 h-6" />, text: "Spedizione gratuita" },
    { icon: <Clock className="w-6 h-6" />, text: "Ricevilo in 72h" },
    { icon: <RotateCcw className="w-6 h-6" />, text: "Reso entro 14 giorni" },
    { icon: <Calendar className="w-6 h-6" />, text: "Risultati in 15 giorni" }
  ];

  const bulletPoints = [
    {
      title: "🧠 Metabolismo e nutrizione",
      body: "Carboidrati, grassi, sovrappeso, fame emotiva, sazietà, risposta alla dieta"
    },
    {
      title: "🥛 Intolleranze e sensibilità",
      body: "Lattosio, glutine (celiachia), caffeina, istamina, nichel, alcol, solfiti"
    },
    {
      title: "❤️ Prevenzione e salute",
      body: "Colesterolo, diabete tipo 2, infiammazione, stress ossidativo, rischio cardiovascolare"
    },
    {
      title: "🧬 Anti-aging e benessere cellulare",
      body: "Invecchiamento cutaneo, fabbisogno di vitamine, riparazione del DNA"
    },
    {
      title: "🏃 Sport e performance",
      body: "Resistenza vs potenza, VO₂max, risposta alla caffeina, predisposizione agli infortuni"
    },
    {
      title: "🧘 Stress e stile di vita",
      body: "Gestione dello stress, melatonina e sonno, detossificazione, salute mentale"
    }
  ];

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 3) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                  Test Completo del DNA
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Una vita sana,<br />
                  <span className="italic bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Più a lungo
                  </span>
                </h1>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <ProductCarousel />
                </div>
                
                <p className="text-xl text-slate-600 leading-relaxed">
                  Scopri i segreti del tuo DNA, con il test genetico più completo in Italia.<br />
                  <em>Ora disponibile a casa tua.</em>
                </p>
              </div>
              
              <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg max-w-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Test del DNA</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 3}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-medium min-w-[2rem] text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="purchase-confirm"
                        checked={purchaseConfirmed}
                        onCheckedChange={setPurchaseConfirmed}
                      />
                      <label 
                        htmlFor="purchase-confirm" 
                        className="text-sm font-medium text-slate-700 cursor-pointer"
                      >
                        Conferma acquisto
                      </label>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <div className="text-3xl font-bold text-emerald-600">€{totalPrice}</div>
                    <div className="text-sm text-slate-600">
                      €{basePrice} per test
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="text-emerald-600 mb-2">{benefit.icon}</div>
                    <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:hidden">
              {/* Carousel is now above the text in mobile */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Cosa rende unico il nostro Test del DNA
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <em>Semplicemente</em> ti dà tutte le risposte che cercavi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {bulletPoints.map((point, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-900 leading-tight">{point.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{point.body}</p>
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

      {/* Final CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Inizia il tuo viaggio verso una vita più sana
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Unisciti a migliaia di italiani che hanno già scoperto i segreti del loro DNA
          </p>
          <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <div className="text-2xl font-bold mb-2">€{totalPrice}</div>
            <div className="text-indigo-200">per {quantity} test del DNA</div>
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

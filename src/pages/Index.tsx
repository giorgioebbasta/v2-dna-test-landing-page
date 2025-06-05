import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, ChevronDown, ChevronRight, Truck, Clock, RotateCcw, Calendar, Shield, Award, Users, Plus, Minus } from 'lucide-react';
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

  const testPackages = [
    {
      name: "1 Test del DNA",
      currentPrice: 299,
      originalPrice: 349,
      savings: 50
    },
    {
      name: "2 Test del DNA",
      currentPrice: 528,
      originalPrice: 598,
      savings: 70
    }
  ];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(3, prev - 1));

  const handlePurchaseConfirm = (checked: boolean | "indeterminate") => {
    setPurchaseConfirmed(checked === true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                  Test Completo del DNA
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="lg:whitespace-nowrap">Una vita sana, più a lungo</span>
                </h1>
                
                <div className="hidden lg:block">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Scopri i segreti del tuo DNA, con il test genetico più completo in Italia.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mt-2">
                    <em>Ora disponibile a casa tua.</em>
                  </p>
                </div>

                {/* Mobile version - show carousel here */}
                <div className="lg:hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <ProductCarousel />
                </div>

                {/* Mobile version - show description here */}
                <div className="lg:hidden">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Scopri i segreti del tuo DNA, con il test genetico più completo in Italia.<br />
                    <em>Ora disponibile a casa tua.</em>
                  </p>
                </div>
              </div>
              
              {/* Desktop Layout - Test packages with quantity selector and benefits */}
              <div className="hidden lg:flex lg:items-start lg:space-x-6">
                {/* Test Packages */}
                <div className="grid grid-cols-1 gap-4">
                  {testPackages.map((pkg, index) => (
                    <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-3 text-center">
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

                {/* Quantity Selector */}
                <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="text-sm font-medium text-slate-700">Quantità:</span>
                        <div className="flex items-center justify-center mt-2 border border-slate-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={decreaseQuantity}
                            disabled={quantity <= 3}
                            className="h-8 w-8 p-0 hover:bg-slate-100"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-3 py-1 text-lg font-semibold text-slate-900 min-w-[2rem] text-center">
                            {quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={increaseQuantity}
                            className="h-8 w-8 p-0 hover:bg-slate-100"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 w-full">
                        Ordina Ora
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-left p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                      <div className="text-emerald-600 mr-3">{benefit.icon}</div>
                      <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Layout - keep original */}
              <div className="lg:hidden">
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {testPackages.map((pkg, index) => (
                    <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-3 text-center">
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

                {/* Mobile Quantity Selector Card */}
                <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg max-w-md">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-slate-700">Quantità:</span>
                        <div className="flex items-center border border-slate-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={decreaseQuantity}
                            disabled={quantity <= 3}
                            className="h-8 w-8 p-0 hover:bg-slate-100"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-3 py-1 text-lg font-semibold text-slate-900 min-w-[2rem] text-center">
                            {quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={increaseQuantity}
                            className="h-8 w-8 p-0 hover:bg-slate-100"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
                        Ordina Ora
                      </Button>
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
            </div>
            
            {/* Right Column - Carousel (Desktop only) */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ProductCarousel />
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

      {/* Enhanced How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Come funziona
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              In soli 4 semplici passaggi scopri i segreti del tuo DNA e inizia 
              il tuo percorso verso una vita più sana e consapevole.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                title: "Ricevi il Kit",
                description: "Ordina online e ricevi il kit a casa in 72 ore con spedizione gratuita",
                image: "/lovable-uploads/44cad416-b3b2-417c-a9a8-96dae37c450e.png"
              },
              {
                id: 2,
                title: "Raccogli il Campione",
                description: "Semplice campione di saliva in 2 minuti, seguendo le istruzioni incluse",
                image: "/lovable-uploads/fc187d4f-cdd7-4f37-a0d4-82e7ccd64ae4.png"
              },
              {
                id: 3,
                title: "Attendi i Risultati",
                description: "Il laboratorio analizza il tuo DNA con tecnologie all'avanguardia entro 15 giorni",
                image: "/lovable-uploads/0a4bcb04-f8f3-4e78-9f19-7a2336ed5c70.png"
              },
              {
                id: 4,
                title: "Scopri il tuo Benessere",
                description: "Accedi alla tua area personale e scopri tutti i segreti sul tuo DNA",
                image: "/lovable-uploads/d4aa8a21-17c5-4f33-bb32-2c3e6e83a9cd.png"
              }
            ].map((step, index) => (
              <div key={step.id} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 items-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded"></div>
                    <div className="w-0 h-0 border-l-8 border-l-purple-600 border-t-4 border-b-4 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
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

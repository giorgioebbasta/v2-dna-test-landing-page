
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, ChevronDown, ChevronRight, Truck, Clock, RotateCcw, Calendar, Shield, Award, Users, Plus, Minus, Mail, MessageCircle } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import DropdownSection from '@/components/DropdownSection';
import ReviewsSection from '@/components/ReviewsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FloatingCTA from '@/components/FloatingCTA';
import WelcomePopup from '@/components/WelcomePopup';
import Header from '@/components/Header';

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
      savings: 50,
      url: "https://holifya.com/cart/43782964445448:1"
    },
    {
      name: "2 Test del DNA",
      currentPrice: 528,
      originalPrice: 598,
      savings: 70,
      url: "https://holifya.com/cart/43782964445448:2"
    }
  ];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(3, prev - 1));

  const handlePurchaseConfirm = (checked: boolean | "indeterminate") => {
    setPurchaseConfirmed(checked === true);
  };

  const getQuantityCartUrl = (qty: number) => {
    return `https://holifya.com/cart/43782964445448:${qty}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <WelcomePopup />
      
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                Test Completo del DNA
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">
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

            <div className="grid grid-cols-2 gap-4 max-w-md mt-4">
              {testPackages.map((pkg, index) => (
                <a 
                  key={index} 
                  href={pkg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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
                </a>
              ))}
            </div>

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
                  
                  <a
                    href={getQuantityCartUrl(quantity)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
                      Ordina Ora
                    </Button>
                  </a>
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

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Carousel and Test Cards */}
            <div className="space-y-6 animate-fade-in">
              <ProductCarousel />
              
              {/* Test Package Cards */}
              <div className="grid grid-cols-2 gap-4">
                {testPackages.map((pkg, index) => (
                  <a 
                    key={index} 
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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
                  </a>
                ))}
              </div>

              {/* Quantity Selector Card */}
              <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-3">
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
                    
                    <a
                      href={getQuantityCartUrl(quantity)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
                        Ordina Ora
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - Text content */}
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
                
                <p className="text-xl text-slate-600 leading-relaxed">
                  Scopri i segreti del tuo DNA, con il test genetico più completo in Italia.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                  <em>Ora disponibile a casa tua.</em>
                </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            {testPackages.map((pkg, index) => (
              <a 
                key={index}
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="text-lg font-semibold mb-1">{pkg.name}</div>
                  <div className="text-2xl font-bold">€{pkg.currentPrice}</div>
                  <div className="text-sm text-indigo-200 line-through">€{pkg.originalPrice}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Hai ancora dei dubbi?
          </h2>
          <p className="text-2xl text-slate-700 mb-12">
            Contattaci
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">Email</h3>
                <a 
                  href="mailto:support@holifya.com"
                  className="text-sm md:text-lg text-indigo-600 hover:text-indigo-700 transition-colors duration-300 break-all"
                >
                  support@holifya.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">WhatsApp</h3>
                <a 
                  href="https://wa.me/393332022743?text=Ciao%2C%20vorrei%20più%20informazioni%20sul%20Test%20del%20DNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg text-green-600 hover:text-green-700 transition-colors duration-300"
                >
                  +39 333 202 2743
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <FloatingCTA />
    </div>
  );
};

export default Index;

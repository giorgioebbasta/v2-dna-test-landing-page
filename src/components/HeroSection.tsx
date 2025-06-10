
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, RotateCcw, Calendar, Plus, Minus } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';

const HeroSection = () => {
  const [quantity, setQuantity] = useState(3);

  const benefits = [
    { icon: <Truck className="w-6 h-6" />, text: "Spedizione gratuita" },
    { icon: <Clock className="w-6 h-6" />, text: "Ricevilo in 72h" },
    { icon: <RotateCcw className="w-6 h-6" />, text: "Reso entro 14 giorni" },
    { icon: <Calendar className="w-6 h-6" />, text: "Risultati in 15 giorni" }
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

  const getQuantityCartUrl = (qty: number) => {
    return `https://holifya.com/cart/43782964445448:${qty}`;
  };

  return (
    <section className="relative py-8 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50 pt-24">
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
  );
};

export default HeroSection;

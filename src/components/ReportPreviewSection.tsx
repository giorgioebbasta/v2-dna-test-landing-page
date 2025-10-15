import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import reportPreview1 from "@/assets/report-preview-1.webp";
import reportPreview2 from "@/assets/report-preview-2.webp";
import reportPreview3 from "@/assets/report-preview-3.webp";
const ReportPreviewSection = () => {
  const benefits = ["Quali alimenti ti aiutano e quali ti ostacolano", "Come gestire fame, energia e sonno in base alla tua genetica", "Quali integratori o abitudini possono farti davvero la differenza"];
  
  const carouselContent = (
    <>
      <CarouselItem>
        <Card className="border-slate-200">
          <CardContent className="p-0">
            <img 
              src={reportPreview1} 
              alt="Copertina report Holifya" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="border-slate-200">
          <CardContent className="p-0">
            <img 
              src={reportPreview2} 
              alt="Contenuti del report genetico" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="border-slate-200">
          <CardContent className="p-0">
            <img 
              src={reportPreview3} 
              alt="Esempio predisposizioni genetiche" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </CarouselItem>
    </>
  );

  return <section className="px-4 bg-white py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Guarda come interpretiamo i tuoi geni e cosa puoi cambiare da subito</h2>

        {/* Mobile: Full Carousel */}
        <div className="mb-8 md:hidden">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselContent}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Tablet/Desktop: Small Preview with Dialog */}
        <div className="mb-8 hidden md:block">
          <div className="max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselContent}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full mt-4 bg-gradient-to-r from-[#FCE8E6] to-[#fbd5d1] hover:from-[#fbd5d1] hover:to-[#f9c2bc] text-[#1A1A31] font-semibold shadow-lg border border-slate-200">
                  Visualizza report
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-6">
                <Carousel className="w-full max-w-5xl mx-auto">
                  <CarouselContent>
                    {carouselContent}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Description */}
        <div className="text-xl text-slate-600 text-center mb-8 max-w-3xl mx-auto space-y-2">
          <p>Non è un foglio di dati.</p>
          <p>È la guida che ti mostra come funziona davvero il tuo corpo.</p>
        </div>

        {/* Benefits List */}
        <div className="max-w-3xl mx-auto mb-10">
          {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-slate-700">{benefit}</p>
            </div>)}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-[#FCE8E6] to-[#fbd5d1] hover:from-[#fbd5d1] hover:to-[#f9c2bc] text-[#1A1A31] px-8 py-4 text-lg font-semibold shadow-lg border border-slate-200">
            Ottieni ora la tua analisi personalizzata
          </Button>
        </div>

        {/* Media Placeholder */}
        <Card className="border-2 border-dashed border-slate-300 bg-slate-50">
          <CardContent className="p-12">
            <div className="text-center text-slate-400">
              <p className="text-lg font-medium">Spazio per video/media demo</p>
              <p className="text-sm mt-2">Video 15-20s dell'interfaccia report o immagini</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default ReportPreviewSection;
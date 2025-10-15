
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import DropdownSection from '@/components/DropdownSection';

const FeaturesSection = () => {
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

  return (
    <section className="py-12 px-4 bg-white">
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
  );
};

export default FeaturesSection;

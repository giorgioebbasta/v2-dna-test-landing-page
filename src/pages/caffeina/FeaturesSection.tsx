
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const bulletPoints = [
    {
      title: "❌ Caffè nel pomeriggio = notte in bianco",
      body: ""
    },
    {
      title: "❌ Palpitazioni/ansia dopo il caffè",
      body: ""
    },
    {
      title: '❌ "Il caffè non fa effetto" e finisci per berne troppi',
      body: ""
    },
    {
      title: "❌ Sonno leggero o risvegli notturni",
      body: ""
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Succede anche a te...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {bulletPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 leading-tight text-lg">{point.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-slate-600 max-w-3xl mx-auto">
            <em>La risposta potrebbe nascondersi nel tuo DNA.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

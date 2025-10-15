
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import DropdownSection from '@/components/DropdownSection';

const FeaturesSection = () => {
  const [switches, setSwitches] = useState([false, false, false, false]);

  const handleSwitchChange = (index: number, checked: boolean) => {
    const newSwitches = [...switches];
    newSwitches[index] = checked;
    setSwitches(newSwitches);
  };
  const bulletPoints = [
    {
      title: "⚖️ Dieta dopo dieta ma non dimagrisci?",
      body: ""
    },
    {
      title: "😴 Dormi male o ti svegli spesso di notte?",
      body: ""
    },
    {
      title: "😞 Hai fame costante o gonfiore cronico?",
      body: ""
    },
    {
      title: "🏋️ Ti alleni ma non vedi risultati?",
      body: ""
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ti sei mai chiesto perché…
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {bulletPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 flex items-center justify-between gap-4">
                <h3 className="font-bold text-slate-900 leading-tight text-lg flex-1">{point.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  <Switch 
                    checked={switches[index]} 
                    onCheckedChange={(checked) => handleSwitchChange(index, checked)}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            <em>La risposta potrebbe nascondersi nel tuo DNA.</em>
          </p>
        </div>

        <DropdownSection />
      </div>
    </section>
  );
};

export default FeaturesSection;

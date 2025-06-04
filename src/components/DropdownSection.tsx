import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const DropdownSection = () => {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "Cosa include il tuo test",
      content: [
        "Kit di raccolta saliva sterile e sicuro",
        "Istruzioni dettagliate in italiano",
        "Spedizione gratuita del campione al laboratorio",
        "Analisi di oltre 350 tratti genetici",
        "Report personalizzato di 50+ pagine",
        "Accesso a vita alla piattaforma online"
      ]
    },
    {
      title: "Quali risultati ottieni",
      content: [
        "Predisposizioni genetiche per 150+ condizioni di salute",
        "Consigli nutrizionali personalizzati basati sul DNA",
        "Piano di allenamento ottimizzato per i tuoi geni",
        "Informazioni su metabolismo e intolleranze",
        "Risposta ai farmaci e dosaggi consigliati",
        "Tratti della personalità e caratteristiche fisiche"
      ]
    },
    {
      title: "Come funziona",
      content: [
        "Ordina il kit online in 2 minuti",
        "Ricevi il test a casa in 72 ore",
        "Raccogli il campione di saliva (2 minuti)",
        "Spedisci gratuitamente il campione",
        "Il laboratorio analizza il tuo DNA (10-15 giorni)",
        "Ricevi i risultati nella tua area personale"
      ]
    },
    {
      title: "Perché scegliere Holifya",
      content: [
        "Laboratorio certificato ISO 15189 e CLIA",
        "Privacy garantita - i tuoi dati sono tuoi",
        "Team di genetisti italiani qualificati",
        "Aggiornamenti gratuiti sui nuovi studi",
        "Supporto clienti in italiano 7 giorni su 7",
        "Oltre 50.000 test già processati in Italia"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQs</h2>
      </div>
      
      <div className="space-y-4">
        {sections.map((section, index) => (
          <Card key={index} className="border-2 border-slate-100 hover:border-indigo-200 transition-colors duration-300">
            <CardContent className="p-0">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                onClick={() => setOpenSection(openSection === index ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                    openSection === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-slate-100">
                  <ul className="space-y-3 mt-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DropdownSection;


import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const DropdownSection = () => {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "Cosa include il tuo test",
      content: [
        {
          title: "Kit di prelievo anonimo e sicuro",
          items: [
            "🧬 Ricevi un tampone sterile e un codice univoco anonimo (mai collegato al tuo nome).",
            "🔒 Analisi eseguite in laboratori certificati, nel pieno rispetto della privacy e con i più alti standard di sicurezza."
          ]
        },
        {
          title: "Istruzioni chiare + Carta Membro personale",
          items: [
            "📖 Bastano 60 secondi per completare il prelievo grazie alle istruzioni semplici e illustrate.",
            "💳 All'interno trovi la tua Carta DNA personale, da conservare con il tuo codice identificativo."
          ]
        },
        {
          title: "Spedizione gratuita e tracciata",
          items: [
            "📦 Il campione viene sigillato in una busta biohazard (specifica per campioni biologici) per garantire la massima igiene.",
            "🚚 Ritiro a domicilio gratuito con busta preaffrancata: pensiamo a tutto noi, entro 48 ore dalla tua richiesta."
          ]
        }
      ]
    },
    {
      title: "Quali risultati ottieni",
      content: [
        "Report nutrigenetico completo e personalizzato",
        "Analisi completa di oltre 2000 geni",
        "Mappa alimentare di 250+ alimenti favorevoli / sfavorevoli",
        {
          type: "link",
          text: "👉 Scarica un esempio di report",
          url: "https://cdn.shopify.com/s/files/1/0647/1909/4024/files/DNA-Complete_Facsimile_e583bb92-cf50-4a43-ac37-09ab77aee305.pdf?v=1715770533"
        }
      ]
    },
    {
      title: "Come funziona",
      content: [
        "Ordina il kit online",
        "Ricevi il test a casa in 72 ore",
        "Raccogli il campione di saliva (2 minuti)",
        "Spedisci gratuitamente il campione",
        "Il laboratorio analizza il tuo DNA (15 giorni)",
        "Ricevi i risultati nella tua area personale"
      ]
    },
    {
      title: "Perché scegliere Holifya",
      content: [
        "Piattaforma web interattiva dove poter tenere traccia dei propri risultati",
        "Assistenza clienti 24/7",
        "Supporto da parte dei nostri esperti",
        "Comitato scientifico esperto in nutrigenetica e salute metabolica"
      ]
    }
  ];

  const renderContent = (section: any, index: number) => {
    if (index === 0) {
      // Special rendering for the first section with nested structure
      return (
        <div className="space-y-6 mt-4">
          {section.content.map((group: any, groupIndex: number) => (
            <div key={groupIndex} className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base">{group.title}</h4>
              <ul className="space-y-2 ml-4">
                {group.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (index === 1) {
      // Special rendering for the second section with link handling
      return (
        <div className="space-y-3 mt-4">
          {section.content.map((item: any, itemIndex: number) => (
            <div key={itemIndex}>
              {item.type === 'link' ? (
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 underline block"
                >
                  {item.text}
                </a>
              ) : (
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{item}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      // Regular rendering for other sections
      return (
        <ul className="space-y-3 mt-4">
          {section.content.map((item: any, itemIndex: number) => (
            <li key={itemIndex} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
  };

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
                openSection === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-slate-100">
                  {renderContent(section, index)}
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

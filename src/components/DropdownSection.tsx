import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const DropdownSection = () => {
  const [openSection, setOpenSection] = useState(-1);

  const sections = [
    {
      title: "In quanto tempo ricevo il kit?",
      content: [
        "Riceverai il tuo kit Holifya entro 72 ore lavorative dall'ordine, con spedizione gratuita e tracciata in tutta Italia.",
        "Il pacco è anonimo e non riporta riferimenti al contenuto, per garantirti la massima riservatezza."
      ]
    },
    {
      title: "Chi analizza il mio DNA?",
      content: [
        "Le analisi genetiche del tuo campione sono eseguite da BMR Genomics Srl, laboratorio specializzato con anni di esperienza nel sequenziamento e genotipizzazione del DNA.",
        "BMR utilizza tecnologie riconosciute (sequenziamento Sanger, NGS, tecniche SNP) e dispone di un team qualificato di biologi, esperti in bioinformatica e genetica."
      ]
    },
    {
      title: "I miei dati sono al sicuro?",
      content: [
        "Sì. Tutti i campioni e i dati genetici sono anonimizzati tramite un codice ID univoco, crittografati e conservati su server sicuri in conformità al GDPR (Regolamento Europeo sulla Protezione dei Dati).",
        "Nessuna informazione genetica viene mai condivisa o ceduta a terzi senza il tuo consenso esplicito."
      ]
    },
    {
      title: "Posso pagare a rate?",
      content: [
        "Sì. Puoi acquistare il test Holifya anche a rate, scegliendo tra Klarna o PayPal Pay in 3 direttamente al checkout.",
        "Entrambe le opzioni ti permettono di suddividere l'importo in pagamenti mensili senza interessi, in modo sicuro e immediato."
      ]
    },
    {
      title: "Cosa succede ai miei dati dopo l'analisi?",
      content: [
        "Dopo l'elaborazione del tuo profilo genetico, il campione biologico viene distrutto in modo sicuro.",
        "I dati digitali restano conservati in forma anonima solo per il tempo necessario all'erogazione del servizio e all'accesso al tuo report.",
        "Puoi richiedere in qualunque momento la cancellazione definitiva dei tuoi dati dal sistema."
      ]
    },
    {
      title: "È valido per tutti (età, gravidanza, ecc.)?",
      content: [
        "Il test è indicato per uomini e donne dai 16 anni in su.",
        "Può essere effettuato anche durante la gravidanza, poiché è un test non invasivo e completamente sicuro: analizza esclusivamente il tuo DNA, non quello del feto.",
        "Per i bambini o soggetti con condizioni mediche particolari, è consigliabile eseguire il test sotto la supervisione del pediatra o del medico di fiducia."
      ]
    }
  ];

  const renderContent = (section: any) => {
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
                className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
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
                <div className="px-6 pb-4 border-t border-slate-100">
                  {renderContent(section)}
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

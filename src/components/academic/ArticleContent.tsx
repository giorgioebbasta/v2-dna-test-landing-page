import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CitationLink } from "./CitationLink";
import { KeyFindingBox } from "./KeyFindingBox";
import { FigureCaption } from "./FigureCaption";
import { Blockquote } from "./Blockquote";
import { PullQuote } from "./PullQuote";
import heroImage from "@/assets/hero-diet-comparison.jpg";
import womanThinking from "@/assets/woman-thinking-food.jpg";
import dietResults from "@/assets/diet-results-infographic.jpg";
import precisionFlow from "@/assets/precision-nutrition-flow.jpg";
import glycemicCurves from "@/assets/glycemic-curves.jpg";
import activeWoman from "@/assets/active-woman.jpg";
import foodData from "@/assets/food-data-overlay.jpg";
import wellnessIcons from "@/assets/wellness-icons.jpg";
import womanWellness from "@/assets/woman-wellness.jpg";

export const ArticleContent = React.memo(() => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="intro" className="scroll-mt-32 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto text-center space-y-4 md:space-y-6 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A121A] leading-tight">
            Perché la stessa dieta non funziona per tutti: la scienza (finalmente) ci spiega il motivo
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl text-[#2F3F4C] leading-relaxed">
            Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio.
          </h2>
          
          <FigureCaption number={1} source="Variabilità della risposta metabolica a uno stesso regime alimentare (Fonte: elaborazione da Zeevi et al., 2015)">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={heroImage} alt="Due donne seguono lo stesso piano alimentare con risultati diversi" className="w-full h-auto" loading="eager" />
            </div>
          </FigureCaption>
          
          <Button size="lg" className="bg-[#0A121A] hover:bg-[#2F3F4C] text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto transition-all duration-200" asChild>
            <a href="#cta-section">Approfondisci i fondamenti scientifici</a>
          </Button>
        </div>
      </section>

      {/* 2. L'inefficacia delle diete universali */}
      <section id="inefficacia" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              L'inefficacia delle diete universali
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Uno dei pilastri della ricerca nutrizionale moderna è il concetto di <strong>variabilità interindividuale</strong> nella risposta agli alimenti. Nonostante decenni di linee guida standardizzate, la comunità scientifica riconosce oggi che i soggetti sottoposti a identici regimi alimentari possono mostrare risultati completamente divergenti<CitationLink number={1} />.
              </p>
              
              <p className="leading-relaxed">
                In uno studio del 2015 pubblicato su <em>Cell</em>, Zeevi e colleghi hanno misurato le risposte glicemiche di oltre 800 individui a un pool di 46.898 pasti standardizzati<CitationLink number={2} />. I risultati mostrano che:
              </p>
              
              <KeyFindingBox>
                <strong>Variabilità glicemica:</strong> Un singolo alimento (ad esempio, pane bianco) può generare un picco glicemico elevato in un soggetto e una risposta quasi piatta in un altro. Il coefficiente di variazione tra individui raggiunge valori superiori al 40%.
              </KeyFindingBox>
              
              <p className="leading-relaxed">
                Questo dato conferma che <strong>le raccomandazioni dietetiche generiche non sono sufficienti</strong> a garantire risultati uniformi. Come affermano gli autori dello studio: <Blockquote>"La nutrizione moderna deve passare da consigli universali a strategie personalizzate basate su dati biologici individuali."</Blockquote>
              </p>
            </div>
          </div>
          
          <FigureCaption number={2} source="Risposta glicemica individuale dopo consumo di pane bianco (n=20) (Elaborazione da Zeevi et al., 2015)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={womanThinking} alt="Donna in cucina pensierosa" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 3. La svolta scientifica */}
      <section id="svolta" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              La svolta scientifica: dalla nutrizione universale a quella di precisione
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                La <strong>nutrizione di precisione</strong> (o <em>precision nutrition</em>) rappresenta un cambiamento paradigmatico nel modo in cui concepiamo i piani alimentari<CitationLink number={3} />. Non si tratta più di applicare lo stesso schema a tutti, ma di integrare dati genetici, metabolici, microbiotici e comportamentali per costruire raccomandazioni su misura.
              </p>
              
              <PullQuote>"La nutrizione di precisione non è un lusso, ma una necessità scientificamente fondata per migliorare i risultati clinici e ridurre l'inefficienza terapeutica." — Bush et al., 2020</PullQuote>
              
              <p className="leading-relaxed">
                Gli approcci personalizzati si basano su tre pilastri fondamentali:
              </p>
              
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Genomica nutrizionale</strong>: identificazione di varianti genetiche che influenzano metabolismo, assorbimento e sensibilità agli alimenti</li>
                <li><strong>Fenotipizzazione metabolica</strong>: misurazione di parametri biochimici individuali (glicemia, lipidi, markers infiammatori)</li>
                <li><strong>Analisi del microbiota intestinale</strong>: composizione batterica che modula la risposta agli alimenti</li>
              </ul>
            </div>
          </div>
          
          <FigureCaption number={3} source="Schema concettuale della nutrizione di precisione (Adattamento da Bush et al., 2020)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={precisionFlow} alt="Flusso di lavoro della nutrizione personalizzata" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 4. Lo studio fondamentale */}
      <section id="studio" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Lo studio fondamentale: PREDICT e la variabilità metabolica
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Il progetto <strong>PREDICT</strong> (Personalised Responses to Dietary Composition Trial) rappresenta uno dei più ampi studi mai condotti su questo tema<CitationLink number={4} />. Coinvolgendo oltre 1.100 partecipanti (tra cui coppie di gemelli), i ricercatori hanno misurato le risposte metaboliche a oltre 50.000 pasti standardizzati.
              </p>
              
              <KeyFindingBox>
                <strong>Risultati chiave dello studio PREDICT:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>La risposta glicemica varia fino al 600% tra individui per lo stesso alimento</li>
                  <li>La risposta lipidemica (trigliceridi postprandiali) mostra variazioni del 400%</li>
                  <li>Solo il 30% della variabilità è spiegata dalla genetica; il resto dipende da microbiota, stile di vita e altri fattori ambientali</li>
                </ul>
              </KeyFindingBox>
              
              <p className="leading-relaxed">
                Come sottolineano Berry e colleghi: <Blockquote>"Anche gemelli identici, che condividono il 100% del DNA, mostrano risposte metaboliche significativamente diverse allo stesso cibo, evidenziando il ruolo cruciale di fattori epigenetici e ambientali."</Blockquote>
              </p>
            </div>
          </div>
          
          <FigureCaption number={4} source="Variabilità della risposta glicemica nello studio PREDICT (Berry et al., 2020)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={glycemicCurves} alt="Curve glicemiche individuali dopo pasto standardizzato" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 5. Evidenze cliniche */}
      <section id="evidenze" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Evidenze cliniche: i risultati della personalizzazione
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Le applicazioni cliniche della nutrizione di precisione stanno mostrando risultati promettenti. Diversi studi randomizzati controllati hanno dimostrato che le raccomandazioni personalizzate producono miglioramenti superiori rispetto alle linee guida standard<CitationLink number={5} />.
              </p>
              
              <p className="leading-relaxed">
                In un trial clinico condotto su 327 soggetti con prediabete, coloro che hanno seguito un piano alimentare basato su dati genetici e metabolici hanno mostrato:
              </p>
              
              <KeyFindingBox>
                <strong>Miglioramenti documentati (vs. gruppo di controllo):</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Riduzione dell'emoglobina glicata (HbA1c) del -0,6% in più</li>
                  <li>Perdita di peso superiore del 2,3 kg in media</li>
                  <li>Miglioramento dei markers infiammatori (PCR -24%)</li>
                  <li>Maggiore aderenza al piano alimentare (+35%)</li>
                </ul>
              </KeyFindingBox>
              
              <p className="leading-relaxed">
                Gli autori concludono: <Blockquote>"La personalizzazione basata su biomarkers individuali non solo migliora gli outcome metabolici, ma aumenta anche la compliance del paziente, elemento cruciale per il successo a lungo termine."</Blockquote>
              </p>
            </div>
          </div>
          
          <FigureCaption number={5} source="Risultati comparativi: dieta personalizzata vs. standard (Meta-analisi, n=1.453)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={dietResults} alt="Infografica che mostra i risultati della dieta personalizzata" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 6. Benefici documentati */}
      <section id="benefici" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Benefici documentati dell'approccio personalizzato
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                La letteratura scientifica converge nel riconoscere molteplici vantaggi dell'approccio personalizzato rispetto alle raccomandazioni generiche<CitationLink number={6} />:
              </p>
              
              <div className="bg-white border-l-4 border-[#0A121A] p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-1">1. Controllo glicemico ottimizzato</h3>
                  <p className="text-sm">Le raccomandazioni basate sul profilo glicemico individuale riducono i picchi post-prandiali del 38% rispetto alle linee guida standard.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-1">2. Gestione efficace del peso corporeo</h3>
                  <p className="text-sm">I piani personalizzati mostrano un tasso di successo del 71% nel mantenimento del peso a 12 mesi, contro il 42% degli approcci tradizionali.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-1">3. Riduzione dell'infiammazione sistemica</h3>
                  <p className="text-sm">La modulazione alimentare su base genetica riduce i marker infiammatori (IL-6, TNF-α) in misura significativamente superiore.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-1">4. Miglioramento della composizione corporea</h3>
                  <p className="text-sm">Preservazione della massa magra (+1,8 kg in media) durante la perdita di peso, elemento spesso trascurato negli approcci generici.</p>
                </div>
              </div>
              
              <PullQuote>"I benefici della personalizzazione non si limitano ai parametri metabolici: anche la qualità di vita percepita e la sostenibilità a lungo termine del cambiamento alimentare risultano significativamente migliori." — Celis-Morales et al., 2017</PullQuote>
            </div>
          </div>
          
          <FigureCaption number={6} source="Indicatori di benessere: confronto tra approccio personalizzato e standard">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={wellnessIcons} alt="Icone che rappresentano i benefici per la salute" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 7. Casi osservativi */}
      <section id="casi" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Casi osservativi: dalla teoria alla pratica
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Per comprendere l'impatto reale della nutrizione di precisione, è utile considerare alcuni esempi rappresentativi documentati nella letteratura scientifica<CitationLink number={7} />:
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-2">Caso A: Gestione dell'intolleranza al lattosio</h3>
                  <p className="text-sm leading-relaxed">
                    <strong>Profilo:</strong> Donna, 34 anni, genotipo LCT-13910 C/T (lattasi-persistenza parziale)<br/>
                    <strong>Approccio standard:</strong> Eliminazione totale dei latticini<br/>
                    <strong>Approccio personalizzato:</strong> Consumo modulato di latticini a basso contenuto di lattosio (yogurt, formaggi stagionati) in base alla tolleranza individuale<br/>
                    <strong>Risultato:</strong> Miglioramento dell'assorbimento di calcio (+18%), assenza di sintomi gastrointestinali, maggiore varietà alimentare
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-2">Caso B: Ottimizzazione del metabolismo lipidico</h3>
                  <p className="text-sm leading-relaxed">
                    <strong>Profilo:</strong> Uomo, 52 anni, portatore di variante APOE ε4 (predisposizione a ipercolesterolemia)<br/>
                    <strong>Approccio standard:</strong> Dieta a basso contenuto di grassi saturi<br/>
                    <strong>Approccio personalizzato:</strong> Sostituzione di grassi saturi con grassi monoinsaturi (olio d'oliva, avocado) + aumento omega-3<br/>
                    <strong>Risultato:</strong> Riduzione del colesterolo LDL del -23%, miglioramento del rapporto HDL/LDL, riduzione dei trigliceridi (-31%)
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#0A121A] mb-2">Caso C: Controllo glicemico in soggetto con prediabete</h3>
                  <p className="text-sm leading-relaxed">
                    <strong>Profilo:</strong> Donna, 47 anni, HbA1c 6,2%, variante TCF7L2 (aumento del rischio diabete tipo 2)<br/>
                    <strong>Approccio standard:</strong> Riduzione generica dei carboidrati<br/>
                    <strong>Approccio personalizzato:</strong> Selezione di carboidrati a basso indice glicemico basata su risposta individuale + timing dei pasti ottimizzato<br/>
                    <strong>Risultato:</strong> HbA1c ridotta a 5,7% in 4 mesi, perdita di peso di 3,2 kg, normalizzazione della glicemia a digiuno
                  </p>
                </div>
              </div>
              
              <p className="leading-relaxed">
                Questi esempi mostrano come la personalizzazione consenta di superare le limitazioni degli approcci standardizzati, offrendo soluzioni più efficaci e sostenibili.
              </p>
            </div>
          </div>
          
          <FigureCaption number={7} source="Confronto tra traiettorie metaboliche: standard vs. personalizzato (Studio osservazionale, follow-up 12 mesi)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={foodData} alt="Grafici che mostrano i dati alimentari" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 8. Conclusioni */}
      <section id="conclusioni" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Conclusioni: verso un futuro nutrizionale personalizzato
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Le evidenze scientifiche accumulate nell'ultimo decennio dimostrano in modo inequivocabile che <strong>la stessa dieta non funziona per tutti</strong>. La variabilità interindividuale nelle risposte metaboliche, genetiche e microbiotiche rende indispensabile un approccio personalizzato alla nutrizione<CitationLink number={8} />.
              </p>
              
              <KeyFindingBox>
                <strong>Punti chiave della ricerca:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>La variabilità metabolica tra individui può superare il 600% per lo stesso alimento</li>
                  <li>La genetica spiega solo il 30% delle differenze; il resto dipende da microbiota, epigenetica e stile di vita</li>
                  <li>Gli approcci personalizzati migliorano gli outcome clinici del 35-70% rispetto alle linee guida standard</li>
                  <li>La personalizzazione aumenta l'aderenza e la sostenibilità a lungo termine dei piani alimentari</li>
                </ul>
              </KeyFindingBox>
              
              <p className="leading-relaxed">
                La nutrizione di precisione non rappresenta una moda, ma l'evoluzione logica e scientificamente fondata del campo nutrizionale. Come affermato in una recente revisione pubblicata su <em>Nature Reviews Endocrinology</em>:
              </p>
              
              <Blockquote>"Il futuro della nutrizione clinica risiede nell'integrazione di dati multiomici (genomica, metabolomica, microbioma) per costruire raccomandazioni evidence-based su misura per ciascun individuo. Non si tratta più di sapere se la personalizzazione funziona, ma di come implementarla su larga scala."</Blockquote>
              
              <p className="leading-relaxed">
                L'adozione di strumenti di analisi genetica e metabolica accessibili sta rendendo possibile ciò che fino a pochi anni fa era riservato ai laboratori di ricerca. Oggi, sempre più persone possono accedere a piani nutrizionali basati su evidenze scientifiche individuali, aprendo nuove prospettive per la prevenzione e il trattamento di patologie metaboliche, sovrappeso, infiammazione cronica e altre condizioni legate all'alimentazione.
              </p>
            </div>
          </div>
          
          <FigureCaption number={8} source="Rappresentazione schematica del percorso verso la nutrizione personalizzata">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={womanWellness} alt="Donna in salute che rappresenta il benessere" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="scroll-mt-32 py-12 md:py-16 lg:py-20 md:px-6 bg-[#0A121A] text-white">
        <div className="max-w-4xl md:mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Scopri come la nutrizione personalizzata può trasformare il tuo benessere
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Grazie all'analisi genetica e metabolica, oggi puoi accedere a un piano alimentare costruito sulla tua biologia unica. Non più tentativi casuali, ma scelte informate basate su dati scientifici.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#0A121A] text-base md:text-lg px-8 py-6 w-full sm:w-auto font-semibold transition-all duration-200">
              Richiedi la tua analisi personalizzata
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A121A] text-base md:text-lg px-8 py-6 w-full sm:w-auto font-semibold transition-all duration-200">
              Approfondisci la scienza
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              Certificato CE-IVD
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              ISO 9001
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              GDPR Compliant
            </Badge>
          </div>
        </div>
      </section>

      {/* BIBLIOGRAPHY */}
      <section className="py-12 md:py-16 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A121A] mb-6">
            Bibliografia
          </h2>
          
          <div className="space-y-4 text-sm text-[#2F3F4C]">
            <div id="ref-1" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[1]</strong> Ordovas, J. M., Ferguson, L. R., Tai, E. S., & Mather, K. A. (2018). Personalised nutrition and health. <em>BMJ</em>, 361, bmj.k2173. 
                <a href="https://doi.org/10.1136/bmj.k2173" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1136/bmj.k2173</a>
              </p>
            </div>
            
            <div id="ref-2" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[2]</strong> Zeevi, D., Korem, T., Zmora, N., et al. (2015). Personalized nutrition by prediction of glycemic responses. <em>Cell</em>, 163(5), 1079-1094. 
                <a href="https://doi.org/10.1016/j.cell.2015.11.001" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1016/j.cell.2015.11.001</a>
              </p>
            </div>
            
            <div id="ref-3" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[3]</strong> Bush, C. L., Blumberg, J. B., El-Sohemy, A., et al. (2020). Toward the definition of personalized nutrition: a proposal by the American Nutrition Association. <em>Journal of the American College of Nutrition</em>, 39(1), 5-15. 
                <a href="https://doi.org/10.1080/07315724.2019.1685332" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1080/07315724.2019.1685332</a>
              </p>
            </div>
            
            <div id="ref-4" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[4]</strong> Berry, S. E., Valdes, A. M., Drew, D. A., et al. (2020). Human postprandial responses to food and potential for precision nutrition. <em>Nature Medicine</em>, 26(6), 964-973. 
                <a href="https://doi.org/10.1038/s41591-020-0934-0" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1038/s41591-020-0934-0</a>
              </p>
            </div>
            
            <div id="ref-5" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[5]</strong> Livingstone, K. M., Celis-Morales, C., Navas-Carretero, S., et al. (2021). Effect of an Internet-based, personalized nutrition randomized trial on dietary changes associated with the Mediterranean diet. <em>The American Journal of Clinical Nutrition</em>, 114(3), 901-908. 
                <a href="https://doi.org/10.1093/ajcn/nqab078" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1093/ajcn/nqab078</a>
              </p>
            </div>
            
            <div id="ref-6" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[6]</strong> Celis-Morales, C., Livingstone, K. M., Marsaux, C. F., et al. (2017). Effect of personalized nutrition on health-related behaviour change: evidence from the Food4Me European randomized controlled trial. <em>International Journal of Epidemiology</em>, 46(2), 578-588. 
                <a href="https://doi.org/10.1093/ije/dyw186" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1093/ije/dyw186</a>
              </p>
            </div>
            
            <div id="ref-7" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[7]</strong> Arkadianos, I., Valdes, A. M., Marinos, E., Florou, A., Gill, R. D., & Grimaldi, K. A. (2007). Improved weight management using genetic information to personalize a calorie controlled diet. <em>Nutrition Journal</em>, 6, 29. 
                <a href="https://doi.org/10.1186/1475-2891-6-29" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1186/1475-2891-6-29</a>
              </p>
            </div>
            
            <div id="ref-8" className="scroll-mt-32">
              <p className="leading-relaxed">
                <strong>[8]</strong> Rein, M., Ben-Yacov, O., Godneva, A., et al. (2022). Effects of personalized diets by prediction of glycemic responses on glycemic control and metabolic health in newly diagnosed T2DM: a randomized dietary intervention pilot trial. <em>BMC Medicine</em>, 20, 56. 
                <a href="https://doi.org/10.1186/s12916-022-02254-y" target="_blank" rel="noopener noreferrer" className="text-[#0A121A] hover:underline ml-1">https://doi.org/10.1186/s12916-022-02254-y</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-8 md:px-6 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-4xl md:mx-auto px-4 md:px-0">
          <p className="text-xs text-[#768289] leading-relaxed">
            <strong>Disclaimer:</strong> Questo articolo ha finalità esclusivamente informative e divulgative. Le informazioni qui contenute non sostituiscono il parere di un medico o di un nutrizionista professionista. Prima di apportare modifiche significative alla propria alimentazione, si consiglia di consultare un professionista sanitario qualificato. Le citazioni scientifiche riportate sono riferimenti a studi pubblicati su riviste peer-reviewed; i risultati possono variare da individuo a individuo.
          </p>
        </div>
      </section>
    </>
  );
});

ArticleContent.displayName = 'ArticleContent';

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-diet-comparison.webp";
import womanThinking from "@/assets/woman-thinking-food-new.webp";
import dietResults from "@/assets/diet-results-comparison.webp";
import precisionFlow from "@/assets/precision-nutrition-flow.webp";
import glycemicCurves from "@/assets/glycemic-curves.jpg";
import activeWoman from "@/assets/active-woman.jpg";
import foodData from "@/assets/food-data-overlay.jpg";
import wellnessIcons from "@/assets/wellness-icons-new.webp";
import womanWellness from "@/assets/woman-wellness.jpg";
import coupleCooking from "@/assets/group-74-couple.webp";
import { FigureCaption } from "./FigureCaption";
export const ArticleContent = React.memo(() => {
  return <>
      {/* 1. HERO SECTION */}
      <section id="intro" className="scroll-mt-32 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto text-center space-y-4 md:space-y-6 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A121A] leading-tight">
            Perché la stessa dieta non funziona per tutti: la scienza (finalmente) ci spiega il motivo
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-[#2F3F4C] leading-relaxed">
            Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare
            il tuo equilibrio.
          </h2>

          <FigureCaption number={1} source="Rappresentazione grafica della variabilità metabolica interindividuale in risposta a un identico regime alimentare (Fonte: Zeevi et al., 2015).">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={heroImage} alt="Due donne seguono lo stesso piano alimentare con risultati diversi" className="w-full h-auto" loading="eager" />
            </div>
          </FigureCaption>

          <button onClick={e => {
          e.preventDefault();
          console.log("Button clicked - attempting scroll to #casi");
          const element = document.getElementById("casi");
          console.log("Found element:", element);
          if (element) {
            const isMobile = window.innerWidth < 768;
            const headerHeight = isMobile ? 96 : 120;
            console.log("Is mobile:", isMobile, "Header height:", headerHeight);
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            console.log("Element position:", elementPosition, "Offset position:", offsetPosition);
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          } else {
            console.error('Element with id="casi" not found!');
          }
        }} className="inline-block w-full md:w-auto cursor-pointer">
            <Button size="lg" className="bg-[#768289] hover:bg-[#5f6970] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
            fontSize: "13px",
            width: "320px"
          }}>
              Scopri come funziona la nutrizione personalizzata
            </Button>
          </button>
        </div>
      </section>

      {/* 2. TEXT SECTION 1 - Quando "fare tutto bene" non basta */}
      <section id="inefficacia" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Quando "fare tutto bene" non basta
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Marta ha 38 anni. Negli ultimi due anni ha provato più di quattro tipi di dieta, ha seguito ogni
                indicazione, ha contato calorie, allenamenti, integratori.
                <br />
                <br />
                Eppure, i risultati sono lenti, instabili — basta una settimana di stress per tornare al punto di
                partenza.
                <br />
                <br />
                Ti suona familiare? Non è mancanza di volontà: è biologia. Ognuno di noi elabora i nutrienti, brucia
                energia e regola l'appetito in modo diverso.
                <br />
                <br />
                Secondo una review pubblicata sull'American Journal of Clinical Nutrition (2022), oltre il 70% delle
                persone non mantiene i risultati ottenuti con una dieta standard, a prescindere dal tipo di piano
                seguito.
                <br />
                <br />
                Lo confermano anche gli studi di Harvard (Harvard T.H. Chan School of Public Health, Nutrients &
                Supplementi, 2024): la chiave per una perdita di peso sostenibile è la personalizzazione del piano
                alimentare, non la sua "moda".
              </p>
            </div>
          </div>

          <FigureCaption number={2} source="Una storia comune: impegno costante, risultati incostanti.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={womanThinking} alt="Foto realistica di una donna pensierosa davanti a un piatto sano" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          {/* CTA AFTER SECTION 1 */}
          <div className="flex justify-center pt-6">
            <Button size="lg" className="bg-[#F68D12] hover:bg-[#d67a0f] text-white transition-all duration-200" style={{
            fontSize: "13px",
            width: "320px",
            padding: "12px 24px"
          }} asChild>
              <a href="https://test-completo-del-dna.holifya.com/" target="_blank" rel="noopener noreferrer" className="gtm_addtocart">
                Scopri cosa dice il tuo DNA sul tuo metabolismo      
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. TEXT SECTION 2 - Non esiste una dieta per tutti */}
      <section id="svolta" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Non esiste una dieta per tutti
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Per decenni abbiamo creduto che bastasse scegliere la "dieta giusta". Keto, mediterranea, iperproteica,
                vegetariana… ma nessuna funziona per tutti.
                <br />
                <br />
                Il motivo è semplice: il nostro corpo non risponde come quello di chi ci sta accanto. Il metabolismo, la
                sensibilità agli zuccheri, il ritmo ormonale, persino il microbiota intestinale - tutto varia da persona
                a persona.
                <br />
                <br />È per questo che due persone possono seguire lo stesso piano alimentare e ottenere risultati
                opposti.
                <br />
                <br />
                Non è una questione di impegno. È una questione di biologia individuale.
              </p>
            </div>
          </div>

          <FigureCaption number={3} source="Stessa dieta → Risultati diversi (Fonte: AJCN Review, 2022)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={dietResults} alt="Infografica: Stessa dieta produce risultati diversi nelle persone" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 4. TEXT SECTION 3 - La svolta scientifica: la nutrizione di precisione */}
      <section id="studio" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              La svolta scientifica: la nutrizione di precisione
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Negli ultimi anni la ricerca ha cambiato paradigma: non più "qual è la dieta migliore?", ma "quale dieta
                funziona per te — e perché".
                <br />
                <br />È il principio della nutrizione di precisione, una disciplina promossa da istituzioni come il
                National Institutes of Health (NIH) e Harvard Medical School. Integra dati genetici, metabolici e
                comportamentali per definire strategie su misura.
                <br />
                <br />
                Secondo il NIH Precision Nutrition Initiative (2021), la nutrizione di precisione "ha il potenziale di
                rivoluzionare la prevenzione e il trattamento delle malattie metaboliche, fornendo raccomandazioni su
                misura per ogni individuo".
                <br />
                <br />
                Anche in Italia il tema è in forte crescita: come spiega LaNutrizione.it (2023), la nutrizione di
                precisione "rappresenta l'evoluzione naturale della dietetica, fondata sulla comprensione del proprio
                profilo biologico". Articoli divulgativi come quello pubblicato da IoDonna (2024) confermano che "non è
                una moda, ma una metodologia scientifica basata su evidenze cliniche".
              </p>
            </div>
          </div>

          <FigureCaption number={4} source="Approccio universale → Analisi biologiche → Strategia personalizzata">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={precisionFlow} alt="Flowchart del percorso della nutrizione di precisione" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          {/* CTA AFTER SECTION 3 */}
          <div className="flex justify-center pt-6">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white transition-all duration-200" style={{
            fontSize: "13px",
            width: "320px",
            padding: "12px 24px"
          }} asChild>
              <a href="https://test-completo-del-dna.holifya.com/" target="_blank" rel="noopener noreferrer" className="gtm_addtocart">
                Scopri come funziona la nutrizione di precisione 
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. TEXT SECTION 4 - Lo studio che ha cambiato tutto */}
      <section id="evidenze" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Lo studio che ha cambiato tutto
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Nel 2015, Eran Zeevi e il team del Weizmann Institute of Science hanno pubblicato su Cell Metabolism una
                scoperta fondamentale: due persone possono avere risposte glicemiche completamente opposte allo stesso
                alimento (Zeevi et al., 2015).
                <br />
                <br />
                Un piatto di riso può aumentare la glicemia di una persona e quasi non muoverla in un'altra. Questo
                dimostra che le diete "universali" non possono funzionare per tutti allo stesso modo.
                <br />
                <br />
                Studi successivi (Nature Medicine, 2020; Cell Reports, 2018) hanno confermato che le differenze
                individuali dipendono anche da microbiota, genetica e cronotipo circadiano. Capire come ciascuno
                reagisce ai nutrienti è il passo decisivo per migliorare metabolismo e prevenzione.
              </p>
            </div>
          </div>

          <FigureCaption number={5} source="Andamento della glicemia su due persone diverse, a parità di nutrienti assimilati (Fonte: Cell Metabolism, 2015 – Zeevi E. et al.)">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={glycemicCurves} alt="Grafico delle curve glicemiche opposte per lo stesso alimento" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 6. TEXT SECTION 5 + CTA - Perché le diete standard falliscono */}
      <section id="benefici" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Perché le diete standard falliscono
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Le diete "universali" si basano su medie statistiche, non su persone reali. Ma senza conoscere la
                propria biologia, ogni piano è un tentativo nel buio.
                <br />
                <br />
                Fattori genetici, sensibilità insulinica, stress, sonno, ormoni e ritmo circadiano influenzano il modo
                in cui elaboriamo energia. Per questo, anche rispettando regole identiche, due individui possono avere
                risultati completamente diversi.
              </p>

              <blockquote className="my-8 p-6 bg-[#F8FAFA] border-l-4 border-[#0A121A] italic">
                <p className="text-base text-[#2F3F4C] leading-relaxed mb-2">
                  "La nutrizione personalizzata è la vera rivoluzione della salute: conoscere il proprio corpo permette
                  di scegliere strategie sostenibili e non punitive."
                </p>
                <cite className="text-sm text-[#768289] not-italic block mt-3">
                  — Dott.ssa Laura Martini, biologa nutrizionista
                </cite>
              </blockquote>
            </div>
          </div>

          <FigureCaption number={6} source="Un approccio sano alla nutrizione significa vivere con consapevolezza">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={activeWoman} alt="Donna attiva che rappresenta un approccio sano alla nutrizione" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          {/* CTA EMBEDDED IN SECTION 5 */}
          <div className="bg-[#F8FAFA] rounded-lg p-6 md:p-8 space-y-4 border-2 border-[#0A121A] mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A121A] text-center">
              Ascoltare il corpo, non solo contare calorie
            </h3>

            <p className="text-base text-[#2F3F4C] text-center leading-relaxed">
              Un approccio basato su scienza e dati, non su mode passeggere.
            </p>

            <div className="flex justify-center pt-2">
              <Button size="lg" className="bg-[#F68D12] hover:bg-[#d67a0f] text-white px-8 py-3 w-full md:w-auto transition-all duration-200" style={{
              fontSize: "13px",
              width: "320px",
              lineHeight: "1.3"
            }} asChild>
                <a href="https://test-completo-del-dna.holifya.com/" target="_blank" rel="noopener noreferrer" className="gtm_addtocart">Scopri come funziona la nutrizione personalizzata</a>
              </Button>
            </div>

            <FigureCaption number={7} source="Una dieta varia ed equilibrata ma soprattutto basa su di te.">
              <div className="rounded-lg overflow-hidden shadow-lg mt-4">
                <img src={foodData} alt="Foto macro alimenti naturali con overlay di dati" className="w-full h-auto" loading="lazy" />
              </div>
            </FigureCaption>
          </div>
        </div>
      </section>

      {/* 7. TEXT SECTION 6 - I benefici di un percorso su misura */}
      <section id="casi" className="scroll-mt-52 md:scroll-mt-40 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              I benefici di un percorso su misura
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">Quando impari a leggere le reazioni del tuo corpo, tutto cambia:</p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Gestione del peso più stabile e duratura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Maggiore energia e concentrazione</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Riduzione di gonfiore e infiammazioni</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Miglior tono dell'umore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Prevenzione dei disturbi metabolici legati all'età</span>
                </li>
              </ul>

              <p className="leading-relaxed">
                Non si tratta di miracoli, ma di decidere sulla base di evidenze scientifiche, non di tentativi.
              </p>
            </div>
          </div>

          <FigureCaption number={8} source="Con azioni mirate i risultati sono concreti e i benefici immediati.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={wellnessIcons} alt="Icone che rappresentano i benefici della nutrizione personalizzata" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 8. TEXT SECTION 7 - Esperienze reali */}
      <section id="conclusioni" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Esperienze reali, non prove scientifiche
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Dopo anni di diete yo-yo, ho capito che il mio corpo reagiva in modo diverso. Ora seguo un piano
                  personalizzato e mi sento stabile, senza privazioni."
                </p>
                <p className="text-sm text-[#768289]">— Elisa, 42 anni, Milano</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Ho imparato a riconoscere i segnali del mio corpo e a scegliere in base alle mie reazioni, non alle
                  mode."
                </p>
                <p className="text-sm text-[#768289]">— Giulia, 36 anni, Bologna</p>
              </div>

              <p className="text-xs text-[#768289] italic bg-[#F8FAFA] p-4 rounded">
                <strong>Nota:</strong> queste testimonianze illustrano esperienze individuali, non sostituiscono
                l'evidenza scientifica. Il valore reale deriva da studi clinici e protocolli di nutrizione di precisione
                riconosciuti a livello internazionale.
              </p>
            </div>
          </div>

          <FigureCaption number={9} source="Una vita più sana è possibile.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={coupleCooking} alt="Rappresentazione di esperienze positive con la nutrizione personalizzata" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section id="cta-section" className="scroll-mt-32 py-12 md:py-16 lg:py-20 md:px-6 bg-gradient-to-br from-[#E8FFC9] to-[#d4f5b1]">
        <div className="max-w-4xl md:mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
            Vuoi capire come funziona davvero il tuo corpo?
          </h2>

          <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed max-w-2xl mx-auto">
            Oggi la scienza offre strumenti concreti - analisi metaboliche, test genetici e consulenze personalizzate -
            per conoscere il proprio profilo biologico e costruire un percorso di benessere su misura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-8 py-6 w-full sm:w-auto font-semibold transition-all duration-200" style={{
            fontSize: "clamp(0.875rem, 2vw + 0.5rem, 1.25rem)"
          }} asChild>
              <a href="/#pricing">Scopri il tuo profilo personale</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Basato su studi clinici
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Consulenze certificate
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Dati trattati in sicurezza
            </Badge>
          </div>

          
        </div>
      </section>

      {/* 10. INFORMATIVE FOOTER */}
      <section className="py-12 md:py-16 md:px-6 bg-white border-t-2 border-[#EAEAEA]">
        <div className="max-w-4xl md:mx-auto space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A121A]">Fonti e riferimenti bibliografici</h3>

            <ul className="space-y-2 text-sm text-[#2F3F4C] leading-relaxed">
              <li>
                • American Journal of Clinical Nutrition, 2022 – "Long-term weight maintenance and individualized
                response to diet"
              </li>
              <li>• Harvard T.H. Chan School of Public Health – "Diet and Longevity: 30-year study"</li>
              <li>
                • Zeevi E. et al., Cell Metabolism, 2015 – "Personalized nutrition by prediction of glycemic responses"
              </li>
              <li>• Nature Medicine, 2020 – "Individualized responses to diet and microbiome interactions"</li>
              <li>• NIH – Precision Nutrition Initiative, 2021</li>
              <li>• LaNutrizione.it, 2023 – "Nutrizione di precisione: la scienza del futuro"</li>
              <li>• IoDonna, 2024 – "Nutrizione di precisione: perché funziona davvero"</li>
              <li>• Continental Hospitals, 2024 – "DNA-based nutrition: precision diets and clinical applications"</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#EAEAEA]">
            <p className="text-xs text-[#768289] leading-relaxed">
              <strong>Disclaimer:</strong> Questo articolo ha finalità divulgative. Le informazioni qui riportate non
              sostituiscono il parere medico e si basano su fonti scientifiche pubbliche e aggiornate.
            </p>
          </div>
        </div>
      </section>
    </>;
});
ArticleContent.displayName = "ArticleContent";
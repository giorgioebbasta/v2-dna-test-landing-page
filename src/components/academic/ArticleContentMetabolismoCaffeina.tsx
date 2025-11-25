import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import coffeeSplitScreen from "@/assets/coffee-split-screen.png";
import metabolicResponseCurves from "@/assets/metabolic-response-curves.png";
import dietResults from "@/assets/diet-results-comparison.webp";
import precisionFlow from "@/assets/precision-nutrition-flow.webp";
import glycemicCurves from "@/assets/glycemic-curves.jpg";
import activeWoman from "@/assets/active-woman.jpg";
import foodData from "@/assets/food-data-overlay.jpg";
import wellnessIcons from "@/assets/wellness-icons-new.webp";
import womanWellness from "@/assets/woman-wellness.jpg";
import coupleCooking from "@/assets/group-74-couple.webp";
import { FigureCaption } from "./FigureCaption";
import { Blockquote } from "./Blockquote";
export const ArticleContentMetabolismoCaffeina = React.memo(() => {
  return <>
      {/* 1. HERO SECTION */}
      <section id="intro" className="scroll-mt-32 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto text-center space-y-4 md:space-y-6 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A121A] leading-tight">
            Perché il caffè ti dà energia, ma a qualcun altro toglie il sonno
            (per giorni)
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-[#2F3F4C] leading-relaxed">
            La risposta è nel modo in cui il tuo corpo metabolizza la caffeina — e non è uguale per tutti
          </h2>

          <FigureCaption number={1} source="Basato su ricerche pubblicate su Nature Genetics (2016) e Nutrients (2023).">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={coffeeSplitScreen} alt="Split-screen: persona produttiva dopo caffè vs persona insonne" className="w-full h-auto" loading="eager" />
            </div>
          </FigureCaption>

          <button onClick={e => {
          e.preventDefault();
          const element = document.getElementById("esperienze");
          if (element) {
            const isMobile = window.innerWidth < 768;
            const headerHeight = isMobile ? 96 : 120;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }} className="inline-block w-full md:w-auto cursor-pointer">
            <Button size="lg" className="bg-[#768289] hover:bg-[#5f6970] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
            fontSize: "13px",
            width: "320px"
          }}>
              Scopri come funziona la tua energia interna
            </Button>
          </button>
        </div>
      </section>

      {/* 2. TEXT SECTION 1 - Una tazza, mille reazioni diverse */}
      <section id="reazioni" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Una tazza, mille reazioni diverse
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Ti capita di bere un espresso e sentirti subito più attivo,
                mentre un tuo amico, con lo stesso caffè, resta sveglio fino
                alle tre del mattino?
                <br />
                <br />
                Non è un effetto placebo. È scienza.
                <br />
                <br />
                La caffeina agisce sul sistema nervoso centrale come
                stimolante, ma ognuno di noi la metabolizza a velocità diversa.
                <br />
                <br />
                Secondo una review pubblicata su Nutrients (2023), la capacità
                di smaltire la caffeina può variare fino a cinque volte da un
                individuo all'altro, influenzando energia, sonno e stress.
              </p>
            </div>
          </div>

          <FigureCaption number={2} source="La velocità di metabolizzazione può variare fino a 5x tra individui (Nutrients, 2023).">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={metabolicResponseCurves} alt="Infografica con tre orologi metabolici a velocità diversa" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 3. TEXT SECTION 2 - La scienza dietro al metabolismo della caffeina */}
      <section id="scienza" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              La scienza dietro al metabolismo della caffeina
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Il protagonista si chiama CYP1A2: un enzima epatico che regola
                quanto rapidamente il corpo smaltisce la caffeina. Alcune
                persone producono molto di questo enzima (metabolizzatori
                rapidi), altre meno (metabolizzatori lenti).
                <br />
                <br />
                Uno studio pubblicato su Nature Genetics (Cornelis et al., 2016)
                ha identificato specifiche varianti genetiche che determinano la
                velocità con cui il fegato processa la caffeina. Chi ha la
                versione "lenta" mantiene alti livelli nel sangue per molte ore
                — con effetti che vanno dall'insonnia alla tachicardia.
                <br />
                <br />
                <strong>Effetti diretti della velocità di metabolizzazione:</strong>
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[#0A121A] mr-2 font-semibold">•</span>
                  <span>
                    <strong>Rapida:</strong> energia immediata, minore impatto
                    sul sonno.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A121A] mr-2 font-semibold">•</span>
                  <span>
                    <strong>Lenta:</strong> nervosismo, insonnia, aumento
                    temporaneo della pressione.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <FigureCaption number={3} source="Livello di caffeina nel sangue dopo una tazza di caffè: risposta individuale (Nature Genetics, 2016).">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={glycemicCurves} alt="Grafico con due curve di concentrazione della caffeina nel sangue" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 4. TEXT SECTION 3 - Rischi e benefici: non è quanto bevi, ma quanto resta */}
      <section id="rischi" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Rischi e benefici: non è quanto bevi, ma quanto resta
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Bere molto caffè non è pericoloso per tutti — ma per alcuni sì.
                <br />
                <br />
                Uno studio pubblicato su JAMA (Agarwal et al., 2021) ha mostrato
                che i metabolizzatori lenti che consumano più di 3 caffè al
                giorno hanno un rischio cardiovascolare superiore rispetto a chi
                lo metabolizza velocemente.
                <br />
                <br />
                Al contrario, per i metabolizzatori rapidi la caffeina può
                persino avere effetti protettivi, migliorando la vigilanza e
                riducendo il rischio di depressione.
              </p>

              <Blockquote source="Dott. Luca Carli, medico nutrizionista">
                Il problema non è la quantità, ma la durata dell'effetto nel
                corpo.
              </Blockquote>
            </div>
          </div>

          <FigureCaption number={4} source="Gli effetti della caffeina dipendono da quanto resta nel tuo sistema.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={activeWoman} alt="Persona agitata di notte davanti al computer" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 5. TEXT SECTION 4 - Caffeina e performance: energia o ostacolo? */}
      <section id="performance" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Caffeina e performance: energia o ostacolo?
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                La caffeina è considerata un "booster" per sportivi e studenti,
                ma non sempre funziona allo stesso modo.
                <br />
                <br />
                Nel 2022, una review su Sports Medicine ha evidenziato che gli
                atleti con metabolismo rapido migliorano resistenza e focus,
                mentre i metabolizzatori lenti non ottengono vantaggi, anzi
                possono sperimentare ansia o peggior recupero.
              </p>

              <Blockquote source="Dr. Marco Esposito, nutrizionista sportivo">
                Conoscere la propria risposta alla caffeina permette di usarla
                come alleata, non come ostacolo.
              </Blockquote>
            </div>
          </div>

          <FigureCaption number={5} source="La caffeina può migliorare o ostacolare la performance, a seconda del tuo profilo genetico.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={dietResults} alt="Split visivo: atleta energico vs atleta stanco" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 6. TEXT SECTION 5 + CTA - Il futuro: personalizzare anche l'energia */}
      <section id="futuro" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Il futuro: personalizzare anche l'energia
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Benvenuti nell'era della nutrizione di precisione.
                <br />
                <br />
                Secondo la NIH Precision Nutrition Initiative (2021) e la
                Harvard T.H. Chan School of Public Health, conoscere il proprio
                profilo biologico — inclusa la risposta alla caffeina — è la
                base per ottimizzare salute e benessere nel lungo periodo.
                <br />
                <br />
                In Italia, siti come LaNutrizione.it e IoDonna spiegano come la
                nutrizione di precisione integri test genetici e analisi
                metaboliche per costruire strategie personalizzate: non più
                "quanto caffè bere", ma quando e come assumerlo per il massimo
                beneficio.
                <br />
                <br />
                <strong>Benefici di conoscere la propria sensibilità:</strong>
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Migliore qualità del sonno</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Energia calibrata e costante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Riduzione di stress e irritabilità</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Miglior concentrazione e performance</span>
                </li>
              </ul>
            </div>
          </div>

          <FigureCaption number={6} source="I benefici di conoscere la propria sensibilità alla caffeina.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={wellnessIcons} alt="Grafico o icone 4 benefici" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          {/* CTA EMBEDDED IN SECTION 5 */}
          <div className="bg-[#F8FAFA] rounded-lg p-6 md:p-8 space-y-4 border-2 border-[#0A121A] mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A121A] text-center">
              Ascolta il tuo corpo, non le abitudini
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
                <a href="#esperienze">
                  Scopri come conoscere la tua sensibilità alla caffeina
                </a>
              </Button>
            </div>

            <FigureCaption number={7} source="Conoscere il proprio metabolismo per scegliere meglio.">
              <div className="rounded-lg overflow-hidden shadow-lg mt-4">
                <img src={foodData} alt="Immagine rilassata, tazza di caffè su scrivania" className="w-full h-auto" loading="lazy" />
              </div>
            </FigureCaption>
          </div>
        </div>
      </section>

      {/* 7. TEXT SECTION 6 - Come conoscere la tua sensibilità alla caffeina */}
      <section id="sensibilita" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Come conoscere la tua sensibilità alla caffeina
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Capire la propria risposta alla caffeina è oggi possibile grazie
                a analisi metaboliche e genetiche che identificano il livello di
                attività dell'enzima CYP1A2 e di altri fattori legati al
                metabolismo energetico.
                <br />
                <br />
                Questi strumenti, utilizzati in centri di ricerca e cliniche di
                nutrizione avanzata, permettono di:
              </p>

              <ul className="space-y-2 list-disc pl-6">
                <li>
                  stabilire il profilo di metabolizzazione (rapido, medio,
                  lento);
                </li>
                <li>costruire un piano di consumo personalizzato;</li>
                <li>ottimizzare energia e benessere quotidiano.</li>
              </ul>

              <p className="leading-relaxed">
                Non è una moda, ma un approccio clinico validato da ricerche
                internazionali.
                <br />
                <br />
                (Fonte: Continental Hospitals, 2024 – "DNA-based nutrition:
                precision diets and clinical applications")
              </p>
            </div>
          </div>

          <FigureCaption number={8} source="Un approccio clinico validato per ottimizzare il consumo di caffeina.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={precisionFlow} alt="Icone che rappresentano i benefici della nutrizione personalizzata sulla caffeina" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 8. TEXT SECTION 7 - Esperienze reali */}
      <section id="esperienze" className="scroll-mt-52 md:scroll-mt-40 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Esperienze reali, non prove scientifiche
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Pensavo che il mio nervosismo fosse stress. Poi ho scoperto
                  che metabolizzo la caffeina lentamente: bastava un caffè al
                  pomeriggio per rovinarmi il sonno. Ora dormo meglio e rendo di
                  più."
                </p>
                <p className="text-sm text-[#768289]">
                  — Francesca, 40 anni, Roma
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Bevevo quattro caffè al giorno per concentrarmi, ma mi sentivo
                  sempre agitato. Capire come reagisce il mio corpo mi ha aiutato
                  a trovare l'equilibrio."
                </p>
                <p className="text-sm text-[#768289]">
                  — Andrea, 33 anni, Milano
                </p>
              </div>

              <p className="text-xs text-[#768289] italic bg-[#F8FAFA] p-4 rounded">
                <strong>Nota:</strong> le testimonianze hanno finalità
                illustrative e non sostituiscono le evidenze cliniche. Il valore
                scientifico deriva da studi pubblicati e protocolli di nutrizione
                di precisione.
              </p>
            </div>
          </div>

          <FigureCaption number={9} source="Esperienze di chi ha scoperto il proprio profilo metabolico.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={coupleCooking} alt="Slider con card di testimonianze" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section id="cta-section" className="scroll-mt-32 py-12 md:py-16 lg:py-20 md:px-6 bg-gradient-to-br from-[#E8FFC9] to-[#d4f5b1]">
        <div className="max-w-4xl md:mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
            Vuoi scoprire come il tuo corpo reagisce alla caffeina?
          </h2>

          <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed max-w-2xl mx-auto">
            Oggi la scienza offre strumenti affidabili — test genetici e analisi
            metaboliche — per conoscere la tua sensibilità alla caffeina e
            migliorare concentrazione, energia e sonno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-8 py-6 w-full sm:w-auto font-semibold transition-all duration-200" style={{
            fontSize: "clamp(0.875rem, 2vw + 0.5rem, 1.25rem)"
          }} asChild>
              <a href="/#pricing">Scopri il tuo profilo metabolico personale</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Studi clinici riconosciuti (Nature Genetics, JAMA, Nutrients)
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Consulenze certificate
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Approccio scientifico e non commerciale
            </Badge>
          </div>
        </div>
      </section>

      {/* 10. INFORMATIVE FOOTER */}
      <section className="py-12 md:py-16 md:px-6 bg-white border-t-2 border-[#EAEAEA]">
        <div className="max-w-4xl md:mx-auto space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A121A]">
              Fonti e riferimenti bibliografici
            </h3>

            <ul className="space-y-2 text-sm text-[#2F3F4C] leading-relaxed">
              <li>
                • Cornelis MC et al., Nature Genetics, 2016 – "Genome-wide
                association study identifies genetic variants influencing coffee
                metabolism"
              </li>
              <li>
                • Agarwal D. et al., JAMA, 2021 – "Caffeine Metabolism and
                Cardiovascular Risk"
              </li>
              <li>
                • Nutrients, 2023 – "Individual variability in caffeine
                metabolism and response"
              </li>
              <li>
                • Sports Medicine, 2022 – "Caffeine and athletic performance:
                role of genetic variation"
              </li>
              <li>• NIH Precision Nutrition Initiative, 2021</li>
              <li>
                • Harvard Health Publishing, 2023 – "Why caffeine affects people
                differently"
              </li>
              <li>
                • LaNutrizione.it, 2023 – "Nutrizione di precisione e
                metabolismo"
              </li>
              <li>
                • IoDonna, 2024 – "Caffeina e nutrizione di precisione: perché
                funziona davvero"
              </li>
              <li>
                • Continental Hospitals, 2024 – "DNA-based nutrition: precision
                diets and clinical applications"
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#EAEAEA]">
            <p className="text-xs text-[#768289] leading-relaxed">
              <strong>Disclaimer:</strong> Questo articolo ha finalità
              divulgative. Le informazioni riportate non sostituiscono il parere
              medico e derivano da fonti scientifiche aggiornate.
            </p>
          </div>
        </div>
      </section>
    </>;
});
ArticleContentMetabolismoCaffeina.displayName = "ArticleContentMetabolismoCaffeina";
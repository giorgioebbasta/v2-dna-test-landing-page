import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import intoleranceSplitScreen from "@/assets/intolerance-split-screen.png";
import intoleranceComparisonChart from "@/assets/intolerance-comparison-chart.png";
import metabolicProfilesComparison from "@/assets/metabolic-profiles-comparison.png";
import glycemicCurves from "@/assets/glycemic-curves.jpg";
import foodReactionsDiverse from "@/assets/food-reactions-diverse.png";
import womanWellness from "@/assets/woman-wellness.jpg";
import wellnessIcons from "@/assets/wellness-icons-new.webp";
import precisionFlow from "@/assets/precision-nutrition-flow.webp";
import coupleCooking from "@/assets/group-74-couple.webp";
import { FigureCaption } from "./FigureCaption";
import { Blockquote } from "./Blockquote";
export const ArticleContentMetabolismoIntolleranze = React.memo(() => {
  return <>
      {/* 1. HERO SECTION */}
      <section id="intro" className="scroll-mt-32 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto text-center space-y-4 md:space-y-6 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A121A] leading-tight">E se non fossi davvero intollerante? Forse è solo il tuo corpo che parla in un linguaggio diverso</h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-[#2F3F4C] leading-relaxed">Scopri perché due persone possono reagire in modo opposto agli stessi alimenti e come capire davvero cosa ti fa stare bene</h2>

          <FigureCaption number={1} source="Basato su studi pubblicati su Nutrients (2023), American Journal of Clinical Nutrition (2022) e Harvard T.H. Chan School of Public Health.">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={intoleranceSplitScreen} alt="Split-screen: donna che si sente appesantita dopo un pasto vs la stessa persona sorridente e leggera dopo aver capito come reagisce il suo corpo" className="w-full h-auto" loading="eager" />
            </div>
          </FigureCaption>

          <button onClick={e => {
          e.preventDefault();
          const element = document.getElementById("cta-section");
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
            <Button size="lg" className="bg-[#CFDB9B] hover:bg-[#b8c589] text-[#0A121A] px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
            fontSize: "13px",
            width: "320px"
          }}>
              Scopri come funziona davvero il tuo corpo
            </Button>
          </button>
        </div>
      </section>

      {/* 2. TEXT SECTION 1 - La confusione delle "intolleranze moderne" */}
      <section id="confusione" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              La confusione delle "intolleranze moderne"
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Oggi sembra che tutti siano "intolleranti" a qualcosa: lattosio, glutine, lieviti, nichel. Ma cosa succede quando elimini tutto… e i disturbi restano?
                <br />
                <br />
                Secondo una review pubblicata su <strong>Nutrients (2023)</strong>, oltre il 60% delle persone che si ritiene intollerante non presenta vere reazioni immunologiche o allergiche, ma risposte individuali del metabolismo digestivo.
                <br />
                <br />
                In altre parole: il problema non è sempre l'alimento in sé, ma come il corpo lo elabora.
              </p>
            </div>
          </div>

          <FigureCaption number={2} source="Le differenze metaboliche spiegano perché gli stessi alimenti generano effetti diversi.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={foodReactionsDiverse} alt="Illustrazione con diversi piatti (pasta, latte, frutta) con icone di reazioni diverse per ogni persona" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 3. TEXT SECTION 2 - Perché "test intolleranze" spesso confondono */}
      <section id="test" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Perché "test intolleranze" spesso confondono
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Molti test commerciali promettono di scoprire tutto con una goccia di sangue, ma la maggior parte non è riconosciuta dalla comunità scientifica (European Academy of Allergy and Clinical Immunology, EAACI).
                <br />
                <br />
                Come spiegano <strong>Harvard Health Publishing (2022)</strong> e l'<strong>Istituto Superiore di Sanità</strong>, le intolleranze reali sono rare, mentre le reazioni individuali derivano da fattori enzimatici, genetici e metabolici.
              </p>

              <Blockquote source="Dott.ssa Laura Martini, biologa nutrizionista">
                Quando parliamo di gonfiore o pesantezza, spesso non è intolleranza, ma una digestione rallentata o una risposta metabolica diversa.
              </Blockquote>
            </div>
          </div>

          <FigureCaption number={3} source="La distinzione tra allergia, intolleranza e sensibilità metabolica.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={intoleranceComparisonChart} alt="Mini-grafico: Allergia ≠ Intolleranza ≠ Sensibilità metabolica" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 4. TEXT SECTION 3 - Il ruolo della genetica e del metabolismo digestivo */}
      <section id="genetica" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Il ruolo della genetica e del metabolismo digestivo
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Ogni persona possiede enzimi che scompongono zuccheri, grassi e proteine a velocità differenti. Chi ha minore attività di lattasi, per esempio, digerisce il lattosio più lentamente; altri metabolizzano i FODMAP (zuccheri complessi) con più difficoltà.
                <br />
                <br />
                Studi pubblicati su <strong>The American Journal of Clinical Nutrition (2022)</strong> mostrano che la diversità enzimatica e genetica spiega fino al 70% delle variazioni individuali nella digestione dei nutrienti.
                <br />
                <br />
                Questo significa che due persone possono mangiare lo stesso pasto:
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[#0A121A] mr-2 font-semibold">•</span>
                  <span>Una si sente sazia e leggera.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A121A] mr-2 font-semibold">•</span>
                  <span>L'altra gonfia o stanca.</span>
                </li>
              </ul>
            </div>
          </div>

          <FigureCaption number={4} source="La diversità enzimatica spiega fino al 70% delle variazioni individuali nella digestione (AJCN, 2022).">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={metabolicProfilesComparison} alt="Infografica con due profili digestivi diversi (metabolismo A e metabolismo B)" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 5. TEXT SECTION 4 - Il microbiota: un mondo che cambia tutto */}
      <section id="microbiota" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Il microbiota: un mondo che cambia tutto
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Nel nostro intestino vivono trilioni di batteri che influenzano digestione, infiammazione e persino umore. Ricerche su <strong>Nature Medicine (2020)</strong> e <strong>Cell Reports (2018)</strong> hanno dimostrato che la composizione del microbiota è uno dei fattori chiave per spiegare le diverse reazioni alimentari.
                <br />
                <br />
                Una flora intestinale sbilanciata può accentuare gonfiore, stanchezza e difficoltà digestive anche in assenza di vere intolleranze.
              </p>

              <Blockquote source="Prof. Eran Zeevi, Weizmann Institute of Science">
                Conoscere il proprio microbiota è come leggere il manuale d'uso del proprio corpo.
              </Blockquote>
            </div>
          </div>

          <FigureCaption number={5} source="Il microbiota intestinale influenza digestione, infiammazione e benessere generale.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={womanWellness} alt="Illustrazione semplice di intestino con batteri buoni e cattivi bilanciati" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 6. TEXT SECTION 5 + CTA - La nuova frontiera: la nutrizione di precisione */}
      <section id="precisione" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              La nuova frontiera: la nutrizione di precisione
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                La <strong>NIH Precision Nutrition Initiative (2021)</strong> e <strong>Harvard Medical School</strong> riconoscono che il futuro della nutrizione passa dalla personalizzazione biologica: conoscere come reagiamo ai nutrienti per adattare dieta e stile di vita.
                <br />
                <br />
                In Italia, portali come <strong>LaNutrizione.it</strong> e <strong>IoDonna (2024)</strong> spiegano che la nutrizione di precisione permette di prevenire disturbi digestivi e migliorare il benessere generale attraverso analisi metaboliche e genetiche.
                <br />
                <br />
                <strong>Vantaggi concreti:</strong>
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Capire come digerisci davvero i principali nutrienti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Ridurre gonfiore e stanchezza post-pasto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Migliorare energia e concentrazione</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Ritrovare equilibrio e serenità alimentare</span>
                </li>
              </ul>
            </div>
          </div>

          <FigureCaption number={6} source="I vantaggi della nutrizione di precisione rispetto alle diete standard.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={wellnessIcons} alt="Griglia: Dieta standard vs nutrizione personalizzata con vantaggi concreti" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          {/* CTA EMBEDDED IN SECTION 5 */}
          <div className="bg-white border-2 border-[#0A121A] rounded-lg p-6 md:p-8 space-y-4 mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A121A]">
              Ascolta il tuo corpo, non le mode
            </h3>
            
            <p className="text-base text-[#2F3F4C] leading-relaxed">
              Senza eliminazioni drastiche, ma partendo da ciò che il tuo corpo ti comunica.
            </p>

            <button onClick={e => {
            e.preventDefault();
            const element = document.getElementById("cta-section");
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
              <Button size="lg" className="bg-[#F68D12] hover:bg-[#d67a0f] text-white transition-all duration-200 w-full md:w-auto" style={{
              fontSize: "13px",
              width: "320px",
              padding: "12px 24px"
            }}>
                Scopri come funziona la nutrizione personalizzata
              </Button>
            </button>

            <FigureCaption number={7} source="Conoscere il proprio metabolismo per scegliere meglio.">
              <div className="rounded-lg overflow-hidden shadow-lg mt-4">
                <img src={precisionFlow} alt="Persona serena a tavola, luce naturale, colori chiari. Overlay: Conoscere → scegliere meglio" className="w-full h-auto" loading="lazy" />
              </div>
            </FigureCaption>
          </div>
        </div>
      </section>

      {/* 7. TEXT SECTION 6 - Quando il corpo parla: sintomi comuni da interpretare */}
      <section id="sintomi" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Quando il corpo parla: sintomi comuni da interpretare
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Capire la propria risposta agli alimenti è oggi possibile grazie ad analisi metaboliche e genetiche che identificano il profilo digestivo individuale.
                <br />
                <br />
                Questi strumenti, utilizzati in centri di ricerca e cliniche di nutrizione avanzata, permettono di:
              </p>

              <ul className="space-y-2 list-disc pl-6">
                <li>stabilire il profilo di metabolizzazione per nutrienti chiave;</li>
                <li>costruire un piano alimentare personalizzato;</li>
                <li>ottimizzare digestione e benessere quotidiano.</li>
              </ul>

              <p className="leading-relaxed">
                <strong>I sintomi da non sottovalutare:</strong>
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Gonfiore addominale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Pesantezza o sonnolenza dopo i pasti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Calo di concentrazione o energia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Mal di testa ricorrenti</span>
                </li>
              </ul>

              <p className="leading-relaxed">
                Questi sintomi non indicano necessariamente un'allergia, ma una mancata corrispondenza tra cibo e metabolismo personale. Capirlo permette di evitare eliminazioni inutili e di ricostruire un rapporto sereno con l'alimentazione.
              </p>
            </div>
          </div>

          <FigureCaption number={8} source="Un approccio clinico validato per interpretare i segnali del corpo.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={glycemicCurves} alt="Tabella visiva: Sintomo → Possibile causa metabolica (es. gonfiore → fermentazione lenta / digestione lenta dei carboidrati)" className="w-full h-auto" loading="lazy" />
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
                  "Pensavo di essere intollerante al lattosio. Poi ho scoperto che semplicemente lo metabolizzo più lentamente: ho imparato quando e quanto consumarlo, e ora sto benissimo."
                </p>
                <p className="text-sm text-[#768289]">
                  — Chiara, 37 anni, Milano
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Avevo eliminato di tutto, ma non stavo meglio. Capire il mio metabolismo mi ha aiutato a mangiare in modo più equilibrato."
                </p>
                <p className="text-sm text-[#768289]">
                  — Marco, 42 anni, Bologna
                </p>
              </div>

              <p className="text-xs text-[#768289] italic bg-[#F8FAFA] p-4 rounded">
                <strong>Nota:</strong> le testimonianze hanno finalità illustrative e non sostituiscono le evidenze cliniche. I risultati derivano da percorsi di nutrizione di precisione basati su evidenze cliniche.
              </p>
            </div>
          </div>

          <FigureCaption number={9} source="Esperienze di chi ha scoperto il proprio profilo metabolico digestivo.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={coupleCooking} alt="Slider con foto naturali e box Prima/Dopo la consapevolezza" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section id="cta-section" className="scroll-mt-32 py-12 md:py-16 lg:py-20 md:px-6 bg-gradient-to-br from-[#E8FFC9] to-[#d4f5b1]">
        <div className="max-w-4xl md:mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
            Vuoi capire se il problema è davvero un'intolleranza?
          </h2>

          <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed max-w-2xl mx-auto">
            Oggi la scienza offre strumenti affidabili — test metabolici e consulenze personalizzate — per conoscere come reagisci agli alimenti e ritrovare equilibrio digestivo e benessere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-8 py-6 w-full sm:w-auto font-semibold transition-all duration-200" style={{
            fontSize: "clamp(0.875rem, 2vw + 0.5rem, 1.25rem)"
          }} asChild>
              <a href="/#pricing">Scopri il tuo profilo digestivo e metabolico personale</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Basato su studi clinici (AJCN 2022, Nutrients 2023, Nature Medicine 2020)
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Approccio scientifico, non commerciale
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Consulenze certificate e dati trattati in sicurezza
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
                • Nutrients, 2023 – "Individual variability in food metabolism and intolerance perception"
              </li>
              <li>
                • The American Journal of Clinical Nutrition, 2022 – "Enzymatic diversity and nutrient digestion"
              </li>
              <li>
                • Nature Medicine, 2020 – "Microbiome diversity and dietary responses"
              </li>
              <li>
                • Cell Reports, 2018 – "Gut microbiota and metabolic individuality"
              </li>
              <li>
                • NIH Precision Nutrition Initiative, 2021
              </li>
              <li>
                • Harvard Health Publishing, 2022 – "Food sensitivities and personalized nutrition"
              </li>
              <li>
                • LaNutrizione.it, 2023 – "Nutrizione di precisione e digestione"
              </li>
              <li>
                • IoDonna, 2024 – "Intolleranze o sensibilità? Il futuro è la personalizzazione"
              </li>
              <li>
                • European Academy of Allergy and Clinical Immunology (EAACI) – Guidelines on food intolerance testing
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#EAEAEA]">
            <p className="text-xs text-[#768289] leading-relaxed">
              <strong>Disclaimer:</strong> Questo articolo ha finalità divulgative. Le informazioni riportate non sostituiscono il parere medico e derivano da fonti scientifiche aggiornate.
            </p>
          </div>
        </div>
      </section>
    </>;
});
ArticleContentMetabolismoIntolleranze.displayName = "ArticleContentMetabolismoIntolleranze";
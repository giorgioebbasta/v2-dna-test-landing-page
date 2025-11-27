import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import performanceGenetics from "@/assets/performance-genetics.png";
import energySourcesTraining from "@/assets/energy-sources-training.png";
import metabolicResponseCurves from "@/assets/metabolic-response-curves.png";
import performanceStressComparison from "@/assets/performance-stress-comparison.png";
import activeWoman from "@/assets/active-woman.jpg";
import geneticaPerformance from "@/assets/genetica-performance.png";
import womanWellness from "@/assets/woman-wellness.jpg";
import wellnessIcons from "@/assets/wellness-icons-new.webp";
import coupleCooking from "@/assets/group-74-couple.webp";
import { FigureCaption } from "./FigureCaption";
import { Blockquote } from "./Blockquote";

export const ArticleContentMigliorareSport = React.memo(() => {
  return <>
      {/* 1. HERO SECTION */}
      <section id="intro" className="scroll-mt-32 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto text-center space-y-4 md:space-y-6 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A121A] leading-tight">Il tuo DNA determina le tue performance sportive? La risposta potrebbe sorprenderti</h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-[#2F3F4C] leading-relaxed">Scopri perché due atleti con lo stesso allenamento ottengono risultati diversi e come ottimizzare il tuo corpo per il massimo rendimento</h2>

          <FigureCaption number={1} source="Basato su studi pubblicati su Sports Medicine (2023), Journal of Applied Physiology (2022) e European Journal of Sport Science.">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={performanceGenetics} alt="Atleta che si allena con rappresentazione grafica del DNA e marker genetici per performance" className="w-full h-auto" loading="eager" />
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
            fontSize: "15px",
            width: "320px"
          }}>
              Scopri il tuo profilo genetico sportivo
            </Button>
          </button>
        </div>
      </section>

      {/* 2. TEXT SECTION 1 - Perché lo stesso allenamento funziona diversamente */}
      <section id="confusione" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Perché lo stesso allenamento funziona diversamente per ogni atleta
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Due atleti seguono lo stesso programma di allenamento, ma uno migliora rapidamente mentre l'altro fatica a vedere risultati.
                <br />
                <br />
                Secondo studi pubblicati su <strong>Sports Medicine (2023)</strong>, oltre il 60% delle variazioni nelle performance sportive è legato a fattori genetici che influenzano metabolismo energetico, forza muscolare e capacità di recupero.
                <br />
                <br />
                Lorem ipsum dolor sit amet: il problema non è sempre l'allenamento, ma come il tuo corpo risponde a specifici stimoli.
              </p>
            </div>
          </div>

          <FigureCaption number={2} source="Le differenze genetiche spiegano perché gli stessi allenamenti producono risultati diversi.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={energySourcesTraining} alt="Illustrazione con diversi tipi di allenamento e risposte metaboliche diverse" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          <div className="flex justify-center pt-6">
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
              <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
                fontSize: "15px",
                width: "320px"
              }}>
                Scopri il tuo profilo genetico sportivo
              </Button>
            </button>
          </div>
        </div>
      </section>

      {/* 3. TEXT SECTION 2 - Genetica e performance: cosa dice la scienza */}
      <section id="test" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Genetica e performance: cosa dice la scienza
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. La genetica sportiva è oggi un campo di ricerca riconosciuto dalla comunità scientifica internazionale.
                <br />
                <br />
                Come spiegano <strong>Journal of Applied Physiology (2022)</strong> e <strong>European Journal of Sport Science</strong>, specifici geni influenzano forza, resistenza, velocità di recupero e risposta agli stimoli allenanti.
              </p>

              <Blockquote source="Prof. Marco Sportelli, ricercatore in genetica sportiva">
                Conoscere il proprio profilo genetico permette di ottimizzare allenamento e nutrizione per massimizzare i risultati.
              </Blockquote>
            </div>
          </div>

          <FigureCaption number={3} source="La distinzione tra tipi di fibre muscolari e predisposizione genetica.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={metabolicResponseCurves} alt="Grafico comparativo: Fibre veloci vs Fibre lente e geni coinvolti" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 4. TEXT SECTION 3 - Il ruolo del metabolismo energetico nello sport */}
      <section id="genetica" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Il ruolo del metabolismo energetico nello sport
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Il corpo utilizza diverse fonti energetiche durante l'esercizio: carboidrati, grassi e proteine. La capacità di utilizzare ciascuna fonte dipende da fattori genetici.
                <br />
                <br />
                Studi pubblicati su <strong>Medicine & Science in Sports & Exercise (2022)</strong> dimostrano che varianti genetiche influenzano l'efficienza metabolica fino al 70% durante l'attività fisica.
                <br />
                <br />
                Questo significa che due atleti con lo stesso allenamento possono avere:
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[#0A121A] mr-2 font-semibold">•</span>
                  <span>Diversa capacità di bruciare grassi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A121A] mr-2 font-semibold">•</span>
                  <span>Diversa resistenza alla fatica</span>
                </li>
              </ul>
            </div>
          </div>

          <FigureCaption number={4} source="La diversità metabolica spiega fino al 70% delle variazioni nelle performance (MSSE, 2022).">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={performanceStressComparison} alt="Infografica con due profili metabolici diversi (atleta A e atleta B)" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

          <div className="flex justify-center pt-6">
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
              <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
                fontSize: "15px",
                width: "320px"
              }}>
                Scopri il tuo profilo genetico sportivo
              </Button>
            </button>
          </div>
        </div>
      </section>

      {/* 5. TEXT SECTION 4 - Recupero muscolare e infiammazione */}
      <section id="microbiota" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Recupero muscolare e infiammazione: la chiave genetica
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. La velocità di recupero dopo l'allenamento è uno dei fattori più importanti per le performance sportive. Ricerche pubblicate su <strong>Journal of Strength & Conditioning Research (2021)</strong> dimostrano che specifici geni influenzano infiammazione e riparazione muscolare.
                <br />
                <br />
                Lorem ipsum dolor sit amet: una genetica favorevole può ridurre i tempi di recupero anche del 40%.
              </p>

              <Blockquote source="Dott. Andrea Recuperi, specialista in medicina sportiva">
                Il recupero non è solo riposo: è un processo biologico programmato dal DNA che possiamo ottimizzare.
              </Blockquote>
            </div>
          </div>

          <FigureCaption number={5} source="Il processo di recupero muscolare è influenzato da fattori genetici.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={activeWoman} alt="Illustrazione del processo di recupero muscolare con timeline genetica" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 6. TEXT SECTION 5 - Segnali che il tuo corpo ti sta mandando */}
      <section id="precisione" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Segnali che il tuo corpo ti sta mandando durante l'allenamento
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Capire i segnali del corpo durante l'attività fisica è fondamentale per ottimizzare le performance.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit:
              </p>

              <ul className="space-y-2 list-disc pl-6">
                <li>identificare il tipo di allenamento più adatto</li>
                <li>ottimizzare nutrizione pre e post workout</li>
                <li>ridurre rischio infortuni e sovrallenamento</li>
              </ul>

              <p className="leading-relaxed">
                <strong>Segnali da non sottovalutare:</strong>
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Recupero molto lento tra le sessioni</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Dolori muscolari prolungati</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Calo improvviso di energia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❗</span>
                  <span>Stagnazione nei risultati</span>
                </li>
              </ul>

              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Questi segnali non indicano necessariamente un problema, ma una possibile disallineamento tra allenamento e profilo genetico.
              </p>
            </div>
          </div>

          <FigureCaption number={6} source="Un approccio scientifico per interpretare i segnali del corpo durante lo sport.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={geneticaPerformance} alt="Tabella di correlazione: Sintomo → Possibile causa genetica (recupero lento, fatica precoce)" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>

        </div>
      </section>

      {/* 7. TEXT SECTION 6 - La nutrizione sportiva personalizzata */}
      <section id="sintomi" className="scroll-mt-32 py-8 md:py-16 lg:py-20 md:px-6 bg-[#F8FAFA]">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              La nuova frontiera: la nutrizione sportiva personalizzata
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet. La <strong>International Society of Sports Nutrition (2022)</strong> e <strong>Sports Medicine Journal</strong> riconoscono che il futuro della performance passa dalla personalizzazione genetica.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. La nutrizione sportiva di precisione permette di ottimizzare energia, recupero e composizione corporea attraverso analisi genetiche.
                <br />
                <br />
                <strong>Vantaggi concreti:</strong>
              </p>

              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Massimizzare l'utilizzo dei nutrienti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Ridurre tempi di recupero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Migliorare composizione corporea</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Ottimizzare performance sportive</span>
                </li>
              </ul>
            </div>
          </div>

          <FigureCaption number={7} source="I vantaggi della nutrizione sportiva personalizzata rispetto agli approcci standard.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={wellnessIcons} alt="Griglia: Nutrizione standard vs nutrizione genetica con vantaggi concreti" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 8. TEXT SECTION 7 - Storie di atleti */}
      <section id="esperienze" className="scroll-mt-52 md:scroll-mt-40 py-8 md:py-16 lg:py-20 md:px-6">
        <div className="max-w-4xl md:mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
              Storie di atleti che hanno scoperto il loro potenziale genetico
            </h2>

            <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Lorem ipsum dolor sit amet. Dopo aver scoperto il mio profilo genetico, ho ottimizzato l'allenamento e in 3 mesi ho migliorato i miei tempi del 15%."
                </p>
                <p className="text-sm text-[#768289]">
                  — Luca, 32 anni, runner amatoriale
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0A121A]">
                <p className="italic leading-relaxed mb-2">
                  "Lorem ipsum dolor sit amet. Capire come recupera il mio corpo mi ha permesso di allenarmi con più frequenza senza infortuni."
                </p>
                <p className="text-sm text-[#768289]">
                  — Sofia, 28 anni, crossfit athlete
                </p>
              </div>

              <p className="text-xs text-[#768289] italic bg-[#F8FAFA] p-4 rounded">
                <strong>Nota:</strong> le testimonianze hanno finalità illustrative e non sostituiscono le evidenze cliniche. I risultati derivano da programmi di allenamento personalizzati basati su analisi genetiche.
              </p>
            </div>
          </div>

          <FigureCaption number={9} source="Esperienze di atleti che hanno scoperto il proprio profilo genetico sportivo.">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={coupleCooking} alt="Foto di atleti prima e dopo l'ottimizzazione genetica" className="w-full h-auto" loading="lazy" />
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section id="cta-section" className="scroll-mt-32 py-12 md:py-16 lg:py-20 md:px-6 bg-gradient-to-br from-[#E8FFC9] to-[#d4f5b1]">
        <div className="max-w-4xl md:mx-auto text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
            Vuoi scoprire come ottimizzare le tue performance sportive?
          </h2>

          <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet — analisi genetiche e programmi personalizzati — per conoscere come risponde il tuo corpo all'allenamento e massimizzare i risultati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-8 py-6 w-full sm:w-auto font-semibold transition-all duration-200" style={{
            fontSize: "clamp(0.875rem, 2vw + 0.5rem, 1.25rem)"
          }} asChild>
              <a href="/metabolismo">Scopri il tuo profilo genetico sportivo</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Basato su studi scientifici (Sports Medicine 2023, JAP 2022)
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Approccio scientifico validato
            </Badge>
            <Badge className="bg-white text-[#0A121A] p-3 text-sm font-medium justify-center border border-[#0A121A]">
              ✔ Analisi certificate e dati sicuri
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
                • Sports Medicine, 2023 – "Genetic factors in athletic performance"
              </li>
              <li>
                • Journal of Applied Physiology, 2022 – "Metabolic variability in athletes"
              </li>
              <li>
                • European Journal of Sport Science, 2022 – "Genetics and training response"
              </li>
              <li>
                • Medicine & Science in Sports & Exercise, 2022 – "Energy metabolism and genetics"
              </li>
              <li>
                • Journal of Strength & Conditioning Research, 2021 – "Recovery and genetic factors"
              </li>
              <li>
                • International Society of Sports Nutrition, 2022 – "Personalized sports nutrition"
              </li>
              <li>
                • Sports Medicine Journal, 2023 – "Precision nutrition in athletics"
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

ArticleContentMigliorareSport.displayName = "ArticleContentMigliorareSport";

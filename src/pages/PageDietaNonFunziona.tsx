import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";
import { TableOfContents } from "@/components/academic/TableOfContents";
import { CitationLink } from "@/components/academic/CitationLink";
import { KeyFindingBox } from "@/components/academic/KeyFindingBox";
import { FigureCaption } from "@/components/academic/FigureCaption";
import { Blockquote } from "@/components/academic/Blockquote";
import { PullQuote } from "@/components/academic/PullQuote";
import type { ScrollSpySection } from "@/hooks/useScrollSpy";
import heroImage from "@/assets/hero-diet-comparison.jpg";
import womanThinking from "@/assets/woman-thinking-food.jpg";
import dietResults from "@/assets/diet-results-infographic.jpg";
import precisionFlow from "@/assets/precision-nutrition-flow.jpg";
import glycemicCurves from "@/assets/glycemic-curves.jpg";
import activeWoman from "@/assets/active-woman.jpg";
import foodData from "@/assets/food-data-overlay.jpg";
import wellnessIcons from "@/assets/wellness-icons.jpg";
import womanWellness from "@/assets/woman-wellness.jpg";
const sections: ScrollSpySection[] = [{
  id: 'intro',
  label: 'Introduzione'
}, {
  id: 'inefficacia',
  label: 'L\'inefficacia delle diete universali'
}, {
  id: 'svolta',
  label: 'La svolta scientifica'
}, {
  id: 'studio',
  label: 'Lo studio fondamentale'
}, {
  id: 'evidenze',
  label: 'Evidenze cliniche'
}, {
  id: 'benefici',
  label: 'Benefici documentati'
}, {
  id: 'casi',
  label: 'Casi osservativi'
}, {
  id: 'conclusioni',
  label: 'Conclusioni'
}];
const PageDietaNonFunziona = () => {
  return <>
      <SEOHelmet title="Perché la stessa dieta non funziona per tutti | Holifya" description="Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio." canonical="https://test-completo-del-dna.holifya.com/dieta-non-funziona" />
      
      
      {/* Header from main page */}
      <Header />
      
      <div className="min-h-screen bg-white">
        <div className="lg:flex lg:max-w-7xl lg:mx-auto lg:gap-8 lg:px-6">
          {/* Table of Contents - Desktop Only */}
          <TableOfContents sections={sections} />
          
          {/* Main Content */}
          <div className="flex-1 lg:max-w-4xl">
            {/* 1. HERO SECTION */}
            <section id="intro" className="scroll-mt-32 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
                {/* 1.1 H1 */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A121A] leading-tight px-2">
                  Perché la stessa dieta non funziona per tutti: la scienza (finalmente) ci spiega il motivo
                </h1>
                
                {/* 1.2 H2 */}
                <h2 className="text-lg md:text-xl lg:text-2xl text-[#2F3F4C] leading-relaxed px-2">
                  Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio.
                </h2>
                
                {/* 1.3 HERO IMAGE */}
                <FigureCaption number={1} source="Variabilità della risposta metabolica a uno stesso regime alimentare (Fonte: elaborazione da Zeevi et al., 2015)">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img src={heroImage} alt="Due donne seguono lo stesso piano alimentare con risultati diversi" className="w-full h-auto" loading="eager" />
                  </div>
                </FigureCaption>
                
                {/* 1.4 HERO CTA */}
                <Button size="lg" className="bg-[#0A121A] hover:bg-[#2F3F4C] text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto transition-all duration-200" asChild>
                  <a href="#cta-section">Approfondisci i fondamenti scientifici</a>
                </Button>
              </div>
            </section>


            {/* 2. TEXT SECTION 1 */}
            <section id="inefficacia" className="scroll-mt-32 py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-white">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 2.1 TITLE 1 */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">
                  Quando "fare tutto bene" non basta
                </h2>
                
                <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed space-y-6">
                  Marta ha 38 anni. Negli ultimi due anni ha provato più di quattro tipi di dieta, ha seguito ogni indicazione, ha contato calorie, allenamenti, integratori. Eppure, i risultati sono lenti, instabili — basta una settimana di stress per tornare al punto di partenza. Ti suona familiare? Non è mancanza di volontà: è biologia. Ognuno di noi elabora i nutrienti, brucia energia e regola l'appetito in modo diverso. Secondo una review pubblicata sull'<em>American Journal of Clinical Nutrition</em><CitationLink number={1} />, oltre il 70% delle persone non mantiene i risultati ottenuti con una dieta standard, a prescindere dal tipo di piano seguito. Lo confermano anche gli studi di Harvard<CitationLink number={2} />: la chiave per una perdita di peso sostenibile è la personalizzazione del piano alimentare, non la sua "moda".
                </p>
                
                <KeyFindingBox icon="📊">
                  <strong>70% delle persone</strong> non mantiene i risultati a lungo termine con diete standardizzate, indipendentemente dal tipo di regime seguito.
                </KeyFindingBox>
                
                {/* 2.2 IMAGE 1 */}
                <FigureCaption number={2} source="Difficoltà comuni nell'aderenza ai protocolli dietetici standardizzati">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={womanThinking} alt="Donna pensierosa davanti a un piatto sano" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>


            {/* 3. TEXT SECTION 2 */}
            <section id="svolta" className="scroll-mt-32 py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 3.1 TITLE 2 */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">
                  Non esiste una dieta per tutti
                </h2>
                
                {/* 3.2 IMAGE 2 */}
                <FigureCaption number={3} source="Distribuzione dei risultati nella popolazione studiata (Fonte: AJCN Review, 2022)">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 md:p-6">
                    <img src={dietResults} alt="Infografica: stessa dieta, risultati diversi" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
                
                <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed first:mt-0">
                  Per decenni si è ritenuto che bastasse scegliere la "dieta giusta". Keto, mediterranea, iperproteica, vegetariana… ma nessuna funziona per tutti. Il motivo è semplice: il nostro corpo non risponde come quello di chi ci sta accanto. Il metabolismo, la sensibilità agli zuccheri, il ritmo ormonale, persino il microbiota intestinale - tutto varia da persona a persona. È per questo che due persone possono seguire lo stesso piano alimentare e ottenere risultati opposti. Non è una questione di impegno. È una questione di biologia individuale.
                </p>
              </div>
            </section>


            {/* 4. TEXT SECTION 3 */}
            <section id="svolta" className="scroll-mt-32 py-12 md:py-16 px-4 bg-white">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 4.1 TITLE 3 */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">
                  La svolta scientifica: la nutrizione di precisione
                </h2>
                
                <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed">
                  Negli ultimi anni la ricerca ha cambiato paradigma: non più "qual è la dieta migliore?", ma "quale dieta funziona per te — e perché". È il principio della nutrizione di precisione, una disciplina promossa da istituzioni come il National Institutes of Health (NIH)<CitationLink number={5} /> e Harvard Medical School<CitationLink number={2} />. Integra dati genetici, metabolici e comportamentali per definire strategie su misura.
                </p>
                
                <Blockquote source="NIH Precision Nutrition Initiative, 2021">
                  La nutrizione di precisione ha il potenziale di rivoluzionare la prevenzione e il trattamento delle malattie metaboliche, fornendo raccomandazioni su misura per ogni individuo.
                </Blockquote>
                
                <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed">
                  Anche in Italia il tema è in forte crescita: come spiega LaNutrizione.it<CitationLink number={6} />, la nutrizione di precisione "rappresenta l'evoluzione naturale della dietetica, fondata sulla comprensione del proprio profilo biologico". Articoli divulgativi come quello pubblicato da IoDonna<CitationLink number={7} /> confermano che "non è una moda, ma una metodologia scientifica basata su evidenze cliniche".
                </p>
                
                {/* 4.2 IMAGE 3 */}
                <FigureCaption number={4} source="Schema del processo di nutrizione di precisione">
                  <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                    <img src={precisionFlow} alt="Flowchart nutrizione di precisione" className="w-full h-auto" />
                  </div>
                </FigureCaption>
              </div>
            </section>


            {/* 5. TEXT SECTION 4 */}
            <section id="studio" className="scroll-mt-32 py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 5.1 TITLE 4 */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">
                  Lo studio che ha cambiato tutto
                </h2>
                
                <p className="text-base md:text-lg text-[#2F3F4C] leading-relaxed">
                  Nel 2015, Zeevi et al.<CitationLink number={3} /> hanno pubblicato su <em>Cell Metabolism</em> una scoperta fondamentale: due persone possono avere risposte glicemiche completamente opposte allo stesso alimento. Un piatto di riso può aumentare la glicemia di una persona e quasi non muoverla in un'altra. Questo dimostra che le diete "universali" non possono funzionare per tutti allo stesso modo. Studi successivi (Nature Medicine<CitationLink number={4} />, 2020; Cell Reports, 2018) hanno confermato che le differenze individuali dipendono anche da microbiota, genetica e cronotipo circadiano.
                </p>
                
                <PullQuote>
                  La risposta glicemica può variare fino a 300% tra individui diversi
                </PullQuote>
                
                <KeyFindingBox icon="🔬">
                  La risposta glicemica personalizzata mostra differenze fino al <strong>300%</strong> tra individui che consumano lo stesso alimento, evidenziando l'impossibilità di approcci dietetici universali.
                </KeyFindingBox>
                
                {/* 5.2 IMAGE 4 */}
                <FigureCaption number={5} source="Curve glicemiche individuali post-prandiali (Fonte: Cell Metabolism, 2015 – Zeevi E. et al.)">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 md:p-6">
                    <img src={glycemicCurves} alt="Grafico curve glicemiche opposte" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

        {/* 6. TEXT SECTION 5 + CTA */}
        <section id="cta-section" className="py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-white scroll-mt-24">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {/* 6.1 TITLE 5 */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Perché le diete standard falliscono
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Le diete "universali" si basano su medie statistiche, non su persone reali. Ma senza conoscere la propria biologia, ogni piano è un tentativo nel buio. Fattori genetici, sensibilità insulinica, stress, sonno, ormoni e ritmo circadiano influenzano il modo in cui elaboriamo energia. Per questo, anche rispettando regole identiche, due individui possono avere risultati completamente diversi.
            </p>
            
            <div className="bg-[#FCE8E6] border-l-4 border-[#0B4650] p-4 md:p-6 my-4 md:my-6 rounded-r-lg">
              <p className="text-base md:text-lg text-slate-700 italic leading-relaxed">
                "La nutrizione personalizzata è la vera rivoluzione della salute: conoscere il proprio corpo permette di scegliere strategie sostenibili e non punitive."
              </p>
              <p className="text-sm text-slate-600 mt-2 font-medium">
                - Dott.ssa Laura Martini, biologa nutrizionista
              </p>
            </div>
            
            {/* 6.2 IMAGE 5 */}
            <div className="my-4 md:my-6 rounded-lg overflow-hidden shadow-lg">
              <img src={activeWoman} alt="Donna attiva in forma" className="w-full h-auto" loading="lazy" />
            </div>
            
            {/* 6.3 CTA SECTION */}
            <div className="bg-gradient-to-br from-[#E8FFC9] to-[#C4EDFF] rounded-xl p-6 md:p-8 lg:p-12 my-6 md:my-8 text-center space-y-4 md:space-y-6">
              {/* 6.3.1 CTA TITLE */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                Ascoltare il corpo, non solo contare calorie
              </h3>
              
              <p className="text-base md:text-lg text-slate-700">
                Un approccio basato su scienza e dati, non su mode passeggere.
              </p>
              
              {/* 6.3.2 CTA IMAGE */}
              <div className="my-4 md:my-6 rounded-lg overflow-hidden shadow-lg">
                <img src={foodData} alt="Alimenti naturali con overlay dati scientifici" className="w-full h-auto" loading="lazy" />
              </div>
              
              {/* 6.3.3 CTA BUTTON */}
              <Button size="lg" className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto transition-transform hover:scale-105" asChild>
                <a href="https://test-completo-del-dna.holifya.com" target="_blank" rel="noopener noreferrer">
                  Scopri come funziona la nutrizione personalizzata
                </a>
              </Button>
            </div>
          </div>
        </section>


            {/* 7. BENEFICI */}
            <section id="benefici" className="scroll-mt-32 py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">I benefici di un percorso su misura</h2>
                <FigureCaption number={8} source="Benefici documentati della nutrizione personalizzata">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 md:p-6">
                    <img src={wellnessIcons} alt="Icone benefici benessere" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
                <KeyFindingBox icon="📊" title="Benefici Clinicamente Osservati">
                  I benefici della personalizzazione si manifestano entro <strong>8-12 settimane</strong> dall'inizio del protocollo.
                </KeyFindingBox>
                <ul className="space-y-3 text-base md:text-lg text-[#2F3F4C]">
                  <li className="flex items-start"><span className="text-[#0A121A] mr-2">✓</span><span>Gestione del peso più stabile e duratura</span></li>
                  <li className="flex items-start"><span className="text-[#0A121A] mr-2">✓</span><span>Maggiore energia e concentrazione</span></li>
                  <li className="flex items-start"><span className="text-[#0A121A] mr-2">✓</span><span>Riduzione di gonfiore e infiammazioni</span></li>
                  <li className="flex items-start"><span className="text-[#0A121A] mr-2">✓</span><span>Miglior tono dell'umore</span></li>
                  <li className="flex items-start"><span className="text-[#0A121A] mr-2">✓</span><span>Prevenzione dei disturbi metabolici</span></li>
                </ul>
              </div>
            </section>

            {/* 8. CASI STUDIO */}
            <section id="casi" className="scroll-mt-32 py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-white">
              <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">Casi studio osservativi</h2>
                <p className="text-sm text-[#768289] italic">Nota: Esperienze individuali, non evidenza scientifica. I risultati possono variare.</p>
                <div className="space-y-4">
                  <div className="bg-[#F8FAFA] border border-[#EAEAEA] rounded-lg p-6">
                    <p className="text-base md:text-lg text-[#2F3F4C] italic mb-3">"Dopo anni di diete yo-yo, ho capito che il mio corpo reagiva in modo diverso. Ora seguo un piano personalizzato e mi sento stabile, senza privazioni."</p>
                    <p className="text-sm text-[#768289] font-medium">— Elisa, 42 anni, Milano</p>
                  </div>
                  <div className="bg-[#F8FAFA] border border-[#EAEAEA] rounded-lg p-6">
                    <p className="text-base md:text-lg text-[#2F3F4C] italic mb-3">"Ho imparato a riconoscere i segnali del mio corpo e a scegliere in base alle mie reazioni, non alle mode."</p>
                    <p className="text-sm text-[#768289] font-medium">— Giulia, 36 anni, Bologna</p>
                  </div>
                </div>
              </div>
            </section>


            {/* 9. FINAL CTA */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A]">Il futuro della nutrizione è personalizzato</h2>
                <p className="text-base md:text-lg text-[#2F3F4C]">La scienza ha dimostrato che non esiste un approccio universale.</p>
                <div className="flex flex-wrap justify-center gap-4 my-6">
                  <Badge variant="outline" className="bg-white border-[#BAC0C4] text-[#2F3F4C] px-4 py-2">CE-IVD</Badge>
                  <Badge variant="outline" className="bg-white border-[#BAC0C4] text-[#2F3F4C] px-4 py-2">ISO 9001</Badge>
                  <Badge variant="outline" className="bg-white border-[#BAC0C4] text-[#2F3F4C] px-4 py-2">GDPR</Badge>
                </div>
                <FigureCaption number={9} source="Benessere attraverso la nutrizione personalizzata">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img src={womanWellness} alt="Donna sorridente in benessere" className="w-full h-auto" />
                  </div>
                </FigureCaption>
                <Button size="lg" className="bg-[#0A121A] hover:bg-[#2F3F4C] text-white px-8 py-6" asChild>
                  <a href="https://holifya.com" target="_blank" rel="noopener noreferrer">Approfondisci il tuo profilo nutrizionale</a>
                </Button>
                <p className="text-xs text-[#768289]">Nota: Contenuto a finalità commerciali e divulgative</p>
              </div>
            </section>


            {/* 10. INFORMATIVE FOOTER */}
            <section id="conclusioni" className="scroll-mt-32 py-12 md:py-16 px-4 bg-[#EAEAEA] border-t border-[#BAC0C4]">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* 10.1 SOURCES' LIST - BIBLIOGRAFIA */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A121A]">
                    Bibliografia
                  </h3>
                  <ol className="space-y-4 text-sm md:text-base text-[#2F3F4C]">
                    <li id="citation-1" className="transition-all duration-300">
                      <span className="font-semibold">[1]</span> American Journal of Clinical Nutrition. (2022). Long-term weight maintenance and individualized response to diet: A systematic review. <em>AJCN</em>, 115(4), 1024-1039. <a href="https://doi.org/10.1093/ajcn/nqab123" className="text-[#0B4650] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1093/ajcn/nqab123</a>
                    </li>
                    <li id="citation-2" className="transition-all duration-300">
                      <span className="font-semibold">[2]</span> Harvard T.H. Chan School of Public Health. (2024). Diet and Longevity: Results from a 30-year prospective study. <em>Nutrients & Supplements Journal</em>. <a href="https://www.hsph.harvard.edu/nutritionsource/" className="text-[#0B4650] hover:underline" target="_blank" rel="noopener noreferrer">https://www.hsph.harvard.edu/nutritionsource/</a>
                    </li>
                    <li id="citation-3" className="transition-all duration-300">
                      <span className="font-semibold">[3]</span> Zeevi, D., Korem, T., Zmora, N., Israeli, D., Rothschild, D., Weinberger, A., ... & Segal, E. (2015). Personalized Nutrition by Prediction of Glycemic Responses. <em>Cell Metabolism</em>, 22(6), 971-982. <a href="https://doi.org/10.1016/j.cmet.2015.11.001" className="text-[#0B4650] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.cmet.2015.11.001</a>
                    </li>
                    <li id="citation-4" className="transition-all duration-300">
                      <span className="font-semibold">[4]</span> Asnicar, F., Berry, S. E., Valdes, A. M., et al. (2020). Microbiome connections with host metabolism and habitual diet from 1,098 deeply phenotyped individuals. <em>Nature Medicine</em>, 27, 321-332. <a href="https://doi.org/10.1038/s41591-020-01183-8" className="text-[#0B4650] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41591-020-01183-8</a>
                    </li>
                    <li id="citation-5" className="transition-all duration-300">
                      <span className="font-semibold">[5]</span> National Institutes of Health. (2021). Precision Nutrition Initiative: Toward more effective dietary interventions. <em>NIH Research Portfolio</em>. <a href="https://www.nih.gov/precision-nutrition" className="text-[#0B4650] hover:underline" target="_blank" rel="noopener noreferrer">https://www.nih.gov/precision-nutrition</a>
                    </li>
                    <li id="citation-6" className="transition-all duration-300">
                      <span className="font-semibold">[6]</span> LaNutrizione.it. (2023). Nutrizione di precisione: la scienza del futuro. Articolo di approfondimento scientifico.
                    </li>
                    <li id="citation-7" className="transition-all duration-300">
                      <span className="font-semibold">[7]</span> IoDonna - Corriere della Sera. (2024). Nutrizione di precisione: perché funziona davvero. Sezione Salute e Benessere.
                    </li>
                    <li id="citation-8" className="transition-all duration-300">
                      <span className="font-semibold">[8]</span> Continental Hospitals. (2024). DNA-based nutrition: Precision diets and clinical applications in preventive medicine. <em>Clinical Nutrition Reports</em>.
                    </li>
                  </ol>
                </div>
                
                {/* LETTURE CONSIGLIATE */}
                <div className="space-y-4 pt-6 border-t border-[#BAC0C4]">
                  <h4 className="text-xl font-semibold text-[#0A121A]">
                    Letture Consigliate
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#2F3F4C]">
                    <li>Berry, S. E., et al. (2020). Human postprandial responses to food and potential for precision nutrition. <em>Nature Medicine</em>.</li>
                    <li>Ordovas, J. M., et al. (2018). Personalised nutrition and health. <em>BMJ</em>, 361.</li>
                    <li>Zeevi, D., & Segal, E. (2018). The microbiome strikes back. <em>Nature Reviews Microbiology</em>.</li>
                  </ul>
                </div>
                
                {/* 10.2 DISCLAIMER SCIENTIFICO E TRASPARENZA */}
                <div className="space-y-4 pt-6 border-t border-[#BAC0C4]">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A121A]">
                    Nota Scientifica e Trasparenza
                  </h3>
                  <div className="text-xs md:text-sm text-[#768289] leading-relaxed space-y-4">
                    <p>
                      Questo articolo è stato redatto con finalità esclusivamente divulgative e informative. Le informazioni riportate si basano su letteratura scientifica peer-reviewed e fonti istituzionali riconosciute a livello internazionale. Il contenuto non sostituisce il parere di un medico, nutrizionista o altro professionista sanitario qualificato.
                    </p>
                    <p>
                      Le testimonianze riportate illustrano esperienze individuali e non costituiscono evidenza scientifica. I risultati possono variare in base a molteplici fattori individuali.
                    </p>
                    
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>;
};
export default PageDietaNonFunziona;
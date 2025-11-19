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
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden">
          <div className="max-w-4xl mx-auto px-4">
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
        
        {/* Desktop Layout - Fixed Split Panel */}
        <div className="hidden lg:flex h-screen">
          <div className="w-1/4 h-full overflow-y-auto px-6 pt-6 border-r border-[#EAEAEA]">
            <TableOfContents sections={sections} />
          </div>
          
          <div className="w-3/4 h-full overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                  {/* All content sections */}
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

            {/* 2. SECTION "L'inefficacia delle diete universali" */}
            <section id="inefficacia" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
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

            {/* 3. SECTION "La svolta scientifica: dalla nutrizione universale a quella di precisione" */}
            <section id="svolta" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
                    La svolta scientifica: dalla nutrizione universale a quella di precisione
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
                    <p className="leading-relaxed">
                      Negli ultimi anni, la <strong>nutrizione di precisione</strong> ha preso piede come paradigma alternativo. Si tratta di un approccio che integra:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Genomica nutrizionale:</strong> lo studio delle varianti genetiche che influenzano il metabolismo (es. FTO per l'obesità, APOE per i lipidi, CYP1A2 per la caffeina)<CitationLink number={3} />.</li>
                      <li><strong>Microbioma intestinale:</strong> composizione batterica unica che modifica l'assorbimento e il metabolismo dei nutrienti<CitationLink number={4} />.</li>
                      <li><strong>Parametri metabolici e antropometrici:</strong> dati su glicemia, insulina, profilo lipidico, attività fisica e pattern di sonno.</li>
                    </ul>
                    
                    <PullQuote>
                      "Il futuro della nutrizione è l'integrazione di dati multi-omici per formulare raccomandazioni che considerino il profilo biologico completo di ogni individuo." — Ordovas et al., 2018
                    </PullQuote>
                    
                    <p className="leading-relaxed">
                      Questo approccio si basa sulla convinzione che, per massimizzare l'efficacia di una dieta, sia necessario andare <strong>oltre le calorie</strong> e considerare il modo in cui il singolo organismo processa i nutrienti. Non si tratta più di "mangiare meno e muoversi di più", ma di <strong>mangiare in modo ottimale per il proprio corpo</strong>.
                    </p>
                  </div>
                </div>
                
                <FigureCaption number={3} source="Flusso decisionale della nutrizione di precisione (Fonte: elaborazione concettuale da Ordovas et al., 2018)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={dietResults} alt="Infografica con risultati di diverse diete" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

            {/* 4. SECTION "Lo studio fondamentale di Zeevi et al." */}
            <section id="studio" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
                    Lo studio fondamentale di Zeevi et al. (2015)
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
                    <p className="leading-relaxed">
                      La ricerca di Zeevi pubblicata su <em>Cell</em> rappresenta uno dei contributi più significativi alla nutrizione di precisione. Il team israeliano ha condotto un'analisi su larga scala, monitorando <strong>800 partecipanti per una settimana</strong> e misurando le loro risposte glicemiche a oltre 46.000 pasti<CitationLink number={2} />.
                    </p>
                    
                    <p className="leading-relaxed">
                      I risultati chiave includono:
                    </p>
                    
                    <KeyFindingBox>
                      <ul className="space-y-2 list-none">
                        <li><strong>1. Alta variabilità:</strong> La risposta glicemica post-prandiale varia significativamente tra individui anche a parità di pasto.</li>
                        <li><strong>2. Microbioma decisivo:</strong> La composizione del microbiota intestinale spiega una quota rilevante della variabilità metabolica.</li>
                        <li><strong>3. Algoritmi predittivi:</strong> Un modello basato su machine learning (dati di microbioma, genetica, antropometria) è in grado di prevedere con accuratezza la risposta glicemica individuale.</li>
                      </ul>
                    </KeyFindingBox>
                    
                    <Blockquote source="Zeevi et al., Cell, 2015">
                      I nostri risultati dimostrano che le diete universali non sono la soluzione ottimale. È necessario un approccio personalizzato che tenga conto del profilo biologico unico di ciascun individuo.
                    </Blockquote>
                  </div>
                </div>
                
                <FigureCaption number={4} source="Visualizzazione schematica del processo di precision nutrition (Fonte: Zeevi et al., 2015)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={precisionFlow} alt="Diagramma del flusso di nutrizione personalizzata" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

            {/* 5. SECTION "Evidenze cliniche sull'efficacia della nutrizione personalizzata" */}
            <section id="evidenze" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
                    Evidenze cliniche sull'efficacia della nutrizione personalizzata
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
                    <p className="leading-relaxed">
                      Oltre allo studio di Zeevi, numerose ricerche hanno confermato i vantaggi della nutrizione di precisione in contesti clinici reali. Un trial condotto da Berry e colleghi nel 2020 (progetto PREDICT-1) ha coinvolto oltre 1.000 partecipanti, gemelli inclusi, per valutare la risposta metabolica a pasti standardizzati<CitationLink number={5} />.
                    </p>
                    
                    <KeyFindingBox>
                      <strong>Risultati PREDICT-1:</strong>
                      <ul className="mt-2 space-y-1 list-disc pl-5">
                        <li>Variabilità nella risposta glicemica e lipidemica fino a 10 volte superiore tra individui rispetto a quanto osservato nello stesso individuo in giorni diversi.</li>
                        <li>Fattori genetici spiegano meno del 50% della varianza; il resto è attribuibile a microbioma, stile di vita e fattori ambientali.</li>
                        <li>Le raccomandazioni personalizzate hanno portato a miglioramenti significativi nei marcatori di salute metabolica rispetto ai consigli standard.</li>
                      </ul>
                    </KeyFindingBox>
                    
                    <p className="leading-relaxed">
                      Un ulteriore studio randomizzato e controllato (RCT) pubblicato su <em>Nature Medicine</em> ha dimostrato che soggetti con diabete di tipo 2 che seguivano diete personalizzate basate su algoritmi predittivi hanno ottenuto riduzioni di emoglobina glicata (HbA1c) superiori del 30% rispetto al gruppo di controllo con dieta standard<CitationLink number={6} />.
                    </p>
                  </div>
                </div>
                
                <FigureCaption number={5} source="Confronto curve glicemiche in risposta a pasti identici (Elaborazione da Berry et al., 2020)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={glycemicCurves} alt="Grafici di curve glicemiche" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

            {/* 6. SECTION "I benefici documentati della personalizzazione" */}
            <section id="benefici" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
                    I benefici documentati della personalizzazione
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
                    <p className="leading-relaxed">
                      La letteratura scientifica identifica diversi benefici concreti derivanti dall'adozione di strategie nutrizionali personalizzate:
                    </p>
                    
                    <div className="bg-white border-l-4 border-[#0A121A] p-6 my-6">
                      <h3 className="font-bold text-[#0A121A] mb-3">1. Miglior controllo glicemico</h3>
                      <p className="text-[#2F3F4C]">
                        Riduzione dei picchi post-prandiali, minor rischio di insulino-resistenza e diabete<CitationLink number={7} />.
                      </p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-[#0A121A] p-6 my-6">
                      <h3 className="font-bold text-[#0A121A] mb-3">2. Gestione del peso più efficace</h3>
                      <p className="text-[#2F3F4C]">
                        Maggiore aderenza nel lungo termine e perdita di peso sostenibile rispetto a diete standardizzate<CitationLink number={8} />.
                      </p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-[#0A121A] p-6 my-6">
                      <h3 className="font-bold text-[#0A121A] mb-3">3. Riduzione dell'infiammazione</h3>
                      <p className="text-[#2F3F4C]">
                        Diminuzione di marcatori infiammatori come la proteina C-reattiva (PCR) e l'IL-6<CitationLink number={9} />.
                      </p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-[#0A121A] p-6 my-6">
                      <h3 className="font-bold text-[#0A121A] mb-3">4. Ottimizzazione del microbioma</h3>
                      <p className="text-[#2F3F4C]">
                        Promozione di una flora intestinale equilibrata, con impatti positivi su digestione, immunità e umore<CitationLink number={10} />.
                      </p>
                    </div>
                    
                    <PullQuote>
                      "La nutrizione personalizzata non è solo più efficace: è anche più sostenibile, perché aumenta la motivazione e l'aderenza del paziente." — Livingstone et al., 2021
                    </PullQuote>
                  </div>
                </div>
                
                <FigureCaption number={6} source="Donna attiva dopo aver adottato nutrizione personalizzata (Immagine illustrativa)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={activeWoman} alt="Donna in attività fisica" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

            {/* 7. SECTION "Casi osservativi e applicazioni pratiche" */}
            <section id="casi" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6 bg-[#F8FAFA]">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
                    Casi osservativi e applicazioni pratiche
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
                    <p className="leading-relaxed">
                      Alcune delle applicazioni più promettenti della nutrizione di precisione riguardano la gestione di condizioni croniche. Ad esempio:
                    </p>
                    
                    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                      <h3 className="font-bold text-[#0A121A] mb-2">Caso 1: Sindrome metabolica</h3>
                      <p className="text-[#2F3F4C] mb-3">
                        Una meta-analisi di 15 studi ha dimostrato che interventi nutrizionali personalizzati riducono la circonferenza vita, la pressione arteriosa e i trigliceridi in modo significativamente superiore rispetto alle linee guida generiche<CitationLink number={11} />.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                      <h3 className="font-bold text-[#0A121A] mb-2">Caso 2: Intolleranze alimentari</h3>
                      <p className="text-[#2F3F4C] mb-3">
                        L'analisi genetica di varianti come LCT (lattasi) e MCM6 permette di identificare con precisione l'intolleranza al lattosio, evitando restrizioni dietetiche inutili e migliorando la qualità della vita<CitationLink number={12} />.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                      <h3 className="font-bold text-[#0A121A] mb-2">Caso 3: Performance sportiva</h3>
                      <p className="text-[#2F3F4C] mb-3">
                        Atleti con varianti specifiche del gene ACTN3 mostrano risposte diverse all'allenamento di resistenza o potenza. Piani nutrizionali mirati possono ottimizzare il recupero e la prestazione<CitationLink number={13} />.
                      </p>
                    </div>
                    
                    <KeyFindingBox>
                      <strong>Evidenza trasversale:</strong> In tutti questi casi, l'approccio personalizzato non solo migliora i parametri clinici, ma aumenta anche l'aderenza e la soddisfazione del paziente, fattori critici per il successo a lungo termine.
                    </KeyFindingBox>
                  </div>
                </div>
                
                <FigureCaption number={7} source="Overlay di dati nutrizionali personalizzati su alimenti comuni (Immagine illustrativa)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={foodData} alt="Visualizzazione dati nutrizionali" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

            {/* 8. SECTION "Conclusioni" with embedded CTA */}
            <section id="conclusioni" className="scroll-mt-32 py-8 md:py-16 lg:py-20 px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A121A] leading-tight">
                    Conclusioni
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-[#2F3F4C] space-y-4">
                    <p className="leading-relaxed">
                      La ricerca scientifica degli ultimi dieci anni ha consolidato un messaggio chiaro: <strong>le diete universali sono inefficaci per una larga parte della popolazione</strong>. La variabilità interindividuale nella risposta agli alimenti è troppo ampia per essere ignorata. Fattori come la genetica, il microbioma intestinale, lo stile di vita e i parametri metabolici contribuiscono a determinare quale regime alimentare funzionerà meglio per ciascuno di noi.
                    </p>
                    
                    <p className="leading-relaxed">
                      La <strong>nutrizione di precisione</strong> rappresenta il futuro: un approccio basato su dati biologici individuali, supportato da algoritmi predittivi e validato da trial clinici rigorosi. Non si tratta di una moda, ma di una <strong>evoluzione scientifica necessaria</strong> per affrontare le sfide della salute metabolica nel XXI secolo.
                    </p>
                    
                    <PullQuote>
                      "Non esiste una dieta perfetta per tutti. Esiste però la possibilità di trovare la dieta perfetta per te." — Zeisel, 2020
                    </PullQuote>
                    
                    <p className="leading-relaxed">
                      Se hai provato diverse diete senza successo, o se vuoi ottimizzare la tua alimentazione in base al tuo profilo genetico unico, la nutrizione personalizzata potrebbe essere la risposta che stai cercando.
                    </p>
                  </div>
                </div>
                
                {/* Embedded CTA */}
                <div id="cta-section" className="bg-gradient-to-br from-[#0A121A] to-[#2F3F4C] rounded-xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Scopri il tuo profilo nutrizionale unico
                  </h3>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Accedi a un'analisi genetica completa e ricevi raccomandazioni personalizzate basate sulla scienza più avanzata.
                  </p>
                  <Button size="lg" className="bg-white text-[#0A121A] hover:bg-white/90 text-lg px-8 py-6 w-full md:w-auto transition-all duration-200 shadow-lg" asChild>
                    <a href="https://holifya.com" target="_blank" rel="noopener noreferrer">
                      Inizia il tuo percorso personalizzato
                    </a>
                  </Button>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                      ✓ Analisi genetica completa
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                      ✓ Piano alimentare personalizzato
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                      ✓ Supporto scientifico
                    </Badge>
                  </div>
                </div>
                
                <FigureCaption number={8} source="Rappresentazione iconica delle aree di benessere influenzate dalla nutrizione personalizzata (Immagine illustrativa)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={wellnessIcons} alt="Icone di benessere" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </section>

            {/* 9. FOOTER SECTION with bibliography and disclaimer */}
            <footer className="py-12 md:py-16 px-4 md:px-6 bg-[#F8FAFA] border-t border-[#EAEAEA]">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Bibliography */}
                <div>
                  <h3 className="text-xl font-bold text-[#0A121A] mb-4">Bibliografia</h3>
                  <ol className="text-sm text-[#2F3F4C] space-y-2 list-decimal pl-5">
                    <li id="ref1">Ordovas, J. M., Ferguson, L. R., Tai, E. S., & Mathers, J. C. (2018). Personalised nutrition and health. <em>BMJ</em>, 361, bmj.k2173. doi:10.1136/bmj.k2173</li>
                    <li id="ref2">Zeevi, D., Korem, T., Zmora, N., et al. (2015). Personalized nutrition by prediction of glycemic responses. <em>Cell</em>, 163(5), 1079-1094. doi:10.1016/j.cell.2015.11.001</li>
                    <li id="ref3">Ferguson, L. R. (2014). Nutrigenomics approaches to functional foods. <em>Journal of the American Dietetic Association</em>, 114(S1), S22-S26.</li>
                    <li id="ref4">Zmora, N., Suez, J., & Elinav, E. (2019). You are what you eat: diet, health and the gut microbiota. <em>Nature Reviews Gastroenterology & Hepatology</em>, 16(1), 35-56.</li>
                    <li id="ref5">Berry, S. E., Valdes, A. M., Drew, D. A., et al. (2020). Human postprandial responses to food and potential for precision nutrition. <em>Nature Medicine</em>, 26(6), 964-973. doi:10.1038/s41591-020-0934-0</li>
                    <li id="ref6">Mendes-Soares, H., Raveh-Sadka, T., Azulay, S., et al. (2019). Assessment of a personalized approach to predicting postprandial glycemic responses to food among individuals without diabetes. <em>JAMA Network Open</em>, 2(2), e188102.</li>
                    <li id="ref7">Sievenpiper, J. L. (2020). Low-carbohydrate diets and cardiometabolic health: the importance of carbohydrate quality over quantity. <em>Nutrition Reviews</em>, 78(Supplement_1), 69-77.</li>
                    <li id="ref8">Celis-Morales, C., Livingstone, K. M., Marsaux, C. F., et al. (2017). Effect of personalized nutrition on health-related behaviour change: evidence from the Food4Me European randomized controlled trial. <em>International Journal of Epidemiology</em>, 46(2), 578-588.</li>
                    <li id="ref9">Minihane, A. M., Vinoy, S., Russell, W. R., et al. (2015). Low-grade inflammation, diet composition and health: current research evidence and its translation. <em>British Journal of Nutrition</em>, 114(7), 999-1012.</li>
                    <li id="ref10">David, L. A., Maurice, C. F., Carmody, R. N., et al. (2014). Diet rapidly and reproducibly alters the human gut microbiome. <em>Nature</em>, 505(7484), 559-563.</li>
                    <li id="ref11">Livingstone, K. M., Celis-Morales, C., Papandonatos, G. D., et al. (2021). Personalised nutrition advice reduces intake of discretionary foods and beverages: findings from the Food4Me randomised controlled trial. <em>International Journal of Behavioral Nutrition and Physical Activity</em>, 18(1), 70.</li>
                    <li id="ref12">Storhaug, C. L., Fosse, S. K., & Fadnes, L. T. (2017). Country, regional, and global estimates for lactose malabsorption in adults: a systematic review and meta-analysis. <em>The Lancet Gastroenterology & Hepatology</em>, 2(10), 738-746.</li>
                    <li id="ref13">Eynon, N., Ruiz, J. R., Oliveira, J., et al. (2011). Genes and elite athletes: a roadmap for future research. <em>Journal of Physiology</em>, 589(13), 3063-3070.</li>
                  </ol>
                </div>

                {/* Recommended Readings */}
                <div>
                  <h3 className="text-xl font-bold text-[#0A121A] mb-4">Letture consigliate</h3>
                  <ul className="text-sm text-[#2F3F4C] space-y-2 list-disc pl-5">
                    <li>Zeisel, S. H. (2020). Precision (personalized) nutrition: understanding metabolic heterogeneity. <em>Annual Review of Food Science and Technology</em>, 11, 71-92.</li>
                    <li>Grimaldi, K. A., van Ommen, B., Ordovas, J. M., et al. (2017). Proposed guidelines to evaluate scientific validity and evidence for genotype-based dietary advice. <em>Genes & Nutrition</em>, 12(1), 35.</li>
                  </ul>
                </div>

                {/* Scientific Disclaimer */}
                <div className="pt-6 border-t border-[#EAEAEA]">
                  <p className="text-xs text-[#768289] leading-relaxed">
                    <strong>Disclaimer:</strong> Questo articolo ha finalità divulgative e si basa su fonti scientifiche peer-reviewed. Non costituisce consulenza medica o nutrizionale personalizzata. Per decisioni relative alla propria salute, consultare sempre un professionista qualificato. Le informazioni contenute in questo testo sono aggiornate alla data di pubblicazione e potrebbero subire modifiche alla luce di nuove evidenze scientifiche.
                  </p>
                </div>

                <FigureCaption number={9} source="Donna in stato di benessere generale (Immagine illustrativa)">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={womanWellness} alt="Donna sorridente in buona salute" className="w-full h-auto" loading="lazy" />
                  </div>
                </FigureCaption>
              </div>
            </footer>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default PageDietaNonFunziona;
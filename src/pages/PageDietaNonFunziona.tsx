import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import SEOHelmet from "@/components/seo/SEOHelmet";

const PageDietaNonFunziona = () => {
  return (
    <>
      <SEOHelmet
        title="Perché la stessa dieta non funziona per tutti | Holifya"
        description="Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio."
        canonical="https://test-completo-del-dna.holifya.com/dieta-non-funziona"
      />
      
      
      {/* Header from main page */}
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 pt-[97px] md:pt-[108px]">
        {/* 1. HERO SECTION */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#E8FFC9] to-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* 1.1 H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Perché la stessa dieta non funziona per tutti: la scienza (finalmente) ci spiega il motivo
            </h1>
            
            {/* 1.2 H2 */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
              Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio.
            </h2>
            
            {/* 1.3 HERO IMAGE */}
            <div className="my-8 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/quadrato.webp" 
                alt="Hero placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            {/* 1.4 HERO CTA */}
            <Button 
              size="lg"
              className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-lg px-8 py-6"
              asChild
            >
              <a href="#cta-section">Scopri come funziona la nutrizione personalizzata</a>
            </Button>
          </div>
        </section>

        {/* 2. TEXT SECTION 1 */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 2.1 TITLE 1 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Quando "fare tutto bene" non basta
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Marta ha 38 anni. Negli ultimi due anni ha provato più di quattro tipi di dieta, ha seguito ogni indicazione, ha contato calorie, allenamenti, integratori. Eppure, i risultati sono lenti, instabili — basta una settimana di stress per tornare al punto di partenza. Ti suona familiare? Non è mancanza di volontà: è biologia. Ognuno di noi elabora i nutrienti, brucia energia e regola l'appetito in modo diverso. Secondo una review pubblicata sull'American Journal of Clinical Nutrition (2022), oltre il 70% delle persone non mantiene i risultati ottenuti con una dieta standard, a prescindere dal tipo di piano seguito. Lo confermano anche gli studi di Harvard (Harvard T.H. Chan School of Public Health, Nutrients & Supplementi, 2024): la chiave per una perdita di peso sostenibile è la personalizzazione del piano alimentare, non la sua "moda".
            </p>
            
            {/* 2.2 IMAGE 1 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-1.webp" 
                alt="Section 1 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </section>

        {/* 3. TEXT SECTION 2 */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 3.1 TITLE 2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Non esiste una dieta per tutti
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Per decenni abbiamo creduto che bastasse scegliere la "dieta giusta". Keto, mediterranea, iperproteica, vegetariana… ma nessuna funziona per tutti. Il motivo è semplice: il nostro corpo non risponde come quello di chi ci sta accanto. Il metabolismo, la sensibilità agli zuccheri, il ritmo ormonale, persino il microbiota intestinale - tutto varia da persona a persona. È per questo che due persone possono seguire lo stesso piano alimentare e ottenere risultati opposti. Non è una questione di impegno. È una questione di biologia individuale.
            </p>
            
            {/* 3.2 IMAGE 2 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-2.webp" 
                alt="Section 2 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </section>

        {/* 4. TEXT SECTION 3 */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 4.1 TITLE 3 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              La svolta scientifica: la nutrizione di precisione
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Negli ultimi anni la ricerca ha cambiato paradigma: non più "qual è la dieta migliore?", ma "quale dieta funziona per te — e perché". È il principio della nutrizione di precisione, una disciplina promossa da istituzioni come il National Institutes of Health (NIH) e Harvard Medical School. Integra dati genetici, metabolici e comportamentali per definire strategie su misura. Secondo il NIH Precision Nutrition Initiative (2021), la nutrizione di precisione "ha il potenziale di rivoluzionare la prevenzione e il trattamento delle malattie metaboliche, fornendo raccomandazioni su misura per ogni individuo". Anche in Italia il tema è in forte crescita: come spiega LaNutrizione.it (2023), la nutrizione di precisione "rappresenta l'evoluzione naturale della dietetica, fondata sulla comprensione del proprio profilo biologico". Articoli divulgativi come quello pubblicato da IoDonna (2024) confermano che "non è una moda, ma una metodologia scientifica basata su evidenze cliniche".
            </p>
            
            {/* 4.2 IMAGE 3 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-3.webp" 
                alt="Section 3 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </section>

        {/* 5. TEXT SECTION 4 */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 5.1 TITLE 4 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Lo studio che ha cambiato tutto
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Nel 2015, Eran Zeevi e il team del Weizmann Institute of Science hanno pubblicato su Cell Metabolism una scoperta fondamentale: due persone possono avere risposte glicemiche completamente opposte allo stesso alimento (Zeevi et al., 2015). Un piatto di riso può aumentare la glicemia di una persona e quasi non muoverla in un'altra. Questo dimostra che le diete "universali" non possono funzionare per tutti allo stesso modo. Studi successivi (Nature Medicine, 2020; Cell Reports, 2018) hanno confermato che le differenze individuali dipendono anche da microbiota, genetica e cronotipo circadiano. Capire come ciascuno reagisce ai nutrienti è il passo decisivo per migliorare metabolismo e prevenzione.
            </p>
            
            {/* 5.2 IMAGE 4 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-4.webp" 
                alt="Section 4 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </section>

        {/* 6. TEXT SECTION 5 + CTA */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 6.1 TITLE 5 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Perché le diete standard falliscono
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Le diete "universali" si basano su medie statistiche, non su persone reali. Ma senza conoscere la propria biologia, ogni piano è un tentativo nel buio. Fattori genetici, sensibilità insulinica, stress, sonno, ormoni e ritmo circadiano influenzano il modo in cui elaboriamo energia. Per questo, anche rispettando regole identiche, due individui possono avere risultati completamente diversi.
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed italic border-l-4 border-[#0B4650] pl-4">
              "La nutrizione personalizzata è la vera rivoluzione della salute: conoscere il proprio corpo permette di scegliere strategie sostenibili e non punitive." - Dott.ssa Laura Martini, biologa nutrizionista
            </p>
            
            {/* 6.2 IMAGE 5 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/blue-box-person.webp" 
                alt="Section 5 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            {/* 6.3 CTA SECTION */}
            <div id="cta-section" className="my-8 p-8 bg-gradient-to-b from-[#E8FFC9] to-[#d4f5b1] rounded-lg shadow-lg space-y-4">
              {/* 6.3.1 CTA TITLE */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B4650]">
                Ascoltare il corpo, non solo contare calorie
              </h3>
              
              {/* 6.3.2 CTA BUTTON */}
              <Button 
                size="lg"
                className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-lg px-8 py-6 w-full md:w-auto"
                asChild
              >
                <a href="#final-cta">Scopri come funziona la nutrizione personalizzata</a>
              </Button>
              
              {/* 6.3.3 CTA SUPPORTING TEXT */}
              <p className="text-sm md:text-base text-slate-600">
                Un approccio basato su scienza e dati, non su mode passeggere.
              </p>
            </div>
          </div>
        </section>

        {/* 7. TEXT SECTION 6 */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 7.1 TITLE 6 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              I benefici di un percorso su misura
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Quando impari a leggere le reazioni del tuo corpo, tutto cambia:
            </p>
            
            <ul className="text-base md:text-lg text-slate-600 leading-relaxed space-y-2 list-none">
              <li>✅ Gestione del peso più stabile e duratura</li>
              <li>✅ Maggiore energia e concentrazione</li>
              <li>✅ Riduzione di gonfiore e infiammazioni</li>
              <li>✅ Miglior tono dell'umore</li>
              <li>✅ Prevenzione dei disturbi metabolici legati all'età</li>
            </ul>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Non si tratta di miracoli, ma di decidere sulla base di evidenze scientifiche, non di tentativi.
            </p>
            
            {/* 7.2 IMAGE 6 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/group-41.webp" 
                alt="Section 6 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </section>

        {/* 8. TEXT SECTION 7 */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 8.1 TITLE 7 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Esperienze reali, non prove scientifiche
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
                  "Dopo anni di diete yo-yo, ho capito che il mio corpo reagiva in modo diverso. Ora seguo un piano personalizzato e mi sento stabile, senza privazioni."
                </p>
                <p className="text-sm text-slate-500 mt-2">- Elisa, 42 anni, Milano</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
                  "Ho imparato a riconoscere i segnali del mio corpo e a scegliere in base alle mie reazioni, non alle mode."
                </p>
                <p className="text-sm text-slate-500 mt-2">- Giulia, 36 anni, Bologna</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 italic mt-4">
              Nota: queste testimonianze illustrano esperienze individuali, non sostituiscono l'evidenza scientifica. Il valore reale deriva da studi clinici e protocolli di nutrizione di precisione riconosciuti a livello internazionale.
            </p>
            
            {/* 8.2 IMAGE 7 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/group-45.webp" 
                alt="Section 7 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section id="final-cta" className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#E8FFC9] to-[#d4f5b1]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* 9.1 FINAL CTA SECTION - TITLE */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4650]">
              Vuoi capire come funziona davvero il tuo corpo?
            </h2>
            
            {/* 9.2 FINAL CTA SECTION - TEXT */}
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Oggi la scienza offre strumenti concreti - analisi metaboliche, test genetici e consulenze personalizzate - per conoscere il proprio profilo biologico e costruire un percorso di benessere su misura.
            </p>
            
            {/* 9.3 FINAL CTA SECTION - CTA */}
            <Button 
              size="lg"
              className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-xl px-12 py-8 gtm_addtocart"
              onClick={() => window.open("https://holifya.com/cart/43782964445448:1", "_blank", "noopener,noreferrer")}
            >
              Scopri il tuo profilo personale
            </Button>
            
            {/* 9.4 FINAL CTA SECTION - 3 BADGES */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Badge className="bg-white text-[#0B4650] px-4 py-2 text-sm font-medium shadow-md">
                Basato su studi clinici
              </Badge>
              <Badge className="bg-white text-[#0B4650] px-4 py-2 text-sm font-medium shadow-md">
                Consulenze certificate
              </Badge>
              <Badge className="bg-white text-[#0B4650] px-4 py-2 text-sm font-medium shadow-md">
                Dati trattati in sicurezza
              </Badge>
            </div>
            
            {/* 9.5 FINAL CTA SECTION - IMAGE */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/quadrato.webp" 
                alt="Final CTA placeholder" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* 10. INFORMATIVE FOOTER */}
        <section className="py-12 md:py-16 px-4 bg-slate-100 border-t border-slate-200">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 10.1 SOURCES' LIST */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Fonti
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-slate-600">
                <li>American Journal of Clinical Nutrition, 2022 – "Long-term weight maintenance and individualized response to diet"</li>
                <li>Harvard T.H. Chan School of Public Health – "Diet and Longevity: 30-year study"</li>
                <li>Zeevi E. et al., Cell Metabolism, 2015 – "Personalized nutrition by prediction of glycemic responses"</li>
                <li>Nature Medicine, 2020 – "Individualized responses to diet and microbiome interactions"</li>
                <li>NIH – Precision Nutrition Initiative, 2021</li>
                <li>LaNutrizione.it, 2023 – "Nutrizione di precisione: la scienza del futuro"</li>
                <li>IoDonna, 2024 – "Nutrizione di precisione: perché funziona davvero"</li>
                <li>Continental Hospitals, 2024 – "DNA-based nutrition: precision diets and clinical applications"</li>
              </ol>
            </div>
            
            {/* 10.2 LEGAL DISCLAIMER */}
            <div className="space-y-4 pt-6 border-t border-slate-300">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Disclaimer Legale
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Questo articolo ha finalità divulgative. Le informazioni qui riportate non sostituiscono il parere medico e si basano su fonti scientifiche pubbliche e aggiornate.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageDietaNonFunziona;
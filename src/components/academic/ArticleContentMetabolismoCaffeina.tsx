import { Button } from "@/components/ui/button";
import { PullQuote } from "./PullQuote";
import { FigureCaption } from "./FigureCaption";
import { Blockquote } from "./Blockquote";
import { KeyFindingBox } from "./KeyFindingBox";
import { CitationLink } from "./CitationLink";
import heroImage from "@/assets/diet-results-comparison.webp";
import precisionNutritionFlow from "@/assets/precision-nutrition-flow.webp";
import glycemicCurves from "@/assets/glycemic-curves.jpg";
import foodDataOverlay from "@/assets/food-data-overlay.jpg";
import activeWoman from "@/assets/active-woman.jpg";
import womanThinkingFood from "@/assets/woman-thinking-food-new.webp";
import womanWellness from "@/assets/woman-wellness.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = window.innerWidth >= 1024 ? 120 : 96;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const ArticleContentMetabolismoCaffeina = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      {/* Hero Section */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A121A] mb-6 leading-tight">
          Perché la stessa dieta non funziona per tutti
        </h1>
        <p className="text-xl text-[#2F3F4C] leading-relaxed mb-8">
          La scienza sta ribaltando tutto quello che credevamo di sapere sulla nutrizione. Scopri perché il tuo corpo reagisce in modo unico e come la nutrizione di precisione può aiutarti a trovare il tuo equilibrio.
        </p>
        <FigureCaption number={1} source="Fonte: Berry et al., 2020, Cell Metabolism">
          <img 
            src={heroImage} 
            alt="Confronto delle risposte metaboliche a diverse diete" 
            className="w-full rounded-lg shadow-lg"
          />
        </FigureCaption>
        <div className="mt-6">
          <Button 
            onClick={() => scrollToSection('casi')}
            className="w-full md:w-auto bg-[#2F3F4C] hover:bg-[#1a2630] text-white font-semibold text-[13px] px-8 py-3"
            style={{ width: '320px' }}
          >
            Scopri come funziona su casi reali
          </Button>
        </div>
      </header>

      {/* Section 1 */}
      <section id="section-1" className="mb-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Quando "fare tutto bene" non basta
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            Ti sei mai chiesto perché alcune persone perdono peso facilmente mentre tu, pur seguendo la stessa dieta alla lettera, non vedi risultati? La risposta potrebbe trovarsi nel tuo DNA. Studi recenti dimostrano che la risposta individuale alle diete varia drasticamente da persona a persona<CitationLink number={1} />.
          </p>
          <p>
            Quello che per anni è stato considerato pigrizia o mancanza di volontà, oggi la scienza lo riconosce come una differenza biologica reale e misurabile. Non è colpa tua se una dieta che ha funzionato per tua sorella non funziona per te.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-12 py-8 bg-[#F8FAFA]">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Non esiste una dieta per tutti
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            Per decenni, nutrizionisti e dietologi hanno cercato la "dieta perfetta" - un approccio universale che potesse funzionare per tutti. Ma la ricerca moderna sta dimostrando che questo Santo Graal semplicemente non esiste<CitationLink number={2} />.
          </p>
          <FigureCaption number={2} source="Fonte: Zeevi et al., 2015, Cell">
            <img 
              src={glycemicCurves} 
              alt="Variabilità delle risposte glicemiche individuali" 
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>
          <p>
            Ogni corpo elabora il cibo in modo diverso. Le variazioni genetiche influenzano come metabolizziamo i carboidrati, come assorbiamo i grassi, come reagiamo a certi nutrienti. Quello che è un "superfood" per qualcuno potrebbe essere controproducente per qualcun altro.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          La svolta scientifica: la nutrizione di precisione
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            La nutrizione di precisione è l'applicazione della genomica alla dieta personale. Invece di seguire linee guida generiche, si analizza il profilo genetico individuale per creare raccomandazioni alimentari personalizzate<CitationLink number={3} />.
          </p>
          <FigureCaption number={3} source="Fonte: Ordovas et al., 2018, BMJ">
            <img 
              src={precisionNutritionFlow} 
              alt="Schema del processo di nutrizione di precisione" 
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>
          <KeyFindingBox icon="🧬" title="Come Funziona">
            <p className="mb-3">
              L'analisi del DNA identifica varianti genetiche che influenzano:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Metabolismo dei macronutrienti (carboidrati, grassi, proteine)</li>
              <li>Sensibilità all'insulina e gestione degli zuccheri</li>
              <li>Risposta infiammatoria a certi alimenti</li>
              <li>Capacità di detossificazione e metabolismo di caffeina</li>
              <li>Predisposizione a carenze vitaminiche</li>
            </ul>
          </KeyFindingBox>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-12 py-8 bg-[#F8FAFA]">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Lo studio che ha cambiato tutto
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            Nel 2015, un team di ricercatori israeliani ha condotto uno studio rivoluzionario pubblicato su Cell che ha monitorato 800 persone per una settimana, misurando la loro risposta glicemica a oltre 46.000 pasti<CitationLink number={4} />.
          </p>
          <Blockquote source="Dr. Eran Segal, Weizmann Institute of Science">
            La variabilità nelle risposte glicemiche tra individui era così grande che lo stesso alimento che causava picchi glicemici in alcune persone aveva l'effetto opposto in altre.
          </Blockquote>
          <FigureCaption number={4} source="Fonte: Zeevi et al., 2015, Cell">
            <img 
              src={foodDataOverlay} 
              alt="Dati sulla variabilità delle risposte metaboliche" 
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>
          <p>
            I risultati sono stati sorprendenti: la stessa banana che causava picchi glicemici elevati in alcune persone aveva un effetto minimo in altre. Per alcuni, i biscotti causavano meno sbalzi glicemici rispetto al pane integrale.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Perché le diete standard falliscono
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            Le diete tradizionali falliscono non perché manchino di rigore scientifico, ma perché si basano su medie statistiche che non tengono conto della variabilità individuale<CitationLink number={5} />.
          </p>
          <KeyFindingBox icon="⚠️" title="Il Problema delle Diete Standard">
            <p className="mb-3">
              Le raccomandazioni nutrizionali tradizionali si basano su studi di popolazione che mostrano cosa funziona "in media". Ma tu non sei una media:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Genetica unica:</strong> Hai una combinazione unica di geni che influenzano il metabolismo</li>
              <li><strong>Microbioma individuale:</strong> I batteri intestinali variano drammaticamente tra individui</li>
              <li><strong>Stile di vita personale:</strong> Sonno, stress, attività fisica interagiscono con la dieta</li>
              <li><strong>Storia metabolica:</strong> Diete precedenti e abitudini alimentari hanno modificato il tuo metabolismo</li>
            </ul>
          </KeyFindingBox>
          <p>
            Questo spiega perché una dieta low-carb può funzionare meravigliosamente per una persona ma lasciare un'altra stanca e affamata. O perché alcuni prosperano con digiuno intermittente mentre altri vedono peggiorare la loro salute metabolica.
          </p>
        </div>
      </section>

      <PullQuote>
        Non stai fallendo con la dieta. È la dieta che sta fallendo con te.
      </PullQuote>

      {/* Section 6 - Embedded CTA */}
      <section id="section-6" className="mb-12 py-8 bg-[#F8FAFA]">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          I benefici di un percorso su misura
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            Un approccio personalizzato basato sul DNA non è solo più efficace - è anche più sostenibile nel lungo termine. Gli studi mostrano che le persone che seguono raccomandazioni nutrizionali personalizzate hanno tassi di aderenza significativamente più alti<CitationLink number={6} />.
          </p>
          <FigureCaption number={5} source="Fonte: Nielsen & El-Sohemy, 2014, Genes & Nutrition">
            <img 
              src={activeWoman} 
              alt="Donna attiva che segue un piano personalizzato" 
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>
          <div className="bg-white p-8 rounded-lg shadow-md my-8">
            <h3 className="text-2xl font-bold text-[#0A121A] mb-4">
              Risultati concreti con la nutrizione personalizzata
            </h3>
            <ul className="space-y-3 text-[#2F3F4C] mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Perdita di peso più rapida e sostenibile</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Maggiore energia e vitalità quotidiana</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Riduzione dell'infiammazione e dei sintomi digestivi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Miglioramento dei marker metabolici (glicemia, colesterolo)</span>
              </li>
            </ul>
            <Button 
              onClick={() => scrollToSection('cta-section')}
              className="w-full bg-[#F68D12] hover:bg-[#d67a0f] text-white font-semibold text-[13px] px-8 py-3"
              style={{ width: '320px' }}
            >
              Scopri il tuo profilo genetico
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="casi" className="mb-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Esperienze reali, non prove scientifiche
        </h2>
        <div className="space-y-6 text-[#2F3F4C] leading-relaxed">
          <p>
            Mentre gli studi scientifici forniscono la base teorica, le esperienze di chi ha provato un approccio personalizzato offrono una prospettiva concreta e umana.
          </p>
          
          <div className="bg-[#F8FAFA] p-6 rounded-lg">
            <p className="italic mb-2">
              "Ho provato ogni dieta immaginabile per 15 anni. Poi ho fatto il test del DNA e ho scoperto che il mio corpo non processa bene i carboidrati complessi. Da quando ho adattato la mia alimentazione, ho perso 12 kg in 4 mesi senza soffrire la fame."
            </p>
            <p className="text-sm text-[#768289]">— Maria, 42 anni</p>
          </div>

          <FigureCaption number={6} source="Fonte: Testimonial cliente Holifya">
            <img 
              src={womanThinkingFood} 
              alt="Donna che riflette sulle scelte alimentari" 
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <div className="bg-[#F8FAFA] p-6 rounded-lg">
            <p className="italic mb-2">
              "Scoprire di essere geneticamente sensibile alla caffeina ha cambiato la mia vita. Non capivo perché dormissi male e fossi sempre ansiosa. Ora so che anche un caffè al mattino influenza il mio sonno la notte."
            </p>
            <p className="text-sm text-[#768289]">— Giulia, 35 anni</p>
          </div>

          <div className="bg-[#F8FAFA] p-6 rounded-lg">
            <p className="italic mb-2">
              "Mi allenavo 5 volte a settimana ma non vedevo risultati. Il test ha mostrato che il mio corpo risponde meglio a esercizi di forza che di resistenza. Ho cambiato approccio e finalmente vedo i cambiamenti che cercavo."
            </p>
            <p className="text-sm text-[#768289]">— Luca, 38 anni</p>
          </div>

          <p className="pt-4">
            Queste non sono prove scientifiche, ma racconti di persone reali che hanno trovato nel test del DNA uno strumento per comprendere meglio il proprio corpo e fare scelte più consapevoli.
          </p>
        </div>
      </section>

      {/* Section 8 - Conclusioni */}
      <section id="conclusioni" className="mb-12 py-8 bg-[#F8FAFA]">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Un nuovo paradigma per il benessere
        </h2>
        <div className="space-y-4 text-[#2F3F4C] leading-relaxed">
          <p>
            La nutrizione di precisione non è una moda passeggera, ma l'evoluzione naturale della scienza nutrizionale. Stiamo passando da un approccio "taglia unica" a uno veramente personalizzato, basato sulla comprensione profonda della biologia individuale<CitationLink number={7} />.
          </p>
          <FigureCaption number={7} source="Fonte: Hollis, 2020, Journal of Personalized Medicine">
            <img 
              src={womanWellness} 
              alt="Donna in uno stato di benessere generale" 
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>
          <p>
            Non si tratta di genetica deterministica - i tuoi geni non sono il tuo destino. Ma conoscerli ti dà informazioni preziose per fare scelte più informate e ottimizzare il tuo benessere.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="mb-12 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#0A121A] mb-6">
          Vuoi capire come funziona davvero il tuo corpo?
        </h2>
        <p className="text-lg text-[#2F3F4C] mb-8 max-w-2xl mx-auto">
          Il test del DNA Holifya analizza oltre 2000 varianti genetiche per offrirti un quadro completo del tuo profilo metabolico, nutrizionale e di benessere.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-[#2F3F4C]">Risultati in 15 giorni</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-[#2F3F4C]">Laboratori certificati CE-IVD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-[#2F3F4C]">Privacy garantita</span>
          </div>
        </div>
        <Button 
          onClick={() => window.open('https://holifya.com/cart/43782964445448:1', '_blank')}
          className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white font-semibold text-[13px] px-8 py-3"
          style={{ width: '320px' }}
        >
          Ordina il tuo test DNA
        </Button>
      </section>

      {/* Footer - Bibliography */}
      <footer className="mt-16 pt-8 border-t border-[#EAEAEA]">
        <h3 className="text-xl font-bold text-[#0A121A] mb-6">Bibliografia</h3>
        <ol className="space-y-4 text-sm text-[#2F3F4C]">
          <li id="citation-1" className="transition-colors duration-500">
            <span className="font-semibold">[1]</span> Berry, S. E., et al. (2020). "Human postprandial responses to food and potential for precision nutrition." <em>Nature Medicine</em>, 26(6), 964-973. DOI: 10.1038/s41591-020-0934-0
          </li>
          <li id="citation-2" className="transition-colors duration-500">
            <span className="font-semibold">[2]</span> Ordovas, J. M., et al. (2018). "Personalised nutrition and health." <em>BMJ</em>, 361, bmj.k2173. DOI: 10.1136/bmj.k2173
          </li>
          <li id="citation-3" className="transition-colors duration-500">
            <span className="font-semibold">[3]</span> Ferguson, L. R., et al. (2016). "Guide and Position of the International Society of Nutrigenetics/Nutrigenomics on Personalised Nutrition." <em>Journal of Nutrigenetics and Nutrigenomics</em>, 9(1), 12-27. DOI: 10.1159/000446347
          </li>
          <li id="citation-4" className="transition-colors duration-500">
            <span className="font-semibold">[4]</span> Zeevi, D., et al. (2015). "Personalized Nutrition by Prediction of Glycemic Responses." <em>Cell</em>, 163(5), 1079-1094. DOI: 10.1016/j.cell.2015.11.001
          </li>
          <li id="citation-5" className="transition-colors duration-500">
            <span className="font-semibold">[5]</span> Dashti, H. S., et al. (2017). "Genetic determinants of weight loss during lifestyle intervention in adults with obesity." <em>International Journal of Obesity</em>, 41(4), 1275-1284. DOI: 10.1038/ijo.2017.89
          </li>
          <li id="citation-6" className="transition-colors duration-500">
            <span className="font-semibold">[6]</span> Nielsen, D. E., & El-Sohemy, A. (2014). "Disclosure of genetic information and change in dietary intake: a randomised controlled trial." <em>PLoS One</em>, 9(11), e112665. DOI: 10.1371/journal.pone.0112665
          </li>
          <li id="citation-7" className="transition-colors duration-500">
            <span className="font-semibold">[7]</span> Hollis, J. H. (2020). "The Effect of Personalized Nutrition Advice on Food Choice." <em>Nutrients</em>, 12(9), 2741. DOI: 10.3390/nu12092741
          </li>
        </ol>

        <div className="mt-8 pt-6 border-t border-[#EAEAEA]">
          <p className="text-xs text-[#768289] italic leading-relaxed">
            <strong>Disclaimer:</strong> Questo articolo ha scopo puramente informativo e divulgativo. Le informazioni contenute non sostituiscono il parere di un medico o di un professionista della salute qualificato. Prima di apportare modifiche significative alla tua alimentazione o stile di vita, consulta sempre un professionista sanitario.
          </p>
        </div>
      </footer>
    </div>
  );
};

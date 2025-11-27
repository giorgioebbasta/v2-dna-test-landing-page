import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FigureCaption } from './FigureCaption';
import { Blockquote } from './Blockquote';
import { KeyFindingBox } from './KeyFindingBox';

export const ArticleContentMigliorareSport = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      const offset = window.innerWidth >= 1024 ? 120 : 96;
      const elementPosition = ctaSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="intro" className="bg-white px-4 md:px-8 pt-12 md:pt-16 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <Badge className="text-[#E8FFC9] text-sm font-medium mb-4 bg-[#0b4650] py-[6px] px-[14px]">
            Genetica e Performance
          </Badge>
          
          <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0A121A] leading-tight mb-6">
            Perché ti alleni ma i risultati non arrivano?
          </h1>
          
          <h2 className="text-[18px] md:text-[22px] text-[#2F3F4C] leading-relaxed mb-8">
            La risposta potrebbe essere scritta nei tuoi geni. Scopri come la genetica influenza forza, resistenza, recupero e prestazioni sportive.
          </h2>

          <FigureCaption number={1} source="Confronto tra due atleti con diversa risposta genetica all'allenamento di forza">
            <img 
              src="/lovable-uploads/performance-genetics.png" 
              alt="Confronto genetico performance atletica"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <div className="my-8" onClick={scrollToCTA}>
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
              fontSize: "15px",
              width: "320px"
            }}>
              Scopri il tuo profilo genetico sportivo
            </Button>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Ti alleni con costanza, segui programmi rigorosi, ma i progressi sembrano sempre più lenti di quanto vorresti. Magari vedi persone che con meno sforzo ottengono risultati migliori, o ti chiedi perché il tuo recupero sia così difficile mentre altri sembrano sempre pronti per la prossima sessione.
            </p>
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              La verità è che <strong>non esiste un protocollo di allenamento universale</strong>. Il tuo corpo ha una firma genetica unica che determina come risponde all'esercizio, quanto velocemente recupera, quali energie utilizza e come costruisce massa muscolare.
            </p>
            <p className="text-[#2F3F4C] leading-relaxed">
              In questo articolo scoprirai come la scienza della genetica sportiva può aiutarti a capire il tuo corpo e a ottimizzare i risultati, senza sprecare tempo in protocolli che non funzionano per te.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="bg-[#F8FAFA] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            Il mito del "più ti alleni, meglio è"
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Per decenni, l'approccio dominante nello sport è stato semplice: più volume di allenamento equivale a più risultati. Ma la ricerca moderna ha dimostrato che questa equazione è profondamente sbagliata per molte persone.
            </p>
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Alcuni atleti prosperano con allenamenti ad alto volume, mentre altri entrano rapidamente in uno stato di <strong>sovrallenamento cronico</strong>. La differenza non è solo nella mentalità o nella preparazione, ma nella risposta biologica individuale allo stress dell'esercizio.
            </p>
          </div>

          <FigureCaption number={2} source="Distribuzione della risposta all'allenamento nella popolazione generale">
            <img 
              src="/lovable-uploads/genetica-performance.png" 
              alt="Variabilità genetica nella risposta all'allenamento"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-[#2F3F4C] leading-relaxed">
              Studi recenti hanno identificato oltre <strong>30 varianti genetiche</strong> che influenzano direttamente la capacità di adattamento all'allenamento, il metabolismo energetico durante lo sforzo e il tempo di recupero necessario tra le sessioni.
            </p>
          </div>
        </div>
      </section>

      {/* CTA after Section 2 */}
      <div className="bg-[#F8FAFA] px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div onClick={scrollToCTA} className="inline-block w-full md:w-auto cursor-pointer">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
              fontSize: "15px",
              width: "320px"
            }}>
              Analizza i tuoi geni dello sport
            </Button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <section id="section-3" className="bg-white px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            Oltre la forza di volontà: la scienza della performance
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Quando parliamo di prestazioni sportive, tendiamo a concentrarci su fattori come la motivazione, la disciplina e la tecnica. Ma sotto la superficie, il tuo corpo segue istruzioni scritte nel DNA che determinano:
            </p>
            <ul className="text-[#2F3F4C] leading-relaxed mb-4 space-y-2">
              <li><strong>Tipo di fibre muscolari dominanti</strong> (velocità vs resistenza)</li>
              <li><strong>Capacità di utilizzo dell'ossigeno</strong> (VO2 max genetico)</li>
              <li><strong>Efficienza nella sintesi proteica</strong> (crescita muscolare)</li>
              <li><strong>Metabolismo dei substrati energetici</strong> (carboidrati vs grassi)</li>
              <li><strong>Risposta infiammatoria post-esercizio</strong> (recupero e dolore muscolare)</li>
            </ul>
          </div>

          <FigureCaption number={3} source="Sistemi energetici e fonti di energia durante l'esercizio fisico">
            <img 
              src="/lovable-uploads/energy-sources-training.png" 
              alt="Metabolismo energetico durante l'allenamento"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <Blockquote source="Dr. Claude Bouchard, Pennington Biomedical Research Center">
            La risposta individuale all'allenamento è determinata per circa il 50% dalla genetica. Due persone che seguono lo stesso programma possono avere miglioramenti che differiscono fino a 10 volte.
          </Blockquote>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-[#2F3F4C] leading-relaxed">
              Questa non è una scusa per non allenarsi, ma una ragione in più per <strong>allenarsi in modo intelligente</strong>, rispettando le caratteristiche uniche del proprio corpo invece di copiare protocolli pensati per altri.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="bg-[#F8FAFA] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            Il ruolo della genetica nella risposta all'allenamento
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Alcuni dei geni più studiati in relazione alle prestazioni sportive includono:
            </p>
          </div>

          <KeyFindingBox icon="🧬" title="Geni Chiave della Performance">
            <ul className="space-y-3 text-[#2F3F4C]">
              <li><strong>ACTN3</strong>: Determina il tipo di fibre muscolari. Le varianti influenzano se sei più portato per sprint e potenza o per resistenza e endurance.</li>
              <li><strong>ACE</strong>: Regola la pressione sanguigna e l'efficienza cardiovascolare. Varianti specifiche sono associate a migliori prestazioni in sport di resistenza.</li>
              <li><strong>PPARA</strong>: Controlla il metabolismo dei grassi durante l'esercizio prolungato. Influenza l'efficienza energetica negli sport di lunga durata.</li>
              <li><strong>VEGF</strong>: Coinvolto nella formazione di nuovi vasi sanguigni. Determina la capacità di migliorare il VO2 max con l'allenamento.</li>
            </ul>
          </KeyFindingBox>

          <FigureCaption number={4} source="Confronto tra profili metabolici di atleti con diverse varianti genetiche">
            <img 
              src="/lovable-uploads/metabolic-profiles-comparison.png" 
              alt="Profili metabolici e genetica sportiva"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-[#2F3F4C] leading-relaxed">
              Conoscere queste informazioni ti permette di <strong>personalizzare il tipo di allenamento, l'intensità, la frequenza e il timing dei nutrienti</strong> in base a come il tuo corpo è programmato per rispondere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA after Section 4 */}
      <div className="bg-[#F8FAFA] px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div onClick={scrollToCTA} className="inline-block w-full md:w-auto cursor-pointer">
            <Button size="lg" className="bg-[#2F3F4C] hover:bg-[#1a2630] text-white px-6 md:px-8 py-4 md:py-6 transition-all duration-200" style={{
              fontSize: "15px",
              width: "320px"
            }}>
              Scopri i tuoi geni della performance
            </Button>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <section id="section-5" className="bg-white px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            Recupero: il segreto nascosto dei campioni
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Uno degli aspetti più sottovalutati della performance sportiva è la <strong>capacità di recupero</strong>. Non importa quanto ti alleni se il tuo corpo non ha il tempo e le risorse per adattarsi e ricostruire.
            </p>
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              La genetica influenza profondamente:
            </p>
            <ul className="text-[#2F3F4C] leading-relaxed mb-4 space-y-2">
              <li><strong>Velocità di riparazione muscolare</strong> dopo l'allenamento</li>
              <li><strong>Risposta infiammatoria</strong> e rischio di infortuni</li>
              <li><strong>Qualità del sonno</strong> e architettura delle fasi REM/profondo</li>
              <li><strong>Produzione di cortisolo</strong> e gestione dello stress</li>
            </ul>
          </div>

          <FigureCaption number={5} source="Correlazione tra varianti genetiche e tempi di recupero muscolare">
            <img 
              src="/lovable-uploads/performance-stress-comparison.png" 
              alt="Genetica e recupero muscolare"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <Blockquote source="Prof. Yannis Pitsiladis, University of Brighton">
            Gli atleti d'élite non sono solo quelli che si allenano di più, ma quelli che recuperano meglio. La genetica del recupero è altrettanto importante della genetica della performance.
          </Blockquote>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-[#2F3F4C] leading-relaxed">
              Ottimizzare il recupero in base al tuo profilo genetico può fare la differenza tra stagnazione e progresso costante, tra affaticamento cronico e picco di forma.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Symptoms/Signals */}
      <section id="section-6" className="bg-[#F8FAFA] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            Segnali che il tuo corpo ti sta mandando
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Il tuo corpo comunica costantemente attraverso segnali che spesso ignoriamo o interpretiamo male. Questi sintomi possono indicare un disallineamento tra il tuo allenamento e la tua biologia:
            </p>
          </div>

          <FigureCaption number={6} source="Tabella di correlazione tra sintomi comuni e marker metabolici negli atleti">
            <img 
              src="/lovable-uploads/symptom-metabolic-correlation-table.png" 
              alt="Sintomi e metabolismo sportivo"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <KeyFindingBox icon="⚠️" title="Segnali da Non Ignorare">
            <ul className="space-y-3 text-[#2F3F4C]">
              <li><strong>Plateau prolungati</strong>: Nessun miglioramento per settimane nonostante l'impegno costante</li>
              <li><strong>Affaticamento cronico</strong>: Sensazione di stanchezza persistente anche dopo giorni di riposo</li>
              <li><strong>Dolori muscolari eccessivi</strong>: DOMS che durano oltre 72 ore dopo ogni allenamento</li>
              <li><strong>Calo di motivazione</strong>: Perdita di entusiasmo inspiegabile verso l'attività fisica</li>
              <li><strong>Disturbi del sonno</strong>: Difficoltà ad addormentarsi o risvegli frequenti nonostante la stanchezza</li>
              <li><strong>Infortuni ricorrenti</strong>: Stessi problemi che si ripresentano ciclicamente</li>
            </ul>
          </KeyFindingBox>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-[#2F3F4C] leading-relaxed">
              Questi segnali non indicano mancanza di impegno, ma potrebbero essere il risultato di un <strong>programma di allenamento non allineato al tuo profilo genetico</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Precision Training */}
      <section id="section-7" className="bg-white px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            La nuova era: l'allenamento di precisione
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              L'allenamento di precisione rappresenta il futuro dello sport e del fitness: programmi personalizzati basati sul <strong>profilo genetico individuale</strong>, non su protocolli generici.
            </p>
            <p className="text-[#2F3F4C] leading-relaxed mb-4">
              Con un'analisi genetica sportiva puoi scoprire:
            </p>
          </div>

          <FigureCaption number={7} source="Aree di ottimizzazione della performance attraverso l'analisi genetica">
            <img 
              src="/lovable-uploads/wellness-icons-new.webp" 
              alt="Benefici dell'allenamento genetico personalizzato"
              className="w-full rounded-lg shadow-lg"
            />
          </FigureCaption>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="flex items-start gap-3 p-4 bg-[#F8FAFA] rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-[#0A121A] mb-1">Tipo di allenamento ottimale</h4>
                <p className="text-sm text-[#768289]">Forza, potenza, resistenza o sport misti</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F8FAFA] rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-[#0A121A] mb-1">Intensità e volume ideali</h4>
                <p className="text-sm text-[#768289]">Quanto e quanto spesso allenarti</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F8FAFA] rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-[#0A121A] mb-1">Strategie di recupero</h4>
                <p className="text-sm text-[#768289]">Riposo attivo, passivo, timing ottimale</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F8FAFA] rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-[#0A121A] mb-1">Nutrizione sportiva su misura</h4>
                <p className="text-sm text-[#768289]">Timing e composizione dei nutrienti</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F8FAFA] rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-[#0A121A] mb-1">Prevenzione infortuni</h4>
                <p className="text-sm text-[#768289]">Identificare vulnerabilità genetiche</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F8FAFA] rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-[#0A121A] mb-1">Supplementazione mirata</h4>
                <p className="text-sm text-[#768289]">Solo ciò che serve davvero al tuo corpo</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-[#2F3F4C] leading-relaxed">
              Non si tratta di trovare scuse o limitazioni, ma di <strong>lavorare con il tuo corpo invece che contro di esso</strong>, massimizzando i risultati e minimizzando il rischio di sovrallenamento e infortuni.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - Real Experiences */}
      <section id="esperienze" className="bg-[#F8FAFA] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0A121A] mb-6">
            Storie di trasformazione reale
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-[#2F3F4C] leading-relaxed mb-6 italic">
              Le testimonianze qui riportate rappresentano esperienze personali e non costituiscono prove scientifiche. I risultati possono variare da persona a persona.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-[#EAEAEA]">
              <p className="text-[#2F3F4C] leading-relaxed mb-4">
                "Mi allenavo 5 volte a settimana in palestra ma i risultati erano scarsi. Il test genetico ha mostrato che ho una variante del gene ACTN3 associata alla resistenza, non alla forza esplosiva. Ho cambiato approccio passando a circuiti ad alta intensità e sport funzionali: in 3 mesi ho visto più cambiamenti che nei 2 anni precedenti."
              </p>
              <p className="text-sm font-semibold text-[#0A121A]">— Marco, 34 anni, crossfitter</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#EAEAEA]">
              <p className="text-[#2F3F4C] leading-relaxed mb-4">
                "Correvo maratone ma soffrivo sempre di infortuni ricorrenti. L'analisi ha rivelato che il mio corpo ha difficoltà nel recupero e nella gestione dell'infiammazione. Ho integrato più giorni di riposo attivo, aumentato gli omega-3 e migliorato il sonno. Adesso corro di più con meno dolore."
              </p>
              <p className="text-sm font-semibold text-[#0A121A]">— Elena, 29 anni, runner</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#EAEAEA]">
              <p className="text-[#2F3F4C] leading-relaxed mb-4">
                "Pensavo di essere 'pigro' perché faticavo a recuperare tra le sessioni. Il test ha mostrato varianti nel gene ACE e VEGF che influenzano il mio VO2 max e la capacità cardiovascolare. Ho cambiato la programmazione, inserito più allenamenti aerobici di bassa intensità e migliorato la mia endurance senza il costante affaticamento."
              </p>
              <p className="text-sm font-semibold text-[#0A121A]">— Luca, 42 anni, ciclista amatoriale</p>
            </div>
          </div>

          <FigureCaption number={8} source="Confronto visivo: Prima e Dopo la consapevolezza genetica">
            <div className="bg-white p-8 rounded-lg border border-[#EAEAEA]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-[#0A121A] mb-4 text-center">Prima</h4>
                  <ul className="space-y-2 text-[#768289]">
                    <li>• Allenamenti generici copiati online</li>
                    <li>• Progressi lenti o inesistenti</li>
                    <li>• Affaticamento cronico</li>
                    <li>• Infortuni ricorrenti</li>
                    <li>• Frustrazione e demotivazione</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0A121A] mb-4 text-center">Dopo</h4>
                  <ul className="space-y-2 text-[#0A121A] font-semibold">
                    <li>• Protocollo personalizzato sul DNA</li>
                    <li>• Risultati visibili e misurabili</li>
                    <li>• Energia costante</li>
                    <li>• Recupero ottimale</li>
                    <li>• Motivazione e fiducia</li>
                  </ul>
                </div>
              </div>
            </div>
          </FigureCaption>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="bg-gradient-to-b from-[#F8FAFA] to-white px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0A121A] mb-6">
            Scopri il tuo potenziale atletico nascosto
          </h2>
          
          <p className="text-[18px] md:text-[22px] text-[#2F3F4C] leading-relaxed mb-8 max-w-3xl mx-auto">
            Smetti di allenarti al buio. Ottieni un'analisi genetica completa e un piano di allenamento personalizzato basato sul tuo DNA.
          </p>

          <div className="mb-10">
            <Button size="lg" className="bg-[#01649F] hover:bg-[#014e7f] text-[#0A121A] px-8 py-6 transition-all duration-200" style={{
              fontSize: "15px",
              width: "320px"
            }}>
              Analizza il tuo DNA sportivo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-[#EAEAEA]">
              <span className="text-3xl">🏆</span>
              <p className="text-sm font-semibold text-[#0A121A]">CE-IVD</p>
              <p className="text-xs text-[#768289]">Certificato</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-[#EAEAEA]">
              <span className="text-3xl">✓</span>
              <p className="text-sm font-semibold text-[#0A121A]">ISO 9001</p>
              <p className="text-xs text-[#768289]">Qualità</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-[#EAEAEA]">
              <span className="text-3xl">🔒</span>
              <p className="text-sm font-semibold text-[#0A121A]">GDPR</p>
              <p className="text-xs text-[#768289]">Privacy</p>
            </div>
          </div>

          <p className="text-sm text-[#768289] italic">
            Oltre 3.000 atleti hanno già scoperto il loro profilo genetico sportivo
          </p>
        </div>
      </section>

      {/* Footer - Sources and Disclaimer */}
      <footer className="bg-[#F8FAFA] px-4 md:px-8 py-12 border-t border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-[#0A121A] mb-4">Bibliografia e Fonti Scientifiche</h3>
          <ol className="text-sm text-[#768289] space-y-2 mb-8">
            <li>Bouchard, C., et al. (2011). "Genomic predictors of the maximal O₂ uptake response to standardized exercise training programs." <em>Journal of Applied Physiology</em>, 110(5), 1160-1170.</li>
            <li>Yang, N., et al. (2003). "ACTN3 genotype is associated with human elite athletic performance." <em>American Journal of Human Genetics</em>, 73(3), 627-631.</li>
            <li>Pitsiladis, Y., et al. (2013). "Genomics of elite sporting performance: what little we know and necessary advances." <em>British Journal of Sports Medicine</em>, 47(9), 550-555.</li>
            <li>Pescatello, L.S., et al. (2006). "Highlights from the functional single nucleotide polymorphisms associated with human muscle size and strength or FAMuSS study." <em>BioMed Research International</em>, 2006, Article ID 95186.</li>
            <li>Ahmetov, I.I., & Fedotovskaya, O.N. (2015). "Current progress in sports genomics." <em>Advances in Clinical Chemistry</em>, 70, 247-314.</li>
          </ol>

          <div className="border-t border-[#EAEAEA] pt-6">
            <p className="text-xs text-[#768289] leading-relaxed">
              <strong>Disclaimer:</strong> Questo articolo ha scopo puramente informativo e divulgativo. Le informazioni contenute non sostituiscono il parere di un medico, nutrizionista o preparatore atletico qualificato. Prima di apportare modifiche significative al tuo programma di allenamento o alla tua dieta, consulta sempre un professionista sanitario. Le testimonianze riportate rappresentano esperienze individuali e non garantiscono risultati specifici. La genetica è solo uno dei fattori che influenzano le prestazioni sportive.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

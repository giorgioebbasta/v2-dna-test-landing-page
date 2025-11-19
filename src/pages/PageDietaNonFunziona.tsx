import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHelmet from "@/components/seo/SEOHelmet";

const PageDietaNonFunziona = () => {
  return (
    <>
      <SEOHelmet
        title="Perché la Tua Dieta Non Funziona | Holifya"
        description="Scopri i motivi scientifici per cui la tua dieta non funziona e come il DNA può aiutarti a perdere peso definitivamente."
        canonical="https://test-completo-del-dna.holifya.com/dieta-non-funziona"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* 1. HERO SECTION */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#E8FFC9] to-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* 1.1 H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h1>
            
            {/* 1.2 H2 */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-lg px-8 py-6 gtm_addtocart"
              onClick={() => window.open("https://holifya.com/cart/43782964445448:1", "_blank", "noopener,noreferrer")}
            >
              Scopri la Soluzione
            </Button>
          </div>
        </section>

        {/* 2. TEXT SECTION 1 */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 2.1 TITLE 1 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            {/* 2.2 IMAGE 1 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-1.webp" 
                alt="Section 1 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* 3. TEXT SECTION 2 */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 3.1 TITLE 2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Consectetur Adipiscing Elit
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            {/* 3.2 IMAGE 2 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-2.webp" 
                alt="Section 2 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </section>

        {/* 4. TEXT SECTION 3 */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 4.1 TITLE 3 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Sed Do Eiusmod Tempor
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            
            {/* 4.2 IMAGE 3 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-3.webp" 
                alt="Section 3 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
          </div>
        </section>

        {/* 5. TEXT SECTION 4 */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 5.1 TITLE 4 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Incididunt Ut Labore
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            
            {/* 5.2 IMAGE 4 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1-4.webp" 
                alt="Section 4 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </section>

        {/* 6. TEXT SECTION 5 + CTA */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 6.1 TITLE 5 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Et Dolore Magna Aliqua
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
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
            <div className="my-8 p-8 bg-gradient-to-b from-[#E8FFC9] to-[#d4f5b1] rounded-lg shadow-lg space-y-4">
              {/* 6.3.1 CTA TITLE */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B4650]">
                Lorem Ipsum Dolor Sit Amet
              </h3>
              
              {/* 6.3.2 CTA BUTTON */}
              <Button 
                size="lg"
                className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-lg px-8 py-6 gtm_addtocart w-full md:w-auto"
                onClick={() => window.open("https://holifya.com/cart/43782964445448:1", "_blank", "noopener,noreferrer")}
              >
                Ordina Ora
              </Button>
              
              {/* 6.3.3 CTA SUPPORTING TEXT */}
              <p className="text-sm md:text-base text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis.
              </p>
            </div>
          </div>
        </section>

        {/* 7. TEXT SECTION 6 */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 7.1 TITLE 6 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Ut Enim Ad Minim Veniam
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
            </p>
            
            {/* 7.2 IMAGE 6 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/group-41.webp" 
                alt="Section 6 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>
        </section>

        {/* 8. TEXT SECTION 7 */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 8.1 TITLE 7 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Quis Nostrud Exercitation
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
            
            {/* 8.2 IMAGE 7 */}
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/group-45.webp" 
                alt="Section 7 placeholder" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#E8FFC9] to-[#d4f5b1]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* 9.1 FINAL CTA SECTION - TITLE */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4650]">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h2>
            
            {/* 9.2 FINAL CTA SECTION - TEXT */}
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.
            </p>
            
            {/* 9.3 FINAL CTA SECTION - CTA */}
            <Button 
              size="lg"
              className="bg-[#0B4650] hover:bg-[#0d6875] text-[#E8FFC9] text-xl px-12 py-8 gtm_addtocart"
              onClick={() => window.open("https://holifya.com/cart/43782964445448:1", "_blank", "noopener,noreferrer")}
            >
              Ordina il Tuo Test del DNA
            </Button>
            
            {/* 9.4 FINAL CTA SECTION - 3 BADGES */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Badge className="bg-white text-[#0B4650] px-4 py-2 text-sm font-medium shadow-md">
                CE-IVD / ISO 9001
              </Badge>
              <Badge className="bg-white text-[#0B4650] px-4 py-2 text-sm font-medium shadow-md">
                GDPR Compliant
              </Badge>
              <Badge className="bg-white text-[#0B4650] px-4 py-2 text-sm font-medium shadow-md">
                3,000+ Clienti
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
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Journal of Medical Research, 2023.</li>
                <li>Sed do eiusmod tempor incididunt ut labore. International Science Review, 2022.</li>
                <li>Ut enim ad minim veniam quis nostrud. European Health Studies, 2023.</li>
                <li>Duis aute irure dolor in reprehenderit. American Journal of Genetics, 2021.</li>
                <li>Excepteur sint occaecat cupidatat non proident. Nature Scientific Reports, 2023.</li>
              </ol>
            </div>
            
            {/* 10.2 LEGAL DISCLAIMER */}
            <div className="space-y-4 pt-6 border-t border-slate-300">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Disclaimer Legale
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageDietaNonFunziona;
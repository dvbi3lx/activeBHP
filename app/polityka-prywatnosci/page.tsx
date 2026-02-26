import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'Polityka Prywatności',
  description: 'Polityka prywatności ActiveBHP - dowiedz się, jak przetwarzamy i chronimy Twoje dane osobowe.',
  path: '/polityka-prywatnosci',
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-32 overflow-hidden">
        <AnimatedSection variant="fade-up" delay={0.1} className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Dokument prawny</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
            Polityka <span className="text-primary">Prywatności</span>
          </h1>
          <div className="h-1 w-24 bg-primary mb-8"></div>
          <p className="text-slate-400 text-lg">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
        </AnimatedSection>

        <div className="prose prose-invert prose-lg max-w-none">
          <AnimatedSection variant="fade-up" delay={0.2}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">1. Administrator danych</h2>
              <p className="text-slate-300 leading-relaxed">
                Administratorem Twoich danych osobowych jest ActiveBHP z siedzibą w Łodzi (91-040),
                ul. Powstańców Wielkopolskich 12/lok 28. Możesz skontaktować się z nami pod adresem e-mail: activebhp@activebhp.pl
                lub telefonicznie: +48 605 150 608.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.3}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">2. Jakie dane zbieramy</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                W ramach świadczonych usług możemy zbierać następujące dane osobowe:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Nazwa firmy i NIP (w przypadku współpracy B2B)</li>
                <li>Adres korespondencyjny</li>
                <li>Dane dotyczące korzystania z naszej strony internetowej (pliki cookies)</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.4}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">3. Cel przetwarzania danych</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Twoje dane osobowe przetwarzamy w następujących celach:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Realizacja umów o świadczenie usług BHP, PPOŻ i szkoleń</li>
                <li>Kontakt w sprawie zapytań ofertowych</li>
                <li>Wystawianie faktur i prowadzenie dokumentacji księgowej</li>
                <li>Marketing bezpośredni naszych usług (za Twoją zgodą)</li>
                <li>Dochodzenie roszczeń i obrona przed roszczeniami</li>
                <li>Analiza statystyk ruchu na stronie</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.5}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">4. Podstawa prawna</h2>
              <p className="text-slate-300 leading-relaxed">
                Przetwarzanie danych odbywa się na podstawie art. 6 ust. 1 RODO:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
                <li>lit. b) - wykonanie umowy</li>
                <li>lit. a) - zgoda (w przypadku marketingu)</li>
                <li>lit. c) - wypełnienie obowiązków prawnych (np. podatkowych)</li>
                <li>lit. f) - prawnie uzasadniony interes administratora</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.6}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">5. Udostępnianie danych</h2>
              <p className="text-slate-300 leading-relaxed">
                Twoje dane mogą być udostępniane następującym podmiotom:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
                <li>Dostawcy usług IT i hostingu</li>
                <li>Biuro rachunkowe</li>
                <li>Organy państwowe (na podstawie przepisów prawa)</li>
                <li>Podmioty świadczące usługi kurierskie</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.7}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">6. Twoje prawa</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Masz prawo do:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych („prawo do bycia zapomnianym")</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
                <li>Wniesienia skargi do Prezesa UODO</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.8}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">7. Okres przechowywania danych</h2>
              <p className="text-slate-300 leading-relaxed">
                Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane,
                w tym dla celów wypełnienia wymogów prawnych (np. przechowywania dokumentacji podatkowej przez 5 lat).
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.9}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">8. Pliki cookies</h2>
              <p className="text-slate-300 leading-relaxed">
                Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania, analizy ruchu oraz
                personalizacji treści. Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={1.0}>
            <section className="bg-primary/10 border border-primary/20 p-8">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">9. Kontakt</h2>
              <p className="text-slate-300 leading-relaxed">
                W przypadku pytań dotyczących ochrony danych osobowych, skontaktuj się z nami:
              </p>
              <ul className="list-none text-slate-300 space-y-2 mt-4">
                <li><strong className="text-primary">E-mail:</strong> activebhp@activebhp.pl</li>
                <li><strong className="text-primary">Telefon:</strong> +48 605 150 608</li>
                <li><strong className="text-primary">Adres:</strong> Powstańców Wielkopolskich 12/lok 28, 91-040 Łódź</li>
              </ul>
            </section>
          </AnimatedSection>
        </div>
      </article>

      <Footer />
    </main>
  );
}

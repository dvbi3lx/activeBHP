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

        <div className="prose prose-invert max-w-none">
          {/* Section: Wstęp */}
          <AnimatedSection variant="fade-up" delay={0.2}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons-outlined text-primary text-3xl">sticky_note_2</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Wstęp</h2>
              </div>
              <p className="leading-relaxed text-lg text-slate-300 m-0">
                Polityka Prywatności określa warunki dotyczące użytkowania serwisu internetowego. Korzystając w dowolny sposób z niniejszego serwisu internetowego, jego użytkownik akceptuje warunki określone w Polityce Prywatności.
              </p>
            </section>
          </AnimatedSection>

          {/* Section: Kim Jesteśmy */}
          <AnimatedSection variant="fade-up" delay={0.3}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons-outlined text-primary text-3xl">business</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Kim jesteśmy</h2>
              </div>
              <p className="leading-relaxed text-lg text-slate-300 mb-8">
                Jesteśmy odpowiedzialnym partnerem w dziedzinie BHP. Nasza firma dba o to, by Twoje dane były zawsze bezpieczne i przetwarzane zgodnie z prawem.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-background-dark/50 p-6 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Adres Firmy</span>
                  <p className="text-white font-medium m-0">ul. Powstańców Wielkopolskich 12/lok 28<br/>91-040 Łódź</p>
                </div>
                <div className="bg-background-dark/50 p-6 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Strona WWW</span>
                  <a href="https://activebhp.pl" className="text-white font-medium hover:text-primary transition-colors no-underline m-0">https://activebhp.pl</a>
                </div>
                <div className="bg-background-dark/50 p-6 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Kontakt E-mail</span>
                  <a href="mailto:activebhp@activebhp.pl" className="text-white font-medium hover:text-primary transition-colors no-underline m-0">activebhp@activebhp.pl</a>
                </div>
                <div className="bg-background-dark/50 p-6 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Telefon</span>
                  <a href="tel:+48605150608" className="text-white font-medium hover:text-primary transition-colors no-underline m-0">+48 605 150 608</a>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Section: W Jakim Celu */}
          <AnimatedSection variant="fade-up" delay={0.4}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons-outlined text-primary text-3xl">track_changes</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">W jakim celu zbieramy dane</h2>
              </div>
              <div className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                <p className="m-0 mb-8">
                  Zbieramy i przechowujemy dane w celu właściwego wyświetlania treści strony, zapisania preferencji użytkownika, ale również analizy ruchu na stronie na podstawie prawnie uzasadnionego interesu administratora. Dane w postaci opcjonalnych plików cookies przetwarzane są na podstawie zgody użytkownika.
                </p>
                <div className="pl-6 border-l-4 border-primary/50 relative my-10 py-2">
                  <p className="m-0 italic text-slate-400">
                    "Dane mogą być przechowywane jeżeli jest to niezbędne w związku z prawnie uzasadnionym interesem administratora, jakim jest obrona przed roszczeniami oraz zabezpieczanie materiałów, które mogą być potraktowane przez organy ścigania jako łamiące prawo, a także w celu prawidłowej i płynnej obsługi strony internetowej."
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Section: Jakie dane osobiste zbieramy */}
          <AnimatedSection variant="fade-up" delay={0.5}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-icons-outlined text-primary text-3xl">data_object</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Jakie dane zbieramy i dlaczego</h2>
              </div>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-icons-outlined text-primary text-xl">cookie</span>
                    Ciasteczka (Cookies)
                  </h3>
                  <div className="text-slate-300 text-lg leading-relaxed">
                    <p className="m-0 mb-8">
                      Nasza witryna wykorzystuje pliki cookies (tzw. ciasteczka) do zapamiętywania kluczowych ustawień preferencji np. faktu zapoznania się z samym panelem o plikach cookies. Dzięki temu nie musisz za każdym razem pomijać powiadomień.
                    </p>
                    <div className="pl-6 border-l-4 border-primary/50 bg-background-dark/30 p-6 rounded-r-xl border-y border-r border-white/5 my-10">
                      <p className="m-0 italic text-slate-400">
                        "Wszelkie instalowane w Twojej przeglądarce ciasteczka mają charakter wyłącznie funkcjonalny i nie zbierają bezpośrednio Twoich wrażliwych danych osobowych. Po zaakceptowaniu komunikatu, utworzymy ciasteczko zgody (np. `cookie-consent`), które wygasa automatycznie po roku czasu."
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-icons-outlined text-primary text-xl">dataset_linked</span>
                    Osadzone treści z innych witryn
                  </h3>
                  <div className="text-slate-300 text-lg leading-relaxed">
                    <p className="m-0 mb-8">
                      Artykuły na tej witrynie mogą zawierać osadzone treści (np. filmy, obrazki map Google). Osadzone treści zachowują się analogicznie do tego, jakby użytkownik odwiedził bezpośrednio konkretną witrynę zewnętrzną.
                    </p>
                    <div className="pl-6 border-l-4 border-primary/50 bg-background-dark/30 p-6 rounded-r-xl border-y border-r border-white/5 my-10">
                      <p className="m-0 italic text-slate-400">
                        "Zewnętrzni dostawcy (np. serwery wideo) mogą zbierać informacje o Tobie, używać własnych ciasteczek do monitorowania wydajności osadzonego materiału, zgodnie z ich własną strategią prywatności."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Section: Jak długo przechowujemy dane */}
          <AnimatedSection variant="fade-up" delay={0.6}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons-outlined text-primary text-3xl">hourglass_empty</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Czas przechowywania</h2>
              </div>
              <div className="text-lg text-slate-300 leading-relaxed">
                <p className="m-0 mb-8">
                  Dane pozyskane z formularzy korespondencji e-mailowej są przetwarzane wyłącznie do czasu zakończenia obsługi Twojego zapytania ofertowego. Ciasteczka zapisywane w przeglądarce dla funkcjonalności witryny trwają tak długo, jak określa ich limit trwania (od 1 sesji do 365 dni), chyba że wyczyścisz je wcześniej ręcznie.
                </p>
                <div className="flex items-center gap-3 bg-primary/10 text-primary p-4 rounded-xl border border-primary/20 mt-10">
                  <span className="material-icons-outlined">info</span>
                  <p className="m-0 text-sm font-medium">Ciasteczka wykorzystywane do obsługi przeglądarki możesz usunąć w dowolnym momencie (zazwyczaj skrótem: SHIFT + Ctrl + Del).</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Section: Twoje prawa */}
          <AnimatedSection variant="fade-up" delay={0.7}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons-outlined text-primary text-3xl">admin_panel_settings</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Jakie masz prawa do danych</h2>
              </div>
              <p className="leading-relaxed text-lg text-slate-300 mb-8 max-w-3xl">
                Jeśli korzystasz z tej witryny i zostawiłeś swoje dane, posiadasz pełne prawo do zarządzania nimi według wszelkich standardów RODO.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 m-0">
                <li className="bg-background-dark p-4 rounded-xl border border-white/5 flex items-start gap-4 m-0">
                  <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                  <span className="text-slate-300 font-medium leading-snug">Dostarczenie pliku z wyeksportowanym kompletem Twoich danych</span>
                </li>
                <li className="bg-background-dark p-4 rounded-xl border border-white/5 flex items-start gap-4 m-0">
                  <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                  <span className="text-slate-300 font-medium leading-snug">Uzyskanie kopii wszystkich danych jakie o Tobie posiadamy</span>
                </li>
                <li className="bg-background-dark p-4 rounded-xl border border-white/5 flex items-start gap-4 m-0">
                  <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                  <span className="text-slate-300 font-medium leading-snug">Sprostowanie swoich danych, jeżeli są one nieprawidłowe</span>
                </li>
                <li className="bg-background-dark p-4 rounded-xl border border-white/5 flex items-start gap-4 m-0">
                  <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                  <span className="text-slate-300 font-medium leading-snug">Zażądanie usunięcia (prawo zapomnienia) całości danych</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-8 italic mb-0">
                * Nie dotyczy to żadnych danych, które jesteśmy zobligowani zachować ze względów administracyjnych, prawnych albo bezpieczeństwa. Masz prawo wniesienia skargi do UODO.
              </p>
            </section>
          </AnimatedSection>

          {/* Section: Przesył danych i Zgody */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <AnimatedSection variant="fade-up" delay={0.8} className="h-full">
              <section className="h-full bg-card-dark p-8 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-icons-outlined text-primary text-2xl">cloud_sync</span>
                  <h2 className="text-xl font-black uppercase text-white m-0">Gdzie przesyłamy dane</h2>
                </div>
                <p className="text-slate-300 leading-relaxed m-0">
                  Logi zapisywane są na serwerze wybranej firmy hostingowej <strong>(Vercel Inc.)</strong>, z którą Administrator podpisał stosowną umowę powierzenia przetwarzania danych osobowych. Nie są one jednak profilowane ani przekazywane do Państw Trzecich.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.9} className="h-full">
              <section className="h-full bg-card-dark p-8 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-icons-outlined text-primary text-2xl">verified_user</span>
                  <h2 className="text-xl font-black uppercase text-white m-0">Zgoda na ciasteczka</h2>
                </div>
                <p className="text-slate-300 leading-relaxed m-0">
                  Korzystając z serwisu wyrażasz zgodę na regulacje RODO. Podanie danych (adres IP, e-mail) do narzędzi analitycznych lub kontaktowych jest w pełni dobrowolne, ale niezbędne dla poprawnego wykonania wielu funkcji witryny.
                </p>
              </section>
            </AnimatedSection>
          </div>

          {/* Section: Analiza RODO i Treści */}
          <AnimatedSection variant="fade-up" delay={1.0}>
            <section className="mb-10 bg-card-dark p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons-outlined text-primary text-3xl">hub</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Narzędzia i treść z innych firm</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
                Niniejszy serwis internetowy może zawierać przyciski, narzędzia lub treści kierujące do usług zewnętrznych podmiotów (takich jak Google, Facebook czy YouTube).
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-background-dark p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-icons-outlined text-primary">public</span>
                    <h3 className="text-white font-bold m-0 text-lg">Plugin Facebook</h3>
                  </div>
                  <p className="text-slate-400 text-sm m-0 leading-relaxed">
                    (Facebook Ireland Limited) Plugin łączy użytkownika z profilem typu Fanpage na serwerze Facebook&apos;a. Pamiętaj, że w ten sposób Facebook zyskuje dostęp do numerów IP odwiedzających.
                  </p>
                </div>

                <div className="bg-background-dark p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-icons-outlined text-primary">analytics</span>
                    <h3 className="text-white font-bold m-0 text-lg">Google Analytics</h3>
                  </div>
                  <p className="text-slate-400 text-sm m-0 leading-relaxed">
                    (Google Ireland Limited) Mechanizm analizy usług sieciowych, który umożliwia firmom weryfikację ruchu wokół strony do celów czysto statystycznych.
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Section: Prawa autorskie */}
          <AnimatedSection variant="fade-up" delay={1.1}>
            <section className="bg-gradient-to-r from-background-dark via-card-dark to-background-dark border border-primary/20 p-8 md:p-10 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-icons-outlined text-primary text-3xl">copyright</span>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white m-0">Prawa autorskie</h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-0 max-w-4xl">
                  Zawartość serwisu internetowego, a także mechanizmy i oprogramowanie używane w serwisie internetowym są objęte ścisłą ochroną wynikającą z przepisów polskiego i międzynarodowego prawa autorskiego. Kopiowanie, odsprzedaż lub komercyjne powielanie witryny lub jakiejkolwiek jej ukrytej zawartości bez pisemnej zgody jest kategorycznie zabronione.
                </p>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </article>

      <Footer />
    </main>
  );
}

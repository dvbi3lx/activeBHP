import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'Regulamin Świadczenia Usług',
  description: 'Regulamin świadczenia usług ActiveBHP - zasady współpracy i warunki korzystania z naszych usług.',
  path: '/regulamin',
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-32 overflow-hidden">
        <AnimatedSection variant="fade-up" delay={0.1} className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Dokument prawny</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
            Regulamin <span className="text-primary">Usług</span>
          </h1>
          <div className="h-1 w-24 bg-primary mb-8"></div>
          <p className="text-slate-400 text-lg">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
        </AnimatedSection>

        <div className="prose prose-invert prose-lg max-w-none">
          <AnimatedSection variant="fade-up" delay={0.2}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§1. Postanowienia ogólne</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Niniejszy Regulamin określa zasady świadczenia usług przez ActiveBHP z siedzibą w Łodzi (91-040), ul. Powstańców Wielkopolskich 12/lok 28.</li>
                <li>Usługodawca świadczy usługi w zakresie BHP, ochrony przeciwpożarowej (PPOŻ), szkoleń oraz doradztwa z zakresu prawa pracy.</li>
                <li>Regulamin stanowi integralną część umów zawieranych z Klientami.</li>
                <li>Akceptacja Regulaminu jest dobrowolna, ale konieczna do zawarcia umowy o świadczenie usług.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.3}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§2. Definicje</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3">
                <li><strong className="text-primary">Usługodawca</strong> – ActiveBHP, ul. Powstańców Wielkopolskich 12/lok 28, 91-040 Łódź</li>
                <li><strong className="text-primary">Klient</strong> – osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej korzystająca z usług Usługodawcy</li>
                <li><strong className="text-primary">Usługi</strong> – wszystkie usługi oferowane przez Usługodawcę w zakresie BHP, PPOŻ i szkoleń</li>
                <li><strong className="text-primary">Umowa</strong> – umowa o świadczenie usług zawarta między Usługodawcę a Klientem</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.4}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§3. Zakres usług</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Usługodawca oferuje w szczególności:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Zewnętrzne usługi BHP</li>
                    <li>Szkolenia BHP wstępne i okresowe</li>
                    <li>Ocenę ryzyka zawodowego</li>
                    <li>Instrukcje bezpieczeństwa pożarowego</li>
                    <li>Dokumentację z zakresu prawa pracy</li>
                    <li>Pomiary i badania środowiska pracy</li>
                    <li>Usługi specjalistyczne (w tym prace podwodne)</li>
                  </ul>
                </li>
                <li>Szczegółowy zakres usług określa indywidualna umowa z Klientem.</li>
                <li>Usługodawca może świadczyć usługi stacjonarnie oraz zdalnie (online).</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.5}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§4. Zawarcie umowy</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Umowa zostaje zawarta w momencie akceptacji oferty Usługodawcy przez Klienta.</li>
                <li>Klient składa zamówienie poprzez:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Formularz kontaktowy na stronie internetowej</li>
                    <li>E-mail: activebhp@activebhp.pl</li>
                    <li>Telefon: +48 605 150 608</li>
                  </ul>
                </li>
                <li>Potwierdzenie przyjęcia zamówienia następuje w formie elektronicznej lub pisemnej.</li>
                <li>Umowa może być zawarta w formie elektronicznej lub pisemnej.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.6}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§5. Ceny i płatności</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Ceny usług są określane indywidualnie i zawarte w ofercie lub umowie.</li>
                <li>Wszystkie ceny są cenami netto (do ceny należy doliczyć obowiązujący podatek VAT).</li>
                <li>Płatność następuje przelewem bankowym na podstawie wystawionej faktury VAT.</li>
                <li>Termin płatności wynosi 14 dni od daty wystawienia faktury, o ile nie uzgodniono inaczej.</li>
                <li>W przypadku opóźnienia w płatności, Usługodawca ma prawo naliczyć odsetki ustawowe.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.7}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§6. Obowiązki stron</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Obowiązki Usługodawcy:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Świadczenie usług z należytą starannością i zgodnością z przepisami prawa</li>
                    <li>Zatrudnianie wykwalifikowanych specjalistów z odpowiednimi uprawnieniami</li>
                    <li>Terminowa realizacja umowy</li>
                    <li>Zachowanie poufności informacji otrzymanych od Klienta</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Obowiązki Klienta:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Terminowa płatność za usługi</li>
                    <li>Udostępnienie niezbędnych informacji i dokumentów</li>
                    <li>Zapewnienie dostępu do obiektów i stanowisk pracy</li>
                    <li>Współpraca w zakresie realizacji umowy</li>
                  </ul>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.8}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§7. Odpowiedzialność</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Usługodawca odpowiada za szkody wyrządzone Klientowi na zasadach ogólnych określonych w Kodeksie cywilnym.</li>
                <li>Usługodawca nie ponosi odpowiedzialności za szkody wynikłe z nieprzestrzegania przez Klienta zaleceń BHP.</li>
                <li>Odpowiedzialność Usługodawcy jest ograniczona do wysokości wynagrodzenia za konkretną usługę.</li>
                <li>Usługodawca jest ubezpieczony od odpowiedzialności cywilnej.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.9}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§8. Rozwiązanie umowy</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Umowa może zostać rozwiązana:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Za porozumieniem stron</li>
                    <li>Z zachowaniem 30-dniowego okresu wypowiedzenia</li>
                    <li>Ze skutkiem natychmiastowym w przypadku rażącego naruszenia postanowień umowy</li>
                  </ul>
                </li>
                <li>Wypowiedzenie wymaga formy pisemnej lub elektronicznej pod rygorem nieważności.</li>
                <li>Rozwiązanie umowy nie zwalnia z obowiązku zapłaty za usługi już wykonane.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={1.0}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§9. Reklamacje</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Klient ma prawo zgłosić reklamację w przypadku nieprawidłowego wykonania usługi.</li>
                <li>Reklamację należy zgłosić na adres: activebhp@activebhp.pl w terminie 14 dni od wykonania usługi.</li>
                <li>Reklamacja powinna zawierać opis problemu oraz oczekiwania Klienta.</li>
                <li>Usługodawca rozpatruje reklamację w ciągu 14 dni roboczych od jej otrzymania.</li>
                <li>Odpowiedź na reklamację jest przesyłana na adres e-mail podany przez Klienta.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={1.1}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§10. Ochrona danych osobowych</h2>
              <p className="text-slate-300 leading-relaxed">
                Zasady przetwarzania danych osobowych określa odrębna Polityka Prywatności dostępna na stronie internetowej
                Usługodawcy oraz w siedzibie firmy.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={1.2}>
            <section className="mb-12 bg-card-dark p-8 border border-white/10">
              <h2 className="text-2xl font-black uppercase text-primary mb-4">§11. Postanowienia końcowe</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-3">
                <li>Regulamin wchodzi w życie z dniem publikacji na stronie internetowej.</li>
                <li>Usługodawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie po 7 dniach od publikacji.</li>
                <li>W sprawach nieuregulowanych w Regulaminie zastosowanie mają przepisy Kodeksu cywilnego.</li>
                <li>Spory wynikłe z realizacji umowy będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.</li>
              </ol>
            </section>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={1.3}>
            <section className="bg-primary/10 border border-primary/20 p-8">
              <h2 className="text-2xl font-black uppercase text-primary mb-4"> Kontakt</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
              </p>
              <ul className="list-none text-slate-300 space-y-2">
                <li><strong className="text-primary">ActiveBHP</strong></li>
                <li>ul. Powstańców Wielkopolskich 12/lok 28</li>
                <li>91-040 Łódź</li>
                <li><strong className="text-primary">E-mail:</strong> activebhp@activebhp.pl</li>
                <li><strong className="text-primary">Telefon:</strong> +48 605 150 608</li>
              </ul>
            </section>
          </AnimatedSection>
        </div>
      </article>

      <Footer />
    </main>
  );
}

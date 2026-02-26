import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'Prawo Pracy i Dokumentacja BHP',
  description: 'Kompleksowa dokumentacja BHP: ocena ryzyka zawodowego, instrukcje stanowiskowe, regulaminy pracy, protokoły powypadkowe. Profesjonalne doradztwo w zakresie prawa pracy.',
  path: '/uslugi/prawo-pracy',
});

export default function LaborLawPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center industrial-grid border-b border-white/5 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="Prawo Pracy - ActiveBHP"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-background-dark/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-20 w-full">
          <div className="max-w-2xl">
            <AnimatedSection delay={0.1}>
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded text-center sm:text-left block sm:inline-block mx-auto sm:mx-0">Expert Consulting</span>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-8 sm:text-center lg:text-left drop-shadow-2xl">
                PRAWO <br /> <span className="text-primary">PRACY</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-10 border-l-4 border-primary pl-6 font-public-sans sm:text-center lg:text-left sm:border-l-0 lg:border-l-4 sm:pl-0 lg:pl-6 sm:mx-auto lg:mx-0 max-w-2xl">
                Zapewniamy pełną zgodność z Kodeksem Pracy oraz najwyższy poziom bezpieczeństwa dokumentacji kadrowej w Twojej firmie. Profesjonalne doradztwo, które minimalizuje ryzyko prawne.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="scale-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Link href="/kontakt" className="bg-primary hover:bg-white text-background-dark px-8 py-4 rounded font-black text-base uppercase tracking-widest transition-all flex items-center justify-center gap-3 group w-full sm:w-auto">
                  Rozpocznij Audyt
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link href="/kontakt" className="border border-white/20 hover:border-primary text-white px-8 py-4 rounded font-black text-base uppercase tracking-widest transition-all text-center w-full sm:w-auto">
                  Oferta dla firm
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection variant="fade-up" delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-white text-4xl font-black uppercase tracking-tight mb-4">Zakres Usług Kadrowych</h2>
              <div className="h-1.5 w-24 bg-primary"></div>
            </div>
            <p className="max-w-md text-slate-400 font-public-sans">Specjalistyczne wsparcie w obszarze prawa pracy, dopasowane do specyfiki Twojej branży i aktualnych wymogów prawnych.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawServices.map((service, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * index} className="h-full">
                <div className="group bg-card-dark p-8 rounded border border-white/5 hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col">
                  <div className="mb-6 inline-block text-primary">
                    <span className="material-symbols-outlined text-5xl">{service.icon}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-public-sans flex-grow">{service.description}</p>
                  <div className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                    Szczegóły <span className="material-symbols-outlined text-sm">add</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fade-right" delay={0.1}>
              <div className="border-l-[12px] border-primary pl-10">
                <h2 className="text-white text-3xl font-black uppercase tracking-tight mb-6">Dlaczego zgodność jest kluczowa?</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light font-public-sans">
                  Przepisy prawa pracy ulegają ciągłym i dynamicznym zmianom. Brak aktualnej wiedzy to nie tylko ryzyko kar finansowych, ale także narażenie reputacji pracodawcy.
                </p>
                <p className="text-slate-400 leading-relaxed font-public-sans">
                  Nasz zespół stale monitoruje nowelizacje Kodeksu Pracy i wyroki Sądu Najwyższego, aby Twoja firma zawsze działała zgodnie z aktualnymi wymogami. Odpowiednia dokumentacja to fundament bezpieczeństwa każdego przedsiębiorstwa.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fade-left" delay={0.3} className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative bg-[#2a2a14] border border-white/10 p-10 rounded-xl">
                <div className="flex gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">warning</span>
                  <h4 className="text-white text-xl font-black uppercase tracking-tight">Potencjalne Ryzyka</h4>
                </div>
                <ul className="space-y-4">
                  {risks.map((risk, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-400 font-public-sans">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="bg-primary py-16 overflow-hidden">
        <AnimatedSection variant="scale-up" delay={0.1} className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left text-black">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Zadbaj o zgodność kadrową</h2>
              <p className="text-black/80 text-lg font-bold uppercase tracking-widest">Umów się na profesjonalną konsultację online</p>
            </div>
            <Link href="/kontakt" className="w-full md:w-auto bg-background-dark hover:bg-black text-primary px-10 py-5 rounded-lg font-black text-lg uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">video_chat</span>
              Konsultacja Online
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}

const lawServices = [
  {
    title: "Audyty Dokumentacji Pracowniczej",
    description: "Weryfikacja akt osobowych i umów o pracę pod kątem pełnej zgodności z przepisami. Identyfikujemy i eliminujemy błędy przed kontrolą PIP.",
    icon: "manage_search"
  },
  {
    title: "Dokumentacja Kadrowa",
    description: "Kompleksowe wsparcie w prowadzeniu ewidencji pracowników, przygotowywaniu regulaminów pracy i wynagradzania oraz procedur wewnętrznych.",
    icon: "folder_shared"
  },
  {
    title: "Kodeks Pracy",
    description: "Eksperckie konsultacje i interpretacje aktualnych przepisów. Rozwiązujemy trudne przypadki związane z rozwiązaniem umów czy czasem pracy.",
    icon: "menu_book"
  },
  {
    title: "Szkolenia z Prawa Pracy",
    description: "Specjalistyczne warsztaty dla działów HR i kadry zarządzającej. Praktyczne podejście do zmian w ustawodawstwie i obowiązków pracodawcy.",
    icon: "co_present"
  }
];

const risks = [
  "Wysokie grzywny nakładane przez PIP za błędy w dokumentacji.",
  "Przegrane procesy sądowe z powództwa pracowników.",
  "Koszty związane z nieprawidłowym rozliczaniem czasu pracy."
];

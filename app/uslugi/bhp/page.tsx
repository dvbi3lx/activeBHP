import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'Usługi BHP - Kompleksowa Obsługa Bezpieczeństwa',
  description: 'Profesjonalne usługi BHP: audyty, nadzór, doradztwo, outsourcing służby BHP, szkolenia i pełna dokumentacja. Zapewniamy zgodność z przepisami i najwyższe standardy bezpieczeństwa.',
  path: '/uslugi/bhp',
});

export default function BhpServicesPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="Usługi BHP - ActiveBHP"
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
              <div className="flex items-start gap-4 mb-6">
                <div className="h-[1px] w-12 bg-primary mt-2"></div>
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Profesjonalne Rozwiązania</span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tighter uppercase drop-shadow-2xl">
                USŁUGI <span className="text-primary">BHP</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                Zapewniamy kompleksowe wsparcie w obszarze bezpieczeństwa i higieny pracy.
                Nasze rozwiązania gwarantują pełną zgodność z obowiązującymi przepisami prawa pracy i najwyższy standard ochrony Twoich pracowników.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Construction Supervision image section */}
      <section className="py-12 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fade-right">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Bezpieczeństwo w terenie</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-white">Nadzór <span className="text-primary">na budowie</span></h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-6">
                Odpowiadamy za bezpośredni nadzór nad bezpieczeństwem podczas realizacji wymagających projektów budowlanych. Zapewniamy kompleksową koordynację prac, weryfikację uprawnień podwykonawców oraz ścisłą kontrolę nad zadaniami z wykorzystaniem ciężkiego sprzętu.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fade-left" delay={0.2}>
              <img src="/walec-budowa.jpg" alt="Nadzór BHP na budowie - kontrola ciężkiego sprzętu" className="w-full h-80 lg:h-96 object-cover rounded-xl border border-white/10 shadow-2xl shadow-black/50" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card-dark/50 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {bhpMainServices.map((service, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={index * 0.1} className={`${service.fullWidth ? 'lg:col-span-2' : ''} h-full`}>
                <div className="bg-card-dark p-12 group hover:bg-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-start gap-8 flex-grow">
                    <div className="w-16 h-16 flex-shrink-0 bg-primary/10 group-hover:bg-black flex items-center justify-center transition-colors rounded">
                      <span className="material-symbols-outlined text-primary group-hover:text-primary text-4xl">{service.icon}</span>
                    </div>
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors">{service.title}</h3>
                      <p className="text-slate-400 group-hover:text-black/80 mb-8 font-medium transition-colors flex-grow">
                        {service.description}
                      </p>
                      {service.cta && (
                        <Link href={service.link} className="inline-flex items-center gap-2 text-primary group-hover:text-black font-black uppercase text-xs tracking-widest mt-auto">
                          {service.cta} <span className="material-symbols-outlined text-sm">north_east</span>
                        </Link>
                      )}
                      {!service.cta && <div className="w-12 h-1 bg-primary group-hover:bg-black transition-colors mt-auto"></div>}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-24 bg-card-dark/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-right" delay={0.1} className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Formalności pod kontrolą</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
              Dokumentacja <span className="text-outline">BHP</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {docs.map((doc, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={index * 0.1} className="h-full">
                <div className="bg-background-dark p-8 border border-white/5 hover:border-primary/50 transition-colors h-full flex flex-col">
                  <span className="material-symbols-outlined text-primary mb-6 block text-3xl">{doc.icon}</span>
                  <h4 className="text-lg font-black mb-3 uppercase text-white">{doc.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow">{doc.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="scale-up" delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none text-center md:text-left">
              Zadbaj o pełną zgodność <br className="hidden md:block" /> z przepisami
            </h2>
            <Link href="/kontakt" className="bg-black text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-2xl flex-shrink-0">
              Zapytaj o ofertę
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const bhpMainServices = [
  {
    title: "Audyty i Kontrole",
    description: "Szczegółowe audyty stanu BHP oraz okresowe kontrole warunków pracy. Identyfikujemy nieprawidłowości i wdrażamy plany naprawcze.",
    icon: "bar_chart",
    link: "/kontakt"
  },
  {
    title: "BHP na budowie",
    description: "Specjalistyczny nadzór nad inwestycjami budowlanymi. Koordynacja bezpieczeństwa, kontrole podwykonawców i szkolenia stanowiskowe.",
    icon: "engineering",
    link: "/kontakt"
  },
  {
    title: "Doradztwo i Nadzór",
    description: "Bieżące konsultacje eksperckie i stały nadzór nad warunkami pracy. Jesteśmy Twoim wsparciem w relacjach z organami kontrolnymi (PIP, PIS).",
    icon: "verified_user",
    link: "/kontakt"
  },
  {
    title: "Outsourcing - Służba BHP",
    description: "Przejęcie obowiązków służby BHP w Twojej firmie. Optymalizacja kosztów przy jednoczesnym wzroście poziomu bezpieczeństwa.",
    icon: "group_work",
    link: "/kontakt"
  },
  {
    title: "Szkolenia BHP",
    description: "Szkolenia wstępne i okresowe dla wszystkich grup zawodowych. Nowoczesne metody przekazywania wiedzy, materiały dydaktyczne i imienne zaświadczenia.",
    icon: "school",
    link: "/szkolenia",
    cta: "Zobacz harmonogram",
    fullWidth: true
  }
];

const docs = [
  { title: "BIOZ", description: "Plan Bezpieczeństwa i Ochrony Zdrowia dla placu budowy.", icon: "description" },
  { title: "IBWR", description: "Instrukcja Bezpiecznego Wykonania Robót szczególnie niebezpiecznych.", icon: "assignment_turned_in" },
  { title: "Ocena Ryzyka", description: "Kompleksowa Ocena Ryzyka Zawodowego dla każdego stanowiska pracy.", icon: "warning" },
  { title: "Instrukcje BHP", description: "Opracowanie czytelnych instrukcji stanowiskowych i ogólnych.", icon: "menu_book" },
  { title: "Inne dokumenty", description: "Rejestry wypadków, protokoły powypadkowe i inne wymagane prawem pisma.", icon: "folder_shared" }
];

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'Usługi Specjalne - Zaawansowane Rozwiązania BHP',
  description: 'Specjalistyczne usługi BHP: koordynacja wielobranżowa, audyty międzynarodowe, systemy zarządzania bezpieczeństwem ISO 45001. Dedykowane rozwiązania dla dużych przedsiębiorstw.',
  path: '/uslugi/specjalne',
});

export default function SpecialServicesPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="Usługi Specjalne BHP - ActiveBHP"
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
              <div className="flex items-center justify-start sm:justify-center lg:justify-start gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary"></div>
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold text-center sm:text-left bg-background-dark/50 px-2 py-1 backdrop-blur-sm rounded-sm">Innowacje w bezpieczeństwie</span>
                <div className="h-[2px] w-10 bg-primary hidden sm:block lg:hidden"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tighter uppercase text-white sm:text-center lg:text-left drop-shadow-2xl">
                USŁUGI <span className="text-primary">SPECJALNE</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-slate-200 max-w-xl text-lg md:text-xl font-medium leading-relaxed sm:text-center lg:text-left sm:mx-auto lg:mx-0 drop-shadow-md">
                Dostarczamy niszowe rozwiązania z zakresu bezpieczeństwa oraz innowacyjne systemy zarządzania ryzykiem dla najbardziej wymagających gałęzi przemysłu.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Hot Works and Heights Image Section */}
      <section className="py-12 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fade-right">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Ekstremalne warunki</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-white">Prace na <span className="text-primary">Wysokości</span> i Gorące</h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-6">
                Oferujemy bezpośredni nadzór nad pracami spawalniczymi, szlifierskimi oraz zadaniami realizowanymi na dużych wysokościach, w tym na podnośnikach. Dbamy o rygorystyczne przestrzeganie stref niebezpiecznych i zabezpieczanie sprzętu.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fade-left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/prace-wysokosciowe.jpg" alt="Prace na wysokości - szlifowanie z podnośnika" className="w-full h-64 sm:h-80 object-cover rounded-xl border border-white/10 shadow-2xl shadow-black/50" />
                <img src="/szlifowanie.jpg" alt="Nadzór nad pracami spawalniczymi i gorącymi" className="w-full h-64 sm:h-80 object-cover rounded-xl border border-white/10 shadow-2xl shadow-black/50 mt-8" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Special Services Grid */}
      <section className="py-24 bg-card-dark/50 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {specialServices.map((service, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * index} className="h-full">
                <div className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary group-hover:bg-black flex items-center justify-center mb-8 transition-colors">
                    <span className="material-symbols-outlined text-black group-hover:text-primary text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors leading-tight text-white">{service.title}</h3>
                  <p className="text-slate-400 group-hover:text-black/70 mb-8 font-medium transition-colors flex-grow">
                    {service.description}
                  </p>
                  <Link href="/kontakt" className="inline-flex items-center gap-2 text-primary group-hover:text-black font-bold uppercase text-xs tracking-widest transition-colors mt-auto">
                    {service.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Underwater Section */}
      <section className="py-24 relative overflow-hidden bg-card-dark/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fade-up" delay={0.1} className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Specjalizacja Głęboka</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-white">
              BHP – PRACE <span className="text-primary">PODWODNE</span>
            </h2>
            <div className="w-24 h-1 bg-primary mt-6"></div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {underwaterItems.map((item, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * index} className="h-full">
                <div className="bg-card-dark border border-white/10 border-l-4 border-l-primary p-8 hover:border-primary/50 transition-colors h-full">
                  <h4 className="text-primary font-black uppercase text-sm tracking-widest mb-4 leading-tight">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary overflow-hidden">
        <AnimatedSection variant="scale-up" delay={0.1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left text-black">
              <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
                Potrzebujesz unikalnego rozwiązania?
              </h2>
              <p className="text-black/80 font-bold uppercase tracking-wide mt-2">Dostosujemy nasze systemy do specyfiki Twojego zakładu.</p>
            </div>
            <Link href="/kontakt" className="bg-black text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap inline-block text-center w-full md:w-auto">
              Skontaktuj się z ekspertem
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}

const specialServices = [
  {
    title: "ACTIVE SYSTEM",
    description: "Autorski, zintegrowany system zarządzania bezpieczeństwem, optymalizujący procesy kontrolne i raportowanie w czasie rzeczywistym.",
    icon: "hub",
    cta: "Dowiedz się więcej"
  },
  {
    title: "SYSTEM LOTO",
    description: "Lockout/Tagout – kompleksowe wdrażanie systemów blokowania i oznaczania energii niebezpiecznych dla parków maszynowych.",
    icon: "lock",
    cta: "Specyfikacja"
  },
  {
    title: "ZSPW",
    description: "Zarządzanie Systemem Pracy i Wykonawstwa. Precyzyjna kontrola nad firmami zewnętrznymi i podwykonawcami na terenie zakładu.",
    icon: "assignment_turned_in",
    cta: "Wdrożenie"
  },
  {
    title: "DOFINANSOWANIE ZUS",
    description: "Pomoc w pozyskiwaniu bezzwrotnych dotacji z ZUS na poprawę warunków bezpieczeństwa i higieny pracy w Twojej firmie.",
    icon: "shield_moon",
    cta: "Jak uzyskać?"
  }
];

const underwaterItems = [
  { title: "Audyty BHP prac podwodnych", description: "Weryfikacja sprzętu, procedur zanurzeniowych oraz uprawnień personelu technicznego." },
  { title: "Doradztwo i Nadzór", description: "Nadzór specjalistyczny nad skomplikowanymi operacjami hydrotechnicznymi." },
  { title: "Ocena ryzyka dla nurków", description: "Profesjonalna analiza zagrożeń specyficznych dla środowiska wodnego i hiperbarycznego." },
  { title: "Szkolenia prac podwodnych", description: "Praktyczne szkolenia z zakresu bezpiecznego wykonywania prac pod lustrem wody." }
];

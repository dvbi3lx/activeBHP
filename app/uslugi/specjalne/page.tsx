import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

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
      <header className="relative pt-40 pb-24 hero-gradient overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Innowacje w bezpieczeństwie</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter uppercase text-white">
            USŁUGI <span className="text-primary">SPECJALNE</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
            Dostarczamy niszowe rozwiązania z zakresu bezpieczeństwa oraz innowacyjne systemy zarządzania ryzykiem dla najbardziej wymagających gałęzi przemysłu.
          </p>
        </div>
      </header>

      {/* Special Services Grid */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 bg-primary group-hover:bg-black flex items-center justify-center mb-8 transition-colors">
                  <span className="material-symbols-outlined text-black group-hover:text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors leading-tight text-white">{service.title}</h3>
                <p className="text-slate-400 group-hover:text-black/70 mb-8 font-medium transition-colors">
                  {service.description}
                </p>
                <Link href="/kontakt" className="inline-flex items-center gap-2 text-primary group-hover:text-black font-bold uppercase text-xs tracking-widest transition-colors">
                  {service.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Underwater Section */}
      <section className="py-24 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl6LPqc_EiKuWHqboVgVnGlk4bdLdxgz2Z-VN8ytPKwq2axrtrXlpGAT7qiVLPbEPOFBOfKICfdbrjOziegTW3hTXB9Sn4Shu3JPzYE6mbTUDBffdHeo6Vg5KavR4IgaPXDjV9omG_7rlvANxhocLO9Y3SsBh1lPXk2RXhfqRniceVd6f4oL0nBkhd-G4c-iTaNZ_UxcmW8s_TG147uOwXnXIE-U4pgTLCkbAom5WmQSrAXRh4qu4ni4c7Ygs6kfTBpBOCSKrY-YHg')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Specjalizacja Głęboka</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-white">
              BHP – PRACE <span className="text-primary">PODWODNE</span>
            </h2>
            <div className="w-24 h-1 bg-primary mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {underwaterItems.map((item, index) => (
              <div key={index} className="bg-background-dark/80 backdrop-blur-sm border-l-4 border-primary p-8 hover:bg-background-dark transition-colors">
                <h4 className="text-primary font-black uppercase text-sm tracking-widest mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left text-black">
              <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
                Potrzebujesz unikalnego rozwiązania?
              </h2>
              <p className="text-black/80 font-bold uppercase tracking-wide mt-2">Dostosujemy nasze systemy do specyfiki Twojego zakładu.</p>
            </div>
            <Link href="/kontakt" className="bg-black text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap inline-block text-center">
              Skontaktuj się z ekspertem
            </Link>
          </div>
        </div>
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

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: 'Profesjonalne Wsparcie BHP i PPOŻ',
  description: 'Kompleksowe usługi BHP i ochrony przeciwpożarowej. Audyty, szkolenia, dokumentacja i stały nadzór. Zapewniamy pełną zgodność z przepisami i najwyższe standardy bezpieczeństwa.',
  path: '/',
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center z-10">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0-start animate-fade-in-down">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">ActiveBHP Premium Safety</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase opacity-0-start animate-fade-in-up animation-delay-200">
            Profesjonalne Wsparcie <br/>
            <span className="text-primary">BHP i PPOŻ.</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium opacity-0-start animate-fade-in animation-delay-400">
            Ekspercka wiedza i nowoczesne podejście do bezpieczeństwa w Twojej firmie.
            Zapewniamy pełną zgodność z przepisami i najwyższe standardy ochrony przemysłowej.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-start animate-scale-in animation-delay-600">
            <Link
              href="/kontakt"
              className="bg-primary text-black px-10 py-5 font-black uppercase tracking-widest flex items-center gap-3 hover:bg-yellow-400 transition-all w-full sm:w-auto justify-center group"
            >
              Zapytaj o ofertę
              <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="/uslugi/bhp"
              className="border-2 border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full sm:w-auto justify-center"
            >
              Poznaj nasze usługi
            </Link>
          </div>

          <div className="mt-20 animate-bounce cursor-pointer flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">Scrolluj</span>
            <span className="material-icons-outlined text-primary">expand_more</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zakres Usług</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white">
                Bezpieczeństwo w <br/>
                <span className="text-outline">Twoim zasięgu.</span>
              </h2>
            </div>
            <div className="lg:max-w-sm border-l-4 border-primary pl-6 py-2">
              <p className="text-slate-400 font-medium">
                Kompleksowe rozwiązania dostosowane do specyfiki Twojej branży. Od dokumentacji po stały nadzór operacyjny w standardzie Premium.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <div key={index} className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500 hover-lift opacity-0-start animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-14 h-14 bg-primary group-hover:bg-black flex items-center justify-center mb-8 transition-colors">
                  <span className="material-icons-outlined text-black group-hover:text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors">{service.title}</h3>
                <p className="text-slate-400 group-hover:text-black/70 mb-8 font-medium transition-colors">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary group-hover:text-black font-bold uppercase text-xs tracking-widest transition-colors"
                >
                  {service.cta} <span className="material-icons-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            Twoje bezpieczeństwo <br/> to nasza misja.
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Zadbaj o standardy ActiveBHP w swojej firmie już dziś. Skontaktuj się z nami, aby otrzymać indywidualną wycenę dostosowaną do Twoich potrzeb.
          </p>
          <Link
            href="/kontakt"
            className="bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform duration-300 inline-block"
          >
            Bezpłatna konsultacja
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const services = [
  {
    title: "Nadzór BHP",
    description: "Stała opieka specjalisty, bieżąca kontrola warunków pracy oraz profesjonalne doradztwo techniczne.",
    icon: "engineering",
    link: "/uslugi/bhp",
    cta: "Sprawdź zakres"
  },
  {
    title: "Szkolenia",
    description: "Wstępne i okresowe szkolenia BHP prowadzone w sposób merytoryczny, nowoczesny i angażujący.",
    icon: "groups",
    link: "/szkolenia",
    cta: "Zapisz zespół"
  },
  {
    title: "PPOŻ",
    description: "Ochrona przeciwpożarowa, instrukcje bezpieczeństwa oraz profesjonalne przeglądy sprzętu gaśniczego.",
    icon: "fire_extinguisher",
    link: "/uslugi/ppoz",
    cta: "Pełna oferta"
  },
  {
    title: "Dokumentacja",
    description: "Opracowanie oceny ryzyka zawodowego, instrukcji stanowiskowych oraz protokołów powypadkowych.",
    icon: "description",
    link: "/uslugi/prawo-pracy",
    cta: "Zleć audyt"
  }
];

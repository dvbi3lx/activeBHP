import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: 'Pomiary i Badania UDT',
  description: 'Pomiary czynników szkodliwych, badania hałasu, oświetlenia, pyłów. Przeglądy UDT urządzeń technicznych. Certyfikowane pomiary i dokumentacja zgodna z normami.',
  path: '/uslugi/pomiary',
});

export default function MeasurementsPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div
            className="w-full h-full opacity-40 mix-blend-luminosity bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBin9V8ow3TcgKHo85Xqd9OPNbeFNCc-gAb_OelAACo3i6odl1sKdsiIdkfIsWDoYqVd2waPOq2I-PNQ4E4PFujFxFcpkKOhdHotvvTDEq2vHMree3oBs8aMmVHNlGBZSmsVFvoyJGoFH_HQ0e9yZX6-29nk0cLJ4KMvYRwb_3sqQ-9dW0YXkuIsJuIr-rbiQtbMibWpv3Y_UMdKZW80MlhYl_iodPP_6TDWDOXQzXOcZVnB3kAAJKbaUwXmutj8g2HknCnYn6t7l8j')" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-20">
          <div className="max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Specjalistyczne Audyty Techniczne</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
            POMIARY I <br/>
            <span className="text-primary">UPRAWNIENIA</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium">
            Zapewniamy kompleksowe badania techniczne, pomiary środowiskowe oraz certyfikację personelu. Pełna zgodność z normami UDT, SEP i przepisami BHP.
          </p>
          </div>
        </div>
      </section>

      {/* Category 01 - Measurements */}
      <section className="py-24 bg-background-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block underline decoration-primary underline-offset-8">Kategoria 01</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white">Pomiary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {measurementServices.map((service, index) => (
              <div key={index} className="bg-card-dark p-8 border border-white/5 group hover:border-primary transition-all">
                <span className="material-symbols-outlined text-primary text-5xl mb-6">{service.icon}</span>
                <h3 className="text-2xl font-black mb-4 uppercase text-white">{service.title}</h3>
                <ul className="space-y-3 text-slate-400 font-medium text-sm">
                  {service.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category 02 - UDT & Energy */}
      <section className="py-24 bg-card-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block underline decoration-primary underline-offset-8">Kategoria 02</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white">UDT i Energetyczne</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {udtServices.map((service, index) => (
              <div key={index} className="bg-background-dark p-10 border-l-4 border-primary group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-black uppercase max-w-xs text-white">{service.title}</h3>
                  <span className="material-symbols-outlined text-primary">{service.icon}</span>
                </div>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                  {service.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="bg-white/5 p-2 px-3">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Service - Energy Expenditure */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary p-12 md:p-20 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <span className="material-symbols-outlined text-[300px] -mr-20 -mt-20 text-black">monitoring</span>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-black uppercase tracking-[0.3em] text-xs font-black mb-4 block">Usługa Specjalistyczna</span>
                <h2 className="text-4xl md:text-6xl font-black text-black uppercase leading-none mb-6">Wydatek <br/> Energetyczny</h2>
                <p className="text-black/80 text-lg font-bold uppercase tracking-tight">Pomiar tempa metabolizmu na stanowiskach pracy.</p>
              </div>
              <div className="space-y-6 text-black/90 font-medium">
                <p>Zgodnie z Kodeksem Pracy, pracodawca jest zobowiązany do określenia wydatku energetycznego przy pracach fizycznych. Wykonujemy precyzyjne pomiary metodą tabelaryczną lub za pomocą nowoczesnych mierników tętna.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Ustalenie posiłków profilaktycznych</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Optymalizacja przerw w pracy</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Ocena obciążenia fizycznego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            ZAMÓW SPECJALISTYCZNE POMIARY
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Skontaktuj się z nami, aby ustalić harmonogram badań technicznych i pomiarów w Twoim zakładzie pracy.
          </p>
          <Link href="/kontakt" className="bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform duration-300 inline-block">
            Zapytaj o wycenę
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const measurementServices = [
  {
    title: "Pomiary Elektryczne",
    icon: "bolt",
    items: [
      "Badania skuteczności ochrony przeciwporażeniowej",
      "Pomiary rezystancji izolacji obwodów",
      "Przeglądy instalacji odgromowych",
      "Testy wyłączników RCD"
    ]
  },
  {
    title: "Pomiary Oświetlenia",
    icon: "light_mode",
    items: [
      "Natężenie oświetlenia na stanowiskach pracy",
      "Pomiary oświetlenia awaryjnego i ewakuacyjnego",
      "Badanie równomierności oświetlenia",
      "Dokumentacja zgodna z normą PN-EN 12464"
    ]
  },
  {
    title: "Środowisko Pracy",
    icon: "factory",
    items: [
      "Pomiary hałasu i drgań mechanicznych",
      "Badania zapylenia i czynników chemicznych",
      "Pomiary mikroklimatu (zimny, umiarkowany, gorący)",
      "Ocena uciążliwości stanowisk pracy"
    ]
  }
];

const udtServices = [
  {
    title: "Dźwigi, Windy, Suwnice, Hakowi",
    icon: "precision_manufacturing",
    description: "Pełne przygotowanie do egzaminów UDT oraz nadzór techniczny nad urządzeniami transportu bliskiego. Szkolenia dla operatorów i konserwatorów.",
    tags: ["Egzaminy UDT", "Konserwacja"]
  },
  {
    title: "Energetyczne - G1, G2, G3",
    icon: "ev_station",
    description: "Uprawnienia eksploatacyjne i dozorowe w grupach: elektrycznej (G1), cieplnej (G2) oraz gazowej (G3). Certyfikacja SEP, PSE, SIMP.",
    tags: ["Eksploatacja (E)", "Dozór (D)"]
  },
  {
    title: "Wózki Widłowe",
    icon: "forklift",
    description: "Szkolenia operatorów wózków jezdniowych z napędem silnikowym, w tym specjalizowane wózki wysokiego składowania. Certyfikacja UDT.",
    tags: ["Operator UDT", "Wymiana Butli"]
  },
  {
    title: "Maszyny Ciężkie (HDS, Żurawie)",
    icon: "construction",
    description: "Uprawnienia na żurawie przenośne (HDS), wieżowe, podesty ruchome (zwyżki) oraz ładowarki teleskopowe. Pełna ścieżka certyfikacji.",
    tags: ["Podesty (Zwyżki)", "HDS / Żurawie"]
  }
];

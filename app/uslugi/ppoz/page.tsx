import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: 'PPOŻ i Pierwsza Pomoc - Ochrona Przeciwpożarowa',
  description: 'Kompleksowe usługi ochrony przeciwpożarowej: audyty PPOŻ, instrukcje bezpieczeństwa, próbne ewakuacje, szkolenia i wyposażenie apteczek. Pełna zgodność z przepisami.',
  path: '/uslugi/ppoz',
});

export default function FireSafetyPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div
            className="w-full h-full opacity-40 mix-blend-luminosity bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBin9V8ow3TcgKHo85Xqd9OPNbeFNCc-gAb_OelAACo3i6odl1sKdsiIdkfIsWDoYqVd2waPOq2I-PNQ4E4PFujFxFcpkKOhdHotvvTDEq2vHMree3oBs8aMmVHNlGBZSmsVFvoyJGoFH_HQ0e9yZX6-29nk0cLJ4KMvYRwb_3sqQ-9dW0YXkuIsJuIr-rbiQtbMibWpv3Y_UMdKZW80MlhYl_iodPP_6TDWDOXQzXOcZVnB3kAAJKbaUwXmutj8g2HknCnYn6t7l8j')" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-20">
          <div className="max-w-2xl">
            <div className="flex items-start gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-[1px] w-12 bg-primary mt-2"></div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Ochrona Przeciwpożarowa</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
              PPOŻ I <span className="text-primary">PIERWSZA POMOC</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-8 font-medium leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Zapewniamy pełną zgodność z przepisami przeciwpożarowymi oraz uczymy ratować życie. Profesjonalne wsparcie dla Twojego biznesu.
            </p>
            <Link href="#oferta" className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Poznaj ofertę
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Audits Section */}
      <section className="py-24 bg-background-dark border-t border-white/5 animate-fade-in" id="oferta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Bezpieczeństwo Pożarowe</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white">
                Audyty i <br/>
                <span className="text-outline">Prewencja PPOŻ.</span>
              </h2>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215229_d30b066e-0b9b-4dae-ab37-cec73e15e17a-Photoroom-f8QrrC9OmxNaswb8Or3w8cnIdk8Tl1.png" 
                alt="Fire Extinguisher - Professional Safety Equipment" 
                className="w-56 sm:w-64 md:w-72 h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {ppozaudits.map((audit, index) => (
              <div key={index} className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 bg-primary group-hover:bg-black flex items-center justify-center mb-8 transition-colors">
                  <span className="material-symbols-outlined text-black group-hover:text-primary text-3xl">{audit.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors">{audit.title}</h3>
                <p className="text-slate-400 group-hover:text-black/70 mb-8 font-medium transition-colors">
                  {audit.description}
                </p>
                <Link href="/kontakt" className="inline-flex items-center gap-2 text-primary group-hover:text-black font-bold uppercase text-xs tracking-widest transition-colors">
                  Szczegóły <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Szkolenia Specjalistyczne</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase text-white">EDUKACJA <span className="text-primary">RATUJĄCA ŻYCIE</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingBlocks.map((block, index) => (
              <div key={index} className="bg-card-dark border border-white/5 p-12 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-5xl">{block.icon}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase mb-4 text-white">{block.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{block.description}</p>
                  <ul className="space-y-3 mb-8">
                    {block.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white">
                        <span className="w-1.5 h-1.5 bg-primary"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Kit Section */}
      <section className="py-24 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-card-dark border border-white/10 p-12 lg:p-20 overflow-hidden">
            <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-primary">medical_information</span>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zarządzanie Wyposażeniem</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white">WYPOSAŻENIE <br/><span className="text-primary">APTECZKI</span></h2>
                <p className="text-slate-400 text-lg mb-8">
                  Dostarczamy profesjonalne apteczki zakładowe zgodne z normą DIN 13157/13164 oraz zajmujemy się ich regularnym serwisem i uzupełnianiem materiałów eksploatacyjnych.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div>
                    <p className="text-2xl font-black text-white">DIN 13157</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Standard Przemysłowy</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">100% GOTOWOŚĆ</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Cykliczne Przeglądy</p>
                  </div>
                </div>
                <Link href="/kontakt" className="border-2 border-primary text-primary px-8 py-4 font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all inline-block">
                  Zamów doposażenie
                </Link>
              </div>
              <div className="bg-primary p-8 md:p-12 text-black">
                <h4 className="text-xl font-black uppercase mb-6">Co zawiera nasza usługa?</h4>
                <ul className="space-y-4">
                  {[
                    "Dobór ilości i rozmieszczenia apteczek",
                    "Regularna kontrola dat ważności",
                    "Błyskawiczne uzupełnianie braków",
                    "Oznakowanie punktów medycznych"
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="material-symbols-outlined font-bold">check_circle</span>
                      <span className="font-bold uppercase text-sm tracking-wide">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            Zadbaj o bezpieczeństwo <br/> pożarowe w firmie.
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Nie czekaj na kontrolę. Skonsultuj stan PPOŻ w Twoim obiekcie z naszymi ekspertami już dziś.
          </p>
          <Link href="/kontakt" className="bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform duration-300 inline-block">
            Zapytaj o ofertę
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const ppozaudits = [
  {
    title: "AUDYTY I KONTROLE PPOŻ",
    description: "Kompleksowe inspekcje stanu bezpieczeństwa pożarowego, przeglądy sprzętu oraz weryfikacja zgodności z normami prawnymi.",
    icon: "fire_extinguisher"
  },
  {
    title: "INSTRUKCJE BEZPIECZEŃSTWA",
    description: "Opracowanie i aktualizacja Instrukcji Bezpieczeństwa Pożarowego (IBP) dla każdego typu obiektu budowlanego.",
    icon: "description"
  },
  {
    title: "PRÓBNE EWAKUACJE",
    description: "Organizacja i nadzór nad próbnymi ewakuacjami, sporządzanie raportów oraz szkolenie praktyczne personelu.",
    icon: "exit_to_app"
  }
];

const trainingBlocks = [
  {
    title: "SZKOLENIA PPOŻ",
    description: "Szkolenia dla wyznaczonych pracowników z zakresu zwalczania pożarów i ewakuacji. Część teoretyczna i praktyczna z użyciem trenażerów.",
    icon: "local_fire_department",
    items: ["Obsługa podręcznego sprzętu gaśniczego", "Zasady alarmowania i ewakuacji"]
  },
  {
    title: "SZKOLENIA PPOM",
    description: "Profesjonalne kursy Pierwszej Pomocy Przedmedycznej. Realistyczne scenariusze, ćwiczenia na fantomach z informacją zwrotną i obsługa AED.",
    icon: "medical_services",
    items: ["Resuscytacja Krążeniowo-Oddechowa", "Postępowanie w stanach nagłych"]
  }
];

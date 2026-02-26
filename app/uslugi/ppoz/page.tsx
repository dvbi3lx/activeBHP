import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="Ochrona Przeciwpożarowa - ActiveBHP"
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
              <div className="flex items-center justify-start sm:justify-center lg:justify-start gap-4 mb-6">
                <div className="h-[2px] w-10 bg-primary"></div>
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold text-center sm:text-left bg-background-dark/50 px-2 py-1 backdrop-blur-sm rounded-sm">Ochrona Przeciwpożarowa</span>
                <div className="h-[2px] w-10 bg-primary hidden sm:block"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter uppercase sm:text-center lg:text-left drop-shadow-2xl">
                PPOŻ I <br className="lg:hidden" /><span className="text-primary">PIERWSZA POMOC</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-slate-200 text-lg md:text-xl mb-10 font-medium leading-relaxed sm:text-center lg:text-left sm:mx-auto lg:mx-0 drop-shadow-md">
                Zapewniamy pełną zgodność z przepisami przeciwpożarowymi oraz uczymy ratować życie. Profesjonalne wsparcie dla Twojego biznesu.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="scale-up" delay={0.4}>
              <div className="flex justify-start sm:justify-center lg:justify-start">
                <Link href="#oferta" className="inline-flex items-center justify-center gap-3 bg-primary text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 group shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto">
                  Poznaj ofertę
                  <span className="material-icons-outlined text-base group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Practical Fire & First Aid Image Section */}
      <section className="py-12 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <img src="/gaszenie-pozar.jpg" alt="Praktyczne szkolenia z użycia gaśnic" className="w-full h-64 sm:h-80 object-cover rounded-xl border border-white/10 shadow-2xl shadow-black/50" />
                <img src="/pierwsza-pomoc-sprzet.jpg" alt="Profesjonalny sprzęt do ćwiczeń z pierwszej pomocy medycznej, AED, Act+Fast" className="w-full h-64 sm:h-80 object-cover rounded-xl border border-white/10 shadow-2xl shadow-black/50 mt-12" />
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fade-left" delay={0.2}>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Od teorii do praktyki</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-white">Ćwiczenia z <span className="text-primary">Ekspertami</span></h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-6">
                Nasze szkolenia to nie tylko teoria. Organizujemy symulacje z wykorzystaniem prawdziwych trenażerów pożarowych oraz zaawansowanego sprzętu ratowniczego: defibrylatorów AED, fantomów i kamizelek treningowych do zadławień (Act+Fast).
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Audits Section */}
      <section className="py-24 bg-card-dark/50 border-t border-white/5 overflow-hidden" id="oferta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection variant="fade-right" delay={0.1}>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Bezpieczeństwo Pożarowe</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white">
                Audyty i <br />
                <span className="text-outline">Prewencja PPOŻ.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection variant="fade-left" delay={0.2} className="flex justify-center lg:justify-end">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215229_d30b066e-0b9b-4dae-ab37-cec73e15e17a-Photoroom-f8QrrC9OmxNaswb8Or3w8cnIdk8Tl1.png"
                alt="Fire Extinguisher - Professional Safety Equipment"
                className="w-56 sm:w-64 md:w-72 h-auto object-contain hover:-translate-y-4 hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {ppozaudits.map((audit, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * index} className="h-full">
                <div className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary group-hover:bg-black flex items-center justify-center mb-8 transition-colors">
                    <span className="material-symbols-outlined text-black group-hover:text-primary text-3xl">{audit.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors">{audit.title}</h3>
                  <p className="text-slate-400 group-hover:text-black/70 mb-8 font-medium transition-colors flex-grow">
                    {audit.description}
                  </p>
                  <Link href="/kontakt" className="inline-flex items-center gap-2 text-primary group-hover:text-black font-bold uppercase text-xs tracking-widest transition-colors mt-auto">
                    Szczegóły <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-zinc-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" delay={0.1} className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Szkolenia Specjalistyczne</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase text-white">EDUKACJA <span className="text-primary">RATUJĄCA ŻYCIE</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingBlocks.map((block, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * index} className="h-full">
                <div className="bg-card-dark border border-white/5 p-12 flex flex-col md:flex-row gap-8 items-start h-full">
                  <div className="w-20 h-20 bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-5xl">{block.icon}</span>
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-3xl font-black uppercase mb-4 text-white">{block.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{block.description}</p>
                    <ul className="space-y-3 mb-0">
                      {block.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white">
                          <span className="w-1.5 h-1.5 bg-primary"></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Kit Section */}
      <section className="py-24 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-card-dark border border-white/10 p-12 lg:p-20 overflow-hidden">
            <AnimatedSection variant="fade-in" delay={0.1} className="absolute right-0 top-0 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-primary">medical_information</span>
            </AnimatedSection>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection variant="fade-right" delay={0.2}>
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zarządzanie Wyposażeniem</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white">WYPOSAŻENIE <br /><span className="text-primary">APTECZKI</span></h2>
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
              </AnimatedSection>

              <AnimatedSection variant="fade-left" delay={0.3}>
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
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary overflow-hidden">
        <AnimatedSection variant="scale-up" delay={0.1} className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            Zadbaj o bezpieczeństwo <br /> pożarowe w firmie.
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Nie czekaj na kontrolę. Skonsultuj stan PPOŻ w Twoim obiekcie z naszymi ekspertami już dziś.
          </p>
          <Link href="/kontakt" className="bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform duration-300 inline-block">
            Zapytaj o ofertę
          </Link>
        </AnimatedSection>
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

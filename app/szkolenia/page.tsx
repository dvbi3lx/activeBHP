'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TrainingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden border border-white/10 min-h-[500px] flex items-center">
            <img
              alt="Modern Office"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPvkjZpwTAzqJVdVGH7Bv08A6kqCfJLPawF1vcwcfFq1bV7ENhYdfuFm6aQTpLWITaVGC9jBYmYoPf0R8oNZaCAUUmd-vWQx7wcYaE-miKMg3BzY-6KIeE6tzEiUyJTQK69o4dPhD-wyUE04WPvSLHubIXOo1jH4kv-2R5y7TjCQOQ406blhYiL9bpvTY6-3X261YWZLtdhI4SHkbFDqTP3wM21MmGP8IP4Wa1KuhEzTpL9PGOysX4PcAojfuMtsMZDyGaF4noR-Fk"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/70 to-transparent"></div>
            <div className="absolute top-8 right-8 bg-primary/90 text-black px-4 py-2 flex items-center gap-2 font-black text-[10px] tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm">sensors</span>
              Szkolenia online dostępne
            </div>
            <div className="relative z-10 px-12 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase">Profesjonalizm i Bezpieczeństwo</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
                CENTRUM<br/>
                <span className="text-primary">SZKOLENIOWE</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-medium mb-8 leading-relaxed text-white">
                Specjalistyczne uprawnienia UDT, szkolenia hakowych oraz kompleksowa obsługa BHP. Zdobądź certyfikat uznawany w całej Unii Europejskiej.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Training Offer Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">OFERTA <span className="text-primary">SZKOLEŃ</span></h2>
              <p className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-2">Wybierz odpowiedni moduł dla swojej kadry</p>
            </div>
            <div className="flex gap-2">
              <button className="border border-white/20 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-white">Zgodne z ISO</button>
              <button className="border border-white/20 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-white">Certyfikacja UE</button>
            </div>
          </div>

          <div className="space-y-4">
            {trainingModules.map((module, index) => (
              <div key={index} className="bg-card-dark border border-white/10 overflow-hidden">
                <div
                  className="p-8 flex items-center justify-between border-b border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-black text-2xl font-bold">{module.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white">{module.title}</h3>
                      <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">{module.subtitle}</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 text-white">
                    <span className={`material-symbols-outlined ${openIndex === index ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-8 grid md:grid-cols-3 gap-12 border-t border-white/5">
                      <div className="md:col-span-2">
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">
                          {module.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {module.tags.map((tag, tIndex) => (
                            <div key={tIndex} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3">
                              <span className="material-symbols-outlined text-primary text-sm">verified</span>
                              <span className="text-[10px] font-black uppercase tracking-widest text-white">{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-black/40 p-8 border border-white/5">
                        <h4 className="text-primary text-[11px] font-black uppercase tracking-[0.3em] mb-6">Zakres szkolenia:</h4>
                        <ul className="space-y-4">
                          {module.points.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-primary mt-1.5 flex-shrink-0"></span>
                              <span className="text-xs font-medium text-slate-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/kontakt" className="w-full bg-primary text-black py-4 mt-8 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-yellow-400 transition-colors inline-block text-center">
                          Zapytaj o cenę
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Platform Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-primary p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="bg-primary text-black px-4 py-1.5 inline-flex items-center gap-2 font-black text-[10px] tracking-widest uppercase mb-8">
                <span className="material-symbols-outlined text-sm">bolt</span>
                Platforma E-learning
              </div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.9] mb-8 text-white">
                SZKOLENIA <span className="text-primary italic">ONLINE</span><br/>
                ACTIVEBHP
              </h2>
              <p className="text-slate-400 text-lg font-medium mb-12 max-w-xl">
                Zrealizuj szkolenie okresowe BHP bez wychodzenia z biura. Nasza platforma jest dostępna 24/7 na każdym urządzeniu. Oszczędzaj czas i budżet swojej firmy dzięki nowoczesnej edukacji cyfrowej.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-black px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-yellow-400 transition-colors">
                  ZALOGUJ DO PLATFORMY
                </button>
                <Link href="/kontakt" className="border-2 border-white/20 text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-all text-center">
                  OFERTA DLA FIRM
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full text-white">
              <div className="aspect-video bg-black/60 border border-white/10 rounded flex flex-col items-center justify-center relative group">
                <span className="material-symbols-outlined text-primary text-8xl mb-4 group-hover:scale-110 transition-transform">laptop_mac</span>
                <div className="h-1 w-48 bg-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary animate-shimmer"></div>
                </div>
                <span className="text-[9px] font-bold tracking-[0.5em] text-slate-500 uppercase mt-4">System 2.0 Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">Skontaktuj się z nami</span>
          <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-tight mb-12 tracking-tighter text-white">
            ZABEZPIECZ SWÓJ <span className="text-primary italic">BIZNES</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-16 uppercase tracking-wider leading-relaxed">
            Przygotujemy dla Ciebie indywidualną ofertę na szkolenia UDT, BHP lub kompleksowy nadzór nad bezpieczeństwem w Twoim zakładzie pracy. Dołącz do grona zadowolonych klientów ActiveBHP.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/kontakt" className="bg-white text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-colors w-full sm:w-auto shadow-2xl text-center">
              Poproś o darmową wycenę
            </Link>
            <Link href="tel:+48000000000" className="bg-black border-2 border-primary text-primary px-12 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-black transition-all w-full sm:w-auto text-center">
              Zadzwoń: +48 000 000 000
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const trainingModules = [
  {
    title: "UPRAWNIENIA UDT",
    subtitle: "Wózki widłowe, suwnice, podesty, żurawie",
    icon: "forklift",
    description: "Kompleksowe przygotowanie do egzaminów państwowych przed komisją Urzędu Dozoru Technicznego. Zapewniamy pełne wsparcie merytoryczne i praktyczne. Prowadzimy kursy na wózki jezdniowe (wszystkie kategorie), podnośniki nożycowe i teleskopowe, suwnice sterowane z poziomu roboczego oraz żurawie samojezdne i przenośne (HDS).",
    tags: ["Pełna dokumentacja", "Terminy elastyczne"],
    points: [
      "Budowa i bezpieczna eksploatacja urządzeń",
      "Obowiązki operatora przed i po pracy",
      "Praktyczna nauka obsługi ładunków"
    ]
  },
  {
    title: "SZKOLENIA HAKOWYCH",
    subtitle: "Sygnalista - Hakowy (Dozór Techniczny)",
    icon: "link",
    description: "Profesjonalne kursy dla hakowych i sygnalistów, niezbędne przy pracach z użyciem żurawi i suwnic. Szkolenie obejmuje zasady bezpiecznego zawieszania ładunków oraz systemy sygnałów.",
    tags: ["Certyfikat UE", "Zajęcia praktyczne"],
    points: [
      "Dobór i kontrola osprzętu dźwigowego",
      "Sygnalizacja ręczna i radiowa",
      "Techniki bezpiecznego podnoszenia"
    ]
  },
  {
    title: "SZKOLENIA BHP",
    subtitle: "Wstępne, okresowe, P-POŻ i pierwsza pomoc",
    icon: "shield_person",
    description: "Pełen zakres szkoleń BHP dla wszystkich grup pracowniczych. Realizujemy szkolenia stacjonarne oraz w formie e-learningu. Programy dostosowane do specyfiki zagrożeń na danym stanowisku.",
    tags: ["Zgodne z Kodeksem Pracy", "Platforma 24/7"],
    points: [
      "Oceny ryzyka zawodowego",
      "Zasady udzielania pierwszej pomocy",
      "Ochrona przeciwpożarowa"
    ]
  }
];

'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Profesjonalne Szkolenia</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
            Szkolenia <span className="text-primary">BHP</span> i <span className="text-primary">UDT</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium">
            Zdobądź kompetencje, które zwiększą bezpieczeństwo w Twojej firmie. Oferujemy szkolenia BHP, uprawnienia UDT i kursy pierwszej pomocy – wszystko z certyfikatami uznanymi w całej UE.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt" className="bg-primary text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg shadow-primary/20">
              Zapisz się na szkolenie
            </Link>
            <Link href="/szkolenia-online" className="border-2 border-primary text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
              Platforma Online
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Co oferujemy?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Kompleksowe <span className="text-primary">szkolenia</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Przygotuj swój zespół do pracy w bezpiecznych warunkach dzięki naszym profesjonalnym szkoleniom dostosowanym do specyfiki Twojej branży.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingCategories.map((category, index) => (
              <div key={index} className="bg-card-dark border border-white/10 p-8 hover:border-primary/50 transition-all hover-lift">
                <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{category.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-6">{category.description}</p>
                <ul className="space-y-3 mb-6">
                  {category.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="block text-center bg-primary/10 border border-primary text-primary px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                  Zapytaj o termin
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Dlaczego My?</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                Szkolenia, które <span className="text-primary">naprawdę uczą</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Nasze szkolenia to nie nudne prezentacje – to praktyczna wiedza przekazywana przez doświadczonych specjalistów, którzy rozumieją realia pracy w polskich przedsiębiorstwach.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">{benefit.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-sm mb-1">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-9xl mb-4 block">groups</span>
                  <div className="text-white">
                    <div className="text-6xl font-black mb-2">500+</div>
                    <div className="text-sm uppercase tracking-widest text-slate-400">Przeszkolonych osób</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Gotowy na szkolenie?</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-8 tracking-tighter text-white">
            Zainwestuj w <span className="text-primary">bezpieczeństwo</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Skontaktuj się z nami, aby ustalić termin szkolenia dopasowanego do potrzeb Twojej firmy. Oferujemy elastyczne terminy i konkurencyjne ceny.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/kontakt" className="bg-primary text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-colors w-full sm:w-auto shadow-2xl text-center">
              Umów bezpłatną konsultację
            </Link>
            <Link href="/szkolenia-online" className="border-2 border-white text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center">
              Zobacz platformę online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const trainingCategories = [
  {
    icon: "forklift",
    title: "Uprawnienia UDT",
    description: "Kompleksowe kursy operatorów urządzeń technicznych z egzaminem państwowym.",
    points: [
      "Wózki widłowe wszystkich kategorii",
      "Suwnice i żurawie przemysłowe",
      "Podnośniki nożycowe i teleskopowe",
      "Certyfikat UDT"
    ]
  },
  {
    icon: "shield_person",
    title: "Szkolenia BHP",
    description: "Wstępne i okresowe szkolenia BHP dla wszystkich grup pracowniczych.",
    points: [
      "Szkolenia wstępne i okresowe",
      "Stanowiska administracyjne i robotnicze",
      "Szkolenia kadry kierowniczej",
      "E-learning dostępny 24/7"
    ]
  },
  {
    icon: "medical_services",
    title: "Pierwsza Pomoc i PPOŻ",
    description: "Praktyczne szkolenia z pierwszej pomocy i ochrony przeciwpożarowej.",
    points: [
      "Pierwsza pomoc przedmedyczna",
      "Obsługa sprzętu gaśniczego",
      "Ewakuacja i procedury awaryjne",
      "Certyfikaty zgodne z normami"
    ]
  }
];

const benefits = [
  {
    icon: "verified",
    title: "Certyfikaty UE",
    description: "Wszystkie certyfikaty uznawane w całej Unii Europejskiej"
  },
  {
    icon: "schedule",
    title: "Elastyczne terminy",
    description: "Dopasowujemy harmonogram do Twoich potrzeb biznesowych"
  },
  {
    icon: "location_on",
    title: "Szkolenia u Ciebie",
    description: "Prowadzimy szkolenia w siedzibie Twojej firmy"
  },
  {
    icon: "support",
    title: "Wsparcie po szkoleniu",
    description: "Pomoc i doradztwo nawet po zakończeniu kursu"
  }
];

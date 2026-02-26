import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'O Firmie - Poznaj Naszą Historię',
  description: 'ActiveBHP - ponad 10 lat doświadczenia w bezpieczeństwie przemysłowym. Poznaj nasz zespół ekspertów, certyfikaty i setki zadowolonych klientów w całej Polsce.',
  path: '/o-firmie',
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="O Firmie - ActiveBHP"
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
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold bg-background-dark/50 px-2 py-1 backdrop-blur-sm rounded-sm">Poznaj naszą historię</span>
                <div className="h-[2px] w-10 bg-primary hidden sm:block lg:hidden"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter uppercase sm:text-center lg:text-left drop-shadow-2xl">
                O NASZEJ <br />
                <span className="text-primary">FIRMIE</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-slate-200 max-w-xl text-lg md:text-xl mb-12 font-medium leading-relaxed sm:text-center lg:text-left sm:mx-auto lg:mx-0 drop-shadow-md">
                Od ponad dekady ActiveBHP definiuje nowe standardy w bezpieczeństwie przemysłowym. Nasza misja to nie tylko compliance, ale realna ochrona życia i zdrowia pracowników poprzez innowacyjne doradztwo i rzetelną edukację.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background-dark border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" delay={0.1} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Dlaczego <span className="text-primary">my?</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.2 * index}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-card-dark border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black">{reason.icon}</span>
                  </div>
                  <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-white">{reason.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <AnimatedSection variant="fade-right" delay={0.1}>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zarząd ActiveBHP</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Nasz <span className="text-outline">Prezes</span></h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fade-right" delay={0.2}>
              <div className="mb-6">
                <img
                  alt="Marek Spiżewski - Prezes ActiveBHP"
                  className="w-full h-auto"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260219_172552_d5afad11-3d96-42a7-a3c0-91b79ac193cb-Photoroom-kMuZtzSObdETCX85zlGd7A3m3r2jza.png"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white">Marek Spiżewski</h3>
                  <p className="text-primary font-bold uppercase text-sm tracking-[0.2em] mt-2">Właściciel i Prezes</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/marekspizewski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-black text-2xl">link</span>
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fade-left" delay={0.3} className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                Marek Spiżewski to właściciel i prezes firmy Active BHP, działającej z siedzibą w Łodzi jako spółka zajmująca się kompleksową obsługą w zakresie bezpieczeństwa i higieny pracy.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Firma oferuje audyty stanu BHP, kontrole warunków pracy, szkolenia BHP dopasowane do różnych grup zawodowych oraz opracowywanie wymaganej dokumentacji zgodnej z przepisami prawa pracy i BHP. Active BHP wdraża także autorskie narzędzia, takie jak systemy zarządzania jakością i audyty bezpieczeństwa, które wspierają przedsiębiorstwa w poprawie procesów i zgodności z normami.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Dzięki praktycznemu podejściu i doświadczeniu w pracy z różnymi branżami, firma działa na rzecz podnoszenia standardów bezpieczeństwa w zakładach pracy. Właściciel jest rozpoznawalny w środowisku lokalnym jako specjalista zorientowany na praktyczne zastosowanie wiedzy i rozwój edukacji BHP.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-background-dark overflow-hidden relative border-t border-white/5">
        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-center justify-between">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Zaufali nam</h2>
            <div className="bg-primary text-black px-6 py-2 font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history</span>
              Ponad 10 lat doświadczenia
            </div>
          </div>
        </AnimatedSection>
        <div className="flex overflow-hidden grayscale opacity-30 hover:opacity-70 transition-opacity duration-500">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center px-12 h-20 w-[250px]">
                <span className="text-2xl font-black text-white">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const reasons = [
  {
    title: "Doświadczenie",
    icon: "badge",
    description: "Lata obecności na rynku i setki przeprowadzonych audytów w najbardziej wymagających sektorach przemysłu."
  },
  {
    title: "Certyfikacja",
    icon: "verified",
    description: "Nasze usługi są poparte międzynarodowymi certyfikatami i stałym nadzorem organów regulacyjnych."
  },
  {
    title: "Indywidualne podejście",
    icon: "person_check",
    description: "Nie stosujemy gotowych szablonów. Każda firma otrzymuje rozwiązania skrojone pod konkretne ryzyka."
  }
];

const logos = ["LOGOTYPE_A", "LOGOTYPE_B", "LOGOTYPE_C", "LOGOTYPE_D", "LOGOTYPE_E"];

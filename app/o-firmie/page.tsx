import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";

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
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div
            className="w-full h-full opacity-40 mix-blend-luminosity bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBin9V8ow3TcgKHo85Xqd9OPNbeFNCc-gAb_OelAACo3i6odl1sKdsiIdkfIsWDoYqVd2waPOq2I-PNQ4E4PFujFxFcpkKOhdHotvvTDEq2vHMree3oBs8aMmVHNlGBZSmsVFvoyJGoFH_HQ0e9yZX6-29nk0cLJ4KMvYRwb_3sqQ-9dW0YXkuIsJuIr-rbiQtbMibWpv3Y_UMdKZW80MlhYl_iodPP_6TDWDOXQzXOcZVnB3kAAJKbaUwXmutj8g2HknCnYn6t7l8j')" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Poznaj naszą historię</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
              O NASZEJ <br/>
              <span className="text-primary">FIRMIE</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium leading-relaxed">
              Od ponad dekady ActiveBHP definiuje nowe standardy w bezpieczeństwie przemysłowym. Nasza misja to nie tylko compliance, ale realna ochrona życia i zdrowia pracowników poprzez innowacyjne doradztwo i rzetelną edukację.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Dlaczego <span className="text-primary">my?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center group opacity-0-start animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="w-20 h-20 bg-card-dark border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black">{reason.icon}</span>
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-white">{reason.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zarząd ActiveBHP</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Nasz <span className="text-outline">Prezes</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img
                  alt="Marek Spiżewski - Prezes ActiveBHP"
                  className="w-full h-auto"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260219_172552_d5afad11-3d96-42a7-a3c0-91b79ac193cb-Photoroom-kMuZtzSObdETCX85zlGd7A3m3r2jza.png"
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
            </div>
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                Marek Spiżewski to właściciel i prezes firmy Active BHP, działającej z siedzibą w Łodzi jako spółka zajmująca się kompleksową obsługą w zakresie bezpieczeństwa i higieny pracy.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Firma oferuje audyty stanu BHP, kontrole warunków pracy, szkolenia BHP dopasowane do różnych grup zawodowych oraz opracowywanie wymaganej dokumentacji zgodnej z przepisami prawa pracy i BHP. Active BHP wdraża także autorskie narzędzia, takie jak systemy zarządzania jakością i audyty bezpieczeństwa, które wspierają przedsiębiorstwa w poprawie procesów i zgodności z normami.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Dzięki praktycznemu podejściu i doświadczeniu w pracy z różnymi branżami, firma działa na rzecz podnoszenia standardów bezpieczeństwa w zakładach pracy. Właściciel jest rozpoznawalny w środowisku lokalnym jako specjalista zorientowany na praktyczne zastosowanie wiedzy i rozwój edukacji BHP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-background-dark overflow-hidden relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-center justify-between">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Zaufali nam</h2>
          <div className="bg-primary text-black px-6 py-2 font-black text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">history</span>
            Ponad 10 lat doświadczenia
          </div>
        </div>
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

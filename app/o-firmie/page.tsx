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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Eksperci ActiveBHP</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Nasz <span className="text-outline">Zespół</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-6 border border-white/5">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    src={member.image}
                  />
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{member.name}</h3>
                <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mt-2">{member.role}</p>
              </div>
            ))}
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

const team = [
  {
    name: "Marek Wiśniewski",
    role: "Główny Specjalista ds. BHP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCwTEoMzOmDT7EzTvYEDAsYPKhVow5hokbuUmeMYb1QNEUUktH3iFT0VzeHYXu6z3nu3-qUivoDX6Q2soZaILfVwKDuQE_l6-q0qOOZzxOJNhjya-HI1Uc6CMQziLAyV-6FaOMI38d-2NOH9o6YwlMgycTwFpRohivfEkPzo_XTqp_0lW2UdkrNNu2DWIgL5qXbF_VpyAt3mAM0E5c9P-hnPuEkjB9cPBc6f76OlmuUnevu60DIRkt6obDL6Xf72xP8uc6JwZVUnW"
  },
  {
    name: "Anna Kowalska",
    role: "Audytor PPOŻ i Ewakuacji",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcOV-N8itdJcUQBMXc7f8L_Uj_WA7NmtAYU9cL3aNgmDLiJD1pkXnhPolG3R5D4ATxsg7R-sf52_BEErsOw7mvnPyx66KGDwDAW386PKtLtB6cfXkLhPWYepo1UdECR6mMOtyp_o8a1y531Qe896RNoq_1QDXgn2vjW1L-siMcsKJy3bjwRpTsiatJ-Shn_Cuf4pP5EXVVSShFP5XL-gaOpVAttLj5leEgqzFsDHUNLr4ChVYUkxqNQcPCOAVzYzxdf7GaHg5cZ6bT"
  },
  {
    name: "Tomasz Nowak",
    role: "Trener Szkoleń Przemysłowych",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhZB1mlWPNn4ohlU6kWmJp3raR-gecu5By2E08ppNg1qCWk4z55lG9oo22hLxrRpBCqwNJA-DTZ511u25lVUhGv92zsAfHTI2GQF8VSyYtbeLiNY5IIhmiZXmc8aze8ylPUuSyMvV_26ZyTdIfZ08BqKe_l10CIQLpco6Jmg5KbVxXLrwZG-IJvqDqPnwOkjY1PSkKkXEc4yGzqatTJu4T5nYOHXFIBHAjEyC3D4xLATzMrcPlWb1-wsrT6u0DWs_PSpDMSetfura9"
  }
];

const logos = ["LOGOTYPE_A", "LOGOTYPE_B", "LOGOTYPE_C", "LOGOTYPE_D", "LOGOTYPE_E"];

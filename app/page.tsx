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
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">ActiveBHP Premium Safety</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
            Śpij spokojnie. <br/>
            <span className="text-primary">My zadbamy o BHP.</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium">
            Przestań martwić się kontrolami i karami. Przejmujemy odpowiedzialność za bezpieczeństwo w Twojej firmie, abyś mógł skupić się na rozwoju biznesu. Gwarantujemy pełną zgodność z przepisami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* Video Section */}
      <section className="py-24 bg-card-dark/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zobacz nas w akcji</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              ActiveBHP <span className="text-primary">w praktyce</span>
            </h2>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg border-2 border-primary/20 shadow-2xl shadow-primary/10 bg-black"
              src="https://www.youtube.com/embed/UYbhQTa1M38"
              title="ActiveBHP - Film promocyjny"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-20 w-64 h-64 opacity-5 pointer-events-none hidden lg:block">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215237_ee740a4a-7682-4494-9d06-976f30e996a0-Photoroom-8rUxkqMi0kQR4rM2T0ivtrVyLA7BAS.png" 
            alt="Safety Helmet" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Co zyskujesz</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white">
                Korzyści dla <br/>
                <span className="text-outline">Twojej Firmy.</span>
              </h2>
            </div>
            <div className="lg:max-w-sm border-l-4 border-primary pl-6 py-2">
              <p className="text-slate-400 font-medium">
                Oszczędzaj czas i pieniądze dzięki rozwiązaniom szytym na miarę. Unikniesz kar, wypadków i stresujących kontroli – zapewnimy Ci spokój i pewność, że wszystko jest pod kontrolą.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <div key={index} className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500 hover-lift">
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            Zacznij działać <br className="hidden sm:block"/> bez stresu.
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Otrzymaj darmową konsultację i dowiedz się, jak w 48 godzin możesz mieć całą dokumentację BHP gotową. Bez papierologii, bez stresu – tylko rezultaty.
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
    description: "Uniknij kar do 30 000 zł i stresujących kontroli PIP. Nasz specjalista zadba o zgodność z przepisami – Ty skupisz się na biznesie.",
    icon: "engineering",
    link: "/uslugi/bhp",
    cta: "Oszczędzaj czas"
  },
  {
    title: "Szkolenia",
    description: "Twoi pracownicy nauczą się, jak naprawdę bezpiecznie pracować. Zapomnij o nudnych prezentacjach – oferujemy praktyczną wiedzę, która chroni życie.",
    icon: "groups",
    link: "/szkolenia",
    cta: "Chroń zespół"
  },
  {
    title: "PPOŻ",
    description: "Śpij spokojnie wiedząc, że Twoja firma jest zabezpieczona przed pożarem. Zapewnimy instrukcje, przeglądy i szkolenia – wszystko w jednym miejscu.",
    icon: "fire_extinguisher",
    link: "/uslugi/ppoz",
    cta: "Zwiększ bezpieczeństwo"
  },
  {
    title: "Dokumentacja",
    description: "Przygotujemy za Ciebie całą dokumentację BHP w 48 godzin. Bez papierologii, bez stresu – po prostu gotowe rozwiązanie zgodne z prawem.",
    icon: "description",
    link: "/uslugi/prawo-pracy",
    cta: "Zamów dokumenty"
  }
];

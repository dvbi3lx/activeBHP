import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

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
      <section className="relative min-h-[90vh] md:min-h-screen flex items-start md:items-center overflow-hidden pt-28 md:pt-20">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="Prace dźwigowe - ActiveBHP"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-background-dark/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Extra contrast layer */}
        </div>

        {/* Restored CEO Image */}
        <AnimatedSection variant="fade-left" delay={0.3} className="absolute right-0 md:right-4 lg:right-8 bottom-32 sm:bottom-0 z-20 pointer-events-none flex justify-end w-full">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260219_172457_3ccad666-5424-4dc8-9dae-0f439649625c%20%281%29-Photoroom-mtXIpkdSkohJb25cY2ymjNHpdC7NCa.png"
              alt="Prezes ActiveBHP"
              className="h-[55vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] w-auto max-w-[150%] md:max-w-none object-contain object-bottom opacity-100"
              loading="eager"
            />
            {/* Bottom gradient to fade the image into the background so it doesn't look cut off */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent pointer-events-none md:hidden"></div>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 w-full pb-20 md:pb-0 md:py-20 flex flex-col justify-between min-h-[80vh] md:min-h-0 md:block">
          <div className="max-w-2xl flex-grow md:flex-grow-0 z-40">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-10 bg-primary"></div>
                <span className="text-primary uppercase tracking-[0.2em] text-sm md:text-base font-bold bg-background-dark/50 px-2 py-1 backdrop-blur-sm rounded-sm">Bezpieczeństwo Pracy</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} variant="fade-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-snug mb-5 tracking-tight uppercase drop-shadow-2xl relative z-40">
                Z Nami <br />
                <span className="text-primary">Twoja firma</span><br />
                czuje się bezpiecznie.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3} variant="fade-up" className="mb-[20vh] sm:mb-8">
              <p className="text-slate-200 max-w-lg text-lg font-medium leading-relaxed drop-shadow-md relative z-40">
                Kompleksowe rozwiązania w zakresie bezpieczeństwa i higieny pracy. Oszczędzaj czas, unikaj kar i wypadków – my zadbamy o wszystko.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} variant="scale-up" className="mt-auto md:mt-0 relative z-50">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm md:max-w-none mx-auto md:mx-0 pt-[25vh] sm:pt-0">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto bg-primary text-black px-8 py-4 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300 group shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Zapytaj o ofertę
                <span className="material-icons-outlined text-base group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </Link>
              <Link
                href="/uslugi"
                className="w-full sm:w-auto px-8 py-4 font-bold uppercase tracking-widest text-sm text-white border border-white/40 bg-black/40 hover:bg-white/10 hover:border-white flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-md"
              >
                Poznaj usługi
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-card-dark/50 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" delay={0.1} className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Nasze Usługi</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Co <span className="text-primary">oferujemy</span>
            </h2>
          </AnimatedSection>

          {/* BHP Category */}
          <AnimatedSection variant="fade-up" delay={0.1} className="mb-16">
            <h3 className="text-2xl font-black text-primary uppercase mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">engineering</span>
              Bezpieczeństwo i Higiena Pracy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Outsourcing BHP', description: 'Kompleksowy nadzór nad bezpieczeństwem w Twojej firmie' },
                { title: 'Ocena Ryzyka Zawodowego', description: 'Profesjonalna ocena zagrożeń dla każdego stanowiska' },
                { title: 'Instrukcje BHP', description: 'Opracowanie instrukcji dostosowanych do Twojej działalności' },
              ].map((item, idx) => (
                <AnimatedSection key={idx} variant="fade-up" delay={0.1 + (idx * 0.1)}>
                  <Link
                    href="/uslugi/bhp"
                    className="block h-full p-6 bg-background-dark border border-white/10 group hover:border-primary hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <h4 className="font-black text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{item.description}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Szkolenia Category */}
          <AnimatedSection variant="fade-up" delay={0.2} className="mb-16">
            <h3 className="text-2xl font-black text-primary uppercase mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">groups</span>
              Szkolenia Specjalistyczne
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Szkolenia BHP', description: 'Praktyczne szkolenia dla wszystkich pracowników' },
                { title: 'Szkolenia Pierwsza Pomoc', description: 'Kursy udzielania pierwszej pomocy medycznej' },
                { title: 'Szkolenia PPOŻ', description: 'Szkolenia z ochrony przeciwpożarowej' },
              ].map((item, idx) => (
                <AnimatedSection key={idx} variant="fade-up" delay={0.2 + (idx * 0.1)}>
                  <Link
                    href="/szkolenia"
                    className="block h-full p-6 bg-background-dark border border-white/10 group hover:border-primary hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <h4 className="font-black text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{item.description}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Pomiary & Audyty Category */}
          <AnimatedSection variant="fade-up" delay={0.3} className="mb-16">
            <h3 className="text-2xl font-black text-primary uppercase mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">speed</span>
              Pomiary i Audyty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Pomiary Wydatku Energetycznego', description: 'Kompleksowe pomiary dla budynków i instalacji' },
                { title: 'Audyty Prac Podwodnych', description: 'Specjalistyczne audyty prac w warunkach ekstremalnych' },
                { title: 'Systemy Zarządzania', description: 'Wdrażanie i audyt systemów bezpieczeństwa' },
              ].map((item, idx) => (
                <AnimatedSection key={idx} variant="fade-up" delay={0.3 + (idx * 0.1)}>
                  <Link
                    href="/uslugi/ppoz"
                    className="block h-full p-6 bg-background-dark border border-white/10 group hover:border-primary hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <h4 className="font-black text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{item.description}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* View All Services Button */}
          <AnimatedSection variant="scale-up" delay={0.4} className="flex justify-center mt-20">
            <Link
              href="/uslugi"
              className="bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-lg hover:bg-yellow-400 hover:scale-110 transition-all shadow-lg flex items-center gap-3 group"
            >
              Wszystkie usługi
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-card-dark/50 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.1} variant="fade-up" className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zobacz nas w akcji</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              ActiveBHP <span className="text-primary">w praktyce</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} variant="scale-up">
            <div className="relative w-full group" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg border-2 border-primary/20 shadow-2xl shadow-primary/10 bg-black group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all"
                src="https://www.youtube.com/embed/UYbhQTa1M38"
                title="ActiveBHP - Film promocyjny"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection variant="fade-right" delay={0.1}>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Co zyskujesz</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-white mb-6">
                Korzyści dla <br />
                <span className="text-outline">Twojej Firmy.</span>
              </h2>
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-slate-400 font-medium text-lg">
                  Oszczędzaj czas i pieniądze dzięki rozwiązaniom szytym na miarę. Unikniesz kar, wypadków i stresujących kontroli – zapewnimy Ci spokój i pewność, że wszystko jest pod kontrolą.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={0.2} className="flex justify-center lg:justify-end group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215237_ee740a4a-7682-4494-9d06-976f30e996a0-Photoroom-8rUxkqMi0kQR4rM2T0ivtrVyLA7BAS.png"
                alt="Safety Helmet"
                className="w-64 sm:w-72 md:w-80 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * index}>
                <div className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500 hover:scale-105 transform origin-center h-full">
                  <div className="w-14 h-14 bg-primary group-hover:bg-black flex items-center justify-center mb-8 transition-colors">
                    <span className="material-icons-outlined text-black group-hover:text-primary text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors">{service.title}</h3>
                  <p className="text-slate-400 group-hover:text-black/70 mb-8 font-medium transition-colors">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary group-hover:text-black font-bold uppercase text-xs tracking-widest transition-colors mt-auto"
                  >
                    {service.cta} <span className="material-icons-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" delay={0.1} className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Opinie Klientów</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Co mówią o nas <span className="text-primary">nasi partnerzy</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} variant="fade-up" delay={0.1 * (index % 3)}>
                <div className="bg-card-dark p-8 border border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-primary text-base">star</span>
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 font-medium leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">{testimonial.author}</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{testimonial.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-primary overflow-hidden">
        <AnimatedSection variant="scale-up" delay={0.2} className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            Zacznij działać <br className="hidden sm:block" /> bez stresu.
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
        </AnimatedSection>
      </section>

      <Footer />
    </main >
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

const testimonials = [
  {
    text: "ActiveBHP całkowicie zmienił podejście naszej firmy do bezpieczeństwa. Profesjonalizm i zaangażowanie zespołu to coś niezwykłego!",
    author: "Marek Kowalski",
    company: "Dyrektor Zarządzający, Fabryka XYZ"
  },
  {
    text: "Dzięki ActiveBHP uniknęliśmy kilku potencjalnych kar. To naprawdę wygodne rozwiązanie dla firm takich jak nasza.",
    author: "Anna Lewandowska",
    company: "Manager HR, Transport Plus"
  },
  {
    text: "Szkolenia były bardzo praktyczne. Pracownicy naprawdę nauczyli się czegoś cennego, a cena była rozsądna.",
    author: "Piotr Nowak",
    company: "Prezes, Budowlanka"
  },
  {
    text: "Niesamowita obsługa klienta. Zawsze mogę liczyć na szybką i profesjonalną pomoc zespołu ActiveBHP.",
    author: "Katarzyna Wiśniewska",
    company: "Kierownik Zakładu, Pharma Solutions"
  },
  {
    text: "Najlepsza inwestycja jaką zrobiliśmy dla naszych pracowników. Zdecydowanie polecam wszystkim znajomym.",
    author: "Łukasz Górski",
    company: "Właściciel, Serwis Mechaniczny"
  },
  {
    text: "Kompleksowe podejście do BHP - od audytu do szkolenia. Vrazie z ActiveBHP czuję się bezpieczny na wszystkich frontach.",
    author: "Magdalena Zielińska",
    company: "Dyrektor Operacyjna, Logistyka Premium"
  }
];

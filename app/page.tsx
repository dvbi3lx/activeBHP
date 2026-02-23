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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-background-dark via-background-dark to-background-dark/95">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/98 to-background-dark z-10"></div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-full max-w-2xl hidden lg:flex items-center justify-end z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260219_172457_3ccad666-5424-4dc8-9dae-0f439649625c%20%281%29-Photoroom-mtXIpkdSkohJb25cY2ymjNHpdC7NCa.png"
            alt="Prezes ActiveBHP"
            className="w-full h-auto object-contain opacity-65 brightness-110 drop-shadow-xl"
            loading="lazy"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-[3px] w-14 bg-gradient-to-r from-primary to-yellow-300"></div>
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-black">Bezpieczeństwo Pracy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Z Nami <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary drop-shadow-lg">Twoja firma</span><br/>
              <span className="text-white drop-shadow-lg">czuje się bezpiecznie.</span>
            </h1>
            <p className="text-slate-200 max-w-2xl text-base md:text-lg mb-12 font-medium leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: '0.3s' }}>
              Kompleksowe rozwiązania w zakresie bezpieczeństwa i higieny pracy. Oszczędzaj czas, unikaj kar i wypadków – my zadbamy o wszystko.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/kontakt"
                className="bg-gradient-to-r from-primary to-yellow-300 text-black px-12 py-6 font-black uppercase tracking-widest flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all group text-sm"
              >
                Zapytaj o ofertę
                <span className="material-icons-outlined text-base group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href="/uslugi"
                className="border-2 border-yellow-300 text-yellow-300 px-12 py-6 font-black uppercase tracking-widest hover:bg-yellow-300 hover:text-black transition-all hover:shadow-2xl hover:shadow-yellow-300/50 hover:scale-110 text-sm"
              >
                Poznaj usługi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-card-dark/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zobacz nas w akcji</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              ActiveBHP <span className="text-primary">w praktyce</span>
            </h2>
          </div>
          <div className="relative w-full group animate-fade-in" style={{ paddingBottom: '56.25%', animationDelay: '0.1s' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg border-2 border-primary/20 shadow-2xl shadow-primary/10 bg-black group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all"
              src="https://www.youtube.com/embed/UYbhQTa1M38"
              title="ActiveBHP - Film promocyjny"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Co zyskujesz</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-white mb-6">
                Korzyści dla <br/>
                <span className="text-outline">Twojej Firmy.</span>
              </h2>
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-slate-400 font-medium text-lg">
                  Oszczędzaj czas i pieniądze dzięki rozwiązaniom szytym na miarę. Unikniesz kar, wypadków i stresujących kontroli – zapewnimy Ci spokój i pewność, że wszystko jest pod kontrolą.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end group">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215237_ee740a4a-7682-4494-9d06-976f30e996a0-Photoroom-8rUxkqMi0kQR4rM2T0ivtrVyLA7BAS.png" 
                alt="Safety Helmet" 
                className="w-64 sm:w-72 md:w-80 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <div key={index} className="bg-card-dark p-10 group hover:bg-primary transition-all duration-500 animate-fade-in hover:scale-105 transform origin-center" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-background-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Opinie Klientów</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Co mówią o nas <span className="text-primary">nasi partnerzy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card-dark p-8 border border-white/10 animate-fade-in hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary text-base">star</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 font-medium leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-black text-sm">{testimonial.author}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-card-dark/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Nasze Usługi</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Co <span className="text-primary">oferujemy</span>
            </h2>
          </div>

          {/* BHP Category */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
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
                <Link
                  key={idx}
                  href="/uslugi/bhp"
                  className="p-6 bg-background-dark border border-white/10 group hover:border-primary hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-105"
                >
                  <h4 className="font-black text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Szkolenia Category */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
                <Link
                  key={idx}
                  href="/szkolenia"
                  className="p-6 bg-background-dark border border-white/10 group hover:border-primary hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-105"
                >
                  <h4 className="font-black text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Pomiary & Audyty Category */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
                <Link
                  key={idx}
                  href="/uslugi/ppoz"
                  className="p-6 bg-background-dark border border-white/10 group hover:border-primary hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-105"
                >
                  <h4 className="font-black text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/uslugi"
              className="bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-lg hover:bg-yellow-400 hover:scale-110 transition-all shadow-lg flex items-center gap-3 group"
            >
              Wszystkie usługi
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-primary animate-fade-in" style={{ animationDelay: '0.4s' }}>
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

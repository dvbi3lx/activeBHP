import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ViewTransitionLink from "@/components/ViewTransitionLink";
import { createMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = createMetadata({
  title: 'Wszystkie Usługi - Kompleksowe Rozwiązania BHP i PPOŻ',
  description: 'Pełna oferta usług ActiveBHP: nadzór BHP, ochrona przeciwpożarowa, szkolenia, dokumentacja, pomiary i usługi specjalne. Znajdź rozwiązanie dopasowane do Twoich potrzeb.',
  path: '/uslugi',
});

export default function AllServicesPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/crane-hero-2.jpg"
            alt="Wszystkie Usługi - ActiveBHP"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-background-dark/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-20 w-full">
          <div className="max-w-3xl">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Kompleksowa oferta</span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tighter uppercase drop-shadow-2xl">
                NASZE <span className="text-primary">USŁUGI</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium leading-relaxed">
                Zyskaj spokój ducha dzięki naszym rozwiązaniom. Każda usługa została zaprojektowana, aby nie tylko spełnić wymogi prawne, ale przede wszystkim chronić to, co najważniejsze – Twój zespół i ciągłość Twojego biznesu.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid - Wszystkie kategorie */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {/* BHP Services */}
          <div>
            <AnimatedSection variant="fade-right" delay={0.1} className="mb-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl shrink-0">engineering</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black uppercase tracking-tighter leading-tight">Bezpieczeństwo <span className="text-primary">BHP</span></h2>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-3xl">
                Przestań martwić się kontrolami PIP i dokumentacją BHP. Zapewnimy Ci pełną zgodność z przepisami, abyś mógł skupić się na rozwoju firmy.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bhpServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Fire Safety */}
          <div>
            <AnimatedSection variant="fade-right" delay={0.1} className="mb-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl shrink-0">fire_extinguisher</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black uppercase tracking-tighter leading-tight">Ochrona <span className="text-primary">PPOŻ</span></h2>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-3xl">
                Śpij spokojnie wiedząc, że Twoja firma jest chroniona przed zagrożeniem pożarowym. Kompleksowe rozwiązania zapewniające bezpieczeństwo Twojego zespołu i majątku.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fireServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div>
            <AnimatedSection variant="fade-right" delay={0.1} className="mb-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl shrink-0">description</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black uppercase tracking-tighter leading-tight">Dokumentacja <span className="text-primary">i Prawo</span></h2>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-3xl">
                Uwolnij się od biurokratycznych obowiązków. Przygotujemy za Ciebie wszystkie wymagane dokumenty, oszczędzając Twój czas i chroniąc przed karami.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentationServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Measurements & Inspections */}
          <div>
            <AnimatedSection variant="fade-right" delay={0.1} className="mb-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl shrink-0">speed</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black uppercase tracking-tighter leading-tight">Pomiary <span className="text-primary">i UDT</span></h2>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-3xl">
                Uniknij awarii i kosztownych przestojów dzięki regularnym pomiarom i przeglądom. Zapewnimy sprawność Twojego sprzętu i zdrowie pracowników.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {measurementServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Special Services */}
          <div>
            <AnimatedSection variant="fade-right" delay={0.1} className="mb-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl shrink-0">workspace_premium</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black uppercase tracking-tighter leading-tight">Usługi <span className="text-primary">Specjalne</span></h2>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-3xl">
                Wyróżnij swoją firmę na tle konkurencji dzięki certyfikacjom i międzynarodowym standardom. Zwiększ wiarygodność i otwórz nowe możliwości biznesowe.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary overflow-hidden">
        <AnimatedSection variant="scale-up" delay={0.1} className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
            Nie wiesz, co wybrać?<br />Skontaktuj się z nami!
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Dopasujemy ofertę do Twoich potrzeb i zaproponujemy najbardziej efektywne rozwiązania dla Twojej firmy.
          </p>
          <ViewTransitionLink
            href="/kontakt"
            className="bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform duration-300 inline-block"
          >
            Bezpłatna konsultacja
          </ViewTransitionLink>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCard({ service, index }: { service: ServiceType, index: number }) {
  return (
    <AnimatedSection variant="fade-up" delay={0.1 * (index % 3)}>
      <div className="bg-card-dark border border-white/10 p-8 hover:border-primary/50 transition-all hover-lift group h-full flex flex-col">
        <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors">
          <span className="material-symbols-outlined text-primary group-hover:text-black text-3xl">{service.icon}</span>
        </div>
        <h3 className="text-xl font-black mb-4 uppercase text-white">{service.title}</h3>
        <p className="text-slate-400 group-hover:text-slate-300 mb-6 font-medium leading-relaxed flex-grow">
          {service.benefit}
        </p>
        <ViewTransitionLink
          href={service.link}
          className="inline-flex items-center gap-2 text-primary group-hover:text-primary font-bold uppercase text-xs tracking-widest mt-auto"
        >
          Dowiedz się więcej <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </ViewTransitionLink>
      </div>
    </AnimatedSection>
  );
}

type ServiceType = {
  title: string;
  benefit: string;
  icon: string;
  link: string;
};

const bhpServices: ServiceType[] = [
  {
    title: "Nadzór BHP",
    benefit: "Zyskaj pewność, że Twoja firma działa zgodnie z prawem. Uniknij kar finansowych i przestojów produkcyjnych dzięki stałemu nadzorowi eksperta.",
    icon: "verified_user",
    link: "/uslugi/bhp"
  },
  {
    title: "Audyty BHP",
    benefit: "Odkryj zagrożenia zanim staną się problemem. Otrzymasz szczegółowy raport z planem działań naprawczych – będziesz wiedział dokładnie, co poprawić.",
    icon: "fact_check",
    link: "/uslugi/bhp"
  },
  {
    title: "Outsourcing BHP",
    benefit: "Zaoszczędź do 40% kosztów w porównaniu do pełnoetatowego specjalisty BHP. Płacisz tylko za rzeczywiste wsparcie, bez dodatkowych obciążeń.",
    icon: "group_work",
    link: "/uslugi/bhp"
  },
  {
    title: "BHP na budowie",
    benefit: "Eliminuj ryzyko wypadków i przestojów na placu budowy. Twoi podwykonawcy będą działać zgodnie z przepisami, a Ty unikniesz odpowiedzialności karnej.",
    icon: "construction",
    link: "/uslugi/bhp"
  },
  {
    title: "Szkolenia BHP",
    benefit: "Twoi pracownicy zdobędą praktyczną wiedzę, która rzeczywiście chroni ich zdrowie. Zapomnij o nudnych prezentacjach – nasze szkolenia są angażujące.",
    icon: "school",
    link: "/szkolenia"
  }
];

const fireServices: ServiceType[] = [
  {
    title: "Instrukcje PPOŻ",
    benefit: "Otrzymasz przejrzyste instrukcje dopasowane do Twojego obiektu. W razie kontroli będziesz mieć wszystko pod ręką, bez stresu.",
    icon: "description",
    link: "/uslugi/ppoz"
  },
  {
    title: "Próbne ewakuacje",
    benefit: "Sprawdź, czy Twój zespół jest gotowy na zagrożenie. Zidentyfikujemy słabe punkty i pokażemy, jak skutecznie ewakuować budynek.",
    icon: "exit_to_app",
    link: "/uslugi/ppoz"
  },
  {
    title: "Przeglądy gaśnic",
    benefit: "Miej pewność, że Twój sprzęt zadziała w krytycznym momencie. Regularne przeglądy to nie tylko obowiązek, ale realna ochrona.",
    icon: "fire_extinguisher",
    link: "/uslugi/ppoz"
  },
  {
    title: "Szkolenia PPOŻ",
    benefit: "Twoi pracownicy będą wiedzieli, jak reagować w przypadku pożaru. Zwiększysz ich pewność siebie i bezpieczeństwo całej firmy.",
    icon: "local_fire_department",
    link: "/uslugi/ppoz"
  }
];

const documentationServices: ServiceType[] = [
  {
    title: "Ocena ryzyka zawodowego",
    benefit: "Poznaj rzeczywiste zagrożenia w Twojej firmie i otrzymaj konkretne rozwiązania. Zabezpieczysz się przed roszczeniami pracowników i karami.",
    icon: "assessment",
    link: "/uslugi/prawo-pracy"
  },
  {
    title: "Instrukcje stanowiskowe",
    benefit: "Twoi pracownicy będą dokładnie wiedzieli, jak bezpiecznie wykonywać swoją pracę. Zmniejszysz ryzyko wypadków i wzrost efektywności.",
    icon: "menu_book",
    link: "/uslugi/prawo-pracy"
  },
  {
    title: "Regulamin pracy",
    benefit: "Ureguluj jasne zasady gry w firmie i uniknij sporów z pracownikami. Otrzymasz dokument zgodny z aktualnym prawem pracy.",
    icon: "gavel",
    link: "/uslugi/prawo-pracy"
  },
  {
    title: "Protokoły powypadkowe",
    benefit: "W razie wypadku będziesz wiedział dokładnie, jak postępować. Unikniesz błędów formalnych i zabezpieczysz swoje interesy.",
    icon: "report",
    link: "/uslugi/prawo-pracy"
  }
];

const measurementServices: ServiceType[] = [
  {
    title: "Pomiary hałasu",
    benefit: "Chroń słuch swoich pracowników i uniknij przyszłych roszczeń. Dowiesz się, gdzie trzeba zastosować ochronniki słuchu.",
    icon: "graphic_eq",
    link: "/uslugi/pomiary"
  },
  {
    title: "Pomiary oświetlenia",
    benefit: "Popraw komfort pracy i zmniejsz zmęczenie wzroku. Pracownicy będą bardziej produktywni, a Ty spełnisz wymogi prawne.",
    icon: "light_mode",
    link: "/uslugi/pomiary"
  },
  {
    title: "Badania UDT",
    benefit: "Uniknij awarii wózków widłowych, suwnic i wind. Regularne badania to gwarancja ciągłości produkcji i bezpieczeństwa.",
    icon: "engineering",
    link: "/uslugi/pomiary"
  },
  {
    title: "Pomiary pyłów",
    benefit: "Zabezpiecz zdrowie pracowników przed pyłami szkodliwymi. Otrzymasz konkretne zalecenia dotyczące wentylacji i środków ochrony.",
    icon: "air",
    link: "/uslugi/pomiary"
  }
];

const specialServices: ServiceType[] = [
  {
    title: "ISO 45001",
    benefit: "Zwiększ wiarygodność firmy i zdobądź przewagę w przetargach. Certyfikat ISO to przepustka do współpracy z międzynarodowymi klientami.",
    icon: "verified",
    link: "/uslugi/specjalne"
  },
  {
    title: "Audyty międzynarodowe",
    benefit: "Spełnij wymagania zagranicznych kontrahentów i otwórz się na nowe rynki. Dostosujemy Twoje procedury do międzynarodowych standardów.",
    icon: "public",
    link: "/uslugi/specjalne"
  },
  {
    title: "Koordynacja wielobranżowa",
    benefit: "Uporządkuj chaos na dużych inwestycjach i budowach. Jeden koordynator zadba o zgodność działań wszystkich wykonawców.",
    icon: "hub",
    link: "/uslugi/specjalne"
  }
];

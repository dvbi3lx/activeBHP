import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: 'Usługi BHP - Kompleksowa Obsługa Bezpieczeństwa',
  description: 'Profesjonalne usługi BHP: audyty, nadzór, doradztwo, outsourcing służby BHP, szkolenia i pełna dokumentacja. Zapewniamy zgodność z przepisami i najwyższe standardy bezpieczeństwa.',
  path: '/uslugi/bhp',
});

export default function BhpServicesPage() {
  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5 pt-20">
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
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Profesjonalne Rozwiązania</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
            USŁUGI <span className="text-primary">BHP</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Zapewniamy kompleksowe wsparcie w obszarze bezpieczeństwa i higieny pracy.
            Nasze rozwiązania gwarantują pełną zgodność z obowiązującymi przepisami prawa pracy i najwyższy standard ochrony Twoich pracowników.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {bhpMainServices.map((service, index) => (
              <div key={index} className={`bg-card-dark p-12 group hover:bg-primary transition-all duration-500 ${service.fullWidth ? 'lg:col-span-2' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="w-16 h-16 flex-shrink-0 bg-primary/10 group-hover:bg-black flex items-center justify-center transition-colors rounded">
                    <span className="material-symbols-outlined text-primary group-hover:text-primary text-4xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-black transition-colors">{service.title}</h3>
                    <p className="text-slate-400 group-hover:text-black/80 mb-8 font-medium transition-colors">
                      {service.description}
                    </p>
                    {service.cta && (
                      <Link href={service.link} className="inline-flex items-center gap-2 text-primary group-hover:text-black font-black uppercase text-xs tracking-widest">
                        {service.cta} <span className="material-symbols-outlined text-sm">north_east</span>
                      </Link>
                    )}
                    {!service.cta && <div className="w-12 h-1 bg-primary group-hover:bg-black transition-colors"></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-24 bg-card-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Formalności pod kontrolą</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
              Dokumentacja <span className="text-outline">BHP</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {docs.map((doc, index) => (
              <div key={index} className="bg-background-dark p-8 border border-white/5 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary mb-6 block text-3xl">{doc.icon}</span>
                <h4 className="text-lg font-black mb-3 uppercase text-white">{doc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none text-center md:text-left">
              Zadbaj o pełną zgodność <br className="hidden md:block"/> z przepisami
            </h2>
            <Link href="/kontakt" className="bg-black text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-2xl flex-shrink-0">
              Zapytaj o ofertę
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const bhpMainServices = [
  {
    title: "Audyty i Kontrole",
    description: "Szczegółowe audyty stanu BHP oraz okresowe kontrole warunków pracy. Identyfikujemy nieprawidłowości i wdrażamy plany naprawcze.",
    icon: "bar_chart",
    link: "/kontakt"
  },
  {
    title: "BHP na budowie",
    description: "Specjalistyczny nadzór nad inwestycjami budowlanymi. Koordynacja bezpieczeństwa, kontrole podwykonawców i szkolenia stanowiskowe.",
    icon: "engineering",
    link: "/kontakt"
  },
  {
    title: "Doradztwo i Nadzór",
    description: "Bieżące konsultacje eksperckie i stały nadzór nad warunkami pracy. Jesteśmy Twoim wsparciem w relacjach z organami kontrolnymi (PIP, PIS).",
    icon: "verified_user",
    link: "/kontakt"
  },
  {
    title: "Outsourcing - Służba BHP",
    description: "Przejęcie obowiązków służby BHP w Twojej firmie. Optymalizacja kosztów przy jednoczesnym wzroście poziomu bezpieczeństwa.",
    icon: "group_work",
    link: "/kontakt"
  },
  {
    title: "Szkolenia BHP",
    description: "Szkolenia wstępne i okresowe dla wszystkich grup zawodowych. Nowoczesne metody przekazywania wiedzy, materiały dydaktyczne i imienne za��wiadczenia.",
    icon: "school",
    link: "/szkolenia",
    cta: "Zobacz harmonogram",
    fullWidth: true
  }
];

const docs = [
  { title: "BIOZ", description: "Plan Bezpieczeństwa i Ochrony Zdrowia dla placu budowy.", icon: "description" },
  { title: "IBWR", description: "Instrukcja Bezpiecznego Wykonania Robót szczególnie niebezpiecznych.", icon: "assignment_turned_in" },
  { title: "Ocena Ryzyka", description: "Kompleksowa Ocena Ryzyka Zawodowego dla każdego stanowiska pracy.", icon: "warning" },
  { title: "Instrukcje BHP", description: "Opracowanie czytelnych instrukcji stanowiskowych i ogólnych.", icon: "menu_book" },
  { title: "Inne dokumenty", description: "Rejestry wypadków, protokoły powypadkowe i inne wymagane prawem pisma.", icon: "folder_shared" }
];

'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Wiadomość została wysłana! Skontaktujemy się z Tobą wkrótce.');
  };

  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Header Section */}
      <header className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-start gap-6 opacity-0-start animate-slide-in-left">
          <div className="w-2 h-20 bg-primary shrink-0"></div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Kontakt i Lokalizacja
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
              Zapewniamy najwyższe standardy bezpieczeństwa i higieny pracy. Skontaktuj się z naszym zespołem doradczym w celu optymalizacji procesów BHP w Twoim przedsiębiorstwie.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-card-dark p-8 border border-white/5 hover:border-primary/50 transition-colors group opacity-0-start animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="flex items-start gap-6">
                <div className="bg-primary p-3 rounded text-black group-hover:scale-110 transition-transform">
                  <span className="material-icons">{info.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">{info.label}</p>
                  <p className="text-2xl font-black italic">{info.value}</p>
                  <p className="text-sm text-gray-500 mt-2 uppercase font-semibold">{info.subtext}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-primary p-8 flex items-center gap-6 group">
            <div className="text-black group-hover:rotate-12 transition-transform">
              <span className="material-icons text-4xl">verified_user</span>
            </div>
            <div>
              <h3 className="text-black italic font-black text-xl uppercase leading-none mb-1">Certyfikowany Partner</h3>
              <p className="text-black/80 text-sm font-medium">Ponad 500 obsłużonych podmiotów gospodarczych w całej Polsce.</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-card-dark p-10 md:p-12 border border-white/10 opacity-0-start animate-fade-in animation-delay-400">
            <h3 className="text-3xl font-black italic uppercase mb-10 tracking-tighter">Formularz Kontaktowy</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Imię i Nazwisko</label>
                  <input required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold focus:border-primary text-white" placeholder="WPISZ DANE" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Telefon</label>
                  <input required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold text-white" placeholder="+48 --- --- ---" type="tel"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Adres E-mail</label>
                <input required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold text-white" placeholder="EMAIL@ADRES.PL" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Twoja wiadomość</label>
                <textarea required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold text-white" placeholder="TREŚĆ ZAPYTANIA..." rows={4}></textarea>
              </div>
              <div className="flex items-start gap-4">
                <input required className="mt-1 rounded border-gray-300 text-primary focus:ring-primary bg-background-dark" id="consent" type="checkbox"/>
                <label className="text-[10px] text-gray-500 leading-relaxed uppercase font-bold" htmlFor="consent">
                  Akceptuję politykę prywatności oraz przetwarzanie moich danych w celu realizacji zapytania przez ActiveBHP.
                </label>
              </div>
              <button className="w-full bg-primary hover:bg-yellow-400 text-black font-black uppercase tracking-widest py-5 flex items-center justify-center gap-3 transition-all" type="submit">
                Wyślij zapytanie
                <span className="material-icons">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)), url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000')" }}>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="absolute -inset-4 bg-primary/20 animate-ping rounded-full"></div>
            <div className="w-16 h-16 bg-primary flex items-center justify-center transform rotate-45 rounded-sm shadow-2xl relative z-10">
              <span className="material-icons text-black text-4xl -rotate-45">location_on</span>
            </div>
          </div>
          <div className="bg-black/90 backdrop-blur-md border-2 border-primary p-6 text-center min-w-[300px]">
            <h4 className="text-primary font-black uppercase text-lg mb-2 italic">ActiveBHP HQ</h4>
            <div className="w-8 h-[1px] bg-primary/50 mx-auto mb-4"></div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">ul. Przemysłowa 44</p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">61-579 Poznań</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/50 pointer-events-none"></div>
      </section>

      <Footer />
    </main>
  );
}

const contactInfo = [
  {
    label: "Infolinia",
    value: "+48 500 600 700",
    icon: "phone_in_talk",
    subtext: "Dostępni: 08:00 - 16:00"
  },
  {
    label: "Zapytania",
    value: "biuro@activebhp.pl",
    icon: "alternate_email",
    subtext: "Szybka odpowiedź: do 2h"
  },
  {
    label: "Siedziba",
    value: "ul. Przemysłowa 44, Poznań",
    icon: "location_on",
    subtext: "Budynek A, Lokal 12"
  }
];

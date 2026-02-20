'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Wystąpił błąd podczas wysyłania' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Wystąpił błąd podczas wysyłania wiadomości' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background-dark text-white">
      <Navbar />

      {/* Header Section */}
      <header className="pt-32 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="w-1 sm:w-2 h-16 sm:h-20 bg-primary shrink-0"></div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4 sm:mb-6">
              Kontakt i Lokalizacja
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
              Zapewniamy najwyższe standardy bezpieczeństwa i higieny pracy. Skontaktuj się z naszym zespołem doradczym w celu optymalizacji procesów BHP w Twoim przedsiębiorstwie.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-card-dark p-6 sm:p-8 border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-primary p-2.5 sm:p-3 rounded text-black group-hover:scale-110 transition-transform shrink-0">
                  <span className="material-icons text-xl sm:text-2xl">{info.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">{info.label}</p>
                  <p className="text-lg sm:text-2xl font-black italic break-words">{info.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2 uppercase font-semibold">{info.subtext}</p>
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
          <div className="bg-card-dark p-6 sm:p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-black italic uppercase mb-6 sm:mb-10 tracking-tighter">Formularz Kontaktowy</h3>
            
            {submitStatus && (
              <div className={`p-4 border-l-4 ${submitStatus.type === 'success' ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500'} mb-6`}>
                <p className={`text-sm font-semibold ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Imię i Nazwisko</label>
                  <input name="name" required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold focus:border-primary text-white" placeholder="WPISZ DANE" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Telefon</label>
                  <input name="phone" required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold text-white" placeholder="+48 --- --- ---" type="tel"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Adres E-mail</label>
                <input name="email" required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold text-white" placeholder="EMAIL@ADRES.PL" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Twoja wiadomość</label>
                <textarea name="message" required className="w-full bg-background-dark border-border-dark px-4 py-4 text-sm font-semibold text-white" placeholder="TREŚĆ ZAPYTANIA..." rows={4}></textarea>
              </div>
              <div className="flex items-start gap-4">
                <input required className="mt-1 rounded border-gray-300 text-primary focus:ring-primary bg-background-dark" id="consent" type="checkbox"/>
                <label className="text-[10px] text-gray-500 leading-relaxed uppercase font-bold" htmlFor="consent">
                  Akceptuję politykę prywatności oraz przetwarzanie moich danych w celu realizacji zapytania przez ActiveBHP.
                </label>
              </div>
              <button 
                className="w-full bg-primary hover:bg-yellow-400 text-black font-black uppercase tracking-widest py-5 flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                <span className="material-icons">{isSubmitting ? 'hourglass_empty' : 'arrow_forward'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="w-full h-[500px] md:h-[600px] grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.8857845671547!2d19.443720776927456!3d51.76935297185033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34f636c5a3a1%3A0x7e92e60aa4a5f8d8!2sPowsta%C5%84c%C3%B3w%20Wielkopolskich%2012%2C%2091-040%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1704897234567!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ActiveBHP - Lokalizacja"
          ></iframe>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-black/95 backdrop-blur-md border-2 border-primary p-6 text-center min-w-[280px] sm:min-w-[320px] pointer-events-auto">
            <h4 className="text-primary font-black uppercase text-lg mb-2 italic">ActiveBHP Łódź</h4>
            <div className="w-8 h-[1px] bg-primary/50 mx-auto mb-4"></div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Powstańców Wielkopolskich 12/lok 28</p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">91-040 Łódź</p>
            <a 
              href="https://www.google.com/maps/dir//Powsta%C5%84c%C3%B3w+Wielkopolskich+12,+91-040+%C5%81%C3%B3d%C5%BA/@51.76935297185033,19.443720776927456,16z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-primary hover:text-yellow-400 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <span className="material-icons text-sm">directions</span>
              Nawiguj
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const contactInfo = [
  {
    label: "Infolinia",
    value: "+48 605 150 608",
    icon: "phone_in_talk",
    subtext: "Dostępni: 08:00 - 16:00"
  },
  {
    label: "Zapytania",
    value: "activebhp@activebhp.pl",
    icon: "alternate_email",
    subtext: "Szybka odpowiedź: do 2h"
  },
  {
    label: "Siedziba",
    value: "Powstańców Wielkopolskich 12/lok 28",
    icon: "location_on",
    subtext: "91-040 Łódź"
  }
];

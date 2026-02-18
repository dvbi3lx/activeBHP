'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: 'Szkolenia Online - Platforma E-learningowa',
  description: 'Już wkrótce - nowoczesna platforma e-learningowa ActiveBHP. Szkolenia BHP dostępne 24/7, stworzone specjalnie dla Twoich potrzeb.',
  path: '/szkolenia-online',
});

export default function TrainingOnlinePage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-card-dark to-background-dark">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary px-6 py-3 mb-8 animate-pulse">
            <span className="material-symbols-outlined text-primary text-xl">schedule</span>
            <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Już Wkrótce</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase">
            Szkolenia Online<br/>
            <span className="text-primary">ActiveBHP</span>
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-xl md:text-2xl mb-6 font-bold leading-relaxed">
            Przygotowujemy dla Ciebie rewolucyjną platformę e-learningową
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-12 font-medium leading-relaxed">
            Tworzymy nowoczesne narzędzie, które zmieni sposób, w jaki szkolisz swój zespół. Zapomnij o nudnych prezentacjach – nasza platforma to prawdziwa edukacja, dostępna 24/7, stworzona specjalnie z myślą o Twoich potrzebach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt" className="bg-primary text-black px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-center">
              Powiadom mnie o starcie
            </Link>
            <a href="#features" className="border-2 border-white text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center">
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Dlaczego warto czekać?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Platforma stworzona <span className="text-primary">dla Ciebie</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Pracujemy nad rozwiązaniem, które naprawdę zrozumie Twoje potrzeby i uczyni szkolenia BHP prostymi, skutecznymi i... przyjemnymi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-card-dark border border-white/10 p-8 hover:border-primary/50 transition-all hover-lift">
                <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-12">
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary text-5xl">info</span>
              <div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase">Tworzymy to razem z Tobą</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  Nasza platforma powstaje w oparciu o realne potrzeby przedsiębiorców i zespołów BHP. Słuchamy Twoich uwag i sugestii, aby stworzyć narzędzie idealnie dopasowane do polskiego rynku.
                </p>
                <p className="text-slate-400 font-medium">
                  Chcesz mieć wpływ na to, jak będzie wyglądała platforma? Skontaktuj się z nami i podziel się swoimi oczekiwaniami!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-yellow-500 p-12 md:p-16 text-center">
              <span className="material-symbols-outlined text-black text-6xl mb-6 inline-block">rocket_launch</span>
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-6">
                Bądź pierwszy, który skorzysta!
              </h2>
              <p className="text-black/80 text-lg font-bold mb-8 max-w-2xl mx-auto">
                Zapisz się na listę oczekujących i otrzymaj specjalną ofertę startową oraz darmowy dostęp do pierwszych szkoleń.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-block bg-black text-primary px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-900 transition-all shadow-2xl"
              >
                Zapisz się na listę
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-background-dark border border-white/10 p-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 block">calendar_month</span>
              <h3 className="text-2xl font-black text-white uppercase mb-4">Planowane uruchomienie</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Intensywnie pracujemy nad każdym detalem, aby platforma była gotowa do użytku już niedługo.
              </p>
              <p className="text-primary font-bold">Spodziewaj się premier w najbliższych miesiącach!</p>
            </div>

            <div className="bg-background-dark border border-white/10 p-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 block">support_agent</span>
              <h3 className="text-2xl font-black text-white uppercase mb-4">Dedykowane wsparcie</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Po uruchomieniu platformy zapewnimy pełne wsparcie techniczne i merytoryczne dla wszystkich użytkowników.
              </p>
              <p className="text-primary font-bold">Zawsze dostępni, gdy potrzebujesz pomocy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background-dark">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Masz pytania?</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-8 tracking-tighter text-white">
            Porozmawiajmy o <span className="text-primary">Twoich potrzebach</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o platformie, zadać pytania lub zgłosić swoje sugestie. Twoja opinia ma dla nas ogromne znaczenie!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/kontakt" className="bg-primary text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-colors w-full sm:w-auto shadow-2xl text-center">
              Skontaktuj się z nami
            </Link>
            <Link href="/o-firmie" className="border-2 border-white text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center">
              Poznaj ActiveBHP
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const features = [
  {
    icon: "devices",
    title: "Dostęp 24/7",
    description: "Ucz się kiedy chcesz i gdzie chcesz. Nasza platforma będzie działać na komputerze, tablecie i smartfonie – zawsze pod ręką."
  },
  {
    icon: "school",
    title: "Praktyczna wiedza",
    description: "Zapomnij o nudnych slajdach. Interaktywne szkolenia z przykładami z prawdziwego życia, które naprawdę uczą i angażują."
  },
  {
    icon: "workspace_premium",
    title: "Certyfikaty UE",
    description: "Po ukończeniu szkolenia otrzymasz certyfikat uznawany w całej Unii Europejskiej – wszystko zgodne z obowiązującymi przepisami."
  },
  {
    icon: "speed",
    title: "Oszczędność czasu",
    description: "Twój zespół może szkolić się bez oderwania od pracy. Elastyczny harmonogram dopasowany do Twoich potrzeb biznesowych."
  },
  {
    icon: "savings",
    title: "Niższe koszty",
    description: "E-learning to oszczędność na wynajmie sal, materiałach szkoleniowych i czasie dojazdu. Więcej możliwości za mniej pieniędzy."
  },
  {
    icon: "query_stats",
    title: "Monitoring postępów",
    description: "Zawsze będziesz wiedział, kto ukończył szkolenie, a kto potrzebuje wsparcia. Przejrzyste raporty i statystyki dostępne na żądanie."
  }
];

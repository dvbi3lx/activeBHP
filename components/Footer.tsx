import Link from 'next/link';
import ViewTransitionLink from './ViewTransitionLink';

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div>
              <img
                src="/logo.jpg"
                alt="ActiveBHP Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Lider w branży bezpieczeństwa i higieny pracy. Dostarczamy najwyższej jakości rozwiązania dla nowoczesnego przemysłu i biznesu w Polsce.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Nawigacja</h4>
            <ul className="space-y-4">
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/">Strona Główna</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/o-firmie">O firmie</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/bhp">Usługi</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/szkolenia">Szkolenia</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/kontakt">Kontakt</ViewTransitionLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Nasze Usługi</h4>
            <ul className="space-y-4">
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/bhp">Nadzór BHP</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/szkolenia">Szkolenia BHP</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/ppoz">Ochrona PPOŻ</ViewTransitionLink></li>
              <li><ViewTransitionLink className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/prawo-pracy">Dokumentacja</ViewTransitionLink></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Kontakt</h4>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Napisz do nas</p>
                <p className="text-sm font-bold text-white">activebhp@activebhp.pl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl">phone_in_talk</span>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Zadzwoń</p>
                <p className="text-sm font-bold text-white">+48 605 150 608</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Adres</p>
                <p className="text-sm font-bold text-white">Powstańców Wielkopolskich 12/lok 28</p>
                <p className="text-xs text-slate-400">91-040 Łódź</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            © ACTIVEBHP. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8">
            <Link className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors" href="/polityka-prywatnosci">Polityka prywatności</Link>
            <Link className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors" href="/regulamin">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

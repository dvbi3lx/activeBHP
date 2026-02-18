import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6 opacity-0-start animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-black text-sm font-bold">shield</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">Active<span className="text-primary">BHP</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Lider w branży bezpieczeństwa i higieny pracy. Dostarczamy najwyższej jakości rozwiązania dla nowoczesnego przemysłu i biznesu w Polsce.
            </p>
          </div>

          <div className="opacity-0-start animate-fade-in-up animation-delay-200">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Nawigacja</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/">Strona Główna</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/o-firmie">O firmie</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/bhp">Usługi</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/szkolenia">Szkolenia</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="opacity-0-start animate-fade-in-up animation-delay-300">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Nasze Usługi</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/bhp">Nadzór BHP</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/szkolenia">Szkolenia BHP</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/ppoz">Ochrona PPOŻ</Link></li>
              <li><Link className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/uslugi/prawo-pracy">Dokumentacja</Link></li>
            </ul>
          </div>

          <div className="space-y-8 opacity-0-start animate-fade-in-up animation-delay-400">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Kontakt</h4>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Napisz do nas</p>
                <p className="text-sm font-bold text-white">kontakt@activebhp.pl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl">phone_in_talk</span>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Zadzwoń</p>
                <p className="text-sm font-bold text-white">+48 500 000 000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            © 2024 ACTIVEBHP SOLUTIONS. Wszystkie prawa zastrzeżone.
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

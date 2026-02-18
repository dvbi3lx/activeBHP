import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-black font-bold">shield</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">Active<span className="text-primary">BHP</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/">Strona Główna</Link>
            <Link className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/o-firmie">O firmie</Link>

            <div className="relative group/menu">
              <Link className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1" href="/uslugi/bhp">
                Usługi <span className="material-symbols-outlined text-xs">expand_more</span>
              </Link>
              <div className="absolute top-full left-0 pt-4 hidden group-hover/menu:block min-w-[200px]">
                <div className="bg-card-dark border border-white/10 p-4 space-y-4 shadow-2xl">
                  <Link href="/uslugi/bhp" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Obsługa BHP</Link>
                  <Link href="/uslugi/ppoz" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Ochrona PPOŻ</Link>
                  <Link href="/uslugi/prawo-pracy" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Prawo Pracy</Link>
                  <Link href="/uslugi/pomiary" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Pomiary i UDT</Link>
                  <Link href="/uslugi/specjalne" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Usługi Specjalne</Link>
                </div>
              </div>
            </div>

            <Link className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/szkolenia">Szkolenia</Link>
            <Link className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/kontakt">Kontakt</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/kontakt" className="bg-primary text-black px-6 py-3 font-bold text-[11px] uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg shadow-primary/10">
              Bezpłatny Audyt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

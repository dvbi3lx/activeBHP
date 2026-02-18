'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ViewTransitionLink from './ViewTransitionLink';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <ViewTransitionLink href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-black font-bold">shield</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">Active<span className="text-primary">BHP</span></span>
          </ViewTransitionLink>

          <div className="hidden md:flex items-center space-x-8">
            <ViewTransitionLink className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`} href="/">Strona Główna</ViewTransitionLink>
            <ViewTransitionLink className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === '/o-firmie' ? 'text-primary' : ''}`} href="/o-firmie">O firmie</ViewTransitionLink>

            <div className="relative group/menu">
              <ViewTransitionLink className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1" href="/uslugi">
                Usługi <span className="material-symbols-outlined text-xs">expand_more</span>
              </ViewTransitionLink>
              <div className="absolute top-full left-0 pt-4 hidden group-hover/menu:block min-w-[200px]">
                <div className="bg-card-dark border border-white/10 p-4 space-y-4 shadow-2xl">
                  <ViewTransitionLink href="/uslugi" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Wszystkie Usługi</ViewTransitionLink>
                  <div className="h-px bg-white/10 my-2"></div>
                  <ViewTransitionLink href="/uslugi/bhp" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Obsługa BHP</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/ppoz" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Ochrona PPOŻ</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/prawo-pracy" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Prawo Pracy</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/pomiary" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Pomiary i UDT</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/specjalne" className="block text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Usługi Specjalne</ViewTransitionLink>
                </div>
              </div>
            </div>

            <ViewTransitionLink className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === '/szkolenia' ? 'text-primary' : ''}`} href="/szkolenia">Szkolenia</ViewTransitionLink>
            <ViewTransitionLink className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === '/kontakt' ? 'text-primary' : ''}`} href="/kontakt">Kontakt</ViewTransitionLink>
          </div>

          <div className="flex items-center gap-4">
            <ViewTransitionLink href="/kontakt" className="bg-primary text-black px-6 py-3 font-bold text-[11px] uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg shadow-primary/10">
              Bezpłatny Audyt
            </ViewTransitionLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ViewTransitionLink from './ViewTransitionLink';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <ViewTransitionLink href="/" className="flex items-center group">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215412_cbb1c9d9-5e26-4a85-a625-8f43d85b5e9a-MkFTv4PSzPqNpZ0bwRf6gKuTgDiteQ.jpeg" 
              alt="ActiveBHP Logo" 
              className="h-12 w-auto group-hover:opacity-90 transition-opacity"
            />
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
            <ViewTransitionLink className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === '/szkolenia-online' ? 'text-primary' : ''}`} href="/szkolenia-online">Szkolenia Online</ViewTransitionLink>
            <ViewTransitionLink className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === '/kontakt' ? 'text-primary' : ''}`} href="/kontakt">Kontakt</ViewTransitionLink>
          </div>

          <div className="flex items-center gap-4">
            <ViewTransitionLink href="/kontakt" className="hidden sm:block bg-primary text-black px-6 py-3 font-bold text-[11px] uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg shadow-primary/10">
              Bezpłatny Audyt
            </ViewTransitionLink>
            
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-background-dark/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <ViewTransitionLink 
                className={`block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 ${pathname === '/' ? 'text-primary' : 'text-white'}`} 
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Strona Główna
              </ViewTransitionLink>
              <ViewTransitionLink 
                className={`block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 ${pathname === '/o-firmie' ? 'text-primary' : 'text-white'}`} 
                href="/o-firmie"
                onClick={() => setMobileMenuOpen(false)}
              >
                O firmie
              </ViewTransitionLink>
              
              <div className="space-y-2">
                <ViewTransitionLink 
                  className="block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 text-white" 
                  href="/uslugi"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Usługi
                </ViewTransitionLink>
                <div className="pl-4 space-y-2">
                  <ViewTransitionLink href="/uslugi/bhp" className="block text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors py-1.5 text-slate-400" onClick={() => setMobileMenuOpen(false)}>Obsługa BHP</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/ppoz" className="block text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors py-1.5 text-slate-400" onClick={() => setMobileMenuOpen(false)}>Ochrona PPOŻ</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/prawo-pracy" className="block text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors py-1.5 text-slate-400" onClick={() => setMobileMenuOpen(false)}>Prawo Pracy</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/pomiary" className="block text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors py-1.5 text-slate-400" onClick={() => setMobileMenuOpen(false)}>Pomiary i UDT</ViewTransitionLink>
                  <ViewTransitionLink href="/uslugi/specjalne" className="block text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors py-1.5 text-slate-400" onClick={() => setMobileMenuOpen(false)}>Usługi Specjalne</ViewTransitionLink>
                </div>
              </div>

              <ViewTransitionLink 
                className={`block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 ${pathname === '/szkolenia' ? 'text-primary' : 'text-white'}`} 
                href="/szkolenia"
                onClick={() => setMobileMenuOpen(false)}
              >
                Szkolenia
              </ViewTransitionLink>
              <ViewTransitionLink 
                className={`block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 ${pathname === '/szkolenia-online' ? 'text-primary' : 'text-white'}`} 
                href="/szkolenia-online"
                onClick={() => setMobileMenuOpen(false)}
              >
                Szkolenia Online
              </ViewTransitionLink>
              <ViewTransitionLink 
                className={`block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 ${pathname === '/kontakt' ? 'text-primary' : 'text-white'}`} 
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </ViewTransitionLink>
              
              <ViewTransitionLink 
                href="/kontakt" 
                className="block w-full bg-primary text-black px-6 py-4 font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bezpłatny Audyt
              </ViewTransitionLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('activebhp_loader_seen');
    
    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('activebhp_loader_seen', 'true');
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-background-dark flex items-center justify-center">
      <div className="max-w-3xl w-full px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260220_215412_cbb1c9d9-5e26-4a85-a625-8f43d85b5e9a-MkFTv4PSzPqNpZ0bwRf6gKuTgDiteQ.jpeg" 
            alt="ActiveBHP Logo" 
            className="h-32 w-auto"
          />
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-3 bg-white/10 mb-8 overflow-hidden rounded-full">
          <div 
            className="absolute inset-y-0 left-0 bg-primary transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-4 animate-fade-in animation-delay-200">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
            Przygotowujemy dla Ciebie <span className="text-primary">bezpieczne</span> rozwiązania
          </h2>
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-2xl mx-auto">
            Twój spokój i bezpieczeństwo Twojego zespołu to nasza misja. 
            Za chwilę przekonasz się, jak proste może być zapewnienie pełnej zgodności z przepisami BHP.
          </p>
        </div>

        {/* Spinning Icon */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center animate-fade-in animation-delay-400">
          <div>
            <div className="text-3xl font-black text-primary mb-2">10+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Lat doświadczenia</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-2">500+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Zadowolonych firm</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-2">100%</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Zgodność z prawem</div>
          </div>
        </div>
      </div>
    </div>
  );
}

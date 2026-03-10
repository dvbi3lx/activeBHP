'use client';

import { useEffect, useState } from 'react';

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-background-dark flex items-center justify-center">
      <div className="max-w-2xl px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12">
          <img
            src="/logo.jpg?v=6"
            alt="ActiveBHP Logo"
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-white/10 mb-8 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
            Przygotowujemy dla Ciebie <span className="text-primary">bezpieczne</span> rozwiązania
          </h2>
          <p className="text-slate-400 font-medium text-sm md:text-base">
            Twój spokój i bezpieczeństwo Twojego zespołu to nasza misja. Za chwilę przekonasz się, jak proste może być zapewnienie pełnej zgodności z przepisami BHP.
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
}

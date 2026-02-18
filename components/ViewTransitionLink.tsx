'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ViewTransitionLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  href: string;
}

export default function ViewTransitionLink({ 
  children, 
  href, 
  ...props 
}: ViewTransitionLinkProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('page-transitioning');
      setIsLoading(true);
      
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }, 300);
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-background-dark flex items-center justify-center animate-fade-in">
          <div className="max-w-2xl px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-primary flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-black font-bold text-3xl">shield</span>
              </div>
              <span className="text-4xl font-black tracking-tighter text-white uppercase">Active<span className="text-primary">BHP</span></span>
            </div>
            <div className="relative w-full h-2 bg-white/10 mb-6 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 left-0 bg-primary w-full animate-pulse" />
            </div>
            <h2 className="text-xl md:text-3xl font-black uppercase text-white tracking-tight mb-3">
              Ładowanie <span className="text-primary">bezpiecznych</span> rozwiązań
            </h2>
            <p className="text-slate-400 font-medium text-sm">
              Twój spokój i bezpieczeństwo to nasza misja
            </p>
          </div>
        </div>
      )}
      <Link href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    </>
  );
}

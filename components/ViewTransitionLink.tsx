'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default navigation
    e.preventDefault();

    // Check if browser supports View Transitions API
    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        startTransition(() => {
          router.push(href);
        });
      });
    } else {
      // Fallback: Manual CSS animation
      const main = document.querySelector('main');
      if (main) {
        main.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
          router.push(href);
        }, 300);
      } else {
        router.push(href);
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

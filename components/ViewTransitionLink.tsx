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
    e.preventDefault();

    // Check if browser supports View Transitions API
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        startTransition(() => {
          router.push(href);
        });
      });
    } else {
      // Fallback to instant navigation
      startTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('page-transitioning');
      
      setTimeout(() => {
        router.push(href);
      }, 250);
    } else {
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

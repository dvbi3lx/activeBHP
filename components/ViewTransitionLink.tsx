'use client';

import Link from 'next/link';

interface ViewTransitionLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  href: string;
}

export default function ViewTransitionLink({ 
  children, 
  href, 
  ...props 
}: ViewTransitionLinkProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

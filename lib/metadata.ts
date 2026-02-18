import type { Metadata } from "next";

export const baseMetadata = {
  metadataBase: new URL('https://activebhp.pl'),
  applicationName: 'ActiveBHP',
  referrer: 'origin-when-cross-origin' as const,
  keywords: ['bhp', 'szkolenia bhp', 'bezpieczeństwo i higiena pracy', 'ochrona przeciwpożarowa', 'ppoż', 'audyty bhp', 'pierwsza pomoc', 'szkolenia udt', 'prawo pracy', 'dokumentacja bhp', 'nadzór bhp'],
  authors: [{ name: 'ActiveBHP' }],
  creator: 'ActiveBHP',
  publisher: 'ActiveBHP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'ActiveBHP',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
};

export function createMetadata({
  title,
  description,
  path = '/',
  image = '/og-image.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `https://activebhp.pl${path}`;
  
  return {
    title: `${title} | ActiveBHP - Eksperci Bezpieczeństwa`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${title} | ActiveBHP`,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${title} | ActiveBHP`,
      description,
      images: [image],
    },
  };
}

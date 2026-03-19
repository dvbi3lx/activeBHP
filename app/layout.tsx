import type { Metadata, Viewport } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import InitialLoader from "@/components/InitialLoader";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: 'ActiveBHP - Eksperci Bezpieczeństwa i Higieny Pracy',
    template: '%s | ActiveBHP',
  },
  description: "Profesjonalne usługi BHP, PPOŻ i szkolenia. Audyty, dokumentacja, stały nadzór. Ponad 10 lat doświadczenia w branży bezpieczeństwa przemysłowego.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFD700',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* For screens using material-icons-outlined */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${publicSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <InitialLoader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ActiveBHP',
              description: 'Profesjonalne usługi BHP, PPOŻ i szkolenia',
              url: 'https://activebhp.pl',
              logo: 'https://activebhp.pl/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+48-605-150-608',
                contactType: 'customer service',
                areaServed: 'PL',
                availableLanguage: 'Polish',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Powstańców Wielkopolskich 12/lok 28',
                addressLocality: 'Łódź',
                postalCode: '91-040',
                addressCountry: 'PL',
              },
              sameAs: [
                'https://facebook.com/activebhp',
                'https://linkedin.com/company/activebhp',
              ],
            }),
          }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

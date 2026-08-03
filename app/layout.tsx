import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import KitSlideIn from "@/components/KitSlideIn";

export const metadata: Metadata = {
  metadataBase: new URL("https://medicareinfopro.com"),
  title: {
    default: "Medicare Information Pro | Understand Your Medicare Options",
    template: "%s | Medicare Information Pro",
  },
  description: "Expert Medicare guidance to help you understand your options, avoid costly mistakes, and choose the right coverage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Medicare Information Pro",
    title: "Medicare Information Pro | Understand Your Medicare Options",
    description: "Expert Medicare guidance to help you understand your options, avoid costly mistakes, and choose the right coverage.",
    url: "https://medicareinfopro.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Information Pro | Understand Your Medicare Options",
    description: "Expert Medicare guidance to help you understand your options, avoid costly mistakes, and choose the right coverage.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "InsuranceAgency"],
  "@id": "https://medicareinfopro.com/#organization",
  name: "Medicare Information Pro",
  url: "https://medicareinfopro.com",
  logo: "https://medicareinfopro.com/apple-touch-icon.png",
  description:
    "Medicare Information Pro provides expert Medicare guidance to Florida residents, helping seniors understand their options and choose the right coverage.",
  telephone: "+18136995559",
  email: "info@medicareinfopro.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brandon",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Tampa" },
    { "@type": "City", name: "Riverview" },
    { "@type": "City", name: "Apollo Beach" },
    { "@type": "City", name: "Sun City Center" },
    { "@type": "City", name: "Valrico" },
    { "@type": "City", name: "Plant City" },
  ],
  sameAs: [
    "https://www.facebook.com/medicareinfopro",
  ],
  knowsAbout: [
    "Medicare Advantage",
    "Medicare Supplement",
    "Medicare Part D",
    "Medicare Enrollment",
    "Medigap",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QQ0LVJ9MH5"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QQ0LVJ9MH5');
        `}
      </Script>
      <body>
        {children}
        <KitSlideIn />
      </body>
    </html>
  );
}

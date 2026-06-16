import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

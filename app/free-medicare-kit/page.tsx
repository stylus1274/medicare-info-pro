import type { Metadata } from "next";
import FreeMedicareKitClient from "./FreeMedicareKitClient";

export const metadata: Metadata = {
  title: "Free Personalized Medicare Decision Kit | Medicare Information Pro",
  description:
    "Download your free 14-page personalized Medicare Decision Kit. Enter your date of birth and get your exact enrollment deadlines, coverage comparison, and a personalized action plan as an instant PDF.",
  openGraph: {
    title: "Free Personalized Medicare Decision Kit",
    description:
      "Get your exact Medicare enrollment dates, coverage comparison, and personalized action plan in a free 14-page PDF. Built around your birthday.",
    url: "https://medicareinfopro.com/free-medicare-kit",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Personalized Medicare Decision Kit | Medicare Information Pro",
  url: "https://medicareinfopro.com/free-medicare-kit",
  description:
    "Download a free 14-page personalized Medicare Decision Kit with your exact enrollment deadlines and a personalized action plan.",
  isPartOf: {
    "@id": "https://medicareinfopro.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free personalized Medicare Decision Kit PDF download",
  },
} as const;

export default function FreeMedicareKitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <FreeMedicareKitClient />
    </>
  );
}

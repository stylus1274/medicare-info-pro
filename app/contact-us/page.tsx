import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact Us | Medicare Information Project | Brandon, FL",
  "url": "https://medicareinfopro.com/contact-us",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Contact the Medicare Information Project in Brandon, FL. Call 813-699-5559 or send a message to speak with a licensed Medicare advisor serving Brandon, Riverview, Valrico, and all of Hillsborough County."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us | Medicare Information Project | Brandon, FL",
  description:
    "Contact the Medicare Information Project in Brandon, FL. Call 813-699-5559 or send a message to speak with a licensed Medicare advisor serving Brandon, Riverview, Valrico, and all of Hillsborough County.",
  keywords: [
    "contact Medicare Information Project",
    "Medicare advisor Brandon FL",
    "Medicare help Hillsborough County",
    "Medicare agent contact",
    "Medicare insurance Brandon Florida",
    "contact Medicare agent Riverview Valrico",
  ],
  openGraph: {
    title: "Contact Us | Medicare Information Project | Brandon, FL",
    description: "Contact the Medicare Information Project in Brandon, FL. Licensed advisors serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/contact-us/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Medicare Information Project",
    description: "Contact the Medicare Information Project in Brandon, FL. Call 813-699-5559.",
  },
  alternates: { canonical: "https://medicareinfopro.com/contact-us/" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <ContactClient />
    </>
  );
}

import type { Metadata } from "next";
import PartBBrandonClient from "./PartBBrandonClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Part B Assistance in Brandon, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-part-b-assistance-in-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Get expert Medicare Part B guidance in Brandon, FL. Enrollment help, cost management, benefits maximization, and personalized support from licensed local agents.",
  "about": {
    "@type": "MedicalCondition",
    "name": "Medicare"
  },
  "audience": {
    "@type": "Patient"
  }
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-part-b-assistance-in-brandon#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Brandon, FL.",
  "url": "https://medicareinfopro.com/medicare-part-b-assistance-in-brandon",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Brandon"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Part B Assistance in Brandon, FL | Medicare Information Project",
  description:
    "Get expert Medicare Part B guidance in Brandon, FL. Enrollment help, cost management, benefits maximization, and personalized support from licensed local agents.",
  keywords: [
    "Medicare Part B Brandon FL",
    "Medicare Part B assistance Brandon",
    "Medicare enrollment Brandon Florida",
    "Medicare Part B costs Brandon",
    "Medicare agent Brandon FL",
    "Medicare Information Project Brandon",
  ],
  openGraph: {
    title: "Medicare Part B Assistance in Brandon, FL",
    description:
      "Expert Medicare Part B enrollment, cost management, and benefits guidance for Brandon, FL residents. Free consultations from licensed local agents.",
    url: "https://medicareinfopro.com/medicare-part-b-assistance-in-brandon",
    type: "website",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-part-b-assistance-in-brandon",
  },
};

export default function PartBBrandonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <PartBBrandonClient />
    </>
  );
}

import type { Metadata } from "next";
import SNPPlansClient from "./SNPPlansClient";
import { SNP_DESCRIPTION, SNP_FAQS, SNP_REVIEWED, SNP_TITLE, SNP_URL } from "./SNPContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: `${SNP_TITLE} | MIP` },
  description: SNP_DESCRIPTION,
  alternates: { canonical: SNP_URL },
  openGraph: {
    title: SNP_TITLE,
    description: SNP_DESCRIPTION,
    url: SNP_URL,
    siteName: "Medicare Information Project",
    type: "article",
    modifiedTime: SNP_REVIEWED,
  },
  twitter: { card: "summary_large_image", title: SNP_TITLE, description: SNP_DESCRIPTION },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SNP_URL}#webpage`,
  name: SNP_TITLE,
  url: SNP_URL,
  description: SNP_DESCRIPTION,
  dateModified: SNP_REVIEWED,
  lastReviewed: SNP_REVIEWED,
  isPartOf: { "@id": "https://medicareinfopro.com/#website" },
  publisher: { "@id": "https://medicareinfopro.com/#organization" },
  about: { "@type": "Thing", name: "Medicare Special Needs Plans" },
  spatialCoverage: { "@type": "AdministrativeArea", name: "Hillsborough County, Florida" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SNP_URL}#faq`,
  mainEntity: SNP_FAQS.map(({ question, answer }) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function SNPPlansPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    <SNPPlansClient />
  </>;
}

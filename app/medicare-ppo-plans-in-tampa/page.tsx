import type { Metadata } from "next";
import PPOPlansClient from "./PPOPlansClient";
import { PPO_DESCRIPTION, PPO_FAQS, PPO_REVIEWED, PPO_TITLE, PPO_URL } from "./PPOContent";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { absolute: `${PPO_TITLE} | 2027 Options | MIP` },
  description: PPO_DESCRIPTION,
  alternates: { canonical: PPO_URL },
  openGraph: { title: `${PPO_TITLE}: 2027 Options`, description: PPO_DESCRIPTION, url: PPO_URL, type: "article", modifiedTime: PPO_REVIEWED, siteName: "Medicare Information Project" },
  twitter: { card: "summary_large_image", title: `${PPO_TITLE}: 2027 Options`, description: PPO_DESCRIPTION },
};
const webpageSchema = {
  "@context": "https://schema.org", "@type": "WebPage", "@id": `${PPO_URL}#webpage`,
  name: PPO_TITLE, url: PPO_URL, description: PPO_DESCRIPTION,
  dateModified: PPO_REVIEWED, lastReviewed: PPO_REVIEWED,
  isPartOf: { "@id": "https://medicareinfopro.com/#website" },
  publisher: { "@id": "https://medicareinfopro.com/#organization" },
  about: { "@type": "Thing", name: "Medicare Advantage PPO plans" },
  spatialCoverage: { "@type": "AdministrativeArea", name: "Hillsborough County, Florida" },
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage", "@id": `${PPO_URL}#faq`,
  mainEntity: PPO_FAQS.map(({ question, answer }) => ({
    "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
export default function PPOPlansPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    <PPOPlansClient />
  </>;
}

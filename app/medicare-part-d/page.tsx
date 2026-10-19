import type { Metadata } from "next";
import MedicarePartDClient from "./MedicarePartDClient";
import { PART_D_FAQS } from "./content";

const URL = "https://medicareinfopro.com/medicare-part-d/";
const TITLE = "Medicare Part D Coverage and Costs in Brandon, FL | MIP";
const DESCRIPTION = "Review Medicare Part D coverage, 2026 and 2027 costs, pharmacies, and Extra Help. Get prescription plan comparison help in Brandon, FL.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESCRIPTION,
  alternates: { canonical: URL }, robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: "Medicare Information Project", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  const schema = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${URL}#webpage`, name: TITLE, description: DESCRIPTION, url: URL, dateModified: "2026-10-19", publisher: { "@id": "https://medicareinfopro.com/#organization" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: PART_D_FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><MedicarePartDClient /></>;
}

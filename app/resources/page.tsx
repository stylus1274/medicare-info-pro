import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesClient from "./ResourcesClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Resources: Guides, FAQs & Tools | Medicare Information Pro",
  "url": "https://medicareinfopro.com/resources",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Browse 200+ Medicare guides, FAQs, and free tools covering enrollment, costs, plan comparisons, and coverage. Written and reviewed by licensed Medicare specialists in Florida."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Resources: Guides, FAQs & Tools | Medicare Information Pro",
  description:
    "Browse 200+ Medicare guides, FAQs, and free tools covering enrollment, costs, plan comparisons, and coverage. Written and reviewed by licensed Medicare specialists in Florida.",
  keywords: [
    "Medicare resources",
    "Medicare guides",
    "Medicare FAQ",
    "Medicare tools",
    "Medicare enrollment guide",
    "Medicare costs 2026",
    "Medicare Advantage guide",
    "Medigap guide Florida",
  ],
  openGraph: {
    title: "Medicare Resources: Guides, FAQs & Tools | Medicare Information Pro",
    description:
      "Browse 200+ Medicare guides, FAQs, and free tools covering enrollment, costs, plan comparisons, and coverage.",
    url: "https://medicareinfopro.com/resources",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
        width: 1080,
        height: 675,
        alt: "Medicare resources and guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Resources: Guides, FAQs & Tools | Medicare Information Pro",
    description:
      "Browse 200+ Medicare guides, FAQs, and free tools covering enrollment, costs, plan comparisons, and coverage.",
    images: ["https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Header />
      <main id="main-content">
        <ResourcesClient />
      </main>
      <Footer />
    </>
  );
}

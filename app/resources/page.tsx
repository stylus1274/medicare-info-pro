import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesClient from "./ResourcesClient";

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
    url: "https://medicare-info-pro.vercel.app/resources",
    type: "website",
    images: [
      {
        url: "https://medicareinfopro.com/wp-content/uploads/2026/02/medicare-advisor-talking-to-elder-client-1080x675.jpg",
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
    images: ["https://medicareinfopro.com/wp-content/uploads/2026/02/medicare-advisor-talking-to-elder-client-1080x675.jpg"],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ResourcesClient />
      </main>
      <Footer />
    </>
  );
}

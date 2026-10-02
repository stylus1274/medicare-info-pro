import type { Metadata } from "next";
import HomepageV3 from "./HomepageV3";

export const metadata: Metadata = {
  title: { absolute: "Medicare Insurance Agents in Brandon, FL | MIP" },
  description: "Compare Medicare Advantage, Medigap and Part D with independent agents in Brandon, FL. No-cost consultations by appointment, phone or video.",
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: "/homepage-preview-v3/" },
  openGraph: { title: "Medicare Insurance Agents in Brandon, FL | MIP", description: "Independent Medicare guidance from our Brandon office.", url: "/homepage-preview-v3/" },
  twitter: { card: "summary", title: "Medicare Insurance Agents in Brandon, FL | MIP", description: "Independent Medicare guidance from our Brandon office." },
};

export default function HomepagePreviewV3() {
  return <HomepageV3 preview />;
}

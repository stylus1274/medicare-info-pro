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

export default async function HomepagePreviewV3({ searchParams }: {
  searchParams: Promise<{ launchCheck?: string }>;
}) {
  const { launchCheck } = await searchParams;
  if (launchCheck === "phone" || launchCheck === "tablet") {
    const width = launchCheck === "phone" ? 390 : 768;
    return <main style={{ padding: 24, background: "#e5e7eb" }}>
      <h1 style={{ color: "#0d1f5c", marginBottom: 16 }}>Homepage Layout Check: {width}px</h1>
      <iframe title="Homepage responsive preview" src="/homepage-preview-v3/" style={{ width, height: 844, border: "1px solid #9ca3af", background: "white" }} />
    </main>;
  }
  return <HomepageV3 preview />;
}

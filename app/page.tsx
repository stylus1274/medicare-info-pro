import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Expert Medicare Insurance Consultant | Brandon & Tampa",
  description: "Get expert Medicare guidance in Brandon & Tampa, FL. Speak with licensed agents about Medicare Advantage, Supplement, and Part D plans. Free consultations available.",
  alternates: {
    canonical: "https://medicareinfopro.com/",
  },
  openGraph: {
    title: "Expert Medicare Insurance Consultant | Brandon & Tampa",
    description: "Get expert Medicare guidance in Brandon & Tampa, FL. Speak with licensed agents about Medicare Advantage, Supplement, and Part D plans. Free consultations available.",
    url: "https://medicareinfopro.com/",
    siteName: "Medicare Information Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Medicare Insurance Consultant | Brandon & Tampa",
    description: "Get expert Medicare guidance in Brandon & Tampa, FL. Speak with licensed agents about Medicare Advantage, Supplement, and Part D plans. Free consultations available.",
  },
};

export default function Page() {
  return <HomeClient />;
}

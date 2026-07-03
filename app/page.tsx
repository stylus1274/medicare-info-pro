import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Medicare Information Pro | Expert Medicare Help in Tampa Bay, FL",
  description: "Get expert Medicare guidance from licensed specialists in Tampa Bay, Florida. Compare Medicare Advantage, Supplement, and Part D plans. Free consultations available.",
  alternates: {
    canonical: "https://medicareinfopro.com/",
  },
  openGraph: {
    title: "Medicare Information Pro | Expert Medicare Help in Tampa Bay, FL",
    description: "Get expert Medicare guidance from licensed specialists in Tampa Bay, Florida. Compare Medicare Advantage, Supplement, and Part D plans. Free consultations available.",
    url: "https://medicareinfopro.com/",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}

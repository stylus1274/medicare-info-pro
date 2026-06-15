import type { Metadata } from "next";
import CoverageQAClient from "./CoverageQAClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover That? Coverage Q&A Center | Medicare Information Pro",
  description:
    "Search our Medicare coverage guide to find out what Medicare covers in 2026: dental, vision, hearing aids, prescriptions, mental health, home care, equipment, and more.",
  keywords: [
    "does Medicare cover dental",
    "does Medicare cover hearing aids",
    "Medicare coverage guide 2026",
    "Medicare coverage center",
    "what does Medicare cover",
    "Medicare Part B coverage",
    "Medicare Advantage extra benefits",
    "Medicare DME coverage",
    "Medicare mental health coverage",
  ],
  openGraph: {
    title: "Does Medicare Cover That? Coverage Q&A Center",
    description:
      "Search our Medicare coverage guide to find out what Medicare covers in 2026: dental, vision, hearing aids, prescriptions, mental health, home care, and more.",
    url: "https://medicare-info-pro.vercel.app/coverage-qa",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare coverage guide: does Medicare cover that?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover That? Coverage Q&A Center",
    description:
      "Search our Medicare coverage guide to find out what Medicare covers in 2026.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage-qa",
  },
};

export default function CoverageQAPage() {
  return <CoverageQAClient />;
}

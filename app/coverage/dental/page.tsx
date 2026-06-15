import type { Metadata } from "next";
import DentalCoverageClient from "./DentalCoverageClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Dental Care? | Medicare Information Project",
  description:
    "Original Medicare covers almost no routine dental care. Learn what is and isn't covered, how Medicare Advantage dental benefits work, and your options for filling the gap.",
  keywords: [
    "does Medicare cover dental",
    "Medicare dental coverage",
    "Medicare Advantage dental benefits",
    "Medicare routine dental",
    "Medicare dentures coverage",
    "Medicare dental implants",
    "standalone dental plan Medicare",
    "Medicare dental 2025",
  ],
  openGraph: {
    title: "Does Medicare Cover Dental Care?",
    description:
      "Original Medicare covers almost no routine dental care. Learn what is and isn't covered and how to fill the gap with Medicare Advantage or a standalone dental plan.",
    url: "https://medicare-info-pro.vercel.app/coverage/dental",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dental care and Medicare coverage information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Dental Care?",
    description:
      "Original Medicare covers almost no routine dental care. Learn what is and isn't covered and how to fill the gap.",
    images: [
      "https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/dental",
  },
};

export default function DentalCoveragePage() {
  return <DentalCoverageClient />;
}

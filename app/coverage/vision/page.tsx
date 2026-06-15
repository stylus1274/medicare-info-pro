import type { Metadata } from "next";
import VisionCoverageClient from "./VisionCoverageClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Vision and Eye Exams? | Medicare Information Project",
  description:
    "Original Medicare covers very little routine vision care. Learn what is and is not covered, how Medicare Advantage vision benefits work, and your options for getting eye exam and glasses coverage.",
  keywords: [
    "does Medicare cover vision",
    "Medicare eye exam coverage",
    "Medicare glasses coverage",
    "Medicare Advantage vision benefits",
    "Medicare cataract surgery",
    "Medicare routine vision",
    "Medicare vision 2025",
    "Medicare eye care Florida",
  ],
  openGraph: {
    title: "Does Medicare Cover Vision and Eye Exams?",
    description:
      "Original Medicare covers very little routine vision care. Learn what is and is not covered and how to fill the gap with Medicare Advantage or a standalone vision plan.",
    url: "https://medicare-info-pro.vercel.app/coverage/vision",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Eye exam and vision coverage information for Medicare beneficiaries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Vision and Eye Exams?",
    description:
      "Original Medicare covers very little routine vision care. Learn what is and is not covered and how to fill the gap.",
    images: [
      "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/vision",
  },
};

export default function VisionCoveragePage() {
  return <VisionCoverageClient />;
}

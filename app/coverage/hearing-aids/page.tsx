import type { Metadata } from "next";
import HearingAidsCoverageClient from "./HearingAidsCoverageClient";

export const metadata: Metadata = {
  title: "Does Medicare Cover Hearing Aids? | Medicare Information Pro",
  description:
    "Original Medicare does not cover hearing aids or routine hearing exams. Learn which Medicare Advantage plans include hearing benefits, how much hearing aids cost, and your options for coverage in Florida.",
  keywords: [
    "does medicare cover hearing aids",
    "medicare hearing aid coverage",
    "medicare hearing benefits",
    "medicare advantage hearing aids",
    "hearing aids medicare 2025",
    "medicare hearing exam coverage",
    "OTC hearing aids medicare",
    "florida medicare hearing coverage",
  ],
  openGraph: {
    title: "Does Medicare Cover Hearing Aids?",
    description:
      "Original Medicare does not cover hearing aids. Many Medicare Advantage plans do. Here is what is covered, what is not, and how to find a plan with hearing benefits.",
    url: "https://medicare-info-pro.vercel.app/coverage/hearing-aids",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Hearing Aids?",
    description:
      "Original Medicare does not cover hearing aids or routine hearing exams. Medicare Advantage plans often include hearing benefits.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/hearing-aids",
  },
};

export default function HearingAidsCoveragePage() {
  return <HearingAidsCoverageClient />;
}

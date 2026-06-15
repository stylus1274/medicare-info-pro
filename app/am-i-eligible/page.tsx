import type { Metadata } from "next";
import AmIEligibleClient from "./AmIEligibleClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Am I Eligible for Medicare? | Medicare Information Pro",
  description:
    "Find out if you qualify for Medicare. Use our free eligibility checker to learn about age requirements, disability pathways, ESRD, work history, and special enrollment situations.",
  keywords: [
    "am I eligible for Medicare",
    "Medicare eligibility",
    "Medicare age requirement",
    "Medicare disability",
    "SSDI Medicare",
    "Medicare ESRD",
    "when can I get Medicare",
    "Medicare eligibility checker",
  ],
  openGraph: {
    title: "Am I Eligible for Medicare? | Medicare Information Pro",
    description:
      "Find out if you qualify for Medicare. Use our free eligibility checker - covers age, disability, ESRD, work history, and special situations.",
    url: "https://medicare-info-pro.vercel.app/am-i-eligible",
    siteName: "Medicare Information Pro",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/eligible-hero-9oVMsdHrhZ3KWXrFjRcN3L.webp",
        width: 1200,
        height: 630,
        alt: "Senior couple reviewing Medicare eligibility documents together",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Am I Eligible for Medicare? | Medicare Information Pro",
    description:
      "Use our free eligibility checker to find out if you qualify for Medicare - age, disability, ESRD, and more.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/eligible-hero-9oVMsdHrhZ3KWXrFjRcN3L.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/am-i-eligible",
  },
};

export default function AmIEligiblePage() {
  return <AmIEligibleClient />;
}

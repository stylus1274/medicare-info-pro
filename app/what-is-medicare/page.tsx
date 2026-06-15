import type { Metadata } from "next";
import WhatIsMedicareClient from "./WhatIsMedicareClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "What Is Medicare? A Complete Guide | Medicare Information Project",
  description:
    "Learn what Medicare is, how Parts A, B, C, and D work, who qualifies, when to enroll, and how much it costs. Free, unbiased guidance from licensed agents in Brandon, FL.",
  keywords: [
    "what is Medicare",
    "Medicare explained",
    "Medicare Parts A B C D",
    "Medicare eligibility",
    "how does Medicare work",
    "Medicare enrollment",
    "Medicare Brandon FL",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "What Is Medicare? A Complete Guide",
    description:
      "Medicare explained simply: Parts A, B, C, and D, eligibility rules, enrollment windows, costs, and how to choose the right plan. Free guidance from licensed agents.",
    url: "https://medicare-info-pro.vercel.app/what-is-medicare",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/what-is-medicare",
  },
};

export default function WhatIsMedicarePage() {
  return <WhatIsMedicareClient />;
}

import type { Metadata } from "next";
import FindAnAgentClient from "./FindAnAgentClient";

export const metadata: Metadata = {
  title: "Find a Licensed Medicare Agent Near You | Medicare Information Pro",
  description:
    "Work with an independent, licensed Medicare agent in Florida and surrounding states. Free consultations, no pressure, 17 carriers represented. Call 813-699-5559 or request an appointment online.",
  keywords: [
    "find Medicare agent near me",
    "licensed Medicare agent Florida",
    "independent Medicare agent Brandon FL",
    "Medicare insurance agent Tampa",
    "free Medicare consultation",
    "Medicare agent 2026",
    "Medicare broker Florida",
  ],
  openGraph: {
    title: "Find a Licensed Medicare Agent Near You",
    description:
      "Work with an independent, licensed Medicare agent. Free consultations, no pressure, 17 carriers represented. Serving FL, GA, NC, AR, KS, and TX.",
    url: "https://medicare-info-pro.vercel.app/find-an-agent",
    type: "website",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
        width: 1200,
        height: 630,
        alt: "Greg Wohl, Licensed Medicare Specialist at Medicare Information Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find a Licensed Medicare Agent Near You",
    description:
      "Work with an independent, licensed Medicare agent. Free consultations, no pressure, 17 carriers represented.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/find-an-agent",
  },
};

export default function FindAnAgentPage() {
  return <FindAnAgentClient />;
}

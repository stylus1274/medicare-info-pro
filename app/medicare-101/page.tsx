import type { Metadata } from "next";
import Medicare101Client from "./Medicare101Client";

export const metadata: Metadata = {
  title: "Medicare 101: The Complete Beginner's Guide | Medicare Information Project",
  description:
    "Everything you need to understand Medicare — Parts A, B, C & D, enrollment windows, costs, and how to choose the right coverage for your situation. Updated April 2026.",
  openGraph: {
    title: "Medicare 101: The Complete Beginner's Guide",
    description:
      "Understand Medicare Parts A, B, C & D, enrollment periods, 2026 costs, and how to choose the right plan. Free guide from licensed Medicare agents.",
    url: "https://medicare-info-pro.vercel.app/medicare-101",
    siteName: "Medicare Information Project",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/pillar-medicare101-hero-f5outgxBhHJbUVbUzgH5fL.webp",
        width: 1200,
        height: 630,
        alt: "Medicare 101 guide — senior couple reviewing Medicare options with a licensed agent",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare 101: The Complete Beginner's Guide",
    description:
      "Understand Medicare Parts A, B, C & D, enrollment periods, 2026 costs, and how to choose the right plan.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/pillar-medicare101-hero-f5outgxBhHJbUVbUzgH5fL.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-101",
  },
};

export default function Medicare101Page() {
  return <Medicare101Client />;
}

import type { Metadata } from "next";
import ThreeWaysClient from "./ThreeWaysClient";

export const metadata: Metadata = {
  title: "3 Ways to Begin Your Medicare Coverage | Medicare Information Project",
  description:
    "Ready to start Medicare? Learn the 3 simple steps to begin your coverage: understand eligibility, learn the parts, and enroll. Free guidance from licensed agents in Brandon, FL.",
  keywords: [
    "how to start Medicare",
    "3 ways to begin Medicare coverage",
    "Medicare enrollment steps",
    "how to enroll in Medicare",
    "Medicare eligibility",
    "Medicare Information Project",
    "Medicare Brandon FL",
  ],
  openGraph: {
    title: "3 Ways to Begin Your Medicare Coverage",
    description:
      "A simple 3-step guide to starting your Medicare coverage: understand eligibility, learn the parts, and enroll without stress.",
    url: "https://medicare-info-pro.vercel.app/3-ways-to-begin-your-medicare-coverage",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/3-ways-to-begin-your-medicare-coverage",
  },
};

export default function ThreeWaysPage() {
  return <ThreeWaysClient />;
}

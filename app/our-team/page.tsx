import type { Metadata } from "next";
import OurTeamClient from "./OurTeamClient";

export const metadata: Metadata = {
  title: "Our Medicare Team | Licensed Medicare Specialists in Tampa Bay",
  description: "Meet the licensed Medicare insurance specialists at Medicare Information Pro serving Tampa Bay, Brandon, Riverview, and surrounding Florida communities.",
  alternates: {
    canonical: "https://medicareinfopro.com/our-team",
  },
  openGraph: {
    title: "Our Medicare Team | Licensed Medicare Specialists in Tampa Bay",
    description: "Meet the licensed Medicare insurance specialists at Medicare Information Pro serving Tampa Bay, Brandon, Riverview, and surrounding Florida communities.",
    url: "https://medicareinfopro.com/our-team",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <OurTeamClient />;
}

import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Medicare Planning Resources | Medicare Information Pro",
  description: "Practical preparation guidance for Medicare enrollment, plan questions, doctors, pharmacies, and prescription medications.",
  alternates: {
    canonical: "https://medicareinfopro.com/testimonials/",
  },
  openGraph: {
    title: "Medicare Planning Resources | Medicare Information Pro",
    description: "Practical preparation guidance for Medicare enrollment, plan questions, doctors, pharmacies, and prescription medications.",
    url: "https://medicareinfopro.com/testimonials/",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <TestimonialsClient />;
}

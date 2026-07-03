import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Medicare Information Pro",
  description: "Read reviews from Medicare beneficiaries in Tampa Bay who found the right Medicare coverage with help from Medicare Information Pro's licensed specialists.",
  alternates: {
    canonical: "https://medicareinfopro.com/testimonials",
  },
  openGraph: {
    title: "Client Reviews & Testimonials | Medicare Information Pro",
    description: "Read reviews from Medicare beneficiaries in Tampa Bay who found the right Medicare coverage with help from Medicare Information Pro's licensed specialists.",
    url: "https://medicareinfopro.com/testimonials",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <TestimonialsClient />;
}

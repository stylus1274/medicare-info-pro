import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Medicare Information Project | Brandon, FL",
  description:
    "Contact Medicare Information Project for a free Medicare consultation. Call 813-699-5559 or 888-886-5840, email us, or visit our Brandon, FL office. No pressure, no obligation.",
  keywords: [
    "contact Medicare Information Project",
    "Medicare agent contact Brandon FL",
    "free Medicare consultation",
    "Medicare help phone number",
    "Medicare agent Tampa Bay",
    "call Medicare agent Florida",
    "Medicare consultation request",
  ],
  openGraph: {
    title: "Contact Medicare Information Project",
    description:
      "Get a free Medicare consultation. Call 813-699-5559 or request an appointment online. No pressure, no obligation.",
    url: "https://medicare-info-pro.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Contact Medicare Information Project for a free consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Medicare Information Project",
    description:
      "Get a free Medicare consultation. Call 813-699-5559 or request an appointment online.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

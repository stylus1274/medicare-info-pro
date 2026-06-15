import type { Metadata } from "next";
import FreeConsultationClient from "./FreeConsultationClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Free Medicare Consultation | Brandon, FL | MedicareInfoPro",
  description:
    "Get a free, no-obligation Medicare consultation from a licensed advisor in Brandon, FL. We compare every plan available in your zip code and help you avoid costly mistakes. Call 813-699-5559.",
  keywords: [
    "free Medicare consultation Brandon FL",
    "Medicare advisor Brandon Florida",
    "Medicare help Hillsborough County",
    "free Medicare review",
    "Medicare insurance agent Brandon",
    "Medicare consultation Riverview Valrico",
  ],
  openGraph: {
    title: "Free Medicare Consultation | Brandon, FL | MedicareInfoPro",
    description: "Get a free, no-obligation Medicare consultation from a licensed advisor in Brandon, FL. We compare every plan available in your zip code.",
    url: "https://medicareinfopro.com/free-consultation/",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80", width: 1200, height: 630, alt: "Licensed Medicare advisor meeting with a client in Brandon FL" }],
  },
  twitter: { card: "summary_large_image", title: "Free Medicare Consultation | Brandon, FL", description: "Get a free, no-obligation Medicare consultation from a licensed advisor in Brandon, FL." },
  alternates: { canonical: "https://medicareinfopro.com/free-consultation/" },
};

export default function Page() {
  return <FreeConsultationClient />;
}

import type { Metadata } from "next";
import HomepageAepConsultationReview from "./HomepageAepConsultationReview";

const title = "AEP Consultation Page Review | Medicare Information Project";
const url = "https://medicareinfopro.com/aep-consultation-preview/";

export const metadata: Metadata = {
  title: { absolute: title },
  description: "Review version of the AEP homepage with consultation booking and callback options.",
  alternates: { canonical: url },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: { title, url, type: "website", siteName: "Medicare Information Project",
    images: [{ url: "https://medicareinfopro.com/images/aep-plan-review-hero.webp", alt: "A couple reviewing Medicare options with an advisor" }] },
};

export default function AepConsultationPreviewPage() {
  return <HomepageAepConsultationReview />;
}

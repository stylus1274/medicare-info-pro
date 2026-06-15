import type { Metadata } from "next";
import PartBBrandonClient from "./PartBBrandonClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Part B Assistance in Brandon, FL | Medicare Information Project",
  description:
    "Get expert Medicare Part B guidance in Brandon, FL. Enrollment help, cost management, benefits maximization, and personalized support from licensed local agents.",
  keywords: [
    "Medicare Part B Brandon FL",
    "Medicare Part B assistance Brandon",
    "Medicare enrollment Brandon Florida",
    "Medicare Part B costs Brandon",
    "Medicare agent Brandon FL",
    "Medicare Information Project Brandon",
  ],
  openGraph: {
    title: "Medicare Part B Assistance in Brandon, FL",
    description:
      "Expert Medicare Part B enrollment, cost management, and benefits guidance for Brandon, FL residents. Free consultations from licensed local agents.",
    url: "https://medicare-info-pro.vercel.app/medicare-part-b-assistance-in-brandon",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-part-b-assistance-in-brandon",
  },
};

export default function PartBBrandonPage() {
  return <PartBBrandonClient />;
}

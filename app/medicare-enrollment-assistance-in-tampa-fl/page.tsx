import type { Metadata } from "next";
import MedicareEnrollmentAssistanceTampaFLClient from "./MedicareEnrollmentAssistanceTampaFLClient";

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance in Tampa, FL | Medicare Information Pro",
  description: "Get free Medicare enrollment assistance in Tampa, FL. Licensed Medicare specialists help you enroll in the right plan during your Initial, Special, or Annual Enrollment Period.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-enrollment-assistance-in-tampa-fl",
  },
  openGraph: {
    title: "Medicare Enrollment Assistance in Tampa, FL | Medicare Information Pro",
    description: "Get free Medicare enrollment assistance in Tampa, FL. Licensed Medicare specialists help you enroll in the right plan during your Initial, Special, or Annual Enrollment Period.",
    url: "https://medicareinfopro.com/medicare-enrollment-assistance-in-tampa-fl",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <MedicareEnrollmentAssistanceTampaFLClient />;
}

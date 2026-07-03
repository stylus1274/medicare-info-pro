import type { Metadata } from "next";
import MedicarePlanCounselingTampaClient from "./MedicarePlanCounselingTampaClient";

export const metadata: Metadata = {
  title: "Medicare Plan Counseling in Tampa, FL | Medicare Information Pro",
  description: "Free Medicare plan counseling in Tampa, FL. Our licensed Medicare counselors help you understand your options and choose the right Medicare plan for your needs and budget.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-plan-counseling-tampa",
  },
  openGraph: {
    title: "Medicare Plan Counseling in Tampa, FL | Medicare Information Pro",
    description: "Free Medicare plan counseling in Tampa, FL. Our licensed Medicare counselors help you understand your options and choose the right Medicare plan for your needs and budget.",
    url: "https://medicareinfopro.com/medicare-plan-counseling-tampa",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <MedicarePlanCounselingTampaClient />;
}

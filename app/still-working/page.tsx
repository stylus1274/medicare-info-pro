import type { Metadata } from "next";
import StillWorkingClient from "./StillWorkingClient";

export const metadata: Metadata = {
  title: "Still Working at 65? Medicare and Employer Coverage Explained",
  description: "If you are still working at 65 and have employer health insurance, you may be able to delay Medicare enrollment without penalty. Learn the rules and your options.",
  alternates: {
    canonical: "https://medicareinfopro.com/still-working",
  },
  openGraph: {
    title: "Still Working at 65? Medicare and Employer Coverage Explained",
    description: "If you are still working at 65 and have employer health insurance, you may be able to delay Medicare enrollment without penalty. Learn the rules and your options.",
    url: "https://medicareinfopro.com/still-working",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <StillWorkingClient />;
}

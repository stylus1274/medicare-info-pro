import { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";

export const metadata: Metadata = {
  title: "Chris Gallimore | Licensed Medicare Agent | Medicare Information Project",
  description: "Meet Chris Gallimore, a licensed Medicare insurance agent serving the Tampa Bay area for nearly 10 years. Get expert Medicare guidance at no cost.",
};

const MEMBER = {
  name: "Chris Gallimore",
  title: "Licensed Medicare Agent",
  license: "FL License # P117166",
  phone: "727-504-0554",
  email: "info@medicareinfopro.com",
  location: "Madeira Beach, FL",
  serviceArea: "Pinellas County, Hillsborough County, and surrounding Tampa Bay communities",
  photo: null,
  photoUrl: "",
  bio: [
    "Chris Gallimore is a licensed insurance agent and a native Floridian who has called Madeira Beach home for many years. With nearly a decade of experience helping clients navigate Medicare, Chris brings a calm, patient approach to what can often feel like an overwhelming process.",
    "Chris specializes in helping beneficiaries compare Medicare Advantage plans, Medicare Supplement (Medigap) policies, and Part D prescription drug coverage. He takes the time to understand each client's doctors, medications, and budget before making any recommendations, ensuring every client gets a plan that truly fits their life.",
    "Outside of work, Chris enjoys fishing, playing guitar, and collecting cars. He also adopted a rescue dog named Vernon in 2013. His laid-back, genuine personality puts clients at ease from the very first conversation.",
    "As an independent agent, Chris is not tied to any single insurance company. He represents multiple carriers across the Tampa Bay area, which means he can objectively compare options and find the best value for each individual client.",
  ],
  specialties: ["Medicare Advantage", "Medicare Supplement (Medigap)", "Part D Drug Plans", "Plan Comparisons", "Annual Enrollment Period Reviews"],
  credentials: ["Florida Licensed Insurance Agent", "Independent Agent", "Medicare Certified"],
  slug: "chris-gallimore",
};

export default function ChrisGallimorePage() {
  return <TeamMemberPage member={MEMBER} />;
}

import type { Metadata } from "next";
import MedicareSupplementClient from "./MedicareSupplementClient";

export const metadata: Metadata = {
  title: "Medicare Supplement (Medigap) Plans | Medicare Information Project",
  description:
    "Medicare Supplement (Medigap) plans fill the gaps in Original Medicare. Compare Plans A, B, C, D, F, G, K, L, M, and N. Free guidance from licensed agents in Tampa, FL.",
  keywords: [
    "Medicare Supplement",
    "Medigap plans Florida",
    "Medicare Supplement Tampa",
    "Medigap Plan G",
    "Medigap Plan N",
    "Medicare gap coverage",
    "Medicare Supplement plans comparison",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Supplement (Medigap) Plans",
    description:
      "Compare Medicare Supplement plans A through N, understand what each covers, and find the right Medigap plan for your needs and budget.",
    url: "https://medicare-info-pro.vercel.app/medicare-supplement",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-supplement",
  },
};

export default function MedicareSupplementPage() {
  return <MedicareSupplementClient />;
}

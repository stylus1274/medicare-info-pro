import type { Metadata } from "next";
import HomeClient from "../HomeClient";

export const metadata: Metadata = {
  title: { absolute: "Previous Homepage | Medicare Information Project" },
  description: "Archived previous homepage of Medicare Information Project. Visit medicareinfopro.com for our current homepage and Medicare guidance.",
  alternates: { canonical: "https://medicareinfopro.com/homepage-archive/" },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: { title: "Previous Homepage | Medicare Information Project", url: "https://medicareinfopro.com/homepage-archive/" },
};

export default function ArchivedHomepage() {
  return <HomeClient />;
}

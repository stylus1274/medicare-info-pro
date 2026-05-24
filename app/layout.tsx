import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medicare Information Pro | Understand Your Medicare Options",
  description: "Expert Medicare guidance to help you understand your options, avoid costly mistakes, and choose the right coverage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

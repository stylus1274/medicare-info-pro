"use client";

import { useEffect } from "react";
import { captureLeadAttribution } from "@/lib/lead-attribution";

export default function LeadAttribution() {
  useEffect(() => { captureLeadAttribution(); }, []);
  return null;
}

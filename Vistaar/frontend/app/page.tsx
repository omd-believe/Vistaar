import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { IndustryTeaser } from "@/components/home/IndustryTeaser";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyVistaar } from "@/components/home/WhyVistaar";
import { OurProcess } from "@/components/home/OurProcess";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Vistaar — Websites & Digital Tools for Local Businesses",
  description:
    "Vistaar builds modern websites, booking systems, and AI tools that get local businesses more customers. Fixed pricing. Ongoing support. Maharashtra, India.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IndustryTeaser />
      <SelectedWork />
      <WhatWeDo />
      <WhyVistaar />
      <OurProcess />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}

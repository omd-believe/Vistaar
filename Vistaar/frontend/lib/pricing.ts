import type { PricingTier } from "@/types";

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    tagline: "Get online fast",
    priceRange: "₹15,000 – ₹25,000",
    highlight: false,
    includes: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "WhatsApp contact integration",
      "Basic SEO setup",
      "Google Maps integration",
      "1 month of support after launch",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    tagline: "Everything you need to grow",
    priceRange: "₹30,000 – ₹55,000",
    highlight: true,
    includes: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "Online booking or enquiry system",
      "WhatsApp AI assistant",
      "Full SEO optimisation",
      "3 months of support after launch",
      "Admin dashboard",
    ],
    cta: "Most Popular",
  },
  {
    name: "Professional",
    tagline: "Full-featured web application",
    priceRange: "₹70,000 – ₹1,20,000",
    highlight: false,
    includes: [
      "Custom web application",
      "Payments & subscriptions",
      "User accounts & dashboards",
      "Third-party API integrations",
      "Performance-first architecture",
      "6 months of dedicated support",
    ],
    cta: "Build Something Big",
  },
  {
    name: "Custom",
    tagline: "Something bigger in mind?",
    priceRange: "Let's talk",
    highlight: false,
    isCustom: true,
    includes: [
      "Complex multi-tenant platforms",
      "AI / automation integrations",
      "Custom mobile apps",
      "Enterprise requirements",
    ],
    cta: "Chat on WhatsApp",
  },
];

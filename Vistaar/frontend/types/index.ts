// ============================================================
// VISTAAR — SHARED TYPES
// ============================================================

export interface Project {
  slug: string;
  title: string;
  businessType: string;
  thumbnail: string;
  caption: string;
  tags: string[];
  about: string;
  solution: string;
  features: string[];
  architecture: string | null;
  result: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

export interface PricingTier {
  name: string;
  tagline: string;
  priceRange: string;
  highlight: boolean;
  isCustom?: boolean;
  includes: string[];
  cta: string;
}

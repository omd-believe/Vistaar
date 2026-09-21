// ============================================================
// VISTAAR — GLOBAL CONSTANTS
// Swap these values before launch
// ============================================================

/** WhatsApp number in international format (no + prefix) */
export const WHATSAPP_NUMBER = "919999999999"; // TODO: Replace with real number

/** Pre-filled WhatsApp message */
export const WHATSAPP_MESSAGE =
  "Hi Vistaar, I'd like to know more about building a website for my business.";

/** WhatsApp deep-link URL */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Social links */
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/vistaar.studio", // TODO: Replace
  linkedin: "https://linkedin.com/company/vistaar-studio", // TODO: Replace
  github: "https://github.com/vistaar-studio", // TODO: Replace
};

/** Navigation links */
export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Location string shown in footer */
export const LOCATION = "Maharashtra, India";

/** Studio name */
export const STUDIO_NAME = "Vistaar";

/** Tagline */
export const TAGLINE = "Build. Expand. Evolve.";

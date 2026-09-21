import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { PRICING_TIERS } from "@/lib/pricing";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing — Simple, Transparent Web Development Pricing",
  description:
    "Fixed, transparent pricing for websites, booking systems, and digital tools. No hourly rates, no hidden costs. See what's included in each package.",
};

const FAQS = [
  {
    q: "Do I pay all at once?",
    a: "We typically split payment into two parts: 50% at project start and 50% on launch. For larger projects, we can arrange a milestone-based schedule.",
  },
  {
    q: "What if I need something not in a package?",
    a: "Every business is different. If our standard packages don't fit, we'll put together a custom quote. Just WhatsApp us and describe what you need.",
  },
  {
    q: "Is hosting included?",
    a: "Hosting is not included in the one-time project cost, but we help you set it up. We recommend affordable hosting options (Vercel, Hostinger) and assist with setup.",
  },
  {
    q: "How long does a project take?",
    a: "Starter websites: 1–2 weeks. Business packages: 3–4 weeks. Complex web applications: 6–10 weeks. We'll give you a firm timeline in your proposal.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="container-vistaar text-center">
          <span className="section-label">Pricing</span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            You know the full cost before we start. No hourly rates, no hidden
            extras — just straightforward packages that make sense.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding" aria-label="Pricing packages">
        <div className="container-vistaar">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-7 flex flex-col border ${
                  tier.highlight
                    ? "border-[#ff6b35]/60 bg-gradient-to-b from-[#ff6b35]/8 to-[#1c1c1c] shadow-xl shadow-[#ff6b35]/10"
                    : "border-white/7 bg-[#1c1c1c]"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-semibold bg-[#ff6b35] text-white px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h2
                    className="text-xl font-bold text-[#f7f5f2] mb-0.5"
                    style={{ fontFamily: "var(--font-heading), sans-serif" }}
                  >
                    {tier.name}
                  </h2>
                  <p className="text-xs text-[#9ca3af]">{tier.tagline}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/5">
                  <span
                    className={`text-2xl font-bold ${tier.isCustom ? "text-[#ff6b35]" : "text-[#f7f5f2]"}`}
                    style={{ fontFamily: "var(--font-heading), sans-serif" }}
                  >
                    {tier.priceRange}
                  </span>
                  {!tier.isCustom && (
                    <span className="text-xs text-[#9ca3af] ml-1">one-time</span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#9ca3af]">
                      <Check size={13} className="text-[#ff6b35] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {tier.isCustom ? (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full justify-center"
                  >
                    Chat on WhatsApp
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className={`btn w-full justify-center ${
                      tier.highlight ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#0d0d0d]" aria-labelledby="faq-heading">
        <div className="container-vistaar max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            Common Questions
          </h2>
          <div className="flex flex-col gap-6">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border border-white/7 rounded-xl p-6 bg-[#1c1c1c]"
              >
                <h3
                  className="text-base font-semibold text-[#f7f5f2] mb-2"
                  style={{ fontFamily: "var(--font-heading), sans-serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#9ca3af] mb-4">Still have questions?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/pricing";
import { WHATSAPP_URL } from "@/lib/constants";

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
  color: "#f7f5f2",
};

export function PricingPreview() {
  return (
    <section
      id="pricing-preview"
      aria-labelledby="pricing-heading"
      className="section-padding"
      style={{ backgroundColor: "#141414" }}
    >
      <div className="container-vistaar">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Pricing</span>
          <h2
            id="pricing-heading"
            style={{
              ...headingStyle,
              fontSize: "clamp(1.875rem, 3.5vw + 0.5rem, 2.75rem)",
              marginBottom: "0.75rem",
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "#9ca3af",
              maxWidth: "380px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            No hourly rates, no hidden costs. You know the price before we start.
          </p>
        </div>

        {/* Cards grid — equal height columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
            gap: "1rem",
            alignItems: "stretch",
            marginBottom: "2.25rem",
          }}
        >
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
              style={{
                position: "relative",
                borderRadius: "0.875rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                border: tier.highlight
                  ? "1.5px solid rgba(255,107,53,0.5)"
                  : "1px solid rgba(255,255,255,0.07)",
                background: tier.highlight
                  ? "linear-gradient(160deg, rgba(255,107,53,0.07) 0%, #1c1c1c 60%)"
                  : "#1c1c1c",
                boxShadow: tier.highlight
                  ? "0 8px 32px rgba(255,107,53,0.12)"
                  : "none",
              }}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-0.75rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#ff6b35",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.75rem",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Tier name */}
              <div style={{ marginBottom: "1rem" }}>
                <p
                  style={{
                    ...headingStyle,
                    fontSize: "1.0625rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    lineHeight: 1.4,
                  }}
                >
                  {tier.tagline}
                </p>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span
                  style={{
                    ...headingStyle,
                    fontSize: tier.isCustom ? "1.375rem" : "1.25rem",
                    color: tier.isCustom ? "#ff6b35" : "#f7f5f2",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {tier.priceRange}
                </span>
                {!tier.isCustom && (
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      color: "#6b7280",
                      marginLeft: "0.3rem",
                    }}
                  >
                    one-time
                  </span>
                )}
              </div>

              {/* Inclusions */}
              <ul
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  marginBottom: "1.375rem",
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.375rem 0",
                }}
              >
                {tier.includes.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "#9ca3af",
                      lineHeight: 1.5,
                    }}
                  >
                    <Check size={12} color="#ff6b35" style={{ flexShrink: 0, marginTop: "2px" }} />
                    {item}
                  </li>
                ))}
                {tier.includes.length > 4 && (
                  <li
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      paddingLeft: "1.375rem",
                    }}
                  >
                    +{tier.includes.length - 4} more inclusions
                  </li>
                )}
              </ul>

              {/* CTA button — pushed to bottom */}
              {tier.isCustom ? (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem" }}
                >
                  Chat on WhatsApp
                </a>
              ) : (
                <Link
                  href="/contact"
                  className={`btn ${tier.highlight ? "btn-primary" : "btn-secondary"}`}
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem" }}
                >
                  {tier.highlight ? "Get Started" : tier.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Full details link */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/pricing"
            id="pricing-preview-full-details-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#ff6b35",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
          >
            See Full Pricing Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

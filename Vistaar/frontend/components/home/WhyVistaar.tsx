"use client";

import { motion } from "framer-motion";

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
  color: "#f7f5f2",
};

const REASONS = [
  {
    number: "01",
    title: "No confusing tech jargon",
    description:
      "We explain everything in plain language. You'll always know what we're building, why, and what it means for your business.",
  },
  {
    number: "02",
    title: "Fixed pricing, no surprises",
    description:
      "You know the cost before we start. No hidden fees, no scope creep charges — we agree upfront and stick to it.",
  },
  {
    number: "03",
    title: "Support after launch",
    description:
      "We don't hand over the website and disappear. Every package includes ongoing support, and we're always reachable on WhatsApp.",
  },
  {
    number: "04",
    title: "Modern, custom design",
    description:
      "Not a Wix template. Every site is designed specifically for your business, your brand, and your customers.",
  },
];

export function WhyVistaar() {
  return (
    <section
      id="why-vistaar"
      aria-labelledby="why-heading"
      className="section-padding"
      style={{ backgroundColor: "#141414" }}
    >
      <div className="container-vistaar">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left: intro */}
          <div>
            <span className="section-label">Why Vistaar</span>
            <h2
              id="why-heading"
              style={{
                ...headingStyle,
                fontSize: "clamp(1.875rem, 3.5vw + 0.5rem, 2.75rem)",
                marginBottom: "1.25rem",
              }}
            >
              Built differently,{" "}
              <span className="text-gradient">for you</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "#9ca3af",
                lineHeight: 1.7,
                maxWidth: "400px",
              }}
            >
              Most web agencies are built for big corporate clients. Vistaar was built
              specifically for local Indian businesses — so everything about how we
              work is different.
            </p>
          </div>

          {/* Right: numbered list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {REASONS.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.09, duration: 0.45, ease: "easeOut" }}
                style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
              >
                {/* Big dim number */}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "2rem",
                    lineHeight: 1,
                    color: "rgba(255,107,53,0.18)",
                    flexShrink: 0,
                    userSelect: "none",
                    marginTop: "2px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {reason.number}
                </span>
                <div>
                  <h3
                    style={{
                      ...headingStyle,
                      fontSize: "1rem",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "#9ca3af",
                      lineHeight: 1.65,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

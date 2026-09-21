"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const TRUST_ITEMS = [
  "Custom-Built Websites",
  "Built for Local Businesses",
  "Ongoing Support",
  "Fixed, Transparent Pricing",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "rgba(28,28,28,0.6)",
      }}
    >
      <div className="container-vistaar" style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem 2rem",
          }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#9ca3af",
                whiteSpace: "nowrap",
              }}
            >
              <CheckCircle2 size={13} color="#ff6b35" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

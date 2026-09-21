"use client";

import { motion } from "framer-motion";

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
  color: "#f7f5f2",
};

const SERVICES = [
  {
    id: "get-found",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36" aria-hidden="true">
        <circle cx="19" cy="19" r="10" stroke="#ff6b35" strokeWidth="2.5" />
        <path d="M27 27L36 36" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 19h8M19 15v8" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Get Found",
    subtitle: "Websites that bring customers in",
    description:
      "A fast, beautiful website that shows up when local customers search for your business. We handle design, SEO, and everything in between — no tech knowledge needed.",
  },
  {
    id: "get-organised",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="#ff6b35" strokeWidth="2.5" />
        <rect x="25" y="5" width="14" height="14" rx="3" stroke="#ff6b35" strokeWidth="2.5" />
        <rect x="5" y="25" width="14" height="14" rx="3" stroke="#ff6b35" strokeWidth="2.5" />
        <path d="M25 32h14M32 25v14" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Get Organised",
    subtitle: "Booking systems, dashboards, admin tools",
    description:
      "Stop managing everything over WhatsApp calls. We build booking systems, order management, and admin dashboards that save you hours every week.",
  },
  {
    id: "never-miss",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36" aria-hidden="true">
        <path d="M8 28L13 26l4-10 8 5 8-14 5 20" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="10" r="2.5" fill="#ff6b35" />
      </svg>
    ),
    title: "Never Miss a Customer",
    subtitle: "WhatsApp AI — replies instantly, even after hours",
    description:
      "Our AI assistant answers questions on WhatsApp 24/7. Takes enquiries, shares your menu or pricing, and tells people how to book — even at 2am.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="services-heading"
      className="section-padding"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="container-vistaar">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Services</span>
          <h2
            id="services-heading"
            style={{
              ...headingStyle,
              fontSize: "clamp(1.875rem, 3.5vw + 0.5rem, 2.75rem)",
            }}
          >
            What We Do
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="card-dark"
              style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(255,107,53,0.1)",
                  border: "1px solid rgba(255,107,53,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>

              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <h3
                  style={{
                    ...headingStyle,
                    fontSize: "1.125rem",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "#ff6b35",
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {service.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                    lineHeight: 1.65,
                    marginTop: "0.25rem",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

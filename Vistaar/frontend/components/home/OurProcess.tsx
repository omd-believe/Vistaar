"use client";

import { motion } from "framer-motion";

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
  color: "#f7f5f2",
};

const STEPS = [
  { id: "discover", label: "Discover",  description: "We learn about your business, your customers, and what success looks like for you." },
  { id: "design",   label: "Design",    description: "We create a design for your approval before writing a single line of code." },
  { id: "build",    label: "Build",     description: "We build your site fast, keeping you updated throughout with clear milestones." },
  { id: "launch",   label: "Launch",    description: "We go live together — handling hosting, domain setup, and any final tweaks." },
  { id: "support",  label: "Support",   description: "We're here after launch. Updates, questions, changes — just message us." },
];

export function OurProcess() {
  return (
    <section
      id="our-process"
      aria-labelledby="process-heading"
      className="section-padding"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="container-vistaar">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">How we work</span>
          <h2
            id="process-heading"
            style={{ ...headingStyle, fontSize: "clamp(1.875rem, 3.5vw + 0.5rem, 2.75rem)" }}
          >
            Our Process
          </h2>
        </div>

        {/* Steps container */}
        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "2rem 1.5rem",
            position: "relative",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.875rem",
              }}
            >
              {/* Step number + connector line */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%" }}>
                {/* Circle */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    borderRadius: "999px",
                    border: "2px solid #ff6b35",
                    backgroundColor: "#0d0d0d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#ff6b35",
                    letterSpacing: "0.01em",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Connecting line — hidden on last item */}
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      flex: 1,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, rgba(255,107,53,0.35) 0%, rgba(255,107,53,0.08) 100%)",
                    }}
                    className="hidden lg:block"
                  />
                )}
              </div>

              {/* Label + description */}
              <div>
                <h3
                  style={{
                    ...headingStyle,
                    fontSize: "0.9375rem",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.375rem",
                  }}
                >
                  {step.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "#9ca3af",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

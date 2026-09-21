"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const INDUSTRIES = [
  {
    id: "restaurant",
    label: "Restaurant",
    emoji: "🍽️",
    image: "/images/mockup-restaurant.jpg",
    alt: "Example restaurant website — menu, table booking, and contact sections",
    description:
      "Online menu, table bookings, and WhatsApp ordering. Customers find you, browse, and book — all without a phone call.",
  },
  {
    id: "gym",
    label: "Gym",
    emoji: "🏋️",
    image: "/images/mockup-gym.jpg",
    alt: "Example gym website — membership plans, class schedule, and trainer profiles",
    description:
      "Membership sign-ups, class schedules, and trainer profiles. Let customers join online while you focus on training.",
  },
  {
    id: "clinic",
    label: "Clinic",
    emoji: "🏥",
    image: "/images/mockup-clinic.jpg",
    alt: "Example clinic website — appointment booking, services, and doctor profiles",
    description:
      "Online appointment booking, doctor profiles, and automated WhatsApp reminders. Cut the morning phone rush.",
  },
] as const;

type IndustryId = (typeof INDUSTRIES)[number]["id"];

// WhatsApp SVG
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function IndustryTeaser() {
  const [active, setActive] = useState<IndustryId>("restaurant");
  const current = INDUSTRIES.find((i) => i.id === active)!;

  return (
    <section
      id="industry-teaser"
      aria-labelledby="industry-heading"
      className="section-padding"
    >
      <div className="container-vistaar">
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">See it before you build it</span>
          <h2
            id="industry-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem)",
              color: "#f7f5f2",
              marginBottom: "0.875rem",
              lineHeight: 1.1,
            }}
          >
            Not sure what your business
            <br /> could look like online?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "#9ca3af",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Take a look at what we can build for you.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div
          role="tablist"
          aria-label="Industry examples"
          style={{
            display: "flex",
            gap: "0.625rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {INDUSTRIES.map((industry) => {
            const isActive = active === industry.id;
            return (
              <button
                key={industry.id}
                role="tab"
                id={`tab-${industry.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${industry.id}`}
                onClick={() => setActive(industry.id)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5625rem 1.125rem",
                  borderRadius: "0.5rem",
                  border: isActive ? "1.5px solid #ff6b35" : "1.5px solid rgba(247,245,242,0.15)",
                  background: isActive ? "#ff6b35" : "transparent",
                  color: isActive ? "#ffffff" : "#9ca3af",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  minHeight: "44px",
                }}
              >
                <span aria-hidden="true">{industry.emoji}</span>
                {industry.label}
              </button>
            );
          })}
        </div>

        {/* ── Preview panel ── */}
        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#1c1c1c",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Screenshot */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    background: "rgba(20,20,20,0.82)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    padding: "0.25rem 0.75rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "#9ca3af",
                  }}
                >
                  Sample design · Not a real client
                </div>
              </div>

              {/* Description */}
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "#9ca3af",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "#9ca3af",
              marginBottom: "1.125rem",
            }}
          >
            Want something like this for your business?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="industry-teaser-whatsapp-cta"
            className="btn btn-primary"
            style={{ fontSize: "0.9375rem", padding: "0.75rem 1.875rem" }}
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

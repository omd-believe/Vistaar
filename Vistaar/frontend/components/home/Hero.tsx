"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const HeroCanvas = lazy(() =>
  import("./HeroCanvas").then((m) => ({ default: m.HeroCanvas }))
);

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

function useIsLowEnd() {
  const [low, setLow] = useState(false);
  useEffect(() => {
    const nav = navigator as Navigator & {
      hardwareConcurrency?: number;
      connection?: { effectiveType?: string };
    };
    if (
      (nav.hardwareConcurrency ?? 4) <= 2 ||
      ["slow-2g", "2g"].includes(nav.connection?.effectiveType ?? "")
    ) {
      setLow(true);
    }
  }, []);
  return low;
}

// WhatsApp icon — extracted for reuse
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const lowEnd = useIsLowEnd();
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCanvasReady(true), 350);
    return () => clearTimeout(t);
  }, []);

  const show3D = canvasReady && !reducedMotion && !lowEnd;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100svh",
        paddingTop: "80px",
        overflow: "hidden",
      }}
    >
      {/* Static gradient background — renders immediately */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 55% at 50% -5%, rgba(255,107,53,0.10) 0%, transparent 65%)," +
            "radial-gradient(ellipse 50% 35% at 90% 85%, rgba(255,107,53,0.05) 0%, transparent 60%)," +
            "#141414",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="grid-overlay"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Three.js canvas — lazy-loaded, non-blocking */}
      {show3D && (
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
        >
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      )}

      {/* ── Main content ── */}
      <div
        className="container-vistaar"
        style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "5rem" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
          }}
          style={{ maxWidth: "900px" }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
          >
            <span className="section-label">Vistaar Studio · Maharashtra, India</span>
          </motion.div>

          {/* H1 — this is the most critical render element */}
          <motion.h1
            id="hero-heading"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "1.25rem",
              /* Fluid size: 2.5rem → 4.5rem */
              fontSize: "clamp(2.5rem, 5vw + 0.75rem, 4.5rem)",
              color: "#f7f5f2",
            }}
          >
            We build websites and digital tools that get{" "}
            <span className="text-gradient">local businesses</span>{" "}
            more customers.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw + 0.25rem, 1.25rem)",
              color: "#9ca3af",
              marginBottom: "2.75rem",
              letterSpacing: "0.01em",
              lineHeight: 1.55,
              maxWidth: "520px",
            }}
          >
            Build. Expand. Evolve.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
          >
            <Link
              href="/work"
              id="hero-see-work-cta"
              className="btn btn-secondary"
              style={{ fontSize: "0.9375rem", padding: "0.75rem 1.625rem" }}
            >
              See Our Work
              <ArrowRight size={15} />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="btn btn-primary"
              style={{ fontSize: "0.9375rem", padding: "0.75rem 1.625rem" }}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      {!reducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "1.75rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.375rem",
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: "0.65rem", color: "#6b7280", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #6b7280, transparent)" }}
          />
        </motion.div>
      )}
    </section>
  );
}

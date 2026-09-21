"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/* Shared heading style object — avoids repetition */
const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
  color: "#f7f5f2",
};

export function SelectedWork() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section
      id="selected-work"
      aria-labelledby="work-heading"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #141414 0%, #181818 100%)" }}
    >
      <div className="container-vistaar">
        {/* ── Header row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <span className="section-label">Our Work</span>
            <h2
              id="work-heading"
              style={{
                ...headingStyle,
                fontSize: "clamp(1.875rem, 3.5vw + 0.5rem, 2.75rem)",
              }}
            >
              Selected Work
            </h2>
          </div>
          <Link
            href="/work"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#ff6b35",
              whiteSpace: "nowrap",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
          >
            View All Projects <ArrowRight size={13} />
          </Link>
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {featured.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.09, duration: 0.5, ease: "easeOut" }}
              className="card-dark"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={`Screenshot of the ${project.title} website`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s ease" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="group-hover:scale-105"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0.625rem",
                    left: "0.625rem",
                    background: "rgba(255,107,53,0.9)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "999px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {project.businessType}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "1.25rem 1.375rem 1.375rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "0.5rem",
                }}
              >
                <h3
                  style={{
                    ...headingStyle,
                    fontSize: "1.0625rem",
                    marginBottom: "0.125rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {project.caption}
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#ff6b35",
                    marginTop: "0.5rem",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study <ArrowRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

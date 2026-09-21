import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work — Selected Projects",
  description:
    "Browse Vistaar's portfolio of websites, booking systems, and digital tools built for local businesses across Maharashtra.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="container-vistaar">
          <span className="section-label">Portfolio</span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            Our Work
          </h1>
          <p className="text-[#9ca3af] text-lg max-w-xl">
            Real projects built for real local businesses. Every case study shows
            what we built and what it achieved.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding" aria-label="Project portfolio">
        <div className="container-vistaar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <article
                key={project.slug}
                className="card-dark overflow-hidden group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={project.thumbnail}
                    alt={`Screenshot of the ${project.title} website`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-[#ff6b35]/90 text-white px-2.5 py-1 rounded-full">
                      {project.businessType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2
                    className="text-lg font-bold text-[#f7f5f2] mb-2"
                    style={{ fontFamily: "var(--font-heading), sans-serif" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#9ca3af] leading-relaxed flex-1 mb-4">
                    {project.caption}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-[#262626] text-[#9ca3af] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="flex items-center gap-1.5 text-sm text-[#ff6b35] hover:text-[#ff8c5a] font-medium transition-colors group/link"
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

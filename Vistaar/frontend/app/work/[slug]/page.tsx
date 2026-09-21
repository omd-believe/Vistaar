import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.caption,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-20">
      {/* Back link */}
      <div className="container-vistaar pt-8 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#f7f5f2] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Work
        </Link>
      </div>

      {/* Hero */}
      <section className="container-vistaar pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs font-semibold bg-[#ff6b35]/90 text-white px-2.5 py-1 rounded-full">
            {project.businessType}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-[#262626] text-[#9ca3af] border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading), sans-serif" }}
        >
          {project.title}
        </h1>

        {/* Hero screenshot */}
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-white/7 mb-4"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={project.thumbnail}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute top-3 right-3 bg-[#141414]/80 backdrop-blur-sm text-xs text-[#9ca3af] px-2.5 py-1 rounded-full border border-white/10">
            Sample design · Placeholder
          </div>
        </div>
      </section>

      {/* Case study body */}
      <section className="container-vistaar pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* About */}
            <div>
              <h2
                className="text-xl font-bold text-[#f7f5f2] mb-3"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                About
              </h2>
              <p className="text-[#9ca3af] leading-relaxed">{project.about}</p>
            </div>

            {/* Solution */}
            <div>
              <h2
                className="text-xl font-bold text-[#f7f5f2] mb-3"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Solution
              </h2>
              <p className="text-[#9ca3af] leading-relaxed">{project.solution}</p>
            </div>

            {/* Features */}
            <div>
              <h2
                className="text-xl font-bold text-[#f7f5f2] mb-4"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Features
              </h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[#9ca3af]">
                    <Check size={15} className="text-[#ff6b35] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="rounded-xl border border-[#ff6b35]/25 bg-[#ff6b35]/5 p-6">
              <h2
                className="text-xl font-bold text-[#f7f5f2] mb-3"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Result
              </h2>
              <p className="text-[#9ca3af] leading-relaxed">{project.result}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Technology */}
            <div className="card-dark p-5">
              <h3
                className="text-base font-bold text-[#f7f5f2] mb-4"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Technology
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#262626] text-[#9ca3af] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture placeholder */}
            <div className="card-dark p-5">
              <h3
                className="text-base font-bold text-[#f7f5f2] mb-4"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Architecture
              </h3>
              {project.architecture ? (
                <p className="text-sm text-[#9ca3af]">{project.architecture}</p>
              ) : (
                <div className="rounded-lg bg-[#262626] border border-white/5 p-4 text-center">
                  <p className="text-xs text-[#6b7280]">Architecture diagram</p>
                  <p className="text-xs text-[#6b7280] mt-1">
                    [Placeholder — add SVG diagram here]
                  </p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              {project.liveUrl && project.liveUrl !== "#" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="btn btn-secondary w-full justify-center opacity-40 cursor-not-allowed"
                >
                  <ExternalLink size={15} />
                  Live Demo (Coming Soon)
                </button>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full justify-center"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

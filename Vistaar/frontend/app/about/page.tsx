import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Zap, Heart, Target } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Vistaar — Our Story",
  description:
    "Vistaar is a digital solutions studio based in Maharashtra, India. We build websites and digital tools for local businesses that want to grow online.",
};

const VALUES = [
  {
    icon: <Zap size={20} className="text-[#ff6b35]" aria-hidden="true" />,
    title: "Clarity over complexity",
    description:
      "We believe technology should simplify life, not complicate it. We build simple, effective tools — and explain everything without jargon.",
  },
  {
    icon: <Heart size={20} className="text-[#ff6b35]" aria-hidden="true" />,
    title: "Local businesses matter",
    description:
      "The small restaurant, the neighborhood gym, the family clinic — these businesses are the backbone of our communities, and they deserve the same digital tools as big companies.",
  },
  {
    icon: <Target size={20} className="text-[#ff6b35]" aria-hidden="true" />,
    title: "Results, not just design",
    description:
      "Beautiful websites are great. Websites that bring in customers are better. We measure success by your business outcomes, not by awards.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-vistaar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">About Vistaar</span>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                We help local businesses{" "}
                <span className="text-gradient">get online properly.</span>
              </h1>
              <p className="text-[#9ca3af] text-lg leading-relaxed mb-4">
                Vistaar is a digital studio based in Maharashtra, India. We
                build websites, booking systems, and AI tools for local
                businesses — restaurants, gyms, clinics, shops.
              </p>
              <p className="text-[#9ca3af] text-lg leading-relaxed mb-8">
                We started Vistaar because we saw too many good local businesses
                with bad or no online presence, losing customers to bigger
                competitors who just had a better website. That felt wrong — and
                fixable.
              </p>
              <div className="flex items-center gap-2 text-[#9ca3af] mb-8">
                <MapPin size={16} className="text-[#ff6b35]" />
                <span>Maharashtra, India</span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Start a Conversation
              </a>
            </div>

            {/* Brand values block */}
            <div
              className="rounded-2xl border border-white/7 bg-[#1c1c1c] p-8"
              aria-label="Our tagline"
            >
              <div className="text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                <div className="text-[#f7f5f2]">Build.</div>
                <div className="text-gradient">Expand.</div>
                <div className="text-[#f7f5f2] opacity-60">Evolve.</div>
              </div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                These three words guide everything we do. We build something
                solid for you, help you expand your reach, and evolve your
                digital presence as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-padding bg-[#0d0d0d]"
        aria-labelledby="values-heading"
      >
        <div className="container-vistaar">
          <div className="text-center mb-12">
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              What we believe in
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <div key={value.title} className="card-dark p-7">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3
                  className="text-base font-bold text-[#f7f5f2] mb-2"
                  style={{ fontFamily: "var(--font-heading), sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders placeholder */}
      <section className="section-padding" aria-labelledby="team-heading">
        <div className="container-vistaar">
          <div className="text-center mb-12">
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              The team
            </h2>
            <p className="text-[#9ca3af] mt-3">
              [Placeholder — add founder bios and photos here]
            </p>
          </div>
          <div className="flex justify-center">
            <div className="card-dark p-8 text-center max-w-sm w-full">
              <div className="w-20 h-20 rounded-full bg-[#262626] mx-auto mb-5 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <h3
                className="text-lg font-bold text-[#f7f5f2] mb-1"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Founder Name
              </h3>
              <p className="text-sm text-[#ff6b35] mb-3">
                Co-founder &amp; Lead Developer
              </p>
              <p className="text-xs text-[#9ca3af]">
                [Add bio here — swap with real content before launch]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0d0d0d]" aria-label="Contact CTA">
        <div className="container-vistaar text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            Want to work with us?
          </h2>
          <p className="text-[#9ca3af] mb-8 max-w-md mx-auto">
            We're always interested in new projects. Send us a message and let's
            talk about what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

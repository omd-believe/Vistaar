import Link from "next/link";
import { MapPin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, LOCATION, WHATSAPP_URL } from "@/lib/constants";
import { VistaarLogo } from "@/components/ui/VistaarLogo";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="container-vistaar py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 w-fit"
              aria-label="Vistaar — Home"
            >
              <VistaarLogo className="w-8 h-8" />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Vistaar
              </span>
            </Link>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs mb-6">
              We build websites and digital tools that get local businesses more
              customers. Based in Maharashtra, serving clients across India.
            </p>
            <div className="flex items-center gap-1.5 text-[#9ca3af] text-sm mb-6">
              <MapPin size={14} className="text-[#ff6b35] shrink-0" />
              <span>{LOCATION}</span>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-[#ff6b35] hover:border-[#ff6b35]/40 transition-all min-w-[44px] min-h-[44px]"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-[#ff6b35] hover:border-[#ff6b35]/40 transition-all min-w-[44px] min-h-[44px]"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-[#ff6b35] hover:border-[#ff6b35]/40 transition-all min-w-[44px] min-h-[44px]"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-sm font-semibold text-[#f7f5f2] mb-5"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-[#ff6b35] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3
              className="text-sm font-semibold text-[#f7f5f2] mb-5"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Ready to start?
            </h3>
            <p className="text-sm text-[#9ca3af] mb-5 leading-relaxed">
              Chat with us on WhatsApp — we reply fast.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              className="btn btn-primary text-sm px-5 py-2.5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7280]">
            © {currentYear} Vistaar Studio. All rights reserved.
          </p>
          <p className="text-xs text-[#6b7280]">
            Built with ❤️ in Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}

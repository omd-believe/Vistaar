"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Send, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, LOCATION } from "@/lib/constants";

// Note: metadata export doesn't work from client components.
// For the contact page, metadata is set in a separate layout or via the
// generateMetadata pattern. Since this page uses a form (client), we keep it
// as a client component and rely on the root layout metadata.

const BUDGET_OPTIONS = [
  "₹15,000 – ₹25,000 (Starter)",
  "₹30,000 – ₹55,000 (Business)",
  "₹70,000+ (Professional)",
  "Custom / Not sure yet",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    whatsapp: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to a form backend (e.g. Resend, Formspree, or a Next.js API route)
    // For now, we log and show a success state
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="container-vistaar">
          <span className="section-label">Get in Touch</span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            Start a Project
          </h1>
          <p className="text-[#9ca3af] text-lg max-w-xl">
            Tell us a bit about your business and what you need. We'll come back
            to you — usually within a few hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-vistaar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-10 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2
                    className="text-2xl font-bold text-[#f7f5f2] mb-3"
                    style={{ fontFamily: "var(--font-heading), sans-serif" }}
                  >
                    Message Received!
                  </h2>
                  <p className="text-[#9ca3af] mb-6">
                    We'll get back to you soon. Or for a faster response, drop
                    us a WhatsApp message.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  aria-label="Project enquiry form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#f7f5f2] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className="w-full rounded-lg bg-[#1c1c1c] border border-white/10 px-4 py-3 text-sm text-[#f7f5f2] placeholder-[#6b7280] focus:outline-none focus:border-[#ff6b35]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-business"
                        className="block text-sm font-medium text-[#f7f5f2] mb-1.5"
                      >
                        Business Name *
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        required
                        placeholder="Sharma's Restaurant"
                        value={formState.business}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            business: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg bg-[#1c1c1c] border border-white/10 px-4 py-3 text-sm text-[#f7f5f2] placeholder-[#6b7280] focus:outline-none focus:border-[#ff6b35]/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-whatsapp"
                      className="block text-sm font-medium text-[#f7f5f2] mb-1.5"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formState.whatsapp}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          whatsapp: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg bg-[#1c1c1c] border border-white/10 px-4 py-3 text-sm text-[#f7f5f2] placeholder-[#6b7280] focus:outline-none focus:border-[#ff6b35]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-sm font-medium text-[#f7f5f2] mb-1.5"
                    >
                      Approximate Budget
                    </label>
                    <select
                      id="contact-budget"
                      value={formState.budget}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          budget: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg bg-[#1c1c1c] border border-white/10 px-4 py-3 text-sm text-[#f7f5f2] focus:outline-none focus:border-[#ff6b35]/60 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#1c1c1c]">
                        Select a range
                      </option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1c1c1c]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#f7f5f2] mb-1.5"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="What does your business do? What do you need? Any specific features?"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          message: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg bg-[#1c1c1c] border border-white/10 px-4 py-3 text-sm text-[#f7f5f2] placeholder-[#6b7280] focus:outline-none focus:border-[#ff6b35]/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="btn btn-primary w-full justify-center text-base py-4"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-6">
              {/* WhatsApp option */}
              <div className="card-dark p-6">
                <h2
                  className="text-lg font-bold text-[#f7f5f2] mb-3"
                  style={{ fontFamily: "var(--font-heading), sans-serif" }}
                >
                  Prefer WhatsApp?
                </h2>
                <p className="text-sm text-[#9ca3af] mb-5 leading-relaxed">
                  Most of our clients find it easier to just drop us a message
                  on WhatsApp. We reply fast — usually within a couple of hours.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-page-whatsapp-cta"
                  className="btn btn-primary w-full justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Open WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="card-dark p-6">
                <h2
                  className="text-lg font-bold text-[#f7f5f2] mb-3"
                  style={{ fontFamily: "var(--font-heading), sans-serif" }}
                >
                  Where we're based
                </h2>
                <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                  <MapPin size={15} className="text-[#ff6b35] shrink-0" />
                  {LOCATION}
                </div>
                <p className="text-xs text-[#6b7280] mt-3">
                  We work with clients across India — location is no barrier for
                  digital projects.
                </p>
              </div>

              {/* Response time */}
              <div className="rounded-xl border border-white/7 bg-gradient-to-br from-[#ff6b35]/5 to-transparent p-6">
                <p className="text-sm text-[#9ca3af]">
                  ⚡ We typically respond within{" "}
                  <span className="text-[#f7f5f2] font-semibold">
                    2–4 hours
                  </span>{" "}
                  during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

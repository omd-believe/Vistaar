import React from "react";

interface VistaarLogoProps {
  className?: string;
  accentColor?: string;
}

/**
 * Vistaar V-mark SVG logo.
 * The "V" shape uses two angled strokes that expand outward from a center
 * point, suggesting growth and expansion — consistent with the brand ethos.
 * Supports animated variants via CSS classes.
 */
export function VistaarLogo({
  className = "w-8 h-8",
  accentColor = "#ff6b35",
}: VistaarLogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vistaar logo"
      role="img"
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="#1c1c1c" />

      {/* Outer V strokes — the "expansion" wings */}
      <path
        d="M6 10 L20 30"
        stroke={accentColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M34 10 L20 30"
        stroke={accentColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />

      {/* Inner V — the sharp, bold V mark */}
      <path
        d="M10 10 L20 28 L30 10"
        stroke={accentColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

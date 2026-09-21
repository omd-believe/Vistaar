# Vistaar Website

Marketing website for **Vistaar** — a digital solutions studio that builds websites, web apps, and AI/automation tools for local businesses.

**Live tagline:** Build. Expand. Evolve.

---

## Tech Stack

| Concern | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D | React Three Fiber (hero bg only) |
| Fonts | Space Grotesk (headings) + Inter (body) via `next/font` |
| Icons | Lucide React |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Building for production

```bash
npm run build
npm run start
```

---

## Before Launch — Checklist

### 1. WhatsApp Number
Open [`lib/constants.ts`](./lib/constants.ts) and replace the placeholder:

```ts
// Change this:
export const WHATSAPP_NUMBER = "919999999999";
// To your real number (international format, no +):
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";
```

### 2. Social Links
In the same [`lib/constants.ts`](./lib/constants.ts):

```ts
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/your-handle",
  linkedin: "https://linkedin.com/company/your-company",
  github: "https://github.com/your-org",
};
```

### 3. Real Project Data
Edit [`lib/projects.ts`](./lib/projects.ts) to replace the placeholder projects with real case studies.
Replace placeholder images in `public/images/` with real screenshots.

### 4. Founder Information
Update [`app/about/page.tsx`](./app/about/page.tsx) — search for `[Placeholder]` to find all swap-out sections.

### 5. Contact Form Backend
The contact form at [`app/contact/page.tsx`](./app/contact/page.tsx) currently logs to console. Connect it to a real backend:
- [Resend](https://resend.com/) for email
- [Formspree](https://formspree.io/) for simple form handling
- Or add a Next.js API route at `app/api/contact/route.ts`

### 6. Location
Update `LOCATION` in `lib/constants.ts` if needed.

---

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout (fonts, SEO, Navbar, Footer, WhatsAppFAB)
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── work/
│   │   ├── page.tsx        # All projects grid
│   │   └── [slug]/
│   │       └── page.tsx    # Case study template
│   ├── pricing/
│   │   └── page.tsx        # Full pricing page
│   ├── about/
│   │   └── page.tsx        # About / team
│   └── contact/
│       └── page.tsx        # Contact form
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   ├── Footer.tsx      # Footer with socials
│   │   └── WhatsAppFAB.tsx # Persistent floating WhatsApp button
│   ├── home/
│   │   ├── Hero.tsx            # Full-viewport hero
│   │   ├── HeroCanvas.tsx      # Three.js particle scene (lazy)
│   │   ├── TrustStrip.tsx      # 4 credibility signals
│   │   ├── IndustryTeaser.tsx  # Restaurant/Gym/Clinic tabs
│   │   ├── SelectedWork.tsx    # 3 project cards
│   │   ├── WhatWeDo.tsx        # 3 service cards
│   │   ├── WhyVistaar.tsx      # 4 trust points
│   │   ├── OurProcess.tsx      # 5-step flow
│   │   ├── PricingPreview.tsx  # 4 pricing cards (preview)
│   │   └── FinalCTA.tsx        # Closing CTA section
│   └── ui/
│       └── VistaarLogo.tsx     # V-mark SVG logo
│
├── lib/
│   ├── constants.ts        # WhatsApp number, socials, nav links ← EDIT HERE
│   ├── projects.ts         # Case study data ← EDIT HERE
│   └── pricing.ts          # Pricing tier data ← EDIT HERE
│
├── types/
│   └── index.ts            # Shared TypeScript interfaces
│
└── public/
    └── images/
        ├── mockup-restaurant.jpg   # Placeholder — replace with real screenshot
        ├── mockup-gym.jpg          # Placeholder — replace with real screenshot
        └── mockup-clinic.jpg       # Placeholder — replace with real screenshot
```

---

## Three.js Usage

Per spec, Three.js is used in **exactly two places only**:

1. **`HeroCanvas.tsx`** — Sparse particle field behind the hero text. Lazy-loaded after first paint, falls back gracefully on low-end devices and when `prefers-reduced-motion` is set.
2. *(Logo animation — add if needed via `sessionStorage` gate)*

Three.js is **not used** anywhere else on the homepage.

---

## Design System

All brand tokens are defined in [`app/globals.css`](./app/globals.css) via Tailwind v4's `@theme` directive:

- `--color-accent-500: #ff6b35` — Amber/orange accent
- `--color-charcoal-900: #141414` — Primary dark background
- `--color-cream-100: #f7f5f2` — Primary light text
- `--font-heading: Space Grotesk`
- `--font-body: Inter`

Utility classes: `.btn`, `.btn-primary`, `.btn-secondary`, `.card-dark`, `.section-padding`, `.container-vistaar`, `.text-gradient`, `.section-label`

---

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on push.

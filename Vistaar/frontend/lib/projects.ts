import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "spice-garden-restaurant",
    title: "Spice Garden Restaurant",
    businessType: "Restaurant",
    thumbnail: "/images/mockup-restaurant.jpg",
    caption: "Helped a local restaurant move table enquiries and orders online",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "WhatsApp Integration"],
    about:
      "Spice Garden is a family-run Indian restaurant in Pune that was losing customers to competitors with better online presence. They had no way for customers to browse the menu or book a table online.",
    solution:
      "We built a fast, mobile-first website with an online menu, table booking form, and WhatsApp ordering integration. The site loads in under 2 seconds on mobile data.",
    features: [
      "Online menu with categories and pricing",
      "Table booking form with WhatsApp confirmation",
      "Google Maps integration for directions",
      "Mobile-optimised design",
      "SEO optimised for local search",
    ],
    architecture: null,
    result:
      "Within 3 weeks of launch, the restaurant reported a 40% increase in table reservations and significant reduction in phone interruptions during service hours.",
    liveUrl: "#",
    githubUrl: null,
  },
  {
    slug: "iron-peak-fitness",
    title: "Iron Peak Fitness",
    businessType: "Gym",
    thumbnail: "/images/mockup-gym.jpg",
    caption: "Built a membership and class-booking platform for a growing gym",
    tags: ["Next.js", "TypeScript", "Stripe", "Framer Motion"],
    about:
      "Iron Peak Fitness had outgrown their WhatsApp-based class booking system. Members were confused about schedules and trainers were spending hours managing bookings manually.",
    solution:
      "We designed and built a complete gym website with class schedules, member sign-up, online payment, and an admin dashboard for trainers to manage bookings.",
    features: [
      "Live class schedule with day/week view",
      "Online membership sign-up with Stripe payments",
      "Trainer profiles and specialisations",
      "Admin dashboard for class management",
      "Automated WhatsApp reminders for bookings",
    ],
    architecture: null,
    result:
      "Manual booking workload dropped by 80%. Online sign-ups account for 65% of new memberships within 6 weeks of launch.",
    liveUrl: "#",
    githubUrl: null,
  },
  {
    slug: "carefirst-clinic",
    title: "CareFirst Clinic",
    businessType: "Clinic",
    thumbnail: "/images/mockup-clinic.jpg",
    caption: "Built an appointment system that eliminated the morning phone rush",
    tags: ["Next.js", "Supabase", "Google Calendar API", "TypeScript"],
    about:
      "CareFirst Clinic was overwhelmed by appointment calls every morning. Patients couldn't easily book slots, and the receptionist was handling 50+ calls per day manually.",
    solution:
      "We built an online appointment booking system integrated with Google Calendar, with automated patient confirmations and reminders via WhatsApp.",
    features: [
      "Online appointment booking by doctor and specialty",
      "Google Calendar sync for doctors",
      "Automated WhatsApp confirmation and reminders",
      "Patient dashboard for managing appointments",
      "GDPR-compliant patient data handling",
    ],
    architecture: null,
    result:
      "Morning phone calls dropped by 70%. Appointment no-shows reduced by 35% due to automated WhatsApp reminders.",
    liveUrl: "#",
    githubUrl: null,
  },
];

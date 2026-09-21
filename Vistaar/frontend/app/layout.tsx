import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Vistaar — Websites & Digital Tools for Local Businesses",
    template: "%s | Vistaar",
  },
  description:
    "Vistaar builds modern websites, booking systems, and AI tools that get local businesses more customers. Fixed pricing. Ongoing support. Maharashtra, India.",
  keywords: [
    "web design Maharashtra",
    "website for local business India",
    "restaurant website design",
    "gym website design",
    "WhatsApp booking system",
    "local business digital solutions",
    "Vistaar",
  ],
  authors: [{ name: "Vistaar Studio" }],
  creator: "Vistaar Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vistaar",
    title: "Vistaar — Websites & Digital Tools for Local Businesses",
    description:
      "We build websites and digital tools that get local businesses more customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistaar — Websites & Digital Tools for Local Businesses",
    description:
      "We build websites and digital tools that get local businesses more customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}

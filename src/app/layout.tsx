import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const description = `${profile.name} — ${profile.title} with 13+ years in software engineering, leading a team of 10+ engineers across microservices, event-driven systems, and Kafka-based communications platforms.`;

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Technical Lead",
    "Microservices Architect",
    "Engineering Manager",
    "Apache Kafka",
    "Event-Driven Architecture",
    "Adobe Commerce",
    "Magento",
    "AWS EKS",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: `${profile.name} — ${profile.title}`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: profile.linkedin.href,
  sameAs: [profile.linkedin.href],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "ThinkSys Software Pvt. Ltd.",
  },
  knowsAbout: [
    "Microservices Architecture",
    "Event-Driven Systems",
    "Apache Kafka",
    "Engineering Team Leadership",
    "Adobe Commerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}

import { Metadata } from "next";
import UIUXContent from "./UIUXContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "UI UX Design Agency in Delhi NCR | HiveRift",
  description: "Bespoke product design, Figma prototypes, and UX systems that improve conversion and retention.",
  keywords: [
    "UI UX design agency",
    "product design company India",
    "Figma prototype design services",
    "web design agency New Delhi",
    "mobile app UI UX design",
    "design system development company",
    "conversion rate UI UX audit"
  ],
  openGraph: {
    title: "UI/UX Design Agency | Product Design & Figma Prototyping | HiveRift",
    description:
      "Pixel-perfect interfaces and research-backed UX architectures engineered to captivate users and maximize commercial conversion rates.",
    url: "https://hiverift.com/services/ui-ux",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/ui-ux",
  },
};

export default function UIUXPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "UI/UX Design", url: "/services/ui-ux" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UIUXContent />
    </>
  );
}
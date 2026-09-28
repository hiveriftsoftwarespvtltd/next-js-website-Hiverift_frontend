import { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Web, Mobile, AI & Cloud Services in Delhi NCR | HiveRift",
  description: "Custom web, mobile, AI, cloud, and marketing services for businesses in Delhi NCR and beyond.",
  keywords: [
    "custom web development services",
    "eCommerce development agency",
    "enterprise software development",
    "mobile app development company",
    "Next.js development agency",
    "AI automation solutions",
    "cloud devops consulting",
    "UI UX design services",
    "digital marketing agency India"
  ],
  openGraph: {
    title: "Enterprise Digital Services | Web, Mobile, AI & Cloud Engineering | HiveRift",
    description:
      "Full-stack digital engineering services designed to turn digital ambition into high-performing commercial reality.",
    url: "https://hiverift.com/services",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesContent />
    </>
  );
}

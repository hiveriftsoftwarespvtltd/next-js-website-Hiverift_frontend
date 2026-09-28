import { Metadata } from "next";
import SoftwareDevContent from "./SoftwareDevContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Custom Software Development Company in Delhi NCR | HiveRift",
  description: "Enterprise software, APIs, and cloud systems built for faster operations and growth.",
  keywords: [
    "custom software development company",
    "enterprise software development",
    "custom ERP development services",
    "SaaS application development agency",
    "backend API development Node NestJS",
    "legacy system modernization company",
    "software engineers India"
  ],
  openGraph: {
    title: "Custom Software Development Company | Enterprise Systems & SaaS | HiveRift",
    description:
      "Scalable cloud software, custom enterprise ERPs, and automated workflows engineered to eliminate operational drag and scale business ROI.",
    url: "https://hiverift.com/services/software-development",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Software Development", url: "/services/software-development" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SoftwareDevContent />
    </>
  );
}
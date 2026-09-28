import { Metadata } from "next";
import CloudContent from "./CloudContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services in Delhi NCR | HiveRift",
  description: "AWS, Kubernetes, CI/CD, and cloud automation for secure, scalable digital operations.",
  keywords: [
    "cloud devops consulting services",
    "AWS cloud architecture agency",
    "CI CD pipeline automation company",
    "Kubernetes containerization services",
    "cloud infrastructure migration company",
    "cloud security auditing AWS GCP",
    "DevOps engineers India"
  ],
  openGraph: {
    title: "Cloud & DevOps Consulting | AWS, Docker, Kubernetes & CI/CD | HiveRift",
    description:
      "Enterprise cloud infrastructure, automated zero-downtime deployment pipelines, and proactive 24/7 security monitoring.",
    url: "https://hiverift.com/services/cloud-devops",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/cloud-devops",
  },
};

export default function CloudDevOpsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Cloud & DevOps", url: "/services/cloud-devops" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CloudContent />
    </>
  );
}
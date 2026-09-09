import { Metadata } from "next";
import SoftwareDevContent from "./SoftwareDevContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Custom Software Development | Enterprise Solutions | HiveRift",
  description: "Bespoke software engineering for business transformation. We build custom ERPs, CRMs, and cloud-based applications tailored to your workflows.",
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
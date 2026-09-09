import { Metadata } from "next";
import CloudContent from "./CloudContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services | Scalable Infrastructure | HiveRift",
  description: "Modernize your infrastructure with our Cloud and DevOps services. We specialize in AWS, Azure, GCP, containerization, and CI/CD automation.",
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
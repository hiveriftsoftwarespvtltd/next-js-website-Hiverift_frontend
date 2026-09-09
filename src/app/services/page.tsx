import { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Our Services | Web, Mobile, AI & Digital Solutions | HiveRift",
  description: "Comprehensive digital solutions including web development, mobile apps, AI/ML, digital marketing, and UI/UX design to empower your business.",
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


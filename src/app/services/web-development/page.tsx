import { Metadata } from "next";
import WebDevContent from "./WebDevContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Professional Web Development Services | HiveRift",
  description: "Custom web development solutions using React, Next.js, and modern tech stacks. We build high-performance, SEO-optimized websites and web applications.",
};

export default function WebDevelopmentPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Web Development", url: "/services/web-development" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WebDevContent />
    </>
  );
}



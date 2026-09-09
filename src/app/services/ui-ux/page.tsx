import { Metadata } from "next";
import UIUXContent from "./UIUXContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "UI/UX Design Services | User-Centric Experiences | HiveRift",
  description: "We craft pixel-perfect user interfaces and intuitive user experiences. Our design services include wireframing, prototyping, and building comprehensive design systems.",
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
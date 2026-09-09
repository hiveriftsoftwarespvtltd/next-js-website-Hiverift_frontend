import { Metadata } from "next";
import MobileDevContent from "./MobileDevContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android | HiveRift",
  description: "Native and cross-platform mobile app development using React Native and Flutter. We build scalable, high-performance apps for global businesses.",
};

export default function MobileDevelopmentPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Mobile App Development", url: "/services/mobile-development" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MobileDevContent />
    </>
  );
}
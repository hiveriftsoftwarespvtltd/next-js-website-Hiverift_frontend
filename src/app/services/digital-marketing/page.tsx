import { Metadata } from "next";
import MarketingContent from "./MarketingContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Strategic Growth | HiveRift",
  description: "Boost your brand visibility with our data-driven digital marketing services. We specialize in SEO, SMM, PPC, and content marketing to drive measurable ROI.",
};

export default function DigitalMarketingPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Digital Marketing", url: "/services/digital-marketing" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MarketingContent />
    </>
  );
}
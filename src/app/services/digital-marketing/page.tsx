import { Metadata } from "next";
import MarketingContent from "./MarketingContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Agency in Delhi NCR | HiveRift",
  description: "Technical SEO, PPC, and conversion campaigns for brands seeking more leads and better ROI.",
  keywords: [
    "SEO agency India",
    "technical SEO services",
    "digital marketing company",
    "Google Ads PPC management",
    "conversion rate optimization agency",
    "B2B digital marketing services",
    "organic search marketing",
    "enterprise SEO consultant"
  ],
  openGraph: {
    title: "SEO & Digital Growth Marketing Agency | Google Ads & CRO | HiveRift",
    description:
      "Data-backed digital marketing strategies designed to acquire high-intent customers, boost organic search rankings, and maximize marketing ROI.",
    url: "https://hiverift.com/services/digital-marketing",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/digital-marketing",
  },
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
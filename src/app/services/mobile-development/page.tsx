import { Metadata } from "next";
import MobileDevContent from "./MobileDevContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Delhi NCR | HiveRift",
  description: "Custom iOS and Android apps in React Native and Flutter for startups, brands, and enterprises.",
  keywords: [
    "mobile app development company",
    "Flutter app development agency",
    "React Native mobile app developers",
    "cross-platform mobile app development",
    "iOS app developers India",
    "Android mobile app development services",
    "custom enterprise mobile apps"
  ],
  openGraph: {
    title: "Mobile App Development Company | Flutter & React Native iOS/Android | HiveRift",
    description:
      "Fluid, responsive iOS and Android applications engineered with modern cross-platform frameworks for maximum user engagement and scale.",
    url: "https://hiverift.com/services/mobile-development",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/mobile-development",
  },
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
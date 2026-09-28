import { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Tailored Enterprise Solutions | Custom Digital Systems | HiveRift",
  description:
    "Explore HiveRift's enterprise digital solutions. We engineer tailored technology architectures for finance, healthcare, retail, manufacturing, logistics, and emerging startups.",
  keywords: [
    "enterprise digital solutions",
    "tailored software systems",
    "custom enterprise web solutions",
    "sector digital transformation",
    "fintech digital solutions",
    "healthcare IT software solutions",
    "B2B retail technology solutions"
  ],
  openGraph: {
    title: "Tailored Enterprise Solutions | Custom Digital Systems | HiveRift",
    description:
      "Engineered technology architectures built to overcome sector-specific operational bottlenecks and unlock measurable business scale.",
    url: "https://hiverift.com/solutions",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
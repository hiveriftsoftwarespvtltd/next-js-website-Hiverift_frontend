import { Metadata } from "next";
import CaseStudiesPortfolio from "./CaseStudiesPortfolio";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Project Portfolio | HiveRift",
  description:
    "Explore HiveRift's selected website, eCommerce, and business platform projects.",
  keywords: [
    "web development case studies",
    "eCommerce growth case studies",
    "software engineering portfolio",
    "Next.js web development portfolio",
    "custom software projects",
    "HiveRift project portfolio"
  ],
  openGraph: {
    title: "Project Portfolio | HiveRift",
    description:
      "Selected website, eCommerce, and business platform projects from HiveRift.",
    url: "https://hiverift.com/case-studies",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CaseStudiesPortfolio />
    </Suspense>
  );
}

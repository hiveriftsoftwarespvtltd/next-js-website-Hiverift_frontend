import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About HiveRift | Web, Software & Growth Agency",
  description: "HiveRift builds custom websites, software, and digital growth systems for ambitious businesses.",
  keywords: [
    "About HiveRift",
    "web development company",
    "custom software development agency",
    "eCommerce development agency",
    "full-stack developers India",
    "enterprise digital transformation",
    "digital marketing agency",
    "Next.js development company"
  ],
  openGraph: {
    title: "About HiveRift | Enterprise Web, Software & Digital Growth Agency",
    description:
      "Empowering modern businesses with custom web applications, high-converting eCommerce stores, and scalable cloud solutions.",
    url: "https://hiverift.com/about",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
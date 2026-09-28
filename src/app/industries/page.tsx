import { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industry-Specific Digital Solutions | Web, Software & Marketing | HiveRift",
  description:
    "HiveRift delivers industry-specific websites, software, mobile apps, ERP, CRM, eCommerce and digital marketing solutions for real estate, travel, healthcare, education, manufacturing and more.",
  keywords: [
    "industry-specific digital solutions",
    "real estate web development",
    "travel booking software development",
    "ecommerce website development",
    "manufacturing ERP software",
    "education LMS portal development",
    "healthcare web development agency",
    "fintech digital solutions",
    "professional services corporate websites",
    "restaurant food ordering systems",
    "startup MVP development agency"
  ],
  openGraph: {
    title: "Industry-Specific Digital Solutions | Web, Software & Marketing | HiveRift",
    description:
      "HiveRift delivers industry-specific websites, software, mobile apps, ERP, CRM, eCommerce and digital marketing solutions for real estate, travel, healthcare, education, manufacturing and more.",
    url: "https://hiverift.com/industries",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
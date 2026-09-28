import { Metadata } from "next";
import EcommerceContent from "./EcommerceContent";
import { createBreadcrumbSchema, createFAQSchema, siteConfig } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Ecommerce Website Development Company in Delhi NCR | HiveRift",
  description: "Fast ecommerce stores, Shopify builds, and WooCommerce solutions for revenue-focused businesses.",
  keywords: [
    "ecommerce website development company in delhi",
    "ecommerce web development company delhi",
    "ecommerce website development delhi",
    "ecommerce website development company noida",
    "ecommerce web development delhi",
    "online store development company delhi",
    "custom ecommerce website development delhi",
    "eCommerce development agency",
    "Shopify Plus development company",
    "WooCommerce development services",
    "headless eCommerce agency",
    "D2C online store development",
    "custom online store developers",
    "website development company in delhi",
    "web development company delhi ncr"
  ],
  openGraph: {
    title: "eCommerce Website Development Company in Delhi NCR & Noida | HiveRift",
    description:
      "Enterprise eCommerce storefronts, high-converting online store development, and headless Next.js commerce in Delhi NCR.",
    url: "https://hiverift.com/services/ecommerce",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/ecommerce",
  },
};

export default function EcommercePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "eCommerce Solutions", url: "/services/ecommerce" },
  ]);

  const ecommerceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hiverift.com/services/ecommerce#service",
    name: "HiveRift - eCommerce Website Development Company in Delhi NCR",
    url: "https://hiverift.com/services/ecommerce",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "Custom Milestone Scoping",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110005",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "Country", name: "India" }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceSchema) }}
      />
      <EcommerceContent />
    </>
  );
}
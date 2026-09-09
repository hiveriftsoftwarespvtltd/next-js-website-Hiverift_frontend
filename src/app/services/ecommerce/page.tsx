import { Metadata } from "next";
import EcommerceContent from "./EcommerceContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Custom Online Stores | HiveRift",
  description: "Launch and scale your online store with our e-commerce solutions. We provide custom storefronts, secure checkout, and seamless API integrations.",
};

export default function EcommercePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "E-Commerce Solutions", url: "/services/ecommerce" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EcommerceContent />
    </>
  );
}
import { Metadata } from "next";
import { industriesData } from "@/app/data/industries";
import { FULL_INDUSTRIES_DATA, getFullIndustryDetails } from "@/app/data/industryDetailsFull";
import IndustryDetailClient from "./IndustryDetailClient";
import { createBreadcrumbSchema, createFAQSchema, siteConfig } from "@/app/config/schema";

export function generateStaticParams() {
  const ids = Array.from(new Set([...Object.keys(industriesData), ...Object.keys(FULL_INDUSTRIES_DATA)]));
  return ids.map((id) => ({
    industryId: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industryId: string }>;
}): Promise<Metadata> {
  const { industryId } = await params;
  const industry = getFullIndustryDetails(industryId);

  const title = `${industry.title} Technology Solutions | Websites, Portals & Growth | HiveRift`;
  const description = industry.description;
  const canonicalUrl = `https://hiverift.com/industries/${industryId}`;

  return {
    title,
    description,
    keywords: [
      `${industry.title.toLowerCase()} software solutions`,
      `${industry.title.toLowerCase()} website development`,
      `${industry.title.toLowerCase()} portal design`,
      `${industry.title.toLowerCase()} crm automation`,
      ...industry.searchTerms.slice(0, 8),
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "HiveRift",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ industryId: string }>;
}) {
  const { industryId } = await params;
  const industry = getFullIndustryDetails(industryId);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: industry.title, url: `/industries/${industryId}` },
  ]);

  const industryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://hiverift.com/industries/${industryId}#service`,
    name: `HiveRift - ${industry.title} Technology Solutions`,
    url: `https://hiverift.com/industries/${industryId}`,
    logo: "https://hiverift.com/logo.png",
    image: industry.heroImage || "https://hiverift.com/logo.png",
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
    areaServed: ["Delhi", "Noida", "Gurgaon", "India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${industry.title} Digital Solutions`,
      itemListElement: industry.specializedServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
      })),
    },
  };

  const faqSchema = createFAQSchema(industry.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industryServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <IndustryDetailClient />
    </>
  );
}

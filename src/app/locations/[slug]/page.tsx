import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA, getLocationBySlug } from "@/app/data/locationsData";
import LocationDetailContent from "./LocationDetailContent";
import { siteConfig } from "@/app/config/schema";
import { buildKeywordTitle, truncateMetaDescription } from "@/app/utils/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

function clampMetaDescription(value: string): string {
  const cleanValue = value.replace(/\s+/g, " ").trim();
  if (cleanValue.length <= 140) return cleanValue;
  return `${cleanValue.slice(0, 137).trimEnd()}...`;
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | HiveRift",
      description: "The requested regional location service could not be found.",
    };
  }

  const canonicalUrl = `https://hiverift.com/locations/${location.slug}`;

  const title = buildKeywordTitle(location.keyword, location.region);
  const description = truncateMetaDescription(`${location.keyword} in ${location.region}. Custom web design, software, SEO, and app services for growth-focused businesses.`);

  return {
    title,
    description,
    keywords: [
      location.keyword,
      `${location.keyword} Services`,
      `Best ${location.keyword}`,
      location.district,
      location.region,
      "Delhi NCR Web Development",
      "Next.js Development Agency",
      "Custom Software Company India",
    ],
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: "HiveRift",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://hiverift.com/delhi-ncr-network-map.png",
          width: 1024,
          height: 341,
          alt: `${location.keyword} - HiveRift Delhi NCR Network Map`,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Schema for Local Service & Business
  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://hiverift.com/locations/${location.slug}#service`,
    name: `HiveRift - ${location.keyword}`,
    url: `https://hiverift.com/locations/${location.slug}`,
    logo: "https://hiverift.com/logo.png",
    image: "https://hiverift.com/delhi-ncr-network-map.png",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: location.pricingRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: location.region === "Delhi" ? "New Delhi" : location.region,
      addressRegion: location.region === "Delhi" ? "Delhi" : location.region === "Noida" ? "Uttar Pradesh" : "Haryana",
      postalCode: location.region === "Delhi" ? "110005" : location.region === "Noida" ? "201301" : "122002",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: location.region },
      { "@type": "AdministrativeArea", name: location.district },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: location.keyword,
      itemListElement: location.deliverables.map((d, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d.title,
          description: d.desc,
        },
        position: idx + 1,
      })),
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hiverift.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations We Serve",
        item: "https://hiverift.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.keyword,
        item: `https://hiverift.com/locations/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationDetailContent location={location} />
    </>
  );
}

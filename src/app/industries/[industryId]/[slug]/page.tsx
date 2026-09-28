import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllIndustryKeywordParams,
  getIndustryKeywordData
} from "@/app/data/industryKeywordsData";
import IndustryKeywordDetail from "./IndustryKeywordDetail";
import { createBreadcrumbSchema, createFAQSchema, siteConfig } from "@/app/config/schema";
import { buildKeywordTitle, truncateMetaDescription } from "@/app/utils/seo";

interface Props {
  params: Promise<{ industryId: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustryKeywordParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industryId, slug } = await params;
  const data = getIndustryKeywordData(industryId, slug);

  if (!data) {
    return {
      title: "Industry Solution Not Found | HiveRift",
      description: "The requested industry technology service could not be found."
    };
  }

  const canonicalUrl = `https://hiverift.com/industries/${industryId}/${data.slug}`;

  const title = buildKeywordTitle(data.keyword, data.location);
  const description = truncateMetaDescription(`${data.keyword} in ${data.location}. Custom websites, portals, and digital systems for ${data.industryTitle.toLowerCase()} businesses.`);

  return {
    title,
    description,
    keywords: [
      data.keyword,
      `${data.keyword} company`,
      `${data.keyword} agency`,
      `best ${data.keyword}`,
      data.location,
      `${data.industryTitle} web development Delhi NCR`,
      `${data.industryTitle} software development India`,
      `${data.industryTitle} CRM automation`,
      "HiveRift technology solutions"
    ],
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonicalUrl,
      siteName: "HiveRift",
      locale: "en_IN",
      type: "website"
    },
    alternates: {
      canonical: canonicalUrl
    }
  };
}

export default async function IndustryKeywordPage({ params }: Props) {
  const { industryId, slug } = await params;
  const data = getIndustryKeywordData(industryId, slug);

  if (!data) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: data.industryTitle, url: `/industries/${industryId}` },
    { name: data.keyword, url: `/industries/${industryId}/${data.slug}` }
  ]);

  const faqSchema = createFAQSchema(data.faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://hiverift.com/industries/${industryId}/${data.slug}#service`,
    name: `HiveRift - ${data.keyword}`,
    url: `https://hiverift.com/industries/${industryId}/${data.slug}`,
    logo: "https://hiverift.com/logo.png",
    image: "https://hiverift.com/logo.png",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹45,000 - ₹5,50,000+",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110005",
      addressCountry: "IN"
    },
    areaServed: [data.location, "Delhi NCR", "India", "Global"],
    description: data.metaDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${data.keyword} Deliverables`,
      itemListElement: data.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d.title,
          description: d.desc
        }
      }))
    }
  };

  const jsonLd = [breadcrumbSchema, serviceSchema, faqSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryKeywordDetail data={data} />
    </>
  );
}

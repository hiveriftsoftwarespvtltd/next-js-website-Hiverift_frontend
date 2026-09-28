import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllRealEstateKeywordSlugs,
  getRealEstateKeywordBySlug,
  REAL_ESTATE_KEYWORDS_DATA
} from "@/app/data/realEstateKeywordsData";
import RealEstateKeywordDetail from "./RealEstateKeywordDetail";
import { createBreadcrumbSchema, createFAQSchema, siteConfig } from "@/app/config/schema";
import { buildKeywordTitle, truncateMetaDescription } from "@/app/utils/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllRealEstateKeywordSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getRealEstateKeywordBySlug(slug);

  if (!data) {
    return {
      title: "Real Estate Solution Not Found | HiveRift",
      description: "The requested real estate technology service could not be found.",
    };
  }

  const canonicalUrl = `https://hiverift.com/industries/real-estate/${data.slug}`;

  const title = buildKeywordTitle(data.keyword, data.location);
  const description = truncateMetaDescription(`${data.keyword} in ${data.location}. High-converting property websites, portals, CRM automation, and lead systems for real estate teams.`);

  return {
    title,
    description,
    keywords: [
      data.keyword,
      `${data.keyword} agency`,
      `${data.keyword} company`,
      `best ${data.keyword}`,
      data.location,
      "real estate web development Delhi NCR",
      "real estate CRM software India",
      "property portal development company",
      "builder website design Gurgaon",
      "real estate digital marketing Noida"
    ],
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
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

export default async function RealEstateKeywordPage({ params }: Props) {
  const { slug } = await params;
  const data = getRealEstateKeywordBySlug(slug);

  if (!data) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: "Real Estate", url: "/industries/real-estate" },
    { name: data.keyword, url: `/industries/real-estate/${data.slug}` },
  ]);

  const faqSchema = createFAQSchema(data.faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://hiverift.com/industries/real-estate/${data.slug}#service`,
    name: `HiveRift - ${data.keyword}`,
    url: `https://hiverift.com/industries/real-estate/${data.slug}`,
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
      addressCountry: "IN",
    },
    areaServed: [data.location, "Delhi NCR", "India", "Global"],
    description: data.metaDescription,
  };

  const jsonLd = [breadcrumbSchema, serviceSchema, faqSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RealEstateKeywordDetail data={data} />
    </>
  );
}

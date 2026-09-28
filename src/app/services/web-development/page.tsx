import { Metadata } from "next";
import WebDevContent from "./WebDevContent";
import { createBreadcrumbSchema, createFAQSchema, siteConfig } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Website Development Company in Delhi NCR | HiveRift",
  description: "Custom web design, responsive websites, and Next.js platforms for Delhi NCR and business growth.",
  keywords: [
    // Delhi Core & Localities
    "Web Development Company in Delhi",
    "Website Design Company in Delhi",
    "Website Developer in Delhi",
    "Web Design Agency in Delhi",
    "Custom Website Development in Delhi",
    "Affordable Website Development in Delhi",
    "WordPress Website Development Company in Delhi",
    "Business Website Development in Delhi",
    "Website Development Company in South Delhi",
    "Website Development Company in Dwarka",

    // Noida Core & Sectors
    "Website Development Company in Noida",
    "Website Design Company in Noida",
    "Web Development Company in Noida",
    "Website Developer in Noida",
    "Web Design Agency in Noida",
    "Custom Website Development in Noida",
    "Affordable Website Development in Noida",
    "WordPress Website Development Company in Noida",
    "Website Development Company in Sector 62 Noida",
    "Website Development Company in Sector 18 Noida",

    // Gurgaon / Gurugram Core & Hubs
    "Website Development Company in Gurgaon",
    "Website Design Company in Gurgaon",
    "Web Development Company in Gurgaon",
    "Website Developer in Gurgaon",
    "Web Design Agency in Gurgaon",
    "Custom Website Development in Gurgaon",
    "Affordable Website Development in Gurgaon",
    "WordPress Website Development Company in Gurgaon",
    "Website Development Company in Cyber City Gurgaon",
    "Website Development Company in Udyog Vihar Gurgaon",

    // Pan-NCR & Technical Keywords
    "website development company in delhi",
    "web development company in delhi",
    "website development company delhi",
    "web development company delhi",
    "web development agency delhi",
    "website development agency delhi",
    "best web development company in delhi",
    "best web development agency in delhi",
    "website designing company in delhi",
    "website design company in delhi",
    "ecommerce website development company in delhi",
    "ecommerce web development company delhi",
    "web application development company in delhi",
    "web app development company delhi",
    "custom web development company delhi",
    "website development company delhi ncr",
    "web development company delhi ncr",
    "website designing company delhi ncr",
    "ecommerce website development delhi",
    "ecommerce website development company noida",
    "ecommerce web development delhi",
    "custom website development company delhi",
    "custom website development delhi",
    "custom web app development company",
    "custom web application development company",
    "web application development company",
    "web application development services delhi",
    "website development services delhi",
    "website designing company in delhi with price",
    "website development cost delhi",
    "website development price delhi",
    "website design cost delhi",
    "website development agency in delhi",
    "professional website development delhi",
    "professional web development company delhi",
    "wordpress website development company delhi",
    "wordpress website development delhi",
    "php website development company delhi",
    "react web development company delhi",
    "laravel web development company delhi",
    "next js development company delhi",
    "business website development company delhi",
    "corporate website development company delhi",
    "responsive website development company delhi",
    "online store development company delhi",
    "custom ecommerce website development delhi",
    "web development services in delhi",
    "website development company near me"
  ],
  openGraph: {
    title: "Best Website Development Company in Delhi NCR, Noida & Gurgaon | HiveRift",
    description:
      "Enterprise website development, custom web applications, eCommerce storefronts, and Next.js / React solutions in Delhi NCR, Noida & Gurgaon.",
    url: "https://hiverift.com/services/web-development",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Web Development", url: "/services/web-development" },
  ]);

  const localBusinessServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hiverift.com/services/web-development#service",
    name: "HiveRift - Website Development Company in Delhi NCR, Noida & Gurgaon",
    url: "https://hiverift.com/services/web-development",
    logo: "https://hiverift.com/logo.png",
    image: "https://hiverift.com/logo.png",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6517",
      longitude: "77.1906",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "AdministrativeArea", name: "South Delhi" },
      { "@type": "AdministrativeArea", name: "Dwarka" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "AdministrativeArea", name: "Sector 62 Noida" },
      { "@type": "AdministrativeArea", name: "Sector 18 Noida" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "AdministrativeArea", name: "Cyber City Gurgaon" },
      { "@type": "AdministrativeArea", name: "Udyog Vihar Gurgaon" },
      { "@type": "Country", name: "India" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Development Services in Delhi, Noida & Gurgaon",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development Company in Delhi",
            description: "Custom web development services for business and corporate clients across Delhi and South Delhi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development Company in Noida",
            description: "Custom corporate website development and web application engineering in Sector 62 and Sector 18 Noida.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development Company in Gurgaon (Cyber City & Udyog Vihar)",
            description: "High-performance enterprise Next.js, React and Laravel web applications in Cyber City and Udyog Vihar Gurgaon.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development & WordPress Agency Delhi NCR",
            description: "Bespoke custom website development, WordPress Gutenberg block themes, and affordable website development.",
          },
        }
      ],
    },
  };

  const faqSchema = createFAQSchema([
    {
      question: "How is website development scoped and quoted for businesses in Delhi NCR, Noida and Gurgaon?",
      answer: "Website development investment is tailored to your business model, feature specifications, architecture complexity, and integrations. Rather than rigid one-size-fits-all estimates, HiveRift provides customized milestone scoping with itemized deliverables, 100% source code ownership, and zero hidden fees.",
    },
    {
      question: "Which is the best web development company in Delhi, Noida & Gurgaon?",
      answer: "HiveRift is recognized as a premier web development company in Delhi (South Delhi, Dwarka), Noida (Sector 62, 18), and Gurgaon (Cyber City, Udyog Vihar), delivering sub-second page performance, 99+ Core Web Vitals, and in-house architecture teams.",
    },
    {
      question: "Do you develop custom web applications using React, Next.js, and Laravel?",
      answer: "Yes. HiveRift is a dedicated custom web application development company building SaaS platforms, client portals, and enterprise dashboards with Next.js 15, React 19, and Laravel.",
    },
    {
      question: "Do you provide affordable website development and WordPress development?",
      answer: "Yes. We engineer high-performing corporate WordPress websites and custom web platforms designed to deliver the highest ROI for startups, MSMEs, and established enterprises.",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebDevContent />
    </>
  );
}

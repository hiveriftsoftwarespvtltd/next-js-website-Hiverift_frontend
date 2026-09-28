import { Metadata } from "next";
import RealEstateContent from "./RealEstateContent";
import { createBreadcrumbSchema, createFAQSchema, siteConfig } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Real Estate Technology Solutions | Websites, Portals & Marketing | HiveRift",
  description:
    "HiveRift helps real estate developers, builders, brokers and property businesses build a stronger digital presence and manage their online leads with websites, portals, CRM integrations and digital marketing solutions.",
  keywords: [
    "real estate technology solutions",
    "real estate website development",
    "property listing portal development",
    "real estate CRM integration",
    "whatsapp lead automation real estate",
    "real estate SEO services",
    "real estate Google Ads agency",
    "builder developer website design",
    "property broker marketing solutions"
  ],
  openGraph: {
    title: "Real Estate Technology Solutions | Websites, Portals & Marketing | HiveRift",
    description:
      "HiveRift helps real estate developers, builders, brokers and property businesses build a stronger digital presence and manage their online leads with websites, portals, CRM integrations and digital marketing solutions.",
    url: "https://hiverift.com/industries/real-estate",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/industries/real-estate",
  },
};

export default function RealEstatePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: "Real Estate & Property", url: "/industries/real-estate" },
  ]);

  const realEstateServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hiverift.com/industries/real-estate#service",
    name: "HiveRift - Real Estate Technology Solutions",
    url: "https://hiverift.com/industries/real-estate",
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
    areaServed: ["Delhi", "Noida", "Gurgaon", "India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Digital Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Website Development",
            description: "Build a professional website for your real estate company, project or property business.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Listing Portals",
            description: "Create a property platform where customers can easily discover and enquire about properties.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate CRM & Lead Management",
            description: "Connect your website and marketing channels with your sales process.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp Lead Automation",
            description: "Connect your real estate enquiries with WhatsApp to improve communication with potential buyers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate SEO",
            description: "Improve visibility when potential customers search for properties, projects and real estate services online.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google & Meta Advertising",
            description: "Generate targeted enquiries for your properties and projects through paid digital campaigns.",
          },
        }
      ],
    },
  };

  const faqSchema = createFAQSchema([
    {
      question: "Can HiveRift build a website for a real estate project?",
      answer: "Yes. We develop project websites for builders, developers, brokers and real estate companies.",
    },
    {
      question: "Can you build a property listing website?",
      answer: "Yes. We can develop property listing websites with categories, search, filters, property details, enquiry forms and admin management.",
    },
    {
      question: "Can you integrate our CRM?",
      answer: "Yes. Depending on the available API or webhook capabilities, we can integrate systems such as LeadSquared, Salesforce, Zoho CRM and HubSpot.",
    },
    {
      question: "Can you connect our website with WhatsApp?",
      answer: "Yes. We can integrate WhatsApp Business/Meta Cloud API solutions for enquiries, notifications, property information and follow-up workflows.",
    },
    {
      question: "Do you provide SEO and Google Ads?",
      answer: "Yes. HiveRift provides SEO, Google Ads, Meta Ads, landing pages and conversion tracking for real estate businesses.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RealEstateContent />
    </>
  );
}

// Schema.org JSON-LD definitions for HiveRift (India operations)

export const siteConfig = {
  name: "HiveRift",
  legalName: "HiveRift Softwares Pvt Ltd",
  url: "https://hiverift.com",
  logo: "https://hiverift.com/logo.png",
  phone: "+91-8814930229",
  email: "info@hiverift.com",
  supportEmail: "support@hiverift.com",
  address: {
    streetAddress:
      "3rd Floor, Right Portion House No. 8577 (New) / Plot No. XVI/6501 (Old), Ward No. XVI, New Rohtak Road, Karol Bagh",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110005",
    addressCountry: "IN",
  },
  geo: {
    latitude: "28.6517",
    longitude: "77.1906",
  },
  socialLinks: [
    "https://hiverift.us/",
    "https://www.linkedin.com/company/hiverift-softwares",
    "https://www.facebook.com/profile.php?id=61576054306888",
    "https://www.instagram.com/hiverift.global/",
    "https://youtube.com/@hiveriftsoftwaresprivatelimite",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hiverift.com/#organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    "@id": "https://hiverift.com/#logo",
    url: siteConfig.logo,
  },
  image: { "@id": "https://hiverift.com/#logo" },
  description:
    "HiveRift is a premier software engineering agency in New Delhi, India. We deliver custom web apps, mobile apps, AI/ML, and digital growth solutions.",
  sameAs: siteConfig.socialLinks,
  subOrganization: [
    { "@id": "https://hiverift.com/#org-india" },
    { "@id": "https://hiverift.com/#org-canada" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
      email: siteConfig.email,
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "technical support",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
      email: siteConfig.supportEmail,
    },
  ],
};

export const indiaOperatingEntitySchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://hiverift.com/#org-india",
  name: "HiveRift India",
  parentOrganization: { "@id": "https://hiverift.com/#organization" },
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "South Delhi" },
    { "@type": "AdministrativeArea", name: "Dwarka" },
    { "@type": "City", name: "Noida" },
    { "@type": "AdministrativeArea", name: "Sector 62 Noida" },
    { "@type": "AdministrativeArea", name: "Sector 18 Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "AdministrativeArea", name: "Cyber City Gurgaon" },
    { "@type": "AdministrativeArea", name: "Udyog Vihar Gurgaon" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" }
  ],
};

export const canadaOperatingEntitySchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://hiverift.com/#org-canada",
  name: "HiveRift Canada",
  parentOrganization: { "@id": "https://hiverift.com/#organization" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cambridge",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: { "@type": "Country", name: "Canada" },
};

export const localBusinessSchema = indiaOperatingEntitySchema;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hiverift.com/#website",
  url: siteConfig.url,
  name: siteConfig.name,
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://hiverift.com/#organization",
  },
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Engineering & Digital Transformation",
  provider: {
    "@id": "https://hiverift.com/#organization",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "South Delhi" },
    { "@type": "AdministrativeArea", name: "Dwarka" },
    { "@type": "City", name: "Noida" },
    { "@type": "AdministrativeArea", name: "Sector 62 Noida" },
    { "@type": "AdministrativeArea", name: "Sector 18 Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "AdministrativeArea", name: "Cyber City Gurgaon" },
    { "@type": "AdministrativeArea", name: "Udyog Vihar Gurgaon" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HiveRift Services & Digital Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development Company in Delhi, Noida & Gurgaon",
          description: "Custom web development, business website design, and WordPress development in South Delhi, Dwarka, Sector 62 Noida, and Cyber City Gurgaon.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description: "High-performance business websites, web portals, and custom web applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "eCommerce Development",
          description: "Modern online store development, payment gateways, and shopping carts",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing & SEO",
          description: "Data-backed SEO, Google Ads, Meta Ads, and performance lead generation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "iOS and Android app development using modern frameworks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Machine Learning Solutions",
          description: "Custom AI model integration, ML pipelines, and automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Annotation",
          description: "High-quality data labeling and annotation for AI models",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps Engineering",
          description: "Cloud infrastructure setup, CI/CD, and deployment automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing & SEO",
          description: "Data-driven SEO, Google Ads, and digital growth marketing",
        },
      },
    ],
  },
};


export const createBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url.startsWith("http")
      ? item.url
      : `${siteConfig.url}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
  })),
});

export const createFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.description,
  mainEntityOfPage: article.url,
  image: article.image,
  datePublished: article.datePublished || new Date().toISOString(),
  dateModified: article.dateModified || new Date().toISOString(),
  author: {
    "@type": "Person",
    name: article.authorName || "HiveRift Team",
  },
  publisher: {
    "@id": "https://hiverift.com/#organization",
  },
});

// Clean non-context version of each schema for @graph array
const { "@context": _c1, ...orgSchemaClean } = organizationSchema;
const { "@context": _c2, ...indiaSchemaClean } = indiaOperatingEntitySchema;
const { "@context": _c3, ...canadaSchemaClean } = canadaOperatingEntitySchema;
const { "@context": _c4, ...wsSchemaClean } = websiteSchema;
const { "@context": _c5, ...srvSchemaClean } = servicesSchema;

export const combinedJsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    orgSchemaClean,
    indiaSchemaClean,
    canadaSchemaClean,
    wsSchemaClean,
    srvSchemaClean,
  ],
};




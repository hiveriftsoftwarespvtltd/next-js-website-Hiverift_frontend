export interface RealEstateKeywordData {
  slug: string;
  keyword: string;
  category: "Website" | "Portal" | "CRM & Automation" | "Landing Page" | "SEO & Marketing" | "PropTech & Apps";
  location: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  deliverables: {
    title: string;
    desc: string;
    badge: string;
  }[];
  techHighlights: string[];
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const REAL_ESTATE_KEYWORDS_LIST: string[] = [
  "Real Estate Website Development in Delhi",
  "Real Estate Web Design Company in Gurgaon",
  "Property Portal Development Company in Noida",
  "Real Estate CRM Integration Delhi NCR",
  "Builder Website Development Company Gurgaon",
  "Real Estate Website Developer in Noida",
  "Property Listing Website Development Delhi",
  "Luxury Real Estate Website Design Gurgaon",
  "Real Estate Lead Automation Agency Delhi NCR",
  "RERA Compliant Real Estate Website Development",
  "Real Estate SEO Company Delhi NCR",
  "Real Estate Digital Marketing Agency Gurgaon",
  "WhatsApp Lead Automation for Real Estate Noida",
  "Real Estate Website Development in Cyber City Gurgaon",
  "Real Estate Website Developer in Sector 62 Noida",
  "Real Estate Website Development in South Delhi",
  "Real Estate Web Design Agency Golf Course Road",
  "Real Estate Portal Development Dwarka Delhi",
  "Commercial Real Estate Website Development Noida",
  "Real Estate CRM Software Company Delhi NCR",
  "Custom Property Search Portal Development",
  "Real Estate Lead Generation Website Delhi",
  "Real Estate Landing Page Design Gurgaon",
  "Broker CRM Integration Noida",
  "PropTech Software Development Delhi",
  "Property Management Portal Development Noida",
  "Real Estate Marketing Automation Delhi NCR",
  "Real Estate Web Development Agency Gurgaon",
  "Apartment Booking Portal Development",
  "Real Estate Listing Platform Delhi",
  "Real Estate Mobile App Development Delhi NCR",
  "Villa & Township Project Website Design",
  "Real Estate Broker Website Noida",
  "Builder Project Launch Landing Page",
  "Real Estate Lead Funnel Agency Delhi",
  "Commercial Leasing Portal Development",
  "Real Estate Speed Optimization Delhi NCR",
  "Next.js Real Estate Portal Development",
  "Real Estate Google Ads & SEO Agency",
  "Property Valuation Tool Development",
  "Site Visit Booking Automation Real Estate",
  "Property Agent Portal Development Gurgaon",
  "Real Estate Web Development Company in Delhi",
  "Real Estate Web Development Company in Gurgaon",
  "Real Estate Web Development Company in Noida",
  "Real Estate Web Development Company Delhi NCR",
  "Best Real Estate Web Developers Near Me"
];

export function slugifyKeyword(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function detectCategory(kw: string): RealEstateKeywordData["category"] {
  const lower = kw.toLowerCase();
  if (lower.includes("crm") || lower.includes("automation") || lower.includes("whatsapp")) {
    return "CRM & Automation";
  }
  if (lower.includes("portal") || lower.includes("listing") || lower.includes("platform") || lower.includes("search")) {
    return "Portal";
  }
  if (lower.includes("landing page") || lower.includes("funnel") || lower.includes("launch")) {
    return "Landing Page";
  }
  if (lower.includes("seo") || lower.includes("marketing") || lower.includes("google ads") || lower.includes("optimization")) {
    return "SEO & Marketing";
  }
  if (lower.includes("app") || lower.includes("proptech") || lower.includes("tool") || lower.includes("valuation")) {
    return "PropTech & Apps";
  }
  return "Website";
}

function detectLocation(kw: string): string {
  const lower = kw.toLowerCase();
  if (lower.includes("cyber city") || lower.includes("golf course")) return "Cyber City / Golf Course Road, Gurgaon";
  if (lower.includes("gurgaon")) return "Gurgaon, Haryana";
  if (lower.includes("sector 62")) return "Sector 62, Noida";
  if (lower.includes("noida")) return "Noida & Greater Noida, UP";
  if (lower.includes("south delhi")) return "South Delhi";
  if (lower.includes("dwarka")) return "Dwarka & West Delhi";
  if (lower.includes("delhi ncr")) return "Delhi NCR (Delhi, Gurgaon, Noida)";
  if (lower.includes("delhi")) return "Delhi";
  return "Delhi NCR & Pan-India";
}

export function buildKeywordData(keyword: string): RealEstateKeywordData {
  const slug = slugifyKeyword(keyword);
  const category = detectCategory(keyword);
  const location = detectLocation(keyword);

  const metaTitle = `${keyword} | HiveRift PropTech & Web Solutions`;
  const metaDescription = `Looking for ${keyword}? HiveRift delivers high-converting real estate websites, CRM integrations, property portals, and digital marketing tailored for ${location}. Sub-second speed and RERA compliance.`;

  let headline = `${keyword}`;
  let subheadline = `Bespoke digital architecture, lightning-fast Next.js engineering, and high-converting lead funnels engineered specifically for real estate developers, builders, and brokers in ${location}.`;

  let deliverables = [
    {
      title: "RERA Compliant Architecture",
      desc: "Mandatory project registration disclosures, approved master plans, downloadable PDF brochures, and transparent regulatory disclaimers.",
      badge: "Compliance"
    },
    {
      title: "Sub-Second Next.js Performance",
      desc: "Core Web Vitals 99+ score ensuring luxury buyers and high-net-worth investors experience instant property rendering on mobile 5G networks.",
      badge: "Speed SLA"
    },
    {
      title: "Instant WhatsApp & Call Lead Routing",
      desc: "One-tap site visit booking, automated WhatsApp brochure delivery, and real-time CRM webhook synchronization.",
      badge: "Conversion"
    },
    {
      title: "Interactive Property Visualizers",
      desc: "Mobile-responsive floor plans, master plan zoom, high-res gallery lightbox, and location distance calculators (airports, metros, expressways).",
      badge: "UX Design"
    }
  ];

  if (category === "CRM & Automation") {
    headline = `${keyword} — Zero Lead Leakage Architecture`;
    subheadline = `Automate your buyer pipeline from initial enquiry to site visit booking. Direct integration with LeadSquared, Salesforce, Zoho, and WhatsApp Cloud API for real estate teams in ${location}.`;
    deliverables = [
      {
        title: "Omnichannel Lead Ingestion",
        desc: "Aggregate leads in real-time from 99acres, MagicBricks, Google Ads, Meta Ads, and your direct website forms into one clean dashboard.",
        badge: "Ingestion"
      },
      {
        title: "Automated WhatsApp Bot & Brochure Delivery",
        desc: "Engage prospective buyers within 3 seconds with automated unit configurations, pricing sheets, and site-visit slot calendars.",
        badge: "Automation"
      },
      {
        title: "Agent Round-Robin Assignment",
        desc: "Route high-ticket buyer enquiries automatically to available sales relationship managers based on property budget and locality.",
        badge: "Sales Ops"
      },
      {
        title: "Call Tracking & Follow-Up Reminders",
        desc: "Cloud telephony integration with call recording, automated IVR routing, and instant manager escalations for uncontacted leads.",
        badge: "Pipeline"
      }
    ];
  } else if (category === "Portal") {
    headline = `${keyword} — High-Capacity PropTech Platforms`;
    subheadline = `Engineered for enterprise brokerages and multi-builder networks. Scalable property database, intelligent multi-facet filters, and verified property listing management in ${location}.`;
    deliverables = [
      {
        title: "Multi-Parametric Property Search",
        desc: "Filter by BHK configuration, carpet area, possession date, budget bracket, developer credibility, and amenities.",
        badge: "Search UX"
      },
      {
        title: "Interactive Geospatial Mapping",
        desc: "Google Maps API integration pinpointing nearby social infrastructure, upcoming metro lines, schools, and hospitals.",
        badge: "Maps"
      },
      {
        title: "Broker & Builder Management Dashboards",
        desc: "Secure role-based authentication allowing agents and builders to manage property inventory, approve listings, and view enquiry velocity.",
        badge: "RBAC"
      },
      {
        title: "Mortgage & EMI Estimator Integration",
        desc: "Client-side interactive EMI calculator with loan tenure graphs, amortization schedules, and partner bank lead captures.",
        badge: "FinTech"
      }
    ];
  } else if (category === "Landing Page") {
    headline = `${keyword} — High-Velocity Project Launch Funnels`;
    subheadline = `Maximize PPC conversion rate and minimize cost per lead (CPL). Rapid-loading, single-property launch pages optimized for Google Search and Meta Ads campaigns across ${location}.`;
    deliverables = [
      {
        title: "High-Converting Hero & Sticky Forms",
        desc: "Optimized mobile form layout with phone number validation, OTP verification, and instant downloadable brochure gates.",
        badge: "CRO"
      },
      {
        title: "3D Virtual Walkthrough & Video Tours",
        desc: "Seamless embedded Matterport 3D walkthroughs, aerial drone footage, and construction status update timelines.",
        badge: "Media"
      },
      {
        title: "Scarcity & Launch Offer Widgets",
        desc: "Pre-launch pricing counters, limited inventory badges, and exclusive payment plan calculators (e.g. 20:80, CLP).",
        badge: "Buyer Psychology"
      },
      {
        title: "Pixel-Perfect Conversion Tracking",
        desc: "Google Tag Manager, Google Analytics 4, Meta Conversions API (CAPI), and offline lead conversion tracking setup.",
        badge: "Analytics"
      }
    ];
  } else if (category === "SEO & Marketing") {
    headline = `${keyword} — Dominate Local Real Estate Search`;
    subheadline = `Outrank aggregator portals and capture ready-to-buy property searchers. Data-driven technical SEO, Google 3-Pack optimization, and high-ROI Google Ads for ${location}.`;
    deliverables = [
      {
        title: "Google Local 3-Pack Dominance",
        desc: "Optimized Google Business Profile architecture, localized citations, and schema markup targeting local property investors.",
        badge: "Local SEO"
      },
      {
        title: "High-Intent Commercial Keyword Clusters",
        desc: "Hyper-focused landing page structures ranking for 'luxury apartments in', 'commercial office space near', and builder project terms.",
        badge: "Ranking"
      },
      {
        title: "High-ROI Google Search Ads Management",
        desc: "Negative keyword pruning, competitor bidding suppression, and precise location geotargeting to lower cost-per-lead.",
        badge: "PPC"
      },
      {
        title: "Real Estate Structured Schema Markup",
        desc: "JSON-LD RealEstateListing, SingleFamilyResidence, Offer, and Organization schema ensuring rich search engine snippets.",
        badge: "Schema"
      }
    ];
  }

  const techHighlights = [
    "Next.js 15 & React 19",
    "Tailwind CSS & Framer Motion",
    "Node.js / Express Backend APIs",
    "WhatsApp Cloud API & Webhooks",
    "PostgreSQL / MongoDB Property Store",
    "AWS S3 & CloudFront Edge CDN",
    "Google Maps Platform API",
    "LeadSquared / Salesforce / Zoho CRM"
  ];

  const features = [
    "Mobile-first responsive layout (tested on iPhone 16 & modern Android)",
    "RERA approval disclaimer & registration certificate display",
    "Interactive master plan & unit layout zoom viewers",
    "WhatsApp click-to-chat with pre-filled property reference codes",
    "Instant PDF brochure download with automated lead capture",
    "Google Maps integration with commute distance calculation",
    "Integrated EMI & loan eligibility calculator",
    "Sub-second page load speeds (<0.5s) on mobile 4G/5G networks",
    "SEO-friendly URLs, meta tags, and structured JSON-LD data",
    "Role-based admin portal to add, update, and archive properties",
    "Lead backup to Google Sheets & CRM with instant email/SMS alerts",
    "Zero ongoing vendor lock-in with 100% full source code ownership"
  ];

  const faqs = [
    {
      question: `Why choose HiveRift for ${keyword}?`,
      answer: `HiveRift is headquartered in New Delhi and specializes exclusively in high-performance digital engineering for real estate. We don't use clunky generic templates. We build custom Next.js platforms with sub-second page loads, automated CRM routing, and RERA compliance designed specifically for the competitive ${location} property market.`
    },
    {
      question: `How fast can you deliver a project for ${keyword}?`,
      answer: `Project timelines depend on technical scope. A high-converting project launch landing page can be deployed within 5 to 7 business days. A comprehensive corporate builder website or customized property portal typically takes 2 to 4 weeks, including UX wireframes, review sprints, and production deployment.`
    },
    {
      question: `Can you integrate our existing Real Estate CRM and WhatsApp?`,
      answer: `Yes, 100%. We routinely integrate websites and portals with LeadSquared, Salesforce, Zoho CRM, HubSpot, and custom internal ERPs, as well as the official WhatsApp Cloud API for automated brochure distribution and agent notification.`
    },
    {
      question: `Is the website compliant with RERA regulations?`,
      answer: `Absolutely. We ensure all project pages feature proper RERA registration numbers, QR code embeds, approved site plans, authorized agent disclaimers, and transparent developer information to ensure full regulatory compliance.`
    },
    {
      question: `Do we own the source code and domain after launch?`,
      answer: `Yes. Upon final milestone sign-off, HiveRift transfers 100% full intellectual property ownership, source code repositories, hosting credentials, and documentation with zero vendor lock-in or recurring platform fees.`
    }
  ];

  return {
    slug,
    keyword,
    category,
    location,
    headline,
    subheadline,
    metaTitle,
    metaDescription,
    overview: `HiveRift provides specialized engineering for ${keyword}. Whether you are an established builder launching a new township, a luxury real estate advisory firm in ${location}, or a PropTech startup needing a modern property portal, our engineering stack ensures unmatched speed, robust lead security, and superior search visibility.`,
    deliverables,
    techHighlights,
    features,
    faqs
  };
}

// Generate the dictionary of all 47 keywords
export const REAL_ESTATE_KEYWORDS_DATA: Record<string, RealEstateKeywordData> = {};

REAL_ESTATE_KEYWORDS_LIST.forEach((kw) => {
  const data = buildKeywordData(kw);
  REAL_ESTATE_KEYWORDS_DATA[data.slug] = data;
});

export function getRealEstateKeywordBySlug(slug: string): RealEstateKeywordData | undefined {
  return REAL_ESTATE_KEYWORDS_DATA[slug];
}

export function getAllRealEstateKeywordSlugs(): string[] {
  return Object.keys(REAL_ESTATE_KEYWORDS_DATA);
}

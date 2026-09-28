import { FULL_INDUSTRIES_DATA, FullIndustryDetails } from "./industryDetailsFull";

export interface IndustryKeywordData {
  industryId: string;
  industryTitle: string;
  slug: string;
  keyword: string;
  location: string;
  category: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  badge: string;
  proofMetrics: {
    value: string;
    label: string;
  }[];
  deliverables: {
    title: string;
    desc: string;
    badge: string;
  }[];
  challengeVsSolution: {
    challenge: string;
    solution: string;
  };
  techHighlights: string[];
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function slugifyKeyword(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractLocation(keyword: string): string {
  const kw = keyword.toLowerCase();
  if (kw.includes("cyber city") || kw.includes("golf course")) return "Cyber City & Golf Course Road, Gurgaon";
  if (kw.includes("gurgaon") || kw.includes("gurugram")) return "Gurgaon / Gurugram";
  if (kw.includes("noida")) return "Noida & Greater Noida";
  if (kw.includes("delhi ncr")) return "Delhi NCR (Delhi, Gurgaon, Noida)";
  if (kw.includes("south delhi")) return "South Delhi";
  if (kw.includes("dwarka")) return "Dwarka, Delhi";
  if (kw.includes("delhi")) return "New Delhi & Delhi NCR";
  if (kw.includes("india")) return "Pan-India & Global";
  return "Delhi NCR & Pan-India";
}

function detectKeywordCategory(kw: string): string {
  const lower = kw.toLowerCase();
  if (lower.includes("seo") || lower.includes("marketing") || lower.includes("lead generation")) return "Growth & Performance SEO";
  if (lower.includes("crm") || lower.includes("integration") || lower.includes("automation")) return "CRM & Workflow Automation";
  if (lower.includes("portal") || lower.includes("dashboard") || lower.includes("software")) return "Portal & Cloud Software";
  if (lower.includes("app") || lower.includes("mobile")) return "Mobile & Cross-Platform Apps";
  if (lower.includes("calculator") || lower.includes("tool") || lower.includes("ordering") || lower.includes("booking")) return "Interactive Engine & UX";
  if (lower.includes("mvp") || lower.includes("saas") || lower.includes("prototype")) return "MVP & SaaS Product Engineering";
  return "Custom Web Platform";
}

// Map of industry-specific deliverables, proof metrics and challenges
const INDUSTRY_CUSTOMIZATIONS: Record<string, {
  defaultBadge: string;
  metrics: { value: string; label: string }[];
  deliverableTemplates: { title: string; desc: string; badge: string }[];
  domainChallenge: string;
  domainSolution: string;
  coreTech: string[];
}> = {
  finance: {
    defaultBadge: "Bank-Grade FinTech & Advisory Web Architecture",
    metrics: [
      { value: "256-bit", label: "SSL Data Encryption" },
      { value: "< 0.3s", label: "Calculation Latency" },
      { value: "100%", label: "Code & IP Ownership" },
      { value: "99.99%", label: "System Availability" }
    ],
    deliverableTemplates: [
      {
        title: "Compliance-Ready Digital Architecture",
        desc: "Institutional web engineering adhering to statutory financial guidelines, SSL encryption, and high-trust disclosures.",
        badge: "Compliance"
      },
      {
        title: "Interactive Calculators & Dynamic Tools",
        desc: "Precision financial formula engines with real-time amortization charts, SIP projections, and instant lead capture.",
        badge: "Calculators"
      },
      {
        title: "Digital Client Portals & Document Vaults",
        desc: "Encrypted self-service dashboards for digital KYC submission, loan tracking, and account statement downloads.",
        badge: "Client Vault"
      },
      {
        title: "Automated Lead Scoring & CRM Pipelines",
        desc: "Direct integration dispatching qualified borrower and investor inquiries into Salesforce, LeadSquared, or Zoho.",
        badge: "CRM Webhooks"
      },
      {
        title: "High-Intent Commercial Financial SEO",
        desc: "Targeted technical SEO architecture designed to dominate regional search results for high-value financial keywords.",
        badge: "FinTech SEO"
      },
      {
        title: "Bank-Grade Infrastructure & Scalability",
        desc: "Next.js edge rendering, Redis caching, and automated audit logging ensuring zero downtime during peak volumes.",
        badge: "Cloud Infra"
      }
    ],
    domainChallenge: "Financial institutions face drop-offs from slow calculators, manual loan intake processes, and user skepticism over data privacy and security.",
    domainSolution: "HiveRift delivers sub-second Next.js web applications with bank-grade 256-bit encryption, instant calculation engines, and automated CRM pipelines that convert visitor trust into funded inquiries.",
    coreTech: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"]
  },

  "professional-services": {
    defaultBadge: "High-Authority Corporate & Practice Architecture",
    metrics: [
      { value: "< 0.4s", label: "Page Speed Benchmark" },
      { value: "100%", label: "Intellectual Property Ownership" },
      { value: "3x", label: "Qualified Intake Conversion" },
      { value: "24/7", label: "Availability SLA" }
    ],
    deliverableTemplates: [
      {
        title: "Authority-Driven Corporate Branding & Web Design",
        desc: "Editorial, commanding visual design tailored to prestigious consulting firms, law practices, and corporate advisors.",
        badge: "Brand Authority"
      },
      {
        title: "Automated Client Intake & Pre-Qualification",
        desc: "Frictionless intake funnels that screen client requirements and schedule consultations directly onto partner calendars.",
        badge: "Intake Automation"
      },
      {
        title: "Encrypted Document Exchange & Client Vaults",
        desc: "Secure self-service client portals for confidential agreement signing, brief submissions, and deliverables exchange.",
        badge: "Client Portal"
      },
      {
        title: "Multi-Practice Directory & Leadership Showcases",
        desc: "Comprehensive partner profiles, sector credentials, case study publications, and media appearances structured for SEO.",
        badge: "Showcases"
      },
      {
        title: "Localized Google 3-Pack & Organic SEO",
        desc: "Dominating competitive professional queries across Delhi, Gurgaon, and Noida with structured schema markup.",
        badge: "B2B SEO"
      },
      {
        title: "CRM & Retainer Billing Integration",
        desc: "Bi-directional synchronization with HubSpot, Zoho, and automated invoice milestone notifications.",
        badge: "CRM Sync"
      }
    ],
    domainChallenge: "Professional advisory firms frequently struggle with outdated websites that fail to demonstrate market authority, resulting in manual intake overhead and missed corporate mandates.",
    domainSolution: "HiveRift develops high-authority digital platforms with automated client intake, encrypted document repositories, and top-tier SEO architecture that attracts high-value corporate retainers.",
    coreTech: ["Next.js 15", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "HubSpot API", "Stripe"]
  },

  "food-restaurant": {
    defaultBadge: "Direct Ordering & Restaurant Automation Architecture",
    metrics: [
      { value: "0%", label: "Aggregator Commissions" },
      { value: "< 0.3s", label: "Digital Menu Load Speed" },
      { value: "100%", label: "Direct Customer Data Ownership" },
      { value: "Instant", label: "KOT Ticket Sync" }
    ],
    deliverableTemplates: [
      {
        title: "Direct Online Food Ordering System",
        desc: "Zero-commission custom online ordering platform with fast address selection, coupon engines, and instant checkout.",
        badge: "Direct Ordering"
      },
      {
        title: "Interactive Digital QR Menus",
        desc: "Sub-second digital menus with dynamic dish availability, allergen filters, chef specials, and table-ordering capabilities.",
        badge: "QR Menu UX"
      },
      {
        title: "POS & Kitchen Order Ticket (KOT) Integration",
        desc: "Bi-directional integration with Petpooja, POSist, and custom thermal printer webhooks for kitchen order routing.",
        badge: "POS Webhooks"
      },
      {
        title: "Table Reservation & Waitlist Engine",
        desc: "Real-time table booking system with slot allocation, pre-payment tokens, and instant WhatsApp booking confirmations.",
        badge: "Table Booking"
      },
      {
        title: "Automated WhatsApp Loyalty & Re-Order Triggers",
        desc: "Customer retention workflows sending personalized discount codes, birthday specials, and one-click re-order links.",
        badge: "WhatsApp CRM"
      },
      {
        title: "Hyperlocal Restaurant & Cafe SEO",
        desc: "Optimizing Google Business profiles and local search keywords to dominate 'near me' food searches across Delhi NCR.",
        badge: "Local SEO"
      }
    ],
    domainChallenge: "Food businesses suffer 25-35% revenue loss on aggregator commissions, lose direct contact with customers, and face order confusion during rush hours.",
    domainSolution: "HiveRift builds high-speed, direct online ordering systems that eliminate middleman commissions, automate kitchen order tickets (KOT), and foster direct loyalty via WhatsApp.",
    coreTech: ["Next.js 15", "React 19", "Node.js", "Firebase", "PostgreSQL", "WhatsApp API", "Razorpay"]
  },

  startups: {
    defaultBadge: "Rapid MVP & Venture-Scale Product Architecture",
    metrics: [
      { value: "4-8 Wks", label: "Production MVP Delivery" },
      { value: "100%", label: "Full Code & IP Ownership" },
      { value: "< 0.2s", label: "API & Dashboard Latency" },
      { value: "Scale-Ready", label: "Cloud-Native Infrastructure" }
    ],
    deliverableTemplates: [
      {
        title: "Rapid MVP & Prototype Product Engineering",
        desc: "Taking initial product specifications to launch-ready SaaS or web applications in 4 to 8 weeks with production-grade code.",
        badge: "Rapid MVP"
      },
      {
        title: "Multi-Tenant SaaS Dashboards & Role RBAC",
        desc: "Scalable dashboard architectures with workspace isolation, team invites, role permissions, and user onboarding flows.",
        badge: "SaaS Dashboards"
      },
      {
        title: "Stripe & Razorpay Subscription Billing",
        desc: "Turnkey recurring subscription tiers, usage-based metered billing, automated invoices, and customer billing portals.",
        badge: "Subscription UX"
      },
      {
        title: "High-Converting Investor & GTM Landing Pages",
        desc: "Compelling pitch websites with product animations, interactive feature walkthroughs, waitlists, and ROI calculators.",
        badge: "GTM Landing Page"
      },
      {
        title: "REST & GraphQL API Architecture",
        desc: "Robust, documented, and secure API layers ready for third-party developer integrations and high-volume requests.",
        badge: "API Engineering"
      },
      {
        title: "Cloud-Native Scalability & DevOps",
        desc: "Dockerized microservices deployed on AWS/Vercel with CI/CD automation, monitoring, and database clustering.",
        badge: "Cloud DevOps"
      }
    ],
    domainChallenge: "Startups frequently burn runway on slow development cycles, brittle codebases from freelancers, and architectural flaws that crumble under user growth.",
    domainSolution: "HiveRift engineers venture-scale, production-ready MVPs with modular Next.js and Node.js architectures, clean VC-diligence codebases, and fixed milestone guarantees.",
    coreTech: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Docker", "AWS", "Tailwind CSS"]
  },

  healthcare: {
    defaultBadge: "NABH, HIPAA & ABDM Compliant Architecture",
    metrics: [
      { value: "< 0.5s", label: "OPD Booking Speed" },
      { value: "100%", label: "ABDM & Data Privacy" },
      { value: "0s", label: "WhatsApp Report Sync" },
      { value: "99.99%", label: "Uptime Reliability" }
    ],
    deliverableTemplates: [
      {
        title: "Hospital & Medical Web Platforms",
        desc: "Authoritative medical web experiences showcasing doctor credentials, OPD schedules, and emergency helplines.",
        badge: "Medical Web"
      },
      {
        title: "Doctor Appointment & OPD Booking",
        desc: "Frictionless calendar booking with slot management, pre-payment tokens, and instant WhatsApp confirmations.",
        badge: "OPD Booking"
      },
      {
        title: "Telemedicine & Encrypted Consultations",
        desc: "HIPAA-compliant WebRTC video consultations with digital prescription downloads and health record storage.",
        badge: "Telemedicine"
      },
      {
        title: "Diagnostic Lab & Report Delivery Portals",
        desc: "Automated LIS webhooks dispatching patient test reports directly to WhatsApp and secure patient accounts.",
        badge: "Lab Portals"
      },
      {
        title: "Local Healthcare & Doctor Profile SEO",
        desc: "Capturing high-intent patient queries and medical specialties across Google Search and Google Maps.",
        badge: "Medical SEO"
      },
      {
        title: "ABDM / Ayushman Bharat Compliance",
        desc: "Architectural alignment with India's Ayushman Bharat Digital Mission (ABDM) and international data standards.",
        badge: "Compliance"
      }
    ],
    domainChallenge: "Healthcare providers face patient drop-offs from clumsy phone booking systems, delayed lab reports, and strict regulatory compliance requirements.",
    domainSolution: "HiveRift engineers secure, HIPAA/ABDM-ready healthcare platforms with sub-second appointment scheduling, real-time WhatsApp lab sync, and high-trust medical SEO.",
    coreTech: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "WebRTC", "Docker", "AWS HealthLake"]
  },

  education: {
    defaultBadge: "Scalable EdTech, LMS & Admissions Architecture",
    metrics: [
      { value: "< 0.3s", label: "Video Latency" },
      { value: "100%", label: "Automated Invoicing" },
      { value: "100%", label: "Code & IP Ownership" },
      { value: "0", label: "Video Buffering" }
    ],
    deliverableTemplates: [
      {
        title: "Custom Learning Management Systems (LMS)",
        desc: "Interactive video player, module progress tracking, course completion badges, and automated certificate generation.",
        badge: "Custom LMS"
      },
      {
        title: "Student & Faculty Dashboards",
        desc: "Secure portals for attendance tracking, homework assignments, study material downloads, and teacher feedback.",
        badge: "User Dashboards"
      },
      {
        title: "Live Classes & Proctored Exam Engines",
        desc: "Integrated WebRTC live streaming with anti-cheat quiz proctoring and automated score reporting.",
        badge: "Exam Engines"
      },
      {
        title: "Admission Funnels & Fee Collection",
        desc: "Streamlined enrollment applications with automated installment invoices, receipt generation, and UPI payments.",
        badge: "Fee Automation"
      },
      {
        title: "Course Catalog & EdTech SEO",
        desc: "Structured schema markup and keyword ranking strategies to attract organic student enrollments.",
        badge: "EdTech SEO"
      },
      {
        title: "Mobile App for Students & Parents",
        desc: "Cross-platform mobile apps delivering instant lecture notifications, exam timetables, and performance reports.",
        badge: "Mobile Apps"
      }
    ],
    domainChallenge: "Educational institutions struggle with fragmented class links, high drop-out rates, delayed manual fee collection, and vulnerable video course materials.",
    domainSolution: "HiveRift creates high-retention LMS platforms featuring sub-second DRM video streaming, automated fee reconciliation, and interactive student engagement dashboards.",
    coreTech: ["Next.js 15", "React 19", "Node.js", "PostgreSQL", "WebRTC", "Docker", "AWS MediaLive"]
  },

  hospitality: {
    defaultBadge: "Direct Booking & Guest Experience Architecture",
    metrics: [
      { value: "+65%", label: "Direct Bookings" },
      { value: "0%", label: "OTA Commissions" },
      { value: "< 0.4s", label: "Calendar Booking UX" },
      { value: "100%", label: "Code Ownership" }
    ],
    deliverableTemplates: [
      {
        title: "Direct Reservation & Room Booking Engines",
        desc: "High-conversion booking system with dynamic calendar rates, instant confirmations, and zero middleman commissions.",
        badge: "Direct Booking"
      },
      {
        title: "Flight & GDS API Integrations",
        desc: "Real-time Amadeus/Sabre aggregators sync for live flight availability, dynamic packages, and pricing.",
        badge: "GDS Sync"
      },
      {
        title: "Guest Self-Service & Itinerary Portals",
        desc: "Digital concierge portals for check-in passes, activity bookings, and itinerary management.",
        badge: "Guest Portal"
      },
      {
        title: "Multi-Currency International Payments",
        desc: "Frictionless global checkout accepting credit cards, PayPal, Stripe, and localized payment options.",
        badge: "Global Payments"
      },
      {
        title: "Hospitality & Tourism Organic SEO",
        desc: "Capturing travelers searching for premium hotels, tour packages, and travel itineraries across Google.",
        badge: "Travel SEO"
      },
      {
        title: "WhatsApp Booking & Trip Notifications",
        desc: "Automated pre-arrival itineraries, reservation vouchers, and emergency travel updates sent via WhatsApp.",
        badge: "WhatsApp Alerts"
      }
    ],
    domainChallenge: "Hotels and travel operators forfeit up to 25% of gross revenue to online travel agencies (OTAs) and face cart drop-offs on slow mobile checkout forms.",
    domainSolution: "HiveRift develops high-speed direct booking platforms that bypass OTA commissions, synchronize room inventory in real-time, and automate guest itineraries.",
    coreTech: ["Next.js 15", "Node.js", "PostgreSQL", "Stripe", "Amadeus API", "WhatsApp Cloud API"]
  },

  retail: {
    defaultBadge: "Sub-Second Headless Commerce Architecture",
    metrics: [
      { value: "< 0.5s", label: "Product Page Speed" },
      { value: "+40%", label: "Mobile Checkout Rates" },
      { value: "100%", label: "Inventory Sync" },
      { value: "Zero", label: "Stockout Errors" }
    ],
    deliverableTemplates: [
      {
        title: "Headless eCommerce Storefronts",
        desc: "Ultra-fast Next.js storefronts engineered for sub-second product page loads and maximum average order value (AOV).",
        badge: "Headless Web"
      },
      {
        title: "Multi-Vendor Marketplace Systems",
        desc: "Robust marketplace architectures with merchant dashboards, split payments, and automated commission payouts.",
        badge: "Marketplaces"
      },
      {
        title: "Omnichannel Warehouse & Inventory Sync",
        desc: "Centralized stock synchronization across physical retail stores, online warehouses, and third-party marketplaces.",
        badge: "Inventory Sync"
      },
      {
        title: "One-Click Checkout & Payment Gateways",
        desc: "Streamlined checkout with UPI auto-pay, credit card vaults, BNPL, and cash-on-delivery OTP verification.",
        badge: "Checkout UX"
      },
      {
        title: "WhatsApp Abandoned Cart Recovery",
        desc: "Automated message triggers recovering lost carts with personalized discount vouchers and direct payment links.",
        badge: "Cart Recovery"
      },
      {
        title: "eCommerce SEO & Product Schema Markup",
        desc: "Rich snippet optimization displaying live product pricing, stock availability, and star ratings on Google.",
        badge: "Retail SEO"
      }
    ],
    domainChallenge: "Online brands lose over 70% of potential sales due to sluggish mobile load times, multi-step checkout friction, and inventory discrepancies.",
    domainSolution: "HiveRift engineers headless Next.js online stores with sub-second page performance, automated cart recovery, and real-time multi-warehouse synchronization.",
    coreTech: ["Next.js 15", "TypeScript", "Shopify Plus / Medusa", "PostgreSQL", "Stripe / Razorpay", "Tailwind CSS"]
  },

  manufacturing: {
    defaultBadge: "Enterprise Industrial & B2B Portal Architecture",
    metrics: [
      { value: "-60%", label: "Manual RFQ Overhead" },
      { value: "5x", label: "Quotation Turnaround" },
      { value: "100%", label: "Shop Floor Visibility" },
      { value: "100%", label: "Code & IP Ownership" }
    ],
    deliverableTemplates: [
      {
        title: "B2B Dealer & Distributor Portals",
        desc: "Self-service dealer platforms with tiered wholesale pricing, credit line balances, and automated re-ordering.",
        badge: "Dealer Portals"
      },
      {
        title: "Automated RFQ & Quotation Generators",
        desc: "Algorithmic cost estimation tools that convert custom engineering specs into downloadable formal proposals.",
        badge: "RFQ Automation"
      },
      {
        title: "Shop Floor & Production ERP Workflows",
        desc: "Cloud systems synchronizing bill of materials (BOM), work orders, and warehouse raw materials in real-time.",
        badge: "Custom ERP"
      },
      {
        title: "Industrial Catalog & Capability Showcase",
        desc: "Interactive technical spec sheets, CAD drawing downloads, and machinery capability showcases.",
        badge: "Tech Catalogs"
      },
      {
        title: "B2B Industrial SEO & Buyer Funnels",
        desc: "Targeting high-volume procurement queries and OEM supplier keywords across Delhi NCR and international export hubs.",
        badge: "Industrial SEO"
      },
      {
        title: "Supply Chain & Shipment Tracking",
        desc: "Real-time dispatch notifications, transporter bill uploads, and milestone tracking for corporate buyers.",
        badge: "Dispatch Sync"
      }
    ],
    domainChallenge: "Industrial manufacturers lose valuable dealer orders due to slow paper quotation cycles, unorganized spreadsheets, and poor digital catalog visibility.",
    domainSolution: "HiveRift builds tailored B2B dealer ordering portals, quotation automation engines, and cloud ERP systems that eliminate operational bottlenecks.",
    coreTech: ["Next.js 15", "Node.js", "PostgreSQL", "Docker", "AWS", "Python", "Tailwind CSS"]
  },

  logistics: {
    defaultBadge: "Supply Chain & Smart Transportation Architecture",
    metrics: [
      { value: "25-35%", label: "Route Cost Reduction" },
      { value: "Real-Time", label: "GPS Tracking Sync" },
      { value: "100%", label: "Consignment Visibility" },
      { value: "99.99%", label: "Cloud Uptime" }
    ],
    deliverableTemplates: [
      {
        title: "Real-Time Consignment & GPS Tracking",
        desc: "Public and private tracking portals with live truck location updates, expected delivery ETAs, and SMS alerts.",
        badge: "Live Tracking"
      },
      {
        title: "Route Optimization & Dispatch Management",
        desc: "Automated dispatch engines assigning delivery orders based on vehicle capacity, traffic density, and priority.",
        badge: "Route Planning"
      },
      {
        title: "Digital Proof of Delivery (e-POD)",
        desc: "Driver mobile interfaces capturing digital signatures, photo verification, and automatic consignee notifications.",
        badge: "e-POD System"
      },
      {
        title: "Freight Rate Calculator & Booking Engine",
        desc: "Instant shipping cost estimators for full-truckload (FTL) and less-than-truckload (LTL) with booking confirmations.",
        badge: "Freight Engine"
      },
      {
        title: "Transporter & Driver Fleet Portal",
        desc: "Fleet owner dashboards for vehicle documentation, toll reimbursements, maintenance tracking, and payouts.",
        badge: "Fleet Portal"
      },
      {
        title: "Logistics Lead Generation & Local SEO",
        desc: "Capturing corporate freight inquiries and warehousing demands across major transportation corridors.",
        badge: "Logistics SEO"
      }
    ],
    domainChallenge: "Transport and logistics companies suffer from blind spots between dispatch and delivery, manual freight pricing negotiations, and delayed proof-of-delivery paperwork.",
    domainSolution: "HiveRift creates connected logistics software with live GPS tracking, algorithmic route planning, and automated digital proof of delivery.",
    coreTech: ["Next.js 15", "React Native", "Node.js", "PostgreSQL", "Google Maps API", "Docker"]
  },

  legal: {
    defaultBadge: "Confidential Legal & Practice Management Architecture",
    metrics: [
      { value: "100%", label: "Client Confidentiality" },
      { value: "< 0.4s", label: "Page Load Speed" },
      { value: "100%", label: "Code & Data Ownership" },
      { value: "3x", label: "High-Value Mandates" }
    ],
    deliverableTemplates: [
      {
        title: "Law Firm Brand & Corporate Identity Web",
        desc: "Stately, editorial web presence reflecting institutional stature, notable rulings, and specialized legal practices.",
        badge: "Firm Web"
      },
      {
        title: "Confidential Client Intake & Scheduling",
        desc: "Pre-screened client inquiry funnels with automated conflict checks and calendar consultation bookings.",
        badge: "Intake Vault"
      },
      {
        title: "Encrypted Legal Document Repositories",
        desc: "Bank-grade client vaults for drafting reviews, litigation documents, signed agreements, and invoices.",
        badge: "Document Vault"
      },
      {
        title: "Partner Practice Areas & Case Repositories",
        desc: "Searchable archives of legal articles, precedent summaries, partner bios, and courtroom achievements.",
        badge: "Legal Insights"
      },
      {
        title: "Legal SEO & Local Google Rankings",
        desc: "Establishing first-page dominance for high-value legal advisory and corporate litigation search terms.",
        badge: "Legal SEO"
      },
      {
        title: "Retainer & Escrow Billing Integrations",
        desc: "Compliant retainer invoicing systems with automated client milestone notifications and receipt generation.",
        badge: "Billing UX"
      }
    ],
    domainChallenge: "Law firms and boutique practices struggle with outdated websites that undermine trust, unorganized email intake that causes conflict risks, and poor online visibility.",
    domainSolution: "HiveRift builds commanding, confidential legal websites with automated client intake, encrypted document repositories, and top-tier organic SEO.",
    coreTech: ["Next.js 15", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"]
  }
};

/**
 * Builds rich, fully personalized keyword data for any industry search term.
 */
export function getIndustryKeywordData(industryId: string, slug: string): IndustryKeywordData | null {
  const industry: FullIndustryDetails | undefined = FULL_INDUSTRIES_DATA[industryId];
  if (!industry) return null;

  // Match keyword by slug
  const matchedKeyword = industry.searchTerms.find((kw) => slugifyKeyword(kw) === slug);
  if (!matchedKeyword) return null;

  const location = extractLocation(matchedKeyword);
  const category = detectKeywordCategory(matchedKeyword);
  const custom = INDUSTRY_CUSTOMIZATIONS[industryId] || INDUSTRY_CUSTOMIZATIONS["professional-services"];

  const headline = `${matchedKeyword} | HiveRift`;
  const subheadline = `Specialized ${matchedKeyword.toLowerCase()} engineered by senior technical leads. High-speed Next.js architecture, robust security, and automated workflows built to scale.`;
  const metaTitle = `${matchedKeyword} | HiveRift Web & Tech Solutions`;
  const metaDescription = `Looking for ${matchedKeyword}? HiveRift delivers high-performance websites, custom portals, CRM integrations, and digital growth platforms tailored for ${industry.title}. In-person office consultations are available by appointment for businesses in ${location}.`;

  const overview = `At HiveRift, we build specialized digital solutions for organizations searching for "${matchedKeyword}". Whether your goal is modernizing existing legacy software, launching a brand-defining web portal, or scaling your online customer acquisition, our New Delhi engineering team delivers tailored, high-converting platforms with zero vendor lock-in.`;

  // Tailor deliverables with the exact keyword context
  const deliverables = custom.deliverableTemplates.map((d, index) => {
    if (index === 0) {
      return {
        title: `${matchedKeyword} Architecture`,
        desc: `Custom-tailored digital platform specifically engineered for ${matchedKeyword.toLowerCase()}, designed for sub-second page performance, mobile responsiveness, and high conversion.`,
        badge: "Core Engineering"
      };
    }
    return d;
  });

  const faqs = [
    {
      question: `Why choose HiveRift for ${matchedKeyword}?`,
      answer: `HiveRift combines deep engineering precision, sub-second Next.js architecture, and commercial conversion expertise. We don't use cookie-cutter templates—every platform is custom-built with 100% full source code ownership transferred to your organization upon project completion.`
    },
    {
      question: `What is the estimated delivery timeline for ${matchedKeyword}?`,
      answer: `A focused high-impact website or landing engine is typically delivered in 2 to 3 weeks. A complex platform featuring custom dashboards, user authentication, and CRM/API integrations takes 4 to 6 weeks.`
    },
    {
      question: `Can you integrate our existing software, CRM, and WhatsApp?`,
      answer: `Yes, 100%. We regularly develop bi-directional API connections and webhooks linking your web platform to CRM systems (Salesforce, HubSpot, Zoho, LeadSquared), WhatsApp Cloud API, and payment gateways.`
    },
    {
      question: `Do we own the full source code and database after launch?`,
      answer: `Yes, 100%. Upon project sign-off, all Git repositories, databases, server configurations, and administrative accounts are fully transferred to your company with zero ongoing vendor royalties.`
    },
    {
      question: "Can we schedule an in-person consultation at HiveRift's office?",
      answer: `Yes. In-person requirements discovery and sprint planning are available by appointment at HiveRift's New Delhi office for businesses in ${location}.`
    }
  ];

  return {
    industryId,
    industryTitle: industry.title,
    slug,
    keyword: matchedKeyword,
    location,
    category,
    headline,
    subheadline,
    metaTitle,
    metaDescription,
    overview,
    badge: custom.defaultBadge,
    proofMetrics: custom.metrics,
    deliverables,
    challengeVsSolution: {
      challenge: custom.domainChallenge,
      solution: custom.domainSolution
    },
    techHighlights: custom.coreTech,
    features: [
      `Tailored specifically for: ${matchedKeyword}`,
      "Sub-second Core Web Vitals (<0.4s) on 4G/5G mobile connections",
      "Interactive project requirements and consultation quote estimator",
      "Automated lead capture with instant email and WhatsApp alerts",
      "Role-based administrative dashboards for staff and clients",
      "Secure payment gateway integration supporting UPI, cards, and netbanking",
      "Technical SEO architecture with structured schema markup",
      "High-concurrency cloud infrastructure with 99.99% uptime reliability",
      "Two-factor authentication and bank-grade data security protocols",
      "100% full intellectual property ownership with zero vendor lock-in"
    ],
    faqs
  };
}

/**
 * Returns all { industryId, slug } pairs for static generation.
 * (Excludes 'real-estate' since real-estate has its own dedicated folder).
 */
export function getAllIndustryKeywordParams(): { industryId: string; slug: string }[] {
  const params: { industryId: string; slug: string }[] = [];

  for (const [indId, industry] of Object.entries(FULL_INDUSTRIES_DATA)) {
    if (indId === "real-estate") continue; // real-estate has its own route
    for (const kw of industry.searchTerms) {
      params.push({
        industryId: indId,
        slug: slugifyKeyword(kw)
      });
    }
  }

  return params;
}

export const getAllIndustryKeywordSlugs = getAllIndustryKeywordParams;


/**
 * Returns list of keywords with slugs for a specific industry (for directory pills).
 */
export function getIndustryKeywords(industryId: string): { keyword: string; slug: string }[] {
  const industry = FULL_INDUSTRIES_DATA[industryId];
  if (!industry) return [];
  return industry.searchTerms.map((kw) => ({
    keyword: kw,
    slug: slugifyKeyword(kw)
  }));
}

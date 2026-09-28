import { 
  Users, 
  Shield, 
  Zap, 
  TrendingUp, 
  Settings, 
  ShoppingBag,
  Building2,
  Plane,
  GraduationCap,
  Stethoscope,
  Landmark,
  Briefcase,
  Utensils,
  Rocket,
  CheckCircle2,
  Globe,
  Database,
  ArrowRight
} from "lucide-react";

export interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
    icon: any;
  }[];
  keySolutions?: string[];
  complianceNotice?: string;
  benefits: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
  technologies: string[];
}

export const industriesData: Record<string, IndustryData> = {
  "real-estate": {
    id: "real-estate",
    title: "Real Estate & Property",
    subtitle: "Turn Property Searches Into Qualified Opportunities",
    description: "Build a stronger digital presence with property websites, listing portals, lead management systems, CRM integrations, and automated follow-ups designed for real estate businesses.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920",
    challenges: [
      "Property listing & inventory synchronization",
      "Lead drop-offs from slow or delayed follow-ups",
      "Lack of automated WhatsApp & CRM qualification",
      "Poor mobile performance on search & filters",
      "Tracking ROI across multiple property portals"
    ],
    solutions: [
      {
        title: "Property Listing & Search Portals",
        description: "Dynamic MLS/inventory search portals with interactive map views and instant brochure downloads.",
        icon: Building2
      },
      {
        title: "Lead Management & CRM Integration",
        description: "Centralized lead distribution pipelines connecting directly to Salesforce, HubSpot, or Zoho.",
        icon: Users
      },
      {
        title: "WhatsApp & Callback Automation",
        description: "Instant WhatsApp triggers sending floor plans, pricing sheets, and site-visit scheduling links.",
        icon: Zap
      }
    ],
    keySolutions: [
      "Property listing & search portals",
      "Real estate website development",
      "Lead management & CRM integration",
      "WhatsApp lead automation",
      "Property enquiry & callback systems",
      "SEO & performance marketing"
    ],
    benefits: [
      "3x Higher Lead-to-Site-Visit Conversion",
      "Instant 30-Second Lead Response Times",
      "Sub-second Property Search & Filter Loading",
      "Full CRM & WhatsApp Integration",
      "Enhanced Buyer Trust & Premium Presentation"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Google Maps API", "WhatsApp API"]
  },

  hospitality: {
    id: "hospitality",
    title: "Travel & Hospitality",
    subtitle: "Make Travel Booking Simpler From Search to Confirmation",
    description: "Create seamless digital experiences for travel agencies, tour operators, hotels, and hospitality businesses with booking platforms, API integrations, customer portals, and automated communication.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920",
    challenges: [
      "Heavy reliance on OTA commissions (15-25% lost)",
      "Complex flight and hotel API integrations",
      "Multi-currency conversion & international payments",
      "Fragmented guest communication across channels",
      "High mobile cart abandonment during booking"
    ],
    solutions: [
      {
        title: "Travel & Hotel Booking Systems",
        description: "High-conversion direct reservation engines with dynamic calendar pricing and instant confirmations.",
        icon: Plane
      },
      {
        title: "Flight & Hotel API Integration",
        description: "Real-time GDS/aggregators sync for live availability, seating, and dynamic package pricing.",
        icon: Zap
      },
      {
        title: "Customer Dashboards & Notifications",
        description: "Self-service booking management, itinerary downloads, and automated WhatsApp trip alerts.",
        icon: Users
      }
    ],
    keySolutions: [
      "Travel booking websites & portals",
      "Hotel & tour booking systems",
      "Flight & hotel API integration",
      "Online payment integration",
      "Customer booking dashboards",
      "Automated booking notifications"
    ],
    benefits: [
      "+65% Growth in Direct Bookings",
      "Zero Aggregator Commission on Direct Bookings",
      "Real-time Inventory & Pricing Synchronization",
      "Multi-currency Payment Gateways",
      "Automated WhatsApp & Email Confirmations"
    ],
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Amadeus API", "WhatsApp API"]
  },

  retail: {
    id: "retail",
    title: "Retail & eCommerce",
    subtitle: "Build an Online Store Designed to Convert",
    description: "From single-brand stores to multi-vendor marketplaces, HiveRift develops scalable eCommerce experiences that make product discovery, checkout, payments, and order management easier.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920",
    challenges: [
      "High mobile checkout drop-offs & cart abandonment",
      "Multi-warehouse inventory mismatch & stockouts",
      "Slow page speeds during high-traffic flash sales",
      "Disjointed payment gateway and refund workflows",
      "High customer acquisition cost without repeat retention"
    ],
    solutions: [
      {
        title: "Custom eCommerce & Headless Stores",
        description: "Ultra-fast Next.js and Shopify Plus storefronts engineered for sub-second page loads and high AOV.",
        icon: ShoppingBag
      },
      {
        title: "Multi-Vendor Marketplaces",
        description: "Robust marketplace architectures with merchant dashboards, split payments, and commission engines.",
        icon: TrendingUp
      },
      {
        title: "Inventory & CRM Synchronization",
        description: "Automated stock syncing across warehouses, marketplaces, and WhatsApp re-order flows.",
        icon: Zap
      }
    ],
    keySolutions: [
      "Custom eCommerce development",
      "WooCommerce & Shopify solutions",
      "Marketplace development",
      "Payment gateway integration",
      "Inventory & order management",
      "WhatsApp & CRM integration"
    ],
    benefits: [
      "+40% Increase in Mobile Checkout Completion",
      "< 1s Core Web Vitals on Product Pages",
      "Zero Inventory Mismatch Across Channels",
      "Automated WhatsApp Abandoned Cart Recovery",
      "Seamless Razorpay, Stripe & Cashfree Integrations"
    ],
    technologies: ["Next.js", "Shopify", "WooCommerce", "Node.js", "PostgreSQL", "Stripe"]
  },

  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    subtitle: "Digitize Operations, Orders & Business Workflows",
    description: "Replace manual processes with connected digital systems for manufacturers, distributors, suppliers, and industrial businesses.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920",
    challenges: [
      "Reliance on offline spreadsheets and paperwork",
      "Blind spots between shop floor production and order status",
      "Slow dealer quotation and RFQ processing cycles",
      "Raw material stockouts and warehouse delays",
      "Fragmented dealer/distributor communication"
    ],
    solutions: [
      {
        title: "Custom ERP & Operations Systems",
        description: "Tailored cloud ERPs for production scheduling, bill of materials (BOM), and inventory audits.",
        icon: Settings
      },
      {
        title: "Dealer & Distributor B2B Portals",
        description: "Self-service ordering portals with tiered B2B pricing, credit lines, and shipment tracking.",
        icon: Users
      },
      {
        title: "Quotation & RFQ Automation",
        description: "Instant cost estimation, automated quotation generation, and digital approval workflows.",
        icon: Zap
      }
    ],
    keySolutions: [
      "Custom ERP development",
      "Inventory & stock management",
      "Dealer & distributor portals",
      "B2B ordering systems",
      "Quotation & RFQ automation",
      "Production & workflow management"
    ],
    benefits: [
      "-60% Manual Data Entry Overhead",
      "Real-time Visibility Across Factory & Warehouse",
      "5x Faster RFQ & Dealer Quote Turnaround",
      "Reduced Material Stockouts & Wastage",
      "Secure Role-based Access for Staff & Dealers"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Python"]
  },

  education: {
    id: "education",
    title: "Education & E-Learning",
    subtitle: "Create Better Digital Learning Experiences",
    description: "Build modern platforms for schools, institutes, coaching centers, universities, trainers, and online education businesses.",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1920",
    challenges: [
      "Low student engagement and course completion rates",
      "Disjointed live class links and video buffering",
      "Manual fee collection and offline admission follow-ups",
      "Inefficient exam grading and assignment tracking",
      "Lack of centralized student performance analytics"
    ],
    solutions: [
      {
        title: "Custom Learning Management Systems (LMS)",
        description: "Interactive video player, module progress tracking, course completion badges, and certificates.",
        icon: GraduationCap
      },
      {
        title: "Student & Teacher Portals",
        description: "Secure dashboards for attendance, study materials, assignment submissions, and grading.",
        icon: Users
      },
      {
        title: "Live Classes & Online Exams",
        description: "Integrated WebRTC/Zoom live streams, anti-cheat proctored quizzes, and automated test reports.",
        icon: Zap
      }
    ],
    keySolutions: [
      "Learning management systems",
      "Student & teacher portals",
      "Online course platforms",
      "Live & recorded classes",
      "Online examination systems",
      "Admission & fee management"
    ],
    benefits: [
      "+45% Improvement in Course Completion",
      "100% Automated Fee Invoicing & Reminders",
      "Sub-second Video Streaming with DRM Protection",
      "Streamlined Admission Inquiries & Enrolment",
      "Parent & Student Mobile Experience"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WebRTC", "AWS MediaLive"]
  },

  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Build Connected Digital Experiences for Healthcare",
    description: "Help patients discover services, book appointments, communicate with providers, and access information through secure and user-friendly digital platforms.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920",
    challenges: [
      "High no-show rates and phone-line appointment congestion",
      "Fragmented patient medical records across departments",
      "Strict data privacy regulations (HIPAA, ABDM)",
      "Slow, manual lab report distribution",
      "Poor mobile discovery of doctors and specialties"
    ],
    solutions: [
      {
        title: "Doctor & Clinic Appointment Systems",
        description: "Real-time calendar booking, doctor availability sync, and instant confirmation SMS/WhatsApp.",
        icon: Stethoscope
      },
      {
        title: "Patient & Telemedicine Portals",
        description: "End-to-end encrypted video consultations, digital prescription downloads, and e-health records.",
        icon: Zap
      },
      {
        title: "Lab & Report Delivery Dashboards",
        description: "Secure patient access for pathology & radiology reports with WhatsApp notification alerts.",
        icon: Shield
      }
    ],
    keySolutions: [
      "Healthcare website development",
      "Doctor & clinic appointment systems",
      "Patient portals",
      "Telemedicine platforms",
      "Lab & report portals",
      "Appointment & WhatsApp automation"
    ],
    benefits: [
      "-70% Reduction in Clinic Front-Desk Congestion",
      "-50% Drop in Patient Appointment No-Shows",
      "Secure, Compliant Data Architecture",
      "Instant WhatsApp Lab Report Delivery",
      "Higher Patient Trust & Online Reputation"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WebRTC", "AWS"]
  },

  finance: {
    id: "finance",
    title: "Finance & Financial Services",
    subtitle: "Build Secure Digital Experiences for Financial Businesses",
    description: "Develop professional websites, customer portals, calculators, dashboards, and business applications tailored to financial service workflows. Compliance requirements are evaluated according to the specific project, jurisdiction, and technology scope.",
    complianceNotice: "Compliance requirements are evaluated according to the specific project, jurisdiction, and technology scope.",
    heroImage: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1920",
    challenges: [
      "Complex customer verification (KYC/AML) bottlenecks",
      "Stringent data security, encryption, and audit readiness",
      "Slow legacy systems failing during traffic surges",
      "Lead drop-offs on multi-step financial application forms",
      "Customer anxiety regarding payment and fund safety"
    ],
    solutions: [
      {
        title: "Financial Service Websites & Portals",
        description: "Institutional-grade Next.js portals with high-trust design, sub-second latency, and SSL security.",
        icon: Landmark
      },
      {
        title: "Loan & EMI Calculators",
        description: "Interactive real-time calculators that capture qualified lead details with friction-free UX.",
        icon: TrendingUp
      },
      {
        title: "Customer Dashboards & Application Workflows",
        description: "Document upload vaults, multi-stage application trackers, and secure CRM integrations.",
        icon: Shield
      }
    ],
    keySolutions: [
      "Financial service websites",
      "Loan & EMI calculators",
      "Customer dashboards",
      "Lead & application management",
      "CRM integrations",
      "Business process automation"
    ],
    benefits: [
      "Bank-grade SSL & Data Encryption Protocols",
      "3x Increase in Completed Financial Inquiries",
      "Audit-Ready Architecture & Role-based Access",
      "Sub-second Calculation & Page Load Speeds",
      "Automated Lead Scoring for Loan Officers"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Python"]
  },

  "professional-services": {
    id: "professional-services",
    title: "Professional Services",
    subtitle: "Turn Your Expertise Into a Strong Digital Business",
    description: "From law firms and consultants to agencies, accounting firms, and corporate service providers, HiveRift creates digital experiences that build credibility and generate enquiries.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920",
    challenges: [
      "Outdated websites failing to reflect professional authority",
      "Manual phone and email back-and-forth for scheduling consultations",
      "Unorganized intake documents and client discovery notes",
      "Poor search engine visibility against large competitors",
      "Inability to track which marketing channels drive high-value clients"
    ],
    solutions: [
      {
        title: "High-Authority Corporate Websites",
        description: "Editorial, clean, and commanding websites showcasing case studies, credentials, and practice areas.",
        icon: Briefcase
      },
      {
        title: "Client Intake & Consultation Booking",
        description: "Integrated calendar booking with automated pre-qualification forms and calendar sync.",
        icon: Zap
      },
      {
        title: "Secure Client Document Portals",
        description: "Encrypted vaults for client agreements, briefs, invoices, and project milestones.",
        icon: Shield
      }
    ],
    keySolutions: [
      "Corporate website development",
      "Lead generation systems",
      "CRM integration",
      "Appointment booking",
      "Client portals",
      "SEO & digital marketing"
    ],
    benefits: [
      "Elevated Brand Credibility & Market Authority",
      "Automated Pre-Screened Consultation Booking",
      "Consistent First-Page Google Local & Organic Ranks",
      "Encrypted Client Confidentiality & Data Storage",
      "Higher Retainer & Client Deal Sizes"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "HubSpot API", "Stripe"]
  },

  "food-restaurant": {
    id: "food-restaurant",
    title: "Restaurants & Food Businesses",
    subtitle: "Give Customers a Direct Way to Order",
    description: "Create digital ordering experiences that help restaurants, cafés, cloud kitchens, and food brands connect directly with their customers.",
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920",
    challenges: [
      "Heavy 25-35% commission loss to food aggregator apps",
      "Zero direct relationship or data ownership with diners",
      "Chaotic order handling during peak dining hours",
      "Manual table booking mistakes and double bookings",
      "Low repeat customer loyalty without direct re-marketing"
    ],
    solutions: [
      {
        title: "Direct Online Food Ordering",
        description: "Zero-commission custom online ordering system with instant kitchen ticket printing.",
        icon: Utensils
      },
      {
        title: "Digital QR Menus & Table Reservation",
        description: "Contactless digital QR menus, table booking systems, and automated SMS confirmation.",
        icon: Zap
      },
      {
        title: "POS Integration & WhatsApp Loyalty",
        description: "Seamless connection to Petpooja/POSist, with automated WhatsApp re-order promotions.",
        icon: ShoppingBag
      }
    ],
    keySolutions: [
      "Restaurant website development",
      "Online food ordering",
      "Digital menus",
      "Table reservation systems",
      "POS integration",
      "Local SEO & digital marketing"
    ],
    benefits: [
      "Save 25-35% Aggregator Commissions on Direct Orders",
      "100% Customer Contact & Order History Ownership",
      "Real-time Kitchen Display & POS Synchronization",
      "Automated WhatsApp Loyalty & Birthday Promotions",
      "Top Local Google Maps Rankings for Food Queries"
    ],
    technologies: ["React", "Next.js", "Node.js", "Firebase", "Stripe", "WhatsApp API"]
  },

  startups: {
    id: "startups",
    title: "Startups & Emerging Businesses",
    subtitle: "From Business Idea to Launch-Ready Product",
    description: "Turn your concept into a working digital product with strategy, UI/UX, development, testing, deployment, and ongoing support.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920",
    challenges: [
      "Running out of runway before launching an MVP",
      "Choosing the wrong tech stack leading to costly rewrites",
      "Freelancers delivering buggy, unmaintainable code",
      "Lack of cohesive product design, branding, and marketing",
      "Difficulty demonstrating traction to investors"
    ],
    solutions: [
      {
        title: "Rapid MVP & Prototype Development",
        description: "Ship a functional, production-ready MVP in 4 to 8 weeks with scalable Next.js architecture.",
        icon: Rocket
      },
      {
        title: "SaaS Application Development",
        description: "Multi-tenant architectures, subscription billing, user authentication, and analytics dashboards.",
        icon: Zap
      },
      {
        title: "Go-to-Market Landing Pages & Apps",
        description: "High-converting investor pitch websites, waitlist funnels, and iOS/Android applications.",
        icon: TrendingUp
      }
    ],
    keySolutions: [
      "MVP development",
      "SaaS application development",
      "Startup websites",
      "Mobile app development",
      "API & third-party integrations",
      "Cloud-ready application architecture"
    ],
    benefits: [
      "Launch in Weeks, Not Months",
      "Clean, Production-Ready, VC-Diligence Codebase",
      "Fixed Milestone Pricing Guarantee",
      "Scalable Cloud-Native Foundation on AWS/Vercel",
      "Complete Strategy, Design, Tech & GTM Support"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "TailwindCSS"]
  },

  // Backward compatibility aliases & additional sectors
  legal: {
    id: "legal",
    title: "Professional Services & Legal",
    subtitle: "Turn Your Expertise Into a Strong Digital Business",
    description: "From law firms and consultants to agencies, accounting firms, and corporate service providers, HiveRift creates digital experiences that build credibility and generate enquiries.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920",
    challenges: [
      "Outdated websites hurting credibility",
      "Unorganized client intake emails",
      "Manual appointment scheduling friction"
    ],
    solutions: [
      {
        title: "Corporate Website Development",
        description: "Authority-building websites designed to win high-value corporate clients.",
        icon: Briefcase
      },
      {
        title: "Client Intake & Scheduling",
        description: "Automated booking with pre-qualification forms.",
        icon: Zap
      }
    ],
    keySolutions: [
      "Corporate website development",
      "Lead generation systems",
      "CRM integration",
      "Appointment booking",
      "Client portals",
      "SEO & digital marketing"
    ],
    benefits: [
      "Authority Positioning",
      "Automated Intake",
      "Confidential Client Portals"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"]
  },

  logistics: {
    id: "logistics",
    title: "Logistics & Supply Chain",
    subtitle: "Smart Transportation & Delivery",
    description: "Streamline your logistics operations with intelligent routing, real-time tracking, and automated warehouse management solutions.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920",
    challenges: [
      "Route optimization",
      "Real-time tracking and visibility",
      "Warehouse management"
    ],
    solutions: [
      {
        title: "Route Optimization",
        description: "AI-powered route planning for faster, cost-effective deliveries.",
        icon: TrendingUp
      },
      {
        title: "Real-Time Tracking",
        description: "GPS tracking and delivery status updates for consignees.",
        icon: Zap
      }
    ],
    benefits: [
      "25-35% reduction in delivery costs",
      "Improved delivery times",
      "Real-time visibility"
    ],
    technologies: ["React", "Google Maps API", "Node.js", "MongoDB"]
  }
};

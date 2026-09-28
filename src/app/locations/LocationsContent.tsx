"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Building2,
  Landmark,
  ArrowRight,
  Phone,
  Calendar,
  ShieldCheck,
  Zap,
  Clock,
  Search,
  CheckCircle2,
  ChevronDown,
  Layers,
  Award,
  Star,
  Users,
  Code2
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

// --- 30 Verified Regional Keywords & Micro-Markets ---
interface LocationItem {
  id: string;
  region: "Delhi" | "Noida" | "Gurgaon";
  keyword: string;
  district: string;
  turnaround: string;
  focus: string;
  deliverables: string[];
}

const getSlug = (keyword: string) =>
  keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ALL_LOCATIONS: LocationItem[] = [
  // --- Delhi (10) ---
  {
    id: "delhi-1",
    region: "Delhi",
    keyword: "Web Development Company in Delhi",
    district: "Central & Greater Delhi",
    turnaround: "3–4 Weeks",
    focus: "Enterprise Next.js & Full-Stack Portals",
    deliverables: ["Next.js 15 App Router", "Custom Headless CMS", "Enterprise Cloud Architecture"]
  },
  {
    id: "delhi-2",
    region: "Delhi",
    keyword: "Website Design Company in Delhi",
    district: "Connaught Place & South Ext.",
    turnaround: "2–3 Weeks",
    focus: "Bespoke UI/UX & High-Converting Aesthetics",
    deliverables: ["Figma Design Systems", "Interactive Micro-Animations", "Brand Architecture"]
  },
  {
    id: "delhi-3",
    region: "Delhi",
    keyword: "Website Developer in Delhi",
    district: "Pan-Delhi Metro Area",
    turnaround: "Immediate Start",
    focus: "Dedicated Senior React / Node.js Engineers",
    deliverables: ["Staff Augmentation", "Codebase Health Audits", "Microservices Migration"]
  },
  {
    id: "delhi-4",
    region: "Delhi",
    keyword: "Web Design Agency in Delhi",
    district: "Nehru Place & Okhla",
    turnaround: "2–4 Weeks",
    focus: "Modern Corporate Digital Transformation",
    deliverables: ["High-Impact Typography", "Responsive Layouts", "Lead Generation Funnels"]
  },
  {
    id: "delhi-5",
    region: "Delhi",
    keyword: "Custom Website Development in Delhi",
    district: "Delhi NCR Commercial Hubs",
    turnaround: "4–6 Weeks",
    focus: "Complex Web Apps & SaaS Engineering",
    deliverables: ["Custom Backend APIs", "Complex Business Logic", "Zero Technical Debt"]
  },
  {
    id: "delhi-6",
    region: "Delhi",
    keyword: "Affordable Website Development in Delhi",
    district: "East & North Delhi",
    turnaround: "2–3 Weeks",
    focus: "High-ROI Startup & SME Web Packages",
    deliverables: ["Fixed-Price Milestones", "Transparent Estimates", "Free 6-Month Support"]
  },
  {
    id: "delhi-7",
    region: "Delhi",
    keyword: "WordPress Website Development Company in Delhi",
    district: "South & West Delhi",
    turnaround: "2–3 Weeks",
    focus: "Headless & Hardened Enterprise WordPress",
    deliverables: ["Custom Gutenberg Blocks", "ACF Pro Architectures", "Speed 98+ Guarantee"]
  },
  {
    id: "delhi-8",
    region: "Delhi",
    keyword: "Business Website Development in Delhi",
    district: "Bhikaji Cama Place & Rajendra Place",
    turnaround: "3–4 Weeks",
    focus: "B2B Lead Generation & Corporate Portals",
    deliverables: ["CRM Integration", "Interactive ROI Calculators", "Enterprise Form Pipelines"]
  },
  {
    id: "delhi-9",
    region: "Delhi",
    keyword: "Website Development Company in South Delhi",
    district: "Hauz Khas, Saket & Greater Kailash",
    turnaround: "3–5 Weeks",
    focus: "Luxury, D2C & High-End Retail Web",
    deliverables: ["Omnichannel Checkout", "Shopify Plus / Next.js Commerce", "Visual Storytelling"]
  },
  {
    id: "delhi-10",
    region: "Delhi",
    keyword: "Website Development Company in Dwarka",
    district: "Dwarka Sectors 1–24 & Sub-City",
    turnaround: "2–4 Weeks",
    focus: "Fast-Growth Businesses & Institution Tech",
    deliverables: ["Local SEO Schema", "High-Throughput Booking Systems", "PWAs"]
  },

  // --- Noida (10) ---
  {
    id: "noida-1",
    region: "Noida",
    keyword: "Website Development Company in Noida",
    district: "Noida City & Expressway Corridor",
    turnaround: "3–4 Weeks",
    focus: "Scalable Web Platforms & Cloud Portals",
    deliverables: ["TypeScript / Node.js Backends", "AWS / Vercel Deployments", "SOC-2 Ready Code"]
  },
  {
    id: "noida-2",
    region: "Noida",
    keyword: "Website Design Company in Noida",
    district: "Film City & Sector 16A",
    turnaround: "2–3 Weeks",
    focus: "Media, Publishing & Creative Digital Experiences",
    deliverables: ["Editorial Layouts", "Video-First Interactive Media", "Dynamic Dashboards"]
  },
  {
    id: "noida-3",
    region: "Noida",
    keyword: "Web Development Company in Noida",
    district: "Noida-Greater Noida Corridor",
    turnaround: "4–6 Weeks",
    focus: "SaaS Application Development & Scaling",
    deliverables: ["Multi-Tenant Architecture", "Stripe / Razorpay Billing", "GraphQL & REST Endpoints"]
  },
  {
    id: "noida-4",
    region: "Noida",
    keyword: "Website Developer in Noida",
    district: "Sector 1–135 Noida",
    turnaround: "Immediate Start",
    focus: "Full-Stack Web Specialists on Demand",
    deliverables: ["React 19 & Next.js 15", "Database Optimization", "Automated CI/CD Workflows"]
  },
  {
    id: "noida-5",
    region: "Noida",
    keyword: "Web Design Agency in Noida",
    district: "Sector 18 Commercial District",
    turnaround: "2–3 Weeks",
    focus: "E-Commerce & High-Converting Retail UI",
    deliverables: ["Mobile-First UX", "Dynamic Filter Engines", "1-Click Checkout Flows"]
  },
  {
    id: "noida-6",
    region: "Noida",
    keyword: "Custom Website Development in Noida",
    district: "Special Economic Zones (SEZ)",
    turnaround: "4–6 Weeks",
    focus: "Enterprise Portal & Intranet Systems",
    deliverables: ["Role-Based Access Control", "SSO / SAML Integrations", "Internal Workflow Engines"]
  },
  {
    id: "noida-7",
    region: "Noida",
    keyword: "Affordable Website Development in Noida",
    district: "Greater Noida & Knowledge Park",
    turnaround: "2–3 Weeks",
    focus: "Budget-Friendly Modern Tech Stacks",
    deliverables: ["Zero Hidden Hosting Costs", "Transparent Pricing", "SEO-First Codebase"]
  },
  {
    id: "noida-8",
    region: "Noida",
    keyword: "WordPress Website Development Company in Noida",
    district: "Sector 125 & IT Hub",
    turnaround: "2–3 Weeks",
    focus: "High-Security Hardened WordPress Sites",
    deliverables: ["Zero Vulnerability Builds", "Custom Theme Frameworks", "Automated Daily Backups"]
  },
  {
    id: "noida-9",
    region: "Noida",
    keyword: "Website Development Company in Sector 62 Noida",
    district: "Sector 62 IT Parks & Institutional Area",
    turnaround: "3–4 Weeks",
    focus: "IT Services, EdTech & Software Company Web",
    deliverables: ["Developer Documentation Portals", "LMS Systems", "Speed Benchmark: 99+ Web Vitals"]
  },
  {
    id: "noida-10",
    region: "Noida",
    keyword: "Website Development Company in Sector 18 Noida",
    district: "Atta Market & Sector 18 Retail Nexus",
    turnaround: "2–3 Weeks",
    focus: "Consumer Brands, Hospitality & Retail Services",
    deliverables: ["Hyper-Local Geotargeting", "Live Reservation & Invoicing", "Instant WhatsApp APIs"]
  },

  // --- Gurgaon / Gurugram (10) ---
  {
    id: "gurgaon-1",
    region: "Gurgaon",
    keyword: "Website Development Company in Gurgaon",
    district: "Cyber City & Golf Course Extension",
    turnaround: "3–5 Weeks",
    focus: "Fintech, Global Enterprises & VC Startups",
    deliverables: ["Bank-Grade Encryption", "Ultra-Low Latency Stacks", "Global CDN Distribution"]
  },
  {
    id: "gurgaon-2",
    region: "Gurgaon",
    keyword: "Website Design Company in Gurgaon",
    district: "Horizon Center & Golf Course Road",
    turnaround: "2–4 Weeks",
    focus: "Luxury Corporate & Elite Tech Interfaces",
    deliverables: ["3D WebGL Accents", "Sleek Dark / Light Modes", "Executive Portfolios"]
  },
  {
    id: "gurgaon-3",
    region: "Gurgaon",
    keyword: "Web Development Company in Gurgaon",
    district: "Sector 29 & Sector 44 Institutional Area",
    turnaround: "4–6 Weeks",
    focus: "High-Traffic Web Architectures & Micro-Frontends",
    deliverables: ["Distributed Edge Functions", "Real-Time WebSocket Sync", "Automated Elastic Scaling"]
  },
  {
    id: "gurgaon-4",
    region: "Gurgaon",
    keyword: "Website Developer in Gurgaon",
    district: "Millennium City Center Metro District",
    turnaround: "Immediate Start",
    focus: "Contract & Full-Time Senior Technical Talent",
    deliverables: ["Direct Slack / Teams Sync", "Agile 2-Week Sprints", "Production Ready Pull Requests"]
  },
  {
    id: "gurgaon-5",
    region: "Gurgaon",
    keyword: "Web Design Agency in Gurgaon",
    district: "MG Road & Galleria Corridor",
    turnaround: "2–4 Weeks",
    focus: "Award-Winning Digital Product Experiences",
    deliverables: ["User Journey Wireframing", "A/B Testing Infrastructure", "Interactive Prototype Demos"]
  },
  {
    id: "gurgaon-6",
    region: "Gurgaon",
    keyword: "Custom Website Development in Gurgaon",
    district: "Sohna Road & Subhash Chowk Hub",
    turnaround: "4–6 Weeks",
    focus: "Supply Chain, Logistics & Healthcare Portals",
    deliverables: ["ERP / CRM Sync", "Real-Time Tracking Dashboards", "Automated PDF Report Generation"]
  },
  {
    id: "gurgaon-7",
    region: "Gurgaon",
    keyword: "Affordable Website Development in Gurgaon",
    district: "Old Gurgaon & Sector 14/15",
    turnaround: "2–3 Weeks",
    focus: "Cost-Effective Scalable Tech for Local SMBs",
    deliverables: ["Modern Tailwind Architecture", "Fast Deployment", "Lifetime Code Ownership"]
  },
  {
    id: "gurgaon-8",
    region: "Gurgaon",
    keyword: "WordPress Website Development Company in Gurgaon",
    district: "DLF Phase 1–5 & Sushant Lok",
    turnaround: "2–3 Weeks",
    focus: "Custom WooCommerce & Membership Sites",
    deliverables: ["Custom Payment Gateways", "Member Tier Management", "Redis Caching Layers"]
  },
  {
    id: "gurgaon-9",
    region: "Gurgaon",
    keyword: "Website Development Company in Cyber City Gurgaon",
    district: "DLF Cyber City Building 5–14 & CyberHub",
    turnaround: "3–5 Weeks",
    focus: "Fortune 500 & Global Enterprise Web Stacks",
    deliverables: ["Multi-Region Disaster Recovery", "Zero-Downtime Deployments", "Enterprise SLA Support"]
  },
  {
    id: "gurgaon-10",
    region: "Gurgaon",
    keyword: "Website Development Company in Udyog Vihar Gurgaon",
    district: "Udyog Vihar Phase 1–5 & Sector 18 Gurgaon",
    turnaround: "3–4 Weeks",
    focus: "Manufacturing, Export & B2B Web Systems",
    deliverables: ["Multi-Currency Quotation Engines", "B2B Wholesale Catalogues", "Automated RFQ Workflows"]
  }
];

export default function LocationsContent() {
  const [selectedRegion, setSelectedRegion] = useState<"All" | "Delhi" | "Noida" | "Gurgaon">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filter locations by region and search query
  const filteredLocations = ALL_LOCATIONS.filter((loc) => {
    const matchesRegion = selectedRegion === "All" || loc.region === selectedRegion;
    const matchesSearch =
      searchQuery === "" ||
      loc.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.focus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      
      {/* 1. GLOBAL HEADER */}
      <Header />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 2. SIGNATURE HIVERIFT HERO SECTION (MATCHES REST OF WEBSITE)              */}
        {/* ========================================================================= */}
        <section className="relative bg-gradient-to-br from-[#eaf8f0] via-[#f5fbf7] to-[#ffffff] text-slate-900 pt-[172px] sm:pt-32 lg:pt-36 pb-16 lg:pb-24 border-b border-emerald-100/80 overflow-hidden">
          
          {/* Subtle Background Radial Dots Pattern */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
              backgroundSize: "36px 36px"
            }}
          />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-emerald-700 font-bold">Locations We Serve</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: High-Intent Value Proposition */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                
                {/* Top Pill Badge (Matches Homepage & About page) */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse inline-block shrink-0" />
                  <span className="text-slate-800">Top Web Development Company in Delhi NCR</span>
                  <span className="bg-emerald-50 text-[#059669] text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border border-emerald-200/60 shrink-0">
                    30+ HUBS
                  </span>
                </div>

                {/* Main Semantic Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.12] tracking-tight text-slate-900">
                  Website Development Company in{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
                    Delhi, Noida & Gurgaon
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                  Enterprise-grade Next.js web architecture, bespoke application development, and localized technical leadership. In-person project scoping is available by appointment at HiveRift's Delhi NCR office for teams across Gurgaon, Noida, and South Delhi.
                </p>

                {/* High-Intent CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-black shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Visit Our Office in Delhi NCR</span>
                  </button>

                  <a
                    href="#all-locations"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-sm transition-all hover:border-emerald-300"
                  >
                    <span>Browse All 30 Locations</span>
                    <ArrowRight size={14} className="text-emerald-600" />
                  </a>

                  <a
                    href="tel:+918814930229"
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200/80 transition-all"
                  >
                    <Phone size={13} className="text-emerald-600" />
                    <span>88149 30229</span>
                  </a>
                </div>

                {/* Trust Badges Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">By Appointment</div>
                      <div className="text-[11px] text-slate-500 font-medium">Delhi NCR Office Visits</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">100% IP</div>
                      <div className="text-[11px] text-slate-500 font-medium">Code Ownership</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Award size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">99+ SLA</div>
                      <div className="text-[11px] text-slate-500 font-medium">Core Web Vitals</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">HiveRift</div>
                      <div className="text-[11px] text-slate-500 font-medium">New Delhi Office</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: High Intent Scoping Consultation Card (Dark Emerald Slate Accent) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        Office Visit Booking
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-bold">
                      Delhi NCR Office
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    Schedule a Visit to Our Delhi NCR Office
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Meet with a lead solutions architect at our New Delhi office to discuss your technical stack, system architecture, and project scope.
                  </p>

                  <div className="space-y-2 text-xs text-slate-300 bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>Gurgaon Hub: DLF Cyber City, Udyog Vihar & Golf Course Rd</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>Noida Hub: Sector 62 IT Parks, Sector 18 & Film City</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>Delhi Hub: Connaught Place, South Delhi & Dwarka</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} />
                    <span>Visit Our Office in Delhi NCR</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    Strict NDA signed prior to code review • Zero obligation
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. DEDICATED REGIONAL MAP SHOWCASE (MATCHES WEBSITE LIGHT PALETTE)         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-emerald-200">
                <MapPin size={13} className="text-emerald-600" />
                <span>Regional Transit & Delivery Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Delhi NCR Connected Engineering Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Teams in Gurgaon, Noida, and Central Delhi can schedule in-person architectural consultations at our New Delhi office.
              </p>
            </div>

            {/* High-Resolution Map Showcase Container */}
            <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-b from-[#f4fcf7] via-white to-slate-50 p-4 sm:p-8 shadow-lg overflow-hidden">
              
              {/* Header Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Live Regional Matrix: Active (Gurgaon • Delhi • Noida)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  <span className="text-emerald-600 font-bold">GPS:</span>
                  <span>28.6139° N, 77.2090° E • NCR GRID</span>
                </div>
              </div>

              {/* The User-Provided Network Map - Full High Clarity Presentation */}
              <div className="relative overflow-hidden rounded-2xl bg-white p-3 sm:p-6 flex items-center justify-center shadow-inner border border-slate-200/90">
                <img
                  src="/delhi-ncr-network-map.png"
                  alt="HiveRift Delhi NCR Network Coverage Map - Gurgaon, Delhi, Noida"
                  className="w-full h-auto max-h-[500px] object-contain transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>

              {/* 3 Regional Hub Highlights below map */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-200">
                
                {/* Gurgaon Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <Landmark size={18} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-sm text-slate-900">Gurgaon Hub</h3>
                        <p className="text-[11px] text-emerald-600 font-bold font-mono">West NCR Corridor</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200/60">
                      10 Services
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In-person scoping at HiveRift's Delhi NCR office is available by appointment for teams across DLF Cyber City, Udyog Vihar, Golf Course Road, Sohna Road, and MG Road.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1 border-t border-slate-100">
                    <div>• Delhi NCR office consultations by appointment</div>
                    <div>• Senior architect project discussions</div>
                  </div>
                </div>

                {/* Delhi Central Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-sm text-slate-900">Delhi Hub</h3>
                        <p className="text-[11px] text-emerald-600 font-bold font-mono">Capital & Commercial Center</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200/60">
                      10 Services
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serving Connaught Place, South Delhi (Saket, GK, Hauz Khas), Dwarka Sub-City, Nehru Place, and Okhla Industrial Area. Tailored for enterprise brands & D2C.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1 border-t border-slate-100">
                    <div>• South Delhi Luxury & Retail Focus</div>
                    <div>• Dwarka Tech & Enterprise Support</div>
                  </div>
                </div>

                {/* Noida Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-sm text-slate-900">Noida Hub</h3>
                        <p className="text-[11px] text-emerald-600 font-bold font-mono">East NCR Tech Corridor</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200/60">
                      10 Services
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fast mobilization across Sector 62 IT Parks, Sector 18 Commercial District, Sector 125, Film City, and the Greater Noida Expressway corridor.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1 border-t border-slate-100">
                    <div>• Sector 62 Software Parks Scoping</div>
                    <div>• Media & EdTech Specialized Stacks</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ALL 30 LOCATIONS DIRECTORY (HIGH-INTENT COMMERCIAL CARDS & SEARCH)     */}
        {/* ========================================================================= */}
        <section id="all-locations" className="py-16 sm:py-24 bg-slate-50/80 border-b border-slate-200 scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-emerald-200">
                  <Layers size={13} className="text-emerald-700" />
                  <span>30 Regional Service Offerings</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Commercial Web Development Directory
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                  Filter by regional hub or search for your local district to explore verified capabilities, tech stack deliverables, and turnaround times.
                </p>
              </div>

              {/* Region Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                {(["All", "Delhi", "Noida", "Gurgaon"] as const).map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedRegion === region
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20 font-black"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold"
                    }`}
                  >
                    {region === "All" ? "All Locations (30)" : `${region} (10)`}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location (e.g. South Delhi, Sector 62, Cyber City, WordPress)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredLocations.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    
                    {/* Top Pill / Region Tag & Turnaround */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                          item.region === "Delhi"
                            ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                            : item.region === "Noida"
                            ? "bg-purple-50 text-purple-700 border border-purple-200/60"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                        }`}
                      >
                        {item.region} Hub
                      </span>

                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-medium">
                        {item.turnaround}
                      </span>
                    </div>

                    {/* Main Keyword Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      <Link href={`/locations/${getSlug(item.keyword)}`} className="hover:underline">
                        {item.keyword}
                      </Link>
                    </h3>

                    {/* Sub-District Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3.5">
                      <MapPin size={13} className="text-emerald-600 shrink-0" />
                      <span className="font-medium">{item.district}</span>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed bg-[#f8fdfa] p-3 rounded-xl border border-emerald-100/60">
                      <strong className="text-slate-800 font-bold">Focus:</strong> {item.focus}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/locations/${getSlug(item.keyword)}`}
                      className="text-xs font-bold text-slate-600 hover:text-emerald-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Dedicated Hub Page</span>
                      <ArrowRight size={12} className="text-emerald-600" />
                    </Link>

                    <Link
                      href={`/locations/${getSlug(item.keyword)}`}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold text-xs border border-emerald-200/60 transition-all cursor-pointer shadow-sm"
                    >
                      View Specs & Scope
                    </Link>
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Empty Search State */}
            {filteredLocations.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <MapPin size={36} className="text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-800">No matching locations found</h4>
                <p className="text-xs text-slate-500 mt-1 mb-5 max-w-md mx-auto">
                  We couldn&apos;t find any service matching &quot;{searchQuery}&quot;. Clear your search or contact our team directly for custom micro-district coverage.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Clear Search Filter
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. OFFICE SCOPING & ENTERPRISE DELIVERY                                  */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-200">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Enterprise Delivery Standard</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  In-Person Architectural Scoping at Our Office
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Discuss your business logic, compliance boundaries, and system architecture directly with a lead solutions architect at HiveRift's Delhi NCR office.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    {
                      title: "In-Person Whiteboarding",
                      desc: "Schedule an office consultation to discuss data structures, API flows, and technical requirements with our lead solutions architect."
                    },
                    {
                      title: "Binding NDA & 100% Intellectual Property Ownership",
                      desc: "Strict bilateral non-disclosure signed prior to any technical disclosure. All source code, Figma design files, and database schemas are transferred to you with zero vendor lock-in."
                    },
                    {
                      title: "Fixed-Price Guarantee & Milestone Roadmap",
                      desc: "No surprise scope-creep billing. You receive a mathematically scoped timeline with deliverable milestones tied to your business objectives."
                    },
                    {
                      title: "Local Indian Invoicing & GST Compliance",
                      desc: "Full GST-compliant tax invoices, compliant with Indian enterprise finance standards and international remittance protocols."
                    }
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{point.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Card: Scoping Consultation Form Trigger Card */}
              <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                    <Zap size={13} />
                    <span>Rapid Scoping Booking</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                    Schedule a Visit to Our Delhi NCR Office
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Meet with a senior Next.js solutions architect at our New Delhi office to discuss your existing code, technical requirements, and project scope.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-emerald-400" />
                      <span>Choose your preferred visit date and time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-emerald-400" />
                      <span>Conducted by Senior Solutions Architect (Not Sales Reps)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      <span>Includes Code Review, Tech Stack Recs & Fixed Quote</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} />
                    <span>Visit Our Office in Delhi NCR</span>
                  </button>

                  <div className="text-center">
                    <span className="text-xs text-slate-400">
                      Prefer immediate phone consultation?{" "}
                      <a href="tel:+918814930229" className="text-emerald-400 hover:underline font-bold">
                        88149 30229
                      </a>
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. REGIONAL FAQS SECTION                                                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions (Delhi NCR Scoping)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Common questions about in-person consultations at our Delhi NCR office.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "How can we schedule an in-person consultation at HiveRift's office?",
                  a: "Use the office visit form to choose a preferred date and time. Our team will confirm availability with you."
                },
                {
                  q: "Do you build custom websites or use pre-made WordPress templates?",
                  a: "We are an engineering-first agency. Over 85% of our projects are architected from the ground up using Next.js, React, Node.js, and Tailwind CSS. For clients requiring WordPress, we build custom headless architectures and bespoke Gutenberg components with zero bloated plugins, guaranteeing 95+ Google PageSpeed scores."
                },
                {
                  q: "Do we get 100% intellectual property (IP) and source code ownership?",
                  a: "Yes. Upon project milestone completion, 100% of all intellectual property, git repositories, deployment keys, Figma tokens, and database schemas are transferred directly to your organization under legally binding agreements."
                },
                {
                  q: "What is your pricing structure for businesses in Delhi NCR?",
                  a: "We work primarily on milestone-based fixed-price contracts. After our initial scoping session, you receive a detailed breakdown of sprints, timeline, and cost. There are no hourly overages or unexpected billing surprises."
                },
                {
                  q: "Can we visit your office for in-person scoping?",
                  a: "Yes. In-person scoping is available by appointment at HiveRift's Delhi NCR office."
                }
              ].map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === fIdx ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === fIdx && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH INTENT BOTTOM CONSULTATION BANNER                                 */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-7xl py-16">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-bold">
                <ShieldCheck size={13} />
                <span>Ready for Scalable Web Engineering?</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Let&apos;s Architect Your Digital Presence in Delhi NCR
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Book a direct consultation with a senior technical architect. Get an architectural scope analysis, tech stack roadmap, and fixed quote within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => openEnquiryModal("Locations Page Footer CTA")}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-slate-950 font-black text-sm shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Location Scoping Call
              </button>
              <a
                href="tel:+918814930229"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-950/40 hover:bg-emerald-950/60 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
              >
                Call 88149 30229
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 8. GLOBAL FOOTER */}
      <Footer />

    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  CheckCircle2,
  DollarSign,
  Code2,
  ArrowRight,
  Layers,
  Cpu,
  Search,
  Building2,
  Globe2,
  ShieldCheck,
  Zap,
  HelpCircle,
  PhoneCall,
  Laptop
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { LOCATIONS_DATA } from "@/app/data/locationsData";

// --- Keyword Categories for Delhi NCR & Regional SEO ---
const SEO_KEYWORD_PILLS = [
  // Delhi
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

  // Noida
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

  // Gurgaon / Gurugram
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

  // Regional Variations
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
];

const PRICING_TIERS = [
  {
    title: "Corporate & Business Website Development",
    targetKeyword: "business website development company delhi",
    packageTier: "Business Scope",
    deliveryTime: "10 - 18 Days",
    summary: "Designed for SMEs, B2B enterprises, and corporate firms in Delhi NCR seeking high credibility and lead conversion.",
    features: [
      "Custom responsive design (Figma to Next.js/React)",
      "High-speed sub-second load time & 95+ Core Web Vitals",
      "Lead generation funnels with CRM & WhatsApp integration",
      "On-page technical SEO & structured schema metadata",
      "SSL, security hardening & 1 year technical warranty"
    ],
    popular: false
  },
  {
    title: "Custom eCommerce & Online Stores",
    targetKeyword: "ecommerce website development company in delhi",
    packageTier: "eCommerce Scope",
    deliveryTime: "18 - 30 Days",
    summary: "High-converting online store development in Delhi & Noida with Shopify Plus, WooCommerce, or headless Next.js Commerce.",
    features: [
      "1-Click checkout & Razorpay / Stripe / UPI integration",
      "Automated inventory sync & multi-currency billing",
      "Product filtering, dynamic cart drawer & speed optimization",
      "Server-side Meta Pixel & Google Analytics 4 tracking",
      "Admin dashboard with automated invoice & shipping generation"
    ],
    popular: true
  },
  {
    title: "Custom Web Applications & SaaS Platforms",
    targetKeyword: "custom web application development company in delhi",
    packageTier: "Enterprise Scope",
    deliveryTime: "4 - 8 Weeks",
    summary: "Tailored web applications, internal enterprise dashboards, client portals, and multi-tenant SaaS platforms.",
    features: [
      "Next.js 15, React 19, Laravel or Node.js/NestJS architecture",
      "Role-based access control (RBAC) & PostgreSQL / MongoDB",
      "RESTful API & GraphQL integrations with legacy ERP systems",
      "Scalable Docker/Kubernetes cloud deployment on AWS / GCP",
      "Dedicated solutions architect & 24/7 SLA maintenance"
    ],
    popular: false
  }
];

const TECH_SPECIALIZATIONS = [
  {
    tech: "Next.js Development Company Delhi",
    keyword: "next js development company delhi",
    badge: "Enterprise Speed",
    desc: "Lightning-fast static & server-rendered websites using Next.js 15, App Router, and Edge caching for unparalleled search rankings in Delhi NCR.",
    specs: ["Sub-second TTFB", "Automated SEO Schema", "Vercel & AWS Edge"]
  },
  {
    tech: "React Web Development Company Delhi",
    keyword: "react web development company delhi",
    badge: "Interactive SPAs",
    desc: "Single-page applications, dynamic SaaS user interfaces, and modular component architectures built with React 19 and TypeScript.",
    specs: ["Modular UI Components", "State Management", "Micro-frontends"]
  },
  {
    tech: "Laravel Web Development Company Delhi",
    keyword: "laravel web development company delhi",
    badge: "Enterprise Backends",
    desc: "Robust PHP MVC architectures, custom ERP systems, secure database pipelines, and high-concurrency business automation platforms.",
    specs: ["Clean MVC Architecture", "RESTful APIs", "High Concurrency"]
  },
  {
    tech: "WordPress Website Development Company Delhi",
    keyword: "wordpress website development company delhi",
    badge: "Easy CMS Control",
    desc: "Tailored WordPress development with custom Block Themes, ACF Pro, zero bloat, and enterprise-grade security for corporate marketing teams.",
    specs: ["Custom Gutenberg Themes", "Zero Page-Builder Bloat", "Malware Shield"]
  },
  {
    tech: "PHP Website Development Company Delhi",
    keyword: "php website development company delhi",
    badge: "Proven Reliability",
    desc: "Custom PHP 8+ web applications, database-driven business tools, portal architectures, and legacy system modernizations in Delhi & Noida.",
    specs: ["PHP 8.3 & Modern OOP", "MySQL / MariaDB Pooling", "Legacy Migration"]
  },
  {
    tech: "Custom Web Application Development Company",
    keyword: "custom web app development company",
    badge: "Full-Stack Custom",
    desc: "End-to-end bespoke web apps engineered from scratch to automate your proprietary company workflows, data flows, and client interactions.",
    specs: ["Zero SaaS Lock-in", "100% IP Code Ownership", "Cloud-Native Scalability"]
  }
];

const LOCAL_COVERAGE_HUBS = [
  {
    region: "Delhi, South Delhi & Dwarka",
    areas: "Connaught Place, South Extension, South Delhi, Dwarka, Nehru Place, Okhla Industrial Area, Aerocity, Saket, Hauz Khas",
    keyword: "Web Development Company in Delhi",
    href: "/locations/web-development-company-in-delhi"
  },
  {
    region: "Noida & Greater Noida (Sector 62 & 18)",
    areas: "Sector 62 Noida, Sector 18 Noida, Sector 63, Sector 132, Noida Expressway, Knowledge Park",
    keyword: "Website Development Company in Noida",
    href: "/locations/website-development-company-in-noida"
  },
  {
    region: "Gurgaon / Gurugram (Cyber City & Udyog Vihar)",
    areas: "DLF Cyber City Gurgaon, Udyog Vihar Gurgaon, Golf Course Road, Sohna Road, Manesar",
    keyword: "Website Development Company in Gurgaon",
    href: "/locations/website-development-company-in-gurgaon"
  },
  {
    region: "Delhi NCR, Pan-India & Global Delivery",
    areas: "Karol Bagh HQ, Faridabad, Ghaziabad, Pan-India & Global Remote Delivery",
    keyword: "Website Developer Near Me",
    href: "/locations"
  }
];

const getKeywordHref = (keyword: string) => {
  const slug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const locMatch = LOCATIONS_DATA.find((l) => l.slug === slug);
  if (locMatch) return `/locations/${locMatch.slug}`;
  if (slug.includes("ecommerce") || slug.includes("online-store")) return "/services/ecommerce";
  if (slug.includes("app") || slug.includes("custom-web-app")) return "/services/software-development";
  if (slug.includes("design") || slug.includes("designing")) return "/locations/website-design-company-in-delhi";
  if (slug.includes("delhi")) return "/locations/web-development-company-in-delhi";
  if (slug.includes("noida")) return "/locations/website-development-company-in-noida";
  if (slug.includes("gurgaon")) return "/locations/website-development-company-in-gurgaon";
  return "/services/web-development";
};

export function RegionalDelhiSeoSection() {
  const [activeTab, setActiveTab] = useState<"pricing" | "tech" | "locations" | "keywords">("pricing");
  const [filterText, setFilterText] = useState("");

  const filteredPills = SEO_KEYWORD_PILLS.filter((k) =>
    k.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <section className="py-20 lg:py-28 bg-[#031d16] text-white relative overflow-hidden border-y border-emerald-900/60">
      
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <MapPin size={13} className="text-emerald-400" />
            <span>Regional Engineering Hub • Delhi NCR & Noida</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Best Web Development Company in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Delhi NCR & Noida
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            HiveRift is recognized as a top-rated <strong className="text-white">website development agency in Delhi</strong> and premier <strong className="text-white">web development company in Noida</strong>. We build custom web applications, responsive corporate websites, high-converting eCommerce stores, and enterprise platforms with clear milestone scoping and guaranteed performance.
          </p>

          {/* Interactive Navigation Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "pricing", label: "Website Packages & Scope Guide", icon: Layers },
              { id: "tech", label: "Tech Stacks (React, Next.js, Laravel)", icon: Code2 },
              { id: "locations", label: "Delhi NCR & Noida Coverage", icon: MapPin },
              { id: "keywords", label: "Search Index & Capabilities", icon: Search },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-[1.02]"
                      : "bg-[#063326]/80 hover:bg-[#084232] text-slate-300 border border-emerald-800/60"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-slate-950" : "text-emerald-400"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Website Development Cost & Pricing in Delhi NCR */}
        {activeTab === "pricing" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-[#05281e]/90 border border-emerald-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-800/60">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                    <Layers className="text-emerald-400" size={24} />
                    <span>Website Designing Company in Delhi with Package Scope Transparency</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    No hidden charges. Clear deliverables, milestones, and production SLAs for businesses in Delhi, Noida, and Pan-India.
                  </p>
                </div>
                <button
                  onClick={() => openEnquiryModal()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all self-start md:self-auto cursor-pointer"
                >
                  <span>Request Custom Scope</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Pricing Cards Grid */}
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                {PRICING_TIERS.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl p-6 relative flex flex-col justify-between transition-all ${
                      tier.popular
                        ? "bg-gradient-to-b from-[#094031] to-[#05281e] border-2 border-emerald-400 shadow-xl shadow-emerald-900/40"
                        : "bg-[#063326]/70 border border-emerald-800/60 hover:border-emerald-600/60"
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Most Popular in Delhi NCR
                      </span>
                    )}

                    <div>
                      <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        {tier.targetKeyword}
                      </div>
                      <h4 className="text-lg font-black text-white leading-snug mb-3">
                        {tier.title}
                      </h4>
                      <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                        {tier.summary}
                      </p>

                      <div className="bg-[#031d16] rounded-xl p-4 border border-emerald-900/80 mb-5">
                        <div className="text-lg font-black text-emerald-400 uppercase tracking-wide">
                          {tier.packageTier}
                        </div>
                        <div className="text-xs text-emerald-300/80 font-mono mt-1">
                          Tailored Milestone Scope • Delivery in {tier.deliveryTime}
                        </div>
                      </div>

                      <div className="space-y-2.5 text-xs text-slate-200">
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-emerald-800/60">
                      <button
                        onClick={() => openEnquiryModal()}
                        className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          tier.popular
                            ? "bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md"
                            : "bg-[#094031] hover:bg-[#0c5240] text-emerald-200 border border-emerald-700/60"
                        }`}
                      >
                        <span>Request Package Scope</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Informative Cost Note */}
              <div className="mt-8 p-4 rounded-xl bg-[#031d16] border border-emerald-800/60 text-xs text-slate-300 flex items-start gap-3">
                <HelpCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Factors impacting website development scope in Delhi NCR:</strong> Total number of dynamic templates, database complexity, ERP/CRM integrations, custom payment gateways, and custom AI/LLM integrations. Contact our engineering team for an exact itemized scope of work.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Technology Frameworks (React, Next.js, Laravel, WordPress, PHP) */}
        {activeTab === "tech" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_SPECIALIZATIONS.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-[#05281e]/90 border border-emerald-800/80 hover:border-emerald-500/80 rounded-2xl p-6 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        {spec.badge}
                      </span>
                      <Code2 size={18} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
                    </div>

                    <h4 className="text-base font-black text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {spec.tech}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {spec.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {spec.specs.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-[#031d16] text-[10px] text-emerald-300 font-mono border border-emerald-900"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      #{spec.keyword.replace(/\s+/g, "_")}
                    </span>
                    <button
                      onClick={() => openEnquiryModal()}
                      className="text-xs font-bold text-emerald-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <span>Consult</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Local Coverage & Near Me Areas */}
        {activeTab === "locations" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-[#05281e]/90 border border-emerald-800/80 rounded-2xl p-6 sm:p-8">
              <div className="max-w-2xl mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <MapPin className="text-emerald-400" size={22} />
                  <span>Looking for a Website Development Company Near Me?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  In-person project consultations are available by appointment at our New Delhi office for teams across the National Capital Region.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {LOCAL_COVERAGE_HUBS.map((hub, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#063326]/80 border border-emerald-800/70 hover:border-emerald-500/70 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Link href={hub.href} className="font-bold text-sm text-white hover:text-emerald-300 flex items-center gap-2 transition-colors">
                          <Building2 size={16} className="text-emerald-400" />
                          <span>{hub.region}</span>
                        </Link>
                        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">
                          Active Hub
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        <strong className="text-emerald-300">Key Business Districts:</strong> {hub.areas}
                      </p>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-emerald-900/60">
                      <div className="flex items-center gap-1">
                        <span>Mapped keyword:</span>
                        <Link href={hub.href} className="text-emerald-400 font-bold hover:underline">
                          {hub.keyword}
                        </Link>
                      </div>
                      <Link href={hub.href} className="text-emerald-400 hover:text-white flex items-center gap-0.5 text-xs font-bold">
                        <span>Explore</span>
                        <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Office & Meeting Booking */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#063b2c] to-emerald-950 border border-emerald-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Laptop size={22} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-white text-sm">
                      Visit Our New Delhi Headquarters or Schedule a Video Walkthrough
                    </h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      New Rohtak Road, Karol Bagh, New Delhi – 110005. Speak directly with a Senior Solutions Architect.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="tel:+918814930229"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#03241b] hover:bg-[#053628] text-white text-xs font-bold border border-emerald-700/80 transition-all"
                  >
                    <PhoneCall size={13} className="text-emerald-400" />
                    <span>88149 30229</span>
                  </a>

                  <button
                    onClick={() => openEnquiryModal()}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all shadow-md cursor-pointer"
                  >
                    <span>Book In-Person Meeting</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Search Index & Keyword Cloud */}
        {activeTab === "keywords" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-[#05281e]/90 border border-emerald-800/80 rounded-2xl p-6 sm:p-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-800/60">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Search className="text-emerald-400" size={22} />
                    <span>Delhi NCR & Pan-India Web Engineering Search Index</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Explore all 50 verified service capabilities and localized specializations supported by HiveRift.
                  </p>
                </div>

                {/* Filter Search Input */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input
                    type="text"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    placeholder="Search keywords..."
                    className="w-full pl-9 pr-3 py-2 bg-[#031d16] border border-emerald-800 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredPills.map((phrase, idx) => (
                  <Link
                    key={idx}
                    href={getKeywordHref(phrase)}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#063326] hover:bg-emerald-500 text-xs text-slate-300 hover:text-slate-950 border border-emerald-800/80 hover:border-emerald-400 transition-all cursor-pointer"
                  >
                    <span className="text-[10px] text-emerald-400 group-hover:text-slate-950 font-mono">#{idx + 1}</span>
                    <span className="font-medium capitalize">{phrase}</span>
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Showing {filteredPills.length} of {SEO_KEYWORD_PILLS.length} optimized search indexes</span>
                <span className="text-emerald-400 font-semibold">100% Crawlable Semantic HTML5</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

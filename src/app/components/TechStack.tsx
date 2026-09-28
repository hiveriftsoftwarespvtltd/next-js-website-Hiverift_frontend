"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Server, 
  Smartphone, 
  Database, 
  Globe, 
  Cloud, 
  TrendingUp,
  Cpu,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { ArchitectureModal } from "./ArchitectureModal";

interface TechItem {
  name: string;
  role: string;
  highlight: string;
  logo: string;
  tag: string;
}

const techCategories: { id: string; label: string; icon: any; items: TechItem[] }[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    items: [
      { name: "React", role: "Component Architecture", highlight: "Interactive SPA & Design Systems", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", tag: "UI Engine" },
      { name: "Next.js", role: "Full-Stack React", highlight: "SSR, Edge Rendering, Lighthouse 100", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png", tag: "Enterprise" },
      { name: "TypeScript", role: "Type-Safe Javascript", highlight: "Strict Data Contracts & Reliability", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", tag: "Stability" },
      { name: "Tailwind CSS", role: "Utility Styling", highlight: "Responsive, Zero-Runtime Overhead", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", tag: "Design" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", role: "Runtime Engine", highlight: "High Concurrency & Event-Driven APIs", logo: "https://nodejs.org/static/images/logo.svg", tag: "Core" },
      { name: "PHP / Laravel", role: "Robust Framework", highlight: "Enterprise Business Logic & ORM", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", tag: "Enterprise" },
      { name: "Python", role: "Scripting & AI", highlight: "FastAPI, Automation & Machine Learning", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", tag: "AI/Data" },
      { name: "Express / NestJS", role: "Modular Services", highlight: "REST & GraphQL Enterprise Gateways", logo: "https://nestjs.com/img/logo-small.svg", tag: "Architecture" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    items: [
      { name: "Flutter", role: "Cross-Platform", highlight: "Smooth 60FPS Native Performance", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", tag: "iOS & Android" },
      { name: "React Native", role: "Native Hybrid", highlight: "Shared Codebase with Web React Ecosystem", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", tag: "Hybrid" },
      { name: "iOS Swift", role: "Apple Native", highlight: "App Store Guidelines & Metal Graphics", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg", tag: "Native" },
      { name: "Android Kotlin", role: "Google Native", highlight: "Material You & Modern Jetpack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png", tag: "Native" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    items: [
      { name: "MySQL", role: "Relational RDBMS", highlight: "ACID Transactions & Tabular Integrity", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", tag: "Relational" },
      { name: "MongoDB", role: "Document Database", highlight: "Scalable NoSQL for High-Speed JSON", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", tag: "NoSQL" },
      { name: "PostgreSQL", role: "Advanced SQL", highlight: "Complex Queries, GIS & Extensions", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg", tag: "Enterprise" },
      { name: "Redis", role: "In-Memory Store", highlight: "Sub-Millisecond Cache & Queue Workers", logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg", tag: "Caching" },
    ],
  },
  {
    id: "cms",
    label: "CMS & Commerce",
    icon: Globe,
    items: [
      { name: "WordPress", role: "Open-Source CMS", highlight: "Custom Themes, Plugins & Easy Content", logo: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg", tag: "CMS Leader" },
      { name: "WooCommerce", role: "Commerce Store", highlight: "Product Catalogues, Cart & Checkout", logo: "https://cdn.simpleicons.org/woocommerce/96588A", tag: "eCommerce" },
      { name: "Headless CMS", role: "Decoupled Data", highlight: "Strapi, Sanity & Next.js Integration", logo: "https://cdn.simpleicons.org/strapi/4945FF", tag: "Decoupled" },
      { name: "Custom Admin", role: "Bespoke Portals", highlight: "Tailored Internal Role Management", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", tag: "Bespoke" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { name: "AWS", role: "Cloud Leader", highlight: "EC2, S3, RDS, CloudFront CDN", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", tag: "Infrastructure" },
      { name: "Google Cloud", role: "Cloud Services", highlight: "Compute Engine, Firebase & BigQuery", logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg", tag: "Cloud" },
      { name: "DigitalOcean", role: "Developer Droplets", highlight: "Simple, Predictable Cloud Hosting", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/250px-DigitalOcean_logo.svg.png", tag: "Hosting" },
      { name: "Docker", role: "Containerization", highlight: "Consistent CI/CD & Deployments", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg", tag: "DevOps" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing Tech",
    icon: TrendingUp,
    items: [
      { name: "Google Ads", role: "Paid Search & Display", highlight: "High-Intent Keyword PPC Advertising", logo: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg", tag: "PPC" },
      { name: "Meta Ads", role: "Social Campaigns", highlight: "Audience Segmentation & Retargeting", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1280px-Meta-Logo.png", tag: "Social" },
      { name: "Google Analytics 4", role: "Telemetry", highlight: "User Journey & Event Attribution", logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg", tag: "Telemetry" },
      { name: "Technical SEO", role: "Organic Visibility", highlight: "Core Web Vitals, Schema & Sitemaps", logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg", tag: "Organic" },
    ],
  },
];

export function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const activeCategoryData = techCategories.find((c) => c.id === activeTab) || techCategories[0];

  return (
    <section id="technology" className="py-12 lg:py-14 bg-white text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
            <Cpu size={14} className="text-[#16a34a]" />
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Engineering Excellence
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Built With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Modern Technology</span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            We build with battle-tested frameworks, cloud infrastructure, and modern databases that guarantee high speed, tight security, and effortless scalability.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#10b981] text-white border-emerald-500 shadow-lg shadow-emerald-500/20 scale-105"
                    : "bg-[#f8fdfa] text-slate-700 border-slate-200 hover:text-emerald-700 hover:border-emerald-300"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {activeCategoryData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border-2 border-emerald-300/80 hover:border-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-900/5 hover:shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain"
                          width={48}
                          height={48}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#059669] bg-emerald-100/80 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#059669] transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-xs font-bold text-slate-500 mb-2 font-mono">
                      {item.role}
                    </div>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                      {item.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-emerald-100 flex items-center gap-1.5 text-[11px] text-[#059669] font-bold">
                    <CheckCircle2 size={13} />
                    <span>Production Tested</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Architecture Connection Summary */}
        <div className="mt-14 max-w-4xl mx-auto p-5 rounded-2xl bg-[#f0fbf5] border border-emerald-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-mono text-[#059669] uppercase tracking-wider block font-bold">
              Engineering Architecture
            </span>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Code → Automated Test → Secure API → Scalable Application → Measurable Business Result
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsArchModalOpen(true)}
            className="shrink-0 text-xs font-extrabold text-white bg-[#10b981] hover:bg-[#059669] px-6 py-3 rounded-full shadow-md shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>Discuss Your System Architecture</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Dedicated Architecture Modal Form */}
        <ArchitectureModal
          isOpen={isArchModalOpen}
          onClose={() => setIsArchModalOpen(false)}
        />
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  FileText,
  Layout,
  Code2,
  CheckCircle2,
  Gauge,
  Rocket,
  LifeBuoy,
  ArrowRight,
  Clock,
  Layers
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: any;
  tools: string[];
  deliverables: string[];
  timeline: string;
}

const stepsData: ProcessStep[] = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Requirements",
    timeline: "Days 1–3",
    desc: "We analyze your business model, customer psychology, competitive landscape, and technical specifications to map out the foundational blueprint.",
    tools: ["Miro", "Analytics Audit", "Market Research", "Notion"],
    deliverables: ["Technical PRD", "Feature Matrix", "Target ICP Mapping"]
  },
  {
    step: "02",
    icon: FileText,
    title: "Information Architecture",
    timeline: "Days 4–6",
    desc: "Structuring the sitemap, database schema, user flows, content strategy, and API contract specifications before a single pixel is styled.",
    tools: ["Whimsical", "Database Schemas", "Sitemap Visualizer"],
    deliverables: ["Visual Sitemap", "Clickable Low-Fi Wireframe", "Data Flow Specs"]
  },
  {
    step: "03",
    icon: Layout,
    title: "UI/UX & Design Systems",
    timeline: "Week 2",
    desc: "Designing responsive, high-converting interfaces in Figma tailored with bespoke typography, micro-interactions, dark/light themes, and atomic design tokens.",
    tools: ["Figma", "Atomic Design", "Prototype Testing", "Tokens Studio"],
    deliverables: ["High-Fidelity Mockups", "Interactive Prototype", "Design System Kit"]
  },
  {
    step: "04",
    icon: Code2,
    title: "Modern Front & Back Development",
    timeline: "Weeks 3–5",
    desc: "Converting approved designs into high-velocity Next.js / Laravel code with server components, clean database schemas, and robust backend integrations.",
    tools: ["Next.js 15", "TypeScript", "Tailwind CSS", "Laravel", "Node.js"],
    deliverables: ["Clean Git Repo", "Private Staging URL", "Component Documentation"]
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Testing & Quality Assurance",
    timeline: "Week 6",
    desc: "Rigorous cross-device testing, responsive layout verification, form validation, edge latency profiling, and security vulnerability scanning.",
    tools: ["Playwright", "Jest", "BrowserStack", "OWASP ZAP", "Lighthouse"],
    deliverables: ["QA Audit Report", "Cross-Browser Signoff", "Security Pass Certificate"]
  },
  {
    step: "06",
    icon: Gauge,
    title: "SEO & Speed Optimization",
    timeline: "Week 7",
    desc: "Fine-tuning Core Web Vitals, generating automated XML sitemaps, JSON-LD schema breadcrumbs, WebP image asset compression, and metadata tags.",
    tools: ["Google Search Console", "PageSpeed Insights", "Schema.org", "CDN Cache"],
    deliverables: ["100/100 Lighthouse SLA", "Structured Schema Validation", "CDN Edge Config"]
  },
  {
    step: "07",
    icon: Rocket,
    title: "Zero-Downtime Deployment",
    timeline: "Launch Day",
    desc: "Seamless live deployment to enterprise cloud hosting with automated SSL certificates, DNS switchover, and live traffic smoke tests.",
    tools: ["AWS", "Vercel Enterprise", "Cloudflare", "GitHub Actions CI/CD"],
    deliverables: ["Production Handover", "DNS Switchover", "Smoke Test Signoff"]
  },
  {
    step: "08",
    icon: LifeBuoy,
    title: "Continuous Support & Evolution",
    timeline: "Ongoing SLA",
    desc: "Active server health monitoring, periodic security patches, daily automated database backups, and feature iterations as your company expands.",
    tools: ["Sentry", "Uptime Robot", "Automated Backups", "Dedicated Tech Lead"],
    deliverables: ["24/7 SLA Guarantee", "Monthly Performance Reports", "Priority Support Desk"]
  }
];

export function InteractiveProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = stepsData[activeStepIndex];
  const IconComponent = activeStep.icon;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
            OUR PROVEN EXECUTION METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Initial Blueprint to Live Scalable Platform
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            A transparent, 8-phase milestone roadmap ensuring 100% code quality, predictable timelines, and zero unexpected launch delays.
          </p>
        </div>

        {/* Interactive Step Selector Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {stepsData.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-slate-950 text-white border-slate-900 shadow-lg shadow-emerald-950/15 scale-[1.02]"
                    : "bg-[#fafcfb] hover:bg-slate-100 border-slate-200/90 text-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {step.step}
                  </span>
                  <StepIcon size={13} className={isActive ? "text-emerald-400" : "text-slate-400"} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold truncate leading-snug">
                  {step.title.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Corner Radial Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              {/* Left Column: Stage Details */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-xs font-mono font-bold">
                    PHASE {activeStep.step}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-semibold">
                    <Clock size={12} className="text-emerald-400" />
                    <span>{activeStep.timeline}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {activeStep.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {activeStep.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-1 sm:pt-2">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Phase Milestones & Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeStep.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs font-semibold text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Stack & Review Gate */}
              <div className="lg:col-span-5 bg-slate-950/80 p-4 sm:p-6 rounded-2xl border border-slate-800/90 space-y-4 sm:space-y-5">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Industry-Standard Tools Used
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeStep.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-900 text-emerald-300 text-[10px] sm:text-xs font-mono rounded-lg border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 mb-1.5 sm:mb-2">
                    <span>Quality Signoff Gate</span>
                    <span className="text-emerald-400 font-bold">100% Mandatory</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${((activeStepIndex + 1) / stepsData.length) * 100}%` }}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2">
                    Step {activeStepIndex + 1} of 8 in our automated CI/CD pipeline.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 8 Compact Step Cards Below for Complete Overview */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stepsData.map((proc, idx) => {
            const Icon = proc.icon;
            const isCurrent = activeStepIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-emerald-50/50 border-emerald-500 shadow-sm ring-1 ring-emerald-500/20"
                    : "bg-[#fafcfb] border-slate-200/90 hover:border-emerald-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className={`text-[11px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isCurrent ? "bg-emerald-600 text-white" : "bg-slate-900 text-white"
                  }`}>
                    {proc.step}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                    isCurrent ? "bg-emerald-500 text-white" : "bg-emerald-50 text-emerald-600"
                  }`}>
                    <Icon size={15} />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {proc.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

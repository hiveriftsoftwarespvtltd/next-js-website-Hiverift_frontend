"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Layout,
  Code2,
  CreditCard,
  Gauge,
  Rocket,
  Clock,
  CheckCircle2
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
    title: "Discovery & SKU Architecture",
    timeline: "Days 1–3",
    desc: "We analyze product catalogs, variant structures, payment gateway fees, tax compliance rules, and third-party logistics to design the scalable commerce blueprint.",
    tools: ["Catalog Audit", "Notion", "Logistics Matrix", "Miro"],
    deliverables: ["Product Taxonomy Map", "Payment API Specs", "Architecture PRD"]
  },
  {
    step: "02",
    icon: Layout,
    title: "Conversion-First UI/UX Design",
    timeline: "Week 1–2",
    desc: "Designing high-converting product pages, sticky mobile add-to-cart bars, trust-maximizing checkouts, and 1-click buy pathways in interactive Figma mockups.",
    tools: ["Figma", "Design Tokens", "Heatmap Data", "Prototype Testing"],
    deliverables: ["Interactive Store Prototype", "Mobile Checkout Specs", "Design Kit"]
  },
  {
    step: "03",
    icon: Code2,
    title: "Headless Storefront Engineering",
    timeline: "Weeks 3–4",
    desc: "Building custom Shopify Liquid or Next.js Commerce storefronts with sub-second page rendering, intelligent product filters, and live stock webhooks.",
    tools: ["Shopify Plus", "Next.js 15", "GraphQL", "Tailwind CSS", "WooCommerce"],
    deliverables: ["Clean Source Repo", "Private Staging URL", "Edge CDN Config"]
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Payments, Shipping & ERP Sync",
    timeline: "Week 5",
    desc: "Integrating global payment gateways (Stripe, Razorpay, Apple Pay, UPI), multi-currency routing, automated invoice generation, and real-time shipping tracking.",
    tools: ["Stripe", "Razorpay", "Shiprocket", "NetSuite", "WhatsApp API"],
    deliverables: ["PCI-DSS Compliance", "Warehouse 3PL Sync", "Automated Taxes"]
  },
  {
    step: "05",
    icon: Gauge,
    title: "Flash Sale Load Testing & QA",
    timeline: "Week 6",
    desc: "Simulating 50,000+ concurrent shoppers to ensure zero database locking, testing payment fallbacks, and auditing 100/100 Core Web Vitals across iOS and Android.",
    tools: ["k6 Load Testing", "Playwright", "BrowserStack", "Lighthouse"],
    deliverables: ["Concurrency Stress Report", "Zero-Drop Payment Signoff", "QA Pass"]
  },
  {
    step: "06",
    icon: Rocket,
    title: "Zero-Downtime Launch & Scale",
    timeline: "Launch Day",
    desc: "Seamless live DNS cutover with zero cart interruption, Google Merchant Center product feed sync, GA4 Enhanced eCommerce tracking, and ongoing CRO.",
    tools: ["Cloudflare", "Google Merchant", "GA4 eCommerce", "Klaviyo"],
    deliverables: ["Live Production Store", "Feed Approvals", "24/7 Priority SLA"]
  }
];

export function EcommerceProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = stepsData[activeStepIndex];

  return (
    <section className="py-14 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
            COMMERCE EXECUTION ROADMAP
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Store Architecture to High-Volume Revenue
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A milestone-based 6-stage engineering roadmap ensuring zero cart drop-offs, seamless 3PL sync, and instant launch speed.
          </p>
        </div>

        {/* Step Selector Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2 mb-6 sm:mb-8">
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

        {/* Detailed Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
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

                <div className="pt-1 sm:pt-2">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Key Phase Deliverables
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

              <div className="lg:col-span-5 bg-slate-950/80 p-4 sm:p-6 rounded-2xl border border-slate-800/90 space-y-4 sm:space-y-5">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Industry Tools & APIs
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
                    <span className="text-emerald-400 font-bold">100% Verified</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${((activeStepIndex + 1) / stepsData.length) * 100}%` }}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2">
                    Stage {activeStepIndex + 1} of 6 in our automated commerce deployment pipeline.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

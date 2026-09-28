"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Zap,
  HelpCircle,
  ArrowRight,
  Plus,
  ChevronDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Send
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { EnquiryModal, openEnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const websitePackages = [
  {
    name: "Starter",
    tier: "Starter Scope",
    tagline: "Perfect for Small Businesses & Solo Founders",
    features: [
      "Up to 5 Pages",
      "Template-Based Custom Design",
      "Mobile-First Responsive Layout",
      "Basic On-Page SEO Setup",
      "SSL Certificate & Security Headers",
      "1 Month Post-Launch Support",
      "2 Rounds of Scope Revisions",
      "1–2 Weeks Delivery SLA"
    ],
    highlight: false,
    mostEnquired: false
  },
  {
    name: "Business Pro",
    tier: "Growth Scope",
    tagline: "The Best Value for High-Growth Companies",
    features: [
      "Up to 15 Pages",
      "Bespoke Custom UI/UX Design",
      "Mobile-First Responsive Architecture",
      "Advanced Technical SEO & Schema",
      "eCommerce / Payment Integration",
      "Headless Blog / CMS Setup",
      "SSL Certificate & Hardened Security",
      "3 Months Dedicated Support",
      "5 Rounds of Scope Revisions",
      "3–5 Weeks Delivery SLA"
    ],
    highlight: true,
    mostEnquired: true
  },
  {
    name: "Growth & Enterprise",
    tier: "Enterprise Scope",
    tagline: "For Established Enterprises & High Concurrency",
    features: [
      "Up to 30 Pages",
      "Custom Design + Scalable CMS",
      "Full Technical SEO & Core Web Vitals <0.3s",
      "Full Store & Custom Checkouts",
      "CRM & Third-Party API Sync",
      "Enterprise SSL + Advanced Firewalls",
      "6 Months Priority Support",
      "Unlimited Milestone Revisions",
      "5–8 Weeks Delivery SLA"
    ],
    highlight: false,
    mostEnquired: false
  }
];

const marketingPlans = [
  {
    name: "Starter",
    tier: "Local SEO & Social",
    features: ["5 Page SEO", "10 Target Keywords", "1 Blog Article / mo", "1 Social Media Platform", "Basic Analytics Report", "Flexible Milestone Terms"]
  },
  {
    name: "Growth",
    tier: "Regional Growth",
    features: ["15 Page SEO", "25 Target Keywords", "2 Blog Articles / mo", "2 Social Media Platforms", "Google Ads Campaign Management", "Bi-Weekly Performance Report"]
  },
  {
    name: "Scale",
    tier: "High-Intent Scale",
    features: ["25 Page SEO", "50 Target Keywords", "4 Blog Articles / mo", "3 Social Media Platforms", "Google Ads + Meta Paid Campaigns", "Full Conversion Dashboard"]
  },
  {
    name: "Dominate",
    tier: "Market Dominance",
    features: ["Full Technical & On-Page SEO", "100+ Commercial Keywords", "8 In-Depth Articles / mo", "Omnichannel Social Media", "Google & Meta Ads + A/B Testing", "Dedicated Senior Strategist"]
  }
];

const otherServices = [
  { service: "eCommerce Storefront", model: "Custom Milestone Scope", deliverables: "Shopify / WooCommerce / Headless Next.js" },
  { service: "Custom Web Application", model: "Sprint-Based Engineering", deliverables: "Next.js 15, Node.js, PostgreSQL, Docker" },
  { service: "Mobile App (iOS & Android)", model: "Turnkey MVP Delivery", deliverables: "Cross-Platform Flutter or React Native" },
  { service: "Custom CRM / Cloud ERP", model: "Enterprise Architecture", deliverables: "Role-Based RBAC, Automated Invoicing, APIs" },
  { service: "UI/UX & Product Design", model: "Design Sprint Delivery", deliverables: "Figma Prototypes, Design System, Wireframes" },
  { service: "AI & Automation Pipelines", model: "Custom AI Implementation", deliverables: "LLM Agents, Document Extractors, RAG Workflows" },
];

const faqs = [
  {
    q: "How does HiveRift scope and structure website packages?",
    a: "We analyze your specific platform requirements, design complexity, page count, and necessary integrations. Rather than forcing you into rigid off-the-shelf figures, we provide an itemized milestone agreement where you only pay for what you need with 100% intellectual property ownership."
  },
  {
    q: "Can packages be customized to our exact requirements?",
    a: "Yes, 100%. All packages can be adjusted to include additional features, custom third-party integrations, WhatsApp Cloud automations, payment gateways, or multi-language support."
  },
  {
    q: "What are your milestone payment terms?",
    a: "We work on transparent, milestone-based billing tied to verified deliverables: an initial deposit upon project kick-off and architecture approval, followed by milestone sign-offs upon UI/UX delivery, staging development, and final production launch."
  },
  {
    q: "Do we own the full source code and database after launch?",
    a: "Yes, 100%. Upon project sign-off, all Git repositories, design files, database credentials, and server configurations are fully transferred to your company with zero ongoing vendor royalties or lock-in."
  },
  {
    q: "Can we request an in-person scoping workshop in Delhi NCR?",
    a: "Yes! Headquartered in New Delhi, our senior technical leads regularly conduct in-person requirements discovery and scoping sessions across Delhi, Gurgaon (Cyber City), and Noida (Sector 62)."
  }
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${
        isOpen ? "border-emerald-500 shadow-emerald-100 shadow-lg" : "border-gray-100"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
      >
        <h4 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-3">
          <HelpCircle className={`text-emerald-500 flex-shrink-0 transition-transform ${isOpen ? "rotate-12" : ""}`} size={20} />
          <span>{q}</span>
        </h4>
        <ChevronDown
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 font-medium leading-relaxed px-6 pb-8 md:px-8 md:pb-10 pl-14 md:pl-16 border-t border-slate-50 pt-4 text-sm sm:text-base">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function PricingContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[480px] overflow-hidden mt-20 md:mt-32 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW5uaW5nJTIwZ3Jvd3RofZW58MHx8fHwxNzM5ODMwNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tailored Packages and Scope"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6">
              <Zap size={16} className="text-emerald-400" />
              <span className="text-xs sm:text-sm font-black text-emerald-400 tracking-widest uppercase">
                TAILORED PACKAGES & SCOPE
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-[1.15]">
              Clear Packages. <span className="text-emerald-400">Guaranteed Deliverables.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-3xl font-medium">
              Review our comprehensive service packages and feature deliverables below. Every engagement is structured around your specific business goals with itemized milestone agreements and zero hidden costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
              WEBSITE DEVELOPMENT
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Website Development <span className="text-emerald-600">Packages</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Select the package that matches your operational needs. Every tier includes responsive architecture, technical SEO, and 100% full source code ownership.
            </p>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {websitePackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 flex flex-col justify-between transition-all ${
                  pkg.highlight
                    ? "border-emerald-500 lg:scale-105 z-10 my-4 lg:my-0 shadow-emerald-500/10"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                {pkg.mostEnquired && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>Most Enquired</span>
                  </div>
                )}

                <div>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-md mb-3">
                      {pkg.tier}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-500 font-medium text-xs sm:text-sm">{pkg.tagline}</p>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-3 text-xs sm:text-sm font-medium text-gray-700">
                        <div className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`Website Package: ${pkg.name}`)}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.highlight
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700"
                        : "bg-slate-900 text-white hover:bg-emerald-600"
                    }`}
                  >
                    <span>Request Package Scope</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Retainers */}
      <section className="py-20 lg:py-24 bg-[#f8fdfa] border-y border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              DIGITAL MARKETING & SEO
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Digital Marketing & SEO <span className="text-emerald-600">Plans</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Monthly ongoing performance retainers engineered to dominate high-intent organic search rankings and run ROI-focused ad campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {marketingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-emerald-700 mb-1">
                    {plan.tier}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-6 pb-4 border-b border-slate-100">
                    {plan.name}
                  </h3>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((f, fi) => (
                      <div key={fi} className="flex gap-2.5 text-xs font-semibold text-gray-700 leading-snug">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openEnquiryModal(`Digital Marketing Plan: ${plan.name}`)}
                  className="w-full py-3 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select Package</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Engagement Models */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-200">
            <div className="text-center mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
                CUSTOM CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900">
                Specialized Services <span className="text-emerald-600">Deliverable Models</span>
              </h2>
              <p className="text-sm text-slate-500">
                Tailored engineering architectures with itemized deliverable roadmaps.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {otherServices.map((s, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-4 rounded-xl transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{s.service}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{s.deliverables}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {s.model}
                    </span>
                    <button
                      type="button"
                      onClick={() => openEnquiryModal(`Custom Scope: ${s.service}`)}
                      className="px-4 py-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 rounded-lg font-bold text-xs transition-colors cursor-pointer"
                    >
                      Enquire Scope
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-emerald-50 to-[#f0fbf5] rounded-2xl border border-emerald-200 text-center space-y-4">
              <p className="text-emerald-950 font-bold text-sm sm:text-base">
                Need a custom feature set or complex multi-system integration?
              </p>
              <button
                type="button"
                onClick={() => openEnquiryModal("Custom Architecture Scoping")}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <span>Request Custom Scoping Workshop</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-200/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
              Scope & Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-2">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers on how we scope, deliver, and support your digital platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <FAQItem key={idx} q={f.q} a={f.a} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryModal />
    </div>
  );
}

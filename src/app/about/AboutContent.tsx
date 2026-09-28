"use client";

import { motion } from "motion/react";
import { 
  Award, 
  Users, 
  Target, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  Headphones
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { COMPANY_METRICS } from "@/app/config/companyMetrics";
import Link from "next/link";

const stats = COMPANY_METRICS.map((metric) => ({
  label: metric.label,
  value: `${metric.value}${metric.suffix}`,
}));

const coreValues = [
  {
    icon: Code2,
    title: "Zero Technical Debt",
    desc: "We write clean, modular, and maintainable TypeScript code. We don't cut corners with fragile third-party templates.",
    badge: "Architecture"
  },
  {
    icon: Target,
    title: "Commercial Outcome First",
    desc: "Every line of code and UI component is mapped directly to client conversion rate, lead capture, and revenue velocity.",
    badge: "ROI Focused"
  },
  {
    icon: Users,
    title: "Direct Engineer Access",
    desc: "No account managers playing telephone. You collaborate directly with the senior full-stack engineers building your product.",
    badge: "Transparency"
  },
  {
    icon: ShieldCheck,
    title: "100% Code Ownership",
    desc: "You retain full intellectual property rights, repositories, hosting access, and documentation with zero vendor lock-in.",
    badge: "Ownership"
  }
];

const milestones = [
  {
    year: "2019",
    title: "The Inception",
    desc: "HiveRift was founded by a passionate team of full-stack engineers determined to eliminate slow, fragile templates in modern web development."
  },
  {
    year: "2021",
    title: "eCommerce & Custom SaaS",
    desc: "Expanded into high-volume headless eCommerce, bespoke ERP portals, and high-concurrency payment gateway infrastructure."
  },
  {
    year: "2024",
    title: "AI Integration & Next.js Scale",
    desc: "Pioneered LLM automated workflows, Next.js Turbopack micro-frontends, and automated cloud CI/CD pipelines for international clients."
  },
  {
    year: "Present",
    title: "Global Engineering Partner",
    desc: "Trusted by fast-growing startups and enterprises across India, the US, UK, and Canada for mission-critical software solutions."
  }
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-[#f4fcf7] via-white to-white relative overflow-hidden border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          <div className="max-w-3xl mx-auto text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
                Engineering Integrity Since 2019
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
              Architecting High-Impact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
                Digital Systems
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              HiveRift is a premier web development and custom software engineering agency. We partner with ambitious startups and established enterprises to build, sell, and scale online.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiryModal("About Page Consultation")}
                className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Partner With HiveRift</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/case-studies"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-emerald-300 transition-all shadow-sm"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Key Proof Stats Strip */}
          <div className="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {stats.map((s, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center hover:border-emerald-300 transition-colors"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-emerald-600 font-mono tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Our Genesis
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built to Fix What Was Broken in Traditional Agencies
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Most businesses have been burned by digital agencies: bloated proposals, hidden milestone costs, junior developers learning on your budget, and bloated WordPress templates that crash when traffic arrives.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                HiveRift was founded on a simple antidote: <strong>senior engineering talent, modern web frameworks (Next.js, React, Node.js), and complete commercial accountability</strong>. We don't just deliver websites; we build scalable digital assets designed to dominate search rankings and generate qualified revenue.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "No bloated agency layers — direct collaboration with senior developers",
                  "Modular Next.js architecture built for sub-second page loads",
                  "Data-driven technical SEO and high-converting conversion funnels",
                  "Strict milestone adherence with transparent deliverables and scoping"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fdfa] border-2 border-emerald-100 shadow-xl shadow-emerald-950/5 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/30">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  Our Engineering Covenant
                </h3>
                <blockquote className="text-slate-700 text-base sm:text-lg italic leading-relaxed border-l-4 border-emerald-500 pl-4 my-4">
                  "We believe software should be an active revenue generator, not an ongoing maintenance headache. Every line of code we ship must serve a business purpose."
                </blockquote>
                <div className="pt-4 text-xs font-mono text-slate-500">
                  HiveRift Engineering Leadership Team • New Delhi & Cambridge, ON
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values / Operational Standards */}
      <section className="py-16 lg:py-24 bg-[#f8fdfa] border-y border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full mb-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Core Principles
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Global Brands Choose HiveRift
            </h2>
            <p className="mt-3 text-base text-slate-600">
              The fundamental standards that govern every sprint, design review, and deployment cycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Passion Project to Trusted Enterprise Partner
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div 
                key={i}
                className="p-7 rounded-2xl bg-[#fafcfb] border border-slate-200/80 hover:border-emerald-400 transition-all relative flex flex-col"
              >
                <div className="text-3xl font-black font-mono text-emerald-600 mb-3">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Banner matching Home Page */}
      <section className="py-14 bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
              Ready to Upgrade Your Digital Infrastructure?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Let's Engineer Your Next Digital Milestone
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a direct scoping call with our senior architects. We'll analyze your tech stack, outline a fixed-cost proposal, and guide you through our engineering methodology.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiryModal("About Bottom CTA")}
                className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
              >
                Request Free Scoping Session
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Contact Our Offices
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

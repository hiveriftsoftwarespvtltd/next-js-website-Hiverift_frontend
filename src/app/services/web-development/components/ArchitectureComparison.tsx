"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  XCircle,
  CheckCircle2,
  Zap,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

export function ArchitectureComparison() {
  const [selectedMetric, setSelectedMetric] = useState<number>(0);

  const comparisons = [
    {
      title: "Core Web Vitals & Load Speed",
      legacy: {
        score: "3.8s - 5.2s",
        status: "Sluggish TTFB",
        desc: "Bloated templates and unoptimized scripts cause slow initial rendering, driving away over 53% of mobile visitors.",
        negative: true,
      },
      hiverift: {
        score: "< 0.4s Instant",
        status: "Sub-Second Global Edge",
        desc: "Built with Next.js Server Components, tree-shaken CSS, and smart image prefetching for instant page navigation.",
        negative: false,
      },
    },
    {
      title: "SEO Architecture & Search Indexing",
      legacy: {
        score: "Basic / Static",
        status: "Poor Technical SEO",
        desc: "Missing structured schema, messy DOM hierarchy, and render-blocking scripts hurt search rankings.",
        negative: true,
      },
      hiverift: {
        score: "100/100 Audit",
        status: "Semantic JSON-LD & OpenGraph",
        desc: "Automated dynamic sitemaps, structured breadcrumb schemas, clean canonical tags, and search bot optimization.",
        negative: false,
      },
    },
    {
      title: "Lead Capture & Conversion Pathways",
      legacy: {
        score: "1.2% - 1.8%",
        status: "Passive Contact Form",
        desc: "Basic mail forms often get blocked by spam filters or send plain unformatted emails without tracking.",
        negative: true,
      },
      hiverift: {
        score: "4.8% - 7.5%+",
        status: "Automated CRM & WhatsApp Sync",
        desc: "Real-time input validation, WhatsApp click-to-chat triggers, lead scoring, and instant SMS/Email notifications.",
        negative: false,
      },
    },
    {
      title: "Security & Source Code Ownership",
      legacy: {
        score: "High Risk",
        status: "Vulnerable Plugins & Themes",
        desc: "Third-party plugins frequently introduce SQL injection vulnerabilities, ransomware exploits, and vendor lock-in.",
        negative: true,
      },
      hiverift: {
        score: "100% Owned",
        status: "Bank-Grade Encryption (OWASP)",
        desc: "100% bespoke source code repository handed over to you, with CSRF protection, rate limiting, and zero licensing fees.",
        negative: false,
      },
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#f7fcf9] to-white border-b border-emerald-100/70 relative overflow-hidden">
      {/* Background Subtle Wave Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
            THE HIVERIFT ADVANTAGE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Traditional Website vs HiveRift Engineered Platform
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Why high-growth businesses choose custom web development over generic templates. Compare the engineering fundamentals below.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Traditional Agency / Template Website */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-3xl bg-slate-50 border border-rose-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-200/90 mb-5 sm:mb-6 gap-2">
                <div>
                  <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                    The Outdated Approach
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    Standard Agency / Bloated Theme
                  </h3>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">
                  <XCircle size={20} />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {comparisons.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                      <span className="text-xs font-bold text-slate-800">{item.title}</span>
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/60">
                        {item.legacy.score}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-rose-700 mb-1 flex items-center gap-1">
                      <TrendingDown size={12} /> {item.legacy.status}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.legacy.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
              <ShieldAlert size={14} className="text-rose-500 shrink-0" />
              <span>Result: Low visitor engagement and higher advertising bounce rates.</span>
            </div>
          </div>

          {/* Card 2: HiveRift Engineered Web Platform */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-3xl bg-white border-2 border-emerald-500/80 shadow-xl shadow-emerald-900/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-emerald-100 mb-5 sm:mb-6 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      The Modern Standard
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[9px] uppercase tracking-wider">
                      HIGH PERFORMANCE
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    HiveRift Engineered Website
                  </h3>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 size={20} />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {comparisons.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 hover:border-emerald-500/70 transition-all hover:shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                      <span className="text-xs font-bold text-slate-900">{item.title}</span>
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        {item.hiverift.score}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold text-emerald-800 mb-1 flex items-center gap-1">
                      <TrendingUp size={12} className="text-emerald-600" /> {item.hiverift.status}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.hiverift.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs text-emerald-800 font-semibold flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>Result: Maximum conversions, top organic rankings, and 100% scalable code.</span>
              </div>
              <button
                onClick={() => openEnquiryModal("Architecture Comparison Consult")}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Upgrade Site</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  XCircle,
  CheckCircle2,
  Zap,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  ShoppingCart,
  ArrowRight
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

export function EcommerceArchitectureComparison() {
  const comparisons = [
    {
      title: "Mobile Catalog Speed & TTFB",
      legacy: {
        score: "3.8s - 5.5s",
        status: "High Bounce Rate (>58%)",
        desc: "Overloaded theme liquid scripts and unoptimized image libraries stall the critical rendering path on mobile 4G networks.",
      },
      hiverift: {
        score: "< 0.3s Instant",
        status: "Sub-Second Global Edge",
        desc: "Edge-rendered product catalogs with automated Next-Gen WebP/AVIF compression and predictive instant page prefetching.",
      },
    },
    {
      title: "Checkout Flow & Cart Abandonment",
      legacy: {
        score: "72% - 78% Abandoned",
        status: "Multi-Step Friction",
        desc: "Clunky 4-step checkouts requiring tedious account creation and slow OTP redirects cause buyers to drop off before paying.",
      },
      hiverift: {
        score: "28% - 35% Only",
        status: "1-Click UPI & Express Checkout",
        desc: "Accelerated 1-tap checkout (Apple Pay, Google Pay, UPI, Cards) with automated WhatsApp cart recovery triggers.",
      },
    },
    {
      title: "High-Traffic Flash Sale Stability",
      legacy: {
        score: "Crashes at 2k Users",
        status: "Server 504 Gateway Timeouts",
        desc: "Shared hosting databases crash under surge traffic during festive sales, leading to lost revenue and customer frustration.",
      },
      hiverift: {
        score: "100k+ Concurrency",
        status: "Auto-Scaling Serverless Edge",
        desc: "Elastic cloud infrastructure with Redis edge caching designed to handle millions of transactions without a single drop.",
      },
    },
    {
      title: "ERP, Inventory & Omnichannel Sync",
      legacy: {
        score: "Manual / Delayed",
        status: "Overselling & Inventory Errors",
        desc: "Fragile third-party plugins lose synchronization with warehouse 3PLs, creating out-of-stock orders and customer complaints.",
      },
      hiverift: {
        score: "Real-Time Webhooks",
        status: "Automated 2-Way Sync",
        desc: "Direct integration with SAP, NetSuite, Shiprocket, and custom ERPs with guaranteed real-time stock allocation.",
      },
    },
  ];

  return (
    <section className="py-14 lg:py-24 bg-gradient-to-b from-white via-[#f7fcf9] to-white border-b border-emerald-100/70 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
            THE COMMERCE ADVANTAGE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bloated Storefronts vs HiveRift Engineered Commerce
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Why high-growth D2C brands migrate from sluggish off-the-shelf templates to custom headless architectures.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Traditional Bloated Store */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-3xl bg-slate-50 border border-rose-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-200/90 mb-5 sm:mb-6 gap-2">
                <div>
                  <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                    The Outdated Storefront
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    Bloated Theme + 30 Plugins
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
              <span>Result: Up to 50% of ad spend lost to checkout drop-offs and slow loading.</span>
            </div>
          </div>

          {/* Card 2: HiveRift Engineered Commerce */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-3xl bg-white border-2 border-emerald-500/80 shadow-xl shadow-emerald-900/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-emerald-100 mb-5 sm:mb-6 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      The Modern Architecture
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[9px] uppercase tracking-wider">
                      HIGH VELOCITY
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    HiveRift Headless & Shopify Plus
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
                <span>Result: Highest average order value and instant flash sale scaling.</span>
              </div>
              <button
                onClick={() => openEnquiryModal("eCommerce Migration Audit")}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Audit My Store</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

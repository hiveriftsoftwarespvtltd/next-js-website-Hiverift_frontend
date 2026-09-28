"use client";

import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, ArrowRight, Zap, ShoppingBag } from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

const terminalLogs = [
  { text: "$ npx hiverift-commerce deploy --target=headless-store", color: "text-slate-300" },
  { text: "✔ Hydrating Shopify Plus Storefront GraphQL Schema... [READY]", color: "text-emerald-400" },
  { text: "✔ Pre-rendering 12,450 product PDPs to Cloudflare Edge... [0.24s]", color: "text-emerald-400" },
  { text: "✔ Activating Stripe & Razorpay 1-Click UPI webhooks... [VERIFIED]", color: "text-teal-300" },
  { text: "✔ Syncing multi-location 3PL warehouses with Shiprocket... [CONNECTED]", color: "text-sky-300" },
  { text: "✔ Warming Redis cart cache with 100k+ session capacity... [ACTIVE]", color: "text-emerald-400" },
  { text: "Store preview ready: https://store.brand.com (Checkout configured)", color: "text-emerald-300 font-bold" },
  { text: "Payment flow: PCI-DSS Level 1 | Secure checkout configured", color: "text-amber-300" },
];

export function EcommerceLiveTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < terminalLogs.length ? prev + 1 : 3));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-[#062e20] rounded-3xl p-4 sm:p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-black text-emerald-400 uppercase tracking-widest">
                CUSTOM HEADLESS ENGINEERING
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                When Your Store Outgrows Generic Template Builders
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Standard themes force your brand into rigid templates, slow down with every app plugin installed, and take a punitive percentage cut of your transaction volume.
              </p>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                We decouple your frontend with Next.js Commerce while using Shopify Plus or custom Laravel for the backend. The result: lightning-fast page transitions, infinite UI customization, and seamless omnichannel ERP integration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>100% Bespoke Code Ownership</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Zero Theme Plugin Bloat</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Direct ERP & 3PL Logistics API</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Flash-Sale 100k Concurrency</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal("Headless Commerce Consultation")}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>Discuss Headless Commerce</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Column: Animated Terminal */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-slate-400 ml-1.5 truncate">bash - commerce-edge-sync</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>EDGE ACTIVE</span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-5 space-y-2 sm:space-y-2.5 min-h-[220px] sm:min-h-[260px] bg-slate-950/95 overflow-hidden">
                  {terminalLogs.slice(0, visibleLines).map((log, index) => (
                    <div
                      key={index}
                      className={`leading-relaxed text-[10px] sm:text-xs break-words transition-opacity duration-300 ${log.color}`}
                    >
                      {log.text}
                    </div>
                  ))}
                  <div className="inline-flex items-center gap-1 text-emerald-400">
                    <span>➜</span>
                    <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
                  </div>
                </div>

                <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>PCI-DSS Level 1 Verified</span>
                  </div>
                  <div className="font-mono text-emerald-400 text-[10px]">
                    CHECKOUT: 24ms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

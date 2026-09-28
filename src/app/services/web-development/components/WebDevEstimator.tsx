"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  ArrowRight,
  Layers,
  Clock,
  ShieldCheck,
  Code2
} from "lucide-react";

interface FeatureOption {
  id: string;
  name: string;
  tier: "standard" | "advanced";
}

const availableFeatures: FeatureOption[] = [
  { id: "seo", name: "100/100 Core Web Vitals & SEO Setup", tier: "standard" },
  { id: "cms", name: "Intuitive Admin Content Management (CMS)", tier: "standard" },
  { id: "leads", name: "Automated Lead Routing to WhatsApp / CRM", tier: "standard" },
  { id: "payments", name: "Secure Payment Gateway & Checkout", tier: "advanced" },
  { id: "auth", name: "User Accounts & Role-Based Access (RBAC)", tier: "advanced" },
  { id: "api", name: "Third-Party API & ERP Integration", tier: "advanced" },
  { id: "multilang", name: "Multi-Language & Regional Geo-Routing", tier: "advanced" },
  { id: "calculator", name: "Custom Interactive Price Calculator", tier: "advanced" },
];

export function WebDevEstimator({
  onSelectScope,
}: {
  onSelectScope?: (summary: { type: string; features: string[]; estimatedDays: string; tech: string }) => void;
}) {
  const [selectedType, setSelectedType] = useState<string>("Corporate Website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "seo",
    "cms",
    "leads",
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Derive estimated delivery timeline and tech recommendation
  const isCustomApp = selectedType === "Custom Web App" || selectedType === "SaaS Platform";
  const isEcom = selectedType === "eCommerce Store";
  const featureCount = selectedFeatures.length;

  let timeline = "2 - 3 Weeks";
  let recommendedTech = "Next.js 15, TypeScript & Tailwind CSS";

  if (isCustomApp) {
    timeline = featureCount > 5 ? "6 - 8 Weeks" : "4 - 5 Weeks";
    recommendedTech = "Next.js 15, Node.js/Laravel, PostgreSQL & Redis";
  } else if (isEcom) {
    timeline = featureCount > 5 ? "4 - 5 Weeks" : "3 - 4 Weeks";
    recommendedTech = "Shopify Headless / Next.js / WooCommerce";
  } else {
    timeline = featureCount > 5 ? "3 - 4 Weeks" : "2 - 3 Weeks";
    recommendedTech = "Next.js 15 / WordPress Gutenberg Headless";
  }

  const handleApplyToForm = () => {
    const featureNames = selectedFeatures.map(
      (id) => availableFeatures.find((f) => f.id === id)?.name || id
    );

    if (onSelectScope) {
      onSelectScope({
        type: selectedType,
        features: featureNames,
        estimatedDays: timeline,
        tech: recommendedTech,
      });
    }

    // Scroll smoothly to the form
    const el = document.getElementById("project-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
            INTERACTIVE SCOPE CONFIGURATOR
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Configure Your Project Scope & Architecture
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Select your desired website format and required features below to see instant technical recommendations and realistic delivery timeframes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            {/* Step 1: Select Website Type */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 sm:mb-3">
                1. Select Web Platform Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {[
                  "Corporate Website",
                  "eCommerce Store",
                  "Custom Web App",
                  "SaaS Platform",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-3 sm:p-3.5 rounded-2xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      selectedType === type
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20 scale-[1.02]"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Features */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 sm:mb-3">
                2. Select Core Capabilities & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 sm:p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-emerald-50/60 border-emerald-400 text-slate-900"
                          : "bg-slate-50/60 border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? "bg-emerald-600 text-white"
                              : "border border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-xs font-semibold leading-snug">{feat.name}</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0">
                        {feat.tier}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Recommendation Output Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={12} />
                  <span>Architecture Specification</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Estimated Delivery: <span className="text-emerald-400 font-mono">{timeline}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400">
                  Recommended Engine: <span className="text-slate-200 font-mono">{recommendedTech}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyToForm}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <span>Pre-fill Project Scope</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

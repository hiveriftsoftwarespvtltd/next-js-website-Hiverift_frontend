"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calculator,
  Calendar,
  Clock,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Sliders,
  ShieldCheck
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

export interface EstimatorTierOption {
  id: string;
  label: string;
  desc: string;
  multiplier: number;
}

export interface EstimatorScaleOption {
  id: string;
  label: string;
  weeksAdd: number;
}

export interface EstimatorAddonOption {
  id: string;
  label: string;
  weeksAdd: number;
}

export interface ServiceScopeEstimatorProps {
  badgeText?: string;
  heading: string;
  highlightHeading: string;
  subheading: string;
  tierLabel?: string;
  tierOptions: EstimatorTierOption[];
  scaleLabel?: string;
  scaleOptions: EstimatorScaleOption[];
  addonsLabel?: string;
  addonOptions: EstimatorAddonOption[];
  baseWeeks?: number;
  basePriceUsd?: number;
  defaultCurrency?: "INR" | "USD";
  recommendedStack: string[];
}

export function ServiceScopeEstimator({
  badgeText = "Interactive Project Estimator",
  heading,
  highlightHeading,
  subheading,
  tierLabel = "Architecture Scope",
  tierOptions,
  scaleLabel = "Team & Capacity Level",
  scaleOptions,
  addonsLabel = "Enterprise Add-ons & Integrations",
  addonOptions,
  baseWeeks = 3,
  basePriceUsd = 2000,
  defaultCurrency = "USD",
  recommendedStack
}: ServiceScopeEstimatorProps) {
  const [currency, setCurrency] = useState<"INR" | "USD">(defaultCurrency);
  const [selectedTier, setSelectedTier] = useState<string>(tierOptions[0]?.id || "");
  const [selectedScale, setSelectedScale] = useState<string>(scaleOptions[0]?.id || "");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier = tierOptions.find((t) => t.id === selectedTier) || tierOptions[0];
  const currentScale = scaleOptions.find((s) => s.id === selectedScale) || scaleOptions[0];

  const totalWeeks = Math.max(
    2,
    Math.round(
      (baseWeeks + (currentScale?.weeksAdd || 0) + selectedAddons.length * 1.5) *
        (currentTier?.multiplier || 1)
    )
  );

  const estimatedBudgetUsd = Math.round(
    basePriceUsd * (currentTier?.multiplier || 1) * (1 + (currentScale?.weeksAdd || 0) * 0.15) +
      selectedAddons.length * 750
  );

  const handleUseInBrief = () => {
    const briefText = `Configured Scope: ${currentTier?.label} (${currentScale?.label}) with add-ons: ${
      selectedAddons.length > 0 ? selectedAddons.join(", ") : "Standard"
    }. Estimated ~${totalWeeks} weeks delivery.`;

    const formElement = document.getElementById("project-brief-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      const textarea = formElement.querySelector("textarea[name='message']") as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = briefText;
      }
    } else {
      openEnquiryModal();
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sliders size={14} className="text-emerald-600" />
            <span>{badgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {highlightHeading}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subheading}
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200">
            
            {/* 1. Architecture Scope Tier */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                1. {tierLabel}
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {tierOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedTier(opt.id)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                      selectedTier === opt.id
                        ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/10 text-slate-900"
                        : "bg-white/60 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900 mb-1">{opt.label}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Capacity */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                2. {scaleLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {scaleOptions.map((scale) => (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => setSelectedScale(scale.id)}
                    className={`p-3 rounded-xl text-center border font-bold text-xs transition-all ${
                      selectedScale === scale.id
                        ? "bg-slate-900 border-slate-900 text-white shadow-md"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {scale.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-ons & Integrations */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                3. {addonsLabel}
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs font-semibold transition-all ${
                        isChecked
                          ? "bg-emerald-50 border-emerald-500 text-emerald-950"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{addon.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300"
                        }`}
                      >
                        {isChecked && <CheckCircle2 size={12} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white p-7 sm:p-9 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator size={14} />
                  Calculated Estimate
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Fixed-Price SLA
                </span>
              </div>

              {/* Delivery Timeline Projection */}
              <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block mb-1">
                  Estimated Delivery Sprint
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-white">
                    ~{totalWeeks}
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">Weeks to Production</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  Includes full discovery, architecture, QA validation, and post-launch hypercare.
                </div>
              </div>

              {/* Budget Range Guidance */}
              <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Indicative Project Investment
                  </span>
                  <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-700 text-[10px] font-bold">
                    <button
                      type="button"
                      onClick={() => setCurrency("INR")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        currency === "INR" ? "bg-emerald-500 text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      ₹ INR
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency("USD")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        currency === "USD" ? "bg-emerald-500 text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      $ USD
                    </button>
                  </div>
                </div>

                {currency === "INR" ? (
                  <div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-300">
                        ₹{(Math.round((estimatedBudgetUsd * 83 * 0.9) / 10000) * 10000).toLocaleString("en-IN")} - ₹{(Math.round((estimatedBudgetUsd * 83 * 1.25) / 10000) * 10000).toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">INR</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      (Approx. ${(estimatedBudgetUsd * 0.9).toLocaleString()} - ${(estimatedBudgetUsd * 1.25).toLocaleString()} USD equivalent)
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-300">
                        ${(estimatedBudgetUsd * 0.9).toLocaleString()} - ${(estimatedBudgetUsd * 1.25).toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">USD</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      (Or ₹{(Math.round((estimatedBudgetUsd * 83) / 10000) * 10000).toLocaleString("en-IN")}+ INR equivalent)
                    </div>
                  </div>
                )}
              </div>

              {/* Recommended Stack */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Engineered Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {recommendedStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-emerald-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  type="button"
                  onClick={handleUseInBrief}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <span>Lock In Scope & Request Detailed Proposal</span>
                  <ArrowRight size={16} />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>No obligation • 24hr guaranteed response • NDA protected</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

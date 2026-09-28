"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  XCircle,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cpu,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

export interface ComparisonItem {
  title: string;
  legacy: {
    score: string;
    status: string;
    desc: string;
  };
  hiverift: {
    score: string;
    status: string;
    desc: string;
  };
}

export interface ServiceArchitectureBenchmarkProps {
  badgeText?: string;
  heading: string;
  highlightHeading: string;
  subheading: string;
  legacyLabel?: string;
  hiveriftLabel?: string;
  comparisons: ComparisonItem[];
  summaryBadges?: string[];
  ctaText?: string;
}

export function ServiceArchitectureBenchmark({
  badgeText = "Architecture Benchmark",
  heading,
  highlightHeading,
  subheading,
  legacyLabel = "Outdated / Traditional Agency Way",
  hiveriftLabel = "HiveRift Enterprise High-Performance Standard",
  comparisons,
  summaryBadges = ["Engineered for Speed", "Zero Technical Debt", "100% Source Code Ownership"],
  ctaText = "Schedule an Architecture Audit",
}: ServiceArchitectureBenchmarkProps) {
  const [selectedMetric, setSelectedMetric] = useState<number>(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap size={14} className="animate-pulse" />
            <span>{badgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {highlightHeading}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            {subheading}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Selector column (mobile horizontal scroll, desktop vertical list) */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {comparisons.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedMetric(idx)}
                className={`text-left p-4 rounded-xl transition-all duration-300 w-full shrink-0 lg:shrink flex items-center justify-between border ${
                  selectedMetric === idx
                    ? "bg-slate-800/90 border-emerald-500/50 shadow-lg shadow-emerald-500/10 text-white"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                }`}
              >
                <div className="pr-3">
                  <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase block mb-1">
                    0{idx + 1} // Metric
                  </span>
                  <p className="text-sm sm:text-base font-bold line-clamp-1">{item.title}</p>
                </div>
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    selectedMetric === idx ? "bg-emerald-500 text-slate-950 font-bold" : "bg-slate-800 text-slate-500"
                  }`}
                >
                  <ArrowRight size={14} className={selectedMetric === idx ? "translate-x-0.5" : ""} />
                </div>
              </button>
            ))}
          </div>

          {/* Side-by-side cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* The Outdated Way */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950/70 border border-rose-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle size={15} />
                    {legacyLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    Legacy Risk
                  </span>
                </div>

                <div className="my-5">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-rose-300 block">
                    {comparisons[selectedMetric].legacy.score}
                  </span>
                  <span className="text-xs text-rose-400/80 font-medium block mt-1">
                    {comparisons[selectedMetric].legacy.status}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {comparisons[selectedMetric].legacy.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-rose-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>High long-term maintenance cost & technical lock-in</span>
              </div>
            </div>

            {/* The HiveRift Enterprise Standard */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/50 shadow-2xl shadow-emerald-500/10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 size={15} />
                    {hiveriftLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Optimal
                  </span>
                </div>

                <div className="my-5">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-300 block">
                    {comparisons[selectedMetric].hiverift.score}
                  </span>
                  <span className="text-xs text-emerald-400/90 font-medium block mt-1">
                    {comparisons[selectedMetric].hiverift.status}
                  </span>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed">
                  {comparisons[selectedMetric].hiverift.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Engineered for sub-second execution & scale</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {summaryBadges.map((badge, bIdx) => (
              <div key={bIdx} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => openEnquiryModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 shrink-0"
          >
            <span>{ctaText}</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}

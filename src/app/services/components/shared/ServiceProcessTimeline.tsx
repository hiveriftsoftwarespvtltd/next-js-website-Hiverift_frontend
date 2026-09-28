"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  LucideIcon
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

export interface ServiceProcessStep {
  step: string;
  title: string;
  timeline: string;
  desc: string;
  icon?: LucideIcon;
  tools: string[];
  deliverables: string[];
}

export interface ServiceProcessTimelineProps {
  badgeText?: string;
  heading: string;
  highlightHeading: string;
  subheading: string;
  steps: ServiceProcessStep[];
  qualityGates?: string[];
}

export function ServiceProcessTimeline({
  badgeText = "Execution Lifecycle",
  heading,
  highlightHeading,
  subheading,
  steps,
  qualityGates = [
    "Dedicated Scrum Master & Slack Access",
    "Continuous CI/CD Preview Environments",
    "Zero-Downtime Deployment SLA",
    "Comprehensive IP & Source Code Transfer"
  ]
}: ServiceProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-y border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock size={14} className="text-emerald-600" />
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

        {/* Phase selector tabs (mobile horizontal, desktop grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/10 -translate-y-0.5"
                    : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/30"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono text-xs font-extrabold px-1.5 py-0.5 rounded ${
                      isSelected ? "bg-emerald-500 text-slate-950" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    PHASE {item.step}
                  </span>
                  <span className={`text-[11px] font-medium ${isSelected ? "text-emerald-300" : "text-slate-400"}`}>
                    {item.timeline}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold line-clamp-1">{item.title}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 transition-all">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Stage Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-600">
                    Phase {steps[activeStep].step}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    <Clock size={12} className="text-emerald-600" />
                    {steps[activeStep].timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {steps[activeStep].title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  {steps[activeStep].desc}
                </p>

                {/* Toolchain Badges */}
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                    Toolchain & Methodologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {steps[activeStep].tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tangible Deliverables */}
              <div className="lg:col-span-6 bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-600" />
                      Milestone Deliverables & QA Gate
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Sign-off Required
                    </span>
                  </div>

                  <ul className="space-y-3.5 my-4">
                    {steps[activeStep].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    Stage {activeStep + 1} of {steps.length} in project lifecycle
                  </div>
                  <button
                    onClick={() => openEnquiryModal()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md shrink-0"
                  >
                    <span>Request Custom Roadmap</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quality Gates Footer */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityGates.map((gate, gIdx) => (
              <div key={gIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>{gate}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { 
  FileText, 
  Palette, 
  Code2, 
  Rocket, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Code,
  Users
} from "lucide-react";
import { openEnquiryModal } from "./EnquiryModal";

interface ProcessStep {
  step: string;
  timeline: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  keyOutcome: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    timeline: "Days 1–3",
    title: "Share Your Requirement",
    subtitle: "Discovery & Scope Definition",
    description: "We review your commercial goals, user personas, technical specifications, and project scope to formulate a clear, fixed-price roadmap.",
    icon: FileText,
    deliverables: [
      "Requirement scoping & feasibility call",
      "Detailed project scope & feature specification",
      "Transparent fixed price & milestone timeline"
    ],
    keyOutcome: "Fixed Scope & Milestone Roadmap"
  },
  {
    step: "02",
    timeline: "Week 1–2",
    title: "Plan & Design",
    subtitle: "UI/UX & System Architecture",
    description: "We translate your requirements into interactive Figma prototypes and database schemas so you can test and approve every screen before code is written.",
    icon: Palette,
    deliverables: [
      "Interactive high-fidelity Figma prototype",
      "Brand-aligned UI kit & component design system",
      "Database schema & API contract architecture"
    ],
    keyOutcome: "Approved Clickable Prototype"
  },
  {
    step: "03",
    timeline: "Weeks 2–4",
    title: "Development",
    subtitle: "Agile Sprint Engineering",
    description: "Our engineers build using clean, maintainable code with continuous staging environments, letting you preview working features at every milestone.",
    icon: Code2,
    deliverables: [
      "Clean, modular Next.js / React engineering",
      "Private live staging URL with weekly progress demos",
      "Automated cross-device, speed & security testing"
    ],
    keyOutcome: "Production-Grade Codebase"
  },
  {
    step: "04",
    timeline: "Week 5+",
    title: "Launch & Grow",
    subtitle: "Deployment & Ongoing Support",
    description: "We execute a smooth, zero-downtime production release, configure Google indexing and analytics, and hand over 100% code ownership.",
    icon: Rocket,
    deliverables: [
      "Zero-downtime deployment & DNS configuration",
      "Google Search Console, sitemaps & analytics setup",
      "Full source code handover & 30-day post-launch support"
    ],
    keyOutcome: "Live Website & Full Ownership"
  }
];

export function WorkProcess() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section 
      id="process" 
      className="py-16 lg:py-24 bg-white text-slate-900 border-t border-slate-100 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full mb-3.5">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              How We Work
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            From First Conversation to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Live Production
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A structured, transparent four-step process built to keep your project on schedule, on budget, and free from surprises.
          </p>
        </div>

        {/* 4 Connected Cards in One Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            const isSelected = selectedStep === index;

            return (
              <div
                key={stepItem.step}
                onClick={() => setSelectedStep(index)}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer text-left ${
                  isSelected
                    ? "bg-[#fafcfb] border-2 border-emerald-600 shadow-lg shadow-emerald-900/5 ring-4 ring-emerald-50"
                    : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Card Top: Step Pill + Duration */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span 
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                        isSelected 
                          ? "bg-emerald-600 text-white" 
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      STEP {stepItem.step}
                    </span>

                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock size={12} className="text-slate-400" />
                      {stepItem.timeline}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected 
                          ? "bg-emerald-100 text-emerald-800" 
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {stepItem.title}
                      </h3>
                      <p className="text-xs font-medium text-emerald-700 mt-0.5">
                        {stepItem.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mt-3 mb-6">
                    {stepItem.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {stepItem.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <Check 
                            size={14} 
                            className={`shrink-0 mt-0.5 ${
                              isSelected ? "text-emerald-600 stroke-[2.5]" : "text-slate-400 stroke-[2]"
                            }`} 
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Key Outcome Banner */}
                <div className="mt-6 pt-3.5 border-t border-slate-100">
                  <div className={`p-2.5 rounded-xl text-[11px] font-medium flex items-center justify-between transition-colors ${
                    isSelected 
                      ? "bg-emerald-50 text-emerald-900 border border-emerald-200/60" 
                      : "bg-slate-50 text-slate-600 border border-slate-100"
                  }`}>
                    <span className="truncate">
                      <strong className="font-semibold text-slate-900">Outcome:</strong> {stepItem.keyOutcome}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Bottom Summary & Action Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">Direct Senior Engineers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <Code size={16} className="text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">100% Code Ownership</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">Fixed-Price Milestones</span>
            </div>
          </div>

          <button
            onClick={() => openEnquiryModal("Process Scoping Consultation")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

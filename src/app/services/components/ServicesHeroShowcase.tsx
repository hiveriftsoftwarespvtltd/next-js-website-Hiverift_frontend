"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Brain,
  Cloud,
  Code2,
  Activity,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Play,
  RotateCw,
  Terminal,
  ShieldCheck,
  Layers
} from "lucide-react";

export function ServicesHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"matrix" | "code" | "sla">("matrix");
  const [selectedDiscipline, setSelectedDiscipline] = useState<"web" | "ecommerce" | "mobile" | "ai" | "cloud">("web");
  const [isAuditing, setIsAuditing] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const capabilities = {
    web: {
      title: "Custom Web & Enterprise Software",
      stack: "Next.js 15 • TypeScript • Go / NestJS • PostgreSQL",
      benchmark: "Sub-Second Global Edge (< 0.4s TTFB)",
      icon: Globe,
      features: ["Next.js Server Components (RSC)", "Dynamic Structured Schema SEO", "Microservice Database Pooling", "99+ Core Web Vitals"]
    },
    ecommerce: {
      title: "Headless eCommerce & Shopify Plus",
      stack: "Shopify Plus • Next.js Commerce • Stripe • Redis Cart",
      benchmark: "0.28s Load Speed & 1-Click Checkout",
      icon: ShoppingCart,
      features: ["Sub-50ms Cart Retrieval", "Custom Checkout Extensibility", "Automated ERP/OMS Synchronization", "PCI-DSS Level 1 Security"]
    },
    mobile: {
      title: "High-Performance Mobile Apps (iOS & Android)",
      stack: "Flutter 3.24 • React Native • Swift • Kotlin",
      benchmark: "60 - 120 FPS Native Hardware Accelerated",
      icon: Smartphone,
      features: ["Offline-First Encrypted SQLite", "Hermes V8 Fast Start Engine", "Automated Fastlane Store CI/CD", "Biometric Keychain Auth"]
    },
    ai: {
      title: "AI, Machine Learning & Data Annotation",
      stack: "Llama 3 / Mistral • PyTorch • vLLM • Qdrant • LiDAR",
      benchmark: "18ms Token Latency & 99.8% Precision",
      icon: Brain,
      features: ["Private VPC Open-Weights Hosting", "Zero Hallucination Grounded RAG", "4-bit AWQ GPU Quantization", "Double-Blind Data Consensus"]
    },
    cloud: {
      title: "Cloud Architecture & DevOps Automation",
      stack: "Kubernetes (EKS/GKE) • Terraform • ArgoCD • Datadog",
      benchmark: "High Availability & Resilient Deployments",
      icon: Cloud,
      features: ["Immutable GitOps Infrastructure", "Automated Blue-Green Deployments", "-42% FinOps Cloud Cost Reduction", "Multi-Region Active Disaster Recovery"]
    }
  };

  const current = capabilities[selectedDiscipline];

  const sampleMonorepoCode = `// hiverift.workspace.config.ts
export const HiveRiftEnterpriseArchitecture = {
  stack: {
    frontend: "Next.js 15 (App Router & Server Actions)",
    mobile: "Flutter 3.24 / React Native (60 FPS Native)",
    backend: "Go / NestJS Event-Driven Microservices",
    ai: "vLLM PagedAttention on Private VPC Clusters",
    cloud: "Kubernetes EKS Multi-AZ with Terraform GitOps"
  },
  guarantees: {
    latency: "< 0.4s Worldwide Edge Delivery",
    security: "SOC2 Type 2, HIPAA & PCI-DSS Level 1",
    ipOwnership: "100% Transfer to Client at Launch"
  }
};`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleMonorepoCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Full-Spectrum Digital Engineering</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            9 Disciplines
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Zap size={13} className="text-cyan-400" />
          <span>Sub-Second Global Performance Standard</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>100% Intellectual Property Ownership</span>
        </div>
      </div>

      {/* 2. Main Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              services.nexus // enterprise_capabilities_v4
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "matrix" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers size={13} />
              <span>Capability Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Architecture Spec</span>
            </button>
            <button
              onClick={() => setActiveTab("sla")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "sla" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>Engineering SLAs</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Deployments: 48</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: CAPABILITY MATRIX */}
          {activeTab === "matrix" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Discipline Switcher Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
                {(["web", "ecommerce", "mobile", "ai", "cloud"] as const).map((key) => {
                  const item = capabilities[key];
                  const Icon = item.icon;
                  const isSelected = selectedDiscipline === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedDiscipline(key)}
                      className={`px-3 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                        isSelected
                          ? "bg-slate-950 text-emerald-400 border border-emerald-500/40 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon size={14} />
                      <span className="capitalize">{key === "ai" ? "AI & Data" : key}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Discipline Spec Card */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">Discipline Spotlight</span>
                    <h3 className="text-lg font-black text-white">{current.title}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {current.benchmark}
                  </span>
                </div>

                {/* Features */}
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                    Core Technical Deliverables
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {current.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-between"
                      >
                        <span>{feat}</span>
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Stack Strip */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Stack:</span>
                    <strong className="text-slate-200">{current.stack}</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Production Grade</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: CODE */}
          {activeTab === "code" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  hiverift.workspace.config.ts
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1 transition-colors"
                >
                  {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedCode ? "Copied" : "Copy Source"}</span>
                </button>
              </div>
              <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300">
                <code>{sampleMonorepoCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: SLA */}
          {activeTab === "sla" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. On-Time */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">Plan</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Milestone Planning</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Roadmap & Reviews</span>
                </div>

                {/* 2. Uptime */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400"
                        strokeDasharray="99.999, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">Ops</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Cloud Operations</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Monitoring & Alerts</span>
                </div>

                {/* 3. ROAS */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="96, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">Ads</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Campaign Reporting</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Custom Dashboards</span>
                </div>

                {/* 4. Client Retention */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-teal-400"
                        strokeDasharray="98, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">Care</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Ongoing Support</span>
                  <span className="text-[10px] text-teal-400 font-mono">Long-Term Collaboration</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Landmark,
  Heart,
  ShoppingCart,
  Factory,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Activity,
  CheckCircle2,
  Copy,
  Check,
  Play,
  RotateCw,
  Terminal,
  Building2,
  Cpu,
  Lock
} from "lucide-react";

export function SolutionsHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"blueprint" | "code" | "compliance">("blueprint");
  const [activeSector, setActiveSector] = useState<"fintech" | "healthcare" | "logistics" | "retail">("fintech");
  const [isSimulating, setIsSimulating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const sectorData = {
    fintech: {
      title: "Core Banking & FinTech Modernization",
      compliance: "PCI-DSS Level 1 & RBI / FDIC Compliant",
      latency: "12ms p99",
      integrations: ["Core Ledger API", "SWIFT / UPI Instant Gateway", "Biometric Vault", "Fraud AI Engine"],
      badge: "Bank-Grade Security"
    },
    healthcare: {
      title: "Telemedicine & ABDM / HIPAA Patient Platform",
      compliance: "HIPAA & ABDM / GDPR Health Certified",
      latency: "18ms p99",
      integrations: ["EHR / EMR Interoperability", "FHIR Data Protocol", "End-to-End Encrypted Video", "e-Rx Engine"],
      badge: "Clinical Grade"
    },
    logistics: {
      title: "Smart Logistics, Fleet IoT & Warehouse WMS",
      compliance: "ISO 27001 & Real-Time Telemetry",
      latency: "24ms p99",
      integrations: ["GPS Fleet Telematics", "Automated Route Optimizer", "Automated Customs EDI", "Inventory Mesh"],
      badge: "Sub-Second Fleet Sync"
    },
    retail: {
      title: "Omnichannel Headless Commerce & ERP Mesh",
      compliance: "PCI-DSS & Global Multi-Currency Tax",
      latency: "0.28s TTFB",
      integrations: ["SAP / NetSuite ERP", "Global 3PL Fulfillment", "Real-Time Stock Matrix", "1-Click Checkout"],
      badge: "High-Throughput Scale"
    }
  };

  const current = sectorData[activeSector];

  const sampleEnterpriseCode = `// core/domain/compliance_orchestrator.ts
import { AuditLogger, CryptographicKeystore } from '@/enterprise/security';

export class EnterpriseSectorOrchestrator {
  // Enforces zero-trust isolation and regulatory compliance checks
  async executeSectorTransaction(tx: EnterpriseTransaction): Promise<TransactionReceipt> {
    const session = await CryptographicKeystore.verifyHardwareKeystore(tx.token);
    
    // Immutable Tamper-Evident Audit Logging
    await AuditLogger.record({
      sector: "${activeSector.toUpperCase()}",
      jurisdiction: "SOC2_TYPE_2",
      complianceState: "VERIFIED_COMPLIANT",
      timestamp: new Date().toISOString(),
      latency: "12.4ms"
    });

    return { status: "APPROVED", authorizationToken: session.signature };
  }
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleEnterpriseCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Industry-Tailored Digital Architecture</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            High Availability
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <ShieldCheck size={13} className="text-cyan-400" />
          <span>HIPAA, PCI-DSS & SOC2 Certified</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <Layers size={13} className="text-emerald-400" />
          <span>Zero Legacy Downtime Migration</span>
        </div>
      </div>

      {/* 2. Main High-Tech Terminal / Solutions Blueprint Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              solutions.architect // vertical_blueprint_v5
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("blueprint")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "blueprint" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 size={13} />
              <span>Architecture Blueprint</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Orchestration Code</span>
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "compliance" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>Compliance Vitals</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Audit Passed</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: BLUEPRINT NAVIGATOR */}
          {activeTab === "blueprint" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Sector Switcher Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setActiveSector("fintech")}
                  className={`p-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    activeSector === "fintech"
                      ? "bg-slate-950 text-emerald-400 border border-emerald-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Landmark size={14} />
                  <span>Banking & FinTech</span>
                </button>

                <button
                  onClick={() => setActiveSector("healthcare")}
                  className={`p-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    activeSector === "healthcare"
                      ? "bg-slate-950 text-cyan-400 border border-cyan-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Heart size={14} />
                  <span>Healthcare</span>
                </button>

                <button
                  onClick={() => setActiveSector("logistics")}
                  className={`p-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    activeSector === "logistics"
                      ? "bg-slate-950 text-teal-400 border border-teal-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Factory size={14} />
                  <span>Smart Logistics</span>
                </button>

                <button
                  onClick={() => setActiveSector("retail")}
                  className={`p-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    activeSector === "retail"
                      ? "bg-slate-950 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <ShoppingCart size={14} />
                  <span>B2B / Commerce</span>
                </button>
              </div>

              {/* Active Blueprint Spec Card */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">Vertical Architecture</span>
                    <h3 className="text-lg font-black text-white">{current.title}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {current.badge}
                  </span>
                </div>

                {/* Integration Nodes */}
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                    Engineered System Modules & Integration Hubs
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {current.integrations.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Lock size={13} className="text-cyan-400" />
                    <span>Standards: <strong className="text-slate-200">{current.compliance}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={13} className="text-emerald-400" />
                    <span>Latency: <strong className="text-emerald-400">{current.latency}</strong></span>
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
                  enterprise/compliance_orchestrator.ts
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
                <code>{sampleEnterpriseCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: COMPLIANCE */}
          {activeTab === "compliance" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. Regulatory */}
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
                    <span className="absolute font-mono font-black text-white text-base">100%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Regulatory Pass</span>
                  <span className="text-[10px] text-emerald-400 font-mono">HIPAA / PCI Level 1</span>
                </div>

                {/* 2. Latency */}
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
                        strokeDasharray="98, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">{"< 45ms"}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Transaction Speed</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Sub-50ms Global</span>
                </div>

                {/* 3. Availability */}
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
                        strokeDasharray="99.999, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">HA</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Cloud Architecture</span>
                  <span className="text-[10px] text-emerald-400 font-mono">High Availability</span>
                </div>

                {/* 4. Data Loss */}
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
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">0%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Data Loss</span>
                  <span className="text-[10px] text-teal-400 font-mono">ACID Guaranteed</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

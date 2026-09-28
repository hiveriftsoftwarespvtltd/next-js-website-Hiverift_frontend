"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Lock,
  RotateCw,
  Code2,
  Zap,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  Copy,
  Check
} from "lucide-react";

export function WebDevHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "performance">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [conversionCount, setConversionCount] = useState(1435);
  const [isSimulating, setIsSimulating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Periodic subtle visitor count update
  useEffect(() => {
    const timer = setInterval(() => {
      setConversionCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateLead = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setConversionCount((prev) => prev + 1);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1800);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const sampleCode = `// app/services/web-development/page.tsx
import { Metadata } from 'next';
import { EnterpriseEngine } from '@/lib/core';

export const metadata: Metadata = {
  title: 'High-Performance Web Platforms | HiveRift',
  description: 'Sub-second web architectures built for revenue scale.',
};

export default async function WebPlatform() {
  // Edge-cached Server Component for sub-200ms TTFB
  const metrics = await EnterpriseEngine.getEdgeTelemetry({
    cache: 'force-cache',
    revalidate: 3600,
  });

  return (
    <main className="grid-architecture-v3">
      <HeroEngine telemetry={metrics} cdnStatus="edge-active" />
      <ConversionPathway instantSync={true} />
    </main>
  );
}`;

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Fully-Responsive Technical Authority Pill Strip (Never Clips, Wraps Beautifully) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Next.js 15 & React 19 Engine</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            0.24s FCP
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/40 shadow-sm text-xs font-bold text-white">
          <TrendingUp size={13} className="text-teal-400 shrink-0" />
          <span>+340% Lead Velocity</span>
          <span className="text-[10px] text-teal-300 font-mono bg-teal-500/15 px-1.5 py-0.5 rounded border border-teal-500/30">
            CRO Funnel
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-emerald-300">
          <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
          <span>Enterprise TLS 1.3 Strict</span>
        </div>
      </div>

      {/* Ambient Backlight Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-600/20 rounded-[28px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10 pointer-events-none" />

      {/* Main Browser Window Mockup */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl overflow-hidden transition-all duration-300">
        
        {/* Browser Top Navigation Bar */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/95 border-b border-slate-800/90 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* macOS Style Traffic Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/90 inline-block shadow-xs shadow-rose-500/50" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 inline-block shadow-xs shadow-amber-500/50" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 inline-block shadow-xs shadow-emerald-500/50" />
            <span className="text-[11px] font-mono text-slate-400 pl-1.5 hidden md:inline-block">
              HiveRift Web Engine v4.2
            </span>
          </div>

          {/* Browser Address Bar (Centered & Responsively Truncated) */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-slate-800 text-xs text-slate-300 min-w-0">
            <Lock size={12} className="text-emerald-400 shrink-0" />
            <span className="text-emerald-400 font-semibold font-mono text-[11px] shrink-0">https://</span>
            <span className="font-mono text-[11px] text-slate-300 truncate">hiverift.com/enterprise-showcase</span>
            <RotateCw size={11} className="text-slate-500 hover:text-slate-300 cursor-pointer ml-auto shrink-0 transition-colors" />
          </div>

          {/* Mode Switcher Tabs (Optimized for Mobile Touch) */}
          <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 text-xs shrink-0">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "preview"
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Globe size={13} />
              <span className="hidden sm:inline">Live App</span>
              <span className="sm:hidden">Live</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "code"
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code2 size={13} />
              <span className="hidden sm:inline">Architecture</span>
              <span className="sm:hidden">Code</span>
            </button>
            <button
              onClick={() => setActiveTab("performance")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "performance"
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap size={13} />
              <span className="hidden sm:inline">Speed (100)</span>
              <span className="sm:hidden">100</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive App Preview */}
        {activeTab === "preview" && (
          <div className="p-3 sm:p-5 lg:p-6 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between">
            {/* Mock Web Application Inner Header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Globe size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                    <span className="truncate">Apex Global Technologies</span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                      LIVE
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">
                    Next.js 15 • Global Edge Network
                  </div>
                </div>
              </div>

              {/* Viewport Switcher Buttons (Hidden on mobile phones to save space, visible on tablet/desktop) */}
              <div className="hidden sm:flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-slate-400 shrink-0">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`p-1 rounded cursor-pointer ${deviceView === "desktop" ? "text-emerald-400 bg-slate-800" : "hover:text-white"}`}
                  title="Desktop View"
                >
                  <Monitor size={14} />
                </button>
                <button
                  onClick={() => setDeviceView("tablet")}
                  className={`p-1 rounded cursor-pointer ${deviceView === "tablet" ? "text-emerald-400 bg-slate-800" : "hover:text-white"}`}
                  title="Tablet View"
                >
                  <Tablet size={14} />
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`p-1 rounded cursor-pointer ${deviceView === "mobile" ? "text-emerald-400 bg-slate-800" : "hover:text-white"}`}
                  title="Mobile View"
                >
                  <Smartphone size={14} />
                </button>
              </div>
            </div>

            {/* Simulated Live Web Dashboard Body */}
            <div className={`transition-all duration-500 mx-auto w-full my-3 sm:my-4 ${
              deviceView === "desktop"
                ? "max-w-full"
                : deviceView === "tablet"
                ? "max-w-md border-x border-slate-800 px-3"
                : "max-w-xs border-x border-slate-800 px-3"
            }`}>
              
              {/* Quick Hero Banner Inside Preview */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/40 border border-emerald-500/30 mb-3 sm:mb-4 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                      Conversion Growth Pipeline
                    </span>
                    <h4 className="text-sm sm:text-base lg:text-lg font-black text-white leading-snug">
                      B2B Client Funnel is Outperforming by +42%
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed max-w-md">
                      Sub-second load speed and high-intent CRO pathways have converted 
                      <span className="text-emerald-400 font-bold ml-1 font-mono">{conversionCount.toLocaleString()} verified enquiries</span> this quarter.
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <button
                    onClick={handleSimulateLead}
                    className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-emerald-500/30 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {isSimulating ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                        <span>Capturing Lead...</span>
                      </>
                    ) : (
                      <>
                        <TrendingUp size={13} />
                        <span>Simulate Conversion</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 3 Interactive Real-Time Metric Cards (Mobile Stack, Desktop Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                    <span>Page Load Speed</span>
                    <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-emerald-500/10 rounded">
                      TOP 1%
                    </span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white font-mono flex items-baseline gap-1">
                    0.24<span className="text-xs text-slate-400 font-normal">sec</span>
                  </div>
                  <div className="text-[10px] text-emerald-400/90 mt-1 flex items-center gap-1">
                    <CheckCircle2 size={11} /> 100% Core Web Vitals Pass
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                    <span>Active Qualified Leads</span>
                    <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-emerald-500/10 rounded">
                      +38.4%
                    </span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white font-mono flex items-baseline gap-1">
                    {conversionCount.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <TrendingUp size={11} className="text-emerald-400" /> Automated CRM Sync
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                    <span>Security & Uptime SLA</span>
                    <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-emerald-500/10 rounded">
                      A+ GRADE
                    </span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono flex items-baseline gap-1">
                    Secure
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <ShieldCheck size={11} className="text-emerald-400" /> Cloudflare Edge Firewall
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] text-slate-400 gap-1.5 sm:gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Active Global Edge Nodes: <strong>320 Locations</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">Zero-Downtime CI/CD Handshake</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Code Architecture */}
        {activeTab === "code" && (
          <div className="p-3 sm:p-5 lg:p-6 bg-slate-950 font-mono text-xs text-slate-300 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between overflow-x-auto">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[10px] sm:text-[11px] text-slate-400 gap-2">
                <div className="flex items-center gap-2 truncate">
                  <span className="px-2 py-0.5 bg-slate-800 text-emerald-400 rounded shrink-0">
                    page.tsx
                  </span>
                  <span className="truncate">TypeScript 5.6 • React 19 • App Router</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs transition-colors shrink-0 cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-slate-300 leading-relaxed font-mono overflow-x-auto text-[10px] sm:text-xs">
                <code>
                  {sampleCode}
                </code>
              </pre>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>Clean architecture adhering to strict OWASP & WCAG guidelines.</span>
              <span className="text-emerald-400 font-semibold">Type Safe • Zero Bloat</span>
            </div>
          </div>
        )}

        {/* Tab 3: Performance & Lighthouse 100 Simulator */}
        {activeTab === "performance" && (
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-950 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="text-center max-w-md mx-auto mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Zap size={12} /> Google PageSpeed Insights SLA
                </div>
                <h4 className="text-base sm:text-xl font-black text-white">
                  Audited 100/100 Mobile & Desktop Performance
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                  We don't build sluggish templates. Every website is engineered for maximum speed and instant search engine indexability.
                </p>
              </div>

              {/* 4 Animated Lighthouse Score Dials (2x2 on Mobile, 4x1 on Tablet/Desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-2xl mx-auto">
                {[
                  { label: "Performance", score: "100", grade: "Optimal" },
                  { label: "Accessibility", score: "100", grade: "WCAG AA" },
                  { label: "Best Practices", score: "100", grade: "Modern" },
                  { label: "SEO Hierarchy", score: "100", grade: "Verified" }
                ].map((dial, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center flex flex-col items-center justify-center shadow-lg shadow-emerald-500/5 hover:border-emerald-400 transition-colors"
                  >
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center mb-1.5 sm:mb-2">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-800"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-emerald-500"
                          strokeDasharray="100, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute font-mono text-lg sm:text-2xl font-black text-emerald-400">
                        {dial.score}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                      {dial.label}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400/80 font-mono mt-0.5">
                      {dial.grade}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Web Vitals breakdown */}
              <div className="mt-4 sm:mt-6 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Largest Contentful Paint</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">0.6s (Fast)</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">First Input Delay</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">8ms (Instant)</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Cumulative Layout Shift</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">0.000 (Zero Shift)</div>
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-500 text-center">
              Google ranks websites with sub-second speeds significantly higher in organic search results.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

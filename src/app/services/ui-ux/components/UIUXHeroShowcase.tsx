"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Palette,
  Eye,
  Zap,
  Code2,
  Activity,
  CheckCircle2,
  Copy,
  Check,
  Play,
  RotateCw,
  Terminal,
  ShieldCheck,
  Sliders,
  Layers
} from "lucide-react";

export function UIUXHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"system" | "tokens" | "vitals">("system");
  const [theme, setTheme] = useState<"emerald" | "cyber" | "luxury">("emerald");
  const [borderRadius, setBorderRadius] = useState<number>(12);
  const [copiedCode, setCopiedCode] = useState(false);

  const themePalettes = {
    emerald: {
      primary: "from-emerald-500 to-teal-500",
      accent: "#10b981",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      name: "Emerald Enterprise"
    },
    cyber: {
      primary: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      name: "Cyberpunk Tech"
    },
    luxury: {
      primary: "from-amber-400 to-orange-500",
      accent: "#f59e0b",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      name: "Minimal Luxury"
    }
  };

  const sampleTokensCode = `// tokens/design_system.tokens.json
{
  "color": {
    "brand": {
      "primary": { "value": "${themePalettes[theme].accent}" },
      "surface": { "value": "#0f172a" },
      "contrast_ratio": { "value": "14.2:1 (WCAG AAA Pass)" }
    }
  },
  "spacing": {
    "radius_base": { "value": "${borderRadius}px" },
    "touch_target_min": { "value": "44px" }
  },
  "typography": {
    "scale_ratio": { "value": "1.25 (Major Third)" },
    "body_line_height": { "value": "1.65" }
  }
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleTokensCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Figma Tokenized Design Systems</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            WCAG 2.2 AAA
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Palette size={13} className="text-cyan-400" />
          <span>Interactive Component Libraries</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>Zero-Friction React Code Handoff</span>
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
              figma.workspace // tokens.style-dictionary
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("system")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "system" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Palette size={13} />
              <span>Token Switchboard</span>
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "tokens" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Design Tokens JSON</span>
            </button>
            <button
              onClick={() => setActiveTab("vitals")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "vitals" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>UX Audits</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>14.2:1 Contrast Ratio</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: DESIGN SYSTEM SWITCHBOARD */}
          {activeTab === "system" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Token Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                
                {/* Theme Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-300 font-bold">Palette:</span>
                  <div className="flex items-center gap-1.5">
                    {(["emerald", "cyber", "luxury"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          theme === t
                            ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {themePalettes[t].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Border Radius Slider */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-300 font-bold flex items-center gap-1">
                    <Sliders size={13} className="text-emerald-400" />
                    Radius:
                  </span>
                  <input
                    type="range"
                    min="4"
                    max="24"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    className="w-24 sm:w-28 accent-emerald-500 cursor-pointer"
                  />
                  <span className="font-mono text-xs text-emerald-400 font-bold">{borderRadius}px</span>
                </div>

              </div>

              {/* Live Rendered Component Canvas */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                  <span className="font-bold text-white flex items-center gap-2">
                    <Palette size={14} className="text-emerald-400" />
                    Live Component Render Engine
                  </span>
                  <span className="font-mono text-emerald-400">WCAG 2.2 AAA Verified</span>
                </div>

                {/* Simulated UI Card mutating in real time */}
                <div
                  style={{ borderRadius: `${borderRadius}px` }}
                  className="p-6 bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-300 space-y-4 max-w-lg mx-auto"
                >
                  <div className="flex items-center justify-between">
                    <span
                      style={{ borderRadius: `${Math.max(4, borderRadius / 2)}px` }}
                      className={`px-2.5 py-1 text-xs font-bold border transition-all ${themePalettes[theme].badge}`}
                    >
                      Enterprise Pro
                    </span>
                    <span className="text-xs text-slate-400 font-mono">v3.4.1</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-white">Continuous Analytics Engine</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Micro-interactions and touch targets adhere to Fitts's Law for sub-500ms decision velocities.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      style={{ borderRadius: `${borderRadius}px` }}
                      className={`flex-1 py-3 px-4 bg-gradient-to-r ${themePalettes[theme].primary} text-slate-950 font-extrabold text-xs transition-transform active:scale-95 shadow-md flex items-center justify-center gap-1.5`}
                    >
                      <span>Interactive Primary</span>
                      <CheckCircle2 size={13} />
                    </button>

                    <button
                      style={{ borderRadius: `${borderRadius}px` }}
                      className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
                    >
                      Secondary
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: TOKENS CODE */}
          {activeTab === "tokens" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  tokens/design_system.tokens.json
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
                <code>{sampleTokensCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: UX VITALS */}
          {activeTab === "vitals" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. WCAG */}
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
                    <span className="absolute font-mono font-black text-white text-base">AAA</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">WCAG Contrast</span>
                  <span className="text-[10px] text-emerald-400 font-mono">100% Compliant</span>
                </div>

                {/* 2. Consistency */}
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
                  <span className="text-xs font-bold text-slate-300">Token Sync</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Figma-to-React</span>
                </div>

                {/* 3. Conversion Lift */}
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
                        strokeDasharray="48, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">+48%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Task Velocity</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Reduced Friction</span>
                </div>

                {/* 4. Handoff Errors */}
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
                    <span className="absolute font-mono font-black text-white text-base">0</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Dev Redos</span>
                  <span className="text-[10px] text-teal-400 font-mono">Pixel-Perfect Specs</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

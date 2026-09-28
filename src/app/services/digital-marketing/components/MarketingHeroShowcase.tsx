"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  DollarSign,
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
  Target,
  Sliders,
  BarChart3,
  Layers
} from "lucide-react";

export function MarketingHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"simulator" | "capi" | "vitals">("simulator");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [adSpendInr, setAdSpendInr] = useState<number>(250000);
  const [adSpendUsd, setAdSpendUsd] = useState<number>(10000);
  const [channel, setChannel] = useState<"google" | "meta" | "omni">("omni");
  const [copiedCode, setCopiedCode] = useState(false);

  const roasMultiplier = channel === "omni" ? 4.8 : channel === "google" ? 4.4 : 4.2;
  const projectedRevenue = currency === "INR"
    ? Math.round(adSpendInr * roasMultiplier)
    : Math.round(adSpendUsd * roasMultiplier);
  const estimatedLeads = currency === "INR"
    ? Math.round(adSpendInr / 3200)
    : Math.round(adSpendUsd / 38);

  const sampleCapiCode = `// api/telemetry/meta-capi/route.ts
import crypto from 'crypto';

export async function POST(req: Request) {
  const { email, phone, conversionValue } = await req.json();

  // SHA-256 First-Party User Data Hashing (iOS 14.5+ Bypass)
  const hashedEmail = crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex');
  const hashedPhone = crypto.createHash('sha256').update(phone.replace(/[^0-9]/g, '')).digest('hex');

  // Server-Side Event Transmission to Meta Graph API v21.0
  const response = await fetch(\`https://graph.facebook.com/v21.0/\${process.env.PIXEL_ID}/events\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [{
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        user_data: { em: [hashedEmail], ph: [hashedPhone] },
        custom_data: { currency: '${currency}', value: conversionValue },
        action_source: 'website'
      }]
    })
  });

  return Response.json({ success: true, attributionQuality: '10.0/10' });
};`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleCapiCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Server-Side CAPI & First-Party Attribution</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            Interactive ROAS Simulator
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <TrendingUp size={13} className="text-cyan-400" />
          <span>Technical Schema SEO & Programmatic Search</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>Zero Fluff • Transparent Revenue Attribution</span>
        </div>
      </div>

      {/* 2. Main High-Tech Terminal / Growth Dashboard Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              growth.engine // attribution_model_first_party
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("simulator")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "simulator" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <BarChart3 size={13} />
              <span>ROAS Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab("capi")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "capi" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Server-Side CAPI</span>
            </button>
            <button
              onClick={() => setActiveTab("vitals")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "vitals" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>Growth Vitals</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Organic Search Strategy</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: ROAS SIMULATOR */}
          {activeTab === "simulator" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Controls Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                
                {/* Budget Slider */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-300 font-bold flex items-center gap-1">
                    <Sliders size={13} className="text-emerald-400" />
                    Monthly Ad Budget:
                  </span>
                  {currency === "INR" ? (
                    <input
                      type="range"
                      min="50000"
                      max="2500000"
                      step="25000"
                      value={adSpendInr}
                      onChange={(e) => setAdSpendInr(Number(e.target.value))}
                      className="w-24 sm:w-36 accent-emerald-500 cursor-pointer"
                    />
                  ) : (
                    <input
                      type="range"
                      min="3000"
                      max="50000"
                      step="1000"
                      value={adSpendUsd}
                      onChange={(e) => setAdSpendUsd(Number(e.target.value))}
                      className="w-24 sm:w-36 accent-emerald-500 cursor-pointer"
                    />
                  )}
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    {currency === "INR" ? `₹${adSpendInr.toLocaleString("en-IN")}` : `$${adSpendUsd.toLocaleString()}`}
                  </span>
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setCurrency("INR")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      currency === "INR" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    ₹ INR
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      currency === "USD" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    $ USD
                  </button>
                </div>

                {/* Channel Switcher */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setChannel("omni")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      channel === "omni"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Omnichannel Growth
                  </button>
                  <button
                    onClick={() => setChannel("google")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      channel === "google"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Google PMax
                  </button>
                  <button
                    onClick={() => setChannel("meta")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      channel === "meta"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Meta CAPI
                  </button>
                </div>

              </div>

              {/* Simulation Results Card Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                
                {/* 1. Projected Pipeline */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider block mb-1">
                      Projected Pipeline Revenue
                    </span>
                    <div className="text-3xl font-black font-mono text-white mt-1">
                      {currency === "INR" ? `₹${projectedRevenue.toLocaleString("en-IN")}` : `$${projectedRevenue.toLocaleString()}`}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300 flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={12} />
                    <span>{roasMultiplier}x Target Blended ROAS</span>
                  </div>
                </div>

                {/* 2. Qualified Leads */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider block mb-1">
                      Qualified Commercial Leads
                    </span>
                    <div className="text-3xl font-black font-mono text-white mt-1">
                      ~{estimatedLeads} Leads
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    {currency === "INR" ? "Calculated at ~₹3,200 blended enterprise CAC" : "Calculated at ~$38 blended enterprise CAC"}
                  </div>
                </div>

                {/* 3. First-Party Tracking Health */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-teal-400 tracking-wider block mb-1">
                      Attribution Match Quality
                    </span>
                    <div className="text-3xl font-black font-mono text-emerald-400 mt-1">
                      9.8 / 10
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    Bypasses iOS 14+ cookie ad blockers
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: CAPI CODE */}
          {activeTab === "capi" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  telemetry/meta_capi_webhook.ts
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
                <code>{sampleCapiCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: GROWTH VITALS */}
          {activeTab === "vitals" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. ROAS */}
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
                    <span className="absolute font-mono font-black text-white text-[10px]">ROAS</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Campaign Reporting</span>
                  <span className="text-[10px] text-emerald-400 font-mono">User-Defined Inputs</span>
                </div>

                {/* 2. CAC Reduction */}
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
                        strokeDasharray="38, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">-38%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">CAC Lowered</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Higher Margins</span>
                </div>

                {/* 3. Organic Lift */}
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
                        strokeDasharray="85, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">SEO</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Organic Lift</span>
                  <span className="text-[10px] text-emerald-400 font-mono">High-Intent SEO</span>
                </div>

                {/* 4. Match Rate */}
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
                        strokeDasharray="99.4, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">99.4%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Match Quality</span>
                  <span className="text-[10px] text-teal-400 font-mono">Server-Side Verified</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

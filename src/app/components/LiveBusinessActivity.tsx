"use client";

import { useState, useEffect } from "react";
import { 
  ShoppingCart, 
  Bot, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck,
  CreditCard,
  Cpu,
  Clock,
  TrendingUp,
  Star
} from "lucide-react";

export function LiveBusinessActivity() {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "ai" | "speed">("ecommerce");
  const [cartState, setCartState] = useState(0);
  const [aiState, setAiState] = useState(0);

  // Auto-cycle through cart stages to simulate live customer shopping experience
  useEffect(() => {
    const timer = setInterval(() => {
      setCartState((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle AI assistant queries
  useEffect(() => {
    const timer = setInterval(() => {
      setAiState((prev) => (prev + 1) % 3);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  const aiActivities = [
    {
      customer: "Visitor from Delhi: 'Need custom eCommerce store with GST & WhatsApp order sync'",
      response: "AI Assistant analyzed scope & scheduled senior architect consultation in 24 seconds",
      metric: "99.4% Qualified Lead",
    },
    {
      customer: "Visitor: 'Want to redesign corporate website with 100/100 PageSpeed'",
      response: "AI Assistant ran automated performance audit & sent customized technical estimate",
      metric: "Instant Cost Estimation",
    },
    {
      customer: "Visitor: 'Looking for SEO & digital marketing to double qualified sales leads'",
      response: "AI matched industry benchmarks & generated 90-day growth projection roadmap",
      metric: "High Intent Inquiry",
    },
  ];

  return (
    <div className="w-full bg-[#0b1424]/90 border border-emerald-500/25 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl text-left">
      
      {/* 1. Header with Modern Pill Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-emerald-400 tracking-wide">
            Live Business Capabilities
          </span>
        </div>

        {/* Customer-Friendly Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#060c18] rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab("ecommerce")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === "ecommerce"
                ? "bg-emerald-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ShoppingCart size={13} />
            <span>eCommerce Sales</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === "ai"
                ? "bg-teal-400 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Bot size={13} />
            <span>AI Automation</span>
          </button>

          <button
            onClick={() => setActiveTab("speed")}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === "speed"
                ? "bg-sky-400 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Zap size={13} />
            <span>100/100 Speed</span>
          </button>
        </div>
      </div>

      {/* 2. TAB 1: Real-Time eCommerce Store & Checkout Experience */}
      {activeTab === "ecommerce" && (
        <div className="pt-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <CreditCard size={12} />
                Instant 1-Click Checkout & Payment Gateway
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                High-Conversion eCommerce Architecture
              </h4>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30">
              <Clock size={12} />
              <span>Checkout Time: <strong>0.32s</strong></span>
            </div>
          </div>

          {/* Visual Order Card */}
          <div className="bg-[#070e1c] border border-slate-800/90 rounded-xl p-3 sm:p-3.5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShoppingCart size={17} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Custom eCommerce Storefront</div>
                  <div className="text-[11px] text-slate-400">Razorpay • Stripe • UPI • WhatsApp Order Alerts</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm font-extrabold text-emerald-400">₹19,999</div>
                <div className="text-[10px] text-slate-400">Order #HR-8492</div>
              </div>
            </div>

            {/* Live Progress Tracker */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">Real-Time Customer Journey:</span>
                <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                  {cartState === 0 && "1. Customer Added Item to Cart"}
                  {cartState === 1 && "2. Seamless UPI / Card 1-Click Pay"}
                  {cartState === 2 && "3. Payment Verified & WhatsApp Notification Sent! ✓"}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full transition-all duration-700 rounded-full"
                  style={{ width: cartState === 0 ? "35%" : cartState === 1 ? "70%" : "100%" }}
                />
              </div>
            </div>

            {/* Key Growth Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80 text-[11px]">
              <div>
                <span className="text-slate-400 block text-[10px]">Conversion Lift</span>
                <span className="font-extrabold text-emerald-400">+42% Average</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Cart Recovery</span>
                <span className="font-extrabold text-teal-400">Auto WhatsApp</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Bank Security</span>
                <span className="font-extrabold text-white flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-400" /> 256-Bit SSL
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. TAB 2: AI Automation & Smart Business Assistant */}
      {activeTab === "ai" && (
        <div className="pt-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-teal-400 flex items-center gap-1">
                <Cpu size={12} />
                24/7 Autonomous AI Intelligence
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                AI Customer Qualification & Lead Routing
              </h4>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded-lg border border-teal-500/30">
              <span>Response: <strong>&lt; 30s</strong></span>
            </div>
          </div>

          <div className="bg-[#070e1c] border border-slate-800/90 rounded-xl p-3 sm:p-3.5 space-y-2.5">
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span>LIVE CUSTOMER INQUIRY:</span>
              </div>
              <div className="text-xs font-medium text-slate-200 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                "{aiActivities[aiState].customer}"
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-teal-400 font-bold flex items-center gap-1 text-[11px]">
                  <CheckCircle2 size={12} />
                  <span>AI EXECUTION:</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {aiActivities[aiState].metric}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {aiActivities[aiState].response}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80 text-[11px]">
              <div>
                <span className="text-slate-400 block text-[10px]">Lead Routing</span>
                <span className="font-extrabold text-teal-400">Instant</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Search Speed</span>
                <span className="font-extrabold text-emerald-400">Semantic AI</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Zero Lost Leads</span>
                <span className="font-extrabold text-white">24/7 Active</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. TAB 3: 100/100 Core Web Vitals & Google Speed */}
      {activeTab === "speed" && (
        <div className="pt-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-sky-400 flex items-center gap-1">
                <Zap size={12} />
                Next.js 16 Ultra-Fast Edge Architecture
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                Google PageSpeed Performance Score: 100/100
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-emerald-400 font-mono">100</span>
              <span className="text-xs text-slate-400">/100</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-[#070e1c] border border-slate-800/90 rounded-xl p-3 text-center">
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">LCP (Load Time)</div>
              <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">0.6s</div>
              <div className="text-[9px] text-emerald-400/80">Ultra Instant</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">FID (Response)</div>
              <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">14ms</div>
              <div className="text-[9px] text-emerald-400/80">Zero Lag</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">CLS (Stability)</div>
              <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">0.00</div>
              <div className="text-[9px] text-emerald-400/80">Pixel Perfect</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

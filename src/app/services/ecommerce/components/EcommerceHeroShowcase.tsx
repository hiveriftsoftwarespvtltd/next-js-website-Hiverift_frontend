"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingCart,
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
  Check,
  CreditCard,
  Package,
  Truck,
  Heart,
  Star,
  ArrowRight
} from "lucide-react";

export function EcommerceHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"store" | "code" | "speed">("store");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [revenueCount, setRevenueCount] = useState(48920);
  const [ordersToday, setOrdersToday] = useState(318);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Periodic subtle order revenue ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setRevenueCount((prev) => prev + Math.floor(Math.random() * 80 + 40));
      setOrdersToday((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateCheckout = () => {
    if (isCheckingOut) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setRevenueCount((prev) => prev + 289);
      setOrdersToday((prev) => prev + 1);
      setIsCheckingOut(false);
      setShowOrderSuccess(true);
      setTimeout(() => setShowOrderSuccess(false), 3000);
    }, 900);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const sampleCode = `// app/api/checkout/route.ts
import { shopifyClient } from '@/lib/shopify';
import { stripe } from '@/lib/stripe';
import { redisCart } from '@/lib/redis';

export async function POST(req: Request) {
  const { cartId, currency } = await req.json();

  // Sub-50ms Edge Cart Retrieval
  const cart = await redisCart.get(cartId);

  // 1-Click Instant Payment Intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: cart.totalAmountInCents,
    currency: currency || 'usd',
    automatic_payment_methods: { enabled: true },
  });

  return Response.json({
    clientSecret: paymentIntent.client_secret,
    orderToken: cart.token,
    slaLatency: '24ms'
  });
}`;

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Fully-Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Shopify Plus & Headless Next.js 15</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            0.28s Load
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/40 shadow-sm text-xs font-bold text-white">
          <TrendingUp size={13} className="text-teal-400 shrink-0" />
          <span>Scalable Commerce</span>
          <span className="text-[10px] text-teal-300 font-mono bg-teal-500/15 px-1.5 py-0.5 rounded border border-teal-500/30">
            1-Click Pay
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-emerald-300">
          <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
          <span>PCI-DSS Level 1 Certified</span>
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
              HiveRift Commerce Engine v4.8
            </span>
          </div>

          {/* Browser Address Bar (Centered & Responsively Truncated) */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-slate-800 text-xs text-slate-300 min-w-0">
            <Lock size={12} className="text-emerald-400 shrink-0" />
            <span className="text-emerald-400 font-semibold font-mono text-[11px] shrink-0">https://</span>
            <span className="font-mono text-[11px] text-slate-300 truncate">aurora-luxury.com/checkout</span>
            <RotateCw size={11} className="text-slate-500 hover:text-slate-300 cursor-pointer ml-auto shrink-0 transition-colors" />
          </div>

          {/* Mode Switcher Tabs (Mobile & Touch Friendly) */}
          <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 text-xs shrink-0">
            <button
              onClick={() => setActiveTab("store")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "store"
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <ShoppingCart size={13} />
              <span className="hidden sm:inline">Live Store</span>
              <span className="sm:hidden">Store</span>
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
              onClick={() => setActiveTab("speed")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "speed"
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap size={13} />
              <span className="hidden sm:inline">CRO & Speed</span>
              <span className="sm:hidden">100</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive Storefront & Checkout Simulation */}
        {activeTab === "store" && (
          <div className="p-3 sm:p-5 lg:p-6 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between">
            {/* Store Top Navigation Bar */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Package size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                    <span className="truncate">AURORA LUXURY D2C</span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                      SHOPIFY PLUS
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">
                    Headless Next.js 15 • Global Edge CDN
                  </div>
                </div>
              </div>

              {/* Viewport Switcher (Hidden on mobile phones) */}
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

            {/* Interactive Product & Instant Checkout Demo */}
            <div className={`transition-all duration-500 mx-auto w-full my-3 sm:my-4 ${
              deviceView === "desktop"
                ? "max-w-full"
                : deviceView === "tablet"
                ? "max-w-md border-x border-slate-800 px-3"
                : "max-w-xs border-x border-slate-800 px-3"
            }`}>
              
              {/* Product Hero Spotlight */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/40 border border-emerald-500/30 mb-3 sm:mb-4 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                      <CreditCard size={26} />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                          Featured Bestseller
                        </span>
                        <span className="text-[10px] font-bold text-slate-300">Product Spotlight</span>
                      </div>
                      <h4 className="text-sm sm:text-base lg:text-lg font-black text-white leading-snug truncate">
                        Aurora Wireless Pro Headphones
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-300">
                        Price: <strong className="text-emerald-400 font-mono text-sm">$289.00</strong>
                        <span className="text-slate-400 line-through ml-2 text-[10px]">$349.00</span>
                        <span className="ml-2 text-emerald-400 text-[10px] font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">SAVE $60</span>
                      </p>
                    </div>
                  </div>

                  {/* 1-Click Buy Action */}
                  <div className="w-full md:w-auto flex flex-col items-center gap-1.5 shrink-0">
                    <button
                      onClick={handleSimulateCheckout}
                      className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-emerald-500/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isCheckingOut ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                          <span>Processing 0.3s Checkout...</span>
                        </>
                      ) : (
                        <>
                          <Zap size={14} />
                          <span>Simulate 1-Click Buy (Apple Pay / UPI)</span>
                        </>
                      )}
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Instant 1-Tap Authorization
                    </span>
                  </div>
                </div>

                {/* Instant Order Confirmation Notification */}
                {showOrderSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Order #84920 Confirmed!</strong> Zero checkout friction in 0.32s.</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                      PAID $289.00
                    </span>
                  </motion.div>
                )}
              </div>

              {/* 3 Real-Time eCommerce Performance Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                    <span>Store Revenue Today</span>
                    <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-emerald-500/10 rounded">
                      +42.8% YoY
                    </span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white font-mono flex items-baseline gap-1">
                    ${revenueCount.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-400/90 mt-1 flex items-center gap-1">
                    <TrendingUp size={11} /> {ordersToday} Completed Orders
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                    <span>Cart Abandonment</span>
                    <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-emerald-500/10 rounded">
                      -42% DROP
                    </span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono flex items-baseline gap-1">
                    28.4%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <Zap size={11} className="text-emerald-400" /> WhatsApp & 1-Click Recovery
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                    <span>Checkout Speed (TTFB)</span>
                    <span className="text-emerald-400 font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-emerald-500/10 rounded">
                      SUB-SECOND
                    </span>
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white font-mono flex items-baseline gap-1">
                    0.28<span className="text-xs text-slate-400 font-normal">sec</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <ShieldCheck size={11} className="text-emerald-400" /> Stripe & Razorpay Direct APIs
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Live Activity Stream */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] text-slate-400 gap-1.5 sm:gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Live Orders: <strong>London ($185) • Mumbai (₹14,200) • New York ($320)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">Instant ERP & 3PL Warehouse Handshake</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Headless Architecture & GraphQL */}
        {activeTab === "code" && (
          <div className="p-3 sm:p-5 lg:p-6 bg-slate-950 font-mono text-xs text-slate-300 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between overflow-x-auto">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[10px] sm:text-[11px] text-slate-400 gap-2">
                <div className="flex items-center gap-2 truncate">
                  <span className="px-2 py-0.5 bg-slate-800 text-emerald-400 rounded shrink-0">
                    checkout/route.ts
                  </span>
                  <span className="truncate">Next.js 15 App Router • Shopify Storefront API</span>
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
              <span>PCI-DSS compliant edge microservices with zero database connection pooling bottlenecks.</span>
              <span className="text-emerald-400 font-semibold">Sub-50ms API Latency</span>
            </div>
          </div>
        )}

        {/* Tab 3: CRO & Speed Engine (100) */}
        {activeTab === "speed" && (
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-950 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="text-center max-w-md mx-auto mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Zap size={12} /> Conversion Rate Optimization Audit
                </div>
                <h4 className="text-base sm:text-xl font-black text-white">
                  Engineered to Maximize Average Order Value (AOV)
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                  Every 100ms of latency reduction generates up to 7% more eCommerce sales. We eliminate checkout friction completely.
                </p>
              </div>

              {/* 4 Animated Dials */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-2xl mx-auto">
                {[
                  { label: "Checkout Speed", score: "100", grade: "< 0.4s TTFB" },
                  { label: "Mobile CRO", score: "100", grade: "1-Click UPI" },
                  { label: "PCI-DSS Level 1", score: "100", grade: "Encrypted" },
                  { label: "Catalog SEO", score: "100", grade: "Google Merchant" }
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

              {/* Core eCommerce Vitals */}
              <div className="mt-4 sm:mt-6 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Cart Recovery Rate</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">48.2% (Automated)</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Flash Sale Concurrency</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">100k+ Users / Min</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Black Friday Uptime</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">99.99% Guaranteed</div>
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-500 text-center">
              Stores built on HiveRift's headless architecture convert at more than 2.8x the global industry average.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

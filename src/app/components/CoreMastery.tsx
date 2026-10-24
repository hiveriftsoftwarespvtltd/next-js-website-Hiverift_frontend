"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Layers,
    ShieldCheck,
  CreditCard,
  Package,
  Search,
  Users,
  Target,
  BarChart3,
  MousePointerClick,
  Code2,
  ChevronLeft,
  ChevronRight,
  Activity,
  Zap,
  RotateCcw,
  Building2,
  Smartphone,
  Check,
  Award
} from "lucide-react";
import { Button } from "./ui/button";

// 1. Website Development View Mockup (Dynamic image and function-based previews)
function WebDevelopmentMockup() {
  const tabs = [
    {
      id: "home",
      label: "Homepage",
      title: "High-Performance Business Interface",
      subtitle: "Conversion-Optimized Hero & Navigation Canvas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Homepage UI Design and Conversion Architecture",
      metric1: { label: "Architecture", val: "Semantic HTML5", badge: "SEO Indexed" },
      metric2: { label: "Responsiveness", val: "Fluid Layouts", badge: "100% Mobile Ready" },
      metric3: { label: "Conversion UX", val: "Lead Funnel", badge: "WhatsApp & Forms" },
      preview: "Hero Architecture, Conversion CTA, Responsive Canvas",
    },
    {
      id: "services",
      label: "Services",
      title: "Modular Capabilities & Solutions Grid",
      subtitle: "Dynamic Feature Breakdown & Technical Catalog",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Services and Solutions Architecture Interface",
      metric1: { label: "Structure", val: "Modular Grid", badge: "Dynamic Tabs" },
      metric2: { label: "Catalog", val: "Tech Specs", badge: "Search Ready" },
      metric3: { label: "Performance", val: "Turbopack Engine", badge: "Instant Render" },
      preview: "Capabilities Showcase, Technical Specs, Speed 99/100",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      title: "Verified Case Studies & Client Outcomes",
      subtitle: "Interactive Project Showcase with Measurable Results",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Portfolio Project Showcase Preview",
      metric1: { label: "Portfolio", val: "Selected Projects", badge: "Project Examples" },
      metric2: { label: "Industries", val: "Real Estate & D2C", badge: "Custom Portals" },
      metric3: { label: "Experience", val: "Smooth Motion UI", badge: "60 FPS Native" },
      preview: "Selected Projects, Services, and Scope",
    },
    {
      id: "contact",
      label: "Contact",
      title: "High-Intent Lead Capture & Enquiry Pipeline",
      subtitle: "Automated Form Validation & Direct CRM Webhooks",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Consultation and Lead Capture Form Preview",
      metric1: { label: "Lead Pipeline", val: "NestJS Backend", badge: "Instant Hook" },
      metric2: { label: "Scheduling", val: "Meeting Sync", badge: "Calendar Link" },
      metric3: { label: "Protection", val: "Zero Spam Guard", badge: "Sanitized Form" },
      preview: "Enquiry Engine, CRM Lead Hook, Form Validation",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      title: "Custom Web Application & Telemetry Portal",
      subtitle: "Real-Time Analytics, RBAC Security & Role Management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Web Application and Analytics Dashboard",
      metric1: { label: "Analytics", val: "Live Telemetry", badge: "Real-time Sync" },
      metric2: { label: "Access", val: "RBAC Security", badge: "Role Levels" },
      metric3: { label: "Scalability", val: "Edge Serverless", badge: "Global CDN" },
      preview: "Custom Web Application, Analytics, Role Access",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [tabs.length]);

  const curTab = tabs[activeTab];

  return (
    <div className="w-full bg-white rounded-3xl border-2 border-emerald-400/80 shadow-2xl shadow-emerald-900/10 overflow-hidden text-left font-sans">
      {/* Browser Top Navigation Bar */}
      <div className="bg-[#f0fbf5] px-4 py-3 border-b border-emerald-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="ml-3 text-[11px] font-mono text-slate-700 bg-white px-3 py-1 rounded-md border border-emerald-200 flex items-center gap-1.5 shadow-xs">
            <span className="text-[#10b981] font-bold">https://</span>yourbrand.com/{curTab.id}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-[#059669] bg-emerald-100/80 border border-emerald-300 px-2.5 py-0.5 rounded-full">
            Next.js 16 + Tailwind
          </span>
        </div>
      </div>

      {/* Screen Content Container */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-white via-[#f7fdfa] to-[#edf9f3] min-h-[380px] flex flex-col justify-between">
        
        {/* Function Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 pb-3 border-b border-emerald-100">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#10b981] text-white shadow-md shadow-emerald-500/25 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-emerald-100/80 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Function Screen with Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="py-3 space-y-3"
          >
            {/* Function Title & Performance Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                  Active Module: {curTab.label}
                </span>
                <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight mt-0.5">
                  {curTab.title}
                </h4>
              </div>
              <div className="text-right hidden sm:block shrink-0 pl-2">
                <div className="text-xs font-mono text-[#059669] font-black">Lighthouse 100/100</div>
                <div className="text-[10px] text-slate-500 font-semibold">Core Web Vitals Pass</div>
              </div>
            </div>

            {/* Function-Specific High-Resolution UI Image */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-200/90 shadow-sm bg-slate-950 group">
              <div className="relative h-28 sm:h-32 w-full overflow-hidden">
                <img
                  src={curTab.image}
                  alt={curTab.imageAlt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Overlay Floating Caption on Image */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white">
                  <div className="text-[11px] sm:text-xs font-bold truncate max-w-[240px] sm:max-w-[280px] drop-shadow-sm text-slate-100">
                    {curTab.subtitle}
                  </div>
                  <span className="text-[9px] font-mono font-bold bg-[#10b981]/90 backdrop-blur-xs text-white px-2 py-0.5 rounded-md border border-emerald-400/40 shrink-0">
                    Live UI
                  </span>
                </div>
              </div>
            </div>

            {/* Function-Specific 3 Performance Metric Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80 shadow-2xs">
                <div className="text-[10px] text-slate-500 font-bold mb-0.5 truncate">{curTab.metric1.label}</div>
                <div className="text-xs font-black text-slate-900 truncate">{curTab.metric1.val}</div>
                <div className="text-[9px] text-[#059669] font-bold mt-0.5 truncate">{curTab.metric1.badge}</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80 shadow-2xs">
                <div className="text-[10px] text-slate-500 font-bold mb-0.5 truncate">{curTab.metric2.label}</div>
                <div className="text-xs font-black text-slate-900 truncate">{curTab.metric2.val}</div>
                <div className="text-[9px] text-teal-600 font-bold mt-0.5 truncate">{curTab.metric2.badge}</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80 shadow-2xs">
                <div className="text-[10px] text-slate-500 font-bold mb-0.5 truncate">{curTab.metric3.label}</div>
                <div className="text-xs font-black text-slate-900 truncate">{curTab.metric3.val}</div>
                <div className="text-[9px] text-cyan-600 font-bold mt-0.5 truncate">{curTab.metric3.badge}</div>
              </div>
            </div>

            {/* Active View Speed Status */}
            <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
              <span className="text-slate-700 truncate mr-2">
                Active View: <strong className="text-slate-900 font-bold">{curTab.preview}</strong>
              </span>
              <span className="text-[10px] font-mono text-[#059669] font-bold shrink-0">
                Speed &lt; 0.7s
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technology Orbit Badges */}
        <div className="pt-2.5 border-t border-emerald-100 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono">
          <span>Stack: React • Next.js • PHP • WordPress</span>
          <span className="text-[#059669] font-bold">Enterprise Ready</span>
        </div>
      </div>
    </div>
  );
}

// 2. eCommerce Development Flow Animation with Interactive Live Store Page Views
function EcommerceFlowAnimation() {
  const steps = [
    { label: "Product", desc: "Catalog & Specs", icon: Package, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
    { label: "Cart", desc: "Inventory Sync", icon: ShoppingCart, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    { label: "Checkout", desc: "1-Click Flow", icon: MousePointerClick, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
    { label: "Payment", desc: "Gateways & UPI", icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
    { label: "Order", desc: "Dispatch & SMS", icon: ShieldCheck, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200" },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, steps.length]);

  return (
    <div
      className="w-full bg-white rounded-3xl border-2 border-emerald-400/80 shadow-2xl shadow-emerald-900/10 p-5 sm:p-6 text-left font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-emerald-100">
        <div>
          <span className="text-[11px] font-mono text-[#059669] uppercase tracking-widest font-bold">
            Transaction Engine
          </span>
          <h4 className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
            Full-Funnel eCommerce Conversion Pipeline
          </h4>
        </div>
        <span className="text-[10px] font-black text-[#059669] bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
          Live Store Simulation
        </span>
      </div>

      {/* Visual Pipeline Progression (Clickable & Automatic) */}
      <div className="py-4">
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={st.label}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-2 sm:p-2.5 border transition-all duration-300 text-center flex flex-col items-center outline-none ${
                  isCurrent
                    ? `${st.bg} ${st.border} shadow-md scale-105 ring-2 ring-emerald-500`
                    : isCompleted
                    ? "bg-emerald-50/50 border-emerald-200"
                    : "bg-slate-50 border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center mb-1 transition-transform ${
                    isCurrent ? "scale-110" : ""
                  }`}
                  style={{ backgroundColor: isCurrent ? "rgba(16, 185, 129, 0.15)" : undefined }}
                >
                  <Icon size={16} className={isCurrent ? "text-emerald-700" : st.color} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-tight">{st.label}</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500 hidden sm:block mt-0.5 leading-tight truncate max-w-full">
                  {st.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Line */}
        <div className="relative mt-3.5 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#10b981] via-[#059669] to-[#0d9488]"
            initial={{ width: "20%" }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* LIVE ECOMMERCE STORE PAGE VIEW (DYNAMIC FOR EACH FUNCTION)     */}
      {/* ============================================================ */}
      <div className="mb-4">
        <AnimatePresence mode="popLayout">
          
          {/* 1. PRODUCT PAGE VIEW */}
          {activeStep === 0 && (
            <motion.div
              key="page-product"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-emerald-200/90 shadow-xs flex flex-col sm:flex-row gap-3 items-center"
            >
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400"
                  alt="Product Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 text-left space-y-1 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ● In Stock (Ships in 24h)
                  </span>
                  <span className="text-[11px] text-slate-500 font-bold">Product Detail Page</span>
                </div>
                <h5 className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  Chrono Pro Ceramic Smartwatch
                </h5>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm sm:text-base font-black text-slate-900">₹2,499</span>
                  <span className="text-xs text-slate-400 line-through">₹4,999</span>
                  <span className="text-[10px] font-bold text-emerald-600">50% OFF</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-slate-500">Free Delivery & 7-Day Returns</span>
                  <button
                    onClick={() => setActiveStep(1)}
                    className="bg-slate-900 hover:bg-[#10b981] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    <span>Add to Cart</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. CART PAGE VIEW */}
          {activeStep === 1 && (
            <motion.div
              key="page-cart"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-emerald-200/90 shadow-xs space-y-2 text-left"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <ShoppingCart size={14} className="text-blue-600" />
                  <span>Shopping Cart Drawer (1 item)</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ✓ Free Shipping Unlocked!
                </span>
              </div>
              <div className="flex items-center justify-between text-xs py-1">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150"
                    alt="Cart Item"
                    className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                  />
                  <div>
                    <div className="font-bold text-slate-900">Chrono Pro Ceramic</div>
                    <div className="text-[10px] text-slate-500">Qty: 1 • Color: Obsidian Black</div>
                  </div>
                </div>
                <span className="font-black text-slate-900">₹2,499</span>
              </div>
              <div className="flex items-center justify-between text-[11px] pt-1 bg-slate-50 p-2 rounded-xl border border-slate-100">
                <span className="text-slate-600 font-medium">Coupon <strong>WELCOME10</strong> applied:</span>
                <span className="font-bold text-[#059669]">-₹250.00</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs">
                  <span className="text-slate-500 text-[10px]">Subtotal:</span>{" "}
                  <span className="font-black text-slate-900">₹2,249</span>
                </div>
                <button
                  onClick={() => setActiveStep(2)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}

          {/* 3. CHECKOUT PAGE VIEW */}
          {activeStep === 2 && (
            <motion.div
              key="page-checkout"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-emerald-200/90 shadow-xs space-y-2 text-left"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <MousePointerClick size={14} className="text-purple-600" />
                  <span>1-Click Express Checkout</span>
                </span>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-bold border border-purple-200">
                  60s Fast Lane
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 block font-bold">Shipping Address</span>
                  <div className="font-bold text-slate-900 truncate">Ravinder Dhillon</div>
                  <div className="text-[10px] text-slate-600 truncate">Connaught Place, New Delhi - 110001</div>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 block font-bold">Delivery Speed</span>
                  <div className="font-bold text-emerald-700 truncate">Express Courier</div>
                  <div className="text-[10px] text-slate-600">Arrives Tomorrow, 5 PM</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-slate-700">Total Payable: <strong className="text-slate-900">₹2,249</strong></span>
                <button
                  onClick={() => setActiveStep(3)}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <span>Choose Payment</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}

          {/* 4. PAYMENT PAGE VIEW */}
          {activeStep === 3 && (
            <motion.div
              key="page-payment"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-emerald-200/90 shadow-xs space-y-2 text-left"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <CreditCard size={14} className="text-emerald-600" />
                  <span>Select Secure Payment</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200 flex items-center gap-1">
                  256-bit SSL
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/70 border-2 border-emerald-500 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span className="font-bold text-slate-900">UPI Instant Pay</span>
                    <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">(GPay, PhonePe, Paytm)</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded border border-emerald-200">Zero Fee</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs opacity-75">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full border border-slate-300 inline-block" />
                    <span className="font-semibold text-slate-700">Credit / Debit Cards</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Visa, RuPay, MC</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-slate-500">PCI-DSS Level 1 Gateway</span>
                <button
                  onClick={() => setActiveStep(4)}
                  className="bg-[#10b981] hover:bg-[#059669] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <span>Pay ₹2,249 Securely</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}

          {/* 5. ORDER CONFIRMED PAGE VIEW */}
          {activeStep === 4 && (
            <motion.div
              key="page-order"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-emerald-200/90 shadow-xs space-y-2 text-left"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-teal-600" />
                  <span>Order Confirmed #HR-98421</span>
                </span>
                <span className="text-[10px] font-mono text-[#059669] bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                  ✓ Verified
                </span>
              </div>
              <div className="p-2 rounded-xl bg-[#f0fbf5] border border-emerald-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#10b981] shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Payment Verified: ₹2,249</div>
                    <div className="text-[10px] text-slate-600">SMS & WhatsApp notification dispatched</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-0.5 px-1">
                <span className="font-bold text-emerald-600">● Placed</span>
                <span>→</span>
                <span className="font-bold text-emerald-600">● In Packaging</span>
                <span>→</span>
                <span className="text-slate-400">○ Express Transit</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-slate-500">Tracking: <strong>BLUEDART-88149</strong></span>
                <button
                  onClick={() => setActiveStep(0)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <span>Test Next Order ↺</span>
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Transaction Breakdown Badges */}
      <div className="bg-[#f0fbf5] rounded-2xl p-3 border border-emerald-200 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600 font-semibold text-[11px]">Active Checkout Phase:</span>
          <span className="font-bold text-[#059669] font-mono text-xs">
            {steps[activeStep].label} → {steps[activeStep].desc}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-white p-2 rounded-xl border border-emerald-200/80 shadow-2xs">
            <span className="text-[9px] text-slate-500 font-bold block">Payment Modes</span>
            <span className="text-xs font-black text-slate-900">UPI, Cards, EMI</span>
          </div>
          <div className="bg-white p-2 rounded-xl border border-emerald-200/80 shadow-2xs">
            <span className="text-[9px] text-slate-500 font-bold block">Cart Abandonment</span>
            <span className="text-xs font-black text-[#059669]">Auto Recovery</span>
          </div>
          <div className="bg-white p-2 rounded-xl border border-emerald-200/80 shadow-2xs">
            <span className="text-[9px] text-slate-500 font-bold block">Security</span>
            <span className="text-xs font-black text-teal-700">PCI-DSS 256-bit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Digital Marketing Telemetry Dashboard (Interactive 5-Stage Acquisition Engine)
function MarketingDashboardAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<string>("all");

  useEffect(() => {
    if (isPaused) return;
    const stageTimer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 4200);
    return () => clearInterval(stageTimer);
  }, [isPaused]);

  const stages = [
    {
      id: 0,
      label: "Search / Social",
      short: "Search & Ads",
      icon: Search,
      tag: "HIGH-INTENT TRAFFIC SOURCE",
      desc: "Simulate Sponsored Google Ads & High-Ranking SEO Placement",
    },
    {
      id: 1,
      label: "Targeted Visit",
      short: "Live Inflow",
      icon: Users,
      tag: "REAL-TIME TRAFFIC RADAR",
      desc: "Buyer lands on high-speed landing page with 0.7s load time",
    },
    {
      id: 2,
      label: "Engagement",
      short: "Heatmap Depth",
      icon: Target,
      tag: "BEHAVIOR & SCROLL INTENT",
      desc: "Review page interactions and identify points of friction",
    },
    {
      id: 3,
      label: "Enquiry Form",
      short: "Lead Captured",
      icon: MousePointerClick,
      tag: "INBOUND LEAD DISPATCH",
      desc: "Capture enquiry details and route them to connected tools",
    },
    {
      id: 4,
      label: "Qualified Lead",
      short: "Follow-Up",
      icon: Award,
      tag: "LEAD FOLLOW-UP",
      desc: "Plan a follow-up based on the prospect's selected contact method",
    },
  ];

  const channels = [
    { id: "all", name: "All Channels", detail: "Traffic source overview", color: "bg-[#10b981]" },
    { id: "seo", name: "Organic Search (SEO)", detail: "Search discovery", color: "bg-[#10b981]" },
    { id: "ppc", name: "Google Search Ads (PPC)", detail: "Paid search campaign", color: "bg-teal-500" },
    { id: "meta", name: "Meta Ads (Instagram/FB)", detail: "Social campaign", color: "bg-cyan-500" },
    { id: "referral", name: "Direct & Referral", detail: "Direct and referral visits", color: "bg-slate-400" },
  ];

  const filteredChannels = selectedChannel === "all" 
    ? channels.filter((c) => c.id !== "all") 
    : channels.filter((c) => c.id === selectedChannel);

  return (
    <div 
      className="w-full h-[520px] sm:h-[540px] max-h-[540px] bg-white rounded-3xl border-2 border-emerald-400/80 shadow-2xl shadow-emerald-900/10 p-4 sm:p-6 text-left font-sans transition-all duration-300 flex flex-col overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header (Pinned at top) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-100 shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#059669] uppercase tracking-widest font-bold">
              Interactive Acquisition Engine
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-[#059669] font-bold">
              Stage 0{activeStage + 1} / 05
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
            Search, Traffic & Revenue Telemetry
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {isPaused ? (
            <span className="text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
              Paused on Hover
            </span>
          ) : null}
          <div className="flex items-center gap-1.5 text-[10px] font-black text-[#059669] bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            Live Funnel Active
          </div>
        </div>
      </div>

      {/* Internal Scrollable Content Body with Sleek Vertical Scrollbar */}
      <div className="flex-1 overflow-y-auto pr-1.5 sm:pr-2.5 pt-3 pb-2 space-y-3.5 custom-marketing-scroll focus:outline-none">
        <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center mb-4">
          {stages.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`relative p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-200 group cursor-pointer ${
                  isActive
                    ? "bg-[#ecfdf5] border-[#10b981] shadow-md shadow-emerald-500/10 ring-2 ring-emerald-400/30"
                    : "bg-[#f8fafc] hover:bg-emerald-50/60 border-slate-200 hover:border-emerald-300"
                }`}
              >
                {isActive && (
                  <div className="absolute -top-1.5 right-1 w-2.5 h-2.5 rounded-full bg-[#10b981] ring-2 ring-white animate-pulse" />
                )}
                <div
                  className={`w-7 h-7 mx-auto mb-1 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-[#10b981] text-white shadow-sm"
                      : "bg-slate-100 group-hover:bg-emerald-100 text-slate-600 group-hover:text-[#059669]"
                  }`}
                >
                  <Icon size={14} />
                </div>
                <div
                  className={`text-[9.5px] sm:text-[10.5px] font-black text-center leading-tight transition-colors line-clamp-2 ${
                    isActive ? "text-[#059669]" : "text-slate-700 group-hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Acquisition Simulator View Canvas */}
        <div className="bg-[#0b1329] rounded-2xl p-4 sm:p-5 text-white border border-slate-800 shadow-inner mb-4 overflow-hidden relative">
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-emerald-400 font-bold tracking-wider uppercase text-[10px]">
                {stages[activeStage].tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[10px]">
              Live Simulation Telemetry
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {activeStage === 0 && (
              <motion.div
                key="stage-0"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="bg-slate-900/90 rounded-xl p-3 sm:p-3.5 border border-slate-700/80">
                  <div className="flex items-center gap-2 mb-1.5 text-[11px] text-slate-400">
                    <span className="font-bold text-slate-300">Sponsored</span>
                    <span>•</span>
                    <span className="text-emerald-400 truncate">https://hiverift.com/digital-growth</span>
                  </div>
                  <h5 className="text-sm sm:text-base font-bold text-sky-400 hover:underline cursor-pointer">
                    HiveRift Digital Growth
                  </h5>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    Scale qualified leads with performance SEO, paid search and high-converting landing architecture.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2.5 pt-2 border-t border-slate-800/80 text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      Free Strategy Audit
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      Case Studies
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      ROAS Calculator
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                  <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px]">
                    <span>Channel: <strong className="text-emerald-400">Search</strong></span>
                    <span>Intent: <strong className="text-emerald-400">High</strong></span>
                    <span>Placement: <strong className="text-sky-400">Campaign-dependent</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStage(1)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer"
                  >
                    Simulate High-Intent Click
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {activeStage === 1 && (
              <motion.div
                key="stage-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700/80 text-left">
                    <span className="text-[10px] text-slate-400 font-mono">Google Search PPC</span>
                    <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">Paid Search</div>
                    <span className="text-[9px] text-slate-400">High Buyer Intent</span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700/80 text-left">
                    <span className="text-[10px] text-slate-400 font-mono">Organic SEO (Delhi NCR)</span>
                    <div className="text-sm font-bold text-sky-400 font-mono mt-0.5">Organic Discovery</div>
                    <span className="text-[9px] text-slate-400">Top 3 SERP Rankings</span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700/80 text-left">
                    <span className="text-[10px] text-slate-400 font-mono">Meta & Retargeting</span>
                    <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">Social Campaigns</div>
                    <span className="text-[9px] text-slate-400">Omnichannel Lift</span>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-[11px] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Smartphone size={14} className="text-emerald-400" />
                    <span>Responsive Mobile & Desktop</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400 font-mono font-semibold">Performance-focused Delivery</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStage(2)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer"
                  >
                    Track User Engagement
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {activeStage === 2 && (
              <motion.div
                key="stage-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700/80 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-300 font-semibold">Hero & Value Proposition</span>
                    <span className="font-mono text-emerald-400 font-bold">Value Proposition</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span className="text-slate-300 font-semibold">Case Studies & Service Matrix</span>
                    <span className="font-mono text-sky-400 font-bold">Service Details</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full w-[84%]" />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span className="text-slate-300 font-semibold">Pricing & ROI Estimator Scanned</span>
                    <span className="font-mono text-cyan-400 font-bold">Enquiry Path</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-[68%]" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-[10px]">
                    <span>Session: <strong className="text-emerald-400">Engagement review</strong></span>
                    <span>Next Step: <strong className="text-emerald-400">Improve clarity</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStage(3)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer"
                  >
                    Trigger Lead Capture Form
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {activeStage === 3 && (
              <motion.div
                key="stage-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 sm:p-3.5 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        VM
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Example Project Enquiry</div>
                        <div className="text-[10px] text-slate-400">Sample form submission</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Form Submitted
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] pt-1 border-t border-emerald-900/60 text-slate-300">
                    <div>Scope: <strong className="text-white">Web App + Google PPC</strong></div>
                    <div>Est. Budget: <strong className="text-emerald-400">Optional user entry</strong></div>
                  </div>
                  <div className="mt-2 text-[9.5px] text-emerald-300/90 flex items-center gap-1.5">
                    <Zap size={11} className="text-emerald-400" />
                    <span>Inquiry details routed to connected tools</span>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveStage(4)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer"
                  >
                    Review Next Steps
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {activeStage === 4 && (
              <motion.div
                key="stage-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="bg-slate-900/90 p-3 sm:p-3.5 rounded-xl border border-emerald-500/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Check size={14} className="text-emerald-400" />
                      Project Planning
                    </span>
                    <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                      Scope & Timeline
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800 text-[10px]">
                    <div className="bg-slate-800/80 p-1.5 rounded-lg">
                      <span className="text-slate-400">Project Scope</span>
                      <div className="text-sm font-black text-emerald-400 font-mono">Defined</div>
                    </div>
                    <div className="bg-slate-800/80 p-1.5 rounded-lg">
                      <span className="text-slate-400">Planning</span>
                      <div className="text-sm font-black text-sky-400 font-mono">In Progress</div>
                    </div>
                    <div className="bg-slate-800/80 p-1.5 rounded-lg">
                      <span className="text-slate-400">Follow-Up</span>
                      <div className="text-sm font-black text-cyan-400 font-mono">Scheduled</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveStage(0)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    Replay Acquisition Lifecycle
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Acquisition workflow overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <div className="bg-white p-3 rounded-2xl border border-emerald-200/80 shadow-sm text-center">
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Discovery</span>
            <div className="text-base sm:text-lg font-black text-slate-900 font-mono">Search & Social</div>
            <span className="text-[9px] text-[#059669] font-bold">Campaign entry</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-emerald-200/80 shadow-sm text-center">
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Visit</span>
            <div className="text-base sm:text-lg font-black text-[#059669] font-mono">Landing Page</div>
            <span className="text-[9px] text-slate-500 font-semibold">Relevant content</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-emerald-200/80 shadow-sm text-center">
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Engagement</span>
            <div className="text-base sm:text-lg font-black text-teal-600 font-mono">Project Details</div>
            <span className="text-[9px] text-[#059669] font-bold">Service information</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-emerald-200/80 shadow-sm text-center">
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Inquiry</span>
            <div className="text-base sm:text-lg font-black text-cyan-600 font-mono">Contact Form</div>
            <span className="text-[9px] text-cyan-600 font-bold">Team follow-up</span>
          </div>
        </div>

        {/* Channel Split with Interactive Channel Filter Pills */}
        <div className="space-y-2.5 bg-[#f0fbf5] p-3.5 sm:p-4 rounded-2xl border border-emerald-200">
          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
            <div className="text-[11px] font-mono text-slate-700 font-bold">
              Acquisition Channel Filter:
            </div>
            <div className="flex flex-wrap gap-1">
              {channels.map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setSelectedChannel(ch.id)}
                  className={`text-[9.5px] px-2 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                    selectedChannel === ch.id
                      ? "bg-[#059669] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-emerald-100/70 border border-emerald-200"
                  }`}
                >
                  {ch.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {filteredChannels.map((ch) => (
            <div key={ch.name} className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-800 font-semibold">{ch.name}</span>
                <span className="font-mono text-[#059669] font-black">{ch.detail}</span>
              </div>
              <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-emerald-200">
                <div className={`h-full ${ch.color} rounded-full transition-all duration-500 w-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CoreMastery() {
  const [activePillar, setActivePillar] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const pillars = [
    {
      id: "mastery-web",
      pillarNum: "01",
      pillarLabel: "BUILD • PILLAR 01",
      title: "Website Development",
      shortTitle: "Web Development",
      icon: Globe,
      badgeClass: "bg-emerald-100 text-[#15803d] border-emerald-300",
      accentText: "text-[#16a34a]",
      btnClass: "bg-[#10b981] hover:bg-[#059669] text-white shadow-emerald-500/25",
      highlight: "Professional website development for businesses, startups and growing companies.",
      description:
        "We design and develop high-performance business websites, corporate websites, landing pages, portals and custom web applications built around your brand, customers and business objectives.",
      tags: [
        "Business Websites",
        "Corporate Websites",
        "WordPress",
        "React",
        "Next.js",
        "PHP",
        "Custom Web Applications",
        "Website Redesign",
        "SEO-Ready Development",
        "Lead Generation",
      ],
      ctaText: "Explore Website Development",
      ctaLink: "/services/web-development",
      mockup: <WebDevelopmentMockup />,
    },
    {
      id: "mastery-ecommerce",
      pillarNum: "02",
      pillarLabel: "SELL • PILLAR 02",
      title: "eCommerce Development",
      shortTitle: "eCommerce Stores",
      icon: ShoppingCart,
      badgeClass: "bg-teal-100 text-teal-800 border-teal-300",
      accentText: "text-teal-700",
      btnClass: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/25",
      highlight: "Modern eCommerce website development designed for businesses selling products online.",
      description:
        "We build modern eCommerce experiences with product catalogues, payments, customer accounts, order management, inventory, integrations and conversion-focused shopping experiences.",
      tags: [
        "eCommerce Website Development",
        "Online Store Development",
        "Product Catalogue",
        "Payment Gateway Integration",
        "Shopping Cart",
        "Checkout",
        "Order Management",
        "Inventory",
        "Customer Accounts",
        "API Integration",
      ],
      ctaText: "Explore eCommerce Development",
      ctaLink: "/services/ecommerce",
      mockup: <EcommerceFlowAnimation />,
    },
    {
      id: "mastery-marketing",
      pillarNum: "03",
      pillarLabel: "GROW • PILLAR 03",
      title: "Digital Marketing",
      shortTitle: "Digital Marketing",
      icon: TrendingUp,
      badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-300",
      accentText: "text-cyan-700",
      btnClass: "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-600/25",
      highlight: "Digital marketing services designed to increase online visibility, attract relevant audiences and generate qualified enquiries.",
      description:
        "We combine SEO, Google Ads, Meta Ads, content strategy, analytics and conversion optimization to help businesses attract relevant audiences and generate business opportunities.",
      tags: [
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Local SEO",
        "Technical SEO",
        "Content Strategy",
        "Conversion Optimization",
        "Analytics",
        "Remarketing",
        "Lead Generation",
        "Performance Marketing",
      ],
      ctaText: "Explore Digital Marketing",
      ctaLink: "/services/digital-marketing",
      mockup: <MarketingDashboardAnimation />,
    },
  ];

  const handlePrev = () => {
    setDirection(-1);
    setActivePillar((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActivePillar((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > activePillar ? 1 : -1);
    setActivePillar(idx);
  };

  // Auto-play timer (pauses when user hovers over section)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [isPaused, pillars.length]);

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section
      id="mastery"
      className="py-12 lg:py-16 bg-gradient-to-b from-[#ffffff] via-[#f4fcf7] to-[#eaf8f0] text-slate-900 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3 shadow-xs">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Core Competencies
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Our Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Mastery</span>
          </h2>

          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            Three core capabilities engineered to build your digital presence, sell products online, and scale qualified customer acquisition.
          </p>
        </div>

        {/* ============================================================ */}
        {/* UNIFIED INTERACTIVE SLIDER CONTROLS & PILLAR TABS             */}
        {/* ============================================================ */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-200/90 shadow-md shadow-slate-900/5">
            
            {/* 3 Pillar Segmented Selector Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 w-full md:w-auto overflow-x-auto scrollbar-none py-0.5">
              {pillars.map((p, idx) => {
                const TabIcon = p.icon;
                const isActive = activePillar === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(idx)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex-1 md:flex-initial justify-center ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <TabIcon size={13} />
                    </span>
                    <span className="hidden sm:inline">{p.title}</span>
                    <span className="sm:hidden">{p.shortTitle}</span>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {p.pillarNum}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Slider Arrow Controls & Slide Counter */}
            <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto px-2 md:px-0">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500">
                <span className="text-slate-900 font-extrabold text-sm">
                  0{activePillar + 1}
                </span>
                <span>/</span>
                <span>0{pillars.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Service"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Service"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                >
                  <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* UNIFIED SLIDER DISPLAY (SAME FORMAT FOR ALL 3 SERVICES)       */}
        {/* ============================================================ */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 28 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* LEFT COLUMN: Service Identity, Tagline, Tags, CTA (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                
                {/* Pillar Eyebrow Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-bold border ${current.badgeClass}`}
                >
                  <CurrentIcon size={14} />
                  <span>{current.pillarLabel}</span>
                </div>

                {/* Service H3 Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                  {current.title}
                </h3>

                {/* High-Intent Value Proposition Tagline */}
                <p className={`text-base sm:text-[1.0625rem] font-bold leading-snug ${current.accentText}`}>
                  {current.highlight}
                </p>

                {/* Descriptive Copy */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Capability Scope Tags */}
                <div className="pt-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Key Capabilities & Tech Scope:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-white text-slate-800 border border-slate-200/90 hover:border-emerald-400 rounded-xl text-xs font-semibold tracking-tight shadow-2xs hover:shadow-xs transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Service Action Button */}
                <div className="pt-3">
                  <Button
                    asChild
                    className={`font-extrabold px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer ${current.btnClass}`}
                  >
                    <Link href={current.ctaLink}>
                      <span>{current.ctaText}</span>
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </Link>
                  </Button>
                </div>

              </div>

              {/* RIGHT COLUMN: Interactive Live Mockup & Telemetry Engine (5 cols) */}
              <div className="lg:col-span-5">
                {current.mockup}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM PROGRESS DOTS & EXPANDED SERVICE COVERAGE BAR         */}
        {/* ============================================================ */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {pillars.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activePillar === i
                    ? "w-8 bg-emerald-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Expanded Service Coverage Note */}
          <div className="text-xs text-slate-600 text-center sm:text-right flex items-center gap-2 flex-wrap justify-center sm:justify-end">
            <span className="text-slate-500">Need more digital capabilities?</span>
            <Link
              href="/services"
              className="text-[#059669] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Explore Custom Software, Apps & Cloud Solutions</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

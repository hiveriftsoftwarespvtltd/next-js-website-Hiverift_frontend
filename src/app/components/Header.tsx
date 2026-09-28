"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Calendar,
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Code,
  Brain,
  Cloud,
  Palette,
  Crosshair,
  TrendingUp,
  Landmark,
  Heart,
  Factory,
  Layers,
  Building2,
  Briefcase,
  FileText,
  Users,
  Shield,
  ShieldCheck,
  Zap,
  Plane,
  ShoppingBag,
  GraduationCap,
  MapPin,
  Rocket,
  Utensils,
  Stethoscope,
  Search
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { EnquiryModal, openEnquiryModal } from "./EnquiryModal";
import { GlobalSearchModal, openGlobalSearch } from "./GlobalSearchModal";
import { LOCATIONS_DATA } from "@/app/data/locationsData";

const delhiLocations = LOCATIONS_DATA.filter((l) => l.region === "Delhi");
const noidaLocations = LOCATIONS_DATA.filter((l) => l.region === "Noida");
const gurgaonLocations = LOCATIONS_DATA.filter((l) => l.region === "Gurgaon");

type ActiveMenu = "services" | "solutions" | "industries" | "company" | "locations" | null;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<ActiveMenu>(null);
  const pathname = usePathname();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const handleMouseEnter = (menu: ActiveMenu) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 220);
  };

  const toggleMobileSubmenu = (menu: ActiveMenu) => {
    setMobileExpanded((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 select-none">
      
      <div className="bg-[#051c14] text-[#ecfdf5] py-2 text-[11px] sm:text-xs border-b border-emerald-900/60 font-medium">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1440px] text-center leading-relaxed">
          Top Website Development Company in Delhi NCR • Web, ERP, Mobile Apps &amp; Digital Marketing •{" "}
          <a href="tel:+918814930229" className="whitespace-nowrap text-emerald-300 hover:text-white transition-colors">
            Call: 88149 30229
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Glassmorphic Backdrop */}
      <div
        className={`bg-white/95 backdrop-blur-xl transition-all duration-300 border-b ${
          isScrolled
            ? "border-slate-200/90 shadow-lg py-2.5"
            : "border-slate-200/70 shadow-sm py-3"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1440px] flex items-center justify-between h-[58px] sm:h-[62px]">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 focus:outline-none shrink-0 group">
            <img
              src="/logo.png"
              alt="HiveRift"
              className="h-9 sm:h-11 w-auto object-contain block transition-transform group-hover:scale-105 duration-200"
            />
          </Link>

          {/* Desktop Nav Items with Chevrons (Services ▾  Solutions ▾  Industries ▾  Company ▾  Case Studies) */}
          <nav className="hidden 2xl:flex shrink-0 items-center space-x-0.5 xl:space-x-1">
            
            {/* 1. Services Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
                className={`px-2.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeMenu === "services" || pathname.startsWith("/services")
                    ? "text-emerald-600 bg-emerald-50/80"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180 text-emerald-600" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* 2. Solutions Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
                className={`px-2.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeMenu === "solutions" || pathname.startsWith("/solutions")
                    ? "text-emerald-600 bg-emerald-50/80"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === "solutions" ? "rotate-180 text-emerald-600" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* 3. Industries Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
                className={`px-2.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeMenu === "industries" || pathname.startsWith("/industries")
                    ? "text-emerald-600 bg-emerald-50/80"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Industries</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === "industries" ? "rotate-180 text-emerald-600" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* 4. Company Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
                className={`px-2.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeMenu === "company"
                    ? "text-emerald-600 bg-emerald-50/80"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === "company" ? "rotate-180 text-emerald-600" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* 5. Locations We Serve Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("locations")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "locations" ? null : "locations")}
                className={`px-2.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeMenu === "locations"
                    ? "text-emerald-600 bg-emerald-50/80"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Locations We Serve</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === "locations" ? "rotate-180 text-emerald-600" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* 6. Case Studies Direct Link */}
            <Link
              href="/case-studies"
              className={`px-2.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all whitespace-nowrap ${
                pathname === "/case-studies"
                  ? "text-emerald-600 bg-emerald-50/80"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Case Studies
            </Link>

          </nav>

          {/* Right Action Pills (Search + Phone + Book Consultation / Contact Us) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Global Search Button Pill (Active Across All Pages) */}
            <button
              type="button"
              onClick={() => openGlobalSearch()}
              className="flex items-center gap-2 pl-3.5 pr-2.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:border-emerald-500 text-xs text-slate-500 hover:text-slate-900 transition-all shadow-2xs group cursor-pointer"
              title="Filter keywords & solutions across all industries (Ctrl+K)"
            >
              <Search size={14} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
              <span className="hidden md:inline truncate max-w-[110px] xl:max-w-[150px] text-left text-slate-600 font-medium">
                Filter keywords...
              </span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Quick Call Pill */}
            <a
              href="tel:+918814930229"
              className="hidden 2xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200/90 whitespace-nowrap"
            >
              <Phone size={13} className="text-emerald-600" />
              <span>Call: 88149 30229</span>
            </a>

            {/* Elite Contact Us Gradient Button (Matching Image 2 glow) */}
            <button
              onClick={() => openEnquiryModal()}
              className="hidden 2xl:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-black shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Calendar size={14} />
              <span>Get Proposal</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-1.5 2xl:hidden">
            <button
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm"
            >
              <Calendar size={13} />
              <span>Get Proposal</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-emerald-600 rounded-xl focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP MEGA MENUS (Rendered inside header container with elegant shadow) */}
        {/* ========================================================================= */}

        <AnimatePresence>
          {/* 1. SERVICES MEGA MENU */}
          {activeMenu === "services" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl overflow-hidden z-40"
            >
              <div className="relative container mx-auto px-6 max-w-7xl py-8">
                
                {/* Large Background Watermark (Matching Image 2 "SERVICES") */}
                <div className="absolute right-4 bottom-1 text-[130px] font-black text-slate-100/90 select-none pointer-events-none tracking-tighter leading-none -z-0">
                  SERVICES
                </div>

                <div className="relative z-10 grid grid-cols-12 gap-8 items-start">
                  
                  {/* Column 1: Web & Software Development */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Code size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Web & Software
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href="/services/web-development"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› Website Development</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">0.28s</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Next.js 15, React, Sub-second TTFB, 99+ Core Vitals</p>
                      </Link>

                      <Link
                        href="/services/software-development"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› Software Development</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">12ms</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Enterprise Microservices, Go/NestJS, Custom ERP/CRM</p>
                      </Link>

                      <Link
                        href="/services/ui-ux"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› UI/UX Design</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">AAA</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Tokenized Figma Design Systems, WCAG 2.2 AAA Accessibility</p>
                      </Link>
                    </div>
                  </div>

                  {/* Column 2: eCommerce & Mobile */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <ShoppingCart size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        eCommerce & Mobile
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href="/services/ecommerce"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› eCommerce Development</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">1-Click</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Shopify Plus, Headless Next.js Commerce, Frictionless Checkouts</p>
                      </Link>

                      <Link
                        href="/services/mobile-development"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› Mobile Development</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">60 FPS</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Flutter, React Native, Native iOS (Swift) & Android (Kotlin)</p>
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: AI, Cloud & Marketing */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Brain size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        AI, Cloud & Growth
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href="/services/ai-ml"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› AI & Automation</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Private VPC</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Fine-Tuned LLMs, Grounded RAG, Autonomous Agents</p>
                      </Link>

                      <Link
                        href="/services/cloud-devops"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› Cloud & DevOps</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Multi-Region</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Kubernetes Multi-AZ, Terraform GitOps, Blue-Green Deploys</p>
                      </Link>

                      <Link
                        href="/services/data-annotation"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› Data Annotation</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Data QA</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Computer Vision BBoxes, 3D LiDAR, DICOM, RLHF Consensus</p>
                      </Link>

                      <Link
                        href="/services/digital-marketing"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                          <span>› Digital Marketing</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Campaign Reporting</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Server-Side Meta CAPI, Technical Schema SEO, Google PMax</p>
                      </Link>
                    </div>
                  </div>

                  {/* Column 4: Engineering Hub Highlight Card */}
                  <div className="col-span-3 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase mb-3">
                        <ShieldCheck size={11} />
                        <span>Full-Spectrum Partner</span>
                      </div>
                      <h4 className="text-base font-extrabold text-white mb-2 leading-tight">
                        Integrated Digital Capabilities
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Eliminate multi-agency chaos. We unite software engineering, mobile apps, private AI, and DevOps under a single accountable SLA.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
                      >
                        <span>Explore All 9 Services</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* 2. SOLUTIONS MEGA MENU */}
          {activeMenu === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl overflow-hidden z-40"
            >
              <div className="relative container mx-auto px-6 max-w-7xl py-8">
                
                {/* Large Background Watermark */}
                <div className="absolute right-4 bottom-1 text-[130px] font-black text-slate-100/90 select-none pointer-events-none tracking-tighter leading-none -z-0">
                  SOLUTIONS
                </div>

                <div className="relative z-10 grid grid-cols-12 gap-8 items-start">
                  
                  {/* Column 1: Enterprise Digital Systems (Matching Image 1) */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Layers size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Enterprise Platforms
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href="/services/software-development"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › ERP & CRM
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Custom business workflows, RBAC & database pooling</p>
                      </Link>

                      <Link
                        href="/solutions"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › SaaS Platforms
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Multi-tenant architecture, billing & developer APIs</p>
                      </Link>

                      <Link
                        href="/solutions"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › Business Automation
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Eliminate manual data re-entry and human bottlenecks</p>
                      </Link>

                      <Link
                        href="/solutions"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › API Integrations
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">High-speed REST, GraphQL & legacy mainframe connectors</p>
                      </Link>
                    </div>
                  </div>

                  {/* Column 2: Cloud & Data Solutions */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Cloud size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Cloud & Data Solutions
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href="/services/cloud-devops"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › Cloud & DevOps
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Kubernetes clusters, GitOps automation & FinOps visibility</p>
                      </Link>

                      <Link
                        href="/services/data-annotation"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › Data Annotation
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Annotation workflows for images, LiDAR, DICOM, and text</p>
                      </Link>

                      <Link
                        href="/services/ai-ml"
                        className="group p-2.5 rounded-xl block hover:bg-emerald-50/60 transition-all border border-transparent hover:border-emerald-200/60"
                      >
                        <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                          › Predictive AI Engines
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">Forecasting, risk modeling & real-time perception</p>
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: Industry Spotlights */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Landmark size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Industry Blueprints
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href="/industries/finance"
                        className="group p-2 rounded-xl block hover:bg-emerald-50/60 transition-all text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center justify-between"
                      >
                        <span>Banking & Financial Services</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        href="/industries/healthcare"
                        className="group p-2 rounded-xl block hover:bg-emerald-50/60 transition-all text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center justify-between"
                      >
                        <span>Healthcare & Telemedicine</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        href="/industries/retail"
                        className="group p-2 rounded-xl block hover:bg-emerald-50/60 transition-all text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center justify-between"
                      >
                        <span>Retail & E-Commerce</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        href="/industries/logistics"
                        className="group p-2 rounded-xl block hover:bg-emerald-50/60 transition-all text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center justify-between"
                      >
                        <span>Smart Logistics & WMS</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        href="/industries/manufacturing"
                        className="group p-2 rounded-xl block hover:bg-emerald-50/60 transition-all text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center justify-between"
                      >
                        <span>Manufacturing & IoT</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>

                  {/* Column 4: Solutions Highlight Card */}
                  <div className="col-span-3 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase mb-3">
                        <ShieldCheck size={11} />
                        <span>100% Compliant</span>
                      </div>
                      <h4 className="text-base font-extrabold text-white mb-2 leading-tight">
                        Industry-Specific Solutions
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Generic software fails because every sector has unique regulations and transaction logic. We build tailored architectures.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <Link
                        href="/solutions"
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs transition-all shadow-md"
                      >
                        <span>Explore All 10 Solutions</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* 3. INDUSTRIES DROPDOWN MENU */}
          {activeMenu === "industries" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl overflow-hidden z-40"
            >
              <div className="relative container mx-auto px-6 max-w-7xl py-8">
                
                {/* Large Background Watermark */}
                <div className="absolute right-4 bottom-1 text-[130px] font-black text-slate-100/90 select-none pointer-events-none tracking-tighter leading-none -z-0">
                  INDUSTRIES
                </div>

                <div className="relative z-10 grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: 10 Industries Grid */}
                  <div className="col-span-9">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-emerald-600" />
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                          Sector-Specific Digital Architectures
                        </h4>
                      </div>
                      <Link href="/industries" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                        <span>View All Industries</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        href="/industries/real-estate"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Building2 size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Real Estate & Property</div>
                          <div className="text-[10px] text-slate-500">Property portals & CRM sync</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/hospitality"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Plane size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Travel & Hospitality</div>
                          <div className="text-[10px] text-slate-500">Booking engines & travel APIs</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/retail"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <ShoppingBag size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Retail & eCommerce</div>
                          <div className="text-[10px] text-slate-500">Shopify & marketplace sync</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/manufacturing"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Factory size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Manufacturing & Industrial</div>
                          <div className="text-[10px] text-slate-500">Custom ERP & dealer portals</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/education"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Education & E-Learning</div>
                          <div className="text-[10px] text-slate-500">LMS & live video classrooms</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/healthcare"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Stethoscope size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Healthcare</div>
                          <div className="text-[10px] text-slate-500">Appointments & patient portals</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/finance"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Landmark size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Finance & Banking</div>
                          <div className="text-[10px] text-slate-500">Portals & EMI calculators</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/professional-services"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Professional Services</div>
                          <div className="text-[10px] text-slate-500">Consulting & client portals</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/food-restaurant"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Utensils size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Restaurants & Food</div>
                          <div className="text-[10px] text-slate-500">Direct ordering & POS sync</div>
                        </div>
                      </Link>

                      <Link
                        href="/industries/startups"
                        className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Rocket size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-800 group-hover:text-emerald-600 transition-colors">Startups & Emerging</div>
                          <div className="text-[10px] text-slate-500">Rapid MVP & SaaS platforms</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Highlight Card */}
                  <div className="col-span-3 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase mb-3">
                        <Zap size={11} />
                        <span>Zero Lock-in</span>
                      </div>
                      <h4 className="text-base font-extrabold text-white mb-2 leading-tight">
                        Proven Sector Impact
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Discover how our verified architectures solve mission-critical compliance, performance, and scaling challenges.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <Link
                        href="/industries"
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
                      >
                        <span>Browse Industry Blueprints</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* 4. COMPANY DROPDOWN MENU (Matching Image 1) */}
          {activeMenu === "company" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl overflow-hidden z-40"
            >
              <div className="relative container mx-auto px-6 max-w-7xl py-8">
                
                {/* Large Background Watermark */}
                <div className="absolute right-4 bottom-1 text-[130px] font-black text-slate-100/90 select-none pointer-events-none tracking-tighter leading-none -z-0">
                  COMPANY
                </div>

                <div className="relative z-10 grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Company Links */}
                  <div className="col-span-8 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Users size={16} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        About HiveRift & Insights
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/about"
                        className="p-3 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Building2 size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                            › About HiveRift
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Our mission, leadership, and engineering standards</p>
                        </div>
                      </Link>

                      <Link
                        href="/industries"
                        className="p-3 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Layers size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                            › Industries We Serve
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Specialized solutions tailored across 10 global sectors</p>
                        </div>
                      </Link>

                      <Link
                        href="/case-studies"
                        className="p-3 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                            › Selected Work & Case Studies
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Verified client outcomes, speed benchmarks & ROAS</p>
                        </div>
                      </Link>

                      <Link
                        href="/blog"
                        className="p-3 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                          <FileText size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                            › Insights & Engineering Blog
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Deep architectural guides, AI research & Web Vitals</p>
                        </div>
                      </Link>

                      <Link
                        href="/careers"
                        className="p-3 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Users size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                            › Careers & Culture
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Join our elite full-stack engineering team</p>
                        </div>
                      </Link>

                      <Link
                        href="/contact"
                        className="p-3 rounded-xl hover:bg-emerald-50/60 transition-all border border-slate-100 hover:border-emerald-200 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Phone size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                            › Contact Us
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Talk directly with a lead solutions architect</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Office & SLA Card */}
                  <div className="col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase mb-3">
                        <ShieldCheck size={11} />
                        <span>Direct Leadership Access</span>
                      </div>
                      <h4 className="text-base font-extrabold text-white mb-2 leading-tight">
                        Global Engineering Headquarters
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        We deliver enterprise software, mobile apps, and AI systems worldwide with dedicated local project managers and 24/7 SRE coverage.
                      </p>
                      <div className="space-y-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Direct Architect Engagement</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>NDA & 100% IP Code Ownership</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-800 mt-4">
                      <button
                        onClick={() => openEnquiryModal()}
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs transition-all shadow-md"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* 5. LOCATIONS WE SERVE DROPDOWN MENU (All 30 Locations Included) */}
          {activeMenu === "locations" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("locations")}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-slate-200/90 shadow-2xl overflow-hidden z-40 max-h-[85vh] overflow-y-auto"
            >
              {/* Clean Background & Watermark */}
              <div className="absolute right-6 bottom-1 text-[130px] font-black text-slate-100/90 select-none pointer-events-none tracking-tighter leading-none -z-0">
                LOCATIONS
              </div>

              <div className="relative z-10 container mx-auto px-6 max-w-7xl py-7">

                <div className="relative z-10 grid grid-cols-12 gap-6 items-start">
                  
                  {/* Column 1: Delhi Locations (All 10 Items) */}
                  <div className="col-span-3 space-y-3">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100">
                      <MapPin size={15} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Delhi Hub
                      </h4>
                    </div>

                    <div className="space-y-0.5">
                      {delhiLocations.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/locations/${item.slug}`}
                          className="group px-2 py-1.5 rounded-lg block hover:bg-emerald-50/70 transition-all text-[11.5px] font-medium text-slate-700 hover:text-emerald-700 flex items-center justify-between leading-snug"
                        >
                          <span className="truncate">› {item.keyword}</span>
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1 text-emerald-600" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Noida Locations (All 10 Items) */}
                  <div className="col-span-3 space-y-3">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100">
                      <Building2 size={15} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Noida Hub
                      </h4>
                    </div>

                    <div className="space-y-0.5">
                      {noidaLocations.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/locations/${item.slug}`}
                          className="group px-2 py-1.5 rounded-lg block hover:bg-emerald-50/70 transition-all text-[11.5px] font-medium text-slate-700 hover:text-emerald-700 flex items-center justify-between leading-snug"
                        >
                          <span className="truncate">› {item.keyword}</span>
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1 text-emerald-600" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Gurgaon Locations (All 10 Items) */}
                  <div className="col-span-3 space-y-3">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100">
                      <Landmark size={15} className="text-emerald-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Gurgaon Hub
                      </h4>
                    </div>

                    <div className="space-y-0.5">
                      {gurgaonLocations.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/locations/${item.slug}`}
                          className="group px-2 py-1.5 rounded-lg block hover:bg-emerald-50/70 transition-all text-[11.5px] font-medium text-slate-700 hover:text-emerald-700 flex items-center justify-between leading-snug"
                        >
                          <span className="truncate">› {item.keyword}</span>
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1 text-emerald-600" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Pan-India Delivery Card */}
                  <div className="col-span-3 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 text-white border border-slate-800 shadow-xl flex flex-col justify-between self-stretch">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase mb-3">
                        <MapPin size={11} />
                        <span>NCR & Global Delivery</span>
                      </div>
                      <h4 className="text-base font-extrabold text-white mb-2 leading-tight">
                        Office & Remote Architecture
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        In-person technical scoping across Delhi NCR, South Delhi, Dwarka, Noida Sector 62, and DLF Cyber City Gurgaon.
                      </p>
                      <div className="space-y-1.5 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Direct Architect Engagement</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>24/7 Global SRE & Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 mt-4 space-y-2">
                      <Link
                        href="/locations"
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer"
                      >
                        <span>Schedule Location Scoping</span>
                        <ArrowRight size={13} />
                      </Link>

                      <Link
                        href="/locations"
                        className="inline-flex items-center justify-center w-full gap-1.5 text-[11px] text-emerald-400 hover:text-emerald-300 font-bold transition-colors py-1"
                      >
                        <span>View All 30 Hubs & Interactive Map</span>
                        <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* MOBILE NAVIGATION DRAWER (Responsive Accordion for all Menu Items)        */}
        {/* ========================================================================= */}

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl px-4 py-6 max-h-[85vh] overflow-y-auto">
            
            <nav className="flex flex-col space-y-2">
              
              {/* 1. Mobile Services Accordion */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("services")}
                  className="w-full px-4 py-3.5 text-left text-sm font-black text-slate-900 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Code size={16} className="text-emerald-600" />
                    <span>Services</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileExpanded === "services" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === "services" && (
                  <div className="px-4 pb-4 pt-1 space-y-2 border-t border-slate-100 bg-white">
                    <Link
                      href="/services/web-development"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Website Development
                    </Link>
                    <Link
                      href="/services/ecommerce"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › eCommerce Development
                    </Link>
                    <Link
                      href="/services/software-development"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Software Development
                    </Link>
                    <Link
                      href="/services/mobile-development"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Mobile Development
                    </Link>
                    <Link
                      href="/services/ai-ml"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › AI & Automation
                    </Link>
                    <Link
                      href="/services/cloud-devops"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Cloud & DevOps
                    </Link>
                    <Link
                      href="/services/data-annotation"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Data Annotation
                    </Link>
                    <Link
                      href="/services/digital-marketing"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Digital Marketing
                    </Link>
                    <Link
                      href="/services/ui-ux"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › UI/UX Design
                    </Link>
                    <Link
                      href="/services"
                      className="block p-2 text-xs font-extrabold text-emerald-600 border-t border-slate-100 pt-2"
                    >
                      View All 9 Services &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* 2. Mobile Solutions Accordion */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("solutions")}
                  className="w-full px-4 py-3.5 text-left text-sm font-black text-slate-900 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Layers size={16} className="text-emerald-600" />
                    <span>Solutions</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileExpanded === "solutions" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === "solutions" && (
                  <div className="px-4 pb-4 pt-1 space-y-2 border-t border-slate-100 bg-white">
                    <Link
                      href="/services/software-development"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › ERP & CRM
                    </Link>
                    <Link
                      href="/solutions"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › SaaS Platforms
                    </Link>
                    <Link
                      href="/services/cloud-devops"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Cloud & DevOps
                    </Link>
                    <Link
                      href="/solutions"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Business Automation
                    </Link>
                    <Link
                      href="/solutions"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › API Integrations
                    </Link>
                    <Link
                      href="/services/data-annotation"
                      className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600"
                    >
                      › Data Annotation
                    </Link>
                    <Link
                      href="/solutions"
                      className="block p-2 text-xs font-extrabold text-emerald-600 border-t border-slate-100 pt-2"
                    >
                      View All 10 Solutions &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* 3. Mobile Industries Accordion */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("industries")}
                  className="w-full px-4 py-3.5 text-left text-sm font-black text-slate-900 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Building2 size={16} className="text-emerald-600" />
                    <span>Industries</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileExpanded === "industries" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === "industries" && (
                  <div className="px-4 pb-4 pt-1 space-y-1.5 border-t border-slate-100 bg-white">
                    <Link href="/industries/real-estate" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Real Estate & Property
                    </Link>
                    <Link href="/industries/hospitality" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Travel & Hospitality
                    </Link>
                    <Link href="/industries/retail" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Retail & eCommerce
                    </Link>
                    <Link href="/industries/manufacturing" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Manufacturing & Industrial
                    </Link>
                    <Link href="/industries/education" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Education & E-Learning
                    </Link>
                    <Link href="/industries/healthcare" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Healthcare
                    </Link>
                    <Link href="/industries/finance" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Finance & Financial Services
                    </Link>
                    <Link href="/industries/professional-services" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Professional Services
                    </Link>
                    <Link href="/industries/food-restaurant" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Restaurants & Food Businesses
                    </Link>
                    <Link href="/industries/startups" className="block p-1.5 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Startups & Emerging Businesses
                    </Link>
                    <Link href="/industries" className="block p-2 text-xs font-extrabold text-emerald-600 border-t border-slate-100 pt-2">
                      View All Industries &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* 4. Mobile Company Accordion */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("company")}
                  className="w-full px-4 py-3.5 text-left text-sm font-black text-slate-900 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-emerald-600" />
                    <span>Company</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileExpanded === "company" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === "company" && (
                  <div className="px-4 pb-4 pt-1 space-y-2 border-t border-slate-100 bg-white">
                    <Link href="/about" className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › About HiveRift
                    </Link>
                    <Link href="/industries" className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Industries We Serve
                    </Link>
                    <Link href="/case-studies" className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Selected Work & Case Studies
                    </Link>
                    <Link href="/blog" className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Insights & Blog
                    </Link>
                    <Link href="/careers" className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Careers
                    </Link>
                    <Link href="/contact" className="block p-2 text-xs font-bold text-slate-800 hover:text-emerald-600">
                      › Contact Us
                    </Link>
                  </div>
                )}
              </div>

              {/* 5. Mobile Locations We Serve Accordion */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("locations")}
                  className="w-full px-4 py-3.5 text-left text-sm font-black text-slate-900 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-600" />
                    <span>Locations We Serve</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileExpanded === "locations" ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === "locations" && (
                  <div className="px-4 pb-4 pt-2 space-y-3 border-t border-slate-100 bg-white">
                    {/* Delhi NCR Quick Link Banner */}
                    <Link
                      href="/locations"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-200/80 text-slate-900 group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-emerald-600" />
                        <div>
                          <div className="text-xs font-black text-slate-900">Delhi NCR Service Matrix</div>
                          <div className="text-[10px] text-slate-500">Explore interactive map & 30 active hubs</div>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Delhi Hub */}
                    <div>
                      <div className="pt-1 text-[11px] font-black text-emerald-700 uppercase tracking-wider mb-1">
                        Delhi Hub
                      </div>
                      {delhiLocations.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/locations/${item.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-[11px] text-slate-700 hover:text-emerald-600"
                        >
                          › {item.keyword}
                        </Link>
                      ))}
                    </div>

                    {/* Noida Hub */}
                    <div>
                      <div className="pt-2 text-[11px] font-black text-emerald-700 uppercase tracking-wider mb-1">
                        Noida Hub
                      </div>
                      {noidaLocations.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/locations/${item.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-[11px] text-slate-700 hover:text-emerald-600"
                        >
                          › {item.keyword}
                        </Link>
                      ))}
                    </div>

                    {/* Gurgaon Hub */}
                    <div>
                      <div className="pt-2 text-[11px] font-black text-emerald-700 uppercase tracking-wider mb-1">
                        Gurgaon / Gurugram Hub
                      </div>
                      {gurgaonLocations.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/locations/${item.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-[11px] text-slate-700 hover:text-emerald-600"
                        >
                          › {item.keyword}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Case Studies Direct Link */}
              <Link
                href="/case-studies"
                className="px-4 py-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 text-sm font-black text-slate-900 flex items-center justify-between"
              >
                <span>Case Studies</span>
                <ArrowRight size={15} className="text-emerald-600" />
              </Link>

              {/* Action Buttons in Mobile Drawer */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={() => openEnquiryModal()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Get Proposal</span>
                </button>

                <a
                  href="tel:+918814930229"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold border border-slate-200"
                >
                  <Phone size={14} className="text-emerald-600" />
                  <span>Call: 88149 30229</span>
                </a>
              </div>

            </nav>

          </div>
        )}

      </div>

      <EnquiryModal />
      <GlobalSearchModal />
    </header>
  );
}
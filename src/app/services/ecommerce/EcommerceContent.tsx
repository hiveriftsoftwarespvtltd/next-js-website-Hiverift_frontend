"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ShoppingCart,
  Shield,
  Layers,
  Rocket,
  CreditCard,
  Package,
  Truck,
  Zap,
  Check,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Store,
  RefreshCw,
  Sliders,
  DollarSign,
  User,
  Mail,
  Phone,
  Send,
  FileCheck2,
  Globe,
  Database,
  Cpu,
  ShieldCheck,
  Smartphone,
  Gauge,
  MapPin
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FAQ } from "@/app/components/FAQ";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import Swal from "sweetalert2";
import { submitContactForm } from "@/app/actions/contactActions";
import { EcommerceTechCanvas } from "./components/EcommerceTechCanvas";
import { EcommerceHeroShowcase } from "./components/EcommerceHeroShowcase";
import { EcommerceArchitectureComparison } from "./components/EcommerceArchitectureComparison";
import { EcommerceProcessTimeline } from "./components/EcommerceProcessTimeline";
import { EcommerceLiveTerminal } from "./components/EcommerceLiveTerminal";
import { EcommerceScopeEstimator } from "./components/EcommerceScopeEstimator";

// --- Data Constants ---

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Shopify Plus & Headless Commerce",
    desc: "Bespoke storefronts engineered with Next.js Commerce or customized Shopify Liquid. Ultra-fast page speeds, custom product builders, and complete brand control.",
    deliverable: "Sub-Second Page Loads & 1-Click Checkout",
    points: ["Sub-second product page loads", "Custom checkout extensibility", "Omnichannel ERP and 3PL syncing"]
  },
  {
    icon: Store,
    title: "High-Converting WooCommerce Solutions",
    desc: "Tailored WordPress & WooCommerce stores with custom lightweight themes. Zero template bloat, high security, and seamless payment gateway integrations.",
    deliverable: "Custom Themes & Multi-Warehouse Sync",
    points: ["Custom checkout flow optimization", "Multi-warehouse inventory management", "Automated invoice & GST compliance"]
  },
  {
    icon: Zap,
    title: "Cart Abandonment & CRO Optimization",
    desc: "Recover lost revenue with intelligent exit-intent prompts, 1-click express checkouts, WhatsApp cart recovery, and data-tested upsell funnels.",
    deliverable: "Automated WhatsApp & Email Retargeting",
    points: ["One-click checkout (UPI, Apple Pay, Cards)", "Automated abandoned cart email/WhatsApp flows", "Dynamic cross-sell & bundle engines"]
  },
  {
    icon: CreditCard,
    title: "Multi-Currency & Global Payment Gateways",
    desc: "Frictionless global transactions supporting Stripe, Razorpay, PayU, PayPal, and Apple Pay. Automated tax compliance, currency switching, and instant payouts.",
    deliverable: "PCI-DSS Level 1 & Localized Pricing",
    points: ["Localized currency & automated geo-pricing", "Bank-grade PCI-DSS compliance", "Zero transaction friction & instant refunds"]
  },
  {
    icon: Layers,
    title: "Multi-Vendor Marketplaces & B2B Portals",
    desc: "Complex commerce platforms for wholesale and multi-seller ecosystems. Tiered wholesale pricing, custom quotation workflows, and automated seller payouts.",
    deliverable: "Tiered Pricing & Commission Automation",
    points: ["Vendor management dashboards & commissions", "Custom RFQ & wholesale tiered pricing", "Automated split payments & invoices"]
  },
  {
    icon: Smartphone,
    title: "eCommerce Mobile App Development",
    desc: "Extend your online store to native iOS and Android apps with real-time push notifications, biometric logins, and seamless offline catalog browsing.",
    deliverable: "Native iOS & Android Commerce Apps",
    points: ["Real-time product inventory sync", "Personalized push notification campaigns", "Native app store publishing & maintenance"]
  }
];

const commercePillars = [
  {
    icon: Gauge,
    title: "Sub-Second PDP Speeds",
    desc: "Edge-cached product catalog rendering that loads in under 300ms, slashing mobile bounce rates."
  },
  {
    icon: Zap,
    title: "1-Click Accelerated Checkout",
    desc: "Instant UPI, Apple Pay, and Google Pay integrations that convert buyers with zero form friction."
  },
  {
    icon: Truck,
    title: "3PL Logistics & ERP Sync",
    desc: "Real-time bi-directional inventory syncing with Shiprocket, Delhivery, SAP, and custom warehouses."
  },
  {
    icon: ShieldCheck,
    title: "PCI-DSS Level 1 Security",
    desc: "Bank-grade transaction encryption, tokenized cards, and automated fraud prevention filters."
  },
  {
    icon: TrendingUp,
    title: "Flash Sale 100k Concurrency",
    desc: "Elastic cloud serverless architecture built to withstand extreme traffic spikes during festive promotions."
  },
  {
    icon: RefreshCw,
    title: "WhatsApp Cart Recovery",
    desc: "Automated instant recovery triggers recovering up to 48% of abandoned shopping carts."
  },
  {
    icon: Globe,
    title: "Multi-Currency Geo-Pricing",
    desc: "Automated IP-based currency switching, duty calculations, and localized payment rails."
  },
  {
    icon: DollarSign,
    title: "Zero Revenue Traps",
    desc: "100% source code ownership with zero recurring per-transaction agency penalties or lock-in."
  }
];

const technologies = [
  { name: "Shopify Plus", desc: "Enterprise D2C Platform" },
  { name: "WooCommerce", desc: "Flexible Open-Source Commerce" },
  { name: "Next.js Commerce", desc: "Headless High-Speed Storefronts" },
  { name: "Stripe & Razorpay", desc: "Secure Global Payment APIs" },
  { name: "Klaviyo & Omnisend", desc: "Automated Retention Funnels" },
  { name: "Sanity / Contentful", desc: "Headless Product Catalog CMS" },
  { name: "Algolia Search", desc: "Instant AI Product Discovery" },
  { name: "Shiprocket / Delhivery", desc: "Automated Logistics & Tracking" }
];

const ecommerceFaqs = [
  {
    question: "Which platform is best for my brand: Shopify Plus, WooCommerce, or Headless Next.js?",
    answer: "Shopify Plus is ideal for rapid scaling and proven D2C brand management. WooCommerce offers complete open-source autonomy with zero platform subscription fees. Headless Next.js Commerce is recommended for high-volume enterprise stores requiring sub-second edge speeds, bespoke 3D configurators, or complex multi-system ERP integrations."
  },
  {
    question: "Can you migrate our existing store without losing orders, customers, or SEO rankings?",
    answer: "Yes. We execute zero-downtime store migrations. All customer accounts, historical order data, product variants, and reviews are mapped with 100% integrity, and automated 301 URL redirects are configured to preserve and boost your organic search rankings."
  },
  {
    question: "How do you solve cart abandonment on mobile devices?",
    answer: "We engineer 1-click accelerated checkout paths (Apple Pay, Google Pay, UPI, tokenized cards) eliminating lengthy address forms, alongside automated WhatsApp and email recovery sequences that trigger within minutes of cart abandonment."
  },
  {
    question: "Can our store handle 50,000+ concurrent visitors during festive flash sales?",
    answer: "Yes. Our headless architectures and optimized Shopify Plus configurations utilize global edge CDN caching and distributed serverless microservices specifically stress-tested to handle 100k+ concurrent shoppers without slowdown or database locking."
  },
  {
    question: "Do you integrate with our warehouse, ERP, and shipping partners?",
    answer: "Yes. We build direct bi-directional API integrations with logistics providers (Shiprocket, Delhivery, Bluedart), ERP systems (SAP, NetSuite, Zoho, Microsoft Dynamics), and accounting platforms for real-time stock allocation and automated GST invoicing."
  },
  {
    question: "What is your typical turnaround time for an enterprise eCommerce store?",
    answer: "A custom Shopify Plus or WooCommerce store is typically planned, designed, and deployed within 3 to 5 weeks. Complex headless platforms or multi-vendor marketplaces generally take 6 to 8 weeks, including complete load testing and 3PL signoff."
  }
];

export default function EcommerceContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeType: "Shopify Plus Store",
    budget: "",
    brief: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScopeConfigured = (scope: {
    type: string;
    features: string[];
    estimatedDays: string;
    tech: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      storeType: scope.type,
      brief: `Configured eCommerce Scope:\n• Store Model: ${scope.type}\n• Estimated Timeline: ${scope.estimatedDays}\n• Recommended Stack: ${scope.tech}\n• Critical Capabilities:\n  - ${scope.features.join("\n  - ")}`
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Required Information Missing",
        text: "Please provide your name, business email, and phone number.",
        confirmButtonColor: "#10b981"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("service", `eCommerce: ${formData.storeType}`);
      data.append(
        "message",
        `Store Model: ${formData.storeType}\nEstimated Budget: ${formData.budget.trim() || "Not provided"}\nProject Brief: ${formData.brief || "Not provided"}`
      );

      const res = await submitContactForm(data);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "eCommerce Requirements Received!",
          text: "Thank you! Our eCommerce architects are reviewing your specifications and will connect with you within 24 hours.",
          confirmButtonColor: "#10b981"
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          storeType: "Shopify Plus Store",
          budget: "",
          brief: ""
        });
      } else {
        throw new Error(res.message || "Failed to submit eCommerce requirements.");
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: err?.message || "Something went wrong. Please try calling us directly.",
        confirmButtonColor: "#10b981"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white overflow-x-clip">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#eefaf3] via-[#f7fcf9] to-white relative overflow-hidden border-b border-emerald-100">
        {/* Animated Commerce Canvas */}
        <EcommerceTechCanvas />

        {/* Ambient Radial Lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-emerald-200/50 via-teal-200/30 to-emerald-100/40 blur-3xl rounded-full -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-25 -z-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-white/90 backdrop-blur-md border border-emerald-300 rounded-full shadow-xs max-w-full"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#10b981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-black text-emerald-800 tracking-wider uppercase truncate">
                ENTERPRISE ECOMMERCE AGENCY
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full shrink-0">
                SHOPIFY PLUS • HEADLESS NEXT.JS • WOOCOMMERCE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              Storefronts Engineered to{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent block sm:inline">
                Maximize Online Revenue
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto"
            >
              We build custom Shopify Plus, WooCommerce, and headless Next.js commerce platforms designed for sub-second page loads, frictionless 1-click checkouts, and maximum average order value.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto hidden sm:block"
            >
              From ambitious direct-to-consumer (D2C) brands to complex B2B wholesale marketplaces, our commerce architects eliminate cart drop-off and ensure seamless ERP, payment, and 3PL logistics synchronization.
            </motion.p>

            <div className="pt-1 font-bold text-xs sm:text-sm tracking-wider uppercase text-emerald-700">
              Build Your Store. Scale Your Revenue.
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <button
                onClick={() => openEnquiryModal("eCommerce Hero Consultation")}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request eCommerce Consultation</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#project-form"
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border-2 border-slate-200 hover:border-emerald-400 transition-all shadow-sm flex items-center justify-center"
              >
                Configure Store Scope
              </a>
            </motion.div>
          </div>

          {/* Interactive eCommerce Showcase Centerpiece */}
          <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
            <EcommerceHeroShowcase />
          </div>

          {/* Web Proof Metrics */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">Growth</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Revenue Growth Strategy</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">&lt; 0.3s</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Product Page Load Speed</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">100%</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">PCI-DSS Payment Security</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">-42%</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Cart Abandonment Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Complete eCommerce Solutions (Bento Grid) */}
      <section className="py-14 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              COMMERCE CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise eCommerce Solutions Engineered for Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From launch to high-volume multi-channel fulfillment, our engineering keeps your store fast, stable, and profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group p-6 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-full blur-xl transition-all pointer-events-none" />
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-emerald-500 group-hover:text-white text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-950 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {feat.desc}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {feat.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <Check size={14} className="text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/80 inline-block">
                      {feat.deliverable}
                    </span>
                    <ArrowRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: The Commerce Advantage (Comparison) */}
      <EcommerceArchitectureComparison />

      {/* Section 4: Why Choose HiveRift for eCommerce? (8 Pillars) */}
      <section className="py-14 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              WHY CHOOSE OUR ECOMMERCE ARCHITECTURE?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for High-Conversion Commercial Velocity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              A high-performing store requires more than pleasant product photography. We engineer checkout mechanics, payment resilience, and cloud caching for measurable revenue growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {commercePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: 6-Stage Methodology Timeline */}
      <EcommerceProcessTimeline />

      {/* Section 6: Technologies We Work With */}
      <section className="py-14 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              SUPPORTED COMMERCE PLATFORMS & APIS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Commerce Stacks & Integrations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We select platforms and APIs based on your SKU volume, multi-currency needs, warehouse workflows, and long-term scaling strategy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((t, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-colors"
              >
                <div className="text-base font-bold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Custom Headless Engineering with Live Terminal */}
      <EcommerceLiveTerminal />

      {/* Section 8: Interactive eCommerce Scope Estimator */}
      <EcommerceScopeEstimator onSelectScope={handleScopeConfigured} />

      {/* Regional eCommerce Engineering Hub (Delhi NCR & Noida) */}
      <section className="py-16 lg:py-20 bg-[#03241b] text-white border-y border-[#064232] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase mb-3">
              <MapPin size={13} />
              <span>Delhi NCR & Noida eCommerce Hub</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">eCommerce Website Development Company</span> in Delhi & Noida
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              HiveRift powers high-growth online retail brands across Delhi NCR with conversion-engineered Shopify Plus stores, custom WooCommerce setups, and headless Next.js Commerce storefronts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#063326]/80 border border-emerald-800/80 hover:border-emerald-500/60 transition-all">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                #ecommerce_website_development_delhi
              </div>
              <h3 className="text-lg font-bold text-white mb-2">eCommerce Website Development Delhi</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Full-funnel digital storefronts built for D2C brands in South Delhi, Connaught Place, and Aerocity with sub-second page loads and localized Indian payment gateways (UPI, Razorpay, Cashfree).
              </p>
              <div className="text-xs font-mono text-emerald-300 font-bold">1-Click Checkout • Campaign Analytics</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#063326]/80 border border-emerald-800/80 hover:border-emerald-500/60 transition-all">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                #ecommerce_website_development_noida
              </div>
              <h3 className="text-lg font-bold text-white mb-2">eCommerce Website Development Company Noida</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Serving fast-scaling retailers across Noida Sector 62 and Expressway with omnichannel inventory sync, automated ERP invoice generation, and custom B2B wholesale portals.
              </p>
              <div className="text-xs font-mono text-emerald-300 font-bold">Omnichannel ERP • Warehouse Sync</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#063326]/80 border border-emerald-800/80 hover:border-emerald-500/60 transition-all">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                #custom_ecommerce_delhi
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Custom eCommerce Website Development Delhi</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Headless Next.js 15 & Shopify Storefront API architectures engineered for high-concurrency flash sales, bespoke product configurators, and 99.99% uptime.
              </p>
              <div className="text-xs font-mono text-emerald-300 font-bold">Headless Next.js • Zero Vendor Lock-in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Ready to Build Your Next eCommerce Store? (Project Requirements Form) */}
      <section id="project-form" className="py-14 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              READY TO SCALE YOUR ONLINE STORE?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Build an eCommerce Engine That Converts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you are launching a new direct-to-consumer brand, migrating from a legacy platform, or building a headless storefront, our technical architects will structure your roadmap.
            </p>
            <p className="text-xs sm:text-sm font-bold text-emerald-700">
              Submit your store specifications below for an instant scoping call within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <FileCheck2 size={20} className="text-emerald-600" />
              <span>eCommerce Project Requirements</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Commerce Store Model
                  </label>
                  <select
                    name="storeType"
                    value={formData.storeType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  >
                    <option value="Shopify Plus Store">Shopify Plus Storefront</option>
                    <option value="Headless Next.js Commerce">Headless Next.js 15 Commerce</option>
                    <option value="WooCommerce Custom Platform">WooCommerce Custom Store</option>
                    <option value="B2B Wholesale Portal">B2B Wholesale / Marketplace Portal</option>
                    <option value="Store Migration / Redesign">Store Migration / Checkout Upgrade</option>
                    <option value="Custom Mobile Commerce App">Custom Mobile Commerce App</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Budget (Optional)
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Enter your estimated budget"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Brief & Desired Capabilities
                </label>
                <textarea
                  name="brief"
                  rows={4}
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder="Tell us about your product catalog, current monthly orders, target payment gateways, or existing store URL..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Store Scope...</span>
                  ) : (
                    <>
                      <span>Submit eCommerce Scope</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 10: eCommerce FAQs */}
      <FAQ items={ecommerceFaqs} />

      <Footer />
    </div>
  );
}

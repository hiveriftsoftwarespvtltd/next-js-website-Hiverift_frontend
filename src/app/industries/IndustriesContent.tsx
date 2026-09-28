"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Factory,
  Utensils,
  Plane,
  Landmark,
  Briefcase,
  Rocket,
  CheckCircle2,
  Globe,
  Code2,
  Smartphone,
  Layout,
  TrendingUp,
  Layers,
  Phone,
  MessageCircle,
  ShieldCheck,
  Check
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { COMPANY_METRICS } from "@/app/config/companyMetrics";
import Link from "next/link";

interface IndustryItem {
  icon: any;
  title: string;
  subtitle: string;
  desc: string;
  keySolutions: string[];
  complianceNotice?: string;
  ctaText: string;
  href: string;
  badge: string;
}

const industries: IndustryItem[] = [
  {
    icon: Building2,
    title: "Real Estate & Property",
    subtitle: "Turn Property Searches Into Qualified Opportunities",
    badge: "Real Estate Tech",
    desc: "Build a stronger digital presence with property websites, listing portals, lead management systems, CRM integrations, and automated follow-ups designed for real estate businesses.",
    keySolutions: [
      "Property listing & search portals",
      "Real estate website development",
      "Lead management & CRM integration",
      "WhatsApp lead automation",
      "Property enquiry & callback systems",
      "SEO & performance marketing"
    ],
    ctaText: "Explore Real Estate Solutions",
    href: "/industries/real-estate"
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    subtitle: "Make Travel Booking Simpler From Search to Confirmation",
    badge: "Hospitality & Booking",
    desc: "Create seamless digital experiences for travel agencies, tour operators, hotels, and hospitality businesses with booking platforms, API integrations, customer portals, and automated communication.",
    keySolutions: [
      "Travel booking websites & portals",
      "Hotel & tour booking systems",
      "Flight & hotel API integration",
      "Online payment integration",
      "Customer booking dashboards",
      "Automated booking notifications"
    ],
    ctaText: "Explore Travel Solutions",
    href: "/industries/hospitality"
  },
  {
    icon: ShoppingBag,
    title: "Retail & eCommerce",
    subtitle: "Build an Online Store Designed to Convert",
    badge: "eCommerce & D2C",
    desc: "From single-brand stores to multi-vendor marketplaces, HiveRift develops scalable eCommerce experiences that make product discovery, checkout, payments, and order management easier.",
    keySolutions: [
      "Custom eCommerce development",
      "WooCommerce & Shopify solutions",
      "Marketplace development",
      "Payment gateway integration",
      "Inventory & order management",
      "WhatsApp & CRM integration"
    ],
    ctaText: "Explore eCommerce Solutions",
    href: "/industries/retail"
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    subtitle: "Digitize Operations, Orders & Business Workflows",
    badge: "Industrial & ERP",
    desc: "Replace manual processes with connected digital systems for manufacturers, distributors, suppliers, and industrial businesses.",
    keySolutions: [
      "Custom ERP development",
      "Inventory & stock management",
      "Dealer & distributor portals",
      "B2B ordering systems",
      "Quotation & RFQ automation",
      "Production & workflow management"
    ],
    ctaText: "Explore Manufacturing Solutions",
    href: "/industries/manufacturing"
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    subtitle: "Create Better Digital Learning Experiences",
    badge: "EdTech & LMS",
    desc: "Build modern platforms for schools, institutes, coaching centers, universities, trainers, and online education businesses.",
    keySolutions: [
      "Learning management systems",
      "Student & teacher portals",
      "Online course platforms",
      "Live & recorded classes",
      "Online examination systems",
      "Admission & fee management"
    ],
    ctaText: "Explore Education Solutions",
    href: "/industries/education"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    subtitle: "Build Connected Digital Experiences for Healthcare",
    badge: "HealthTech & Telehealth",
    desc: "Help patients discover services, book appointments, communicate with providers, and access information through secure and user-friendly digital platforms.",
    keySolutions: [
      "Healthcare website development",
      "Doctor & clinic appointment systems",
      "Patient portals",
      "Telemedicine platforms",
      "Lab & report portals",
      "Appointment & WhatsApp automation"
    ],
    ctaText: "Explore Healthcare Solutions",
    href: "/industries/healthcare"
  },
  {
    icon: Landmark,
    title: "Finance & Financial Services",
    subtitle: "Build Secure Digital Experiences for Financial Businesses",
    badge: "FinTech & Banking",
    desc: "Develop professional websites, customer portals, calculators, dashboards, and business applications tailored to financial service workflows.",
    complianceNotice: "Compliance requirements are evaluated according to the specific project, jurisdiction, and technology scope.",
    keySolutions: [
      "Financial service websites",
      "Loan & EMI calculators",
      "Customer dashboards",
      "Lead & application management",
      "CRM integrations",
      "Business process automation"
    ],
    ctaText: "Explore Finance Solutions",
    href: "/industries/finance"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    subtitle: "Turn Your Expertise Into a Strong Digital Business",
    badge: "Corporate & Advisory",
    desc: "From law firms and consultants to agencies, accounting firms, and corporate service providers, HiveRift creates digital experiences that build credibility and generate enquiries.",
    keySolutions: [
      "Corporate website development",
      "Lead generation systems",
      "CRM integration",
      "Appointment booking",
      "Client portals",
      "SEO & digital marketing"
    ],
    ctaText: "Explore Professional Services",
    href: "/industries/professional-services"
  },
  {
    icon: Utensils,
    title: "Restaurants & Food Businesses",
    subtitle: "Give Customers a Direct Way to Order",
    badge: "Food & Hospitality",
    desc: "Create digital ordering experiences that help restaurants, cafés, cloud kitchens, and food brands connect directly with their customers.",
    keySolutions: [
      "Restaurant website development",
      "Online food ordering",
      "Digital menus",
      "Table reservation systems",
      "POS integration",
      "Local SEO & digital marketing"
    ],
    ctaText: "Explore Restaurant Solutions",
    href: "/industries/food-restaurant"
  },
  {
    icon: Rocket,
    title: "Startups & Emerging Businesses",
    subtitle: "From Business Idea to Launch-Ready Product",
    badge: "MVP & SaaS",
    desc: "Turn your concept into a working digital product with strategy, UI/UX, development, testing, deployment, and ongoing support.",
    keySolutions: [
      "MVP development",
      "SaaS application development",
      "Startup websites",
      "Mobile app development",
      "API & third-party integrations",
      "Cloud-ready application architecture"
    ],
    ctaText: "Explore Startup Solutions",
    href: "/industries/startups"
  }
];

const growthCapabilities = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Corporate websites, portals, eCommerce and custom web applications."
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Business software, ERP, CRM, dashboards and workflow automation."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and iOS applications designed around your customers and operations."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Conversion-focused interfaces designed for usability, trust and engagement."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, Google Ads, Meta Ads, social media and lead-generation campaigns."
  },
  {
    icon: Layers,
    title: "Automation & Integrations",
    desc: "Connect your CRM, WhatsApp, payment gateways, APIs and business tools."
  }
];

const whyChooseHiveRift = [
  {
    number: "01",
    title: "Business-First Approach",
    desc: "We start with your business objectives, users and processes—not just technology."
  },
  {
    number: "02",
    title: "Custom-Built Solutions",
    desc: "Your platform is designed around your requirements instead of forcing your business into a generic template."
  },
  {
    number: "03",
    title: "Technology + Marketing",
    desc: "Development and marketing work together to create a stronger path from traffic → enquiry → customer."
  },
  {
    number: "04",
    title: "Scalable Architecture",
    desc: "Build today with the flexibility to add features, users, integrations and new business workflows as you grow."
  },
  {
    number: "05",
    title: "One Technology Partner",
    desc: "Strategy, design, development, deployment, maintenance and digital marketing under one team."
  }
];

export default function IndustriesContent() {
  const scrollToSolutions = () => {
    const el = document.getElementById("industry-solutions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-[#f4fcf7] via-white to-white relative overflow-hidden border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
                Sector-Specific Digital Architecture
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
              Industry-Specific{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
                Digital Solutions
              </span>
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
              Technology Built Around the Way Your Business Works
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Every industry has different customers, processes, challenges, and growth opportunities.{" "}
              <strong className="text-slate-900 font-semibold">
                HiveRift builds digital solutions around those realities
              </strong>
              —from high-converting websites and eCommerce platforms to custom software, mobile apps, ERP, CRM, automation, SEO, and digital marketing.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Whether you're launching a new business, modernizing existing systems, or scaling your digital operations, we combine{" "}
              <strong className="text-slate-900 font-semibold">strategy, design, technology, and marketing</strong> to create solutions that support measurable business growth.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToSolutions}
                className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/case-studies"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-emerald-300 transition-all shadow-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Approved company metrics */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {COMPANY_METRICS.map((metric) => (
              <div key={metric.label} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">{metric.value}{metric.suffix}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Digital Solutions for Your Industry Grid */}
      <section id="industry-solutions" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-3.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Tailored Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Digital Solutions for Your Industry
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore how HiveRift helps businesses solve industry-specific challenges with modern websites, software, automation, and digital marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-9 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/70 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Icon size={24} className="stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-bold text-emerald-800 px-3.5 py-1 bg-emerald-100/70 rounded-full border border-emerald-200">
                        {ind.badge}
                      </span>
                    </div>

                    {/* Title & Subheading */}
                    <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-sm font-bold text-emerald-700 mb-3.5">
                      {ind.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {ind.desc}
                    </p>

                    {/* Key Solutions List */}
                    <div className="pt-5 border-t border-slate-200/70 mb-6">
                      <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                        Key Solutions
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {ind.keySolutions.map((sol, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance Note if applicable */}
                    {ind.complianceNotice && (
                      <div className="mb-6 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs italic leading-relaxed">
                        * {ind.complianceNotice}
                      </div>
                    )}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={ind.href}
                    className="w-full py-3 px-5 rounded-2xl bg-white border border-slate-200 group-hover:border-emerald-500 text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-all flex items-center justify-between shadow-sm group-hover:bg-emerald-50/30"
                  >
                    <span>{ind.ctaText} →</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform text-emerald-600" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* More Than a Website. A Complete Digital Growth System. */}
      <section className="py-16 lg:py-24 bg-[#f8fcf9] border-y border-emerald-100 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100/90 border border-emerald-300 rounded-full mb-3.5 text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Comprehensive Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              More Than a Website. A Complete Digital Growth System.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Your industry may be different, but the objective is the same:{" "}
              <strong className="text-slate-900 font-semibold">
                build technology that helps your business operate better and grow faster.
              </strong>{" "}
              HiveRift brings multiple capabilities under one team:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {growthCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon size={22} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose HiveRift */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              The HiveRift Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Choose HiveRift
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A unified technology and marketing partner built for long-term commercial impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChooseHiveRift.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="text-2xl font-black text-emerald-600 font-mono mb-3">
                    {item.number}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Have a Specific Industry Requirement? Consultation Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-900/60 px-4 py-1.5 rounded-full border border-emerald-700/60">
              Have a Specific Industry Requirement?
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Let's Build the Right Digital Solution for Your Business
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Tell us about your industry, business model, current challenges, and what you want to build. Our team will help you define the right technology, features, integrations, and development roadmap.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiryModal("Industries Requirement - Free Consultation")}
                className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Request Free Consultation
              </button>
              
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all hover:scale-105"
              >
                Talk to HiveRift
              </Link>
            </div>

            {/* Quick Discussion Strip */}
            <div className="pt-8 border-t border-slate-800/80 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">Need a quick discussion?</span>
              <a
                href="tel:+918814930229"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-medium text-white"
              >
                <Phone size={15} className="text-emerald-400" />
                <span>Call: +91 88149 30229</span>
              </a>
              <a
                href="https://wa.me/918814930229?text=Hi%20HiveRift%2C%20I%20would%20like%20to%20discuss%20a%20digital%20solution%20for%20my%20industry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-medium text-white"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp: Chat with HiveRift</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

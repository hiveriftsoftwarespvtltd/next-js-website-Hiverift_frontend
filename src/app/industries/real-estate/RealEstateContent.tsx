"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Building2,
  Database,
  MessageCircle,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronDown,
  Layers,
  Users,
  Search,
  Check,
  ShieldCheck,
  MapPin,
  Calendar,
  Sparkles,
  PhoneCall,
  ArrowUpRight
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import { slugifyKeyword } from "@/app/data/realEstateKeywordsData";

const realEstateSolutions = [
  {
    icon: Globe,
    title: "Real Estate Website Development",
    desc: "Build a professional website for your real estate company, project or property business.",
    href: "/services/web-development",
    cta: "Explore Website Development",
    items: [
      "Corporate real estate websites",
      "Builder & developer websites",
      "Project websites",
      "Property showcase websites",
      "Lead enquiry forms",
      "WhatsApp integration",
      "Mobile-responsive design",
      "SEO-friendly structure"
    ]
  },
  {
    icon: Building2,
    title: "Property Listing Portals",
    desc: "Create a property platform where customers can easily discover and enquire about properties.",
    href: "/services/software-development",
    cta: "Explore Property Portals",
    items: [
      "Property listings",
      "Property categories",
      "Search & filters",
      "Location-based listings",
      "Property detail pages",
      "Image & video galleries",
      "Enquiry forms",
      "Admin management"
    ]
  },
  {
    icon: Database,
    title: "Real Estate CRM & Lead Management",
    desc: "Connect your website and marketing channels with your sales process.",
    href: "/services/software-development",
    cta: "Explore CRM Solutions",
    items: [
      "Lead capture",
      "Lead management",
      "Lead assignment",
      "Follow-up tracking",
      "Lead status management",
      "CRM integration",
      "Sales team notifications",
      "Lead source tracking"
    ]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Lead Automation",
    desc: "Connect your real estate enquiries with WhatsApp to improve communication with potential buyers.",
    href: "/contact",
    cta: "Explore WhatsApp Solutions",
    items: [
      "WhatsApp enquiry integration",
      "Automated responses",
      "Brochure sharing",
      "Property information",
      "Lead notifications",
      "Follow-up messages",
      "Site visit communication"
    ]
  },
  {
    icon: Search,
    title: "Real Estate SEO",
    desc: "Improve your visibility when potential customers search for properties, projects and real estate services online.",
    href: "/services/digital-marketing",
    cta: "Explore SEO Services",
    items: [
      "Local SEO",
      "Property SEO",
      "Project SEO",
      "Location-based landing pages",
      "Google Business optimization",
      "Technical SEO",
      "Content strategy",
      "Search performance tracking"
    ]
  },
  {
    icon: Target,
    title: "Google & Meta Advertising",
    desc: "Generate targeted enquiries for your properties and projects through paid digital campaigns.",
    href: "/services/digital-marketing",
    cta: "Explore Digital Marketing",
    items: [
      "Google Search Ads",
      "Google Display & Remarketing",
      "Meta Ads",
      "Project campaigns",
      "Lead generation campaigns",
      "Landing pages",
      "Conversion tracking",
      "Campaign reporting"
    ]
  }
];

const targetSegments = [
  {
    title: "Real Estate Developers",
    desc: "Project websites, property presentation, lead generation and digital marketing."
  },
  {
    title: "Builders",
    desc: "Project websites, property listings, enquiries and customer communication."
  },
  {
    title: "Property Brokers",
    desc: "Property listing websites, lead management, CRM and marketing."
  },
  {
    title: "Real Estate Consultants",
    desc: "Professional websites, lead generation, WhatsApp and SEO."
  },
  {
    title: "Property Projects",
    desc: "Dedicated project websites, landing pages, enquiry systems and campaign support."
  }
];

const integratedTools = [
  { name: "LeadSquared", desc: "CRM & Lead Management" },
  { name: "Salesforce", desc: "CRM" },
  { name: "Zoho CRM", desc: "Lead Management" },
  { name: "HubSpot", desc: "Marketing & CRM" },
  { name: "WhatsApp Business / Meta Cloud API", desc: "Customer Communication" },
  { name: "Google Maps", desc: "Property Locations" },
  { name: "Exotel / Twilio", desc: "Call & Callback Solutions" },
  { name: "Razorpay / Stripe", desc: "Online Payments" }
];

const developmentProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We understand your business, properties, target customers and requirements."
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the website, portal, CRM and marketing structure."
  },
  {
    step: "03",
    title: "Design",
    desc: "We create the user experience and visual design."
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our team develops and integrates the required solutions."
  },
  {
    step: "05",
    title: "Test & Launch",
    desc: "We test the website, forms, integrations and lead flow before launch."
  },
  {
    step: "06",
    title: "Grow",
    desc: "We support SEO, digital marketing, maintenance and ongoing improvements."
  }
];

const whyHiveRift = [
  {
    title: "Industry-Focused Solutions",
    desc: "Technology designed around real estate businesses and their customer journeys."
  },
  {
    title: "Custom Development",
    desc: "We build according to your business requirements instead of forcing you into a generic template."
  },
  {
    title: "Lead-Focused",
    desc: "Websites and campaigns designed to generate and manage genuine business enquiries."
  },
  {
    title: "Connected Systems",
    desc: "Website, CRM, WhatsApp, advertising and analytics can work together."
  },
  {
    title: "Ongoing Support",
    desc: "Development, maintenance, SEO and digital marketing support from one technology partner."
  }
];

const realEstateFaq = [
  {
    question: "Can HiveRift build a website for a real estate project?",
    answer: "Yes. We develop project websites for builders, developers, brokers and real estate companies."
  },
  {
    question: "Can you build a property listing website?",
    answer: "Yes. We can develop property listing websites with categories, search, filters, property details, enquiry forms and admin management."
  },
  {
    question: "Can you integrate our CRM?",
    answer: "Yes. Depending on the available API or webhook capabilities, we can integrate systems such as LeadSquared, Salesforce, Zoho CRM and HubSpot."
  },
  {
    question: "Can you connect our website with WhatsApp?",
    answer: "Yes. We can integrate WhatsApp Business/Meta Cloud API solutions for enquiries, notifications, property information and follow-up workflows."
  },
  {
    question: "Do you provide SEO and Google Ads?",
    answer: "Yes. HiveRift provides SEO, Google Ads, Meta Ads, landing pages and conversion tracking for real estate businesses."
  }
];

const REAL_ESTATE_HUBS = [
  {
    city: "Gurgaon / Gurugram",
    badge: "DLF Cyber City & Golf Course Rd",
    areas: "DLF Cyber City, Golf Course Road, Sohna Road, Dwarka Expressway, New Gurgaon, Sector 29",
    focus: "Luxury condominium launch portals, high-ticket NRI investor lead funnels, broker multi-listing networks & automated site visit scheduling.",
    href: "/locations/website-development-company-in-gurgaon",
    keyword: "Real Estate Web Development Gurgaon"
  },
  {
    city: "Noida & Greater Noida",
    badge: "Expressway & Sector 62",
    areas: "Sector 62, Sector 18, Sector 132, Noida-Greater Noida Expressway, Yamuna Expressway, Knowledge Park",
    focus: "High-volume residential project portals, builder launch landing pages, RERA compliance displays, automated WhatsApp notifications & LeadSquared CRM sync.",
    href: "/locations/website-development-company-in-noida",
    keyword: "Property Portal Development Noida"
  },
  {
    city: "Delhi & South Delhi",
    badge: "Connaught Place & South Ext.",
    areas: "Connaught Place, South Extension, Dwarka, Saket, Nehru Place, Okhla, Aerocity, Vasant Kunj",
    focus: "Boutique residential brokerages, commercial leasing platforms, institutional advisory websites & hyper-targeted local Google 3-Pack SEO.",
    href: "/locations/web-development-company-in-delhi",
    keyword: "Real Estate Website Development Delhi"
  },
  {
    city: "Pan-NCR & Global PropTech",
    badge: "Faridabad, Ghaziabad & NRI Channels",
    areas: "Faridabad, Ghaziabad, Pan-India & Global NRI investor markets (Dubai, Singapore, USA, UK)",
    focus: "Multi-currency property discovery portals, international NRI buyer WhatsApp routing, virtual 3D tour integrations & cloud real estate ERP systems.",
    href: "/locations",
    keyword: "Real Estate Technology Solutions"
  }
];

const REAL_ESTATE_KEYWORDS = [
  "Real Estate Website Development in Delhi",
  "Real Estate Web Design Company in Gurgaon",
  "Property Portal Development Company in Noida",
  "Real Estate CRM Integration Delhi NCR",
  "Builder Website Development Company Gurgaon",
  "Real Estate Website Developer in Noida",
  "Property Listing Website Development Delhi",
  "Luxury Real Estate Website Design Gurgaon",
  "Real Estate Lead Automation Agency Delhi NCR",
  "RERA Compliant Real Estate Website Development",
  "Real Estate SEO Company Delhi NCR",
  "Real Estate Digital Marketing Agency Gurgaon",
  "WhatsApp Lead Automation for Real Estate Noida",
  "Real Estate Website Development in Cyber City Gurgaon",
  "Real Estate Website Developer in Sector 62 Noida",
  "Real Estate Website Development in South Delhi",
  "Real Estate Web Design Agency Golf Course Road",
  "Real Estate Portal Development Dwarka Delhi",
  "Commercial Real Estate Website Development Noida",
  "Real Estate CRM Software Company Delhi NCR",
  "Custom Property Search Portal Development",
  "Real Estate Lead Generation Website Delhi",
  "Real Estate Landing Page Design Gurgaon",
  "Broker CRM Integration Noida",
  "PropTech Software Development Delhi",
  "Property Management Portal Development Noida",
  "Real Estate Marketing Automation Delhi NCR",
  "Real Estate Web Development Agency Gurgaon",
  "Apartment Booking Portal Development",
  "Real Estate Listing Platform Delhi",
  "Real Estate Mobile App Development Delhi NCR",
  "Villa & Township Project Website Design",
  "Real Estate Broker Website Noida",
  "Builder Project Launch Landing Page",
  "Real Estate Lead Funnel Agency Delhi",
  "Commercial Leasing Portal Development",
  "Real Estate Speed Optimization Delhi NCR",
  "Next.js Real Estate Portal Development",
  "Real Estate Google Ads & SEO Agency",
  "Property Valuation Tool Development",
  "Site Visit Booking Automation Real Estate",
  "Property Agent Portal Development Gurgaon",
  "Real Estate Web Development Company in Delhi",
  "Real Estate Web Development Company in Gurgaon",
  "Real Estate Web Development Company in Noida",
  "Real Estate Web Development Company Delhi NCR",
  "Best Real Estate Web Developers Near Me"
];

const getKeywordHref = (keyword: string) => {
  return `/industries/real-estate/${slugifyKeyword(keyword)}`;
};

export default function RealEstateContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [brochureRequested, setBrochureRequested] = useState(false);
  const [keywordFilter, setKeywordFilter] = useState("");

  const filteredKeywords = REAL_ESTATE_KEYWORDS.filter((kw) =>
    kw.toLowerCase().includes(keywordFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#f4fcf7] via-white to-white relative overflow-hidden border-b border-slate-200/80">
        
        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Commercial Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                </span>
                <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
                  Technology Built for Property Businesses
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
                Real Estate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
                  Technology Solutions
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                Digital Solutions Built for Real Estate Businesses
              </h2>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                HiveRift helps real estate developers, builders, brokers and property businesses build a stronger digital presence and manage their online leads with websites, portals, CRM integrations and digital marketing solutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => openEnquiryModal("Real Estate Proposal Request")}
                  className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request a Real Estate Proposal</span>
                  <ArrowRight size={16} />
                </button>

                <Link
                  href="/case-studies"
                  className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-emerald-300 transition-all shadow-sm"
                >
                  View Our Work
                </Link>
              </div>

              {/* Direct Connect Strip */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-semibold">
                <a href="tel:+918814930229" className="flex items-center gap-2 hover:text-emerald-700">
                  <Phone size={15} className="text-emerald-600" />
                  <span>Call: +91 88149 30229</span>
                </a>
                <span>•</span>
                <a 
                  href="https://wa.me/918814930229?text=Hi%20HiveRift%2C%20I%20want%20to%20discuss%20a%20real%20estate%20digital%20solution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-700 text-emerald-700 font-bold"
                >
                  <MessageCircle size={15} className="text-emerald-600" />
                  <span>WhatsApp: Chat with HiveRift</span>
                </a>
              </div>

            </div>

            {/* Right Column: Commercial Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-7 space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-emerald-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Our Real Estate Capabilities
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold border border-emerald-200">
                    Full Suite
                  </span>
                </div>

                {/* 4 Capabilities List */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-emerald-700">Websites</div>
                      <div className="text-sm font-bold text-slate-900">Real Estate Websites</div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400" />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-emerald-700">Portals</div>
                      <div className="text-sm font-bold text-slate-900">Property Listing Portals</div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400" />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-emerald-700">CRM</div>
                      <div className="text-sm font-bold text-slate-900">Lead Management & CRM Integration</div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400" />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-emerald-700">WhatsApp</div>
                      <div className="text-sm font-bold text-slate-900">WhatsApp Lead Automation</div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400" />
                  </div>
                </div>

                {/* Interactive Consultation CTA Card */}
                <div className="pt-2">
                  <button
                    onClick={() => openEnquiryModal("Real Estate Quick Consultation")}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Discuss Your Project with HiveRift</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* 4 Suggested Hero Stats Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <div className="text-sm font-bold text-emerald-700 font-mono uppercase tracking-wider">Web Development</div>
              <div className="text-base font-extrabold text-slate-900 mt-1">Custom Real Estate Websites</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <div className="text-sm font-bold text-emerald-700 font-mono uppercase tracking-wider">Property Portals</div>
              <div className="text-base font-extrabold text-slate-900 mt-1">Listing & Search Solutions</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <div className="text-sm font-bold text-emerald-700 font-mono uppercase tracking-wider">CRM Integration</div>
              <div className="text-base font-extrabold text-slate-900 mt-1">Connected Lead Management</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <div className="text-sm font-bold text-emerald-700 font-mono uppercase tracking-wider">Digital Marketing</div>
              <div className="text-base font-extrabold text-slate-900 mt-1">SEO, Google & Meta Ads</div>
            </div>
          </div>

        </div>
      </section>

      {/* Real Estate Solutions by HiveRift */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Full Spectrum Services
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Estate Solutions by HiveRift
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Everything You Need to Build and Grow Your Real Estate Business Online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateSolutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    {/* Header Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon size={22} className="stroke-[2.2]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {solution.desc}
                    </p>

                    {/* Bullet Points */}
                    <div className="pt-4 border-t border-slate-200/70 mb-6">
                      <ul className="space-y-2">
                        {solution.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={solution.href}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 group-hover:border-emerald-500 text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-all flex items-center justify-between shadow-sm"
                  >
                    <span>{solution.cta} →</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-600" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Built Around Your Real Estate Business */}
      <section className="py-16 lg:py-24 bg-[#f8fcf9] border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100/90 border border-emerald-300 rounded-full mb-3 text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Target Segments
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Built Around Your Real Estate Business
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Choose the Solution You Need
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {targetSegments.map((segment, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-sm flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {segment.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Connect Your Existing Tools */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Connected Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Connect Your Existing Tools
            </h2>
            <p className="mt-2 text-lg font-bold text-emerald-700">
              HiveRift Integrates Your Digital Sales Ecosystem
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We can connect your website and lead-generation systems with the tools your business already uses.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {integratedTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#fafcfb] border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-emerald-300 hover:bg-white transition-all"
              >
                <div className="text-sm font-bold text-slate-900 leading-snug">{tool.name}</div>
                <div className="text-xs text-emerald-700 font-medium mt-1">{tool.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Real Estate Development Process */}
      <section className="py-16 lg:py-24 bg-[#f8fcf9] border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100/90 border border-emerald-300 rounded-full mb-3 text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Delivery Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Our Real Estate Development Process
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600">
              From Requirement to Launch
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((proc, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-3">
                    {proc.step} — {proc.title}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {proc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why HiveRift for Real Estate? */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-3 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              The HiveRift Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why HiveRift for Real Estate?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Bespoke digital architecture built to convert property searches into qualified inquiries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyHiveRift.map((why, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-black text-emerald-600 mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {why.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {why.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Real Estate Questions Answered
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clear answers to common questions about our real estate technology services.
            </p>
          </div>

          <div className="space-y-3.5">
            {realEstateFaq.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-600" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Regional Real Estate SEO & Local Delivery Hubs */}
      <section id="regional-real-estate-hubs" className="py-16 lg:py-24 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <MapPin size={13} className="text-emerald-600" />
              <span>Delhi NCR Real Estate Technology Hubs & Local Delivery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Real Estate Digital Solutions Tailored for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700">
                Delhi NCR, Gurgaon & Noida
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Real estate dynamics vary significantly across micro-markets. HiveRift delivers dedicated engineering, RERA-aligned website design, CRM integrations, and hyper-targeted lead generation across key NCR commercial and residential hubs.
            </p>
          </div>

          {/* 4 Regional Hubs Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {REAL_ESTATE_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {hub.badge}
                    </span>
                    <MapPin size={15} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {hub.city}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-3">
                    {hub.areas}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {hub.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={hub.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                  >
                    <span>Explore {hub.city.split(" ")[0]} Coverage</span>
                    <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Real Estate SEO Keywords Directory */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Search size={18} className="text-emerald-600" />
                  <span>Real Estate Search Terms & Specialized Solutions</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Click any verified query to explore our tailored technology capabilities and localized services.
                </p>
              </div>

              {/* Keyword Filter Bar */}
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter keywords (e.g. Gurgaon, CRM, Noida)..."
                  value={keywordFilter}
                  onChange={(e) => setKeywordFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Keyword Pills Cloud */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              {filteredKeywords.map((kw, i) => (
                <Link
                  key={i}
                  href={getKeywordHref(kw)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 hover:text-emerald-800 transition-all hover:scale-[1.02] group"
                >
                  <span>{kw}</span>
                  <ArrowUpRight size={11} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </Link>
              ))}
            </div>

            {filteredKeywords.length === 0 && (
              <div className="text-center py-8 text-xs text-slate-500">
                No keywords matching "{keywordFilter}". Try searching "Delhi", "Gurgaon", "CRM", or "Portal".
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
              <span>Showing {filteredKeywords.length} of {REAL_ESTATE_KEYWORDS.length} verified real estate search terms</span>
            </div>
          </div>

        </div>
      </section>

      {/* Have a Real Estate Project? Final Consultation (HiveRift Signature Light CTA) */}
      <section className="py-14 lg:py-18 bg-gradient-to-br from-[#e8f8f0] via-[#f4fbf7] to-[#e4f6ec] text-slate-900 relative overflow-hidden border-t border-emerald-200">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 bg-white/85 backdrop-blur-sm border-2 border-emerald-300/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-emerald-500/5">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full shadow-sm">
              <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
                Have a Real Estate Project?
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Let's Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
                Digital Real Estate Platform
              </span>
            </h2>

            <p className="text-base sm:text-[1.0625rem] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Whether you need a <strong className="text-slate-900 font-bold">real estate website, property portal, CRM integration, WhatsApp automation, SEO or digital marketing</strong>, HiveRift can help you build and grow your digital presence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => openEnquiryModal("Real Estate Project Consultation")}
                className="bg-[#10b981] hover:bg-[#059669] text-white font-black px-8 py-4 text-base rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Request Free Consultation
              </button>

              <a
                href="https://wa.me/918814930229?text=Hi%20HiveRift%2C%20I%20want%20to%20discuss%20a%20real%20estate%20digital%20solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-base font-bold shadow-xl shadow-green-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                <span>WhatsApp: Chat with HiveRift</span>
              </a>

              <a
                href="tel:+918814930229"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border-2 border-emerald-300 text-sm font-bold shadow-sm transition-all"
              >
                <Phone size={15} className="text-[#0284c7]" />
                <span>Call: +91 88149 30229</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs text-slate-600 font-mono font-medium border-t border-slate-100">
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 size={14} className="text-[#059669]" /> Direct Real Estate Tech Architect
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 size={14} className="text-[#059669]" /> RERA & CRM Compliant
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 size={14} className="text-[#059669]" /> 100% Code & Database Ownership
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 size={14} className="text-[#059669]" /> Sub-Second Mobile Speed
              </span>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

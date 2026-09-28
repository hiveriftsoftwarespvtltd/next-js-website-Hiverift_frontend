"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { EnquiryModal, openEnquiryModal } from "@/app/components/EnquiryModal";
import { submitContactForm } from "@/app/actions/contactActions";
import Swal from "sweetalert2";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ShoppingBag,
  ArrowLeft,
  Settings,
  Globe,
  Database,
  Plane,
  Building2,
  Phone,
  Truck,
  FileText,
  Search,
  Check,
  ShieldCheck,
  MapPin,
  Calendar,
  Sparkles,
  PhoneCall,
  ArrowUpRight,
  Cpu,
  Layers,
  FileCheck2,
  Send,
  User,
  Mail,
  Clock,
  Award,
  X
} from "lucide-react";
import { getFullIndustryDetails, FullIndustryDetails } from "@/app/data/industryDetailsFull";
import { slugifyKeyword } from "@/app/data/industryKeywordsData";

const getHubHref = (city: string) => {
  const c = city.toLowerCase();
  if (c.includes("gurgaon")) return "/locations/website-development-company-in-gurgaon";
  if (c.includes("noida")) return "/locations/website-development-company-in-noida";
  if (c.includes("delhi")) return "/locations/web-development-company-in-delhi";
  return "/locations";
};

export default function IndustryDetailClient() {
  const { industryId } = useParams();
  const router = useRouter();

  const id = Array.isArray(industryId) ? industryId[0] : (industryId as string);
  const data: FullIndustryDetails = getFullIndustryDetails(id || "healthcare");

  const [keywordFilter, setKeywordFilter] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    segment: data.targetSegments[0]?.title || "Enterprise Platform",
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Required Details Missing",
        text: "Please provide your name, business email, and phone number.",
        confirmButtonColor: "#10b981"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name.trim());
      formPayload.append("email", formData.email.trim());
      formPayload.append("phone", formData.phone.trim());
      formPayload.append("service", `Industry: ${data.title}`);
      formPayload.append(
        "message",
        `Industry: ${data.title}\nSector Segment: ${formData.segment}\nEstimated Budget: ${formData.budget.trim() || "Not provided"}\nBrief: ${formData.brief || "Direct industry scoping request."}`
      );

      const res = await submitContactForm(formPayload);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Proposal Request Received!",
          text: `Thank you! Our ${data.title} Solutions Architect will review your requirements and connect with you within 24 hours.`,
          confirmButtonColor: "#10b981"
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          segment: data.targetSegments[0]?.title || "Enterprise Platform",
          budget: "",
          brief: ""
        });
      } else {
        throw new Error(res.message || "Failed to submit request.");
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: err?.message || "Could not submit form right now. Please call or WhatsApp us directly.",
        confirmButtonColor: "#10b981"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredKeywords = data.searchTerms.filter((kw) =>
    kw.toLowerCase().includes(keywordFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section - Signature Light Mode with Architectural Grid */}
      <section className="pt-32 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#f4fcf7] via-white to-white relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Status Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/90 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                </span>
                <span>Sector Architecture • {data.title}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700 border border-slate-200">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>{data.badge}</span>
              </div>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Tailored Digital Solutions for{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                {data.title}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              {data.subtitle}
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiryModal(`${data.title} Scoping Call`)}
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request {data.title} Proposal</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#quote-form"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-emerald-300 transition-all shadow-sm"
              >
                Instant Scope & Cost Estimator
              </a>
            </div>
          </div>

          {/* Proof Metrics Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {data.proofMetrics.map((metric, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Specialized Sector Solutions Bento Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              SPECIALIZED CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bespoke Digital Solutions for {data.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Engineered from the ground up for high concurrency, industry compliance, sub-second latency, and commercial conversion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.specializedServices.map((service, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2">
                    {service.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                        <Check size={13} className="text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Target Segments (Who We Serve) */}
      <section className="py-16 lg:py-20 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              TARGET SEGMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who We Serve Across {data.title}
            </h2>
            <p className="text-sm text-slate-600">
              Sector-specific architectures tailored to distinct customer journeys and regulatory mandates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.targetSegments.map((seg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-400 transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Building2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {seg.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Operational Challenges vs HiveRift Solutions */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              SOLVING DOMAIN FRICTION
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Operational Challenges vs. HiveRift Engineering
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Replacing legacy bottlenecks, manual paperwork, and clunky templates with robust cloud-native systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.challengesVsSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-300 transition-colors space-y-4"
              >
                <div className="p-3 bg-red-50/80 rounded-xl border border-red-100 text-xs text-red-900 font-medium">
                  <span className="font-bold text-red-800 block uppercase tracking-wider text-[10px] mb-1">
                    Industry Challenge
                  </span>
                  {item.challenge}
                </div>
                <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-100 text-xs text-emerald-950 font-medium">
                  <span className="font-bold text-emerald-800 block uppercase tracking-wider text-[10px] mb-1">
                    HiveRift Solution
                  </span>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Technologies We Work With */}
      <section className="py-16 lg:py-20 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              TECHNOLOGY STACK
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Modern Full-Stack Technology Stack
            </h2>
            <p className="text-sm text-slate-600">
              Battle-tested frameworks that guarantee longevity, sub-second speed, and high concurrency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-400 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 mb-3">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1 bg-slate-50 text-slate-700 font-medium text-xs rounded-lg border border-slate-200/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Regional Delhi NCR & Global Coverage Hubs */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              REGIONAL COVERAGE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Localized Delivery Across Delhi NCR & Global Enterprise
            </h2>
            <p className="text-sm text-slate-600">
              Headquartered in New Delhi, we offer in-person scoping by appointment at our office and coordinate agile sprint delivery with your team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.regionalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200/90 flex flex-col justify-between hover:border-emerald-300 transition-all shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-slate-900">{hub.city}</span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                      {hub.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {hub.areas}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {hub.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-3">
                  <Link
                    href={getHubHref(hub.city)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                  >
                    <span>View {hub.city.split(" ")[0]} Hub</span>
                    <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Search Terms & Specialized Solutions Directory */}
      <section className="py-16 lg:py-20 bg-[#fafcfb] border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Search size={18} className="text-emerald-600" />
                  <span>{data.title} Search Terms & Specialized Solutions</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Explore tailored technology capabilities and localized solutions across Delhi NCR.
                </p>
              </div>

              {/* Keyword Filter Bar with Active Search Button */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (filteredKeywords.length > 0) {
                    router.push(`/industries/${id}/${slugifyKeyword(filteredKeywords[0])}`);
                  }
                }}
                className="flex items-center gap-2 w-full md:w-auto"
              >
                <div className="relative flex-1 min-w-[240px] sm:min-w-[300px]">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Filter keywords (e.g. Delhi, Portal, App)..."
                    value={keywordFilter}
                    onChange={(e) => setKeywordFilter(e.target.value)}
                    className="w-full pl-9 pr-9 py-2.5 text-xs rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400 font-medium"
                  />
                  {keywordFilter && (
                    <button
                      type="button"
                      onClick={() => setKeywordFilter("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X size={13} />
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs shadow-sm hover:shadow transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <Search size={12} />
                  <span>Search</span>
                </button>
              </form>
            </div>

            {/* Keyword Pills Cloud */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {filteredKeywords.map((kw, i) => (
                <Link
                  key={i}
                  href={`/industries/${id}/${slugifyKeyword(kw)}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 hover:text-emerald-800 transition-all hover:scale-[1.02] group"
                >
                  <span>{kw}</span>
                  <ArrowUpRight size={11} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </Link>
              ))}
            </div>

            {filteredKeywords.length === 0 && (
              <div className="text-center py-6 text-xs text-slate-500">
                No keywords matching "{keywordFilter}".
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
              <span>Showing {filteredKeywords.length} of {data.searchTerms.length} verified search terms</span>
              <Link
                href="/industries"
                className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
              >
                View All Industries Hub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Interactive Project Requirements & Scope Form */}
      <section id="quote-form" className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              PROJECT SCOPING & PROPOSAL
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Request a Project Proposal for {data.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Tell us about your organization, required integrations, and timeline. Our technical leads will deliver a complete scope analysis and fixed-cost quotation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <FileCheck2 size={20} className="text-emerald-600" />
              <span>Project Requirements: {data.title}</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-6">
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
                      placeholder="you@company.com"
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
                      placeholder="+91 00000 00000"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Sector Segment
                  </label>
                  <select
                    name="segment"
                    value={formData.segment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  >
                    {data.targetSegments.map((seg, idx) => (
                      <option key={idx} value={seg.title}>
                        {seg.title}
                      </option>
                    ))}
                    <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
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
                  Project Brief & Technical Requirements
                </label>
                <textarea
                  name="brief"
                  rows={4}
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder={`Tell us about your ${data.title} platform requirements, existing systems, or launch timeline...`}
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
                    <span>Submitting Requirements...</span>
                  ) : (
                    <>
                      <span>Submit Project Requirements</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 9: Frequently Asked Questions */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              INDUSTRY FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About {data.title}
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2.5">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Final Signature Consultation Banner */}
      <section className="py-14 lg:py-18 bg-gradient-to-br from-[#e8f8f0] via-[#f4fbf7] to-[#e4f6ec] text-slate-900 relative overflow-hidden border-t border-emerald-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="inline-block text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200">
              Ready to Transform Your {data.title} Operations?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
              Let's Build a High-Performance Digital Solution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Connect directly with our senior industry architects. We will audit your current workflows, provide a technical blueprint, and share a transparent milestone roadmap.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiryModal(`Consultation: ${data.title}`)}
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Book Free 30-Min Strategy Call
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-emerald-300 transition-all shadow-sm"
              >
                Contact HiveRift Team
              </Link>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
              <span>Direct Phone: <a href="tel:+918814930229" className="text-emerald-700 font-bold hover:underline">+91 88149 30229</a></span>
              <span>•</span>
              <a
                href="https://wa.me/918814930229?text=Hi%20HiveRift%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

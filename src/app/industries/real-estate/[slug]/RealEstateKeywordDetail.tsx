"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Code2,
  CheckCircle2,
  ArrowRight,
  Search,
  ShieldCheck,
  Zap,
  Sparkles,
  MapPin,
  Layers,
  Globe,
  Phone,
  Mail,
  User,
  FileCheck2,
  Send,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  Check,
  PhoneCall,
  Clock,
  Award
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FAQ } from "@/app/components/FAQ";
import { EnquiryModal, openEnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import Swal from "sweetalert2";
import { submitContactForm } from "@/app/actions/contactActions";
import {
  RealEstateKeywordData,
  REAL_ESTATE_KEYWORDS_LIST,
  slugifyKeyword
} from "@/app/data/realEstateKeywordsData";

interface Props {
  data: RealEstateKeywordData;
}

export default function RealEstateKeywordDetail({ data }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Residential & Commercial Projects",
    budget: "",
    brief: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keywordFilter, setKeywordFilter] = useState("");

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
      formPayload.append("service", `Real Estate: ${data.keyword}`);
      formPayload.append(
        "message",
        `Keyword Query: ${data.keyword}\nLocation: ${data.location}\nProperty Focus: ${formData.propertyType}\nEstimated Budget: ${formData.budget.trim() || "Not provided"}\nBrief: ${formData.brief || "Direct keyword page consultation request."}`
      );

      const res = await submitContactForm(formPayload);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Proposal Request Received!",
          text: `Thank you! Our Real Estate Tech Architect will review your requirements for "${data.keyword}" and share a tailored roadmap within 24 hours.`,
          confirmButtonColor: "#10b981"
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "Residential & Commercial Projects",
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

  const otherKeywords = REAL_ESTATE_KEYWORDS_LIST.filter(
    (kw) => kw.toLowerCase() !== data.keyword.toLowerCase()
  );

  const filteredOtherKeywords = otherKeywords.filter((kw) =>
    kw.toLowerCase().includes(keywordFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#f4fcf7] via-white to-white relative overflow-hidden border-b border-slate-200/80">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none -z-10" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-emerald-100/50 via-teal-100/40 to-emerald-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/industries" className="hover:text-emerald-700 transition-colors">
              Industries
            </Link>
            <ChevronRight size={12} />
            <Link href="/industries/real-estate" className="hover:text-emerald-700 transition-colors">
              Real Estate
            </Link>
            <ChevronRight size={12} />
            <span className="text-emerald-700 font-bold line-clamp-1 max-w-[280px] sm:max-w-none">
              {data.keyword}
            </span>
          </nav>

          <div className="max-w-4xl space-y-6">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                </span>
                <span>Real Estate Specialized Solution</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-700 border border-slate-200">
                <MapPin size={12} className="text-emerald-600" />
                <span>{data.location}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/80 rounded-full text-xs font-bold text-emerald-900 border border-emerald-200">
                <span>{data.category}</span>
              </div>
            </div>

            {/* Main H1 Title targeting exact keyword */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {data.headline.split(" in ").length > 1 ? (
                <>
                  {data.headline.split(" in ")[0]} in{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                    {data.headline.split(" in ")[1]}
                  </span>
                </>
              ) : (
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  {data.headline}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl">
              {data.subheadline}
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
              {data.overview}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiryModal(`${data.keyword} Scoping`)}
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request {data.category} Proposal</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#quote-form"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-emerald-300 transition-all shadow-sm"
              >
                Get Cost & Timeline Estimate
              </a>
            </div>
          </div>

          {/* Quick Real Estate Metrics Bar */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl">
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">&lt; 0.5s</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Page Load Speed</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">100%</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">RERA Compliant UI</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">0s</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">WhatsApp Lead Sync</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">100%</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Code Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Deliverables */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              TAILORED DELIVERABLES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered Specifically For "{data.keyword}"
            </h2>
            <p className="text-base text-slate-600">
              Every deliverable is crafted to solve local property marketing friction and maximize your lead-to-site-visit ratio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.deliverables.map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Feature Checklist */}
      <section className="py-16 lg:py-20 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Technology Specifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
                PROPTECH TECHNOLOGY STACK
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Modern Cloud Technologies For High-Concurrency Traffic
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When you launch a multi-crore residential tower or commercial leasing campaign, high ad traffic cannot suffer crashes or slow 3-second mobile load times. We engineer on zero-bloat Next.js 15.
              </p>

              <div className="space-y-2.5 pt-2">
                {data.techHighlights.map((tech, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white rounded-xl border border-slate-200/90 flex items-center gap-3 text-xs font-bold text-slate-800 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Functional Feature Checklist */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Included Real Estate Platform Features
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Everything your sales team and prospective buyers need out of the box.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {data.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Focus Banner */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <MapPin size={14} className="text-emerald-700" />
                <span>Local Delhi NCR Real Estate Engineering Hub</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Serving Real Estate Clients Across {data.location}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Builders and property brokers can book in-person scoping at our New Delhi office. Ongoing sprint updates are coordinated with your team throughout delivery.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer text-center"
              >
                Visit Our Office in Delhi NCR
              </button>
              <Link
                href="/industries/real-estate"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-all text-center"
              >
                View Real Estate Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Requirements Quote Form */}
      <section id="quote-form" className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              INSTANT PROJECT ESTIMATION
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get an Architecture Proposal For "{data.keyword}"
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Tell us about your property project, required integrations, and target launch timeline. Our senior technical leads will deliver a complete scope blueprint and fixed-cost proposal.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <FileCheck2 size={20} className="text-emerald-600" />
              <span>Project Requirements: {data.keyword}</span>
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
                      placeholder="e.g. Rajesh Sharma"
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
                      placeholder="rajesh@buildergroup.com"
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
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Property Segment
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  >
                    <option value="Residential High-Rise Towers">Residential High-Rise Towers</option>
                    <option value="Luxury Villas & Plots">Luxury Villas & Plotted Development</option>
                    <option value="Commercial Office & Retail Leasing">Commercial Office & Retail Leasing</option>
                    <option value="Township Master Planned Project">Township Master Planned Project</option>
                    <option value="Independent Property Brokerage">Independent Property Brokerage</option>
                    <option value="PropTech Startup Portal">PropTech Startup Platform</option>
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
                  Project Brief & Required Features
                </label>
                <textarea
                  name="brief"
                  rows={4}
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder={`Tell us about your project in ${data.location}, required floor plans, CRM preferences, or existing website improvements...`}
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
                    <span>Submitting Project Scope...</span>
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

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              REAL ESTATE FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About "{data.keyword}"
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

      {/* Directory of Related Real Estate Search Terms (All 46 Other Keywords) */}
      <section className="py-16 lg:py-20 bg-[#fafcfb] border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Search size={18} className="text-emerald-600" />
                  <span>Related Real Estate Search Terms & Specialized Solutions</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Explore other verified real estate technology queries and localized digital services across Delhi NCR.
                </p>
              </div>

              {/* Keyword Filter Bar */}
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter search terms..."
                  value={keywordFilter}
                  onChange={(e) => setKeywordFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Keyword Pills Cloud linking to dedicated pages */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {filteredOtherKeywords.map((kw, i) => {
                const kwSlug = slugifyKeyword(kw);
                return (
                  <Link
                    key={i}
                    href={`/industries/real-estate/${kwSlug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 hover:text-emerald-800 transition-all hover:scale-[1.02] group"
                  >
                    <span>{kw}</span>
                    <ArrowUpRight size={11} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </Link>
                );
              })}
            </div>

            {filteredOtherKeywords.length === 0 && (
              <div className="text-center py-6 text-xs text-slate-500">
                No search terms matching "{keywordFilter}".
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
              <span>Showing {filteredOtherKeywords.length} of {otherKeywords.length} related real estate search terms</span>
              <Link
                href="/industries/real-estate"
                className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
              >
                Back to All Real Estate Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Consultation Banner */}
      <section className="py-14 lg:py-18 bg-gradient-to-br from-[#e8f8f0] via-[#f4fbf7] to-[#e4f6ec] text-slate-900 relative overflow-hidden border-t border-emerald-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="inline-block text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-200">
              Ready to Upgrade Your Real Estate Technology?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
              Transform Your Property Lead Pipeline Today
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Connect directly with our lead solutions architect. We will audit your existing website, review your CRM workflows, and outline a fixed-cost delivery roadmap.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiryModal(`Final Real Estate Consultation: ${data.keyword}`)}
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

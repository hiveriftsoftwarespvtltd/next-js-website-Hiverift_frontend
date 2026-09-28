"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { submitContactForm } from "@/app/actions/contactActions";
import Swal from "sweetalert2";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  ShieldCheck,
  Zap,
  Sparkles,
  MapPin,
  Globe,
  Phone,
  Mail,
  User,
  FileCheck2,
  Send,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  PhoneCall,
  Clock,
  Award,
  Layers,
  Search,
  Cpu,
  X
} from "lucide-react";
import { IndustryKeywordData, getIndustryKeywords } from "@/app/data/industryKeywordsData";

interface Props {
  data: IndustryKeywordData;
}

export default function IndustryKeywordDetail({ data }: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectScope: "New Platform Development",
    budget: "",
    timeline: "3 to 4 Weeks",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keywordFilter, setKeywordFilter] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedKeywords = getIndustryKeywords(data.industryId).filter(
    (k) => k.slug !== data.slug
  );

  const filteredRelated = relatedKeywords.filter((k) =>
    k.keyword.toLowerCase().includes(keywordFilter.toLowerCase())
  );

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
      formPayload.append("service", `${data.industryTitle}: ${data.keyword}`);
      formPayload.append(
        "message",
        `Keyword Query: ${data.keyword}
Industry: ${data.industryTitle}
Location: ${data.location}
Project Scope: ${formData.projectScope}
Estimated Budget: ${formData.budget.trim() || "Not provided"}
Timeline: ${formData.timeline}
Notes: ${formData.message || "Direct keyword page consultation request."}`
      );

      const res = await submitContactForm(formPayload);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Proposal Request Received!",
          text: `Thank you! Our ${data.industryTitle} Technical Architect will review your scope for "${data.keyword}" and share a tailored roadmap within 24 hours.`,
          confirmButtonColor: "#10b981"
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectScope: "New Platform Development",
          budget: "",
          timeline: "3 to 4 Weeks",
          message: ""
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Error",
          text: res.message || "Failed to submit proposal request. Please reach us directly at info@hiverift.com",
          confirmButtonColor: "#10b981"
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Connection Error",
        text: "Could not submit your request. Please try calling us at 88149 30229.",
        confirmButtonColor: "#10b981"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Top Breadcrumb Bar */}
      <div className="bg-[#f8fdfa] border-b border-emerald-100/70 pt-24 sm:pt-28 pb-4">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <nav className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <Link href="/industries" className="hover:text-emerald-700 transition-colors">
              Industries
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <Link
              href={`/industries/${data.industryId}`}
              className="hover:text-emerald-700 transition-colors capitalize"
            >
              {data.industryTitle}
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-emerald-800 font-semibold truncate max-w-[280px] sm:max-w-md">
              {data.keyword}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 lg:pb-24 bg-gradient-to-b from-[#f8fdfa] via-white to-white overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#059669 1px, transparent 1px), linear-gradient(to right, #059669 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Live Scoping Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>In-Person Office Consultations by Appointment</span>
            </div>

            {/* Keyword Category Pill */}
            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider">
                {data.badge} • {data.category}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              {data.keyword}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {data.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#quote-form"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Request Scope & Quotation</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="tel:+918814930229"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl font-bold text-sm shadow-2xs transition-all flex items-center gap-2 hover:border-slate-400"
              >
                <PhoneCall size={16} className="text-emerald-600" />
                <span>88149 30229</span>
              </a>

              <button
                type="button"
                onClick={() => openEnquiryModal(`${data.keyword} Consultation`)}
                className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl font-bold text-sm transition-all"
              >
                Book Discovery Workshop
              </button>
            </div>
          </div>

          {/* Proof Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            {data.proofMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-emerald-100/80 shadow-2xs text-center hover:border-emerald-300 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Specialized Capabilities Bento Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              SCOPE & DELIVERABLES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered Capabilities for {data.keyword}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every deliverable is crafted for longevity, speed, conversion, and complete code ownership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>Production Ready SLA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Domain Challenge vs HiveRift Engineered Solution */}
      <section className="py-16 lg:py-20 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200/90 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              THE HIVERIFT ADVANTAGE
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Why Traditional Solutions Fall Short For {data.keyword}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200/70 text-rose-950">
                <div className="font-bold text-xs uppercase tracking-wider text-rose-800 mb-2 flex items-center gap-1.5">
                  <span>Industry Friction & Obstacle</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  {data.challengeVsSolution.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                <div className="font-bold text-xs uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>HiveRift Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  {data.challengeVsSolution.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Modern Full-Stack Technology Stack */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 border border-slate-300 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider">
              TECHNOLOGY STACK
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Production Frameworks Behind {data.keyword}
            </h2>
            <p className="text-sm text-slate-600">
              Engineered with sub-second response times, bank-grade encryption, and zero proprietary lock-in.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {data.techHighlights.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-800 shadow-2xs hover:border-emerald-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Regional Coverage & On-Site Scoping */}
      <section className="py-16 lg:py-20 bg-[#fafcfb] border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              REGIONAL PRESENCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Localized Delivery Across Delhi NCR & Global Enterprise
            </h2>
            <p className="text-sm text-slate-600">
              Headquartered in New Delhi, we provide in-person discovery sessions and agile delivery across NCR.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">Delhi Hub</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Central & South
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2">Karol Bagh, CP, South Ex, Dwarka</p>
              <p className="text-xs text-slate-600">
                Corporate headquarters, in-person discovery meetings, and high-trust engineering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">Gurgaon Hub</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Cyber City
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2">Cyber City, Golf Course Rd, Sohna Rd</p>
              <p className="text-xs text-slate-600">
                Enterprise FinTech, rapid SaaS development, and high-growth venture architectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">Noida Hub</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Sec 62 & 137
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2">Sector 62, Sector 18, Expressway</p>
              <p className="text-xs text-slate-600">
                Custom ERP systems, cloud databases, and B2B portal integrations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">Pan-India & Global</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Worldwide
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2">Mumbai, Bengaluru, USA, UK, UAE</p>
              <p className="text-xs text-slate-600">
                Global edge CDN delivery, multi-currency payments, and 99.99% uptime SLA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Interactive Scoping & Quotation Form */}
      <section id="quote-form" className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              PROJECT SCOPING & PROPOSAL
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Request a Formal Scope for {data.keyword}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Share your project goals, required integrations, and timeline. Our technical leads will prepare a detailed roadmap and fixed milestone estimate.
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
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email
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
                      Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91-9876543210"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Scope
                  </label>
                  <select
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  >
                    <option value="New Platform Development">New Platform Development</option>
                    <option value="Redesign & Modernization">Redesign & Modernization</option>
                    <option value="Custom Portal / Software">Custom Portal / Software</option>
                    <option value="CRM & API Automation">CRM & API Automation</option>
                    <option value="High-Intent SEO & Growth">High-Intent SEO & Growth</option>
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

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Target Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  >
                    <option value="2 to 3 Weeks">2 to 3 Weeks (Sprint Fast-Track)</option>
                    <option value="3 to 4 Weeks">3 to 4 Weeks (Standard Delivery)</option>
                    <option value="1 to 2 Months">1 to 2 Months (Comprehensive MVP)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Brief & Required Features (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={`Mention specific integrations, design references, or milestones for ${data.keyword}...`}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>Strict NDA Protected • Zero Spam • 24hr Direct Architect Callback</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Scope...</span>
                  ) : (
                    <>
                      <span>Submit Scoping Request</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs Accordion */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Questions Regarding {data.keyword}
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers on engineering timelines, source code ownership, and integrations.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#fafcfb] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-emerald-600 text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8: Related Industry Search Terms Directory */}
      <section className="py-16 lg:py-20 bg-[#f8fdfa] border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Search size={18} className="text-emerald-600" />
                  <span>Related {data.industryTitle} Search Terms & Capabilities</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Explore tailored solutions and dedicated regional pages across Delhi NCR.
                </p>
              </div>

              {/* Keyword Filter Input with Active Search Button */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (filteredRelated.length > 0) {
                    router.push(`/industries/${data.industryId}/${filteredRelated[0].slug}`);
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
              {filteredRelated.map((item, i) => (
                <Link
                  key={i}
                  href={`/industries/${data.industryId}/${item.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 hover:text-emerald-800 transition-all hover:scale-[1.02] group"
                >
                  <span>{item.keyword}</span>
                  <ArrowUpRight size={11} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
              <span>Showing {filteredRelated.length} related capabilities in {data.industryTitle}</span>
              <Link
                href={`/industries/${data.industryId}`}
                className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
              >
                Back to {data.industryTitle} Hub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Consultation Strip */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            DIRECT CONSULTATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build Your Platform for {data.keyword}?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Connect with our senior technology leads. In-person scoping is available by appointment at HiveRift&apos;s New Delhi office.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+918814930229"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call 88149 30229</span>
            </a>

            <a
              href={`https://wa.me/918814930229?text=Hello%20HiveRift%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(
                data.keyword
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
            >
              <span>WhatsApp Chat</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={() => openEnquiryModal(`${data.keyword} Workshop`)}
              className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-sm transition-all"
            >
              Book In-Person Workshop
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

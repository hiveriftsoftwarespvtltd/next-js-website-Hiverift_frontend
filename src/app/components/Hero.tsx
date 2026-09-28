"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Phone,
  User,
  Building2,
  Lock,
  Clock,
  ShieldCheck,
  ChevronDown,
  Gauge,
  BarChart3,
  Target,
  Layers,
  Calendar
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contactActions";
import { openEnquiryModal } from "./EnquiryModal";
import { TechGlobeBackground } from "./TechGlobeBackground";
import Swal from "sweetalert2";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    service: "Corporate Website Development",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Name Required",
        text: "Please enter your full name.",
        confirmButtonColor: "#10b981",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      Swal.fire({
        icon: "warning",
        title: "Phone Required",
        text: "Please enter a valid phone number.",
        confirmButtonColor: "#10b981",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("phone", formData.phone.trim());
      data.append("company", formData.company.trim() || "Not Specified");
      data.append("service", formData.service);
      data.append("message", `Instant Proposal Request for ${formData.service}`);

      const res = await submitContactForm(data);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Proposal Request Received!",
          text: "Thank you! Our technical architect will review your project and connect with you within 30 minutes.",
          confirmButtonColor: "#10b981",
        });
        setFormData({
          name: "",
          phone: "",
          company: "",
          service: "Corporate Website Development",
        });
      } else {
        throw new Error(res.message || "Failed to submit request.");
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Notice",
        text: err?.message || "Could not send request right now. Please call us directly.",
        confirmButtonColor: "#10b981",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Professional, non-AI commercial outcome metrics
  const outcomeMetrics = [
    {
      title: "Performance Optimized",
      shortTitle: "Performance",
      desc: "Clean modern code, high responsiveness & fast loading times",
      icon: Gauge,
      badge: "Core Vitals",
    },
    {
      title: "SEO-Ready Architecture",
      shortTitle: "SEO Architecture",
      desc: "Structured data, semantic hierarchy & search-friendly indexing",
      icon: BarChart3,
      badge: "Visibility",
    },
    {
      title: "Conversion-Focused UX",
      shortTitle: "High Conversion",
      desc: "Engineered lead pathways designed to convert visitors into clients",
      icon: Target,
      badge: "Lead Flow",
    },
    {
      title: "Lead & CRM Integration",
      shortTitle: "CRM & Leads",
      desc: "Automated enquiry notifications, lead routing & Admin CMS",
      icon: Layers,
      badge: "Instant Sync",
    },
  ];

  const websiteTypes = [
    "Corporate Websites",
    "Dynamic Business Sites",
    "eCommerce Stores",
    "Custom Web Portals",
    "High-Converting Landing Pages",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#eaf8f0] via-[#f5fbf7] to-[#ffffff] text-slate-900 pt-[172px] sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Background Subtle Geometric Mesh & Soft Radial Accents */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
          backgroundSize: "36px 36px"
        }}
      />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated Tech Globe Background */}
      <TechGlobeBackground />

      {/* Restored Full-Width Standard Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: High-Intent Value Proposition & Proof (7 cols)  */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Top Pill Badge (Professional Authority Marker) */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[11px] sm:text-xs font-semibold max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse inline-block shrink-0" />
              <span className="text-slate-800">Top Web Development Company in Delhi NCR</span>
            </div>

            {/* Semantic SEO H1 */}
            <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black leading-[1.18] sm:leading-[1.14] tracking-tight text-slate-900">
              Need a Website That <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10b981] to-[#0d9488]">
                Actually Brings You Customers?
              </span>
            </h1>

            {/* Supporting Copy (Concise on mobile, comprehensive on desktop) */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
              Fast, SEO-ready websites built to turn visitors into enquiries, leads and sales.
              <span className="hidden sm:inline"> We design and develop bespoke corporate websites, dynamic business portals, and eCommerce storefronts built to scale your business.</span>
            </p>

            {/* Website Development Scope Tags (Top 3 on mobile, all 5 on desktop) */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
              {websiteTypes.map((type, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-xs ${
                    i >= 3 ? "hidden sm:inline-flex" : ""
                  }`}
                >
                  <Check size={11} className="text-[#10b981]" strokeWidth={2.5} />
                  <span>{type}</span>
                </span>
              ))}
            </div>

            {/* 4 Professional Outcome Proof Cards (Hidden on mobile, visible on desktop) */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 pt-1">
              {outcomeMetrics.map((metric, i) => {
                const IconComponent = metric.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100/90 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                      <IconComponent size={16} strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {metric.title}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                          {metric.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-normal leading-snug mt-0.5">
                        {metric.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary CTA Buttons & Direct Contact Bar */}
            <div className="pt-1 sm:pt-2 space-y-3 sm:space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
                <button
                  onClick={() => scrollTo("enquiry")}
                  className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base rounded-full shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get My Website Proposal</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>

                <button
                  onClick={() => scrollTo("work")}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3.5 text-sm rounded-full shadow-xs transition-all hidden sm:flex text-center justify-center"
                >
                  View Selected Work
                </button>
              </div>

              {/* Social Proof & Quick Contacts Bar */}
              <div className="pt-0.5 sm:pt-1">
                <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700 w-full sm:w-auto">
                  <a
                    href="tel:+918814930229"
                    className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors font-bold"
                  >
                    <Phone size={13} strokeWidth={2} className="text-[#0284c7]" />
                    <span>88149 30229</span>
                  </a>
                  <span className="text-slate-300">|</span>
                  <button
                    onClick={openEnquiryModal}
                    className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold transition-colors cursor-pointer"
                  >
                    <Calendar size={13} strokeWidth={2} className="text-[#10b981]" />
                    <span>Book Free Consultation</span>
                  </button>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <span className="text-slate-700 hidden sm:inline flex items-center gap-1 font-bold">
                    <Check size={13} strokeWidth={2.5} className="text-emerald-600" />
                    <span>1000+ Projects Delivered</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Properly Proportioned Proposal Form Card (5 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[475px] bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-400 shadow-xl shadow-slate-900/5 text-left relative">
              
              {/* Top Promo Tag */}
              <div className="text-center mb-3">
                <span className="inline-block bg-emerald-50 text-[#059669] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-emerald-200">
                  ● FREE ESTIMATE & ARCHITECTURE BLUEPRINT
                </span>
              </div>

              {/* Card Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 text-center leading-snug mb-1">
                Get Free Website Cost Estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 text-center font-normal leading-relaxed mb-6">
                Custom website design, eCommerce, and digital solutions tailored to your business roadmap.
              </p>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Your Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-800 block">
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-800 block">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit mobile number"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Business / Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-800 block">
                    Business / Company Name
                  </label>
                  <div className="relative">
                    <Building2 size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your business name"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Select Package or Type */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-800 block">
                    Select Requirement or Type
                  </label>
                  <div className="relative">
                    <Layers size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-9 pr-8 py-2.5 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 outline-none transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="Corporate Website Development">Corporate Website Development</option>
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="eCommerce Storefront & Payment Gateways">eCommerce Storefront & Payments</option>
                      <option value="Custom Web Application / SaaS">Custom Web Application / SaaS</option>
                      <option value="Mobile App Development (iOS/Android)">Mobile App Development</option>
                      <option value="Digital Marketing & Local SEO">Digital Marketing & Local SEO</option>
                      <option value="Website Redesign & Speed Optimization">Website Redesign & Optimization</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={2} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Get My Website Proposal</span>
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </>
                  )}
                </button>

                {/* Trust Badges */}
                <div className="pt-2.5 flex items-center justify-between text-[10px] text-slate-500 font-medium border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Lock size={11} strokeWidth={2} className="text-slate-600" /> 100% Confidential
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} strokeWidth={2} className="text-slate-600" /> 30-Min Response
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={11} strokeWidth={2} className="text-slate-600" /> Verified & Secure
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
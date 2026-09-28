"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  Layers,
  ArrowRight
} from "lucide-react";
import Swal from "sweetalert2";
import { submitContactForm } from "@/app/actions/contactActions";

export interface ServiceProjectBriefFormProps {
  serviceTitle: string;
  projectTypes: string[];
  defaultProjectType?: string;
  timelineOptions?: string[];
}

export function ServiceProjectBriefForm({
  serviceTitle,
  projectTypes,
  defaultProjectType,
  timelineOptions = [
    "Immediate (within 2 weeks)",
    "Standard (within 1 month)",
    "Planning Phase (1–3 months)",
    "Ongoing Retainer / Dedicated Team"
  ]
}: ServiceProjectBriefFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: defaultProjectType || projectTypes[0] || serviceTitle,
    budget: "",
    timeline: timelineOptions[1] || timelineOptions[0],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append("name", formData.name);
      dataToSend.append("email", formData.email);
      dataToSend.append("phone", formData.phone);
      dataToSend.append(
        "message",
        `[${serviceTitle}] Type: ${formData.projectType} | Estimated Budget: ${formData.budget.trim() || "Not provided"} | Timeline: ${formData.timeline}\n\nProject Brief:\n${formData.message}`
      );

      const result = await submitContactForm(dataToSend);

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Project Brief Received!",
          text: "Our lead solutions architect will review your technical requirements and respond within 24 hours with an architecture roadmap.",
          confirmButtonColor: "#10b981",
          background: "#0f172a",
          color: "#ffffff"
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: defaultProjectType || projectTypes[0] || serviceTitle,
          budget: "",
          timeline: timelineOptions[1] || timelineOptions[0],
          message: ""
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Error",
          text: result.message || "Failed to submit project inquiry. Please try again or reach out directly on WhatsApp.",
          confirmButtonColor: "#ef4444"
        });
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please contact us directly via WhatsApp or email.",
        confirmButtonColor: "#ef4444"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello HiveRift! I would like to discuss a project for ${serviceTitle}. Scope: ${formData.projectType}.`
  );

  return (
    <section id="project-brief-form" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Send size={14} className="text-emerald-600" />
            <span>Project Consultation & Scope Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Launch Your Next-Gen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {serviceTitle}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Share your requirements below. Receive an enterprise architecture proposal, milestone breakdown, and fixed-price quotation within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid sm:grid-cols-2 gap-5">
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
                    placeholder="e.g. Sarah Jenkins"
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
                    placeholder="sarah@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & Project Type */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000 / +91 ..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Category / Scope
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                >
                  {projectTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Budget & Timeline */}
            <div className="grid sm:grid-cols-2 gap-5">
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
                  Target Launch Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                >
                  {timelineOptions.map((t, idx) => (
                    <option key={idx} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Project Requirements & Specifications
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your current challenge, target user personas, technical integrations needed, or existing codebase..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all resize-y"
              />
            </div>

            {/* Submit & WhatsApp Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Requirements for Architecture Review</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/918814930229?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 border border-slate-800 shrink-0"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>

            {/* Security Guarantee Strip */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-emerald-600" />
                <span>NDA & Strict Confidentiality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Direct Lead Architect Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-emerald-600" />
                <span>24-Hour Response SLA</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

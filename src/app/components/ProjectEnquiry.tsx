"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Send, 
  Lock, 
  UserCheck, 
  Clock,
  Building2,
  AlertCircle,
  User,
  Globe
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contactActions";
import { Button } from "./ui/button";

const serviceOptions = [
  "Website Development",
  "eCommerce Development",
  "Custom Software",
  "Web Application",
  "ERP / CRM",
  "Mobile App",
  "AI & Automation",
  "UI/UX Design",
  "Digital Marketing",
  "SEO",
  "API Integration",
  "Other"
];

export function ProjectEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus === "error") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const phoneRegex = /^[0-9+ -]{8,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      setErrorMessage("Please enter a valid phone number (8-15 digits).");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!formData.service) {
      setErrorMessage("Please select what type of solution you need.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      setErrorMessage("Please provide project details (at least 8 characters).");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("phone", formData.phone.trim());
      data.append("email", formData.email.trim());
      data.append("company", formData.company.trim());
      data.append("service", formData.service);
      data.append("message", formData.message.trim());

      const res = await submitContactForm(data);

      if (res.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(res.message || "Failed to submit inquiry. Please call or WhatsApp us.");
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-12 lg:py-14 bg-gradient-to-br from-[#ebfaf2] via-[#f7fdfa] to-[#ffffff] text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Direct Consultation
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Tell Us About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Your Project</span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            Have an idea, business challenge or digital requirement? Tell us a little about it and our team will get back to you.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 max-w-7xl mx-auto items-start">
          
          {/* LEFT COLUMN: Trust & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
                Let's Build Something That Works For Your Business.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Speak directly with senior engineers and digital growth strategists who respect your time and business goals.
              </p>
            </div>

            {/* Trust Checkmarks */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border-2 border-emerald-200/80 shadow-sm">
                <Lock size={20} className="text-[#059669] shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">Confidential Enquiry</h4>
                  <p className="text-xs text-slate-600 font-medium">Your requirements and intellectual property are protected.</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border-2 border-emerald-200/80 shadow-sm">
                <UserCheck size={20} className="text-teal-700 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">Direct Team Response</h4>
                  <p className="text-xs text-slate-600 font-medium">No sales fluff. You speak with a technical solutions architect.</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border-2 border-emerald-200/80 shadow-sm">
                <Clock size={20} className="text-cyan-700 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">Technology Consultation</h4>
                  <p className="text-xs text-slate-600 font-medium">Receive actionable architecture and growth recommendations within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Immediate Contacts Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-300 shadow-xl shadow-emerald-900/5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-black block">
                Immediate Communication
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+918814930229"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-black text-xs tracking-tight shadow-sm transition-all"
                >
                  <Phone size={15} />
                  <span>Call: 88149 30229</span>
                </a>

                <a
                  href="https://wa.me/918814930229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs tracking-tight shadow-sm transition-all"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-600 font-medium flex items-center gap-2">
                <Mail size={15} className="text-[#059669]" />
                <span>Email: <strong className="text-slate-900 font-bold">info@hiverift.com</strong></span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-emerald-400 rounded-[2.5rem] p-7 sm:p-10 shadow-2xl shadow-emerald-900/10 relative">
              
              {submitStatus === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                    Thank you. We've received your project enquiry. Our team will review your requirements and get back to you shortly with a technology consultation.
                  </p>
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-6 py-2.5 rounded-full text-xs"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5">
                      <AlertCircle size={16} className="shrink-0 text-rose-500" />
                      <span className="font-bold">{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-name-2" className="text-xs font-bold text-slate-800 block">
                        Full Name
                      </label>
                      <input
                        id="enquiry-name-2"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-[#f8fdfa] border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-phone-2" className="text-xs font-bold text-slate-800 block">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="enquiry-phone-2"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#f8fdfa] border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-email-2" className="text-xs font-bold text-slate-800 block">
                        Email Address
                      </label>
                      <input
                        id="enquiry-email-2"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 bg-[#f8fdfa] border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-company-2" className="text-xs font-bold text-slate-800 block">
                        Company / Business Name
                      </label>
                      <input
                        id="enquiry-company-2"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Innovations"
                        className="w-full px-4 py-3 bg-[#f8fdfa] border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* What do you need? */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-service-2" className="text-xs font-bold text-slate-800 block">
                      What do you need?
                    </label>
                    <select
                      id="enquiry-service-2"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f8fdfa] border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 outline-none transition-colors cursor-pointer font-medium"
                    >
                      <option value="" disabled>Select Primary Requirement</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-message-2" className="text-xs font-bold text-slate-800 block">
                      Project Details
                    </label>
                    <textarea
                      id="enquiry-message-2"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your business goals, target audience, timeline, or current technical challenges..."
                      className="w-full px-4 py-3 bg-[#f8fdfa] border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-black py-4 text-base rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Project Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-1 font-medium">
                    Zero spam. Direct engineer response within 24 hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

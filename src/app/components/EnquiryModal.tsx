"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  Phone,
  Building2,
  Layers,
  ChevronDown,
  ArrowRight,
  Lock,
  Clock,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contactActions";
import Swal from "sweetalert2";

export const openEnquiryModal = (service?: string | unknown, mode: "proposal" | "meeting" = "proposal") => {
  if (typeof window !== "undefined") {
    const serviceName = typeof service === "string" ? service : undefined;
    window.dispatchEvent(new CustomEvent("open-enquiry-modal", { detail: { service: serviceName, mode } }));
  }
};

interface EnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function EnquiryModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: EnquiryModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [formMode, setFormMode] = useState<"proposal" | "meeting">("proposal");
  const dialogRef = useRef<HTMLDivElement>(null);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const closeModal = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    service: "Corporate Website Development",
    budget: "",
    visitDate: "",
    visitTime: "",
    requirement: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = (e: any) => {
      setFormMode(e?.detail?.mode === "meeting" ? "meeting" : "proposal");
      if (e?.detail?.service) {
        setFormData((prev) => ({ ...prev, service: e.detail.service }));
      }
      setInternalIsOpen(true);
    };
    window.addEventListener("open-enquiry-modal", handleOpen);
    return () => window.removeEventListener("open-enquiry-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (controlledOnClose) controlledOnClose();
        else setInternalIsOpen(false);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("input, select, textarea, button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, controlledOnClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      data.append("email", formData.email.trim());
      data.append("service", formMode === "meeting" ? "Schedule On-Site Meeting" : formData.service);
      data.append("message", formMode === "meeting"
        ? `Office Visit Request\nPreferred Date: ${formData.visitDate}\nPreferred Time: ${formData.visitTime}\nProject Requirement: ${formData.requirement.trim()}\nMessage: ${formData.message.trim() || "Not provided"}`
        : `Instant Popup Proposal Request for ${formData.service}\nEstimated Budget: ${formData.budget.trim() || "Not provided"}`);

      const res = await submitContactForm(data);
      if (res.success) {
        closeModal();
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
          email: "",
          service: "Corporate Website Development",
          budget: "",
          visitDate: "",
          visitTime: "",
          requirement: "",
          message: "",
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onKeyDown={(event) => event.key === "Escape" && closeModal()}
    >
      {/* Background Click to Close */}
      <div
        className="absolute inset-0"
        onClick={() => closeModal()}
        aria-hidden="true"
      />

      {/* Modal Dialog Card (Clean, proper width constraint) */}
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title" aria-describedby="enquiry-modal-description" tabIndex={-1} className="relative z-10 w-full max-w-[500px] bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-2xl text-left max-h-[calc(100dvh-1rem)] overflow-y-auto overscroll-contain">
        
        {/* Close Button */}
        <button
          onClick={() => closeModal()}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Top Promo Pill */}
        <div className="text-center mb-3">
          <span className="inline-block bg-emerald-50 text-[#059669] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border border-emerald-200">
            {formMode === "meeting" ? "OFFICE VISIT REQUEST" : "PROJECT PROPOSAL REQUEST"}
          </span>
        </div>

        {/* Modal Title & Subtitle */}
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center leading-snug mb-1">
          {formMode === "meeting" ? "Schedule a Visit to Our Delhi NCR Office" : "Book Your Project Consultation"}
        </h3>
        <p id="enquiry-modal-description" className="text-xs text-slate-600 text-center font-normal leading-relaxed mb-5">
          {formMode === "meeting" ? "Choose a preferred date and time to visit the HiveRift office in Delhi NCR." : "Connect with our senior technical architect to discuss your project and next steps."}
        </p>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-3.5">
          
          {/* Your Name */}
          <div className="space-y-1">
            <label htmlFor="proposal-name" className="text-xs font-semibold text-slate-800 block">
              Your Name
            </label>
            <div className="relative">
              <User size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="proposal-name"
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
            <label htmlFor="proposal-phone" className="text-xs font-semibold text-slate-800 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                id="proposal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter 10-digit mobile number"
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
              />
            </div>
          </div>

          {formMode === "meeting" && (
            <div className="space-y-1">
                <label htmlFor="meeting-email" className="text-xs font-semibold text-slate-800 block">Email</label>
              <input id="meeting-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="name@company.com" required className="w-full px-3.5 py-3 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all" />
            </div>
          )}

          {/* Business / Company Name */}
          <div className="space-y-1">
            <label htmlFor="proposal-company" className="text-xs font-semibold text-slate-800 block">
              Business / Company Name
            </label>
            <div className="relative">
              <Building2 size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="proposal-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your business name"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
              />
            </div>
          </div>

          {formMode === "meeting" ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="meeting-date" className="text-xs font-semibold text-slate-800 block">Date</label>
                  <input id="meeting-date" type="date" name="visitDate" value={formData.visitDate} onChange={handleInputChange} min={new Date().toISOString().slice(0, 10)} required className="w-full min-w-0 px-3 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl text-sm text-slate-900" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="meeting-time" className="text-xs font-semibold text-slate-800 block">Time</label>
                  <input id="meeting-time" type="time" name="visitTime" value={formData.visitTime} onChange={handleInputChange} required className="w-full min-w-0 px-3 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl text-sm text-slate-900" />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="meeting-requirement" className="text-xs font-semibold text-slate-800 block">Project Requirement</label>
                <textarea id="meeting-requirement" name="requirement" value={formData.requirement} onChange={handleInputChange} placeholder="What would you like to discuss?" required rows={3} className="w-full px-3.5 py-3 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all resize-y" />
              </div>
              <div className="space-y-1">
                <label htmlFor="meeting-message" className="text-xs font-semibold text-slate-800 block">Message (Optional)</label>
                <textarea id="meeting-message" name="message" value={formData.message} onChange={handleInputChange} rows={2} className="w-full px-3.5 py-3 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 outline-none transition-all resize-y" />
              </div>
            </>
          ) : (
            <>
          {/* Select Package or Type */}
          <div className="space-y-1">
            <label htmlFor="proposal-service" className="text-xs font-semibold text-slate-800 block">
              Select Requirement or Type
            </label>
            <div className="relative">
              <Layers size={15} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                id="proposal-service"
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

          <div className="space-y-1">
            <label htmlFor="proposal-budget" className="text-xs font-semibold text-slate-800 block">Estimated Budget (Optional)</label>
            <input id="proposal-budget" type="text" name="budget" value={formData.budget} onChange={handleInputChange} placeholder="Enter your estimated budget" className="w-full px-3.5 py-3 bg-slate-50/50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all" />
          </div>
            </>
          )}

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
          >
            {isSubmitting ? (
              <span>Submitting Request...</span>
            ) : (
              <>
                <span>{formMode === "meeting" ? "Request Office Visit" : "Submit & Get Proposal Blueprint"}</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </>
            )}
          </button>

          {/* Trust Badges */}
          {formMode === "meeting" ? (
            <p className="pt-2.5 border-t border-slate-100 text-xs leading-relaxed text-slate-500">Our team will confirm the visit date and time with you.</p>
          ) : <div className="pt-2.5 flex items-center justify-between text-[10px] text-slate-500 font-medium border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Lock size={11} strokeWidth={2} className="text-slate-600" /> 100% Confidential
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} strokeWidth={2} className="text-slate-600" /> 30-Min Response
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={11} strokeWidth={2} className="text-slate-600" /> Verified & Secure
            </span>
          </div>}

        </form>

      </div>
    </div>
  );
}

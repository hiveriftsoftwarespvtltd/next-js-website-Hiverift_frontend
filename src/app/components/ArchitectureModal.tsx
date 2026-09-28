"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  Building2,
  Cpu,
  Layers,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Server,
  Cloud
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contactActions";
import Swal from "sweetalert2";

export const openArchitectureModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-architecture-modal"));
  }
};

interface ArchitectureModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ArchitectureModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: ArchitectureModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    currentStack: "",
    architectureFocus: "Full-Stack Web & Next.js Architecture",
    scale: "MVP / New Launch",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setInternalIsOpen(true);
    window.addEventListener("open-architecture-modal", handleOpen);
    return () => window.removeEventListener("open-architecture-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const architectureOptions = [
    "Full-Stack Web & Next.js Architecture",
    "High-Concurrency Backend & Microservices",
    "eCommerce Platform & Payment Infrastructure",
    "Cloud Infrastructure, DevOps & AWS/GCP",
    "Cross-Platform Mobile Architecture (Flutter/React Native)",
    "API Gateway & Legacy System Modernization",
  ];

  const scaleOptions = [
    "MVP / New Launch",
    "< 10k Monthly Users",
    "10k – 100k Users",
    "100k+ Enterprise Scale",
  ];

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
        text: "Please enter a valid phone number so our systems architect can reach you.",
        confirmButtonColor: "#10b981",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("company", formData.company.trim() || "Not Specified");
      data.append("service", `Architecture Review: ${formData.architectureFocus}`);
      
      const structuredMessage = [
        `[Architecture Consultation Request]`,
        `Focus: ${formData.architectureFocus}`,
        `Current Stack: ${formData.currentStack.trim() || "Not Specified"}`,
        `Projected Scale: ${formData.scale}`,
        formData.message.trim() ? `Goals & Details: ${formData.message.trim()}` : "",
      ].filter(Boolean).join("\n");

      data.append("message", structuredMessage);

      const res = await submitContactForm(data);
      if (res.success) {
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Architecture Consultation Booked!",
          text: "Thank you! Our Principal Solutions Architect will review your technical stack requirements and connect with an architecture blueprint within 24 hours.",
          confirmButtonColor: "#10b981",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          currentStack: "",
          architectureFocus: "Full-Stack Web & Next.js Architecture",
          scale: "MVP / New Launch",
          message: "",
        });
      } else {
        throw new Error(res.message || "Failed to submit request.");
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Notice",
        text: err?.message || "Could not send request right now. Please reach out to us directly.",
        confirmButtonColor: "#10b981",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background Click to Close */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="architecture-modal-title" aria-describedby="architecture-modal-description" tabIndex={-1} className="relative z-10 w-full max-w-[560px] bg-white rounded-3xl p-4 sm:p-7 border-2 border-emerald-400/80 shadow-2xl text-left overflow-hidden max-h-[calc(100dvh-1rem)] flex flex-col font-sans">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Top Header Section (Pinned) */}
        <div className="shrink-0 pb-4 border-b border-emerald-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-[10px] font-mono font-bold text-[#059669] uppercase tracking-wider">
              <Zap size={12} className="text-[#059669]" />
              Dedicated Architecture Form
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Code → Cloud → Scale
            </span>
          </div>

          <h3 id="architecture-modal-title" className="pr-8 text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            Discuss Your System Architecture
          </h3>
          <p id="architecture-modal-description" className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
            Collaborate directly with our Principal Solutions Architect to review your technical stack, performance bottlenecks, APIs, and cloud scalability.
          </p>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto pr-1 sm:pr-2 pt-4 space-y-4 custom-marketing-scroll">
          
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="architecture-name" className="text-xs font-bold text-slate-800 block">
                Your Name
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  id="architecture-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Vikram Malhotra"
                  required
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="architecture-company" className="text-xs font-bold text-slate-800 block">
                Company / Project Name
              </label>
              <div className="relative">
                <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  id="architecture-company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Apex Logistics / Startup"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone & Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="architecture-phone" className="text-xs font-bold text-slate-800 block">
                Phone Number
              </label>
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  id="architecture-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="architecture-email" className="text-xs font-bold text-slate-800 block">
                Work Email (Optional)
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  id="architecture-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Primary Architecture Focus */}
          <div className="space-y-1.5">
            <label htmlFor="architecture-focus" className="text-xs font-bold text-slate-800 block">
              Primary Architecture Focus
            </label>
            <div className="relative">
              <select
                id="architecture-focus"
                name="architectureFocus"
                value={formData.architectureFocus}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 outline-none transition-all appearance-none cursor-pointer"
              >
                {architectureOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Current Tech Stack & Projected Scale */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="architecture-stack" className="text-xs font-bold text-slate-800 block">
                Current Stack (If Any)
              </label>
              <input
                id="architecture-stack"
                type="text"
                name="currentStack"
                value={formData.currentStack}
                onChange={handleInputChange}
                placeholder="e.g. Next.js, Node, PHP, AWS"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="architecture-scale" className="text-xs font-bold text-slate-800 block">
                Projected Scale / User Base
              </label>
              <div className="relative">
                <select
                  id="architecture-scale"
                  name="scale"
                  value={formData.scale}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 outline-none transition-all appearance-none cursor-pointer"
                >
                  {scaleOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Technical Challenge / Requirements */}
          <div className="space-y-1">
            <label htmlFor="architecture-message" className="text-xs font-bold text-slate-800 block">
              Architecture Goals & Key Requirements
            </label>
            <textarea
              id="architecture-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe what you want to engineer (e.g. multi-tenant architecture, migrating legacy stack to Next.js, high-speed payment APIs, CI/CD pipeline)..."
              className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"
            />
          </div>

          {/* Trust Guarantees */}
          <div className="p-3 bg-[#f0fbf5] rounded-xl border border-emerald-200 text-[11px] text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 font-medium text-emerald-800">
              <ShieldCheck size={14} className="text-[#059669]" />
              <span>100% Free Architecture Assessment</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 size={13} className="text-[#059669]" />
              <span>Strict NDA & Code Confidentiality</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] text-white font-extrabold text-sm shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating Blueprint Request...
              </span>
            ) : (
              <>
                <span>Schedule Architecture Consultation</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

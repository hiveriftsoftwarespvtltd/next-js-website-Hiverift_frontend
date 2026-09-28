"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { X, Send, CheckCircle2 } from "lucide-react";
import Swal from "sweetalert2";
import { submitContactForm } from "@/app/actions/contactActions";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export function LeadPopup({ isOpen, onClose, selectedPlan }: LeadPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: selectedPlan || "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Message too short",
        text: "Please provide at least 10 characters in the message field.",
        confirmButtonColor: "#10b981",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;

      if (!emailRegex.test(formData.email.trim())) {
        throw new Error("Please enter a valid email address.");
      }
      if (!phoneRegex.test(formData.phone.trim())) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }

      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("company", formData.company.trim());
      data.append("service", formData.service);
      data.append("message", formData.message.trim());

      const result = await submitContactForm(data);

      if (result.success) {
        onClose();
        router.push("/thank-you");
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Could not send message. Please try again later.");
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message || "Service is currently unavailable. Please try again later.",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold tracking-tight">Ready to Elevate Your Business?</h2>
              </div>
              <p className="text-emerald-50/90 text-sm font-medium">
                Fill out the form below and let's discuss your next project.
              </p>
            </div>

            <div className="overflow-y-auto p-8 custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-medium"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-medium"
                      placeholder="9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-medium"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                    Service / Plan Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm font-medium"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 flex justify-between">
                    <span>Project Details</span>
                    <span className={`text-[10px] font-bold ${formData.message.length >= 10 ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {formData.message.length} / 500 characters
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none shadow-sm font-medium"
                    placeholder="Tell us about your project... (min 10 characters)"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>We promise not to spam. Data is secure and compliant.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

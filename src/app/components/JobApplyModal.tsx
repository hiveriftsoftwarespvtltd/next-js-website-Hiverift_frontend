"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { X, Send, User, Mail, Phone, Briefcase, Link as LinkIcon, FileText, Upload, CheckCircle2 } from "lucide-react";
import Swal from "sweetalert2";
import { submitJobApplication } from "@/app/actions/contactActions";

interface JobApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export function JobApplyModal({ isOpen, onClose, jobTitle = "" }: JobApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: jobTitle || "Senior Full-Stack Developer",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (jobTitle) {
      setFormData(prev => ({ ...prev, position: jobTitle }));
    }
  }, [jobTitle]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      Swal.fire({ icon: "error", title: "Invalid Email", text: "Please enter a valid email address.", confirmButtonColor: "#10b981" });
      return;
    }
    if (!validatePhone(formData.phone)) {
      Swal.fire({ icon: "error", title: "Invalid Phone", text: "Please enter a valid 10-digit phone number.", confirmButtonColor: "#10b981" });
      return;
    }
    if (!formData.resume) {
      Swal.fire({ icon: "error", title: "Resume Required", text: "Please upload your resume to proceed.", confirmButtonColor: "#10b981" });
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      // Matching exact API fields as requested
      data.append("fullName", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("position", formData.position);
      data.append("portfolio", formData.portfolio.trim());
      data.append("coverLetter", formData.coverLetter.trim());
      
      if (formData.resume) {
        data.append("resume", formData.resume);
      }

      const result = await submitJobApplication(data);

      if (result.success) {
        onClose();
        router.push("/thank-you");
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: jobTitle || "Senior Full-Stack Developer",
          portfolio: "",
          coverLetter: "",
          resume: null
        });
      } else {
        throw new Error(result.message || "Failed to submit application. Please try again.");
      }
    } catch (err: any) {
      Swal.fire({ 
        icon: "error", 
        title: "Oops!", 
        text: err.message || "Something went wrong. Please check your connection.", 
        confirmButtonColor: "#ef4444" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-['Roboto',sans-serif]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl bg-white rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100 max-h-[95vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-slate-900 px-6 py-6 md:py-8 text-center relative">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">Apply for job in <span className="text-emerald-500">HiveRift</span></h2>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Application Sent!</h3>
                  <p className="text-gray-500 font-medium text-sm">We've received your application and will review it shortly. Good luck!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-3.5">
                  <div className="grid md:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold placeholder:font-normal text-sm" 
                        placeholder="Your Full Name" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold placeholder:font-normal text-sm" 
                        placeholder="email@example.com" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold placeholder:font-normal text-sm" 
                        placeholder="10-digit number" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Position</label>
                      <select 
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold text-sm"
                      >
                        <option value="Senior Full-Stack Developer">Senior Full-Stack Developer</option>
                        <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Mobile App Developer">Mobile App Developer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Resume (PDF/DOC)</label>
                      <div className="relative">
                        <input 
                          type="file" required
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
                          className="hidden" 
                          id="resume-upload"
                        />
                        <label 
                          htmlFor="resume-upload"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 flex items-center gap-2 cursor-pointer transition-all font-bold text-gray-500 text-sm truncate"
                        >
                          <Upload size={16} className="text-emerald-600 shrink-0" />
                          {formData.resume ? formData.resume.name : "Select File"}
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Portfolio (Optional)</label>
                      <input 
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold placeholder:font-normal text-sm" 
                        placeholder="Website / LinkedIn" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex justify-between">
                      <span>Cover Letter</span>
                      <span className="text-[10px] font-bold text-emerald-600 tracking-normal">{formData.coverLetter.length} / 500 characters</span>
                    </label>
                    <textarea 
                      rows={2} required
                      maxLength={500}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold resize-none placeholder:font-normal text-sm" 
                      placeholder="Why you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-emerald-600 text-white rounded-xl font-black text-base shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

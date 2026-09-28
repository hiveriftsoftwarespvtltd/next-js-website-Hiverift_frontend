"use client";

import { motion } from "motion/react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FileText, Calendar, Mail, ShieldCheck } from "lucide-react";

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Clean Light Mode matching Home Page */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-emerald-100/50 via-teal-100/40 to-emerald-100/30 blur-3xl rounded-full -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20 -z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200/80 rounded-full shadow-xs">
              <ShieldCheck size={16} className="text-emerald-700" />
              <span className="text-xs font-black text-emerald-800 tracking-wider uppercase">
                COMMERCIAL TERMS & CLIENT AGREEMENTS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Terms & <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">Conditions</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Transparent terms governing software development engagements, milestone deliverables, source code ownership, and Service Level Agreements at HiveRift.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black text-slate-500 uppercase tracking-widest pt-2">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
                <Calendar size={14} className="text-emerald-600" /> Updated: Jan 2026
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
                <FileText size={14} className="text-emerald-600" /> Effective: Jan 1, 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-12">
            
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
              <h3 className="text-xl font-black text-gray-900 mb-4">1. Introduction & Acceptance</h3>
              <p>Welcome to HiveRift Softwares Pvt Ltd, registered in India. By accessing our website (hiverift.com) or engaging our services, you agree to these Terms & Conditions in full. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">2. Services</h3>
              <p>HiveRift provides website development, mobile app development, custom software, digital marketing, SEO, UI/UX design, cloud & DevOps, AI/ML solutions, and related IT services. All service scope, deliverables, timelines, and pricing are defined in the individual project agreement / proposal accepted by the client.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">3. Payment Terms</h3>
              <p>A non-refundable advance of 50% of the total project cost is required before work begins. The remaining balance is due upon project completion or as per milestones agreed in the project proposal. All prices are exclusive of GST. GST at 18% is applicable on all services as per Indian tax law.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">4. Refund Policy</h3>
              <p>The initial 50% advance payment is non-refundable as it covers planning, resource allocation, and initial work. If HiveRift fails to deliver the agreed scope, a partial or full refund may be considered at our discretion after review.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">5. Intellectual Property</h3>
              <p>Upon receipt of full payment, all client-specific work product (designs, code, content) created by HiveRift for the client becomes the client's property. HiveRift retains the right to display completed work in our portfolio unless a written NDA is in place.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">6. Confidentiality & NDA</h3>
              <p>HiveRift treats all client information as confidential. We sign Non-Disclosure Agreements (NDAs) before any project discussion begins, upon client request. Client data shared with us is used solely for project delivery.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">10. Governing Law</h3>
              <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</p>
            </div>

            <div className="pt-12 border-t border-slate-100">
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl text-emerald-600  mb-2">Have questions?</h4>
                  <p className="text-slate-400">Reach out to our legal team for clarifications.</p>
                </div>
                <a href="mailto:info@hiverift.com" className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-emerald-700 transition-colors">
                  <Mail size={20} /> info@hiverift.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

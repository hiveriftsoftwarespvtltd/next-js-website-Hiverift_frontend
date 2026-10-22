"use client";

import { motion } from "motion/react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ShieldCheck, Database, Mail, Phone, MapPin, Fingerprint, Eye } from "lucide-react";

export default function PrivacyContent() {
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
              <Fingerprint size={16} className="text-emerald-700" />
              <span className="text-xs font-black text-emerald-800 tracking-wider uppercase">
                DATA PRIVACY & SECURITY STANDARDS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Privacy <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">Policy</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              We take intellectual property and client privacy seriously. This policy details how HiveRift collects, protects, and governs client and visitor data in accordance with international standards and India's DPDP Act 2023.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            
            <div className="grid md:grid-cols-3 gap-8 pb-16 border-b border-slate-100">
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem]">
                <Eye className="text-emerald-600 mb-4" />
                <h4 className="font-black text-sm uppercase tracking-widest mb-2">Transparency</h4>
                <p className="text-xs text-gray-500 font-bold">We tell you exactly what we do with data.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem]">
                <Database className="text-emerald-600 mb-4" />
                <h4 className="font-black text-sm uppercase tracking-widest mb-2">Security</h4>
                <p className="text-xs text-gray-500 font-bold">Encrypted storage and secure servers.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem]">
                <ShieldCheck className="text-emerald-600 mb-4" />
                <h4 className="font-black text-sm uppercase tracking-widest mb-2">Compliance</h4>
                <p className="text-xs text-gray-500 font-bold">Aligned with India's DPDP Act 2023.</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-12">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">1. Who We Are</h3>
                <p>HiveRift Softwares Pvt Ltd is a company registered in India, with its principal office at4th Floor, A-49, (New)CRPF Rd, Block A, Sector 8 Dwarka, New Delhi, Delhi, 110077. For privacy matters, contact: info@hiverift.com</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">2. What Data We Collect</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span> <strong>Contact form data:</strong> Name, email, phone number, and project details.</li>
                  <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span> <strong>Cookies & analytics:</strong> Google Analytics data to understand visitor behavior.</li>
                  <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span> <strong>Marketing data:</strong> If you subscribe to our newsletter.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">3. How We Use Your Data</h3>
                <p>To respond to your enquiries, deliver our services, and improve our website. We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">7. Your Rights</h3>
                <p>Under India's DPDP Act 2023, you have the right to access, correct, or delete your data. To exercise these rights, email: info@hiverift.com</p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] mt-16 border border-slate-100">
                <h3 className="text-2xl font-black text-gray-900 mb-8">Contact Our Data Officer</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600"><Mail size={20}/></div>
                    <span className="font-bold text-gray-900">info@hiverift.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600"><Phone size={20}/></div>
                    <span className="font-bold text-gray-900">88149 30229</span>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0"><MapPin size={20}/></div>
                    <span className="font-bold text-gray-900 leading-tight">4th Floor, A-49, (New) CRPF Rd, Block A, (Old), Sector 8 Dwarka, Dwarka, New Delhi, Delhi, 110077 India</span>
                  </div>
                </div>
              </div>
            </div>

          </div> 
        </div>
      </section>

      <Footer />
    </div>
  );
}

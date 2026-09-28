"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Building2,
  Landmark,
  ArrowRight,
  Phone,
  Calendar,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  ChevronDown,
  Layers,
  Award,
  Star,
  Users,
  Code2,
  DollarSign
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { LocationDetail, getLocationBySlug } from "@/app/data/locationsData";

interface LocationDetailContentProps {
  location: LocationDetail;
}

export default function LocationDetailContent({ location }: LocationDetailContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Retrieve nearby location objects for cross-linking
  const nearbyLocations = location.nearbySlugs
    .map((slug) => getLocationBySlug(slug))
    .filter((item): item is LocationDetail => item !== undefined);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      
      {/* 1. GLOBAL HEADER */}
      <Header />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 2. DEDICATED LOCATION HERO SECTION                                        */}
        {/* ========================================================================= */}
        <section className="relative bg-gradient-to-br from-[#eaf8f0] via-[#f5fbf7] to-[#ffffff] text-slate-900 pt-[172px] sm:pt-32 lg:pt-36 pb-16 lg:pb-24 border-b border-emerald-100/80 overflow-hidden">
          
          {/* Subtle Radial Dots Mesh */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
              backgroundSize: "36px 36px"
            }}
          />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
            
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-emerald-600 transition-colors">Locations We Serve</Link>
              <span>/</span>
              <span className="text-emerald-700 font-bold">{location.keyword}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: High-Intent Local Proposition */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                
                {/* Authority Status Pill */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse inline-block shrink-0" />
                  <span className="text-slate-800">{location.heroBadge}</span>
                  <span className="bg-emerald-50 text-[#059669] text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border border-emerald-200/60 shrink-0">
                    {location.region} Hub
                  </span>
                </div>

                {/* Primary Semantic H1 */}
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.12] tracking-tight text-slate-900">
                  {location.h1}
                </h1>

                {/* District Micro-Market Tag */}
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <MapPin size={16} className="text-emerald-600 shrink-0" />
                  <span>Coverage Area: <strong className="text-slate-900 font-bold">{location.district}</strong></span>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                  {location.heroDescription}
                </p>

                {/* High-Intent CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => openEnquiryModal(`Location Scoping: ${location.keyword}`)}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-black shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Book In-Person Technical Audit</span>
                  </button>

                  <a
                    href="tel:+918814930229"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-sm transition-all hover:border-emerald-300"
                  >
                    <Phone size={14} className="text-emerald-600" />
                    <span>Direct Call: 88149 30229</span>
                  </a>
                </div>

                {/* Trust Signals Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">By Appointment</div>
                      <div className="text-[11px] text-slate-500 font-medium">Delhi NCR Office Visits</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Zap size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">{location.turnaround}</div>
                      <div className="text-[11px] text-slate-500 font-medium">Delivery SLA</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">100% IP</div>
                      <div className="text-[11px] text-slate-500 font-medium">Code Ownership</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Award size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">99+ SLA</div>
                      <div className="text-[11px] text-slate-500 font-medium">Core Web Vitals</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Scoping Dispatch Consultation Card */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        Delhi NCR Office Visit
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-bold">
                      By Appointment
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    Schedule a Visit to Our Delhi NCR Office
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Meet a lead solutions architect at our New Delhi office to review your requirements and discuss system architecture.
                  </p>

                  <div className="space-y-2 text-xs text-slate-300 bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Target Location:</span>
                      <span className="font-bold text-emerald-400">{location.district}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Typical Pricing:</span>
                      <span className="font-bold text-white">{location.pricingRange}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Delivery Velocity:</span>
                      <span className="font-bold text-white">{location.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Consultation:</span>
                      <span className="font-bold text-emerald-400">By Appointment</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} />
                    <span>Visit Our Office in Delhi NCR</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    Strict NDA signed prior to code review • Zero sales obligation
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. CORE DELIVERABLES FOR THIS SERVICE & LOCATION                          */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-emerald-200">
                <Code2 size={13} className="text-emerald-600" />
                <span>Verified Engineering Deliverables</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Architectural Deliverables for {location.keyword}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Every project built by HiveRift follows strict enterprise coding standards with zero technical debt, modular components, and guaranteed 99+ Core Web Vitals.
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack Banner */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Core Technologies Deployed
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {location.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Typical Pricing</span>
                  <span className="text-sm font-black text-slate-900">{location.pricingRange}</span>
                </div>
                <button
                  onClick={() => openEnquiryModal(`Quote: ${location.keyword}`)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Request Exact Quote
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. REGIONAL NETWORK MAP SPOTLIGHT                                         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-200">
                  <MapPin size={13} className="text-emerald-700" />
                  <span>Regional Corridor Connection</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  In-Person Consultations at Our Delhi NCR Office
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Businesses in {location.district} can schedule an in-person consultation at HiveRift&apos;s New Delhi office for whiteboarding, code discussions, and project planning.
                </p>

                <div className="space-y-3 pt-2">
                  {location.localHighlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <Calendar size={14} className="text-emerald-400" />
                    <span>Visit Our Office in Delhi NCR</span>
                  </button>
                </div>
              </div>

              {/* Map Preview Frame */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-slate-900">Delhi NCR Service Matrix Map</span>
                  <span className="text-emerald-600 font-mono font-bold">Active Hub: {location.region}</span>
                </div>
                <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center p-2">
                  <img
                    src="/delhi-ncr-network-map.png"
                    alt="Delhi NCR Network Coverage Map"
                    className="w-full h-auto max-h-[360px] object-contain"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. LOCALIZED FAQS ACCORDION                                               */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions — {location.keyword}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Common questions from businesses in {location.district} regarding delivery, timelines, and technical architecture.
              </p>
            </div>

            <div className="space-y-3">
              {location.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === fIdx ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === fIdx && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. RELATED REGIONAL LOCATIONS (SEO CROSS-LINKING)                         */}
        {/* ========================================================================= */}
        {nearbyLocations.length > 0 && (
          <section className="py-16 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Explore Adjacent Regional Hubs & Services
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Related web development and digital solutions across Delhi NCR.
                  </p>
                </div>
                <Link
                  href="/locations"
                  className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  <span>View All 30 Locations</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locations/${nearby.slug}`}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group block"
                  >
                    <div className="text-[10px] font-mono text-emerald-600 font-bold uppercase mb-1">
                      {nearby.region} • {nearby.turnaround}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {nearby.keyword}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 truncate">
                      {nearby.district}
                    </p>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 7. BOTTOM CONSULTATION BANNER                                             */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-7xl py-16">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-bold">
                <ShieldCheck size={13} />
                <span>Ready for Scalable Web Engineering?</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Let&apos;s Build Your Digital Presence in {location.district}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Book a direct consultation with a senior technical architect. Get an architectural scope analysis, tech stack roadmap, and fixed quote within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => openEnquiryModal(`Location Footer: ${location.keyword}`)}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-slate-950 font-black text-sm shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Location Scoping Call
              </button>
              <a
                href="tel:+918814930229"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-950/40 hover:bg-emerald-950/60 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
              >
                Call 88149 30229
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 8. GLOBAL FOOTER */}
      <Footer />

    </div>
  );
}

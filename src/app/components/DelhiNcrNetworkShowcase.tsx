"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  Building2,
  Landmark,
  ArrowRight,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe2
} from "lucide-react";
import { openEnquiryModal } from "./EnquiryModal";

const corridors = [
  {
    hub: "Delhi Hub",
    tagline: "Capital & Enterprise Center",
    icon: MapPin,
    districts: "Connaught Place, South Delhi (Saket, Hauz Khas), Dwarka & Nehru Place",
    transit: "< 30 Min Dispatch",
    href: "/locations/web-development-company-in-delhi",
    accent: "from-emerald-500/10 to-teal-500/10",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
  },
  {
    hub: "Noida Hub",
    tagline: "East NCR Tech & Software Park",
    icon: Building2,
    districts: "Sector 62 IT Parks, Sector 18 Commercial District & Expressway Corridor",
    transit: "< 40 Min Dispatch",
    href: "/locations/website-development-company-in-noida",
    accent: "from-teal-500/10 to-cyan-500/10",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
  },
  {
    hub: "Gurgaon Hub",
    tagline: "Cyber City & Global MNC Corridor",
    icon: Landmark,
    districts: "DLF Cyber City, Udyog Vihar, Golf Course Road & Sohna Road",
    transit: "< 45 Min Dispatch",
    href: "/locations/website-development-company-in-gurgaon",
    accent: "from-cyan-500/10 to-emerald-500/10",
    badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200"
  }
];

export function DelhiNcrNetworkShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f4fcf7] to-white text-slate-900 relative overflow-hidden border-t border-emerald-100">
      
      {/* Background Radial Dots Grid Accent */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-3 shadow-sm">
            <MapPin size={13} className="text-emerald-700" />
            <span className="text-[11px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Connected Engineering Corridor • Delhi NCR & Global
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-900 leading-[1.15]">
            In-Person Consultations at Our Delhi NCR Office{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700">
              Delhi, Noida & Gurgaon
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Clients across Gurgaon, Noida, and Delhi can schedule in-person architectural consultations at HiveRift&apos;s New Delhi office.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* HIGHLIGHTED PANORAMIC NETWORK MAP CARD (DELHI-NCR-NETWORK-MAP.PNG)        */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-white border-2 border-emerald-200/90 shadow-2xl shadow-emerald-950/10 p-4 sm:p-7 lg:p-8 overflow-hidden mb-10">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                Delhi NCR Service Areas • Office Consultations by Appointment
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="hidden sm:inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                <Globe2 size={12} className="text-emerald-600" />
                <span>28.6139° N, 77.2090° E</span>
              </span>
              <span className="bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                Delhi • Noida • Gurgaon
              </span>
            </div>
          </div>

          {/* Map Image Showcase Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50/60 p-2 sm:p-4 border border-slate-200/80 flex items-center justify-center group">
            <img
              src="/delhi-ncr-network-map.png"
              alt="HiveRift Delhi NCR Network Coverage Map - Gurgaon, Delhi, Noida"
              className="w-full h-auto max-h-[360px] sm:max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>

          {/* Quick SLA Ticker under Map */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">By Appointment</div>
                <div className="text-[11px] text-slate-500">Delhi NCR Office Visits</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">Full IP Code</div>
                <div className="text-[11px] text-slate-500">Ownership Transfer</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">Next.js 15</div>
                <div className="text-[11px] text-slate-500">Sub-Second Delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">30 Hubs</div>
                <div className="text-[11px] text-slate-500">Dedicated Regional Pages</div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3 CORRIDOR CARDS                                                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {corridors.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Icon size={20} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${c.badgeColor}`}>
                      {c.transit}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {c.hub}
                  </h3>
                  <div className="text-xs text-emerald-600 font-bold mb-2">
                    {c.tagline}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {c.districts}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={c.href}
                    className="text-xs font-bold text-slate-700 group-hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View Hub Specifications</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openEnquiryModal(`Regional Scoping: ${c.hub}`)}
                    className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80 cursor-pointer"
                  >
                    Book Audit
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTION BAR                                                         */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black text-white">
              Visit Our Office in Delhi NCR
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Choose a convenient time to visit our Delhi NCR office and discuss your project with our engineering team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Calendar size={14} />
              <span>Visit Our Office in Delhi NCR</span>
            </button>

            <Link
              href="/locations"
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>Explore All 30 Locations</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}

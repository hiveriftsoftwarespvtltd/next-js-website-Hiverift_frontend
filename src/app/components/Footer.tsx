"use client";

import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  MessageCircle, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import { openEnquiryModal } from "./EnquiryModal";

const SERVICES_LINKS = [
  { name: "Website Development", href: "/services/web-development" },
  { name: "eCommerce Development", href: "/services/ecommerce" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Mobile Development", href: "/services/mobile-development" },
  { name: "AI & Automation", href: "/services/ai-ml" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "UI/UX Design", href: "/services/ui-ux" }
];

const SOLUTIONS_LINKS = [
  { name: "ERP & CRM", href: "/solutions" },
  { name: "SaaS Platforms", href: "/solutions" },
  { name: "Cloud & DevOps", href: "/services/cloud-devops" },
  { name: "Business Automation", href: "/solutions" },
  { name: "API Integrations", href: "/solutions" },
  { name: "Data Annotation", href: "/services/data-annotation" }
];

const COMPANY_LINKS = [
  { name: "About HiveRift", href: "/about" },
  { name: "Industries We Serve", href: "/industries" },
  { name: "Selected Work & Case Studies", href: "/case-studies" },
  { name: "Insights & Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" }
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/hiverift-softwares", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/hiverift.global/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61576054306888", icon: Facebook },
  { name: "YouTube", href: "https://youtube.com/@hiveriftsoftwaresprivatelimite", icon: Youtube }
];

const SEO_PILLS = [
  { name: "Website Development Company in Delhi", href: "/locations/web-development-company-in-delhi" },
  { name: "Website Development Services", href: "/services/web-development" },
  { name: "Website Design Company in Delhi NCR", href: "/locations/website-design-company-in-delhi" },
  { name: "Web Development Company in Delhi", href: "/locations/web-development-company-in-delhi" },
  { name: "Business Website Development", href: "/locations/business-website-development-in-delhi" },
  { name: "Ecommerce Website Development Company", href: "/services/ecommerce" },
  { name: "Website Development Packages", href: "/services/web-development#project-form" },
  { name: "Website Design Cost in India", href: "/services/web-development" },
  { name: "Website Redesign Company", href: "/services/web-development" },
  { name: "Corporate Website Design", href: "/locations/business-website-development-in-delhi" },
  { name: "Small Business Website Development", href: "/locations/affordable-website-development-in-delhi" },
  { name: "Online Store Development", href: "/services/ecommerce" },
  { name: "Ecommerce Website Designer", href: "/services/ecommerce" },
  { name: "Website Developer Near Me", href: "/locations" }
];

export function Footer() {
  return (
    <footer id="contact-footer" className="relative bg-[#02130e] text-slate-300 border-t border-emerald-950/80 overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* AMBIENT BACKGROUND ANIMATION & CYBER WAVES (Matching User Reference Image) */}
      {/* ========================================================================= */}

      {/* 1. Left Dotted Cyber-Matrix Wave */}
      <div 
        className="absolute -left-12 top-0 bottom-0 w-[420px] pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(#10b981 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse at 15% 45%, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 15% 45%, black 40%, transparent 75%)"
        }}
      />

      {/* 2. Right Glowing Emerald Fluid Wave Ribbon */}
      <div className="absolute -right-20 top-1/4 w-[600px] h-[500px] pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.28, 0.15],
            rotate: [0, 4, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-to-l from-emerald-500/25 via-teal-400/10 to-transparent rounded-full blur-[90px]"
        />
      </div>

      {/* 3. Ambient Center Pulse Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] -translate-y-1/2 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Animated Subtle Floating Particle Orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-[28%] w-1.5 h-1.5 rounded-full bg-emerald-400 blur-[0.5px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-28 right-[32%] w-2 h-2 rounded-full bg-teal-300 blur-[1px] pointer-events-none"
      />

      {/* ========================================================================= */}
      {/* MAIN FOOTER CONTAINER CONTENT                                             */}
      {/* ========================================================================= */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-7xl relative z-10">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14">
          
          {/* Column 1: Brand Info & Socials (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white px-4 py-2.5 rounded-2xl shadow-xl shadow-emerald-950/60 transition-transform hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="HiveRift"
                className="h-8 sm:h-9 w-auto object-contain block"
              />
            </Link>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              <span className="text-white block">Technology That</span>
              <span className="text-[#00e599] drop-shadow-[0_0_12px_rgba(0,229,153,0.4)]">
                Helps Businesses Grow.
              </span>
            </h3>

            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm">
              HiveRift Softwares Pvt Ltd is a premier software engineering & digital agency in New Delhi, India. Empowering startups, local businesses, and enterprise brands across India with high-performance custom software, web platforms, mobile apps, and AI solutions.
            </p>

            {/* Social Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-8 h-8 rounded-lg bg-[#06241a]/80 hover:bg-[#0b3829] border border-emerald-900/80 hover:border-[#00e599] text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                    title={social.name}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm mb-4 tracking-tight flex items-center gap-1.5">
              <span>Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#00e599] hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm mb-4 tracking-tight flex items-center gap-1.5">
              <span>Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#00e599] hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm mb-4 tracking-tight flex items-center gap-1.5">
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#00e599] hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect With Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-extrabold text-sm mb-3 tracking-tight">
              Connect With Us
            </h4>

            {/* Direct Call Line */}
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Phone size={14} className="text-[#00e599] shrink-0" />
              <span>Direct Call:</span>
              <a
                href="tel:+918814930229"
                className="text-[#00e599] font-bold hover:underline transition-colors tracking-tight"
              >
                +91 88149 30229
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <MapPin size={14} className="text-[#00e599] shrink-0 mt-0.5" />
              <span>Karol Bagh, New Delhi - 110005, India</span>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <Mail size={14} className="text-[#00e599] shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <a href="mailto:info@hiverift.com" className="hover:text-white transition-colors block">
                  info@hiverift.com
                </a>
                <a href="mailto:support@hiverift.com" className="hover:text-white transition-colors block text-slate-400">
                  support@hiverift.com
                </a>
              </div>
            </div>

            {/* Proposal CTA Button with Vivid Glow */}
            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal()}
                className="group relative inline-flex items-center justify-between w-full max-w-[240px] px-5 py-3 rounded-2xl bg-gradient-to-r from-[#00d084] via-[#05b875] to-[#049a62] text-slate-950 font-black text-xs shadow-[0_0_25px_rgba(0,208,132,0.4)] hover:shadow-[0_0_35px_rgba(0,208,132,0.7)] transition-all hover:scale-[1.03] active:scale-95 cursor-pointer overflow-hidden"
              >
                {/* Shimmer Light Reflection Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <span className="flex items-center gap-2 text-slate-950 font-black">
                  <FileText size={15} />
                  <span>Get Instant Proposal</span>
                </span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quick Contact Action Icons (WhatsApp, Email, Phone) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://wa.me/918814930229?text=Hi%20HiveRift%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="w-9 h-9 rounded-xl bg-[#06241a]/90 hover:bg-[#0b3829] border border-emerald-900/90 hover:border-[#00e599] text-slate-300 hover:text-[#00e599] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>

              <a
                href="mailto:info@hiverift.com"
                aria-label="Email Us"
                className="w-9 h-9 rounded-xl bg-[#06241a]/90 hover:bg-[#0b3829] border border-emerald-900/90 hover:border-[#00e599] text-slate-300 hover:text-[#00e599] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                title="Send Email"
              >
                <Mail size={16} />
              </a>

              <a
                href="tel:+918814930229"
                aria-label="Call Us"
                className="w-9 h-9 rounded-xl bg-[#06241a]/90 hover:bg-[#0b3829] border border-emerald-900/90 hover:border-[#00e599] text-slate-300 hover:text-[#00e599] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                title="Direct Phone Call"
              >
                <Phone size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* MIDDLE SECTION: SEO SERVICES & AREAS WE SERVE WITH LASER ACCENT           */}
        {/* ========================================================================= */}

        <div className="relative pt-10 pb-8 border-t border-emerald-950/80">
          
          {/* Laser Highlight Accent Line on Border */}
          <div className="absolute top-0 left-0 w-36 h-[2px] bg-gradient-to-r from-[#00e599] via-emerald-400 to-transparent shadow-[0_0_10px_#00e599]" />

          {/* Section Header with Green Vertical Accent Marker */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-1.5 h-4 rounded-full bg-[#00e599] shadow-[0_0_10px_#00e599]" />
            <h5 className="text-white text-xs font-black uppercase tracking-wider">
              WEBSITE DEVELOPMENT SERVICES & AREAS WE SERVE
            </h5>
          </div>

          {/* Badges / Pills Matrix (Matching User Sample Image) */}
          <div className="flex flex-wrap gap-2">
            {SEO_PILLS.map((pill, idx) => (
              <Link
                key={idx}
                href={pill.href}
                className="px-3.5 py-1.5 rounded-xl bg-[#05261d]/80 hover:bg-[#0a3d2f] border border-emerald-900/90 hover:border-[#00e599] text-[11px] text-slate-300 hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,229,153,0.25)] hover:scale-[1.02]"
              >
                {pill.name}
              </Link>
            ))}
          </div>

          {/* Service Coverage Areas Line with Cyan/Emerald Bullets */}
          <p className="text-xs text-slate-300 mt-5 leading-relaxed">
            <strong className="text-white font-bold">Service Coverage Areas:</strong>{" "}
            <Link href="/locations/web-development-company-in-delhi" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              New Delhi
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/locations" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Delhi NCR
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/locations/website-development-company-in-noida" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Noida
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/locations/website-development-company-in-sector-62-noida" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Greater Noida
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/locations/website-development-company-in-gurgaon" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Gurgaon (Gurugram)
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/locations" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Faridabad
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/locations" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Ghaziabad
            </Link>{" "}
            <span className="text-[#00e599]">•</span>{" "}
            <Link href="/contact" className="hover:text-[#00e599] transition-colors underline decoration-emerald-800/80 hover:decoration-[#00e599]">
              Pan-India & Global Clients
            </Link>
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM LEGAL & COPYRIGHT BAR                                              */}
        {/* ========================================================================= */}

        <div className="pt-6 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 HiveRift Softwares Pvt Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-3 text-slate-400">
            <Link href="/privacy" className="hover:text-[#00e599] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-emerald-900">•</span>
            <Link href="/terms" className="hover:text-[#00e599] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-emerald-900">•</span>
            <Link href="/contact" className="hover:text-[#00e599] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
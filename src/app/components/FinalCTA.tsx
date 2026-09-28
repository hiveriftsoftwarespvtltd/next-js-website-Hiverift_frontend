"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export function FinalCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 lg:py-14 bg-gradient-to-br from-[#e8f8f0] via-[#f4fbf7] to-[#e4f6ec] text-slate-900 relative overflow-hidden border-t border-emerald-200">
      {/* Background Technology Mesh & Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-white/70 backdrop-blur-sm border-2 border-emerald-300/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-emerald-500/5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full shadow-sm">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Ready to Accelerate?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Let's Build Something That <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
              Moves Your Business Forward.
            </span>
          </h2>

          <p className="text-base sm:text-[1.0625rem] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Whether you're launching a new digital product, building an online store or looking to grow through digital marketing, let's discuss your requirements.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              asChild
              className="bg-[#10b981] hover:bg-[#059669] text-white font-black px-8 py-6 text-base rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <Link href="#enquiry" onClick={(e) => { e.preventDefault(); scrollTo("enquiry"); }}>
                Start a Project
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>

            <a
              href="https://wa.me/918814930229"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-base font-bold shadow-xl shadow-green-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+918814930229"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border-2 border-emerald-300 text-sm font-bold shadow-sm transition-all"
            >
              <Phone size={15} className="text-[#0284c7]" />
              <span>+91 88149 30229</span>
            </a>
          </div>

          {/* Key Assurance Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs text-slate-600 font-mono font-medium">
            <span className="flex items-center gap-1.5 text-slate-800">
              <CheckCircle2 size={14} className="text-[#059669]" /> Direct Senior Engineer Response
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-800">
              <CheckCircle2 size={14} className="text-[#059669]" /> Transparent Milestones
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-800">
              <CheckCircle2 size={14} className="text-[#059669]" /> Full Code Ownership
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

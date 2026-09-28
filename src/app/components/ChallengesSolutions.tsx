"use client";

import { motion } from "motion/react";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

const challengeMap = [
  {
    challenge: "Outdated Website",
    challengeDesc: "Slow loading speeds, broken mobile layouts, and dated aesthetics that harm your brand credibility and push prospects away.",
    solution: "Modern Web Experience",
    solutionDesc: "Ultra-fast Next.js architecture, bespoke UI/UX, responsive layouts across all devices, and interactive product storytelling.",
    category: "Web Engineering"
  },
  {
    challenge: "Manual Processes",
    challengeDesc: "Teams wasting hundreds of hours on repetitive spreadsheets, manual data entry, and slow disconnected workflows.",
    solution: "Software & Automation",
    solutionDesc: "Custom web applications, ERP/CRM portals, automated webhook listeners, and digital processes that run 24/7 with zero human error.",
    category: "Operations"
  },
  {
    challenge: "Poor Online Visibility",
    challengeDesc: "Ranking on page 4 of Google while competitors dominate organic rankings and capture the vast majority of search volume.",
    solution: "SEO & Digital Marketing",
    solutionDesc: "Technical search audits, semantic on-page SEO, high-intent keyword ranking, and Google Maps local dominance that brings qualified traffic.",
    category: "Organic Growth"
  },
  {
    challenge: "Low Online Sales",
    challengeDesc: "High bounce rates, abandoned carts, confusing checkout steps, and payment drop-offs holding back online store revenue.",
    solution: "eCommerce Development",
    solutionDesc: "Frictionless 1-click checkout, automated cart recovery, multi-gateway payments (UPI, cards), and mobile-first storefronts.",
    category: "Commerce"
  },
  {
    challenge: "Disconnected Systems",
    challengeDesc: "Inventory, customer enquiries, CRM, and accounts operating in separate data silos with no real-time sync.",
    solution: "API & System Integration",
    solutionDesc: "Unified REST and GraphQL integrations synchronizing data across billing, logistics, WhatsApp, and inventory in real time.",
    category: "Integration"
  },
  {
    challenge: "Poor Lead Conversion",
    challengeDesc: "Traffic visits your website but leaves without booking a consultation, submitting an inquiry, or initiating contact.",
    solution: "Conversion-Focused Experience",
    solutionDesc: "Strategic CTA hierarchy, trust proof, frictionless enquiry modals, WhatsApp quick-chat hooks, and clear value messaging.",
    category: "CRO"
  }
];

export function ChallengesSolutions() {
  return (
    <section className="py-12 lg:py-14 bg-white text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Business Transformation
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Your Digital Challenges. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
              Our Technology Solutions.
            </span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            Every business encounters digital friction at some stage of its lifecycle. Here is how we bridge the gap between obstacles and measurable growth.
          </p>
        </div>

        {/* 6 Challenges -> Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {challengeMap.map((item, idx) => (
            <motion.div
              key={item.challenge}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl bg-white border-2 border-emerald-200/80 hover:border-emerald-500 p-7 flex flex-col justify-between shadow-xl shadow-emerald-900/5 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#059669] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-4">
                  {item.category}
                </span>

                {/* The Challenge */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-rose-600 font-black text-sm mb-1.5">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>The Challenge: {item.challenge}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.challengeDesc}
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <div className="flex items-center gap-2 text-[#059669] font-black text-sm mb-1.5">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Our Solution: {item.solution}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-[#059669] font-mono font-bold">
                <span>Result: Predictable Growth</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

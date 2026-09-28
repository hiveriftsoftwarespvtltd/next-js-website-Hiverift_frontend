"use client";

import { motion } from "motion/react";
import { 
  Briefcase, 
  Settings2, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Headphones 
} from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Business First",
    desc: "We align code and architecture directly with commercial outcomes, customer acquisition, and operational ROI."
  },
  {
    icon: Settings2,
    title: "Custom Solutions",
    desc: "Every website, application, and workflow is engineered specifically for your brand rather than forced into generic templates."
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "We leverage fast, modern stacks—Next.js, React, Node.js, Flutter, AWS—ensuring longevity and peak performance."
  },
  {
    icon: ShieldCheck,
    title: "Scalable Architecture",
    desc: "Built to handle expanding product lines, heavy user traffic spikes, and multi-region business expansion without friction."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Development and marketing work hand-in-hand to maximize search engine indexing, user engagement, and qualified lead flow."
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    desc: "Direct communication with engineers, proactive security patches, continuous optimization, and reliable post-launch partnership."
  }
];

export function WhyHiveRift() {
  return (
    <section id="why-us" className="py-12 lg:py-14 bg-[#f4fcf7] text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              The HiveRift Advantage
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Why Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Choose HiveRift</span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            We partner with ambitious startups, growing enterprises, and established brands as an end-to-end technology and digital growth team.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-white border-2 border-emerald-200/80 hover:border-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-900/5 hover:shadow-2xl group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mb-6 group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#059669] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

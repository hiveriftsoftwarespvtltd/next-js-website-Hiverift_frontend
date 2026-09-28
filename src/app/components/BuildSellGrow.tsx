"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Hammer, ShoppingCart, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const pillars = [
  {
    phase: "BUILD",
    title: "Website Development",
    subtitle: "High-Performance Foundation",
    description: "Architecting fast, responsive, and custom business websites and web applications built on modern frameworks.",
    highlights: [
      "Custom UI/UX & Responsive Design",
      "Next.js, React & WordPress",
      "Technical SEO & Core Web Vitals Ready",
      "Scalable Cloud Architecture"
    ],
    icon: Hammer,
    accent: "text-[#059669]",
    badgeBg: "bg-emerald-100 text-[#059669]",
    cardBorder: "border-2 border-emerald-400",
    href: "/services/web-development"
  },
  {
    phase: "SELL",
    title: "eCommerce Development",
    subtitle: "Conversion-Centric Storefronts",
    description: "Designing seamless online shopping journeys from product catalogue discovery to instant one-click payment checkout.",
    highlights: [
      "Product Catalogues & Inventory Sync",
      "Multi-Gateway Payments (UPI, Cards)",
      "Cart Optimization & Recovery",
      "Customer Accounts & Order Portals"
    ],
    icon: ShoppingCart,
    accent: "text-teal-700",
    badgeBg: "bg-teal-100 text-teal-800",
    cardBorder: "border-2 border-teal-400",
    href: "/services/ecommerce"
  },
  {
    phase: "GROW",
    title: "Digital Marketing",
    subtitle: "Predictable Customer Acquisition",
    description: "Attracting relevant audiences through organic search dominance, performance advertising, and analytics.",
    highlights: [
      "Targeted Google Search & Meta Ads",
      "On-Page & Technical SEO Domination",
      "Conversion Rate Optimization (CRO)",
      "Transparent Analytics & Lead Funnels"
    ],
    icon: TrendingUp,
    accent: "text-cyan-700",
    badgeBg: "bg-cyan-100 text-cyan-800",
    cardBorder: "border-2 border-cyan-400",
    href: "/services/digital-marketing"
  }
];

export function BuildSellGrow() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 lg:py-14 bg-[#f2fbf6] text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              The Digital Growth Continuum
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Build. Sell. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Grow.</span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            From building your digital foundation to creating online commerce experiences and driving qualified traffic, HiveRift brings technology and growth together.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-[2rem] p-8 bg-white ${item.cardBorder} shadow-xl shadow-emerald-900/5 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-black tracking-widest px-3 py-1 rounded-full ${item.badgeBg}`}>
                      0{index + 1} • {item.phase}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${item.badgeBg} flex items-center justify-center`}>
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className={`text-xs font-bold ${item.accent} mb-4`}>
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={15} className={`${item.accent} shrink-0 mt-0.5`} />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider ${item.accent} hover:underline underline-offset-4 mt-auto`}
                >
                  Explore {item.title} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Central CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-[#10b981] hover:bg-[#059669] text-white font-extrabold px-8 py-6 text-base rounded-full shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
          >
            <Link href="#enquiry" onClick={(e) => { e.preventDefault(); scrollTo("enquiry"); }}>
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

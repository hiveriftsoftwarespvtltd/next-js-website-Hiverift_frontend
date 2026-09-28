"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Code, 
  Smartphone, 
  Cpu, 
  Layers, 
  Palette, 
  Cloud, 
  Network, 
  Zap, 
  Building2,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";

const solutions = [
  {
    title: "Custom Software Development",
    desc: "Bespoke software engineered to solve unique operational bottlenecks and automate high-value workflows.",
    icon: Code,
    href: "/services/software-development",
    tag: "Enterprise"
  },
  {
    title: "ERP & CRM Systems",
    desc: "Centralized client management, inventory tracking, role-based controls, and seamless company data pipelines.",
    icon: Building2,
    href: "/solutions",
    tag: "Operations"
  },
  {
    title: "Mobile App Development",
    desc: "Native iOS and Android and cross-platform Flutter/React Native applications built for intuitive consumer experiences.",
    icon: Smartphone,
    href: "/services/mobile-development",
    tag: "iOS & Android"
  },
  {
    title: "AI & Automation",
    desc: "Intelligent workflow automation, AI assistants, custom GPTs, and predictive analytics that reduce repetitive manual tasks.",
    icon: Cpu,
    href: "/services/ai-ml",
    tag: "Next-Gen"
  },
  {
    title: "SaaS Development",
    desc: "Multi-tenant cloud architecture, recurring subscription billing, user role permissions, and scalable database schemas.",
    icon: Layers,
    href: "/solutions",
    tag: "Cloud Product"
  },
  {
    title: "UI/UX Design",
    desc: "User research, wireframing, interactive prototyping, and design systems crafted for high conversion and brand delight.",
    icon: Palette,
    href: "/services/ui-ux",
    tag: "Creative"
  },
  {
    title: "Cloud & DevOps",
    desc: "Secure infrastructure provisioning, automated CI/CD deployment pipelines, zero-downtime releases, and cloud security.",
    icon: Cloud,
    href: "/services/cloud-devops",
    tag: "Infra"
  },
  {
    title: "API Integrations",
    desc: "Connecting payment gateways, CRMs, WhatsApp business APIs, shipping aggregators, and third-party SaaS tools.",
    icon: Network,
    href: "/solutions",
    tag: "Connectivity"
  },
  {
    title: "Business Automation",
    desc: "Eliminating manual data entry, automated invoice generation, webhook listeners, and intelligent alert bots.",
    icon: Zap,
    href: "/solutions",
    tag: "Productivity"
  }
];

export function OtherSolutions() {
  return (
    <section id="solutions" className="py-12 lg:py-14 bg-[#f5fbf7] text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Full Spectrum Capabilities
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            More <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Digital Solutions</span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            Beyond our core website, eCommerce, and marketing mastery, we architect comprehensive software and cloud solutions to support your ongoing digital evolution.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mb-14">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block h-full p-7 rounded-3xl bg-white border-2 border-emerald-200/80 hover:border-emerald-500 transition-all duration-300 group shadow-lg shadow-emerald-900/5 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#059669] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-medium">
                    {item.desc}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] group-hover:gap-2.5 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-emerald-400 font-extrabold px-8 py-6 rounded-full transition-all hover:scale-105 shadow-md"
          >
            <Link href="/services" className="inline-flex items-center gap-2">
              Explore All Services
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

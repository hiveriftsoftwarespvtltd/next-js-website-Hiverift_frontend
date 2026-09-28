"use client";

import { CheckCircle2, Cpu, Smartphone, ShieldCheck, Network, Search, Headphones } from "lucide-react";

const trustItems = [
  { label: "Modern Technology", icon: Cpu },
  { label: "Responsive Experiences", icon: Smartphone },
  { label: "Scalable Architecture", icon: ShieldCheck },
  { label: "API Integrations", icon: Network },
  { label: "SEO-Ready Development", icon: Search },
  { label: "Ongoing Support", icon: Headphones },
];

export function TrustStrip() {
  return (
    <section className="bg-[#f0fbf4] border-y border-emerald-200/80 py-4 text-slate-900 relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 items-center">
          {trustItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 justify-center md:justify-start px-3 py-2 rounded-xl bg-white border border-emerald-200 shadow-sm"
              >
                <CheckCircle2 size={16} className="text-[#10b981] shrink-0" strokeWidth={2.5} />
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

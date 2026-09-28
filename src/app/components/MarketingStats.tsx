"use client";

import { motion } from "motion/react";
import { Briefcase, Users, Calendar, Layers } from "lucide-react";
import { COMPANY_METRICS } from "@/app/config/companyMetrics";

const metricStyles = [
  { icon: Briefcase, color: "text-emerald-700", bgColor: "bg-emerald-50" },
  { icon: Users, color: "text-teal-700", bgColor: "bg-teal-50" },
  { icon: Calendar, color: "text-cyan-700", bgColor: "bg-cyan-50" },
  { icon: Layers, color: "text-green-700", bgColor: "bg-green-50" },
];

const stats = COMPANY_METRICS.map((metric, index) => ({
  ...metric,
  ...metricStyles[index],
}));

export function MarketingStats() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-5 lg:p-8">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left side: Trusted info */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                Trusted by Brands Worldwide
              </h2>
              <p className="text-gray-500 font-bold text-xs lg:text-sm leading-relaxed">
                We combine strategy, creativity, and technology to help businesses scale faster with impactful digital solutions and performance-driven results.
              </p>

            </div>

            {/* Right side: Stats cards */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm text-center space-y-3">
                  <div className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-2xl flex items-center justify-center mx-auto`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">{stat.value}{stat.suffix}</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter leading-tight">{stat.label}</div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{stat.supporting}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

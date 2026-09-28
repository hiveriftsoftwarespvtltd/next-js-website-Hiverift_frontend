"use client";

import { motion } from "motion/react";
import { COMPANY_METRICS } from "@/app/config/companyMetrics";

const stats = COMPANY_METRICS;

export function StatsStrip() {
  return (
    <section className="py-12 bg-emerald-950 relative overflow-hidden">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl lg:text-4xl font-black text-emerald-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white font-bold text-sm lg:text-base mb-1 uppercase tracking-tight">
                {stat.label}
              </div>
              <div className="text-gray-400 text-[10px] lg:text-xs leading-tight">
                {stat.supporting}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

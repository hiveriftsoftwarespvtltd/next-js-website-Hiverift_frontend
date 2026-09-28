"use client";

import { motion } from "motion/react";
import { Briefcase, Globe, Award, TrendingUp } from "lucide-react";
import { COMPANY_METRICS } from "@/app/config/companyMetrics";

const metricIcons = [Briefcase, Globe, Award, TrendingUp];
const metricColors = ["from-emerald-500 to-teal-500", "from-emerald-600 to-teal-600", "from-teal-500 to-emerald-500", "from-teal-600 to-emerald-600"];
const stats = COMPANY_METRICS.map((metric, index) => ({
  ...metric,
  icon: metricIcons[index],
  color: metricColors[index],
}));

export function Stats() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} mb-3 md:mb-4`}>
                  <Icon size={24} className="text-white md:hidden" strokeWidth={2.5} />
                  <Icon size={32} className="text-white hidden md:block" strokeWidth={2.5} />
                </div>
                
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                  {stat.value}{stat.suffix}
                </div>
                
                <div className="text-gray-300 text-sm md:text-base lg:text-lg">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
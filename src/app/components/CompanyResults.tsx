"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { Briefcase, Users, Calendar, Layers } from "lucide-react";
import { COMPANY_METRICS } from "@/app/config/companyMetrics";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime || 25);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

const metricStyles = [
  { icon: Briefcase, color: "text-[#059669]", bg: "bg-emerald-50", border: "border-2 border-emerald-200/80" },
  { icon: Users, color: "text-teal-700", bg: "bg-teal-50", border: "border-2 border-teal-200/80" },
  { icon: Calendar, color: "text-cyan-700", bg: "bg-cyan-50", border: "border-2 border-cyan-200/80" },
  { icon: Layers, color: "text-[#10b981]", bg: "bg-emerald-50", border: "border-2 border-emerald-200/80" },
];

const verifiedMetrics = COMPANY_METRICS.map((metric, index) => ({
  ...metric,
  ...metricStyles[index],
}));

export function CompanyResults() {
  return (
    <section className="py-12 lg:py-14 bg-[#f4fcf7] text-slate-900 relative overflow-hidden border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {verifiedMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl bg-white ${item.border} text-center flex flex-col items-center justify-between shadow-xl shadow-emerald-900/5 hover:scale-[1.02] transition-all`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon size={24} />
                </div>

                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black ${item.color} mb-2 tracking-tight`}>
                  <Counter end={item.value} suffix={item.suffix} />
                </div>

                <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1.5 tracking-tight">
                  {item.label}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium">
                  {item.supporting}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

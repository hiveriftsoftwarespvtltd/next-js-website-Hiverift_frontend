"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

export function FloatingActions() {
  const [isHoveredWa, setIsHoveredWa] = useState(false);
  const [isHoveredPhone, setIsHoveredPhone] = useState(false);

  return (
    <aside
      aria-label="Quick contact shortcuts"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col gap-3.5 items-end select-none pointer-events-auto"
    >
      {/* 1. Professional Phone Call Button (Blue Circle - Matching Screenshot) */}
      <div className="relative flex items-center">
        {/* Hover Tooltip */}
        <span
          className={`absolute right-full mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700/80 backdrop-blur-md transition-all duration-200 pointer-events-none ${
            isHoveredPhone ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Call: +91 88149 30229</span>
          </span>
        </span>

        <a
          href="tel:+918814930229"
          onMouseEnter={() => setIsHoveredPhone(true)}
          onMouseLeave={() => setIsHoveredPhone(false)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white shadow-[0_8px_24px_rgba(2,132,199,0.45)] hover:shadow-[0_10px_28px_rgba(2,132,199,0.65)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Call HiveRift at +91 88149 30229"
          title="Call HiveRift"
        >
          <Phone size={24} className="text-white fill-white/10 transition-transform group-hover:rotate-12 duration-300" />
        </a>
      </div>

      {/* 2. Professional WhatsApp Button (Vibrant Green Circle - Matching Screenshot) */}
      <div className="relative flex items-center">
        {/* Hover Tooltip with Status */}
        <span
          className={`absolute right-full mr-3 px-3.5 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-bold whitespace-nowrap shadow-xl border border-emerald-900/80 backdrop-blur-md transition-all duration-200 pointer-events-none ${
            isHoveredWa ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-[11px] uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Online • Instant Reply</span>
            </div>
            <span className="text-white text-xs font-semibold mt-0.5">
              Chat on WhatsApp
            </span>
          </div>
        </span>

        <a
          href="https://wa.me/918814930229?text=Hi%20HiveRift%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20your%20team."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHoveredWa(true)}
          onMouseLeave={() => setIsHoveredWa(false)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2bd96d] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.65)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Chat with HiveRift on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* Subtle Radar Pulse Ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-30 pointer-events-none" />

          {/* Official WhatsApp Brand SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            className="text-white fill-white transition-transform group-hover:scale-105 duration-300"
            aria-hidden="true"
          >
            <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.16-1.31c1.42.77 3.04 1.22 4.84 1.22 5.52 0 10-4.48 10-10S17.52 2 12.004 2zm0 18.25c-1.62 0-3.13-.48-4.42-1.3l-.32-.2-3.27.83.87-3.18-.21-.34c-.9-1.41-1.38-3.05-1.38-4.76 0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25z" />
            <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.13-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.116 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.812.55-.055 1.78-.727 2.03-1.428.25-.701.25-1.302.175-1.428-.075-.126-.275-.201-.575-.351z" />
          </svg>

          {/* Active Live Indicator Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />
        </a>
      </div>
    </aside>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, Copy, Check, ShieldCheck, Zap, Activity } from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";

export interface TerminalLog {
  text: string;
  type: "cmd" | "info" | "success" | "warning" | "cyan";
  tag?: string;
}

export interface TerminalSpec {
  label: string;
  val: string;
  status: string;
}

export interface ServiceLiveTerminalProps {
  badgeText?: string;
  heading: string;
  highlightHeading: string;
  subheading: string;
  terminalTitle: string;
  branchInfo?: string;
  logs: TerminalLog[];
  specs: TerminalSpec[];
  ctaText?: string;
}

export function ServiceLiveTerminal({
  badgeText = "Live Edge Stream",
  heading,
  highlightHeading,
  subheading,
  terminalTitle,
  branchInfo = "production (fastlane)",
  logs,
  specs,
  ctaText = "Deploy Enterprise Architecture"
}: ServiceLiveTerminalProps) {
  const [copied, setCopied] = useState(false);
  const [visibleCount, setVisibleCount] = useState(logs.length);

  // Re-run streaming animation
  useEffect(() => {
    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < logs.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 280);
    return () => clearInterval(interval);
  }, [logs]);

  const handleCopy = () => {
    const rawText = logs.map((l) => l.text).join("\n");
    navigator.clipboard?.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity size={14} className="animate-pulse" />
            <span>{badgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {highlightHeading}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            {subheading}
          </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Title Bar */}
          <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-slate-400 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5">
                <Terminal size={13} className="text-emerald-400" />
                {terminalTitle}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] text-slate-500">
                branch: <strong className="text-slate-300">{branchInfo}</strong>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 text-[11px]"
                title="Copy Terminal Logs"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Logs Area */}
          <div className="p-5 sm:p-7 space-y-2.5 min-h-[300px] overflow-x-auto text-slate-300">
            {logs.slice(0, visibleCount).map((log, index) => {
              let colorClass = "text-slate-300";
              if (log.type === "cmd") colorClass = "text-cyan-400 font-bold";
              else if (log.type === "success") colorClass = "text-emerald-400 font-semibold";
              else if (log.type === "warning") colorClass = "text-amber-300";
              else if (log.type === "cyan") colorClass = "text-teal-300 font-mono";

              return (
                <div key={index} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-slate-600 select-none text-[11px] shrink-0 mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {log.tag && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-slate-800 text-slate-400 shrink-0 border border-slate-700">
                      {log.tag}
                    </span>
                  )}
                  <span className={`${colorClass} break-all sm:break-normal`}>
                    {log.type === "cmd" && <span className="text-emerald-500 select-none mr-1.5">$</span>}
                    {log.text}
                  </span>
                </div>
              );
            })}

            {visibleCount < logs.length && (
              <div className="flex items-center gap-2 text-slate-500 italic pt-2">
                <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" />
                <span>Executing automated pipelines...</span>
              </div>
            )}
          </div>

          {/* Bottom Live Specs Bar */}
          <div className="px-5 py-3.5 bg-slate-950/90 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex flex-col">
                <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">{spec.label}</span>
                <span className="font-bold text-slate-200 mt-0.5">{spec.val}</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  {spec.status}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-8 text-center">
          <button
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <Zap size={15} />
            <span>{ctaText}</span>
          </button>
        </div>

      </div>
    </section>
  );
}

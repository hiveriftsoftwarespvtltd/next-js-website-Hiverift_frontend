"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Crosshair,
  CheckCircle2,
  Code2,
  Activity,
  Zap,
  Copy,
  Check,
  Play,
  RotateCw,
  Terminal,
  ShieldCheck,
  Eye,
  Sliders,
  Layers,
  Database
} from "lucide-react";

export function DataAnnotationHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"canvas" | "coco" | "qa">("canvas");
  const [selectedTask, setSelectedTask] = useState<"autonomous" | "medical" | "ocr">("autonomous");
  const [isValidating, setIsValidating] = useState(false);
  const [validationScore, setValidationScore] = useState<number>(99.8);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleValidate = () => {
    if (isValidating) return;
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setValidationScore(Number((99.6 + Math.random() * 0.3).toFixed(1)));
    }, 600);
  };

  const sampleCocoJson = `{
  "image": { "id": 14092, "width": 1920, "height": 1080 },
  "annotations": [
    {
      "id": 9921,
      "category": "Autonomous_Vehicle",
      "bbox": [412.5, 320.0, 240.0, 180.5],
      "segmentation": [[412.5, 320.0, 652.5, 320.0, 652.5, 500.5, 412.5, 500.5]],
      "iou_score": 0.962,
      "consensus_agreement": "3/3 annotators (100%)",
      "qa_status": "APPROVED"
    },
    {
      "id": 9922,
      "category": "Pedestrian_Crossing",
      "bbox": [880.0, 410.2, 64.0, 142.0],
      "iou_score": 0.948,
      "qa_status": "APPROVED"
    }
  ]
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleCocoJson);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>High-Precision AI Training Data</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            99.8% Consensus
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Crosshair size={13} className="text-cyan-400" />
          <span>LiDAR, Bounding-Box & Polygon Segmentation</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>HIPAA & SOC2 Level 2 Air-Gapped Workspaces</span>
        </div>
      </div>

      {/* 2. Main High-Tech Terminal / Annotation Studio Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              annotation.studio // consensus_engine_v4
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("canvas")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "canvas" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Crosshair size={13} />
              <span>Annotation Canvas</span>
            </button>
            <button
              onClick={() => setActiveTab("coco")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "coco" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>COCO / YOLO JSON</span>
            </button>
            <button
              onClick={() => setActiveTab("qa")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "qa" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>QA Telemetry</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{"IoU > 0.94 Precision"}</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: INTERACTIVE ANNOTATION CANVAS */}
          {activeTab === "canvas" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Task Presets Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedTask("autonomous")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedTask === "autonomous"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Autonomous Driving (LiDAR/2D)
                  </button>

                  <button
                    onClick={() => setSelectedTask("medical")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedTask === "medical"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Medical CT/MRI Radiology
                  </button>

                  <button
                    onClick={() => setSelectedTask("ocr")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedTask === "ocr"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Financial Document OCR
                  </button>
                </div>

                <button
                  onClick={handleValidate}
                  disabled={isValidating}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 shrink-0"
                >
                  {isValidating ? <RotateCw size={13} className="animate-spin" /> : <Play size={13} />}
                  <span>Run Consensus Audit</span>
                </button>
              </div>

              {/* Simulated Annotation Studio Canvas */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6 min-h-[260px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                {/* Simulated Bounding Box 1 */}
                <div className="absolute top-12 left-16 sm:left-24 w-44 sm:w-60 h-28 sm:h-36 rounded-lg border-2 border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/10 flex flex-col justify-between p-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500 text-slate-950">
                      Vehicle #1 (99.8%)
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">IoU: 0.96</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>x: 412.5 y: 320.0</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Simulated Bounding Box 2 */}
                <div className="absolute top-24 right-12 sm:right-28 w-28 sm:w-36 h-36 sm:h-44 rounded-lg border-2 border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10 flex flex-col justify-between p-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-400 text-slate-950">
                      Pedestrian
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">IoU: 0.94</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>x: 880.0 y: 410.2</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Bottom Canvas Telemetry Strip */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 z-10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Consensus Score: <strong className="text-white">{validationScore}% Agreement</strong></span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 hidden sm:inline-block">
                    Double-Blind 3-Annotator Pass
                  </span>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: COCO JSON */}
          {activeTab === "coco" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  annotations/coco_dataset.json
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1 transition-colors"
                >
                  {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedCode ? "Copied" : "Copy Source"}</span>
                </button>
              </div>
              <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300">
                <code>{sampleCocoJson}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: QA TELEMETRY */}
          {activeTab === "qa" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. Accuracy */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="99.8, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">99.8%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Consensus Acc.</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Double-Blind QA</span>
                </div>

                {/* 2. IoU */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400"
                        strokeDasharray="94, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">0.94</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">IoU Score</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Pixel Precision</span>
                </div>

                {/* 3. Acceptance */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="99.9, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">99.9%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Client Approval</span>
                  <span className="text-[10px] text-emerald-400 font-mono">First-Pass Rate</span>
                </div>

                {/* 4. SLA */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-teal-400"
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">24h</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Turnaround SLA</span>
                  <span className="text-[10px] text-teal-400 font-mono">High-Throughput</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

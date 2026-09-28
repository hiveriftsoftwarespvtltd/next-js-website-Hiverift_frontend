"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Zap,
  Server,
  Database,
  ShieldCheck,
  Activity,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Play,
  RotateCw,
  Terminal,
  Cpu
} from "lucide-react";

export function SoftwareHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"gateway" | "code" | "sla">("gateway");
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>("orders");
  const [isExecuting, setIsExecuting] = useState(false);
  const [lastLatency, setLastLatency] = useState(11.4);
  const [requestCount, setRequestCount] = useState(148290);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleExecute = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setLastLatency(Number((Math.random() * 4 + 9).toFixed(1)));
      setRequestCount((prev) => prev + 1);
    }, 450);
  };

  const sampleSoftwareCode = `// internal/delivery/http/order_handler.go
package handler

import (
  "context"
  "time"
  "github.com/hiverift/core/telemetry"
)

// ProcessTransaction executes atomic distributed commit with sub-15ms p99
func (h *OrderHandler) ProcessTransaction(ctx context.Context, payload OrderPayload) (*OrderResult, error) {
  tr := telemetry.StartTrace(ctx, "orders.process")
  defer tr.End()

  // Distributed Redis Lock to prevent duplicate double-spends
  lock, err := h.redisLock.Acquire(ctx, payload.UserID, 5*time.Second)
  if err != nil {
    return nil, ErrConcurrentConflict
  }
  defer lock.Release(ctx)

  // Write through to CockroachDB / PostgreSQL cluster
  return h.orderRepo.CreateAtomic(ctx, payload)
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleSoftwareCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Microservices & Distributed Systems</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            12ms p99
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Database size={13} className="text-cyan-400" />
          <span>ACID Compliant PostgreSQL & Redis Clusters</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>SOC2 & Enterprise RBAC Architecture</span>
        </div>
      </div>

      {/* 2. Main High-Tech Terminal / API Gateway Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              gateway.internal.hiverift // Kong & Envoy Mesh
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("gateway")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "gateway" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Server size={13} />
              <span>Live API Console</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Go / NestJS Handler</span>
            </button>
            <button
              onClick={() => setActiveTab("sla")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "sla" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>Enterprise SLA</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>50,000 req/s Peak</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: LIVE API GATEWAY CONSOLE */}
          {activeTab === "gateway" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Endpoint Selector Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedEndpoint("orders")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedEndpoint === "orders"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-300">POST</span>
                    <span>/api/v1/orders/dispatch</span>
                  </button>

                  <button
                    onClick={() => setSelectedEndpoint("auth")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedEndpoint === "auth"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/30 text-cyan-300">GET</span>
                    <span>/api/v1/auth/session</span>
                  </button>

                  <button
                    onClick={() => setSelectedEndpoint("stream")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedEndpoint === "stream"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-teal-500/30 text-teal-300">POST</span>
                    <span>/api/v1/events/publish</span>
                  </button>
                </div>

                <button
                  onClick={handleExecute}
                  disabled={isExecuting}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 shrink-0"
                >
                  {isExecuting ? <RotateCw size={13} className="animate-spin" /> : <Play size={13} />}
                  <span>Simulate Live Call</span>
                </button>
              </div>

              {/* Execution Console Output */}
              <div className="grid sm:grid-cols-12 gap-4">
                
                {/* Left: Request & Response JSON */}
                <div className="sm:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
                  <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800 text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={12} className="text-emerald-400" />
                      HTTP/2 Response 200 OK
                    </span>
                    <span className="text-emerald-400 font-bold">{lastLatency}ms Latency</span>
                  </div>

                  <pre className="text-[11px] leading-relaxed text-emerald-300/90 overflow-x-auto">
{`{
  "status": "success",
  "endpoint": "/api/v1/${selectedEndpoint}/dispatch",
  "txId": "tx_9984b_${requestCount}",
  "concurrency": "isolation_level: Serializable",
  "dbLatency": "${(lastLatency * 0.4).toFixed(1)}ms",
  "cacheHit": true,
  "clusterNode": "k8s-pod-worker-ap-south-1a",
  "totalProcessed": ${requestCount}
}`}
                  </pre>
                </div>

                {/* Right: Architecture Node Telemetry */}
                <div className="sm:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Cluster Telemetry
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Database Pool</span>
                        <span className="font-mono text-emerald-400 font-bold">128 / 128 Live</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Redis Cache Hit</span>
                        <span className="font-mono text-cyan-400 font-bold">99.4%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Event Queue lag</span>
                        <span className="font-mono text-teal-400 font-bold">0.02ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">CPU Saturation</span>
                        <span className="font-mono text-slate-300 font-bold">14.2%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="shrink-0" />
                    <span>Zero Data Loss Guaranteed</span>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: CODE ARCHITECTURE */}
          {activeTab === "code" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  internal/handler/order_handler.go
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
                <code>{sampleSoftwareCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: SLA & PERFORMANCE */}
          {activeTab === "sla" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. Latency Dial */}
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
                        strokeDasharray="99, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">12ms</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">p99 Latency</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Ultra-Fast Execution</span>
                </div>

                {/* 2. Uptime */}
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
                        strokeDasharray="99.99, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">99.99%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">High-Availability</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Multi-AZ Redundancy</span>
                </div>

                {/* 3. Concurrency */}
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
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">50k+</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Concurrent Req/s</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Zero Lock Deadlocks</span>
                </div>

                {/* 4. Automated Tests */}
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
                        strokeDasharray="98, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">QA</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Quality Assurance</span>
                  <span className="text-[10px] text-teal-400 font-mono">Automated Test Planning</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

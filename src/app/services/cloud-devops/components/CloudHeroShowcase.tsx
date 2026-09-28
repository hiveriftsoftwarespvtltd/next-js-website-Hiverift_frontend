"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cloud,
  Server,
  Zap,
  Code2,
  Activity,
  CheckCircle2,
  Copy,
  Check,
  Play,
  RotateCw,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Sliders
} from "lucide-react";

export function CloudHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"cluster" | "code" | "sla">("cluster");
  const [podCount, setPodCount] = useState(4);
  const [activeRegion, setActiveRegion] = useState<"primary" | "failover">("primary");
  const [isDeploying, setIsDeploying] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSimulateRollout = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
    }, 1200);
  };

  const sampleCloudCode = `# terraform/modules/eks_cluster/main.tf
module "enterprise_eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "hiverift-production-cluster"
  cluster_version = "1.31"

  # Multi-AZ Zero-Downtime Node Groups
  eks_managed_node_groups = {
    spot_workers = {
      min_size     = 3
      max_size     = 50
      desired_size = 6
      instance_types = ["c6i.2xlarge", "c6a.2xlarge"]
      capacity_type  = "SPOT" # -65% Compute Cloud Spend
    }
  }

  enable_cluster_creator_admin_permissions = true
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleCloudCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Kubernetes & Multi-Cloud Architecture</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            High Availability
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Cloud size={13} className="text-cyan-400" />
          <span>GitOps Terraform Infrastructure-as-Code</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>Automated Blue-Green Zero Downtime</span>
        </div>
      </div>

      {/* 2. Main High-Tech Terminal / Cloud Dashboard Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              k8s.control-plane // EKS v1.31 Multi-AZ
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("cluster")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "cluster" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Server size={13} />
              <span>Cluster Visualizer</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Terraform IaC</span>
            </button>
            <button
              onClick={() => setActiveTab("sla")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "sla" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>Cloud Metrics</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Multi-AZ Live</span>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: CLUSTER VISUALIZER */}
          {activeTab === "cluster" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Controls Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                
                {/* Pod Scaler Slider */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-300 font-bold flex items-center gap-1.5">
                    <Sliders size={13} className="text-emerald-400" />
                    HPA Auto-Scale:
                  </span>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={podCount}
                    onChange={(e) => setPodCount(Number(e.target.value))}
                    className="w-24 sm:w-32 accent-emerald-500 cursor-pointer"
                  />
                  <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-slate-950 text-emerald-400 border border-slate-800">
                    {podCount} Replicas
                  </span>
                </div>

                {/* Region Failover Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveRegion("primary")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      activeRegion === "primary"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    us-east-1 (Primary)
                  </button>
                  <button
                    onClick={() => setActiveRegion("failover")}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      activeRegion === "failover"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    eu-west-1 (Active Standby)
                  </button>
                </div>

                {/* Blue-Green Deploy Trigger */}
                <button
                  onClick={handleSimulateRollout}
                  disabled={isDeploying}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 shrink-0"
                >
                  {isDeploying ? <RotateCw size={13} className="animate-spin" /> : <Play size={13} />}
                  <span>Simulate Blue-Green Cutover</span>
                </button>
              </div>

              {/* Live Replica Pod Grid */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-white flex items-center gap-2">
                    <Server size={14} className="text-emerald-400" />
                    Active Kubernetes Pod Replica Set ({podCount} Running)
                  </span>
                  <span className="font-mono text-emerald-400">Status: Healthy</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {Array.from({ length: podCount }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                        isDeploying
                          ? "bg-cyan-500/10 border-cyan-500/40 animate-pulse"
                          : "bg-slate-900/90 border-slate-800"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[10px] text-slate-400">pod-0{idx + 1}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-xs font-bold text-white">c6i.2xlarge</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-1">CPU: {(12 + idx * 3)}% | Mem: 412MB</div>
                    </motion.div>
                  ))}
                </div>

                {isDeploying && (
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between">
                    <span>Rolling update in progress. Route 53 DNS is shifting traffic to the healthy deployment.</span>
                    <RotateCw size={13} className="animate-spin text-cyan-400 shrink-0" />
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: CODE */}
          {activeTab === "code" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  terraform/eks_cluster/main.tf
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
                <code>{sampleCloudCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: SLA */}
          {activeTab === "sla" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. Uptime */}
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
                        strokeDasharray="99.999, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">HA</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Cloud Operations</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Availability Monitoring</span>
                </div>

                {/* 2. MTTR */}
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
                        strokeDasharray="98, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">Auto</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">MTTR Recovery</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Auto Self-Healing</span>
                </div>

                {/* 3. Cost Reduction */}
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
                        strokeDasharray="42, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-[10px]">FinOps</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Cloud Waste</span>
                  <span className="text-[10px] text-emerald-400 font-mono">FinOps Optimized</span>
                </div>

                {/* 4. Deploys */}
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
                    <span className="absolute font-mono font-black text-white text-base">0s</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Deploy Downtime</span>
                  <span className="text-[10px] text-teal-400 font-mono">Blue-Green Standard</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

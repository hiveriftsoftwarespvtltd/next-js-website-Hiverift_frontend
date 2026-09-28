"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Cpu,
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
  Bot
} from "lucide-react";

export function AiMlHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"inference" | "code" | "metrics">("inference");
  const [selectedPrompt, setSelectedPrompt] = useState<string>("contract");
  const [isInferring, setIsInferring] = useState(false);
  const [inferredTokens, setInferredTokens] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleResponses: Record<string, string> = {
    contract: "Risk Analysis Complete: Clause 14.2 contains un-capped indemnity exposure. Recommended amendment: Insert $2.5M aggregate liability ceiling. Confidence: 99.8%.",
    entity: "Entities Extracted: { patient_id: 'PX-904', icd_10: 'E11.9', claim_amount: '$14,250', risk_flags: 0 }. Schema validation passed in 14ms.",
    churn: "Churn Prediction: 0.082 (Very Low Risk). Top engagement factors: Daily active API consumption (+42%), recent enterprise license tier upgrade."
  };

  const handleRunInference = () => {
    if (isInferring) return;
    setIsInferring(true);
    setInferredTokens("");
    const fullText = sampleResponses[selectedPrompt] || sampleResponses.contract;
    let currentIdx = 0;

    const interval = setInterval(() => {
      currentIdx += 4;
      if (currentIdx >= fullText.length) {
        setInferredTokens(fullText);
        setIsInferring(false);
        clearInterval(interval);
      } else {
        setInferredTokens(fullText.slice(0, currentIdx));
      }
    }, 25);
  };

  const sampleAiCode = `// models/serving/vllm_engine.py
from vllm import LLM, SamplingParams
from guardrails import GuardrailValidator

# High-Throughput vLLM PagedAttention Engine
engine = LLM(
    model="hiverift/llama-3-8b-enterprise-quantized",
    tensor_parallel_size=2,
    gpu_memory_utilization=0.92,
    max_model_len=8192
)

sampling = SamplingParams(
    temperature=0.1,
    top_p=0.95,
    max_tokens=256
)

async def stream_safe_inference(prompt: str):
    # Enforce enterprise PII & hallucination guardrails
    sanitized = GuardrailValidator.mask_pii(prompt)
    async for output in engine.generate_async(sanitized, sampling):
        yield output.outputs[0].text`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleAiCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Production LLMs & Fine-Tuned Models</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            18ms TTFT
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Brain size={13} className="text-cyan-400" />
          <span>Private VPC Deployment • Zero Data Leakage</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>99.8% F1 Accuracy Guarantee</span>
        </div>
      </div>

      {/* 2. Main Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              model.engine // vLLM Tensor Parallel 2x H100
            </span>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("inference")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "inference" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Bot size={13} />
              <span>Inference Playground</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>PyTorch Engine</span>
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "metrics" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={13} />
              <span>Model Telemetry</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>142 tokens/sec</span>
          </div>

        </div>

        {/* Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: INFERENCE PLAYGROUND */}
          {activeTab === "inference" && (
            <div className="w-full max-w-3xl space-y-6">
              
              {/* Prompt Presets */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => { setSelectedPrompt("contract"); setInferredTokens(""); }}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedPrompt === "contract"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Contract Risk Audit
                  </button>

                  <button
                    onClick={() => { setSelectedPrompt("entity"); setInferredTokens(""); }}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedPrompt === "entity"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Medical Entity Extraction
                  </button>

                  <button
                    onClick={() => { setSelectedPrompt("churn"); setInferredTokens(""); }}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedPrompt === "churn"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Customer Churn Scoring
                  </button>
                </div>

                <button
                  onClick={handleRunInference}
                  disabled={isInferring}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 shrink-0"
                >
                  {isInferring ? <RotateCw size={13} className="animate-spin" /> : <Play size={13} />}
                  <span>Run Model Inference</span>
                </button>
              </div>

              {/* Streaming Terminal Output */}
              <div className="grid sm:grid-cols-12 gap-4">
                
                {/* Left: Token Stream */}
                <div className="sm:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-5 font-mono text-xs text-slate-300 min-h-[190px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800 text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Terminal size={12} className="text-emerald-400" />
                        Prompt: {selectedPrompt.toUpperCase()}
                      </span>
                      <span className="text-emerald-400 font-bold">18ms Time-To-First-Token</span>
                    </div>

                    <p className="text-xs sm:text-sm text-emerald-300/90 leading-relaxed min-h-[80px]">
                      {inferredTokens || sampleResponses[selectedPrompt]}
                      {isInferring && <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Guardrails: <strong className="text-emerald-400">PII Redacted</strong></span>
                    <span>Hallucination Risk: <strong className="text-cyan-400">0.01%</strong></span>
                  </div>
                </div>

                {/* Right: Model Architecture Parameters */}
                <div className="sm:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Inference Engine Specs
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Serving Engine</span>
                        <span className="font-mono text-emerald-400 font-bold">vLLM PagedAttn</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Quantization</span>
                        <span className="font-mono text-cyan-400 font-bold">AWQ 4-bit (-64% GPU)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">F1 Accuracy</span>
                        <span className="font-mono text-teal-400 font-bold">99.8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">GPU Cluster</span>
                        <span className="font-mono text-slate-300 font-bold">2x NVIDIA H100</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="shrink-0" />
                    <span>Private VPC Hosted</span>
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
                  serving/vllm_engine.py
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
                <code>{sampleAiCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: METRICS */}
          {activeTab === "metrics" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. Precision */}
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
                  <span className="text-xs font-bold text-slate-300">F1 Precision</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Benchmark Verified</span>
                </div>

                {/* 2. TTFT */}
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
                        strokeDasharray="99, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">18ms</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">TTFT Latency</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Instant Streaming</span>
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
                        strokeDasharray="64, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">-64%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">GPU Cost</span>
                  <span className="text-[10px] text-emerald-400 font-mono">AWQ Quantization</span>
                </div>

                {/* 4. Hallucination */}
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
                    <span className="absolute font-mono font-black text-white text-base">0.01%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Hallucinations</span>
                  <span className="text-[10px] text-teal-400 font-mono">Strict RAG Guardrails</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

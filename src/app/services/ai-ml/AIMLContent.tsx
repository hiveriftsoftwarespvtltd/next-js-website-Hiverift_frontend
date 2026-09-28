"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Brain,
  Cpu,
  Database,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Bot,
  Eye,
  TrendingUp,
  Server,
  Lock
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { ServiceTechCanvas } from "../components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "../components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "../components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "../components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "../components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "../components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "../components/shared/ServiceFaqAccordion";
import { AiMlHeroShowcase } from "./components/AiMlHeroShowcase";

export default function AIMLContent() {
  const aimlFeatures = [
    {
      icon: Brain,
      title: "Fine-Tuned Open-Source LLMs",
      desc: "Train custom Llama 3.3, Mistral, and Qwen models on your proprietary enterprise data. Eliminate vendor lock-in and cut token costs by up to 80%.",
      deliverable: "Private Fine-Tuned Weights & 80% Cost Reduction",
      points: [
        "QLoRA / LoRA parameter-efficient fine-tuning pipelines",
        "Domain-specific dataset synthesis and clean deduplication",
        "AWQ / GPTQ 4-bit model quantization for sub-20ms inference"
      ]
    },
    {
      icon: Database,
      title: "Enterprise Agentic RAG Systems",
      desc: "Connect your models to live databases, PDFs, APIs, and document vaults with hybrid semantic search and automated reranking.",
      deliverable: "Zero Hallucination Retrieval & 99.8% Grounded Truth",
      points: [
        "Hybrid vector search (Qdrant / Milvus + BM25 keyword matching)",
        "Cohere / BGE cross-encoder reranking for precision retrieval",
        "Automated chunking with contextual metadata enrichment"
      ]
    },
    {
      icon: Bot,
      title: "Multi-Agent Autonomous Workflows",
      desc: "Deploy autonomous AI agents that reason, plan, call tools, and execute complex multi-step business operations without human micro-management.",
      deliverable: "+70% Task Automation & Tool Execution",
      points: [
        "LangGraph & CrewAI deterministic cyclic agent orchestration",
        "Sandboxed Python & SQL code execution environments",
        "Human-in-the-loop approval checkpoints for high-risk actions"
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision & Visual Perception",
      desc: "Automate visual inspections, defect detection, document OCR, and object tracking with high-accuracy YOLO, Segment Anything, and ViT models.",
      deliverable: "Sub-30ms Real-Time Video & Image Classification",
      points: [
        "Edge-deployed TensorRT-optimized vision pipelines",
        "Multi-lingual document OCR and tabular data extraction",
        "Automated defect detection for manufacturing & medical scans"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics & Forecasting",
      desc: "Turn petabytes of historical logs into actionable commercial foresight: customer lifetime value, churn probabilities, and demand planning.",
      deliverable: "Actionable Foresight & ML Classification Engines",
      points: [
        "XGBoost, LightGBM, and Deep Learning time-series models",
        "Automated feature engineering and drift detection (Evidently AI)",
        "Real-time scoring APIs with sub-10ms response SLAs"
      ]
    },
    {
      icon: Lock,
      title: "Private VPC & Air-Gapped Deployment",
      desc: "Deploy LLMs inside your own AWS, Azure, or on-premise GPU clusters. Guarantee that zero customer data ever leaks to third-party public APIs.",
      deliverable: "100% HIPAA, SOC2 & GDPR AI Compliance",
      points: [
        "vLLM & NVIDIA Triton inference cluster hosting",
        "Automated PII detection, redaction, and prompt injection defense",
        "Zero data transmission to OpenAI or external third-party servers"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Data Privacy & Enterprise Security",
      legacy: {
        score: "Public Third-Party Cloud",
        status: "Data Leakage Exposure",
        desc: "Sending proprietary enterprise data over public OpenAI/Anthropic APIs risks IP leaks and violates strict HIPAA/SOC2 requirements."
      },
      hiverift: {
        score: "Private Dedicated VPC",
        status: "Air-Gapped & Encrypted",
        desc: "Models run entirely inside your private cloud or on-premise GPU cluster. Customer data never leaves your security perimeter."
      }
    },
    {
      title: "Token Costs at Enterprise Scale",
      legacy: {
        score: "$15k - $50k+ / Month",
        status: "Per-Token Recurring Tax",
        desc: "Commercial API fees explode as document volumes and user interactions grow, killing your gross margins."
      },
      hiverift: {
        score: "Fixed GPU Infrastructure",
        status: "Up to 80% Cost Reduction",
        desc: "Quantized open-weights models run on dedicated GPU instances with unlimited queries for a flat, predictable monthly budget."
      }
    },
    {
      title: "Domain Specificity & Hallucinations",
      legacy: {
        score: "Generic Out-of-the-Box",
        status: "High Hallucination Rate",
        desc: "Off-the-shelf generalist models invent facts, hallucinate contract terms, and fail at proprietary internal jargon."
      },
      hiverift: {
        score: "Custom Fine-Tuned Weights",
        status: "99.8% Domain Accuracy",
        desc: "Trained on your exact domain datasets with strict hybrid RAG guardrails that reject ungrounded assertions."
      }
    },
    {
      title: "Inference Latency & Throughput",
      legacy: {
        score: "2,500ms - 5,000ms",
        status: "Unpredictable Cloud Queue",
        desc: "Public API rate limits, cold starts, and shared cloud throttling lead to high user drop-off during peak hours."
      },
      hiverift: {
        score: "< 18ms TTFT",
        status: "vLLM PagedAttention Engine",
        desc: "Optimized with TensorRT-LLM and continuous batching delivering instant streaming responses at 140+ tokens/sec."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "AI Feasibility & Dataset Audit",
      timeline: "Days 1–5",
      desc: "Auditing your existing data assets, identifying high-ROI use cases, defining validation benchmarks, and choosing the optimal model family.",
      tools: ["Jupyter", "Hugging Face", "Data Curation Tools", "Benchmark Suite"],
      deliverables: ["AI Architecture Specification", "Dataset Hygiene Report", "Evaluation Metrics Matrix"]
    },
    {
      step: "02",
      title: "Data Pipeline & Synthesis",
      timeline: "Weeks 2–3",
      desc: "Extracting, cleaning, deduplicating, and formatting enterprise documents into structured JSONL training pairs and dense vector embeddings.",
      tools: ["LangChain", "Unstructured.io", "Qdrant", "Python ETL"],
      deliverables: ["Synthesized Training Dataset", "Vector Database Index", "PII Sanitization Filters"]
    },
    {
      step: "03",
      title: "LoRA Fine-Tuning & Quantization",
      timeline: "Weeks 4–6",
      desc: "Supervised fine-tuning (SFT) and Direct Preference Optimization (DPO) on high-end GPUs, followed by 4-bit AWQ quantization.",
      tools: ["PyTorch", "DeepSpeed", "Axolotl", "NVIDIA H100s"],
      deliverables: ["Fine-Tuned Model Weights", "Quantized GGUF/AWQ Checkpoints", "Loss & Perplexity Curves"]
    },
    {
      step: "04",
      title: "RAG & Agentic Integration",
      timeline: "Weeks 7–8",
      desc: "Connecting the fine-tuned model to vector databases, external tool APIs, and hallucination guardrail validators.",
      tools: ["LangGraph", "FastAPI", "Guardrails AI", "Docker"],
      deliverables: ["Full Agentic Tool Runner", "Hybrid Search Reranker", "Grounded Evaluation Suite"]
    },
    {
      step: "05",
      title: "Red-Teaming & Safety Audit",
      timeline: "Week 9",
      desc: "Adversarial prompt injection testing, jailbreak resilience audits, and latency profiling under concurrent load.",
      tools: ["Garak AI", "k6", "Prompt Injection Suite", "Triton APM"],
      deliverables: ["Adversarial Red-Team Report", "Safety Guardrail Verification", "Latency Optimization"]
    },
    {
      step: "06",
      title: "Private Deployment & MLOps",
      timeline: "Week 10+",
      desc: "Production deployment into your private VPC with vLLM, continuous data drift monitoring, and full weight transfer.",
      tools: ["Kubernetes", "vLLM", "Prometheus", "Evidently AI"],
      deliverables: ["Live Production AI Cluster", "100% Model Weights Ownership", "Automated Retraining Pipeline"]
    }
  ];

  const terminalLogs = [
    { text: "torchrun --nproc_per_node=4 train_lora_enterprise.py --model_name meta-llama/Llama-3-8B", type: "cmd" as const, tag: "finetune" },
    { text: "Loaded 48,290 verified enterprise prompt-response pairs. SFT phase starting...", type: "info" as const },
    { text: "Epoch 3/3 complete. Validation loss converged to 0.412 [Perplexity: 1.51]", type: "success" as const },
    { text: "python quantize_awq.py --model ./checkpoints/llama-3-8b-hiverift --bits 4", type: "cmd" as const, tag: "awq" },
    { text: "Quantization finished. Model footprint compressed: 16.0GB -> 4.8GB (-70% VRAM)", type: "cyan" as const },
    { text: "vllm serve ./llama-3-8b-awq --port 8000 --gpu-memory-utilization 0.90", type: "cmd" as const, tag: "vllm" },
    { text: "PagedAttention engine initialized on 2x NVIDIA H100 NVLink. Ready for traffic.", type: "success" as const },
    { text: "Warmup benchmark: TTFT = 17.8ms | Throughput = 144.2 tokens/sec | p99 = 22ms", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Model Architecture", val: "Llama 3 / Mistral / Qwen", status: "Fine-Tuned" },
    { label: "Token Throughput", val: "140+ tokens/sec", status: "PagedAttention" },
    { label: "Accuracy", val: "99.8% F1 Score", status: "Grounded RAG" },
    { label: "Deployment", val: "Private VPC Cloud", status: "Zero Data Leaks" }
  ];

  const estimatorTiers = [
    {
      id: "rag-system",
      label: "Enterprise RAG & Knowledge Agent",
      desc: "Hybrid vector search across private company documents with zero-hallucination guardrails.",
      multiplier: 1.0
    },
    {
      id: "fine-tuned-llm",
      label: "Custom Fine-Tuned Domain LLM",
      desc: "Supervised fine-tuning on proprietary data with private weights and 4-bit quantization.",
      multiplier: 1.4
    },
    {
      id: "vision-pipeline",
      label: "Computer Vision & Video Analytics",
      desc: "Real-time object detection, defect inspection, and document OCR at the edge.",
      multiplier: 1.25
    },
    {
      id: "autonomous-agents",
      label: "Autonomous Multi-Agent Workflow",
      desc: "Multi-step reasoning agents that execute API calls and automate complex workflows.",
      multiplier: 1.6
    }
  ];

  const estimatorScales = [
    { id: "poc", label: "Proof of Concept (1 Model)", weeksAdd: 0 },
    { id: "prod", label: "Production Grade (2–4 Models)", weeksAdd: 3 },
    { id: "enterprise", label: "Enterprise Mesh (Full Cluster)", weeksAdd: 6 }
  ];

  const estimatorAddons = [
    { id: "reranker", label: "Cross-Encoder Reranker", weeksAdd: 0.5 },
    { id: "guardrails", label: "PII & Injection Guardrails", weeksAdd: 1 },
    { id: "edge", label: "Edge TensorRT Deployment", weeksAdd: 1.5 },
    { id: "continuous", label: "Continuous Drift Retraining", weeksAdd: 1 }
  ];

  const faqs = [
    {
      question: "Why should we fine-tune an open-source model instead of using ChatGPT or Claude API?",
      answer: "Public commercial APIs present massive security concerns for enterprise data, have unpredictable token price hikes at scale, and can change model behavior without warning. Fine-tuning an open-source model (like Llama 3 or Mistral) gives you 100% intellectual property ownership, zero data leakage risks, predictable flat GPU infrastructure costs, and superior performance on domain-specific internal tasks."
    },
    {
      question: "How do you eliminate hallucinations in business-critical AI systems?",
      answer: "We combine hybrid dense-sparse vector search (Qdrant + BM25) with cross-encoder rerankers and deterministic guardrail layers (NeMo Guardrails, Guardrails AI). Models are instructed to output citations and explicitly declare when the context is insufficient, preventing fabrications."
    },
    {
      question: "Can our models run completely offline or on-premise?",
      answer: "Yes. We containerize models using Docker, NVIDIA Triton, and vLLM. They can be deployed on your on-premise GPU servers (e.g. NVIDIA A100/H100/L40S) or inside your isolated, air-gapped Virtual Private Cloud (VPC) with zero external internet access."
    },
    {
      question: "Who owns the fine-tuned model weights and training datasets?",
      answer: "You retain 100% ownership of the cleaned training data, adapter weights (LoRA), quantized checkpoints, and inference server configurations. HiveRift claims zero rights to your proprietary AI assets."
    },
    {
      question: "What GPU infrastructure do we need to host our own fine-tuned model?",
      answer: "Thanks to modern 4-bit AWQ and GPTQ quantization techniques, an 8-Billion parameter model (which outperforms GPT-3.5 on targeted domain tasks) can run smoothly on a single cost-effective NVIDIA L4 or RTX 4090 GPU (under $250/mo cloud cost), handling hundreds of concurrent users."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="ai-ml" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Enterprise Artificial Intelligence & Machine Learning
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Production AI & LLMs Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-purple-600">
              Accuracy, Privacy & Scale
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We build and deploy custom fine-tuned open-source LLMs, enterprise agentic RAG systems, and computer vision pipelines inside your private VPC with sub-20ms token latency and zero data leakage.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Build Your Enterprise AI</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Brain size={18} className="text-emerald-600" />
              <span>Schedule AI Architecture Review</span>
            </button>
          </div>

          {/* Live AI Showcase */}
          <div className="mt-14 lg:mt-20">
            <AiMlHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Stack AI Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Enterprise Intelligence Without{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Hallucinations or Data Leaks
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every model is benchmarked on deterministic validation suites, armed with strict RAG guardrails, and hosted on private GPU hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aimlFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <feat.icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {feat.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-emerald-800 mb-5 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                    <span>{feat.deliverable}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {feat.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">DISCIPLINE 0{idx + 1}</span>
                  <button
                    onClick={() => openEnquiryModal()}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Consult AI Scientist</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture Benchmark */}
      <ServiceArchitectureBenchmark
        badgeText="AI Architecture Benchmark"
        heading="Why Naive Public API Wrappers Fail vs."
        highlightHeading="HiveRift Fine-Tuned Private AI"
        subheading="Compare fragile, expensive third-party API dependencies with HiveRift's private, quantized, and hallucination-free open-weights models."
        legacyLabel="Commercial API Wrapper (OpenAI/Anthropic)"
        hiveriftLabel="HiveRift Private Fine-Tuned Engine"
        comparisons={comparisons}
        summaryBadges={[
          "Sub-20ms Token Latency",
          "Zero Data Leakage Guarantee",
          "100% Weights & Code Ownership"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="AI Engineering Lifecycle"
        heading="From Data Hygiene to"
        highlightHeading="High-Throughput GPU Inference"
        subheading="Our structured 6-phase AI delivery roadmap ensures rigorous validation, adversarial safety audits, and smooth private cloud cutover."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated MLOps Pipeline"
        heading="Real-Time Model Training &"
        highlightHeading="vLLM Serving Stream"
        subheading="Watch our automated training engine run distributed LoRA fine-tuning, compress weights with 4-bit AWQ quantization, and serve models via vLLM PagedAttention."
        terminalTitle="hiverift-ai-engine ~ h100-cluster"
        branchInfo="main: vllm-inference"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="AI Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Custom Enterprise AI Model"
        subheading="Select your AI architecture family, dataset scale, and deployment specs to generate project timelines and hardware projections."
        tierLabel="AI System Architecture"
        tierOptions={estimatorTiers}
        scaleLabel="Model Parameter & Deployment Scale"
        scaleOptions={estimatorScales}
        addonsLabel="Enterprise AI Safety & Retrieval Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={4}
        basePriceUsd={3500}
        recommendedStack={["Llama 3 / Mistral", "PyTorch / vLLM", "Qdrant / Milvus", "LangGraph", "NVIDIA Triton", "Docker"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="AI & Machine Learning"
        projectTypes={[
          "Enterprise RAG & Knowledge Agent",
          "Custom Fine-Tuned Domain LLM",
          "Autonomous Multi-Agent Workflow",
          "Computer Vision & Edge Perception",
          "Predictive Analytics & Churn Engine",
          "Private VPC Air-Gapped AI Cluster"
        ]}
        defaultProjectType="Enterprise RAG & Knowledge Agent"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="AI & ML FAQs"
        heading="Frequently Answered Technical"
        highlightHeading="Questions on Enterprise AI"
        subheading="Straightforward technical advice on model fine-tuning, hardware costs, data privacy, and eliminating AI hallucinations."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

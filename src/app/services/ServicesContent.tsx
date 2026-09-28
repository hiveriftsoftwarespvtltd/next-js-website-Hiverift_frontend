"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  Brain,
  Database,
  TrendingUp,
  ShoppingCart,
  Palette,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Crosshair
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import { ServiceTechCanvas } from "./components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "./components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "./components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "./components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "./components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "./components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "./components/shared/ServiceFaqAccordion";
import { ServicesHeroShowcase } from "./components/ServicesHeroShowcase";

const servicesData = [
  {
    id: "web-development",
    title: "Custom Web Development",
    shortDescription: "High-performance web applications and corporate websites built with Next.js 15, React, and TypeScript. Engineered for sub-second speeds and search engine dominance.",
    category: "Web & Software",
    icon: Globe,
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"],
    deliverables: [
      "Sub-second page speeds & 99+ Core Web Vitals",
      "Dynamic structured schema SEO architecture",
      "Custom headless CMS & multi-device responsiveness"
    ],
    href: "/services/web-development"
  },
  {
    id: "ecommerce",
    title: "eCommerce Solutions & Shopify Plus",
    shortDescription: "Enterprise-grade online storefronts built to scale revenue. From custom Shopify Plus and WooCommerce setups to bespoke headless Next.js commerce architectures with frictionless checkouts.",
    category: "eCommerce & Apps",
    icon: ShoppingCart,
    techStack: ["Shopify Plus", "Next.js Commerce", "WooCommerce", "Stripe / Redis"],
    deliverables: [
      "Sub-50ms cart retrieval & 1-click checkouts",
      "Automated ERP & 3PL inventory synchronization",
      "Custom product configurators & multi-currency tax"
    ],
    href: "/services/ecommerce"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDescription: "High-performance iOS and Android mobile applications built using Flutter and React Native. Smooth 60fps animations, offline capabilities, and native device feature support.",
    category: "eCommerce & Apps",
    icon: Smartphone,
    techStack: ["Flutter 3.24", "React Native", "Swift / SwiftUI", "Kotlin"],
    deliverables: [
      "Single codebase for native iOS & Android release",
      "100% first-pass App Store & Google Play approval",
      "Offline-first encrypted SQLite database synchronization"
    ],
    href: "/services/mobile-development"
  },
  {
    id: "software-development",
    title: "Custom Software Engineering",
    shortDescription: "Tailored enterprise software, custom ERP/CRM platforms, and internal business tools designed to automate complex workflows, eliminate manual drag, and scale operations.",
    category: "Web & Software",
    icon: Code,
    techStack: ["Go", "Node.js / NestJS", "PostgreSQL", "Kafka / Redis"],
    deliverables: [
      "Domain-Driven Design (DDD) & microservices",
      "Sub-15ms p99 query speeds with connection pooling",
      "Granular Role-Based Access Control (RBAC) & audits"
    ],
    href: "/services/software-development"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Custom fine-tuned open-source LLMs, enterprise agentic RAG systems, and computer vision models deployed inside your private VPC with sub-20ms token latency.",
    category: "Data & AI",
    icon: Brain,
    techStack: ["Llama 3 / Mistral", "PyTorch", "vLLM", "Qdrant / Milvus"],
    deliverables: [
      "Zero hallucination grounded hybrid RAG search",
      "Private VPC hosting with zero third-party data leaks",
      "4-bit AWQ model quantization reducing GPU costs by 64%"
    ],
    href: "/services/ai-ml"
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps",
    shortDescription: "Resilient Kubernetes cluster orchestration, GitOps Terraform Infrastructure-as-Code, and automated blue-green deployment strategies.",
    category: "Cloud & Ops",
    icon: Cloud,
    techStack: ["Kubernetes (EKS)", "Terraform", "ArgoCD", "AWS / Azure"],
    deliverables: [
      "Multi-region high availability and auto-scaling strategies",
      "Zero-downtime blue-green & progressive canary rollouts",
      "Up to 45% FinOps cloud infrastructure bill reduction"
    ],
    href: "/services/cloud-devops"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Product Strategy",
    shortDescription: "Tokenized multi-brand Figma design systems, human-centered usability audits, and WCAG 2.2 AAA accessible product interfaces engineered for high conversion rates.",
    category: "Design & UX",
    icon: Palette,
    techStack: ["Figma Variables", "Style Dictionary", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Comprehensive multi-brand design tokens & variables",
      "WCAG 2.2 AAA accessibility compliance certification",
      "Zero-friction developer handoff with ready React code"
    ],
    href: "/services/ui-ux"
  },
  {
    id: "data-annotation",
    title: "Data Annotation & AI Training Data",
    shortDescription: "High-precision computer vision bounding boxes, 3D LiDAR point clouds, medical radiology, and RLHF training datasets with 99.8% multi-annotator consensus.",
    category: "Data & AI",
    icon: Crosshair,
    techStack: ["COCO JSON", "YOLOv10", "CVAT / Labelbox", "DICOM"],
    deliverables: [
      "Double-blind multi-annotator consensus validation",
      "Sub-pixel polygon segmentation and IoU > 0.94 precision",
      "HIPAA & SOC2 Level 2 air-gapped secure data sandboxes"
    ],
    href: "/services/data-annotation"
  },
  {
    id: "digital-marketing",
    title: "SEO & Digital Growth Marketing",
    shortDescription: "Data-backed organic SEO, technical search audits, Google Ads, and conversion rate optimization (CRO) designed to drive qualified commercial traffic and revenue.",
    category: "Growth Marketing",
    icon: TrendingUp,
    techStack: ["Google Ads (PMax)", "Server-Side Meta CAPI", "Looker Studio", "GA4"],
    deliverables: [
      "Campaign reporting and return on ad spend (ROAS) measurement",
      "Server-side Meta CAPI bypassing browser ad blockers",
      "Technical & programmatic SEO for commercial search terms"
    ],
    href: "/services/digital-marketing"
  }
];

const categories = ["All Services", "Web & Software", "eCommerce & Apps", "Data & AI", "Cloud & Ops", "Design & UX", "Growth Marketing"];

const comparisons = [
  {
    title: "Vendor Management & Coordination",
    legacy: {
      score: "5+ Disconnected Agencies",
      status: "Costly Finger-Pointing",
      desc: "One agency designs UI, another writes backend code, and a third runs SEO, with each blaming the other for bugs and delays."
    },
    hiverift: {
      score: "Unified Engineering Partner",
      status: "Seamless Cross-Discipline Team",
      desc: "Designers, software architects, DevOps engineers, and growth marketers collaborate within a single agile team with unified accountability."
    }
  },
  {
    title: "Performance & Technical Standards",
    legacy: {
      score: "Slow & Fragmented",
      status: "Unindexed Technical Debt",
      desc: "Bloated templates, disparate un-typed codebases, and missing security guardrails create massive long-term technical debt."
    },
    hiverift: {
      score: "Sub-Second Global Standard",
      status: "99+ Core Web Vitals & SLAs",
      desc: "Strict type safety, automated CI/CD pipelines, and resilient cloud architecture across engineering disciplines."
    }
  },
  {
    title: "Data Attribution & Commercial ROI",
    legacy: {
      score: "Vanity Metrics & Guesswork",
      status: "No Bottom-Line Link",
      desc: "Agencies provide meaningless PDF reports on clicks and impressions with zero clear connection to pipeline revenue or gross margin."
    },
    hiverift: {
      score: "100% Financial Attribution",
      status: "Attributed Revenue Dashboards",
      desc: "Every system build, landing page, and ad campaign is linked directly to first-party revenue, lead qualification, and customer LTV."
    }
  },
  {
    title: "Source Code & Asset Ownership",
    legacy: {
      score: "Vendor Lock-in & Hostage",
      status: "Hidden Licensing Fees",
      desc: "Agencies withhold source code, deploy into their own proprietary clouds, and charge perpetual monthly maintenance retainers."
    },
    hiverift: {
      score: "100% IP & Repo Ownership",
      status: "Deployed to Your Accounts",
      desc: "All GitHub repositories, Terraform scripts, Figma design files, and databases belong entirely to you from day one."
    }
  }
];

const processSteps = [
  {
    step: "01",
    title: "Holistic Digital Audit & Blueprint",
    timeline: "Days 1–5",
    desc: "Comprehensive evaluation of your software architecture, user flows, cloud infrastructure, and marketing attribution to map out the master roadmap.",
    tools: ["System Architecture", "Security Audit", "Tech Stack Analysis"],
    deliverables: ["Full Technical Architecture PRD", "Execution Roadmap", "Resource & Budget Blueprint"]
  },
  {
    step: "02",
    title: "Design System & Prototyping",
    timeline: "Weeks 2–3",
    desc: "Crafting tokenized Figma design systems, mobile-first responsive prototypes, and developer-ready component libraries with WCAG AAA accessibility.",
    tools: ["Figma Tokens", "Tailwind CSS", "User Flow Diagrams"],
    deliverables: ["Master Component Library", "Clickable High-Fi Prototype", "Design Tokens JSON"]
  },
  {
    step: "03",
    title: "Agile Development & Sprint Cadence",
    timeline: "Weeks 4–8",
    desc: "Building frontend, backend microservices, and mobile applications with weekly preview environments, strict TypeScript typing, and automated test coverage.",
    tools: ["Next.js 15", "Flutter", "Go / NestJS", "PostgreSQL"],
    deliverables: ["Weekly Staging Previews", "Core Feature Implementation", "Bi-Weekly Stakeholder Demos"]
  },
  {
    step: "04",
    title: "Cloud Infrastructure & GitOps CI/CD",
    timeline: "Weeks 9–10",
    desc: "Provisioning multi-AZ Kubernetes clusters, automated Terraform IaC pipelines, and blue-green zero-downtime deployment workflows.",
    tools: ["Kubernetes", "Terraform", "ArgoCD", "Docker"],
    deliverables: ["Production K8s Cluster", "Zero-Downtime Deployment Pipeline", "Multi-Region Redundancy"]
  },
  {
    step: "05",
    title: "Stress Testing, Security & SEO Audit",
    timeline: "Week 11",
    desc: "Simulating heavy traffic spikes up to 50k transactions, running OWASP vulnerability scans, and verifying structured JSON-LD SEO schemas.",
    tools: ["k6 Load Testing", "Axe Accessibility", "Lighthouse 100"],
    deliverables: ["Stress Test Benchmark", "OWASP Security Sign-off", "Core Web Vitals 99+ Report"]
  },
  {
    step: "06",
    title: "Production Cutover & Growth Retainer",
    timeline: "Week 12+",
    desc: "Seamless live deployment with zero downtime, complete source code repository transfer, and optional ongoing growth & 24/7 SRE support.",
    tools: ["Production DNS", "GitHub IP Transfer", "24/7 SRE"],
    deliverables: ["100% IP & Repo Transfer", "Live Production Deployment", "Dedicated Engineering SLA"]
  }
];

const terminalLogs = [
  { text: "hiverift-nexus audit --scope full-spectrum", type: "cmd" as const, tag: "audit" },
  { text: "Auditing 9 core engineering disciplines across 48 active enterprise projects...", type: "info" as const },
  { text: "Web & Software: Next.js 15 App Router | TTFB = 0.28s | Lighthouse = 100/100", type: "success" as const },
  { text: "Mobile Engine: Flutter 3.24 & React Native | 60 FPS Locked | Crash Rate = 0.00%", type: "success" as const },
  { text: "AI & Data: vLLM PagedAttention | 18ms TTFT | 99.8% Data Consensus Precision", type: "cyan" as const },
  { text: "Cloud & DevOps: AWS EKS Multi-AZ | Blue-Green Deployment | Monitoring", type: "success" as const },
  { text: "Attribution & Growth: Meta CAPI v21.0 | Server-side campaign reporting", type: "info" as const },
  { text: "Full-Spectrum Architecture Audit PASSED with ZERO critical regressions", type: "success" as const }
];

const terminalSpecs = [
  { label: "Engineering Scope", val: "9 Integrated Disciplines", status: "Full Lifecycle" },
  { label: "Global Delivery", val: "100% On-Time SLA", status: "Sprint Guaranteed" },
  { label: "Performance", val: "< 0.4s Global Edge", status: "Sub-Second" },
  { label: "IP Ownership", val: "100% Source Code", status: "Zero Lock-In" }
];

const estimatorTiers = [
  {
    id: "full-web-app",
    label: "Web Application & Software Engineering",
    desc: "Custom Next.js 15 web platform with scalable backend microservices and database clustering.",
    multiplier: 1.0
  },
  {
    id: "mobile-ecosystem",
    label: "Cross-Platform Mobile & Web Ecosystem",
    desc: "Unified web app and native iOS & Android apps with shared APIs and offline-first database sync.",
    multiplier: 1.45
  },
  {
    id: "ai-enterprise",
    label: "Enterprise AI & Cloud Infrastructure",
    desc: "Private fine-tuned LLM, vector RAG search, Kubernetes cluster, and Terraform GitOps.",
    multiplier: 1.6
  },
  {
    id: "growth-revamp",
    label: "Full Product Redesign & Growth Engine",
    desc: "UI/UX design system, CRO funnels, and performance marketing with server-side CAPI tracking.",
    multiplier: 1.2
  }
];

const estimatorScales = [
  { id: "sprint", label: "Focused Sprint (1–2 Disciplines)", weeksAdd: 0 },
  { id: "multi", label: "Multi-Discipline Build (3–5 Disciplines)", weeksAdd: 3 },
  { id: "flagship", label: "Enterprise Transformation (Full Suite)", weeksAdd: 6 }
];

const estimatorAddons = [
  { id: "devops-k8s", label: "Production Kubernetes & GitOps IaC", weeksAdd: 1 },
  { id: "design-system", label: "Master Tokenized Figma Design System", weeksAdd: 1 },
  { id: "capi-growth", label: "Server-Side CAPI & GA4 Attribution", weeksAdd: 0.5 },
  { id: "sre-support", label: "24/7 SRE Incident Response Coverage", weeksAdd: 0.5 }
];

const faqs = [
  {
    question: "Why should we work with a full-spectrum digital partner instead of multiple agencies?",
    answer: "Managing separate agencies for design, frontend development, backend APIs, DevOps, and marketing creates massive finger-pointing, slow iteration velocity, and broken technical handoffs. HiveRift operates as a unified engineering partner where software architects, designers, cloud engineers, and growth marketers work together from day one, guaranteeing cohesion and speed."
  },
  {
    question: "How do you ensure projects are delivered on time and within budget?",
    answer: "We structure engagements around 2-week agile sprints with concrete, demonstrated deliverables at the end of each sprint. You test real code in staging environments every week, backed by fixed-price milestone agreements that eliminate budget overruns."
  },
  {
    question: "Who owns the code, design files, and cloud infrastructure?",
    answer: "You own 100% of all intellectual property, GitHub repositories, Figma files, Terraform code, and databases from day one. Everything is deployed directly into your own cloud accounts."
  },
  {
    question: "Can you take over and modernize an existing, messy codebase?",
    answer: "Yes. Over 50% of our enterprise engagements involve rescuing fragile legacy systems. We begin with a deep architectural audit, write regression tests, decouple monoliths, and modernize components incrementally with zero operational downtime."
  },
  {
    question: "Do you provide ongoing maintenance and feature development post-launch?",
    answer: "Yes. We offer flexible post-launch SLAs covering 24/7 infrastructure uptime monitoring, proactive security patching, performance optimization, and dedicated monthly sprint hours for continuous feature development."
  }
];

export default function ServicesContent() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices = selectedCategory === "All Services"
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="services" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Full-Spectrum Enterprise Digital Capabilities
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Digital Engineering Services Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600">
              Velocity, Resilience & Scale
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            From sub-second Next.js web applications and 60fps native mobile apps to private fine-tuned AI models and Kubernetes cloud infrastructure, we engineer mission-critical digital systems that scale businesses.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Custom Engagement</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <ShieldCheck size={18} className="text-emerald-600" />
              <span>Schedule Architecture Consultation</span>
            </button>
          </div>

          {/* Live Services Showcase */}
          <div className="mt-14 lg:mt-20">
            <ServicesHeroShowcase />
          </div>

        </div>
      </section>

      {/* Services Catalog with Category Filters */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Engineering Disciplines</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Comprehensive Technology Capabilities for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Modern Digital Enterprises
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Filter by capability or explore our dedicated service centers to see detailed architectural specifications and case studies.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-emerald-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <service.icon size={26} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-700 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Dedicated Architecture</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture Benchmark */}
      <ServiceArchitectureBenchmark
        badgeText="Partnership Benchmark"
        heading="Why Fragmented Multi-Agency Chaos Fails vs."
        highlightHeading="HiveRift Unified Engineering Partner"
        subheading="Compare fragmented vendors who point fingers with HiveRift's unified, multidisciplinary full-spectrum digital engineering standard."
        legacyLabel="Multiple Fragmented Agencies"
        hiveriftLabel="HiveRift Unified Engineering Partner"
        comparisons={comparisons}
        summaryBadges={[
          "100% On-Time Delivery Guarantee",
          "Sub-Second Performance Standard",
          "100% Intellectual Property Ownership"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Enterprise Delivery Lifecycle"
        heading="From Technical Discovery to"
        highlightHeading="Global Production Cutover"
        subheading="Our structured 6-phase engineering lifecycle ensures transparent sprint demos, continuous automated QA, and zero-downtime production cutovers."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated System Stream"
        heading="Real-Time Full-Spectrum"
        highlightHeading="Health & Telemetry Audit Stream"
        subheading="Watch our automated inspection engine audit 9 core disciplines, run synthetic transaction tests, verify sub-second response times, and confirm 100% SOC2 security standards."
        terminalTitle="hiverift-nexus-engine ~ full-spectrum"
        branchInfo="main: enterprise-mesh-v4"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="Engagement Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Custom Digital Transformation"
        subheading="Select your desired engineering disciplines, engagement scale, and infrastructure specifications to project sprint timelines and delivery scope."
        tierLabel="Engagement Architecture Tier"
        tierOptions={estimatorTiers}
        scaleLabel="Project Scope & Team Scale"
        scaleOptions={estimatorScales}
        addonsLabel="Enterprise Security & Support Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={4}
        basePriceUsd={3000}
        recommendedStack={["Next.js 15", "Flutter", "Go / NestJS", "PostgreSQL", "Kubernetes", "Llama 3 / vLLM"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Enterprise Digital Engineering"
        projectTypes={[
          "Custom Web & Software Development",
          "eCommerce Solutions & Shopify Plus",
          "Mobile App Development (iOS & Android)",
          "AI, Machine Learning & Data Annotation",
          "Cloud Architecture & DevOps Automation",
          "Full-Spectrum Digital Transformation"
        ]}
        defaultProjectType="Custom Web & Software Development"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Enterprise FAQs"
        heading="Frequently Answered Questions"
        highlightHeading="on Full-Spectrum Digital Engineering"
        subheading="Authoritative clarity on agency coordination, IP ownership, legacy code refactoring, and post-launch SLAs."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

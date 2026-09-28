"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Code,
  Server,
  Database,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Lock,
  GitBranch,
  Activity,
  Workflow
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { ServiceTechCanvas } from "../components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "../components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "../components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "../components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "../components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "../components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "../components/shared/ServiceFaqAccordion";
import { SoftwareHeroShowcase } from "./components/SoftwareHeroShowcase";

export default function SoftwareDevContent() {
  const softwareFeatures = [
    {
      icon: Server,
      title: "Event-Driven Microservices Architecture",
      desc: "Deconstruct sluggish monoliths into decoupled, independently scalable microservices engineered in Go, Node.js/NestJS, and FastAPI.",
      deliverable: "Sub-15ms Internal Service Latency & Auto-Scaling",
      points: [
        "RabbitMQ & Apache Kafka asynchronous messaging pipelines",
        "gRPC high-speed internal binary RPC protocols",
        "Isolated containerized microservices in Kubernetes pods"
      ]
    },
    {
      icon: Database,
      title: "Enterprise Relational & Distributed DBs",
      desc: "Design scalable, ACID-compliant database schemas. We implement high-throughput PostgreSQL clustering, connection pooling, and multi-tier caching.",
      deliverable: "Zero Lock Contention & Sub-5ms Query Reads",
      points: [
        "PostgreSQL partition tables & read-replica clustering",
        "Redis enterprise distributed caching & lock orchestration",
        "Automated zero-downtime database schema migrations"
      ]
    },
    {
      icon: Workflow,
      title: "Bespoke ERP, CRM & Business Portals",
      desc: "Replace clunky off-the-shelf software with tailored operational platforms built around your exact commercial logic, role hierarchies, and workflows.",
      deliverable: "+60% Operational Efficiency & Zero Manual Friction",
      points: [
        "Granular Role-Based Access Control (RBAC) & audit logging",
        "Custom workflow automation engines & approval hierarchies",
        "Real-time interactive management reporting dashboards"
      ]
    },
    {
      icon: Lock,
      title: "SOC2, HIPAA & Bank-Grade Security",
      desc: "Security baked into every layer of code. We enforce end-to-end TLS encryption, secure secret vaults, automated vulnerability audits, and OWASP compliance.",
      deliverable: "100% Audit-Ready Compliance & Data Encryption",
      points: [
        "Vault & KMS hardware key management for secret rotation",
        "OWASP Top 10 automated CI/CD security scanning",
        "Complete tamper-evident immutable audit trails"
      ]
    },
    {
      icon: GitBranch,
      title: "Third-Party & Legacy API Modernization",
      desc: "Bridge the gap between aging legacy databases and modern web/mobile apps with resilient, rate-limited API gateways and ETL data synchronizers.",
      deliverable: "Unified REST & GraphQL Enterprise API Layer",
      points: [
        "Envoy & Kong API Gateway configuration with JWT auth",
        "Automated retry mechanisms with exponential backoff",
        "Legacy SOAP & XML to high-speed JSON/gRPC transformation"
      ]
    },
    {
      icon: Activity,
      title: "Automated Testing & Quality Assurance",
      desc: "We write end-to-end integration and load tests so your software performs flawlessly during demand surges without regressions or data corruption.",
      deliverable: "Automated Regression Tests & Quality Guardrails",
      points: [
        "Unit, integration, and contract tests in GitHub Actions",
        "Distributed tracing with OpenTelemetry & Datadog",
        "Continuous 24/7 infrastructure health monitoring"
      ]
    }
  ];

  const comparisons = [
    {
      title: "System Architecture & Scalability",
      legacy: {
        score: "Tightly Coupled Monolith",
        status: "Fragile Deployment Risk",
        desc: "A single bug in billing or reporting crashes the entire enterprise application, causing expensive downtime."
      },
      hiverift: {
        score: "Decoupled Microservices",
        status: "Fault-Tolerant & Elastic",
        desc: "Each service runs in its own container with independent scaling, circuit breakers, and zero cascading failures."
      }
    },
    {
      title: "Database Query Latency & Concurrency",
      legacy: {
        score: "400ms - 1,200ms",
        status: "Unindexed Lock Contention",
        desc: "Inefficient ORM queries and missing indexes cause database deadlocks whenever more than 100 users perform simultaneous operations."
      },
      hiverift: {
        score: "< 12ms p99",
        status: "Connection Pooling & Redis",
        desc: "Optimized raw SQL queries, read-replica clusters, and sub-millisecond Redis caching handle 50,000+ operations/sec."
      }
    },
    {
      title: "Code Maintainability & Tech Debt",
      legacy: {
        score: "Spaghetti Codebase",
        status: "High Engineer Turnover Risk",
        desc: "Undocumented, un-typed code with zero automated test coverage makes every new feature release a high-risk event."
      },
      hiverift: {
        score: "Clean Architecture (DDD)",
        status: "Automated Tests & Documentation",
        desc: "Domain-Driven Design (DDD), strict TypeScript/Go typing, and automated CI/CD testing pipelines make onboarding new engineers effortless."
      }
    },
    {
      title: "Security & Source Code Ownership",
      legacy: {
        score: "Opaque Vendor Lock-in",
        status: "Shared Multi-Tenant Risk",
        desc: "Proprietary third-party software locks your business data behind monthly license fees and security blindspots."
      },
      hiverift: {
        score: "100% IP & Source Ownership",
        status: "Self-Hosted or Dedicated Cloud",
        desc: "Complete transfer of GitHub repositories, infrastructure code (Terraform), and database schemas to your enterprise."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Domain Analysis & System Blueprint",
      timeline: "Days 1–5",
      desc: "Deep analysis of your operational workflows, user roles, data volumes, and integration points to architect the domain entities and API specs.",
      tools: ["Domain-Driven Design", "Miro", "ERD Modeling", "OpenAPI 3.0"],
      deliverables: ["System Architecture Blueprint", "Database Schema ERD", "API Contract Spec"]
    },
    {
      step: "02",
      title: "Core Service Shell & Auth Mesh",
      timeline: "Weeks 2–3",
      desc: "Setting up the monorepo, Docker environments, RBAC authentication service, and continuous integration pipeline with automated linters.",
      tools: ["Go / NestJS", "PostgreSQL", "Docker", "GitHub Actions"],
      deliverables: ["RBAC Auth Service", "Automated CI/CD Pipeline", "Local Dev Environment"]
    },
    {
      step: "03",
      title: "Business Logic & Workflow Sprints",
      timeline: "Weeks 4–7",
      desc: "Iterative sprints implementing custom business operations, approval pipelines, data validation, and third-party API synchronizers.",
      tools: ["RabbitMQ / Kafka", "Redis", "Prisma / pgx", "Jest / PyTest"],
      deliverables: ["Core Workflow Engine", "Interactive Staging Environment", "Bi-Weekly Demos"]
    },
    {
      step: "04",
      title: "Dashboard UI & Role-Based Views",
      timeline: "Weeks 8–9",
      desc: "Building intuitive, high-speed administrative dashboards with Next.js 15, responsive data tables, instant search, and export tools.",
      tools: ["Next.js 15", "Tailwind CSS", "TanStack Table", "Chart.js"],
      deliverables: ["Executive Admin Dashboard", "Role-Based UI Views", "Report Generation Engine"]
    },
    {
      step: "05",
      title: "Stress Testing & Concurrency Audit",
      timeline: "Week 10",
      desc: "Simulating heavy traffic spikes up to 50,000 concurrent transactions to verify database connection limits and zero memory leaks.",
      tools: ["k6 Load Testing", "Locust", "SonarQube", "Datadog APM"],
      deliverables: ["Stress Test Benchmark", "OWASP Security Audit", "Optimization Sign-off"]
    },
    {
      step: "06",
      title: "Production Cutover & IP Transfer",
      timeline: "Week 11+",
      desc: "Zero-downtime database migration, DNS cutover to production Kubernetes cluster, and complete transfer of all code repositories and docs.",
      tools: ["Kubernetes", "AWS / Azure", "Terraform", "GitLab / GitHub"],
      deliverables: ["Production Live Deployment", "100% IP & Repo Transfer", "180-Day Warranty SLA"]
    }
  ];

  const terminalLogs = [
    { text: "k6 run --vus 5000 --duration 60s load_test_simulation.js", type: "cmd" as const, tag: "stress-test" },
    { text: "Initializing virtual users across 4 distributed runner nodes...", type: "info" as const },
    { text: "Simulating 5,000 concurrent requests across /api/v1/orders and /api/v1/billing", type: "cyan" as const },
    { text: "Database connection pool saturated at 128 connections. Zero connection timeouts.", type: "info" as const },
    { text: "Redis distributed lock latency: 0.8ms avg. Deadlock count: 0", type: "success" as const },
    { text: "Total transactions processed: 284,910 in 60.0s [4,748 req/s throughput]", type: "cyan" as const },
    { text: "p95 Latency: 10.2ms | p99 Latency: 13.8ms | Error Rate: 0.00%", type: "success" as const },
    { text: "kubectl rollout status deployment/order-microservice -n production", type: "cmd" as const, tag: "k8s" },
    { text: "deployment \"order-microservice\" successfully rolled out with zero downtime", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Architecture", val: "Microservices & Go/NestJS", status: "Clean DDD" },
    { label: "p99 Latency", val: "12ms Global", status: "Sub-Second" },
    { label: "Concurrency", val: "50k+ req/sec", status: "Auto-Scaled" },
    { label: "Uptime SLA", val: "99.99%", status: "High-Availability" }
  ];

  const estimatorTiers = [
    {
      id: "business-crm",
      label: "Custom ERP / CRM System",
      desc: "Tailored enterprise portal with custom workflows, RBAC hierarchies, and automated reporting.",
      multiplier: 1.0
    },
    {
      id: "microservice-backend",
      label: "High-Throughput Microservice Engine",
      desc: "Distributed backend with gRPC, Kafka/RabbitMQ pipelines, and multi-region database clustering.",
      multiplier: 1.35
    },
    {
      id: "saas-platform",
      label: "Full Multi-Tenant SaaS Platform",
      desc: "Complete customer-facing SaaS with subscription billing, team workspaces, and developer APIs.",
      multiplier: 1.5
    },
    {
      id: "legacy-modernization",
      label: "Legacy Monolith Refactoring & Migration",
      desc: "Zero-downtime database migration and phased architectural modernization.",
      multiplier: 1.2
    }
  ];

  const estimatorScales = [
    { id: "core", label: "Core System (1–3 Services)", weeksAdd: 0 },
    { id: "medium", label: "Enterprise Suite (4–8 Services)", weeksAdd: 3 },
    { id: "large", label: "Complex Ecosystem (10+ Services)", weeksAdd: 6 }
  ];

  const estimatorAddons = [
    { id: "kafka", label: "Kafka Event-Driven Stream", weeksAdd: 1 },
    { id: "soc2", label: "SOC2 Compliance & Secret Vaults", weeksAdd: 1 },
    { id: "bi", label: "Advanced BI & Analytics Engine", weeksAdd: 1.5 },
    { id: "api-gateway", label: "Public Developer API & Docs", weeksAdd: 1 }
  ];

  const faqs = [
    {
      question: "Why should we build custom software instead of buying off-the-shelf SaaS?",
      answer: "Off-the-shelf software charges expensive per-seat recurring licenses, forces your team to bend operational processes around their rigid limitations, and traps your valuable proprietary data. Custom software delivers a 100% bespoke fit, eliminates subscription bloat, and provides an enterprise asset that creates defensible competitive advantage."
    },
    {
      question: "How do you guarantee zero downtime during database migrations?",
      answer: "We employ the Expand-and-Contract (Blue-Green) database migration pattern. New schema additions run alongside legacy columns, dual-writing data until validation passes, followed by a graceful cutover. This guarantees 100% uptime with zero data loss or user disruption."
    },
    {
      question: "How do you maintain software security and prevent vulnerabilities?",
      answer: "We implement defense-in-depth: strict input sanitization, parameterized queries preventing SQL injection, JWT token encryption, granular role-based permissions (RBAC), and automated OWASP vulnerability scanning in every pull request."
    },
    {
      question: "Who owns the code, infrastructure configurations, and databases?",
      answer: "You own 100% of all intellectual property, source code repositories, Dockerfiles, Terraform scripts, and database schemas. Everything is deployed directly into your own AWS, Azure, or GCP accounts."
    },
    {
      question: "Can your custom software integrate with our existing third-party systems?",
      answer: "Yes. We have built integrations with Salesforce, SAP, QuickBooks, Stripe, Twilio, HubSpot, legacy on-premise SQL servers, and bespoke internal APIs with robust rate-limiting and automated retry queues."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="software" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Bespoke Enterprise Software Engineering
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Custom Software Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              High Concurrency & Scale
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We architect and build tailored enterprise platforms, event-driven microservices, and custom ERP/CRM systems with sub-15ms p99 latency, 99.99% uptime, and 100% intellectual property ownership.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Build Your Enterprise Software</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Server size={18} className="text-emerald-600" />
              <span>Request Architecture Audit</span>
            </button>
          </div>

          {/* Live Software Showcase */}
          <div className="mt-14 lg:mt-20">
            <SoftwareHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Spectrum Software Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Enterprise Software Without{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Technical Debt or Lock-In
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every system is built using Domain-Driven Design (DDD), automated CI/CD testing pipelines, and battle-tested database architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {softwareFeatures.map((feat, idx) => (
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
                  <span className="text-xs font-mono font-bold text-slate-400">MODULE 0{idx + 1}</span>
                  <button
                    onClick={() => openEnquiryModal()}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Consult Architect</span>
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
        badgeText="Software Architecture Benchmark"
        heading="Why Bloated Monoliths Fail vs."
        highlightHeading="HiveRift Event-Driven Architecture"
        subheading="Compare fragile outsourced codebases with HiveRift's enterprise microservices and distributed database architecture."
        legacyLabel="Outdated Monolithic Agency Code"
        hiveriftLabel="HiveRift Enterprise Microservices"
        comparisons={comparisons}
        summaryBadges={[
          "Sub-15ms p99 Latency",
          "Zero Lock Deadlocks",
          "100% Source Code Ownership"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Software Engineering Lifecycle"
        heading="From Domain Modeling to"
        highlightHeading="High-Throughput Production Cutover"
        subheading="Our disciplined 6-phase engineering lifecycle ensures rock-solid stability, zero downtime migrations, and complete code documentation."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Load Test Stream"
        heading="Real-Time Concurrency &"
        highlightHeading="Zero-Downtime Deployment Logs"
        subheading="Watch our automated k6 stress testing suite simulate 5,000 concurrent transactions while Kubernetes orchestrates zero-downtime container rollouts."
        terminalTitle="hiverift-software-engine ~ k8s-mesh"
        branchInfo="main: k6-benchmarks"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="Software Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Custom Enterprise Platform"
        subheading="Select your architectural model, service count, and compliance specifications to estimate delivery timelines and project scope."
        tierLabel="Software System Category"
        tierOptions={estimatorTiers}
        scaleLabel="Service & Workflow Complexity"
        scaleOptions={estimatorScales}
        addonsLabel="Enterprise Add-ons & Data Pipelines"
        addonOptions={estimatorAddons}
        baseWeeks={5}
        basePriceUsd={3000}
        recommendedStack={["Go / NestJS", "PostgreSQL", "Redis", "Docker / K8s", "RabbitMQ / Kafka", "OpenTelemetry"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Custom Software Development"
        projectTypes={[
          "Custom ERP / Operational Platform",
          "Custom CRM & Client Portal",
          "Multi-Tenant SaaS Product Backend",
          "High-Throughput Microservice Engine",
          "Legacy Monolith Refactoring & Migration",
          "Enterprise API Gateway & Integration"
        ]}
        defaultProjectType="Custom ERP / Operational Platform"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Software Engineering FAQs"
        heading="Frequently Answered Technical"
        highlightHeading="Questions on Custom Software"
        subheading="Clear guidance on architecture decisions, zero-downtime database migrations, and long-term source code maintenance."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

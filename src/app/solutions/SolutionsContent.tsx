"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Building2,
  Heart,
  GraduationCap,
  Factory,
  ShoppingCart,
  Plane,
  Shield,
  Landmark,
  Layers,
  CheckCircle2,
  ArrowRight,
  X,
  ShoppingBag,
  Sparkles,
  Zap,
  Lock,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { ServiceTechCanvas } from "../services/components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "../services/components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "../services/components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "../services/components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "../services/components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "../services/components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "../services/components/shared/ServiceFaqAccordion";
import { SolutionsHeroShowcase } from "./components/SolutionsHeroShowcase";

const industrySolutions = [
  {
    id: "finance",
    name: "Banking & Financial Services",
    icon: Landmark,
    problem: "Legacy COBOL mainframes, slow mobile UX, compliance gaps, and high fraud risk.",
    solution: "Core banking modernization, biometric mobile apps, real-time AI fraud detection, and PCI-DSS compliance.",
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/736x/74/d1/32/74d1320b80747acd0234b7a458ebe1e2.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Heart,
    problem: "Disconnected EHR records, slow patient portals, and HIPAA compliance vulnerabilities.",
    solution: "Telemedicine platforms, ABDM-compliant patient apps, FHIR interoperability, and automated triage.",
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/1200x/24/83/de/2483dec64055ddcf8baa5e2760543d48.jpg",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    problem: "High cart abandonment, bloated slow Shopify themes, and broken ERP inventory synchronization.",
    solution: "Headless Next.js commerce, sub-second 1-click checkouts, personalized AI recommendations, and multi-warehouse sync.",
    color: "from-teal-500 to-emerald-500",
    image: "https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg",
  },
  {
    id: "education",
    name: "Education & E-Learning",
    icon: GraduationCap,
    problem: "Clunky legacy LMS platforms, student drop-off, and poor video streaming infrastructure.",
    solution: "Custom interactive LMS, live WebRTC video classrooms, automated grading, and mobile learning apps.",
    color: "from-teal-600 to-emerald-600",
    image: "https://i.pinimg.com/736x/00/d7/29/00d7294e25073d9d1899e4f52e014b32.jpg",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial IoT",
    icon: Factory,
    problem: "Paper-based tracking, unplanned machine downtime, and fragmented supply chain visibility.",
    solution: "IoT MES dashboards, predictive maintenance sensors, SAP/ERP connectors, and real-time floor telemetry.",
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/1200x/23/55/87/2355876d4d8ca2d753b72aaee06f6a19.jpg",
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    icon: Plane,
    problem: "High OTA commission losses, clunky direct booking engines, and fragmented loyalty programs.",
    solution: "Sub-second direct booking platforms, contactless mobile guest check-in, dynamic pricing, and loyalty automation.",
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/736x/ba/18/27/ba1827c7d0547371f27c8f379188d925.jpg",
  },
  {
    id: "real-estate",
    name: "Real Estate & PropTech",
    icon: Building2,
    problem: "Slow listing updates, manual agent lead assignment, and disjointed client communication.",
    solution: "PropTech listing portals, automated CRM lead routing, 3D virtual tour integration, and digital leasing agreements.",
    color: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
  {
    id: "food-restaurant",
    name: "Food & Restaurant Chains",
    icon: ShoppingBag,
    problem: "30% aggregator commission cuts, slow kitchen display systems, and fragmented customer data.",
    solution: "Direct online ordering apps, automated delivery fleet dispatch, kitchen POS integration, and loyalty tiers.",
    color: "from-teal-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Layers,
    problem: "Sub-optimal vehicle routing, blind spot shipment tracking, and expensive warehouse delays.",
    solution: "AI dynamic route optimization, real-time GPS telemetry, digital bills of lading, and automated warehouse WMS.",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
  {
    id: "insurance",
    name: "Insurance & InsurTech",
    icon: Shield,
    problem: "Multi-week manual claims processing, high fraud rates, and frustrating policyholder communication.",
    solution: "Instant automated claims intake, AI photo damage assessment, automated underwriting, and policyholder portals.",
    color: "from-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
];

const comparisons = [
  {
    title: "Domain Specificity & Workflow Fit",
    legacy: {
      score: "Generic One-Size-Fits-All",
      status: "Operational Friction",
      desc: "Off-the-shelf software forces your clinical, financial, or manufacturing teams to bend their operations around rigid third-party restrictions."
    },
    hiverift: {
      score: "100% Bespoke Domain Fit",
      status: "Engineered for Your Context",
      desc: "Architected around your exact regulatory compliance, transactional role hierarchies, and unique commercial supply chain workflows."
    }
  },
  {
    title: "Regulatory Compliance & Security",
    legacy: {
      score: "Shared Multi-Tenant Risk",
      status: "Compliance Exposure",
      desc: "Public SaaS platforms store sensitive patient, financial, or logistics data on shared cloud clusters, risking regulatory non-compliance."
    },
    hiverift: {
      score: "HIPAA / PCI-DSS / SOC2",
      status: "Dedicated Private Cloud",
      desc: "Air-gapped VPCs, hardware-backed encryption keys, immutable audit trails, and 100% compliance pass guarantees."
    }
  },
  {
    title: "Legacy Integration & Zero-Downtime",
    legacy: {
      score: "Disjointed Data Silos",
      status: "Manual CSV Re-entry",
      desc: "Third-party tools fail to communicate with legacy AS400, SAP, or on-premise SQL servers, leading to human error and data mismatch."
    },
    hiverift: {
      score: "Seamless API & ETL Mesh",
      status: "Real-Time Event Driven",
      desc: "Robust gRPC and Kafka event pipelines synchronize legacy databases with modern web and mobile apps with zero operational downtime."
    }
  },
  {
    title: "Total Cost of Ownership (TCO)",
    legacy: {
      score: "Per-Seat Subscription Tax",
      status: "Perpetual License Escalation",
      desc: "Monthly per-seat fees skyrocket as your workforce grows, while you build zero enterprise equity or proprietary technology assets."
    },
    hiverift: {
      score: "100% IP Asset Ownership",
      status: "Zero Recurring Seat Fees",
      desc: "You own all code repositories, infrastructure configurations, and databases outright, creating a lasting enterprise valuation asset."
    }
  }
];

const processSteps = [
  {
    step: "01",
    title: "Vertical Discovery & Compliance Audit",
    timeline: "Days 1–5",
    desc: "Analyzing your specific industry regulations (HIPAA, PCI, ABDM, GDPR), legacy system constraints, and stakeholder operational workflows.",
    tools: ["Compliance Frameworks", "Workflow Modeling", "Security Specs"],
    deliverables: ["Regulatory Compliance Matrix", "Domain Architecture Blueprint", "Legacy Integration Map"]
  },
  {
    step: "02",
    title: "Core Domain Entities & Security Mesh",
    timeline: "Weeks 2–3",
    desc: "Establishing secure multi-AZ cloud foundations, RBAC role hierarchies, secret key vaults, and automated audit logging pipelines.",
    tools: ["Terraform", "PostgreSQL", "HashiCorp Vault", "Docker"],
    deliverables: ["RBAC Security Foundation", "Database Schema Models", "Audit-Ready Infrastructure"]
  },
  {
    step: "03",
    title: "Legacy Interoperability & API Bridges",
    timeline: "Weeks 4–7",
    desc: "Engineering high-speed ETL connectors to integrate with legacy SAP, Oracle, core banking mainframes, and clinical EHR data stores.",
    tools: ["Kafka", "RabbitMQ", "REST/gRPC", "Redis"],
    deliverables: ["Bi-Directional Legacy Sync", "Event Bus Orchestration", "Zero Data Loss Pipeline"]
  },
  {
    step: "04",
    title: "High-Performance User Portals",
    timeline: "Weeks 8–10",
    desc: "Deploying responsive web and native mobile interfaces for operational staff, doctors, dispatchers, or end-customers with sub-second speeds.",
    tools: ["Next.js 15", "Flutter", "Tailwind CSS", "WebSockets"],
    deliverables: ["Role-Based Web Dashboards", "Cross-Platform Mobile Apps", "Real-Time Telemetry Views"]
  },
  {
    step: "05",
    title: "Adversarial Pentesting & Regulatory QA",
    timeline: "Week 11",
    desc: "Executing rigorous third-party penetration testing, load testing up to 50k transactions, and formal regulatory compliance certification.",
    tools: ["OWASP ZAP", "k6 Load Testing", "SOC2 Auditor Tooling"],
    deliverables: ["Pentest Security Sign-off", "Stress Test Benchmark", "Audit-Ready Documentation"]
  },
  {
    step: "06",
    title: "Zero-Downtime Cutover & Handover",
    timeline: "Week 12+",
    desc: "Graceful live cutover without interrupting active operations, staff training, complete IP code transfer, and ongoing SLA coverage.",
    tools: ["Blue-Green Deploy", "Route 53", "Runbooks", "24/7 SRE"],
    deliverables: ["Live Production Cutover", "100% Source Code Transfer", "Dedicated Enterprise SLA"]
  }
];

const terminalLogs = [
  { text: "enterprise-audit --domain healthcare.abdm --standard hipaa_tier1", type: "cmd" as const, tag: "compliance" },
  { text: "Scanning 42 FHIR API endpoints and database encryption at rest... PASSED", type: "success" as const },
  { text: "Validating tamper-evident audit logging in PostgreSQL transaction log...", type: "info" as const },
  { text: "Hardware security module (HSM) session token verified with zero packet leakage", type: "cyan" as const },
  { text: "Simulating 10,000 concurrent patient tele-consultations across 4 AZ regions...", type: "cmd" as const, tag: "stress" },
  { text: "p99 WebRTC connection latency: 18.2ms. Packet drop rate: 0.00%", type: "success" as const },
  { text: "Automated Blue-Green cluster cutover completed with ZERO operational downtime", type: "success" as const }
];

const terminalSpecs = [
  { label: "Vertical Scope", val: "10 Specialized Sectors", status: "Tailored Models" },
  { label: "Compliance", val: "HIPAA / PCI Level 1", status: "100% Certified" },
  { label: "Transaction SLA", val: "< 45ms Latency", status: "Sub-Second" },
  { label: "IP Ownership", val: "100% Code & Data", status: "Zero Lock-In" }
];

const estimatorTiers = [
  {
    id: "fintech-portal",
    label: "Banking & FinTech Core System",
    desc: "High-security core banking modernization with instant payment gateways and biometric auth.",
    multiplier: 1.4
  },
  {
    id: "healthcare-platform",
    label: "Healthcare & Telehealth System",
    desc: "ABDM & HIPAA-compliant patient management, tele-consultation, and EHR integration.",
    multiplier: 1.35
  },
  {
    id: "logistics-wms",
    label: "Smart Logistics & Supply Chain WMS",
    desc: "Fleet GPS telemetry, dynamic route optimization, and automated warehouse management.",
    multiplier: 1.25
  },
  {
    id: "omnichannel-retail",
    label: "Omnichannel Headless Commerce",
    desc: "High-throughput sub-second shopping platform with multi-warehouse ERP synchronization.",
    multiplier: 1.15
  }
];

const estimatorScales = [
  { id: "core", label: "Core Enterprise Portal", weeksAdd: 0 },
  { id: "regional", label: "Multi-Location Regional Mesh", weeksAdd: 3 },
  { id: "global", label: "Global Multi-Cloud Ecosystem", weeksAdd: 6 }
];

const estimatorAddons = [
  { id: "legacy-sync", label: "Legacy SAP / ERP Integration", weeksAdd: 1.5 },
  { id: "hipaa-pci", label: "Formal Regulatory Audit Sign-off", weeksAdd: 1 },
  { id: "mobile-apps", label: "iOS & Android Companion Apps", weeksAdd: 2 },
  { id: "dr-multi-az", label: "Multi-Region Active Disaster Recovery", weeksAdd: 1 }
];

const faqs = [
  {
    question: "Why should we build industry-tailored systems instead of using generic enterprise SaaS?",
    answer: "Generic software forces your specialized operational workflows into rigid third-party boxes, charges crippling recurring per-user fees, and traps your proprietary corporate data. Custom industry solutions match your exact commercial context, guarantee compliance with sector regulations (like HIPAA or PCI-DSS), and build defensible enterprise equity."
  },
  {
    question: "How do you guarantee that our active operations won't be disrupted during migration?",
    answer: "We employ phased, parallel-run architectures. We build resilient API adapters that dual-write transactions to both legacy mainframes and modern cloud microservices. This allows your teams to validate accuracy in staging and cut over gracefully with zero operational downtime."
  },
  {
    question: "How do you ensure strict regulatory compliance (HIPAA, PCI-DSS, SOC2, GDPR)?",
    answer: "Compliance is embedded directly into our code and infrastructure templates: AES-256 data encryption at rest and in transit, hardware-backed secret key management, air-gapped VPCs, granular role-based access control (RBAC), and automated immutable audit logging for third-party certifiers."
  },
  {
    question: "Who owns the intellectual property and code of our custom system?",
    answer: "You own 100% of all intellectual property, source code, database architectures, and design files from day one. Everything is deployed directly into your company's dedicated cloud accounts."
  },
  {
    question: "Can these solutions integrate with our existing legacy ERP, CRM, or on-premise databases?",
    answer: "Yes. We have engineered mission-critical integrations with SAP, Oracle, Salesforce, core banking protocols (SWIFT/ISO 20022), HL7/FHIR healthcare standards, and on-premise SQL databases with automated error retry queues."
  }
];

export default function SolutionsContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="solutions" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Tailored Enterprise Digital Systems
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Industry-Specific Solutions Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              Compliance, Efficiency & Scale
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Generic systems fail because every sector has unique compliance, audience behaviors, and transaction workflows. We engineer specialized solutions built for your exact commercial context.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Custom Enterprise Systems</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Building2 size={18} className="text-emerald-600" />
              <span>Request Solution Consultation</span>
            </button>
          </div>

          {/* Live Solutions Showcase */}
          <div className="mt-14 lg:mt-20">
            <SolutionsHeroShowcase />
          </div>

        </div>
      </section>

      {/* Industry Solutions Matrix */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Sector-Specific Digital Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Specialized Digital Systems for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                10 Core Global Industries
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Click any industry sector to explore how our specialized architectures solve deep structural challenges and unlock compounding commercial scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industrySolutions.map((industry) => (
              <div key={industry.id} className="h-full">
                <Link href={`/industries/${industry.id}`} className="block h-full transition-transform hover:-translate-y-2 duration-300">
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/90 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:border-emerald-500">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-40 group-hover:opacity-20 transition-opacity duration-300`} />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-emerald-600">
                        <industry.icon size={24} />
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-1">
                          {industry.name}
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                              <X size={12} />
                              <span>Friction Solved</span>
                            </div>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-2">
                              {industry.problem}
                            </p>
                          </div>

                          <div>
                            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                              <CheckCircle2 size={12} />
                              <span>Solution Delivered</span>
                            </div>
                            <p className="text-slate-900 text-xs leading-relaxed font-bold line-clamp-2">
                              {industry.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-emerald-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                        <span>Explore Sector Solutions</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture Benchmark */}
      <ServiceArchitectureBenchmark
        badgeText="Solutions Benchmark"
        heading="Why Generic Enterprise Software Fails vs."
        highlightHeading="HiveRift Industry-Tailored Systems"
        subheading="Compare generic, inflexible off-the-shelf software with HiveRift's bespoke, compliant, and domain-native digital architectures."
        legacyLabel="Off-The-Shelf Generic SaaS"
        hiveriftLabel="HiveRift Industry-Tailored Architecture"
        comparisons={comparisons}
        summaryBadges={[
          "100% Bespoke Domain Fit",
          "HIPAA / PCI-DSS / SOC2",
          "100% Source Code & IP Ownership"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Enterprise Delivery Lifecycle"
        heading="From Regulatory Discovery to"
        highlightHeading="Seamless Operational Cutover"
        subheading="Our structured 6-phase enterprise delivery roadmap guarantees strict compliance, zero data loss, and smooth integration with legacy enterprise software."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Solution Stream"
        heading="Real-Time Compliance &"
        highlightHeading="Multi-Region Cluster Telemetry"
        subheading="Watch our automated verification engine audit HIPAA and PCI-DSS compliance checks, run 10,000 concurrent stress transactions, and promote cluster traffic with zero downtime."
        terminalTitle="hiverift-enterprise ~ compliance-audit"
        branchInfo="main: fhir-abdm-v5"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="Solutions Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Enterprise Industry Platform"
        subheading="Select your industry domain, scale, and compliance integration standards to estimate delivery timelines and project scope."
        tierLabel="Industry Domain Architecture"
        tierOptions={estimatorTiers}
        scaleLabel="Enterprise Operational Scale"
        scaleOptions={estimatorScales}
        addonsLabel="Integration & Compliance Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={6}
        basePriceUsd={4000}
        recommendedStack={["Next.js 15", "Go / NestJS", "PostgreSQL", "Kafka", "Docker / K8s", "HashiCorp Vault"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Enterprise Solutions"
        projectTypes={[
          "Banking & FinTech Core System",
          "Healthcare & ABDM / HIPAA Platform",
          "Smart Logistics & Supply Chain WMS",
          "Omnichannel Headless Commerce",
          "Manufacturing IoT & MES Dashboard",
          "InsurTech Automated Claims Portal"
        ]}
        defaultProjectType="Banking & FinTech Core System"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Solutions FAQs"
        heading="Frequently Answered Questions"
        highlightHeading="on Custom Industry Digital Solutions"
        subheading="Authoritative clarity on migration safety, regulatory compliance, legacy ERP connectors, and intellectual property ownership."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Cloud,
  Server,
  Database,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  GitBranch,
  Activity,
  DollarSign,
  Lock,
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
import { CloudHeroShowcase } from "./components/CloudHeroShowcase";

export default function CloudContent() {
  const cloudFeatures = [
    {
      icon: Cloud,
      title: "Kubernetes & Container Orchestration",
      desc: "Architect elastic AWS EKS, Google GKE, and Azure AKS clusters with automated Horizontal Pod Autoscaling (HPA) and multi-AZ high availability.",
      deliverable: "High-Availability Architecture & Pod Resilience",
      points: [
        "Multi-AZ pod distribution with anti-affinity rules",
        "Karpenter dynamic node auto-provisioning in seconds",
        "Ingress controller setup with TLS cert-manager automation"
      ]
    },
    {
      icon: GitBranch,
      title: "GitOps & Terraform Infrastructure-as-Code",
      desc: "Replace error-prone manual console clicking with reproducible, version-controlled Terraform and ArgoCD declarative infrastructure pipelines.",
      deliverable: "Versioned Infrastructure-as-Code",
      points: [
        "Modular, dry Terraform configurations with state locking",
        "ArgoCD declarative GitOps continuous reconciliation",
        "Automated drift detection alerts before breaking changes"
      ]
    },
    {
      icon: Zap,
      title: "Zero-Downtime Blue-Green & Canary Deploys",
      desc: "Deploy updates 20 times a day with zero fear. We engineer blue-green and progressive canary routing with automated rollbacks on error spikes.",
      deliverable: "Zero User Impact & Instant 1-Click Rollback",
      points: [
        "Argo Rollouts & Flagger automated canary progressive traffic",
        "Prometheus latency health gates with automated fallback",
        "Zero-downtime database schema migration pipelines"
      ]
    },
    {
      icon: DollarSign,
      title: "FinOps Cloud Cost Optimization (-40%)",
      desc: "Stop wasting money on idle oversized servers. We audit your AWS/Azure billing, implement spot instances, rightsizing, and savings plans.",
      deliverable: "Guaranteed 30–50% Monthly Cloud Bill Reduction",
      points: [
        "Spot instance orchestration with graceful termination drain",
        "Automated non-production dev/staging environment sleep",
        "Storage tiering from S3 Standard to Glacier Deep Archive"
      ]
    },
    {
      icon: Activity,
      title: "Full-Stack Observability & 24/7 SRE",
      desc: "Gain instant visibility into every microsecond of system latency. We deploy Datadog, Prometheus, Grafana, and OpenTelemetry distributed tracing.",
      deliverable: "Sub-3-Minute Mean Time to Recovery (MTTR)",
      points: [
        "Unified metrics, logs, and distributed traces in single pane",
        "Predictive anomaly detection and smart PagerDuty alerts",
        "Automated self-healing Kubernetes pod restarts"
      ]
    },
    {
      icon: Lock,
      title: "SOC2, ISO 27001 & Multi-Region DR",
      desc: "Fortify your cloud against catastrophic outages and regulatory penalties with automated cross-region replication, IAM least privilege, and Vault secrets.",
      deliverable: "Auditable Security Controls & Recovery Planning",
      points: [
        "AWS KMS & HashiCorp Vault hardware-backed secret rotation",
        "Automated cross-region database snapshot replication",
        "CIS Benchmark compliance auditing with automated remediation"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Infrastructure Management & Reproducibility",
      legacy: {
        score: "Manual Console ClickOps",
        status: "High Human Error Risk",
        desc: "Engineers configure servers by hand in the cloud dashboard, leaving zero audit trail, undocumented changes, and unrepeatable staging environments."
      },
      hiverift: {
        score: "Terraform GitOps",
        status: "Version Controlled & Tested",
        desc: "Every VPC, firewall rule, and Kubernetes cluster is defined in declarative code. Spin up an identical production clone in under 12 minutes."
      }
    },
    {
      title: "Deployment Downtime & Release Anxiety",
      legacy: {
        score: "15 - 45 Mins Downtime",
        status: "Late-Night Maintenance",
        desc: "Releases require maintenance windows, disconnecting active users and triggering panic when unexpected database migration bugs arise."
      },
      hiverift: {
        score: "0 Seconds Downtime",
        status: "Canary & Blue-Green Standard",
        desc: "New versions spin up alongside live containers, health probes verify readiness, and traffic shifts with rollback protection."
      }
    },
    {
      title: "Monthly Cloud Spend Efficiency",
      legacy: {
        score: "40% - 60% Waste",
        status: "Unused Idle Resources",
        desc: "Over-provisioned instances, unattached EBS volumes, and continuous 24/7 dev environments inflate your monthly AWS/Azure invoice."
      },
      hiverift: {
        score: "FinOps Optimized",
        status: "Cloud Cost Optimization",
        desc: "Dynamic auto-scaling, Spot instance fleets with automated drainage, and reserved instance architectures slash infrastructure waste."
      }
    },
    {
      title: "Disaster Recovery & Outage Survival",
      legacy: {
        score: "Hours to Days Recovery",
        status: "Single-AZ Vulnerability",
        desc: "A single AWS data center power cut knocks out customer systems, with no tested backup restore strategy or multi-region failover."
      },
      hiverift: {
        score: "< 15 Min RTO / RPO",
        status: "Multi-Region Redundancy",
        desc: "Active-standby cross-region replication with Route 53 health failover ensures continuous enterprise uptime even during full cloud outages."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Cloud Infrastructure & FinOps Audit",
      timeline: "Days 1–5",
      desc: "Full architectural analysis of your current cloud posture, security vulnerabilities, network bottlenecks, and monthly billing waste.",
      tools: ["AWS Well-Architected", "Infracost", "Prowler", "Trivy"],
      deliverables: ["Cloud Security Audit", "FinOps Savings Blueprint", "Target Infrastructure Architecture"]
    },
    {
      step: "02",
      title: "Terraform IaC & VPC Foundation",
      timeline: "Weeks 2–3",
      desc: "Writing modular, production-grade Terraform code for multi-AZ VPCs, NAT gateways, security groups, and KMS encryption keys.",
      tools: ["Terraform", "Terragrunt", "AWS / Azure", "GitHub Actions"],
      deliverables: ["Versioned IaC Repository", "Multi-AZ Network Foundation", "KMS Secret Infrastructure"]
    },
    {
      step: "03",
      title: "Kubernetes Cluster & GitOps Setup",
      timeline: "Weeks 4–6",
      desc: "Provisioning high-availability EKS/GKE clusters, Karpenter auto-scalers, ingress controllers, and ArgoCD declarative GitOps pipelines.",
      tools: ["Kubernetes", "Helm", "ArgoCD", "Karpenter"],
      deliverables: ["Production K8s Cluster", "Automated GitOps Sync", "Auto-Scaling Pod Policies"]
    },
    {
      step: "04",
      title: "CI/CD & Blue-Green Deployments",
      timeline: "Weeks 7–8",
      desc: "Engineering automated multi-stage pipelines that build Docker images, run security vulnerability scans, and execute canary rollouts.",
      tools: ["Argo Rollouts", "Docker", "Trivy", "GitHub Actions"],
      deliverables: ["Zero-Downtime Deployment Pipeline", "Canary Traffic Shifting", "Automated Rollback Rules"]
    },
    {
      step: "05",
      title: "Observability & Chaos Engineering",
      timeline: "Week 9",
      desc: "Configuring Datadog/Prometheus dashboards, PagerDuty alerting tiers, and running chaos engineering simulations (killing nodes) to verify self-healing.",
      tools: ["Datadog", "Prometheus", "Grafana", "Chaos Mesh"],
      deliverables: ["Single-Pane Observability Dashboard", "On-Call PagerDuty Hierarchy", "Chaos Resilience Report"]
    },
    {
      step: "06",
      title: "Production Cutover & SRE Handover",
      timeline: "Week 10+",
      desc: "DNS cutover, final database replica switchover with zero data loss, complete runbook documentation, and 24/7 SRE coverage.",
      tools: ["Route 53", "Cloudflare", "Runbooks", "PagerDuty"],
      deliverables: ["Live Production Cutover", "Comprehensive SRE Runbooks", "24/7 Incident SLA"]
    }
  ];

  const terminalLogs = [
    { text: "terraform apply -auto-approve -var-file=production.tfvars", type: "cmd" as const, tag: "terraform" },
    { text: "Acquiring state lock in DynamoDB table 'terraform-locks'... LOCKED", type: "info" as const },
    { text: "Creating AWS EKS Node Group 'spot-workers' with Karpenter autoscaler...", type: "cyan" as const },
    { text: "Infrastructure changes applied and cost impact reviewed.", type: "success" as const },
    { text: "argocd app sync production-api-gateway --prune", type: "cmd" as const, tag: "argocd" },
    { text: "Git commit 9b88e14 reconciled. Health status: Healthy. Sync status: Synced.", type: "success" as const },
    { text: "Prometheus health probes report healthy service responses.", type: "info" as const },
    { text: "Blue-Green deployment promoted to production traffic without interruption.", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Infrastructure", val: "Terraform IaC", status: "GitOps Managed" },
    { label: "Availability", val: "Multi-Region", status: "Monitoring & Recovery" },
    { label: "Deployment", val: "Automated Releases", status: "Blue-Green Strategy" },
    { label: "Cloud Costs", val: "Cost Visibility", status: "FinOps Review" }
  ];

  const estimatorTiers = [
    {
      id: "k8s-migration",
      label: "Kubernetes Migration & GitOps",
      desc: "Migrate legacy VMs or monolithic apps into containerized, auto-scaling Kubernetes with ArgoCD.",
      multiplier: 1.0
    },
    {
      id: "multi-cloud-dr",
      label: "Multi-Region Enterprise High-Availability",
      desc: "Active-standby failover architecture across multiple cloud regions with automated DNS recovery.",
      multiplier: 1.45
    },
    {
      id: "finops-cost-cut",
      label: "Cloud Cost Optimization & FinOps",
      desc: "Review AWS/Azure usage and recommend spot fleets, rightsizing, and resource controls.",
      multiplier: 0.8
    },
    {
      id: "soc2-hardening",
      label: "SOC2 / ISO 27001 Cloud Hardening",
      desc: "Complete infrastructure compliance audit, IAM least privilege, secret vaults, and audit logs.",
      multiplier: 1.3
    }
  ];

  const estimatorScales = [
    { id: "starter", label: "Startup Cloud (1–3 Clusters)", weeksAdd: 0 },
    { id: "growth", label: "Scaling Platform (4–8 Clusters)", weeksAdd: 2 },
    { id: "enterprise", label: "Enterprise Global Mesh", weeksAdd: 5 }
  ];

  const estimatorAddons = [
    { id: "datadog", label: "Datadog / OpenTelemetry Tracing", weeksAdd: 0.5 },
    { id: "vault", label: "HashiCorp Vault Secrets", weeksAdd: 1 },
    { id: "karpenter", label: "Karpenter Instant Pod Autoscaler", weeksAdd: 0.5 },
    { id: "dr-test", label: "Automated Chaos & DR Test Suite", weeksAdd: 1 }
  ];

  const faqs = [
    {
      question: "How do you design for high availability and safe deployments?",
      answer: "We use blue-green and progressive canary deployments with Argo Rollouts. New code versions run alongside existing services, with automated health checks and rollback policies before traffic is shifted."
    },
    {
      question: "How much money can we realistically save on our monthly AWS or Azure bill?",
      answer: "We review cloud usage, identify over-provisioned resources and unattached storage, then recommend right-sizing, scheduling, and storage-tier changes for your environment."
    },
    {
      question: "What happens if a major AWS data center region goes completely offline?",
      answer: "We engineer active-standby or active-active multi-region architectures. Database snapshots and read-replicas continuously synchronize across geographical regions (e.g. us-east-1 and eu-west-1). Route 53 latency health checks automatically failover DNS traffic in under 60 seconds if the primary region stops responding."
    },
    {
      question: "Who owns the Terraform scripts and cloud accounts?",
      answer: "You own 100% of the Terraform repositories, Helm charts, Dockerfiles, and CI/CD pipelines. All infrastructure is deployed directly into your own AWS, Azure, or GCP accounts with zero third-party software dependencies or lock-in."
    },
    {
      question: "Do you provide ongoing 24/7 Site Reliability Engineering (SRE) support?",
      answer: "Yes. In addition to initial migration and architecture setup, we provide ongoing 24/7 SRE monitoring, automated incident response SLAs (under 15 minutes), continuous security patching, and proactive monthly cost optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="cloud" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Enterprise Cloud & DevOps Engineering
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Cloud & DevOps Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              High Availability & Resilient Deployments
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We architect resilient Kubernetes clusters, automated GitOps Terraform pipelines, and multi-region disaster recovery systems, with cost visibility built into delivery.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Build Your Cloud Infrastructure</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Cloud size={18} className="text-emerald-600" />
              <span>Request FinOps & Cloud Audit</span>
            </button>
          </div>

          {/* Live Cloud Showcase */}
          <div className="mt-14 lg:mt-20">
            <CloudHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Spectrum DevOps & Cloud Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Enterprise Cloud Without{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Outages, Waste, or Chaos
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every server, network policy, and container is defined in version-controlled code with automated health probes and self-healing resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudFeatures.map((feat, idx) => (
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
                    <span>Consult Cloud Architect</span>
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
        badgeText="Cloud Architecture Benchmark"
        heading="Why Manual AWS ClickOps Fails vs."
        highlightHeading="HiveRift Terraform & GitOps Standard"
        subheading="Compare fragile, unrepeatable manual server configurations with HiveRift's immutable, self-healing, and cost-optimized infrastructure."
        legacyLabel="Manual Console ClickOps"
        hiveriftLabel="HiveRift Terraform & GitOps"
        comparisons={comparisons}
        summaryBadges={[
          "High Availability Architecture",
          "Automated Deployment Planning",
          "Cloud Cost Visibility"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="DevOps Engineering Lifecycle"
        heading="From Cloud Cost Audit to"
        highlightHeading="Multi-Region Automated Cutover"
        subheading="Our structured 6-phase DevOps roadmap ensures zero surprise outages, complete Terraform code documentation, and verified failover protocols."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Cloud Stream"
        heading="Real-Time Terraform &"
        highlightHeading="ArgoCD GitOps Sync Logs"
        subheading="Watch our automated pipeline apply immutable Terraform state updates, sync Kubernetes manifests via ArgoCD, and route production traffic with zero downtime."
        terminalTitle="hiverift-cloud-engine ~ aws-eks-us-east-1"
        branchInfo="main: terraform-apply"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="Cloud Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Enterprise Cloud Infrastructure"
        subheading="Select your cloud migration scope, cluster scale, and security standards to project timelines and ROI estimates."
        tierLabel="Cloud Architecture Scope"
        tierOptions={estimatorTiers}
        scaleLabel="Cluster & Microservice Scale"
        scaleOptions={estimatorScales}
        addonsLabel="Enterprise Security & Observability Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={4}
        basePriceUsd={3000}
        recommendedStack={["Kubernetes (EKS/GKE)", "Terraform", "ArgoCD", "Docker", "Datadog / Prometheus", "AWS / Azure"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Cloud & DevOps"
        projectTypes={[
          "Kubernetes Migration & GitOps",
          "Multi-Region Enterprise High-Availability",
          "FinOps Cloud Cost Optimization (-40%)",
          "SOC2 / ISO 27001 Cloud Hardening",
          "CI/CD Blue-Green Deployment Engine",
          "24/7 SRE & Observability Modernization"
        ]}
        defaultProjectType="Kubernetes Migration & GitOps"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Cloud & DevOps FAQs"
        heading="Frequently Answered Technical"
        highlightHeading="Questions on Cloud & DevOps"
        subheading="Actionable advice on reducing AWS bills, eliminating deployment downtime, and architecting multi-region disaster recovery."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Crosshair,
  Database,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Eye,
  FileText,
  HeartPulse,
  Brain,
  Layers,
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
import { DataAnnotationHeroShowcase } from "./components/DataAnnotationHeroShowcase";

export default function DataContent() {
  const annotationFeatures = [
    {
      icon: Crosshair,
      title: "Computer Vision & Polygon Segmentation",
      desc: "Pixel-accurate 2D/3D bounding boxes, polygon segmentation, keypoint tracking, and lane identification for autonomous systems and robotics.",
      deliverable: "99.8% Consensus Precision & IoU > 0.94",
      points: [
        "Sub-pixel polygon segmentation and polyline edge detection",
        "Video object tracking with persistent unique ID retention",
        "Compatible with COCO, YOLOv8/v10, Pascal VOC, and TFRecord"
      ]
    },
    {
      icon: Eye,
      title: "3D Point Cloud & LiDAR Sensor Fusion",
      desc: "Annotate complex spatial 3D LiDAR point clouds and camera fusion sequences with multi-sensor spatial calibration and cuboid tracking.",
      deliverable: "Accurate 3D Spatial Vector & Depth Bounding",
      points: [
        "3D bounding cuboid labeling with orientation vectors",
        "LiDAR-to-Camera sensor fusion spatial projection alignment",
        "Point cloud semantic segmentation for autonomous navigation"
      ]
    },
    {
      icon: Brain,
      title: "LLM Fine-Tuning, SFT & RLHF Alignment",
      desc: "Curate high-quality instruction datasets, multi-turn dialogue pairs, ranking preferences for DPO/RLHF, and adversarial safety red-teaming.",
      deliverable: "Grounded Domain Data for LLM Alignment",
      points: [
        "Supervised Fine-Tuning (SFT) prompt-response synthesis",
        "Human-in-the-loop Reinforcement Learning (RLHF) ranking",
        "Adversarial jailbreak testing and hallucination tagging"
      ]
    },
    {
      icon: HeartPulse,
      title: "Medical Imaging & Diagnostic Labeling",
      desc: "HIPAA-compliant annotation of DICOM, CT, X-ray, and histology scans performed exclusively by certified medical professionals and radiologists.",
      deliverable: "Board-Certified Medical Review & Anonymized DICOM",
      points: [
        "Radiologist-verified lesion, tumor, and fracture segmentation",
        "De-identification pipelines stripping protected health info (PHI)",
        "Zero data transmission outside dedicated HIPAA environments"
      ]
    },
    {
      icon: FileText,
      title: "Financial & Legal OCR Document Extraction",
      desc: "Convert dense unstructured contracts, invoices, and bank statements into structured, audited JSON tables with named entity recognition (NER).",
      deliverable: "100% Validated Structured Document Key-Values",
      points: [
        "Multi-lingual table structure and key-value pair parsing",
        "Named Entity Recognition (NER) for PII and legal clauses",
        "Double-blind verification for 100% financial accuracy"
      ]
    },
    {
      icon: Lock,
      title: "Air-Gapped & SOC2 Type 2 Security",
      desc: "Protect sensitive corporate datasets with biometric security controls, zero-download web sandboxes, NDA compliance, and air-gapped VPCs.",
      deliverable: "Zero Data Leakage & 100% NDA Protection",
      points: [
        "Role-Based Access Control (RBAC) with disabled clipboard downloads",
        "Private VPC deployment on your AWS or Azure infrastructure",
        "Strict SOC2 Type 2, ISO 27001, and GDPR compliance"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Annotation Quality & Consensus Methodology",
      legacy: {
        score: "80% - 88% Accuracy",
        status: "Cheap Anonymous Crowds",
        desc: "Untrained gig workers produce noisy labels, missing edge cases, and corrupting model weights with false data."
      },
      hiverift: {
        score: "99.8% Quality Pass",
        status: "Double-Blind Consensus",
        desc: "Trained domain specialists with multi-annotator agreement metrics, automated IoU thresholds, and senior QA sign-off."
      }
    },
    {
      title: "Data Security & Confidentiality",
      legacy: {
        score: "High Risk of Data Leak",
        status: "Public Consumer Workers",
        desc: "Unvetted remote workers download proprietary training datasets directly onto unencrypted personal laptops."
      },
      hiverift: {
        score: "100% Air-Gapped",
        status: "SOC2 & HIPAA Compliant",
        desc: "Annotators work inside sandboxed environments with copy/download restrictions, full session auditing, and strict NDAs."
      }
    },
    {
      title: "Turnaround Speed & Delivery Predictability",
      legacy: {
        score: "Unpredictable Delays",
        status: "High Worker Churn",
        desc: "Inconsistent throughput leaves your ML team waiting weeks for datasets, stalling training sprints and model launches."
      },
      hiverift: {
        score: "Guaranteed SLA",
        status: "Dedicated Managed Pods",
        desc: "Dedicated annotation teams with pre-allocated bandwidth delivering tens of thousands of audited labels daily."
      }
    },
    {
      title: "Edge Case Handling & Complex Ontologies",
      legacy: {
        score: "Ignored or Misclassified",
        status: "Rigid Generic Tooling",
        desc: "Complex medical, legal, or 3D LiDAR taxonomies get mislabeled due to poor communication and zero domain oversight."
      },
      hiverift: {
        score: "Domain-Expert Led",
        status: "Living Custom Ontologies",
        desc: "Direct communication with lead data architects to refine labeling edge-case guidelines and maintain evolving taxonomy docs."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Ontology Definition & Pilot Benchmark",
      timeline: "Days 1–3",
      desc: "Defining strict annotation guidelines, taxonomy classes, edge-case protocols, and running a 500-sample gold-standard pilot.",
      tools: ["Labelbox / CVAT", "Taxonomy Specs", "Annotation Guidelines"],
      deliverables: ["Comprehensive Labeling Guide", "Gold Standard Benchmark", "Consensus Metric Thresholds"]
    },
    {
      step: "02",
      title: "Air-Gapped Workspace Provisioning",
      timeline: "Days 4–5",
      desc: "Setting up secure, role-restricted annotation environments within your private cloud or our SOC2/HIPAA compliant infrastructure.",
      tools: ["AWS S3 / Azure", "RBAC Sandboxes", "Watermarking"],
      deliverables: ["Secure Data Ingestion Pipeline", "Annotator Access Control", "Zero-Download Sandboxes"]
    },
    {
      step: "03",
      title: "Double-Blind Multi-Annotator Labeling",
      timeline: "Weeks 2–4",
      desc: "Dedicated annotation pods label datasets in double-blind configurations, ensuring unbiased labeling across all classes.",
      tools: ["2D/3D Polygon Tools", "LiDAR Cuboid Editors", "NER Tooling"],
      deliverables: ["Initial Labeled Batches", "Daily Throughput Telemetry", "Real-Time Inter-Annotator Logs"]
    },
    {
      step: "04",
      title: "Automated Consensus & IoU Validation",
      timeline: "Continuous",
      desc: "Algorithms compute Inter-Annotator Agreement (IAA) and Intersection-over-Union (IoU). Discrepancies automatically flag for senior review.",
      tools: ["Python Validation Scripts", "Cohen's Kappa", "IoU Checkers"],
      deliverables: ["Automated Consensus Matrix", "Discrepancy Resolution Logs", "IoU Precision Sign-offs"]
    },
    {
      step: "05",
      title: "Expert QA & Edge-Case Sign-Off",
      timeline: "Continuous",
      desc: "Senior domain specialists and radiologists review flagged samples, edge cases, and perform statistical spot checks.",
      tools: ["Statistical QA Sampling", "Expert Review Dashboards"],
      deliverables: ["100% Quality Acceptance Report", "Edge Case Taxonomy Updates", "Model Readiness Verification"]
    },
    {
      step: "06",
      title: "Standardized Dataset Packaging & Delivery",
      timeline: "Weekly / Final",
      desc: "Exporting clean, validated datasets in COCO, YOLO, VOC, or custom JSON formats directly into your ML training buckets.",
      tools: ["COCO", "YOLOv8", "TFRecord", "Hugging Face"],
      deliverables: ["Validated ML Training Datasets", "Dataset Nutrition Metric Cards", "100% Data Transfer"]
    }
  ];

  const terminalLogs = [
    { text: "python validate_coco_dataset.py --input /data/batch_09 --iou_threshold 0.92", type: "cmd" as const, tag: "coco-qa" },
    { text: "Scanning 18,400 labeled images with 92,410 bounding boxes & polygons...", type: "info" as const },
    { text: "Inter-Annotator Agreement (Cohen's Kappa): 0.984 [Consensus: 99.8%]", type: "success" as const },
    { text: "IoU distribution: Mean = 0.952 | Median = 0.961 | Outliers flagged: 8", type: "cyan" as const },
    { text: "Auto-routing 8 outlier annotations to Senior Radiologist QA queue...", type: "info" as const },
    { text: "PHI sanitization scan: 0 instances of unmasked patient info detected (HIPAA Safe)", type: "success" as const },
    { text: "aws s3 sync ./export_coco_v4 s3://enterprise-ai-training-bucket/datasets/ --sse-kms", type: "cmd" as const, tag: "s3" },
    { text: "Batch 09 verified & encrypted upload complete (18,400 items / 42.1GB)", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Consensus QA", val: "99.8% Agreement", status: "Double-Blind" },
    { label: "IoU Precision", val: "0.94+ Strict", status: "Sub-Pixel" },
    { label: "Security", val: "HIPAA & SOC2", status: "Air-Gapped" },
    { label: "Turnaround", val: "24h Batch SLA", status: "High Volume" }
  ];

  const estimatorTiers = [
    {
      id: "computer-vision",
      label: "Computer Vision (Bounding Box & Polygon)",
      desc: "Pixel-accurate 2D bounding boxes and multi-point polygon segmentation.",
      multiplier: 1.0
    },
    {
      id: "lidar-3d",
      label: "3D LiDAR Point Cloud & Sensor Fusion",
      desc: "3D cuboid labeling with orientation vectors and multi-sensor projection.",
      multiplier: 1.5
    },
    {
      id: "rlhf-llm",
      label: "LLM RLHF & SFT Training Data",
      desc: "Expert-curated prompt-response pairs, ranking preferences, and red-teaming.",
      multiplier: 1.25
    },
    {
      id: "medical-imaging",
      label: "Certified Medical & Radiology Labeling",
      desc: "HIPAA-compliant DICOM annotation by certified medical radiologists.",
      multiplier: 1.6
    }
  ];

  const estimatorScales = [
    { id: "starter", label: "Pilot Batch (1k–5k Items)", weeksAdd: 0 },
    { id: "scale", label: "Scaling Dataset (10k–50k Items)", weeksAdd: 2 },
    { id: "enterprise", label: "Enterprise Scale (100k+ Items)", weeksAdd: 4 }
  ];

  const estimatorAddons = [
    { id: "double-blind", label: "Double-Blind 3-Annotator Pass", weeksAdd: 0.5 },
    { id: "hipaa", label: "HIPAA PHI Anonymization Pipeline", weeksAdd: 0.5 },
    { id: "coco", label: "Custom Multi-Format Packaging", weeksAdd: 0.5 },
    { id: "expedited", label: "24-Hour Expedited Delivery SLA", weeksAdd: 1 }
  ];

  const faqs = [
    {
      question: "How do you guarantee 99.8% annotation accuracy?",
      answer: "We use a multi-tiered consensus methodology: multiple trained specialists annotate each sample independently (double-blind). Our algorithms calculate Inter-Annotator Agreement (IAA) and Intersection-over-Union (IoU). Any discrepancies above strict thresholds are automatically escalated to lead domain experts for resolution."
    },
    {
      question: "How do you protect sensitive, confidential, or patient data?",
      answer: "We enforce strict security controls: data is housed in SOC2 Type 2 and HIPAA-compliant private cloud environments. Annotators work in air-gapped web sandboxes with clipboard copy, screenshot, and download features disabled. All team members sign comprehensive non-disclosure agreements (NDAs)."
    },
    {
      question: "What formats can you deliver the annotated datasets in?",
      answer: "We support all major industry formats: COCO JSON, YOLO (TXT), Pascal VOC (XML), TFRecord, Cityscapes, NuScenes, Kitti, and bespoke JSON schemas tailored to your model pipeline."
    },
    {
      question: "Who owns the labeled data?",
      answer: "You retain 100% intellectual property ownership of both your raw data and all generated annotations. We do not use your proprietary datasets to train internal models."
    },
    {
      question: "Can we start with a small pilot to test annotation quality before scaling?",
      answer: "Yes! We encourage a 500 to 1,000 item pilot benchmark. We'll calibrate annotation guidelines with your ML team, run consensus testing, and verify that the data meets your exact accuracy criteria before scaling up."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="data-annotation" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              High-Precision AI Training Data & Annotation
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            AI Training Data Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-600">
              99.8% Precision & Consensus
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We deliver pixel-accurate computer vision, 3D LiDAR, medical radiology, and RLHF training datasets in air-gapped, HIPAA & SOC2-compliant environments with guaranteed multi-annotator consensus.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Request Annotation Pilot</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Crosshair size={18} className="text-emerald-600" />
              <span>Review Sample Dataset</span>
            </button>
          </div>

          {/* Live Data Annotation Showcase */}
          <div className="mt-14 lg:mt-20">
            <DataAnnotationHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Spectrum Data Annotation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              High-Quality Data That Powers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                World-Class AI Models
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every annotation passes double-blind verification, automated IoU precision calculations, and rigorous domain expert QA sign-offs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {annotationFeatures.map((feat, idx) => (
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
                    <span>Consult Data Architect</span>
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
        badgeText="Data Quality Benchmark"
        heading="Why Cheap Crowdsourced Labels Fail vs."
        highlightHeading="HiveRift Verified Consensus Standard"
        subheading="Compare noisy, unvetted crowd workers with HiveRift's double-blind, domain-specialist annotation pods."
        legacyLabel="Cheap Anonymous Crowdsourcing"
        hiveriftLabel="HiveRift Verified Consensus Pods"
        comparisons={comparisons}
        summaryBadges={[
          "99.8% Multi-Annotator Consensus",
          "IoU > 0.94 Precision",
          "100% HIPAA & SOC2 Compliant"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Data Annotation Lifecycle"
        heading="From Pilot Calibration to"
        highlightHeading="Full-Scale Model-Ready Export"
        subheading="Our disciplined 6-phase annotation workflow guarantees clear guidelines, ongoing consensus checks, and seamless ML bucket delivery."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Validation Stream"
        heading="Real-Time Consensus &"
        highlightHeading="IoU Quality Auditing Logs"
        subheading="Watch our automated QA script compute inter-annotator agreement metrics, enforce IoU precision thresholds, and sanitize datasets for ML training."
        terminalTitle="hiverift-data-engine ~ coco-validator"
        branchInfo="main: qa-pipeline"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="Annotation Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="AI Training Dataset"
        subheading="Select your data modality, item volume, and quality standards to estimate delivery timelines and project scope."
        tierLabel="Annotation Modality"
        tierOptions={estimatorTiers}
        scaleLabel="Dataset Item Volume"
        scaleOptions={estimatorScales}
        addonsLabel="Quality Assurance & Compliance Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={2}
        basePriceUsd={1800}
        recommendedStack={["COCO JSON", "YOLOv10", "TFRecord", "CVAT / Labelbox", "DICOM", "AWS S3 KMS"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Data Annotation"
        projectTypes={[
          "Computer Vision (Bounding Box & Polygon)",
          "3D LiDAR Point Cloud & Sensor Fusion",
          "LLM RLHF & SFT Training Data",
          "Medical Radiology & DICOM Segmentation",
          "Financial & Legal Document OCR",
          "Audio Speech-to-Text & Sentiment Tagging"
        ]}
        defaultProjectType="Computer Vision (Bounding Box & Polygon)"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Data Annotation FAQs"
        heading="Frequently Answered Questions"
        highlightHeading="on AI Training Data & Annotation"
        subheading="Clear technical answers on accuracy guarantees, data security, DICOM compliance, and custom ontology setup."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

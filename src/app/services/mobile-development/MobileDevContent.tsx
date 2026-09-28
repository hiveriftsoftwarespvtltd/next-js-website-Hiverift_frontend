"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Smartphone,
  Tablet,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ArrowRight,
  WifiOff,
  Bell,
  Fingerprint,
  RefreshCw,
  Rocket
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { ServiceTechCanvas } from "../components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "../components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "../components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "../components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "../components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "../components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "../components/shared/ServiceFaqAccordion";
import { MobileHeroShowcase } from "./components/MobileHeroShowcase";

export default function MobileDevContent() {
  const mobileFeatures = [
    {
      icon: Smartphone,
      title: "Cross-Platform Flutter & React Native",
      desc: "Single codebase, dual native performance. We engineer fluid, 60fps applications for iOS and Android with custom Dart widgets and native platform channels.",
      deliverable: "60 FPS 100% Native Feel on iOS & Android",
      points: [
        "Shared codebase reduces total lifecycle cost by 45%",
        "Hermes V8 engine optimization for sub-second launch",
        "Over-The-Air (OTA) critical updates without store review"
      ]
    },
    {
      icon: Cpu,
      title: "Native iOS (Swift) & Android (Kotlin)",
      desc: "For apps requiring maximum hardware optimization, Bluetooth low energy (BLE), CoreML, or deep OS integration, our native engineers build uncompromising apps.",
      deliverable: "Direct Hardware Telemetry & Sensor Access",
      points: [
        "Swift & SwiftUI for seamless Apple ecosystem integration",
        "Kotlin & Jetpack Compose for modern, battery-efficient Android",
        "Deep background task scheduling and geofencing APIs"
      ]
    },
    {
      icon: WifiOff,
      title: "Offline-First Mobile Architecture",
      desc: "Never let weak connections disrupt user workflows. We implement local SQLite/Hive encrypted storage with conflict-free background cloud synchronization.",
      deliverable: "100% Offline Availability & Zero User Lag",
      points: [
        "Encrypted SQLite / WatermelonDB local databases",
        "Optimistic UI updates for instant perceived feedback",
        "Automated background retry queues on reconnection"
      ]
    },
    {
      icon: Bell,
      title: "Push Notifications & User Retention",
      desc: "Keep users engaged with automated, segmented push notifications, in-app messaging, dynamic deep linking, and real-time behavioral analytics.",
      deliverable: "+38% Day-30 Retention & Engagement",
      points: [
        "Firebase Cloud Messaging (FCM) & OneSignal orchestration",
        "Universal & app links with deferred deep linking",
        "Automated re-engagement drip triggers & segmentation"
      ]
    },
    {
      icon: Fingerprint,
      title: "Biometric Security & FinTech Compliance",
      desc: "Protect sensitive transactions with Face ID, Touch ID, biometric hardware keystores, and end-to-end tokenized API communication.",
      deliverable: "Bank-Grade Encryption & Biometric Auth",
      points: [
        "Secure Enclave & Android Keystore hardware protection",
        "PCI-DSS Level 1 & HIPAA compliant data handling",
        "Automated jailbreak & root detection safeguards"
      ]
    },
    {
      icon: Rocket,
      title: "App Store Submission & Launch SLA",
      desc: "We handle the entire submission lifecycle for Apple App Store and Google Play Store, guaranteeing 100% adherence to review guidelines and privacy laws.",
      deliverable: "1st-Time Approval Guarantee & Fastlane CI/CD",
      points: [
        "Apple App Store Review guideline compliance auditing",
        "Google Play 14-day internal testing QA coordination",
        "Automated Fastlane deployment pipeline with TestFlight"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Rendering Performance & Frame Rate",
      legacy: {
        score: "24 - 40 FPS",
        status: "Janky WebView Wrapper",
        desc: "Hybrid webview wrappers stutter during list scrolls and complex animations, draining battery and feeling cheap."
      },
      hiverift: {
        score: "60 - 120 FPS",
        status: "Hardware Accelerated Canvas",
        desc: "Compiled directly to native ARM machine code with GPU acceleration for butter-smooth touch gesture responsiveness."
      }
    },
    {
      title: "Cold Launch Speed",
      legacy: {
        score: "3.2s - 5.5s",
        status: "Slow Runtime Init",
        desc: "Large bundle sizes and unoptimized bridge initialization cause long white-screen delay during cold launch."
      },
      hiverift: {
        score: "< 0.4s Instant",
        status: "Pre-Warmed Native Init",
        desc: "Bytecode pre-compilation (AOT) and optimized memory footprint allow immediate splash-to-screen interactivity."
      }
    },
    {
      title: "Offline Reliability",
      legacy: {
        score: "Errors & Blank Screens",
        status: "Network Dependent",
        desc: "Crashes or displays perpetual spinners whenever the user enters an elevator, subway, or weak cellular area."
      },
      hiverift: {
        score: "Full Offline CRUD",
        status: "Encrypted SQLite Engine",
        desc: "Transactions record instantly to encrypted local databases and silently sync upstream as soon as network returns."
      }
    },
    {
      title: "App Store Review Risk",
      legacy: {
        score: "Frequent Rejections",
        status: "Non-Compliant Webviews",
        desc: "Apple Guideline 4.2 rejections for lacking native mobile utility and non-compliant privacy permission declarations."
      },
      hiverift: {
        score: "100% First-Pass Approval",
        status: "Rigorous Pre-Audit Pipeline",
        desc: "Full adherence to Apple Human Interface Guidelines and Google Material 3 with verified privacy nutrition labels."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Mobile UX & Gesture Architecture",
      timeline: "Days 1–5",
      desc: "Interactive Figma wireframes mapping out thumb zones, touch targets, multi-state micro-animations, and offline fallback scenarios.",
      tools: ["Figma", "User Journey Flow", "Thumb-Zone Heatmaps", "Whimsical"],
      deliverables: ["Clickable 60fps Prototype", "UI Design Tokens", "App Architecture Blueprint"]
    },
    {
      step: "02",
      title: "Core Foundation & Local DB",
      timeline: "Weeks 2–3",
      desc: "Setting up cross-platform Flutter/React Native workspace, secure local SQLite cache, and JWT biometric authentication flow.",
      tools: ["Flutter 3.24 / React Native", "Hive DB / WatermelonDB", "Fastlane"],
      deliverables: ["Working Biometric Login", "Offline SQLite Database", "Base Navigation Shell"]
    },
    {
      step: "03",
      title: "Feature Sprints & Weekly TestFlight",
      timeline: "Weeks 4–7",
      desc: "Agile sprints deploying weekly TestFlight and Google Play Internal builds so your team tests real features on physical devices.",
      tools: ["TestFlight", "Google Play Internal", "Sentry Mobile", "GitHub Actions"],
      deliverables: ["Weekly Physical Builds", "Feature Sprints Completion", "Crash Telemetry Stream"]
    },
    {
      step: "04",
      title: "Hardware Telemetry & Push FCM",
      timeline: "Weeks 8–9",
      desc: "Integration with native platform channels: Bluetooth, camera scanners, GPS geofencing, Apple Pay, and FCM notification triggers.",
      tools: ["Firebase FCM", "OneSignal", "Apple Pay / Google Pay", "Native Channels"],
      deliverables: ["Push Notification Automation", "Payment Gateway Integration", "Sensor Bridges"]
    },
    {
      step: "05",
      title: "Battery, Thermal & Security Audit",
      timeline: "Week 10",
      desc: "Rigorous profiling on low-end and flagship devices to eliminate memory leaks, excessive battery draw, and OWASP mobile vulnerabilities.",
      tools: ["Xcode Instruments", "Android Profiler", "OWASP MASVS", "Memory LeakCanary"],
      deliverables: ["Zero Memory Leaks Audit", "60 FPS Profile Report", "Security Verification"]
    },
    {
      step: "06",
      title: "App Store Publishing & SLA",
      timeline: "Week 11+",
      desc: "Complete metadata, screenshot localization, privacy declarations, and guaranteed approval on Apple App Store & Google Play.",
      tools: ["App Store Connect", "Google Play Console", "Fastlane Deliver"],
      deliverables: ["Live Production App", "100% IP & Source Code Transfer", "90-Day Post-Launch SLA"]
    }
  ];

  const terminalLogs = [
    { text: "fastlane match appstore --readonly", type: "cmd" as const, tag: "fastlane" },
    { text: "Decrypting provisioning profiles & distribution certificates... SUCCESS", type: "info" as const },
    { text: "flutter build ipa --release --obfuscate --split-debug-info=./symbols", type: "cmd" as const, tag: "flutter" },
    { text: "Compiling ARM64 ahead-of-time (AOT) machine code... [42.1s]", type: "cyan" as const },
    { text: "Optimizing asset catalogs & stripping unreferenced glyphs (-18.4MB)", type: "info" as const },
    { text: "Hermes V8 bytecode compilation verified with zero drop frames", type: "success" as const },
    { text: "Running automated UI integration tests on 8 device matrix (iPhone 16, Pixel 9)...", type: "cyan" as const },
    { text: "PASSED: 148 / 148 tests completed. Crash rate: 0.00%", type: "success" as const },
    { text: "Uploading IPA to Apple TestFlight with Fastlane Pilot...", type: "cmd" as const, tag: "deploy" },
    { text: "Build 2.4.1 (Build 89) published to TestFlight beta testers in 38s", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Engine", val: "Flutter & React Native", status: "AOT Machine Code" },
    { label: "Frame Rate", val: "60 - 120 FPS", status: "Hardware Sync" },
    { label: "Cold Start", val: "< 0.4s", status: "Instant Interactivity" },
    { label: "App Store", val: "100% Pass", status: "Review Guaranteed" }
  ];

  const estimatorTiers = [
    {
      id: "cross-platform",
      label: "Cross-Platform App (Flutter / React Native)",
      desc: "Single codebase for iOS & Android with 60fps performance and shared backend APIs.",
      multiplier: 1.0
    },
    {
      id: "native-mobile",
      label: "Bespoke Native iOS (Swift) & Android (Kotlin)",
      desc: "Maximum hardware acceleration, low-level sensors, Bluetooth LE, and CoreML.",
      multiplier: 1.45
    },
    {
      id: "mvp-launch",
      label: "Rapid Startup Mobile MVP (4–6 Weeks)",
      desc: "High-speed prototype designed for immediate investor demos and early user testing.",
      multiplier: 0.8
    },
    {
      id: "enterprise-fintech",
      label: "Enterprise FinTech & Offline Portal",
      desc: "Bank-grade biometric encryption, offline local cache, and rigorous compliance.",
      multiplier: 1.6
    }
  ];

  const estimatorScales = [
    { id: "core", label: "Core App (5–8 Screens)", weeksAdd: 0 },
    { id: "growth", label: "Growth App (10–18 Screens)", weeksAdd: 2 },
    { id: "enterprise", label: "Complex System (20+ Screens)", weeksAdd: 4 }
  ];

  const estimatorAddons = [
    { id: "biometrics", label: "Face ID / Keystore Auth", weeksAdd: 0.5 },
    { id: "offline", label: "Offline SQLite & Auto-Sync", weeksAdd: 1 },
    { id: "payments", label: "In-App Purchases / Apple Pay", weeksAdd: 1 },
    { id: "push", label: "Segmented FCM Push Drips", weeksAdd: 0.5 }
  ];

  const faqs = [
    {
      question: "Should we build cross-platform (Flutter / React Native) or Native (Swift / Kotlin)?",
      answer: "For 90% of business applications, modern cross-platform frameworks like Flutter and React Native provide identical 60fps performance while reducing development and maintenance costs by 40-50%. If your application relies heavily on low-level Bluetooth hardware streaming, real-time audio DSP, or complex ARKit experiences, we recommend native Swift and Kotlin."
    },
    {
      question: "How do you guarantee approval on the Apple App Store and Google Play?",
      answer: "We perform a comprehensive pre-submission audit adhering to Apple's Human Interface Guidelines, Section 4.2 Minimum Functionality rules, and Google's 14-day internal tester requirements. We generate all localized store assets, configure privacy nutrition labels, and handle any reviewer inquiries directly until the app is approved."
    },
    {
      question: "How does the app function without an active internet connection?",
      answer: "We architect an offline-first data layer using encrypted local SQLite databases (Hive / WatermelonDB). Users can browse content, edit profiles, and create transactions without network. These actions are queued and automatically synced upstream when internet connectivity resumes."
    },
    {
      question: "Who owns the mobile source code and App Store developer accounts?",
      answer: "You own 100% of the intellectual property, source code, and design assets from day one. We deploy builds directly to your Apple Developer and Google Play Console accounts, ensuring full independence and zero vendor lock-in."
    },
    {
      question: "Can you update features without waiting days for Apple App Store review?",
      answer: "Yes! Using React Native CodePush and dynamic configuration services, we can push bug fixes, UI updates, and copy changes Over-The-Air (OTA) directly to users' devices instantly, without going through the multi-day App Store review queue."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="mobile" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              High-Performance iOS & Android Engineering
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Mobile Apps Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              60 FPS Speed, Retention & Scale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We build native and cross-platform mobile apps for iOS and Android using Flutter, React Native, and Swift. Engineered for sub-second cold starts, offline resilience, and guaranteed App Store approval.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Build Your Mobile App</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Smartphone size={18} className="text-emerald-600" />
              <span>Request TestFlight Demo</span>
            </button>
          </div>

          {/* Live Mobile Showcase */}
          <div className="mt-14 lg:mt-20">
            <MobileHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Engineering Capabilities Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Cycle Mobile Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Engineered for User Retention &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Zero Performance Compromise
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every screen, transition, and database query is profiled on real devices to guarantee instant responsiveness and zero memory leaks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mobileFeatures.map((feat, idx) => (
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
                  <span className="text-xs font-mono font-bold text-slate-400">STAGE 0{idx + 1}</span>
                  <button
                    onClick={() => openEnquiryModal()}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Discuss Architecture</span>
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
        badgeText="Mobile Architecture Benchmark"
        heading="Why Clunky WebView Apps Fail vs."
        highlightHeading="HiveRift 60fps Native Engine"
        subheading="Compare standard outsourced mobile apps with HiveRift's hardware-accelerated, offline-first mobile engineering."
        legacyLabel="Generic Hybrid / WebView Apps"
        hiveriftLabel="HiveRift Native & Flutter Engine"
        comparisons={comparisons}
        summaryBadges={[
          "60-120 FPS Native Sync",
          "Zero Drop Frame Guarantee",
          "100% App Store Pass Rate"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Mobile Delivery Lifecycle"
        heading="From Interactive Prototype to"
        highlightHeading="App Store Deployment"
        subheading="Our structured 6-phase engineering roadmap ensures complete milestone transparency, weekly TestFlight builds, and zero surprises."
        steps={processSteps}
      />

      {/* Live Fastlane Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Fastlane Stream"
        heading="Real-Time Build &"
        highlightHeading="CI/CD Distribution Pipeline"
        subheading="Watch our automated build engine compile AOT machine code, run 140+ unit & integration tests, and push release IPAs to TestFlight in seconds."
        terminalTitle="hiverift-mobile-engine ~ ios-release"
        branchInfo="main: appstore-deploy"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope & Cost Estimator */}
      <ServiceScopeEstimator
        badgeText="Mobile Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="iOS & Android App"
        subheading="Select your architectural model, screen complexity, and hardware integrations to project delivery timelines and budget requirements."
        tierLabel="Mobile Architecture Framework"
        tierOptions={estimatorTiers}
        scaleLabel="Screen & User Flow Complexity"
        scaleOptions={estimatorScales}
        addonsLabel="Native Device Bridges & Integrations"
        addonOptions={estimatorAddons}
        baseWeeks={4}
        basePriceUsd={2500}
        recommendedStack={["Flutter 3.24", "Swift / SwiftUI", "React Native", "SQLite/Hive", "Fastlane", "Firebase FCM"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Mobile App Development"
        projectTypes={[
          "Cross-Platform App (Flutter)",
          "Cross-Platform App (React Native)",
          "Native iOS App (Swift / SwiftUI)",
          "Native Android App (Kotlin / Compose)",
          "Startup MVP (4-6 Weeks Fast Track)",
          "FinTech / Healthcare Mobile Portal"
        ]}
        defaultProjectType="Cross-Platform App (Flutter)"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Mobile Development FAQs"
        heading="Frequently Answered Technical"
        highlightHeading="Questions on Mobile Engineering"
        subheading="Direct answers to help you choose the right mobile stack, navigate store approvals, and optimize user retention."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

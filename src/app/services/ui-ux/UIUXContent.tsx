"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Palette,
  Eye,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MousePointer,
  Compass,
  Monitor,
  Heart
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { ServiceTechCanvas } from "../components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "../components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "../components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "../components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "../components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "../components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "../components/shared/ServiceFaqAccordion";
import { UIUXHeroShowcase } from "./components/UIUXHeroShowcase";

export default function UIUXContent() {
  const uiuxFeatures = [
    {
      icon: Palette,
      title: "Tokenized Figma Design Systems",
      desc: "Stop reinventing buttons and forms. We engineer scalable multi-brand design systems in Figma with auto-layout, variables, and code-aligned tokens.",
      deliverable: "100% Reusable Component Library & Style Dictionary",
      points: [
        "Figma variables for dynamic dark/light mode switching",
        "Strict 4px/8px spatial rhythm and typography scales",
        "Exportable Style Dictionary JSON tokens for React/Tailwind"
      ]
    },
    {
      icon: Eye,
      title: "Human-Centered UX & Usability Audits",
      desc: "We diagnose friction points using eye-tracking heatmaps, session replays, and cognitive psychology to eliminate cognitive overload and drop-offs.",
      deliverable: "+45% Higher Task Completion & Lower Bounce Rates",
      points: [
        "Fitts's Law touch target and thumb zone optimization",
        "Cognitive load reduction across complex form funnels",
        "Direct user testing with clickable interactive wireframes"
      ]
    },
    {
      icon: ShieldCheck,
      title: "WCAG 2.2 AAA Accessibility Compliance",
      desc: "Design products that everyone can use. We enforce accessible contrast ratios, screen-reader semantic structures, and keyboard navigation standards.",
      deliverable: "Zero ADA Lawsuit Risk & Inclusive Usability",
      points: [
        "Automated contrast ratio validation (minimum 4.5:1 / 7:1)",
        "Focus states, ARIA labels, and keyboard tab orders",
        "Colorblind-safe data visualization and alert indicators"
      ]
    },
    {
      icon: MousePointer,
      title: "60 FPS Micro-Interactions & Motion",
      desc: "Elevate your digital product into a delightful tactile experience with tasteful physics-based animations, skeleton loaders, and gesture ripples.",
      deliverable: "Fluid 60 FPS Delight & Clear State Transitions",
      points: [
        "Framer Motion / CSS transition tokens and timing curves",
        "Optimistic feedback states for instantaneous perception",
        "Micro-animations that guide eye direction to primary CTAs"
      ]
    },
    {
      icon: Compass,
      title: "Conversion-Focused Product Funnels",
      desc: "Transform casual visitors into loyal paying customers. We re-engineer onboarding flows, checkout steps, and pricing matrices for maximum CRO.",
      deliverable: "Proven 2.5x - 4x Lift in Signup & Checkout Conversions",
      points: [
        "Frictionless 1-click social authentication layouts",
        "Progressive disclosure for multi-step onboarding forms",
        "Strategic social proof badges and trust architecture"
      ]
    },
    {
      icon: Monitor,
      title: "Zero-Friction Engineering Handoff",
      desc: "No more messy Figma files that confuse your developers. We provide annotated specs, responsive breakpoint grids, and ready-to-use React code.",
      deliverable: "Zero Design Redos & Instant Frontend Implementation",
      points: [
        "Figma Dev Mode specs with pixel-perfect CSS values",
        "Pre-built Tailwind CSS config and JSX component primitives",
        "Comprehensive interaction state guides (hover, active, disabled)"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Design Philosophy & Business ROI",
      legacy: {
        score: "Dribbble Art Concept",
        status: "Unusable in Production",
        desc: "Looks pretty on social media, but fails basic accessibility, ignores real business data, and is impossible for developers to code."
      },
      hiverift: {
        score: "Conversion Engineered",
        status: "Validated by Data & UX",
        desc: "Grounded in behavioral psychology, tested against real user tasks, and engineered directly to drive commercial revenue and retention."
      }
    },
    {
      title: "Accessibility & WCAG Compliance",
      legacy: {
        score: "Fails WCAG Audits",
        status: "Low Contrast & Illegible",
        desc: "Tiny gray fonts on light gray backgrounds trigger ADA compliance lawsuits and alienate elderly and visually-impaired customers."
      },
      hiverift: {
        score: "WCAG 2.2 AAA Certified",
        status: "100% Inclusive Contrast",
        desc: "Rigorous 14:1 contrast ratios, explicit keyboard tab orders, and screen-reader accessibility baked into every component."
      }
    },
    {
      title: "Developer Handoff Efficiency",
      legacy: {
        score: "Weeks of Redos & Misalignment",
        status: "Unstructured Canvas",
        desc: "Messy Figma groups, missing hover states, and mismatched spacing tokens lead to buggy, inconsistent web and mobile code."
      },
      hiverift: {
        score: "Instant React/Tailwind Sync",
        status: "Figma Variables & Tokens",
        desc: "Design tokens match code variables 1-to-1. Auto-layout properties map directly to CSS flexbox and grid for zero rework."
      }
    },
    {
      title: "Scalability as Product Evolves",
      legacy: {
        score: "Fragmented UI Spaghetti",
        status: "No Component Source of Truth",
        desc: "Every new page introduces different button sizes and brand colors, diluting brand authority and confusing users."
      },
      hiverift: {
        score: "Living Multi-Brand System",
        status: "Single Central Source of Truth",
        desc: "Update a single master token in Figma or code, and the change cascades automatically across hundreds of screens."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "User Research & Heuristic Audit",
      timeline: "Days 1–4",
      desc: "Stakeholder interviews, user persona mapping, competitor teardowns, and heuristic audits of your existing product experience.",
      tools: ["Miro", "Hotjar", "User Personas", "Heuristic Checklists"],
      deliverables: ["UX Research Synthesis", "User Journey Maps", "Information Architecture Sitemap"]
    },
    {
      step: "02",
      title: "Low-Fidelity Wireframes & Flows",
      timeline: "Days 5–8",
      desc: "Rapid exploration of layout structures, content hierarchy, navigation models, and critical user conversion funnels.",
      tools: ["Whimsical", "Figma", "User Flow Diagrams"],
      deliverables: ["Clickable Low-Fi Wireframe", "User Flow Blueprints", "Conversion Funnel Specs"]
    },
    {
      step: "03",
      title: "Design System & Token Architecture",
      timeline: "Weeks 2–3",
      desc: "Establishing the design foundation: color palettes, typography hierarchies, elevation scales, spatial grids, and Figma variables.",
      tools: ["Figma Tokens", "Style Dictionary", "WCAG Contrast Checkers"],
      deliverables: ["Master Design System", "Figma Component Library", "Design Tokens JSON"]
    },
    {
      step: "04",
      title: "High-Fidelity Interactive Prototyping",
      timeline: "Weeks 4–6",
      desc: "Crafting pixel-perfect screens for mobile, tablet, and desktop with micro-interactions, realistic data, and smooth animations.",
      tools: ["Figma Auto-Layout", "Protopie", "Lottie / Motion"],
      deliverables: ["60 FPS Clickable Prototype", "Responsive Multi-Device Layouts", "Dark/Light Modes"]
    },
    {
      step: "05",
      title: "Usability Testing & Accessibility QA",
      timeline: "Week 7",
      desc: "Conducting moderated user testing sessions, measuring task success rates, and running automated WCAG 2.2 accessibility audits.",
      tools: ["Maze", "Useberry", "Stark Accessibility", "Axe DevTools"],
      deliverables: ["Usability Testing Report", "Task Velocity Analytics", "WCAG AAA Compliance Sign-off"]
    },
    {
      step: "06",
      title: "Developer Handoff & Frontend SLA",
      timeline: "Week 8+",
      desc: "Delivering organized Figma Dev Mode workspaces, CSS token exports, Tailwind configs, and ongoing design QA reviews during dev.",
      tools: ["Figma Dev Mode", "Storybook", "Tailwind CSS", "GitHub"],
      deliverables: ["Production-Ready Figma File", "Tailwind Config & Tokens", "Bi-Weekly Design QA Reviews"]
    }
  ];

  const terminalLogs = [
    { text: "style-dictionary build --config config.tokens.json", type: "cmd" as const, tag: "tokens" },
    { text: "Parsing 248 design tokens from Figma Variables API... SUCCESS", type: "info" as const },
    { text: "Compiling CSS custom properties and Tailwind CSS theme extensions...", type: "cyan" as const },
    { text: "Generated: ./src/styles/tokens.css & ./tailwind.config.ts in 0.42s", type: "success" as const },
    { text: "npx axe-core-cli https://staging.hiverift.com/dashboard", type: "cmd" as const, tag: "wcag" },
    { text: "Testing 54 interactive components for WCAG 2.2 AAA accessibility...", type: "info" as const },
    { text: "Contrast ratio check: Minimum 14.2:1 (Required: 7:1) -> PASSED", type: "success" as const },
    { text: "Touch target check: 100% of interactive elements >= 44x44px -> PASSED", type: "success" as const },
    { text: "Zero accessibility violations found across 18 responsive viewport templates", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Design System", val: "Figma Variables & Tokens", status: "Style Dictionary" },
    { label: "Accessibility", val: "WCAG 2.2 AAA Certified", status: "Zero Violations" },
    { label: "Handoff", val: "Figma Dev Mode & Code", status: "Zero Rework" },
    { label: "Conversion Lift", val: "+45% Higher Task Speed", status: "User Tested" }
  ];

  const estimatorTiers = [
    {
      id: "mvp-design",
      label: "Startup Product UI/UX (0 to 1)",
      desc: "Complete product design from wireframes to high-fidelity clickable Figma prototype.",
      multiplier: 1.0
    },
    {
      id: "design-system",
      label: "Enterprise Design System & Token Mesh",
      desc: "Multi-brand, tokenized Figma library with code export and complete component guidelines.",
      multiplier: 1.35
    },
    {
      id: "product-redesign",
      label: "SaaS / Platform Redesign & CRO Overhaul",
      desc: "Heuristic usability overhaul to eliminate user drop-off and modernize visual authority.",
      multiplier: 1.2
    },
    {
      id: "mobile-first",
      label: "Mobile-First App UI/UX Experience",
      desc: "Pixel-perfect iOS and Android designs following Apple HIG and Material 3 standards.",
      multiplier: 1.1
    }
  ];

  const estimatorScales = [
    { id: "core", label: "Core Scope (10–20 Screens)", weeksAdd: 0 },
    { id: "platform", label: "Full Platform (25–50 Screens)", weeksAdd: 2 },
    { id: "enterprise", label: "Enterprise Ecosystem (60+ Screens)", weeksAdd: 4 }
  ];

  const estimatorAddons = [
    { id: "prototype", label: "60fps Advanced Micro-Interactions", weeksAdd: 0.5 },
    { id: "usability", label: "User Usability Testing (10 Users)", weeksAdd: 1 },
    { id: "wcag", label: "WCAG 2.2 AAA Accessibility Audit", weeksAdd: 0.5 },
    { id: "dev-tokens", label: "Tailwind CSS Token Code Export", weeksAdd: 0.5 }
  ];

  const faqs = [
    {
      question: "How does investing in custom UI/UX design directly increase company revenue?",
      answer: "Every point of friction in a checkout, signup, or onboarding funnel directly costs you customers. By removing cognitive drag, optimizing touch targets according to Fitts's Law, and creating clear visual hierarchy, our designs consistently lift conversion rates by 40% to 150%, turning existing traffic into higher profit margins."
    },
    {
      question: "Do you design for both Web and Mobile platforms?",
      answer: "Yes. Every project is engineered with responsive auto-layout across Desktop (1440px), Laptop (1280px), Tablet (768px), and Mobile (375px/412px). We adhere strictly to Apple Human Interface Guidelines for iOS and Material Design 3 for Android."
    },
    {
      question: "How do you guarantee our developers can build the designs without discrepancies?",
      answer: "We design with engineering reality in mind. Every component is built using Figma auto-layout (which translates directly to CSS Flexbox), standard spatial grids (4px/8px), and exportable Design Tokens that map 1-to-1 with your frontend Tailwind CSS or CSS variables."
    },
    {
      question: "Who owns the Figma files and design assets?",
      answer: "You own 100% of the Figma design files, component libraries, design token JSON exports, and vector assets from the moment they are created, with full editing permissions."
    },
    {
      question: "What is the difference between UI and UX, and do we need both?",
      answer: "UX (User Experience) is the logic, information architecture, user psychology, and task velocity that ensures a product solves customer problems effortlessly. UI (User Interface) is the visual polish, typography, colors, and motion that inspires trust and delight. You need both to build an enterprise digital product that retains customers."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="ui-ux" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Enterprise UI/UX Design & Product Strategy
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Digital Interfaces Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-pink-600">
              Conversion, Clarity & Delight
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We design high-converting SaaS platforms, mobile applications, and tokenized enterprise design systems with WCAG 2.2 AAA accessibility, zero-friction developer handoff, and proven behavioral UX psychology.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Design Your Product Experience</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <Palette size={18} className="text-emerald-600" />
              <span>Request UX & CRO Audit</span>
            </button>
          </div>

          {/* Live UI/UX Showcase */}
          <div className="mt-14 lg:mt-20">
            <UIUXHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Spectrum Product Design</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Design Systems That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Scale With Your Business
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every screen is engineered with auto-layout, WCAG AAA contrast ratios, and exportable design tokens that developers can build without friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {uiuxFeatures.map((feat, idx) => (
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
                    <span>Consult Lead Designer</span>
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
        badgeText="UI/UX Architecture Benchmark"
        heading="Why Dribbble 'Pretty Concepts' Fail vs."
        highlightHeading="HiveRift Conversion-Engineered Systems"
        subheading="Compare un-implementable art concepts with HiveRift's tokenized, accessible, and code-aligned product design."
        legacyLabel="Generic Art-First Agencies"
        hiveriftLabel="HiveRift Conversion-Engineered Design"
        comparisons={comparisons}
        summaryBadges={[
          "WCAG 2.2 AAA Certified",
          "Zero Frontend Rework",
          "100% Figma & Token Ownership"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Product Design Lifecycle"
        heading="From Heuristic UX Research to"
        highlightHeading="Pixel-Perfect Developer Handoff"
        subheading="Our structured 6-phase UI/UX roadmap ensures continuous user validation, tokenized consistency, and seamless frontend implementation."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Design Tokens Stream"
        heading="Real-Time Token Sync &"
        highlightHeading="Accessibility QA Stream"
        subheading="Watch our automated pipeline pull design tokens from Figma Variables, compile CSS custom properties, and run automated WCAG 2.2 AAA accessibility audits."
        terminalTitle="hiverift-design-engine ~ style-dictionary"
        branchInfo="main: figma-tokens"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="UI/UX Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Product Design & Design System"
        subheading="Select your product stage, screen complexity, and design system requirements to estimate delivery timelines and design scope."
        tierLabel="Design Project Framework"
        tierOptions={estimatorTiers}
        scaleLabel="Screen & Component Volume"
        scaleOptions={estimatorScales}
        addonsLabel="UX Research & Design Token Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={3}
        basePriceUsd={2200}
        recommendedStack={["Figma Variables", "Style Dictionary", "Tailwind CSS", "Framer Motion", "Maze Testing", "Storybook"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="UI/UX Design"
        projectTypes={[
          "Startup Product UI/UX (0 to 1)",
          "Enterprise Design System & Token Mesh",
          "SaaS / Platform Redesign & CRO Overhaul",
          "Mobile App UI/UX (iOS & Android)",
          "eCommerce Checkout & Funnel Redesign",
          "WCAG 2.2 AAA Accessibility Audit"
        ]}
        defaultProjectType="Startup Product UI/UX (0 to 1)"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="UI/UX Design FAQs"
        heading="Frequently Answered Questions"
        highlightHeading="on Product Design & Usability"
        subheading="Expert clarity on conversion optimization, design system ROI, and bridging the gap between designers and developers."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

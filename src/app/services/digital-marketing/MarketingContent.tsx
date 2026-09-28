"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Search,
  DollarSign,
  PieChart,
  Megaphone,
  Globe
} from "lucide-react";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { ServiceTechCanvas } from "../components/shared/ServiceTechCanvas";
import { ServiceArchitectureBenchmark } from "../components/shared/ServiceArchitectureBenchmark";
import { ServiceProcessTimeline } from "../components/shared/ServiceProcessTimeline";
import { ServiceLiveTerminal } from "../components/shared/ServiceLiveTerminal";
import { ServiceScopeEstimator } from "../components/shared/ServiceScopeEstimator";
import { ServiceProjectBriefForm } from "../components/shared/ServiceProjectBriefForm";
import { ServiceFaqAccordion } from "../components/shared/ServiceFaqAccordion";
import { MarketingHeroShowcase } from "./components/MarketingHeroShowcase";

export default function MarketingContent() {
  const marketingFeatures = [
    {
      icon: Search,
      title: "Technical SEO & Programmatic Search",
      desc: "Dominate high-intent commercial keywords. We implement dynamic JSON-LD schemas, sub-second TTFB, clean crawl budgets, and programmatic landing pages.",
      deliverable: "Technical SEO & Organic Search Strategy",
      points: [
        "Automated semantic schema markup (Organization, Product, FAQ)",
        "Zero crawl budget waste with dynamic XML sitemaps & canonicals",
        "Sub-second Core Web Vitals ensuring top Google ranking signals"
      ]
    },
    {
      icon: Target,
      title: "Google Ads & High-Intent Search (PMax)",
      desc: "Stop lighting money on fire with broad keywords. We build hyper-targeted Google Search, Shopping, and Performance Max campaigns with negative keyword guardrails.",
      deliverable: "Paid Media Measurement & Campaign Optimization",
      points: [
        "Offline conversion tracking feeding smart bidding algorithms",
        "Strict negative keyword matrices to eliminate junk ad spend",
        "Dynamic ad copy personalization linked to user search queries"
      ]
    },
    {
      icon: Zap,
      title: "Server-Side Meta CAPI & First-Party Tracking",
      desc: "Bypass iOS 14.5+ ad blockers and third-party cookie restrictions. We implement server-to-server Meta Conversions API (CAPI) with SHA-256 data hashing.",
      deliverable: "First-Party Conversion Tracking & Attribution",
      points: [
        "Server-side event dispatch bypassing browser ad blockers",
        "Automated customer data hashing matching phone & email records",
        "Real-time event deduplication preventing double-counted sales"
      ]
    },
    {
      icon: BarChart3,
      title: "Conversion Rate Optimization (CRO)",
      desc: "Double your revenue without spending a single dollar more on ads. We run statistical A/B tests on value propositions, headlines, and checkout flows.",
      deliverable: "Conversion Rate Optimization",
      points: [
        "Hotjar heatmaps and session replay user friction analysis",
        "Multi-variant headline, CTA button, and social proof testing",
        "Simplified multi-step forms with progressive disclosure"
      ]
    },
    {
      icon: Megaphone,
      title: "Multi-Touch Retargeting & Drip Funnels",
      desc: "Keep your brand top-of-mind. We orchestrate cross-platform retargeting campaigns across Meta, LinkedIn, Google Display, and automated email drips.",
      deliverable: "Multi-Touch Retargeting & Lead Nurturing",
      points: [
        "Dynamic product retargeting based on specific viewed pages",
        "Automated cart abandonment SMS and email trigger flows",
        "High-authority B2B account-based marketing (ABM) on LinkedIn"
      ]
    },
    {
      icon: PieChart,
      title: "First-Party Analytics & Attribution Dashboards",
      desc: "Replace confusing vanity metrics with real commercial transparency: cost per lead, customer acquisition cost (CAC), pipeline value, and true ROAS.",
      deliverable: "Transparent Financial Attribution Reporting",
      points: [
        "Custom Looker Studio & GA4 executive growth dashboards",
        "Multi-touch attribution models (First-Click, Last-Click, Data-Driven)",
        "Automated weekly ROI reports sent directly to your inbox"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Focus Metric & Agency Alignment",
      legacy: {
        score: "Vanity Clicks & Impressions",
        status: "Zero Bottom-Line Focus",
        desc: "Boasting about millions of impressions and low CPCs while your business generates zero qualified commercial leads or profit."
      },
      hiverift: {
        score: "Revenue & CAC Attribution",
        status: "Revenue & CAC Attribution",
        desc: "Obsessed strictly with bottom-line metrics: Customer Acquisition Cost (CAC), pipeline closed-won value, and verified return on ad spend."
      }
    },
    {
      title: "Tracking Infrastructure & Attribution",
      legacy: {
        score: "Broken Client-Side Pixels",
        status: "Incomplete Conversion Data",
        desc: "Relying on deprecated browser cookies blocked by iOS 14.5 and ad blockers, leading to under-reported conversions and wasted budget."
      },
      hiverift: {
        score: "Server-Side Meta CAPI",
        status: "9.8/10 Event Match Quality",
        desc: "Direct server-to-server Conversions API (CAPI) and GA4 protocol with SHA-256 encryption for improved conversion data quality."
      }
    },
    {
      title: "SEO Strategy & Search Quality",
      legacy: {
        score: "Spammy PBN Backlinks",
        status: "Google Penalty Danger",
        desc: "Buying low-quality link packages that trigger Google spam manual actions and rank for meaningless non-commercial keywords."
      },
      hiverift: {
        score: "Technical & Programmatic SEO",
        status: "Top 3 Commercial Ranks",
        desc: "Sub-second site speeds, automated schema markup, high-intent BOFU search terms, and authoritative content architecture."
      }
    },
    {
      title: "Landing Page & CRO Alignment",
      legacy: {
        score: "Send Traffic to Homepage",
        status: "High Bounce Rate Waste",
        desc: "Sending expensive paid traffic to cluttered homepages with no clear call-to-action, converting at an abysmal 0.8% - 1.2%."
      },
      hiverift: {
        score: "Custom Dedicated Funnels",
        status: "Conversion-Focused Experience",
        desc: "Dynamic headline matching, dedicated high-speed landing pages, and friction-free forms engineered strictly for instant conversion."
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Growth Audit & Attribution Telemetry",
      timeline: "Days 1–5",
      desc: "Full audit of your ad accounts, Google Analytics 4, server-side Meta CAPI setup, competitor ad strategies, and technical SEO health.",
      tools: ["GA4", "Meta CAPI", "SEMrush", "Google Search Console"],
      deliverables: ["Full Attribution Audit", "Competitor Ad Teardown", "Keyword Opportunity Matrix"]
    },
    {
      step: "02",
      title: "Tracking Foundation & CAPI Pipeline",
      timeline: "Days 6–10",
      desc: "Implementing server-side tracking, enhanced conversions, SHA-256 user data hashing, and custom Looker Studio financial reporting.",
      tools: ["Google Tag Manager Server", "Meta CAPI", "Looker Studio"],
      deliverables: ["Server-Side CAPI Setup", "First-Party GA4 Pipeline", "Executive ROI Dashboard"]
    },
    {
      step: "03",
      title: "High-Intent Search & Campaign Build",
      timeline: "Weeks 2–3",
      desc: "Structuring targeted Google Search, Performance Max, and Meta campaigns with negative keyword matrices and high-converting ad copy.",
      tools: ["Google Ads Editor", "Meta Ads Manager", "Copywriting"],
      deliverables: ["Full Paid Ad Campaign Architecture", "Negative Keyword Lists", "High-Converting Ad Creatives"]
    },
    {
      step: "04",
      title: "Dedicated Landing Pages & CRO Sprints",
      timeline: "Weeks 4–5",
      desc: "Building blazing-fast Next.js landing pages matched to ad intent, complete with social proof triggers and multi-step forms.",
      tools: ["Next.js 15", "Hotjar", "A/B Testing Framework"],
      deliverables: ["High-Converting Landing Pages", "Mobile Touch Optimization", "Frictionless Capture Funnels"]
    },
    {
      step: "05",
      title: "Technical SEO & Schema Injection",
      timeline: "Weeks 6–8",
      desc: "Injecting structured JSON-LD schemas, optimizing Core Web Vitals, and rolling out programmatic SEO pages for commercial search terms.",
      tools: ["Schema.org", "Lighthouse", "Programmatic SEO Scripts"],
      deliverables: ["Structured Schema Injection", "Sub-Second Page Speeds", "Organic Search Rank Indexing"]
    },
    {
      step: "06",
      title: "Scaling & Budget Scaling Protocol",
      timeline: "Week 9+",
      desc: "Incrementally scaling ad budget while maintaining target ROAS, optimizing bidding algorithms, and pruning underperforming segments.",
      tools: ["Smart Bidding", "Automated Rules", "Financial Modeling"],
      deliverables: ["Predictable Revenue Engine", "Weekly Performance Calls", "Continuous CRO Experiments"]
    }
  ];

  const terminalLogs = [
    { text: "curl -X POST https://graph.facebook.com/v21.0/PIXEL_ID/events -H 'Content-Type: application/json'", type: "cmd" as const, tag: "meta-capi" },
    { text: "Transmitting server-side purchase events with SHA-256 hashed customer data...", type: "info" as const },
    { text: "Conversion events validated through the server-side pipeline.", type: "success" as const },
    { text: "node scripts/validate_seo_schema.js --url https://hiverift.com/services/digital-marketing", type: "cmd" as const, tag: "schema-seo" },
    { text: "Schema validation: Organization, Service, and FAQPage JSON-LD syntax valid", type: "success" as const },
    { text: "Google Ads optimization: reviewing low-intent search queries", type: "info" as const },
    { text: "Campaign reporting connects spend, conversions, and attributed revenue.", type: "success" as const }
  ];

  const terminalSpecs = [
    { label: "Campaign Reporting", val: "ROAS & Spend", status: "Attributed Results" },
    { label: "Attribution", val: "Server-Side CAPI", status: "First-Party Events" },
    { label: "Organic Search", val: "Technical SEO", status: "Search Visibility" },
    { label: "Paid Media", val: "Campaign Tuning", status: "Search Intent" }
  ];

  const estimatorTiers = [
    {
      id: "paid-growth",
      label: "Full Paid Media Growth (Google & Meta)",
      desc: "Omnichannel paid campaigns with server-side CAPI and dedicated landing pages.",
      multiplier: 1.0
    },
    {
      id: "technical-seo",
      label: "Technical & Programmatic SEO Engine",
      desc: "Top 3 commercial keyword dominance, schema markup, and Core Web Vitals.",
      multiplier: 0.9
    },
    {
      id: "omnichannel-scale",
      label: "Omnichannel Enterprise Growth & CRO",
      desc: "Full-funnel search, paid social, continuous A/B testing, and Looker BI dashboards.",
      multiplier: 1.45
    },
    {
      id: "cro-funnel",
      label: "Dedicated CRO & Landing Page Sprint",
      desc: "Heuristic audit and high-converting landing pages to double current conversion rates.",
      multiplier: 0.8
    }
  ];

  const estimatorScales = [
    { id: "starter", label: "Target Ad Budget: Starter Tier ($3k–$10k)", weeksAdd: 0 },
    { id: "growth", label: "Target Ad Budget: Growth Tier ($10k–$30k)", weeksAdd: 1 },
    { id: "enterprise", label: "Target Ad Budget: Enterprise Tier ($30k–$100k+)", weeksAdd: 3 }
  ];

  const estimatorAddons = [
    { id: "capi", label: "Server-Side Meta CAPI Pipeline", weeksAdd: 0.5 },
    { id: "landing", label: "2x Custom Next.js CRO Landing Pages", weeksAdd: 1 },
    { id: "abm", label: "LinkedIn B2B Account-Based Marketing", weeksAdd: 1 },
    { id: "dashboard", label: "Executive Looker Studio Dashboard", weeksAdd: 0.5 }
  ];

  const faqs = [
    {
      question: "How do you track conversions accurately with iOS 14.5+ and ad blockers?",
      answer: "We deploy server-side tracking using the Meta Conversions API (CAPI) and Google Tag Manager Server Container. Conversion events transmit directly from your cloud server to Meta and Google's APIs with SHA-256 hashed customer identifiers, completely bypassing browser-level ad blockers and Safari cookie restrictions."
    },
    {
      question: "How quickly can we expect to see tangible commercial results?",
      answer: "Paid advertising campaigns (Google Search & Meta Ads) begin generating qualified leads and sales within the first 7 to 14 days of launch. Organic technical SEO and programmatic search rankings compound over a 60 to 90-day window as search engines re-crawl schemas and reward your sub-second Core Web Vitals."
    },
    {
      question: "Do you require long-term lock-in contracts?",
      answer: "No. We believe in performance-driven partnerships. After an initial 90-day sprint to establish your tracking infrastructure, campaign architecture, and landing page funnels, our services operate on a flexible month-to-month basis."
    },
    {
      question: "Who owns the ad accounts, conversion data, and analytics dashboards?",
      answer: "You retain 100% ownership of your Google Ads, Meta Business Manager, GA4, and Looker Studio accounts. All campaign structures, ad creatives, and customer pixel data remain entirely within your accounts."
    },
    {
      question: "What is your target ROAS and CAC reduction philosophy?",
      answer: "We prioritize financial return on investment over vanity traffic. Every campaign is calibrated against your gross margins and customer lifetime value (LTV). Our systems continuously re-allocate budget towards top-converting search terms and audience segments to lower blended CAC and maximize net revenue."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100">
        <ServiceTechCanvas mode="digital-marketing" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
              Data-Backed Performance Marketing & Technical SEO
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Digital Growth Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-rose-600">
              Measurable Campaign Reporting
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We support growth with high-intent Google Ads, server-side Meta CAPI tracking, technical programmatic SEO, and conversion rate optimization (CRO) with transparent financial attribution.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("project-brief-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Scale Your Revenue</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-all shadow-sm"
            >
              <TrendingUp size={18} className="text-emerald-600" />
              <span>Request Growth Audit</span>
            </button>
          </div>

          {/* Live Marketing Showcase */}
          <div className="mt-14 lg:mt-20">
            <MarketingHeroShowcase />
          </div>

        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-emerald-600" />
              <span>Full-Funnel Performance Marketing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Marketing Campaigns Built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Mathematics, Not Guesswork
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every campaign is linked directly to first-party conversion data, server-side attribution, and rigorous negative keyword controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {marketingFeatures.map((feat, idx) => (
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
                    <span>Consult Growth Lead</span>
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
        badgeText="Marketing Quality Benchmark"
        heading="Why Vanity-Metrics Agencies Fail vs."
        highlightHeading="HiveRift Revenue-Attributed Growth"
        subheading="Compare wasteful broad-keyword agencies with HiveRift's server-side tracking, negative keyword filtering, and ROAS focus."
        legacyLabel="Vanity Metrics & Cheap Clicks Agency"
        hiveriftLabel="HiveRift Revenue-Attributed Standard"
        comparisons={comparisons}
        summaryBadges={[
          "Campaign Return Reporting",
          "Server-Side Conversion Tracking",
          "Ad Account Ownership"
        ]}
      />

      {/* Execution Roadmap */}
      <ServiceProcessTimeline
        badgeText="Growth Marketing Lifecycle"
        heading="From Technical Telemetry Setup to"
        highlightHeading="Predictable Pipeline Scale"
        subheading="Our disciplined 6-phase growth methodology guarantees iron-clad tracking, high-converting creative testing, and transparent monthly ROI."
        steps={processSteps}
      />

      {/* Live Terminal */}
      <ServiceLiveTerminal
        badgeText="Automated Growth Stream"
        heading="Real-Time CAPI Webhook &"
        highlightHeading="Attribution Telemetry Logs"
        subheading="Watch our automated pipeline transmit SHA-256 hashed purchase events to Meta Graph API, validate technical SEO schemas, and prune wasted ad spend."
        terminalTitle="hiverift-growth-engine ~ telemetry-stream"
        branchInfo="main: meta-capi-v21"
        logs={terminalLogs}
        specs={terminalSpecs}
      />

      {/* Scope Estimator */}
      <ServiceScopeEstimator
        badgeText="Growth Project Estimator"
        heading="Calculate Timeline & Investment for Your"
        highlightHeading="Digital Growth Marketing Engine"
        subheading="Select your marketing channels, monthly ad spend, and growth goals to generate project sprint timelines and revenue projections."
        tierLabel="Marketing Scope & Channels"
        tierOptions={estimatorTiers}
        scaleLabel="Monthly Ad Spend Scale"
        scaleOptions={estimatorScales}
        addonsLabel="Growth Technology & CRO Add-ons"
        addonOptions={estimatorAddons}
        baseWeeks={3}
        basePriceUsd={2000}
        defaultCurrency="INR"
        recommendedStack={["Meta CAPI (v21.0)", "Google Ads (PMax)", "Google Tag Manager Server", "Looker Studio", "Next.js CRO", "SEMrush"]}
      />

      {/* Project Brief Form */}
      <ServiceProjectBriefForm
        serviceTitle="Digital Marketing"
        projectTypes={[
          "Full Paid Media Growth (Google & Meta)",
          "Technical & Programmatic SEO Engine",
          "Omnichannel Enterprise Growth & CRO",
          "Dedicated CRO & Landing Page Sprint",
          "B2B LinkedIn Account-Based Marketing",
          "Server-Side CAPI & GA4 Migration"
        ]}
        defaultProjectType="Full Paid Media Growth (Google & Meta)"
      />

      {/* FAQs */}
      <ServiceFaqAccordion
        badgeText="Growth Marketing FAQs"
        heading="Frequently Answered Questions"
        highlightHeading="on Digital Growth & Performance Marketing"
        subheading="Direct clarity on attribution modeling, iOS tracking workarounds, target ROAS timelines, and ad account ownership."
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}

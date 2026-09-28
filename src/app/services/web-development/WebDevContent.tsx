"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Code2,
  ShoppingCart,
  Globe,
  Server,
  Cpu,
  Layers,
  MousePointerClick,
  Target,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Network,
  CheckCircle2,
  ArrowRight,
  Layout,
  FileText,
  Database,
  ShoppingBag,
  Cloud,
  Home,
  Stethoscope,
  GraduationCap,
  Plane,
  Landmark,
  Factory,
  Briefcase,
  Check,
  Send,
  User,
  Mail,
  Phone,
  FileCheck2,
  Gauge,
  Rocket,
  LifeBuoy
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FAQ } from "@/app/components/FAQ";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import Swal from "sweetalert2";
import { submitContactForm } from "@/app/actions/contactActions";
import { WebTechCanvas } from "./components/WebTechCanvas";
import { WebDevHeroShowcase } from "./components/WebDevHeroShowcase";
import { ArchitectureComparison } from "./components/ArchitectureComparison";
import { InteractiveProcessTimeline } from "./components/InteractiveProcessTimeline";
import { CustomWebTerminal } from "./components/CustomWebTerminal";
import { WebDevEstimator } from "./components/WebDevEstimator";
import { RegionalDelhiSeoSection } from "./components/RegionalDelhiSeoSection";

// --- Data Constants ---

const servicesList = [
  {
    icon: Building2,
    title: "Corporate Website Development",
    desc: "Professional business websites designed to establish credibility, showcase your services, and generate qualified enquiries.",
    deliverable: "Brand Authority & B2B Lead Funnels"
  },
  {
    icon: Code2,
    title: "Custom Website Development",
    desc: "Fully customized websites developed around your specific business requirements, workflows, functionality, and growth objectives.",
    deliverable: "100% Bespoke Code & Architecture"
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Website Development",
    desc: "Conversion-focused online stores with product management, secure payments, customer accounts, order management, integrations, and scalable architecture.",
    deliverable: "Shopify, WooCommerce & Headless Stores"
  },
  {
    icon: Globe,
    title: "WordPress Website Development",
    desc: "Fast, flexible, and SEO-friendly WordPress websites tailored to your brand, content strategy, and business requirements.",
    deliverable: "Intuitive Gutenberg & Custom Themes"
  },
  {
    icon: Server,
    title: "PHP Website Development",
    desc: "Reliable and scalable PHP-based websites and platforms designed for businesses requiring customized functionality and backend systems.",
    deliverable: "Laravel & Core PHP Web Applications"
  },
  {
    icon: Cpu,
    title: "Custom Web Application Development",
    desc: "Feature-rich web applications designed to automate processes, manage data, connect systems, and simplify complex business operations.",
    deliverable: "Enterprise Dashboards & Client Portals"
  },
  {
    icon: Layers,
    title: "SaaS Website & Platform Development",
    desc: "Scalable SaaS platforms with subscription systems, dashboards, user management, integrations, and business-specific functionality.",
    deliverable: "Multi-Tenant Cloud Architectures"
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Development",
    desc: "High-converting landing pages designed around specific campaigns, products, services, and lead-generation objectives.",
    deliverable: "Rapid Turnaround & CRO Optimization"
  }
];

const whyChoosePillars = [
  {
    icon: Target,
    title: "Business-Focused Strategy",
    desc: "We begin by understanding your business, target audience, services, competitors, and objectives before defining the website structure."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Your website is designed to provide a consistent and intuitive experience across desktops, tablets, and mobile devices."
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    desc: "We build websites with clean architecture, optimized page structures, proper heading hierarchy, technical SEO considerations, and search-engine-friendly code."
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "We focus on optimized assets, efficient code, caching, responsive images, and performance best practices to deliver fast-loading websites."
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    desc: "Security is considered throughout the development process, including authentication, data protection, access control, secure integrations, and regular updates."
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    desc: "Our websites are developed with future growth in mind, allowing new pages, features, integrations, and functionality to be added as your business evolves."
  },
  {
    icon: Sliders,
    title: "Easy Content Management",
    desc: "We can build websites with intuitive CMS solutions that allow your team to manage pages, products, blogs, images, and other content efficiently."
  },
  {
    icon: Network,
    title: "Third-Party Integrations",
    desc: "Connect your website with payment gateways, CRM systems, ERP platforms, APIs, marketing tools, analytics platforms, WhatsApp, email systems, and other business applications."
  }
];

const developmentProcess = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Requirement Analysis",
    desc: "We understand your business model, audience, competitors, goals, required features, and technical requirements."
  },
  {
    step: "02",
    icon: FileText,
    title: "Website Planning",
    desc: "We define the sitemap, information architecture, functionality, user journeys, technology stack, and development roadmap."
  },
  {
    step: "03",
    icon: Layout,
    title: "UI/UX Design",
    desc: "Our designers create intuitive and modern interfaces that align with your brand identity and provide a smooth user experience."
  },
  {
    step: "04",
    icon: Code2,
    title: "Website Development",
    desc: "Our development team converts the approved designs into a responsive, functional, and scalable website."
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Testing & Quality Assurance",
    desc: "We test functionality, responsiveness, forms, integrations, compatibility, performance, security, and user journeys."
  },
  {
    step: "06",
    icon: Gauge,
    title: "SEO & Performance Optimization",
    desc: "We optimize technical elements, page structure, loading performance, metadata, content structure, and other SEO fundamentals."
  },
  {
    step: "07",
    icon: Rocket,
    title: "Deployment",
    desc: "After final approval and testing, the website is deployed to your production hosting environment with zero downtime."
  },
  {
    step: "08",
    icon: LifeBuoy,
    title: "Support & Maintenance",
    desc: "We provide ongoing technical support, updates, improvements, backups, monitoring, and maintenance based on your requirements."
  }
];

const techStack = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["PHP", "Laravel", "Node.js", "Express.js"]
  },
  {
    category: "CMS Solutions",
    icon: FileText,
    items: ["WordPress", "Custom CMS", "Headless CMS"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "eCommerce",
    icon: ShoppingBag,
    items: ["WooCommerce", "Custom eCommerce", "Payment Gateway Integrations"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: ["AWS", "Cloud Hosting", "CDN", "DNS", "SSL", "Server Optimization"]
  }
];

const industries = [
  {
    icon: Home,
    title: "Real Estate",
    desc: "Property listing websites, lead-generation platforms, property management systems, and real estate portals."
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Clinic websites, healthcare portals, appointment platforms, patient-facing systems, and healthcare business websites."
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "School websites, institute websites, LMS platforms, course portals, student dashboards, and education platforms."
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "Travel websites, hotel booking platforms, tour websites, travel portals, and customized booking systems."
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    desc: "Online stores, multi-vendor marketplaces, product catalogs, payment integrations, and order management systems."
  },
  {
    icon: Landmark,
    title: "Finance & Insurance",
    desc: "Professional financial websites, customer portals, calculators, lead-generation platforms, and secure business applications."
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Corporate websites, product catalogs, dealer portals, quotation systems, and business automation platforms."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "High-converting websites for consultants, agencies, law firms, accounting companies, technology companies, and other professional service businesses."
  }
];

const websiteFeatures = [
  "Responsive website design",
  "Custom UI/UX",
  "CMS integration",
  "Product catalog",
  "eCommerce functionality",
  "Online payments",
  "Customer registration and login",
  "Admin dashboard",
  "Lead management",
  "Contact and enquiry forms",
  "WhatsApp integration",
  "CRM integration",
  "ERP integration",
  "API integrations",
  "Google Analytics integration",
  "Search Console integration",
  "Blog and content management",
  "Location and map integration",
  "Social media integration",
  "Multi-language functionality",
  "Booking systems",
  "Subscription functionality",
  "User dashboards",
  "Custom calculators",
  "Search and filtering",
  "Automated email notifications",
  "Security implementation",
  "Performance optimization",
  "SEO-ready architecture"
];

const performanceSeoPoints = [
  "SEO-friendly URLs",
  "Structured heading hierarchy",
  "Metadata implementation",
  "Schema markup support",
  "Mobile optimization",
  "Image optimization",
  "Core Web Vitals considerations",
  "Page speed optimization",
  "XML sitemap",
  "Robots.txt configuration",
  "Internal linking structure",
  "Search Console setup",
  "Analytics integration"
];

const webFaqs = [
  {
    question: "How is website development scoped and quoted in Delhi NCR and Noida?",
    answer: "Website development investment is tailored to your business model, feature specifications, architecture complexity, and integrations. Rather than rigid one-size-fits-all estimates, HiveRift provides customized milestone scoping with itemized deliverables, 100% source code ownership, and zero hidden fees. Request a consultation to receive an exact roadmap and custom scope proposal."
  },
  {
    question: "Which is the best web development company in Delhi NCR?",
    answer: "HiveRift is widely recognized among the best web development agencies in Delhi NCR and Noida due to our full-stack engineering standards, sub-second page performance (<0.3s TTFB), 99+ Core Web Vitals, and in-house architecture teams specializing in Next.js, React, Laravel, and Cloud DevOps."
  },
  {
    question: "Do you develop custom web applications using React, Next.js, and Laravel in Delhi?",
    answer: "Yes. We are a specialized custom web application development company in Delhi. Our team builds high-concurrency SaaS platforms, internal ERP/CRM portals, and single-page applications using modern frameworks including React 19, Next.js 15, Laravel, Node.js, and PostgreSQL."
  },
  {
    question: "Do you develop eCommerce websites for brands in Noida and Delhi?",
    answer: "Yes. As a leading eCommerce website development company in Delhi and Noida, we build conversion-engineered storefronts on Shopify Plus, WooCommerce, and headless Next.js Commerce with 1-click checkouts, Razorpay/Stripe gateways, and automated inventory sync."
  },
  {
    question: "Can you redesign our existing corporate website?",
    answer: "Yes. We provide complete corporate website redesign services in Delhi NCR. We migrate legacy codebases to modern Next.js/React architectures, upgrade UI/UX design systems in Figma, improve mobile responsiveness, and enhance Core Web Vitals without losing existing SEO rankings."
  },
  {
    question: "How long does it take to develop a professional business website?",
    answer: "Standard corporate business websites are typically delivered in 10 to 18 business days. Custom eCommerce stores require 18 to 30 days, while complex custom web applications and SaaS platforms require 4 to 8 weeks depending on backend integrations."
  },
  {
    question: "Do you provide website maintenance and support in Delhi?",
    answer: "Yes. We offer comprehensive ongoing maintenance including 24/7 server monitoring, security patching, SSL management, automated backups, speed optimization, and dedicated developer hours under a guaranteed SLA."
  }
];

export default function WebDevContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "Corporate Website",
    budget: "",
    brief: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScopeConfigured = (scope: {
    type: string;
    features: string[];
    estimatedDays: string;
    tech: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      websiteType: scope.type,
      brief: `Project Scope Configured:\n- Platform Type: ${scope.type}\n- Recommended Timeline: ${scope.estimatedDays}\n- Architecture: ${scope.tech}\n- Required Features:\n  • ${scope.features.join("\n  • ")}`
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Required Information Missing",
        text: "Please provide your name, business email, and phone number.",
        confirmButtonColor: "#10b981"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("service", `Website Dev: ${formData.websiteType}`);
      data.append(
        "message",
        `Website Type: ${formData.websiteType}\nEstimated Budget: ${formData.budget.trim() || "Not provided"}\nProject Brief: ${formData.brief || "Not provided"}`
      );

      const res = await submitContactForm(data);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Project Requirements Received!",
          text: "Thank you! Our technical leads are reviewing your project specifications and will connect with you within 24 hours.",
          confirmButtonColor: "#10b981"
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          websiteType: "Corporate Website",
          budget: "",
          brief: ""
        });
      } else {
        throw new Error(res.message || "Failed to submit project requirements.");
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: err?.message || "Something went wrong. Please try calling us directly.",
        confirmButtonColor: "#10b981"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white overflow-x-clip">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#eefaf3] via-[#f7fcf9] to-white relative overflow-hidden border-b border-emerald-100">
        {/* Animated Web Tech Canvas Network Background */}
        <WebTechCanvas />

        {/* Ambient Radial Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-emerald-200/50 via-teal-200/30 to-emerald-100/40 blur-3xl rounded-full -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-25 -z-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-white/90 backdrop-blur-md border border-emerald-300 rounded-full shadow-xs max-w-full"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#10b981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-black text-emerald-800 tracking-wider uppercase truncate">
                WEBSITE DEVELOPMENT COMPANY
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full shrink-0">
                NEXT.JS 15 • REACT 19 • LARAVEL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              High-Performance Websites{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent block sm:inline">
                Engineered to Scale Revenue
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto"
            >
              We build professional, responsive, and sub-second websites designed around real business goals. From corporate authority platforms and eCommerce ecosystems to custom web applications, our engineering team creates digital experiences that are fast, secure, scalable, and built to convert visitors into loyal clients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto hidden sm:block"
            >
              Whether you are launching a high-growth startup, modernizing an outdated legacy website, or deploying an enterprise platform, we combine modern technology, strategic UX, SEO-friendly architecture, and conversion-focused design.
            </motion.p>

            <div className="pt-1 font-bold text-xs sm:text-sm tracking-wider uppercase text-emerald-700">
              Build Your Website. Build Your Business.
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <button
                onClick={() => openEnquiryModal("Website Development Hero Consultation")}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Project Consultation</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#project-form"
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border-2 border-slate-200 hover:border-emerald-400 transition-all shadow-sm flex items-center justify-center"
              >
                Submit Project Brief
              </a>
            </motion.div>
          </div>

          {/* Interactive WebDev Centerpiece Showcase */}
          <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
            <WebDevHeroShowcase />
          </div>

          {/* Web Proof Metrics */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">99+</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Core Web Vitals SLA</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">&lt; 0.4s</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Page Load Speed</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">100%</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Code Ownership</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 font-mono">24/7</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">Monitoring & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Complete Website Development Services (8 Services) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              WEBSITE DEVELOPMENT SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Complete Website Development Solutions for Modern Businesses
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Your website should do more than simply look good. It should communicate your value, generate enquiries, support your sales process, and provide a seamless experience across every device.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our website development services cover the complete development lifecycle—from planning and UI/UX design to development, testing, deployment, optimization, and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group p-6 rounded-3xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-full blur-xl transition-all pointer-events-none" />
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-emerald-500 group-hover:text-white text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-950 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/80 inline-block">
                      {service.deliverable}
                    </span>
                    <ArrowRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern vs Legacy Web Architecture Comparison */}
      <ArchitectureComparison />

      {/* Section 3: Why Choose Our Website Development Services? (8 Pillars) */}
      <section className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              WHY CHOOSE OUR WEBSITE DEVELOPMENT SERVICES?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Websites Designed for Business Performance
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              A successful website requires more than attractive visuals. We combine design, technology, performance, SEO, security, and conversion strategy to create websites that support measurable business objectives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-all hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Interactive 8-Phase Website Development Process Timeline */}
      <InteractiveProcessTimeline />

      {/* Section 5: Technologies We Work With */}
      <section className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              TECHNOLOGIES WE WORK WITH
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Modern Technologies for Reliable Website Development
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              We select technologies based on your business requirements, scalability needs, functionality, budget, and long-term roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tech.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1 bg-slate-50 text-slate-700 font-medium text-xs rounded-lg border border-slate-200/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Website Development For Different Business Needs (8 Industries) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              WEBSITE DEVELOPMENT FOR DIFFERENT BUSINESS NEEDS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions Built Around Your Industry
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Sector-specific architectures tailored to distinct customer behaviors and conversion requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-400 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Website Features We Can Build (28 Comprehensive Capabilities) */}
      <section className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              WEBSITE FEATURES WE CAN BUILD
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything Your Business Website Needs
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              From lead capture forms and payment gateways to complex custom calculators and multi-tier user dashboards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {websiteFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center gap-3 shadow-2xs hover:border-emerald-300 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Custom Web Platform Engineering with Live Animated Terminal */}
      <CustomWebTerminal />

      {/* Section 9: Website Performance & SEO */}
      <section className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              WEBSITE PERFORMANCE & SEO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for Search Engines. Optimized for Users.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              A website needs visibility as well as functionality. Our development approach considers technical SEO and performance from the beginning. We structure websites to support search engine crawling, improve page experience, and provide users with fast and intuitive navigation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
              Our Development Process Includes
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {performanceSeoPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Turn Your Website Into a Business Growth Platform (Manifesto) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
            WEBSITE DEVELOPMENT COMPANY
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Turn Your Website Into a Business Growth Platform
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Your website is often the first interaction a potential customer has with your business. It should communicate trust, explain your value, make it easy to take action, and support your sales process.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We combine <strong className="text-slate-900 font-bold">strategy, design, development, SEO, performance, and technology</strong> to build websites that are designed around real business objectives. Whether you need a simple business website or a complex custom web platform, our development approach focuses on creating a solution that is reliable today and scalable for tomorrow.
          </p>
        </div>
      </section>

      {/* Interactive Project Scope & Feature Estimator */}
      <WebDevEstimator onSelectScope={handleScopeConfigured} />

      {/* Regional Engineering Hub for Delhi NCR, Noida & Pan-India (All 50 Target SEO Keywords Integrated) */}
      <RegionalDelhiSeoSection />

      {/* Section 11: Ready to Build Your Next Website? (Project Requirements Form) */}
      <section id="project-form" className="py-16 lg:py-24 bg-[#f8fdfa] border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
              READY TO BUILD YOUR NEXT WEBSITE?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Build a Website That Works for Your Business
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Have an idea, an existing website that needs improvement, or a business process that needs to be converted into a web platform? Our team can help you plan, design, develop, optimize, and launch your next website.
            </p>
            <p className="text-sm font-bold text-emerald-700">
              Tell us about your project and let's turn your requirements into a high-performance digital solution.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <FileCheck2 size={20} className="text-emerald-600" />
              <span>Project Requirements</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Website Type
                  </label>
                  <select
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  >
                    <option value="Corporate Website">Corporate Website Development</option>
                    <option value="Custom Website">Custom Website Development</option>
                    <option value="eCommerce Store">eCommerce Website Development</option>
                    <option value="WordPress Website">WordPress Website Development</option>
                    <option value="PHP Web Platform">PHP Website Development</option>
                    <option value="Custom Web App">Custom Web Application Development</option>
                    <option value="SaaS Platform">SaaS Website & Platform Development</option>
                    <option value="Landing Page">Landing Page Development</option>
                    <option value="Website Redesign">Website Redesign / Upgrade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Budget (Optional)
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Enter your estimated budget"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Brief
                </label>
                <textarea
                  name="brief"
                  rows={4}
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder="Tell us about your website requirements, target audience, required features, or existing site URLs..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Requirements...</span>
                  ) : (
                    <>
                      <span>Submit Your Requirement</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 12: Website Development FAQ */}
      <FAQ items={webFaqs} />

      <Footer />
    </div>
  );
}

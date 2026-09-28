import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  Layers,
  Sparkles,
  Users,
  Handshake,
  Compass,
  Cpu,
  Clock,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { portfolioProjects } from "@/app/data/portfolioProjects";
import { getCaseStudyByIdOrSlugApi } from "@/app/config/auth";

type Props = {
  params: Promise<{ projectId: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  let project: any = portfolioProjects.find((item) => item.id === projectId);

  if (!project) {
    const apiRes = await getCaseStudyByIdOrSlugApi(projectId);
    if (apiRes.success && apiRes.data) {
      project = {
        ...apiRes.data,
        id: apiRes.data.projectId,
      };
    }
  }

  if (!project) {
    return {
      title: "Case Study Not Found | HiveRift",
      description: "This case study could not be found.",
    };
  }

  // Exact 140-150 character meta description
  const metaDesc = `Case study: How HiveRift engineered a high-performance ${project.category === "ecommerce" ? "eCommerce" : "web"} platform for ${project.title} to accelerate business growth and client conversions.`;
  const trimmedDesc =
    metaDesc.length > 150
      ? `${metaDesc.slice(0, 147)}...`
      : metaDesc.length < 140
      ? metaDesc.padEnd(142, " ")
      : metaDesc;

  return {
    title: `${project.title} Case Study | Web & Software Agency Delhi NCR | HiveRift`,
    description: trimmedDesc.trim(),
    keywords: [
      `${project.title} case study`,
      project.categoryLabel,
      project.industry,
      "HiveRift case study",
      "web development case study Delhi NCR",
    ],
    alternates: {
      canonical: `https://hiverift.com/case-studies/${project.id || project.projectId}`,
    },
    openGraph: {
      title: `${project.title} Case Study | HiveRift`,
      description: trimmedDesc.trim(),
      url: `https://hiverift.com/case-studies/${project.id || project.projectId}`,
      siteName: "HiveRift",
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { projectId } = await params;
  let currentIndex = portfolioProjects.findIndex((item) => item.id === projectId);
  let project: any = null;

  if (currentIndex !== -1) {
    project = portfolioProjects[currentIndex];
  } else {
    // Dynamic lookup from backend API for newly uploaded case studies
    const apiRes = await getCaseStudyByIdOrSlugApi(projectId);
    if (apiRes.success && apiRes.data) {
      project = {
        ...apiRes.data,
        id: apiRes.data.projectId,
      };
    }
  }

  if (!project) {
    notFound();
  }

  const prevProject =
    currentIndex > 0
      ? portfolioProjects[currentIndex - 1]
      : portfolioProjects[portfolioProjects.length - 1];
  const nextProject =
    currentIndex !== -1 && currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : portfolioProjects[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans">
      <Header />

      {/* Main container with generous padding to clear fixed navbar */}
      <main className="bg-gradient-to-b from-[#f4fbf7] via-white to-[#f0f9f4] pb-20 pt-40 sm:pt-48">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-all hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/30"
            >
              <ArrowLeft size={14} />
              <span>Back to All Case Studies</span>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles size={12} className="text-emerald-700" />
              <span>Verified Client Delivery</span>
            </span>
          </div>

          {/* Hero Header Article Card */}
          <article className="overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-white shadow-xl shadow-emerald-950/5">
            
            {/* Visual Project Preview Banner */}
            <div className="relative aspect-[21/9] w-full bg-slate-900 border-b border-slate-100 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} website project case study`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500 text-white shadow-md">
                    {project.categoryLabel}
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200 font-semibold hidden sm:block">
                    Industry: {project.industry}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              
              {/* Title & Summary */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-4xl">
                  {project.description}
                </p>
              </div>

              {/* Meta Attributes Strip with high-contrast text */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Client
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Industry
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                    {project.industry}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Timeline
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                    {project.timeline}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Deployment
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-800 font-mono">
                    Production Live
                  </span>
                </div>
              </div>

              {/* The Human Journey: How We Started & Intervened */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 border border-emerald-200/90 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Users size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Client Story &amp; Human Collaboration
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                      How We Started &amp; Human Intervention
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-8">
                  {project.howWeStarted}
                </p>

                {/* 3 Human Touchpoint Pillars */}
                {project.humanTouchPoints && project.humanTouchPoints.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.humanTouchPoints.map((step: any, idx: number) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-black font-mono mb-3 border border-emerald-200/60">
                            0{idx + 1}
                          </div>
                          <h3 className="text-sm font-bold text-slate-950 mb-1.5">
                            {step.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* The Challenge & The Solution */}
              <div className="grid md:grid-cols-2 gap-8 pt-4">
                {/* Challenge */}
                <div className="p-6 rounded-2xl bg-white border border-rose-100 shadow-sm relative overflow-hidden">
                  <div className="w-1.5 h-full bg-rose-500 absolute top-0 left-0" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600">
                    The Challenge
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mt-1 mb-3">
                    Business Friction &amp; Roadblocks
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm relative overflow-hidden">
                  <div className="w-1.5 h-full bg-emerald-500 absolute top-0 left-0" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    The HiveRift Solution
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mt-1 mb-3">
                    Engineering &amp; Design Execution
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features Delivered */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <h2 className="text-xl font-black text-slate-950">Key Features Engineered</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80"
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack & Services Strip */}
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Services Delivered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.services?.map((srv: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Conversion Project CTA Banner */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#061810] to-slate-950 p-7 sm:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl border border-emerald-500/25">
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-2.5">
                    Start Your Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white !text-white leading-tight">
                    Want a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Similar Platform Built</span>?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl font-normal leading-relaxed">
                    Partner directly with HiveRift senior engineers. Transparent scoping, milestone delivery, and zero fluff.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/30 hover:scale-105 cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/918814930229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/25 hover:border-white/50 transition-all hover:scale-105 cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Prev / Next Case Study Navigation */}
              <div className="pt-8 border-t border-slate-200 flex items-center justify-between gap-4">
                <Link
                  href={`/case-studies/${prevProject.id}`}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-100 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center transition-colors">
                    <ArrowLeft size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Previous Project
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {prevProject.title}
                    </span>
                  </div>
                </Link>

                <Link
                  href={`/case-studies/${nextProject.id}`}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-right"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Next Project
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {nextProject.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-100 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>

            </div>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}
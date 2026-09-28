"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { portfolioProjects, PortfolioProject } from "@/app/data/portfolioProjects";
import { getPublicCaseStudiesApi, CaseStudyItem } from "@/app/config/auth";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Websites & Portals" },
  { id: "ecommerce", label: "eCommerce Storefronts" },
  { id: "software", label: "Custom Software & SaaS" },
];

export default function CaseStudiesPortfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projectsList, setProjectsList] = useState<any[]>(portfolioProjects);
  const [isLiveFromBackend, setIsLiveFromBackend] = useState(false);

  // Dynamically load case studies from backend API with fallback to static portfolio
  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const res = await getPublicCaseStudiesApi();
        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map((item) => ({
            id: item.projectId || item._id,
            projectId: item.projectId,
            title: item.title,
            category: item.category,
            categoryLabel: item.categoryLabel || "Web Development",
            description: item.description,
            client: item.client || "Client Partner",
            industry: item.industry || "Technology",
            timeline: item.timeline || "4-6 Weeks",
            services: item.services || [],
            techStack: item.techStack || [],
            challenge: item.challenge || "",
            solution: item.solution || "",
            keyFeatures: item.keyFeatures || [],
            howWeStarted: item.howWeStarted || "",
            humanTouchPoints: item.humanTouchPoints || [],
            image: item.image || "/case-studies/image_01.webp",
            projectUrl: item.projectUrl || "https://hiverift.com/",
            isPublished: item.isPublished ?? true,
          }));
          setProjectsList(mapped);
          setIsLiveFromBackend(true);
        }
      } catch (err) {
        // Fall back gracefully to static portfolioProjects
      }
    }

    fetchCaseStudies();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsList;
    return projectsList.filter((p) => p.category === activeFilter);
  }, [activeFilter, projectsList]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans">
      <Header />

      {/* Main container with generous top padding so fixed navigation never overlaps text */}
      <main className="bg-gradient-to-b from-[#f4fbf7] via-white to-[#f0f9f4] pb-24 pt-40 sm:pt-48 lg:pt-52">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Header Section with high contrast colors */}
          <header className="mx-auto mb-14 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 border border-emerald-300 rounded-full mb-4 shadow-xs">
              <Sparkles size={14} className="text-emerald-700 shrink-0" />
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Proven Engineering &amp; Client Deployments
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-950 tracking-tight">
              Selected <span className="text-emerald-600">Case Studies</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal max-w-2xl mx-auto">
              Explore authentic websites, high-converting eCommerce stores, and custom software platforms engineered by HiveRift for businesses across India and globally.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50/40"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </header>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id || project.projectId}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 hover:border-emerald-500 bg-white shadow-xl shadow-emerald-950/5 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Browser Mockup Frame Header */}
                  <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 truncate max-w-[210px]">
                      {project.projectUrl ? project.projectUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.id}.com`}
                    </span>
                    <span className="w-2" />
                  </div>

                  {/* Real Website Image Preview */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} live website case study`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Category Label Pill */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold text-white bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Project Details with strong, high-contrast text */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                      <span className="text-emerald-800">{project.industry}</span>
                      <span className="text-slate-700 font-mono font-bold">{project.timeline}</span>
                    </div>

                    <h2 className="text-xl font-black text-slate-950 group-hover:text-emerald-600 transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Human Touchpoint Badge */}
                    <div className="mt-4 p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-[11px] font-semibold text-emerald-900">
                        Human-Centered Engineering &amp; Direct Support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href={`/case-studies/${project.id || project.projectId}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-emerald-600 text-white text-xs font-bold font-mono tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom High-Impact CTA */}
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-slate-950 via-[#061810] to-slate-950 p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl border border-emerald-500/20">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-sm">
                <Sparkles size={13} className="text-emerald-400" />
                <span>Ready to Scale?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white !text-white leading-tight">
                Want a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">High-Performance Platform</span> Built for Your Business?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
                Work directly with senior web engineers and designers. Scoped milestones, transparent delivery, and production-grade architectures.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-xl shadow-emerald-500/30 hover:scale-105 cursor-pointer"
                >
                  <span>Request a Custom Proposal</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/918814930229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/25 hover:border-white/50 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>Quick WhatsApp Call</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
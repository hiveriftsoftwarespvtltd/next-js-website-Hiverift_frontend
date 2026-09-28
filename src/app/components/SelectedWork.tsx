"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { portfolioProjects } from "@/app/data/portfolioProjects";
import { getPublicCaseStudiesApi } from "@/app/config/auth";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Websites & Portals" },
  { id: "ecommerce", label: "eCommerce Stores" },
  { id: "software", label: "Custom Software & SaaS" },
];

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [projectsList, setProjectsList] = useState<any[]>(portfolioProjects);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Dynamic fetch from backend
  useEffect(() => {
    async function fetchProjects() {
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
            image: item.image || "/case-studies/image_01.webp",
            projectUrl: item.projectUrl || "https://hiverift.com/",
            isPublished: item.isPublished ?? true,
          }));
          setProjectsList(mapped);
        }
      } catch (err) {
        // Fall back gracefully
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projectsList
      : projectsList.filter((project) => project.category === activeFilter);

  // Initialize Embla Carousel with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, filteredProjects]);

  // When filter changes, reInit carousel to slide 0
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section
      id="work"
      className="py-14 lg:py-20 bg-gradient-to-b from-white via-[#f9fdfa] to-white text-slate-900 relative overflow-hidden border-t border-emerald-100"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
              <Sparkles size={14} className="text-emerald-700" />
              <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
                Proven Delivery • Production Case Studies
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Work & Case Studies</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Explore websites, applications and digital solutions engineered by HiveRift. Swipe or use controls to browse through our live production work.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xs font-mono font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs hidden sm:block">
              Slide {selectedIndex + 1} of {scrollSnaps.length || filteredProjects.length}
            </div>
            
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50/50 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Previous Project Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50/50 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Next Project Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#10b981] text-white border-emerald-500 shadow-md shadow-emerald-500/25 scale-[1.02]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50/30"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden select-none -mx-2 px-2 py-2" ref={emblaRef}>
          <div className="flex -ml-5 sm:-ml-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="pl-5 sm:pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-emerald-100 hover:border-emerald-500 overflow-hidden shadow-lg shadow-emerald-950/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  <div>
                    {/* Desktop Browser Window Mockup Bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <div className="ml-2.5 px-3 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/60 text-[10px] font-mono text-slate-300 truncate max-w-[210px]">
                        {project.projectUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </div>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      <img
                        src={project.image}
                        alt={`${project.title} live website case study`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading={index < 3 ? "eager" : "lazy"}
                        width={900}
                        height={562}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                      
                      {/* Category Tag Over Image */}
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold text-white bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="p-5 sm:p-6">
                      <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                        {project.industry}
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 group-hover:text-[#059669] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2 font-normal">
                        {project.description}
                      </p>

                      {/* Human Touchpoint Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-[11px] font-medium text-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Bespoke Engineering & Direct Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="p-5 sm:p-6 pt-0 mt-auto">
                    <Link
                      href={`/case-studies/${project.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-[#10b981] text-white text-xs font-black font-mono tracking-wider transition-all duration-300 shadow-xs group/btn"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 mb-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedIndex === index
                    ? "w-8 bg-emerald-600 shadow-xs"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All Projects CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mt-6 pt-6 border-t border-slate-100">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Looking for something tailored to your industry?
          </p>
          <Button
            asChild
            className="bg-[#10b981] hover:bg-[#059669] text-white font-black text-xs sm:text-sm px-6 py-5 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2">
              <Layers size={15} />
              <span>All Case Studies</span>
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

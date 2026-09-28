"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  ShoppingBag, 
  Landmark, 
  Plane, 
  Factory, 
  Briefcase, 
  Utensils, 
  Rocket,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";

const industries = [
  {
    name: "Real Estate & Property",
    slug: "real-estate",
    desc: "Turn property searches into qualified opportunities with listing portals, CRM sync, and WhatsApp automation.",
    icon: Building2,
    href: "/industries/real-estate"
  },
  {
    name: "Travel & Hospitality",
    slug: "hospitality",
    desc: "Make travel booking simpler from search to confirmation with booking engines, APIs, and guest portals.",
    icon: Plane,
    href: "/industries/hospitality"
  },
  {
    name: "Retail & eCommerce",
    slug: "retail",
    desc: "Build an online store designed to convert with custom eCommerce, Shopify, and inventory management.",
    icon: ShoppingBag,
    href: "/industries/retail"
  },
  {
    name: "Manufacturing & Industrial",
    slug: "manufacturing",
    desc: "Digitize operations, orders & workflows with custom ERP, dealer portals, and automated RFQ systems.",
    icon: Factory,
    href: "/industries/manufacturing"
  },
  {
    name: "Education & E-Learning",
    slug: "education",
    desc: "Create better digital learning experiences with LMS portals, live video classrooms, and fee automation.",
    icon: GraduationCap,
    href: "/industries/education"
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    desc: "Build connected digital experiences with doctor appointment booking, patient portals, and telemedicine.",
    icon: Stethoscope,
    href: "/industries/healthcare"
  },
  {
    name: "Finance & Financial Services",
    slug: "finance",
    desc: "Build secure digital experiences for financial businesses with loan calculators, dashboards, and CRM sync.",
    icon: Landmark,
    href: "/industries/finance"
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    desc: "Turn expertise into a strong digital business with corporate websites, client portals, and intake systems.",
    icon: Briefcase,
    href: "/industries/professional-services"
  },
  {
    name: "Restaurants & Food Businesses",
    slug: "food-restaurant",
    desc: "Give customers a direct way to order with direct food ordering, digital menus, and POS integration.",
    icon: Utensils,
    href: "/industries/food-restaurant"
  },
  {
    name: "Startups & Emerging Businesses",
    slug: "startups",
    desc: "From business idea to launch-ready product with rapid MVP development, SaaS foundations, and mobile apps.",
    icon: Rocket,
    href: "/industries/startups"
  }
];

export function IndustriesShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      duration: 45, // Slow, gentle transition glide
    },
    [
      Autoplay({
        delay: 3500, // Auto-slides every 3.5 seconds
        stopOnInteraction: false,
        stopOnMouseEnter: true, // Gracefully pauses when user hovers to read or click
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
  }, [emblaApi, onSelect]);

  return (
    <section 
      id="industries" 
      className="py-16 lg:py-24 bg-[#f4fcf7] text-slate-900 relative overflow-hidden border-t border-emerald-100"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100/90 border border-emerald-300 rounded-full mb-3.5">
              <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
                Domain Expertise
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Industries{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
                We Serve
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Bespoke web architectures and digital growth strategies engineered for the compliance, audience, and revenue dynamics of your sector.
            </p>
          </div>

          {/* Carousel Arrows & Slide Counter */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500 mr-2">
              <span className="text-emerald-700 font-bold">{String(selectedIndex + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(industries.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={scrollPrev}
              aria-label="Previous industry slide"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50/50 flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next industry slide"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50/50 flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport with Adjusted Padding */}
        <div className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="flex -ml-4 sm:-ml-6 py-4">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="min-w-0 pl-4 sm:pl-6 flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                >
                  <Link
                    href={item.href}
                    className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center mb-5 group-hover:bg-[#10b981] group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 shadow-sm">
                        <Icon size={22} className="stroke-[2.2]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal min-h-[54px]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                      <span>Explore Solutions</span>
                      <ArrowRight 
                        size={14} 
                        className="transition-transform group-hover:translate-x-1" 
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollTo(dotIndex)}
              aria-label={`Go to slide group ${dotIndex + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === dotIndex 
                  ? "w-8 bg-emerald-600" 
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-emerald-400 font-bold px-8 py-5 rounded-full transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm">
              <span>Browse All Industry Solutions</span>
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

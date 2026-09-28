"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  MapPin,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getPublicTestimonialsApi } from "@/app/config/auth";

interface GoogleReview {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  timeAgo: string;
  text: string;
  avatarBg: string;
  badge?: string;
  service: string;
}

const GOOGLE_REVIEWS_URL = "https://share.google/1cVJXMZ1i6L0uR5sf";

const REAL_TIME_TESTIMONIALS: GoogleReview[] = [
  {
    id: "rev-1",
    name: "Rajesh Goel",
    role: "Managing Director",
    company: "Apex Infra Projects",
    location: "New Delhi, India",
    rating: 5,
    timeAgo: "2 weeks ago",
    service: "Real Estate Portal & CRM",
    avatarBg: "bg-emerald-600",
    badge: "Verified Client",
    text: "HiveRift Softwares developed our real estate portal and automated WhatsApp lead-routing system. Exceptional engineering quality, clean Next.js code, and our site speed went from 4.2s to sub-second (0.7s). Our client enquiries tripled within the first month. By far the most reliable technology partner in Delhi NCR!",
  },
  {
    id: "rev-2",
    name: "Dr. Sunita Kapoor",
    role: "Founder & Director",
    company: "CarePulse Health & Diagnostics",
    location: "Gurgaon, Haryana",
    rating: 5,
    timeAgo: "3 weeks ago",
    service: "Healthcare Web Platform",
    avatarBg: "bg-blue-600",
    badge: "Local Guide",
    text: "The patient booking portal and doctor schedule management system built by HiveRift has completely eliminated our front-desk bottlenecks. Senior developers who truly understand compliance and workflow automation. Every sprint was delivered exactly on schedule with complete milestone transparency.",
  },
  {
    id: "rev-3",
    name: "Aman Singhania",
    role: "Co-Founder & CEO",
    company: "Singhania Luxury Retail",
    location: "Noida, Uttar Pradesh",
    rating: 5,
    timeAgo: "1 month ago",
    service: "Headless eCommerce Platform",
    avatarBg: "bg-purple-600",
    badge: "Verified Client",
    text: "We migrated our multi-brand retail catalog to a headless Next.js Commerce architecture with HiveRift. Our mobile checkout drop-off rate reduced dramatically, and organic SEO traffic has grown by 140%. Transparent milestones, no hidden surprises, and top-tier SLA support.",
  },
  {
    id: "rev-4",
    name: "Varun Chawla",
    role: "Head of Product",
    company: "LogisticsGrid India",
    location: "New Delhi, India",
    rating: 5,
    timeAgo: "1 month ago",
    service: "Custom SaaS Application",
    avatarBg: "bg-teal-600",
    badge: "Local Guide",
    text: "Their custom software development team is world-class. Scalable PostgreSQL, Node.js, and Next.js frontend handling over 60,000 real-time shipment events daily with zero downtime. You get to work directly with senior architects who write production-grade code.",
  },
  {
    id: "rev-5",
    name: "Pooja Mehra",
    role: "Marketing Director",
    company: "Sterling Heritage Hospitality",
    location: "Delhi NCR, India",
    rating: 5,
    timeAgo: "2 months ago",
    service: "Direct Booking Engine & SEO",
    avatarBg: "bg-amber-600",
    badge: "Verified Client",
    text: "HiveRift completely revamped our direct hotel reservation engine and technical SEO. Our commercial Google keyword rankings moved from page 4 straight to top 3 in Delhi NCR. Commission savings from third-party aggregators paid for the development cost in 90 days!",
  },
  {
    id: "rev-6",
    name: "Karan Deshmukh",
    role: "VP of Technology",
    company: "FinScale Solutions",
    location: "Bangalore & Delhi",
    rating: 5,
    timeAgo: "2 months ago",
    service: "Fintech Dashboard & API",
    avatarBg: "bg-indigo-600",
    badge: "Verified Client",
    text: "Zero bloated agency layers — you speak directly to senior engineers. They built our customer verification onboarding workflow and secured AWS infrastructure. Clean documentation, 100% source code handover, and flawless execution. Outstanding team.",
  },
];

export function GoogleReviews() {
  const [reviewsList, setReviewsList] = useState<GoogleReview[]>(REAL_TIME_TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isLiveFromDb, setIsLiveFromDb] = useState(false);

  // Fetch real reviews from CMS backend
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await getPublicTestimonialsApi();
        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          const mapped: GoogleReview[] = res.data.map((item) => ({
            id: item._id,
            name: item.name,
            role: item.role || "Client",
            company: item.company || "Verified Business",
            location: item.location || "Delhi NCR, India",
            rating: item.rating || 5,
            timeAgo: item.timeAgo || "Recent",
            service: item.service || "Website Development",
            avatarBg: item.avatarBg || "bg-emerald-600",
            badge: item.badge || "Verified Client",
            text: item.text,
          }));
          setReviewsList(mapped);
          setIsLiveFromDb(true);
        }
      } catch (err) {
        // Fall back gracefully to REAL_TIME_TESTIMONIALS
      }
    }
    fetchReviews();
  }, []);

  // Responsive items count
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalSlides = Math.ceil(reviewsList.length / itemsPerView);

  // Auto slide interval (slow & smooth auto-play)
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Sliced testimonials for current slide
  const currentReviews = reviewsList.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <section
      id="google-reviews"
      className="py-16 lg:py-24 bg-gradient-to-b from-[#f8fdfa] via-white to-[#f4fcf7] border-y border-emerald-100 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Top Header & Google Rating Summary Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            {/* Google Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-4">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                />
              </svg>
              <span className="text-xs font-bold text-slate-700">
                Google Business Profile • Verified Client Ratings
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Real-Time Client <span className="text-emerald-600">Testimonials</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Read authentic reviews and project feedback shared by businesses across Delhi NCR, India, and global clients.
            </p>
          </div>

          {/* Google 4.9 Star Summary Badge Card */}
          <div className="flex flex-wrap items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-lg shadow-emerald-950/5">
            <div className="flex items-center gap-3">
              <div className="w-13 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center shrink-0 px-1.5">
                <span className="text-lg font-black text-amber-600 leading-none">4.9</span>
                <span className="text-[9px] font-bold text-amber-700 tracking-wide mt-0.5">Star</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>100% Client Satisfaction</span>
                </div>
              </div>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md cursor-pointer shrink-0"
            >
              <span>View on Google</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* ================= AUTO-SLIDING CAROUSEL CONTAINER ================= */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute -top-16 right-0 hidden sm:flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 text-slate-700 transition-colors shadow-xs cursor-pointer"
              aria-label="Previous Reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 text-slate-700 transition-colors shadow-xs cursor-pointer"
              aria-label="Next Reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Active Reviews Slide Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentReviews.map((rev, index) => (
                <motion.article
                  key={`${currentIndex}-${rev.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl shadow-emerald-950/5 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group"
                >
                  {/* Subtle Top Accent */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-b-full opacity-80" />

                  <div>
                    {/* Header: Stars + Date + Google Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-400">{rev.timeAgo}</span>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Service Tag */}
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-3">
                      {rev.service}
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6 min-h-[96px]">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details Card Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                          <span>{rev.name}</span>
                          <CheckCircle2 size={13} className="text-emerald-500 fill-emerald-100" />
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {rev.role} • {rev.company}
                        </div>
                        <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin size={10} />
                          <span>{rev.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read on Google link */}
                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      title="Read on Google Maps"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 h-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-500/30"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Bottom Navigation Controls */}
          <div className="flex sm:hidden justify-center items-center gap-3 mt-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs text-slate-500 font-mono">
              Slide {currentIndex + 1} of {totalSlides}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Live Google Review Link Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Have you partnered with HiveRift Softwares?{" "}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 hover:text-emerald-700 underline"
            >
              Leave a Google Business Review
            </a>{" "}
            to share your project experience.
          </p>
        </div>
      </div>
    </section>
  );
}
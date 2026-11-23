"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Users,
  ChevronRight,
  Sparkles,
  BookOpen,
  ListOrdered,
  Lightbulb,
  Check
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { EnquiryModal } from "@/app/components/EnquiryModal";
import { BlogPost, blogPosts } from "@/app/data/blogData";
import { getBlogByIdFromApi, getBlogsFromApi } from "@/app/actions/adminActions";

const CATEGORY_FALLBACKS: Record<string, string> = {
  "Web Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  "Digital Marketing": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
  "SEO": "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800",
  "Tech & AI": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  "Business Growth": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "Mobile Apps": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
};

const getBlogFallbackImage = (category?: string) => {
  if (category && CATEGORY_FALLBACKS[category]) {
    return CATEGORY_FALLBACKS[category];
  }
  return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";
};

// Formatted Content Parser: Breaks down raw multiline/markdown into clean paragraphs & subheadings
function parseInlineMarkdown(str: string) {
  if (!str.includes("**")) return str;
  const parts = str.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderFormattedContent(text?: string) {
  if (!text) return null;

  // Separate inline markdown bold headers into standalone blocks if they have single newlines
  const preprocessed = text
    .replace(/\r\n/g, "\n")
    .replace(/([^\n])\n\s*(\*\*[^*]+\*\*)/g, "$1\n\n$2")
    .replace(/(\*\*[^*]+\*\*)\s*\n([^\n])/g, "$1\n\n$2");

  const blocks = preprocessed
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return blocks.map((block, idx) => {
    // Detect standalone bold subheading: **Heading Title** or ### Heading
    const isSubheading =
      (/^\*\*([^*]+)\*\*$/.test(block) && block.length < 120) ||
      /^#{2,4}\s+(.+)$/.test(block);

    if (isSubheading) {
      const headingText = block
        .replace(/^\*\*|\*\*$/g, "")
        .replace(/^#{2,4}\s+/, "")
        .trim();
      return (
        <h3
          key={idx}
          className="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4 tracking-tight flex items-center gap-3 pt-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
          <span>{headingText}</span>
        </h3>
      );
    }

    // Detect bulleted lists: starts with * or - or •
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const isList = lines.length > 1 && lines.every((l) => /^[-*•]\s+/.test(l));

    if (isList) {
      return (
        <ul key={idx} className="my-5 space-y-2.5 pl-2">
          {lines.map((line, lIdx) => {
            const itemText = line.replace(/^[-*•]\s+/, "").trim();
            return (
              <li
                key={lIdx}
                className="flex items-start gap-3 text-slate-600 font-medium text-base sm:text-lg leading-relaxed"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 shrink-0"></span>
                <span>{parseInlineMarkdown(itemText)}</span>
              </li>
            );
          })}
        </ul>
      );
    }

    // Standard paragraph with comfortable line-height and typography
    return (
      <p
        key={idx}
        className="text-slate-600 font-normal text-base sm:text-lg leading-[1.85] mb-6 tracking-[0.01em]"
      >
        {parseInlineMarkdown(block)}
      </p>
    );
  });
}

interface BlogDetailContentProps {
  post: BlogPost;
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [currentPost, setCurrentPost] = useState<BlogPost>(post);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [shareUrl, setShareUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  // Sync post with API data if dynamic ObjectId
  useEffect(() => {
    getBlogByIdFromApi(String(post.id)).then((data) => {
      if (data) setCurrentPost(data);
    });

    getBlogsFromApi().then((data) => {
      if (data && data.length > 0) {
        setRecentPosts(data.filter((p) => String(p.id) !== String(post.id)).slice(0, 4));
      } else {
        setRecentPosts(blogPosts.filter((p) => String(p.id) !== String(post.id)).slice(0, 4));
      }
    });
  }, [post.id]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    const textToCopy = shareUrl || (typeof window !== "undefined" ? window.location.href : `https://hiverift.com/blog/${currentPost.id}`);
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find previous and next articles
  const allList = recentPosts.length > 0 ? [currentPost, ...recentPosts] : blogPosts;
  const currentIndex = allList.findIndex((p) => String(p.id) === String(currentPost.id));
  const prevPost = currentIndex > 0 ? allList[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < allList.length - 1 ? allList[currentIndex + 1] : null;

  const sections = currentPost.content?.sections || [];
  const keyTakeaways = currentPost.content?.keyTakeaways || [];
  const shareTargetUrl = shareUrl || `https://hiverift.com/blog/${currentPost.id}`;

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Top Navigation & Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <nav className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                Blog
              </Link>
              <ChevronRight size={12} />
              <span className="text-emerald-700 font-black">{currentPost.category}</span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-emerald-600 hover:border-emerald-300 transition-all shadow-xs"
            >
              <ArrowLeft size={13} />
              <span>Back to all articles</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-xs font-black text-emerald-800 tracking-wider uppercase">
                  {currentPost.category}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.18] tracking-tight">
                {currentPost.title}
              </h1>

              {/* Short Summary / Excerpt */}
              {currentPost.desc && (
                <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto pt-1">
                  {currentPost.desc}
                </p>
              )}

              {/* Author & Meta Bar */}
              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 py-5 border-y border-slate-200/80 text-sm mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-black text-base flex items-center justify-center shadow-md shadow-emerald-600/20">
                    {currentPost.author ? currentPost.author.charAt(0).toUpperCase() : "H"}
                  </div>
                  <div className="text-left">
                    <div className="font-black text-slate-900 leading-tight">{currentPost.author}</div>
                    <div className="text-xs text-slate-500 font-bold">{currentPost.authorRole}</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                <div className="flex items-center gap-2 text-slate-600 font-bold text-xs sm:text-sm">
                  <Calendar size={16} className="text-emerald-600" />
                  <span>{currentPost.date}</span>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                <div className="flex items-center gap-2 text-slate-600 font-bold text-xs sm:text-sm">
                  <Clock size={16} className="text-emerald-600" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Hero Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white"
          >
            <div className="relative aspect-[16/9] w-full bg-slate-100">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getBlogFallbackImage(currentPost.category);
                }}
              />
            </div>
          </motion.div>

          {/* Main Content Grid: Article + Sticky Sidebar */}
          <div className="grid lg:grid-cols-12 gap-10 items-start max-w-7xl mx-auto">
            
            {/* Left Column: Article Body (8 cols) */}
            <article className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              
              {/* Introduction Section */}
              {currentPost.content?.intro && (
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md mb-4">
                    <Sparkles size={13} />
                    <span>Executive Summary</span>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-5 py-1">
                    {renderFormattedContent(currentPost.content.intro)}
                  </div>
                </div>
              )}

              {/* Key Takeaways Box */}
              {keyTakeaways.length > 0 && (
                <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 border border-emerald-200/80 rounded-3xl shadow-xs">
                  <div className="flex items-center gap-2.5 mb-5 text-emerald-800 font-black text-lg">
                    <CheckCircle2 size={22} className="text-emerald-600" />
                    <span>Key Takeaways</span>
                  </div>
                  <ul className="space-y-3.5">
                    {keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-slate-700 font-semibold text-sm sm:text-base leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Table of Contents Pill Bar (Mobile/Tablet Friendly) */}
              {sections.length > 1 && (
                <div className="my-8 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl lg:hidden">
                  <div className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3">
                    <ListOrdered size={16} className="text-emerald-600" />
                    <span>Table of Contents</span>
                  </div>
                  <div className="space-y-2">
                    {sections.map((sec, idx) => (
                      <a
                        key={idx}
                        href={`#section-${idx}`}
                        className="block text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors py-1"
                      >
                        <span className="text-emerald-600 mr-2">{idx + 1}.</span>
                        <span>{sec.heading}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Form-Driven Main Sections */}
              <div className="space-y-12 my-10">
                {sections.map((sec, idx) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    className="scroll-mt-32 pt-8 first:pt-0 border-t border-slate-100 first:border-0"
                  >
                    {/* Section Number Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider mb-3">
                      <span>Part {idx + 1}</span>
                    </div>

                    {/* Section Heading */}
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                      {sec.heading}
                    </h2>

                    {/* Cleanly Formatted Body */}
                    <div className="article-body">
                      {renderFormattedContent(sec.text)}
                    </div>
                  </section>
                ))}
              </div>

              {/* Editorial Quote Card */}
              {currentPost.content?.quote && (
                <div className="my-12 p-8 sm:p-10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl relative overflow-hidden shadow-xl">
                  <Quote size={56} className="text-emerald-500/15 absolute top-4 right-4" />
                  <p className="text-lg sm:text-xl font-bold italic leading-relaxed text-emerald-100 relative z-10">
                    "{currentPost.content.quote.replace(/^["“”]|["“”]$/g, "")}"
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400">
                    <span className="w-4 h-0.5 bg-emerald-400 inline-block"></span>
                    <span>HiveRift Strategic Insight</span>
                  </div>
                </div>
              )}

              {/* Conclusion Section */}
              {currentPost.content?.conclusion && (
                <div className="mt-12 p-8 bg-slate-50/90 rounded-3xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-xl mb-4">
                    <Lightbulb size={22} className="text-emerald-600" />
                    <span>Conclusion & Next Steps</span>
                  </div>
                  <div>
                    {renderFormattedContent(currentPost.content.conclusion)}
                  </div>
                </div>
              )}

              {/* Share & Copy Bar */}
              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Share this article:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentPost.title + " " + shareTargetUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                      title="Share on WhatsApp"
                      suppressHydrationWarning
                    >
                      <MessageCircle size={16} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareTargetUrl)}&title=${encodeURIComponent(currentPost.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                      title="Share on LinkedIn"
                      suppressHydrationWarning
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPost.title)}&url=${encodeURIComponent(shareTargetUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                      title="Share on Twitter / X"
                      suppressHydrationWarning
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareTargetUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                      title="Share on Facebook"
                      suppressHydrationWarning
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs rounded-xl transition-all flex items-center gap-2 border border-slate-200"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
                  <span>{copied ? "Link Copied!" : "Copy Link"}</span>
                </button>
              </div>

              {/* Previous & Next Post Navigation */}
              <div className="mt-12 grid sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.id}`}
                    className="p-5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group text-left flex flex-col justify-between"
                  >
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <ArrowLeft size={12} /> Previous Article
                    </div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-emerald-700 line-clamp-2">
                      {prevPost.title}
                    </div>
                  </Link>
                ) : <div />}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.id}`}
                    className="p-5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group text-right flex flex-col justify-between"
                  >
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-end gap-1.5">
                      Next Article <ArrowRight size={12} />
                    </div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-emerald-700 line-clamp-2">
                      {nextPost.title}
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* Right Column: Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-6 sticky top-28">
              
              {/* Table of Contents Widget (Desktop) */}
              {sections.length > 0 && (
                <div className="bg-white p-7 rounded-[2rem] border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2.5 text-base font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                    <ListOrdered size={18} className="text-emerald-600" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-2.5">
                    {sections.map((sec, idx) => (
                      <a
                        key={idx}
                        href={`#section-${idx}`}
                        className="group flex items-start gap-2.5 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors py-1 leading-snug"
                      >
                        <span className="w-5 h-5 rounded-md bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-800 flex items-center justify-center text-[10px] font-black shrink-0 transition-colors">
                          {idx + 1}
                        </span>
                        <span className="line-clamp-2">{sec.heading}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Author Card Widget */}
              <div className="bg-white p-7 rounded-[2rem] border border-slate-200/80 shadow-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-black text-xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-600/20">
                  {currentPost.author ? currentPost.author.charAt(0).toUpperCase() : "H"}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-0.5">{currentPost.author}</h3>
                <p className="text-xs font-bold text-emerald-600 mb-3">{currentPost.authorRole}</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Published by HiveRift's engineering & digital strategy team. Delivering high-performance software architecture worldwide.
                </p>
              </div>

              {/* Free Consultation CTA Card */}
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-7 rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    <Users size={13} />
                    <span>Engineering Advisory</span>
                  </div>
                  <h3 className="text-lg font-black leading-snug">
                    Need Custom Web, App or AI Development?
                  </h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Speak directly with HiveRift solution architects for project estimations and technical feasibility.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Schedule Free Call</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Recent Articles Widget */}
              {recentPosts.length > 0 && (
                <div className="bg-white p-7 rounded-[2rem] border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 text-base font-black text-slate-900 mb-5 pb-3 border-b border-slate-100">
                    <BookOpen size={18} className="text-emerald-600" />
                    <span>Recent Insights</span>
                  </div>
                  <div className="space-y-4">
                    {recentPosts.slice(0, 3).map((rPost) => (
                      <Link
                        key={String(rPost.id)}
                        href={`/blog/${rPost.id}`}
                        className="flex items-center gap-3.5 group"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
                          <img
                            src={rPost.image}
                            alt={rPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = getBlogFallbackImage(rPost.category);
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-slate-900 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors">
                            {rPost.title}
                          </h4>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                            {rPost.date}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </aside>
          </div>

          {/* Related Articles Bottom Grid */}
          {recentPosts.length > 0 && (
            <section className="mt-24 pt-16 border-t border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                      Related <span className="text-emerald-600">Articles</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-bold mt-1">Explore more insights from our team</p>
                  </div>
                  <Link
                    href="/blog"
                    className="px-6 py-3 bg-white border border-slate-200 hover:border-emerald-500 text-slate-900 hover:text-emerald-600 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm flex items-center gap-2"
                  >
                    View All Blogs <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {recentPosts.slice(0, 3).map((rPost) => (
                    <Link
                      key={String(rPost.id)}
                      href={`/blog/${rPost.id}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={rPost.image}
                          alt={rPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getBlogFallbackImage(rPost.category);
                          }}
                        />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-black text-emerald-600 uppercase tracking-widest shadow-sm">
                          {rPost.category}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                        <div>
                          <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                            {rPost.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2">
                            {rPost.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                          <span>{rPost.date}</span>
                          <span className="text-emerald-600 font-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            Read <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  Search,
  Mail,
  Phone,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Plus,
  Minus,
  Rocket,
  Sparkles,
  BookOpen,
  Code2,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FAQ } from "@/app/components/FAQ";
import { EnquiryModal } from "@/app/components/EnquiryModal";
import Link from "next/link";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { blogPosts, BlogPost } from "@/app/data/blogData";
import { getBlogsFromApi } from "@/app/actions/adminActions";

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getBlogsFromApi(activeCategory, searchQuery).then((data) => {
      if (data) {
        setPosts(data);
      }
    });
  }, [activeCategory, searchQuery]);

  // Dynamically extract categories
  const dynamicCategories = ["All", "Web Development", "Digital Marketing", "SEO", "Mobile Apps", "Business Growth", "Tech & AI"];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Clean Light Mode matching Home Page */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f4fcf7] via-white to-white border-b border-emerald-100/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-gradient-to-r from-emerald-100/50 via-teal-100/40 to-emerald-100/30 blur-3xl rounded-full -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20 -z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200/80 rounded-full shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-black text-emerald-800 tracking-wider uppercase">
                ENGINEERING & GROWTH PLAYBOOKS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Engineering Insights, <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Real-World Benchmarks
              </span>{" "}
              & Architecture
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              In-depth technical blueprints, headless commerce playbooks, full-stack architecture patterns, and data-driven marketing guides written by HiveRift's core engineering team.
            </p>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
              {dynamicCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-white text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left Column - Blog List (Smaller Horizontal Layout) */}
            <div className="lg:col-span-8 space-y-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500"
                >
                  {/* Left: Image (Smaller) */}
                  <div className="md:w-[30%] relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg text-[9px] font-black text-emerald-600 tracking-widest uppercase shadow-sm border border-white/20">
                      {post.category}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="md:w-[70%] p-6 lg:p-8 flex flex-col justify-center">
                    <div className="space-y-3">
                      <h2 className="text-lg lg:text-xl font-black text-gray-900 leading-tight tracking-tight group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h2>

                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                        <span className="text-slate-900">{post.author.toUpperCase()}</span>
                        <span>•</span>
                        <span>Posted on {post.date}</span>
                      </div>

                      <p className="text-slate-500 font-bold text-xs leading-relaxed line-clamp-2">
                        {post.desc}
                      </p>

                      <div className="pt-4">
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-xs font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          Read More <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-400 font-bold text-xl">No posts found in this category yet.</p>
                </div>
              )}

              {/* Share Article Section */}
              <div className="pt-12 flex items-center gap-4">
                <span className="text-sm font-black text-gray-900">Share this article:</span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Facebook size={16} />, color: "bg-[#1877F2]" },
                    { icon: <Twitter size={16} />, color: "bg-[#1DA1F2]" },
                    { icon: <Linkedin size={16} />, color: "bg-[#0A66C2]" },
                    { icon: <MessageCircle size={16} />, color: "bg-[#25D366]" }
                  ].map((social, i) => (
                    <button key={i} className={`w-9 h-9 rounded-full ${social.color} text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}>
                      {social.icon}
                    </button>
                  ))}
                </div>

              </div>      </div>

            {/* Right Column - Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-xl py-4 pl-6 pr-14 text-sm font-bold text-gray-900 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                  <button
                    className="absolute right-2 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                    onClick={() => { }} // Search is already live via onChange, button is decorative or can trigger focus
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-6 tracking-tight">Categories</h3>
                <div className="space-y-2">
                  {dynamicCategories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group ${activeCategory === cat ? "bg-emerald-50 text-emerald-700" : "hover:bg-slate-50 text-gray-600"}`}
                    >
                      <span className="text-sm font-bold">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Latest Posts Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-6 tracking-tight">Latest Posts</h3>
                <div className="space-y-6">
                  {posts.slice(0, 4).map((post, i) => (
                    <Link key={i} href={`/blog/${post.id}`} className="flex items-center gap-4 group">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-gray-900 line-clamp-2 leading-tight group-hover:text-emerald-600 transition-colors">{post.title}</h4>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[2.5rem] relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 text-emerald-600">
                    <Mail size={20} />
                    <h3 className="text-base font-black tracking-tight uppercase">Get Free Marketing Tips</h3>
                  </div>
                  <p className="text-xs font-bold text-gray-500 leading-relaxed">
                    Join our newsletter and get the latest marketing tips and strategies.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-emerald-100 text-sm font-bold text-gray-900 outline-none focus:border-emerald-500 transition-all shadow-sm"
                    />
                    <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-black text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                      Subscribe Now
                    </button>
                  </div>
                </div>
                </div>

              {/* Help Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 tracking-tight">Need Help?</h3>
                </div>
                <p className="text-xs font-bold text-gray-500 leading-relaxed">
                  Our experts are here to help you grow your business.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-gray-900 font-black">
                    <Phone size={18} className="text-emerald-600" />
                    <span className="text-sm">88149 30229</span>
                  </div>
                  <Link href="/contact" className="flex items-center justify-between text-xs font-black text-emerald-600 uppercase tracking-widest group">
                    <span>Schedule a Call</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Consultation Banner - Aligned with Home & Service Pages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-black text-emerald-400 uppercase tracking-widest">
                  Engineering Consultation
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-snug">
                  Need an Architectural Review or Full-Stack Engineering Team?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Book a direct 30-minute scoping call with our lead solutions architect. We'll audit your stack, benchmark performance, and map out a fixed-cost milestone roadmap.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight size={14} />
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* FAQ Section - Full Width & Centered */}
      <FAQ items={[
        { question: "How long does digital marketing take to show results?", answer: "SEO typically takes 3-6 months, while paid ads can show results in days." },
        { question: "Is digital marketing good for small businesses?", answer: "Absolutely! It's the most cost-effective way to reach a targeted audience." },
        { question: "Which is better SEO or paid advertising?", answer: "Both have benefits. SEO is for long-term growth, while Ads are for immediate results." },
        { question: "How much does digital marketing cost?", answer: "Costs vary based on your goals and industry. We offer flexible packages." },
        { question: "Can I do digital marketing by myself?", answer: "Yes, but hiring experts ensures better ROI and saves you time." },
        { question: "How do you measure success?", answer: "We track KPIs like leads, conversions, traffic, and overall ROI." }
      ]} />

      <Footer />
    </div>
  );
}

"use client";

import { QuickAnswer } from "@/app/data/quickAnswers";
import { motion, useScroll, useSpring } from "motion/react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { CheckCircle2, ArrowRight, HelpCircle, TrendingUp, Users, Target, ChevronLeft, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuickAnswerContent({ slug, answer }: { slug: string, answer: QuickAnswer }) {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return null;

  const icons = {
    "what-is-digital-marketing": HelpCircle,
    "why-website-important": TrendingUp,
    "how-can-we-help": Users,
    "results-timeline": Target,
  };

  const Icon = icons[slug as keyof typeof icons] || HelpCircle;

  return (
    <main className="bg-white min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Hero Section - Redesigned for Maximum Impact */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-50/50 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-10"
            >
              <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase tracking-[0.2em] text-[10px] bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition-all group">
                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to Knowledge Hub
              </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-2xl shadow-emerald-600/10 border border-emerald-50"
              >
                <Icon size={32} strokeWidth={2.5} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="px-4 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-black tracking-widest uppercase w-fit"
              >
                Expert Insight
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight"
            >
              {answer.question}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl"
            >
              Detailed breakdown of strategic goals, technical implementation, and growth results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Content Column */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-16"
                >
                  {/* Summary Box */}
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Quick Summary</h3>
                    <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed">
                      {answer.shortAnswer}
                    </p>
                  </div>

                  {/* Detailed Section */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                      Strategic Overview
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-[1.8] font-medium text-justify">
                      {answer.detailedAnswer}
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                      <Zap className="text-emerald-500" size={28} />
                      Key Pillars of Success
                    </h2>
                    <div className="grid gap-4">
                      {answer.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-5 md:p-6 bg-white border border-gray-100 rounded-[2rem] hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
                        >
                          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                            <CheckCircle2 size={20} />
                          </div>
                          <span className="text-gray-700 font-bold text-sm md:text-base pt-2">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                  {/* Premium CTA Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-[2px] rounded-[3rem] bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 shadow-2xl shadow-emerald-500/20 group overflow-hidden"
                  >
                    <div className="bg-emerald-950 rounded-[2.9rem] p-8 md:p-12 relative overflow-hidden h-full text-center lg:text-left">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 border border-white/20 mx-auto lg:mx-0">
                          <MessageSquare size={24} />
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Ready to start your project?</h3>
                        <p className="text-emerald-100/70 font-medium mb-10 leading-relaxed text-base">
                          Stop searching and start building. Get a custom proposal for your business in 24 hours.
                        </p>

                        <Link
                          href={answer.ctaLink}
                          className="w-full bg-white text-emerald-900 px-8 py-5 rounded-2xl font-black text-center transition-all hover:bg-emerald-50 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                        >
                          {answer.cta}
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Secondary Contact Info */}
                  <div className="p-8 border-2 border-slate-100 rounded-[3rem] bg-slate-50/50 backdrop-blur-sm group hover:border-emerald-200 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                        <WhatsAppIcon />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-black text-sm">Instant Consultation</h4>
                        <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">Active Now</p>
                      </div>
                    </div>
                    <p className="text-gray-500 font-bold text-sm mb-6 leading-relaxed">Prefer messaging? Text us on WhatsApp for an immediate response from our experts.</p>
                    <a 
                      href="https://wa.me/918814930229"
                      target="_blank"
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 text-gray-900 font-black text-xs hover:border-emerald-500 transition-all shadow-sm"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ArrowRight size={16} className="text-emerald-500" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#25D366]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048a11.827 11.827 0 001.592 6.027L0 24l6.135-1.61a11.782 11.782 0 005.91 1.583h.005c6.637 0 12.05-5.414 12.053-12.05a11.85 11.85 0 00-3.41-8.52z" fill="currentColor"/>
    </svg>
  );
}

"use client";

import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Header } from "@/app/components/Header";

export default function ThankYouContent() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden mt-20 px-4">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-3xl mx-auto text-center relative z-10 py-6">
          {/* Success Icon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-emerald-600 rounded-2xl md:rounded-3xl shadow-xl shadow-emerald-600/20 mb-6 md:mb-8 relative mx-auto"
          >
            <CheckCircle2 size={32} className="text-white md:hidden" strokeWidth={2.5} />
            <CheckCircle2 size={48} className="text-white hidden md:block" strokeWidth={2.5} />
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl md:rounded-3xl bg-emerald-600 -z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-4 md:mb-6">
              <span className="text-[9px] md:text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">
                Success Submission
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
              Thank You for <br className="hidden md:block"/>
              <span className="text-emerald-600">Reaching Out!</span>
            </h1>

            <p className="text-sm md:text-lg text-gray-500 font-medium max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed px-2">
              We've received your request. Our strategy team is currently reviewing your requirements to provide the best possible roadmap.
            </p>

            {/* Response Time Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xs md:max-w-md mx-auto bg-slate-50 rounded-xl md:rounded-2xl p-4 md:p-5 border border-slate-100 shadow-sm mb-8 md:mb-12 flex items-center gap-4 text-left"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-emerald-600 shadow-sm border border-slate-100 shrink-0">
                <Clock size={20} className="md:hidden" />
                <Clock size={24} className="hidden md:block" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-gray-900">Immediate Response</h4>
                <p className="text-[10px] md:text-sm text-gray-500 font-medium">
                  We will connect within <span className="text-emerald-600 font-bold">2 hours</span>.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-7 py-3 md:py-3.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return Home
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3 md:py-3.5 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-sm hover:border-emerald-600 hover:text-emerald-600 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

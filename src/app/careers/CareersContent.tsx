"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  MapPin, 
  Clock, 
  Code, 
  Palette, 
  TrendingUp, 
  Smartphone, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Briefcase
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { JobApplyModal } from "@/app/components/JobApplyModal";

const perks = [
  { icon: Zap, title: "Real Work from Day One", desc: "No 'shadowing' for months. You work on live client projects from your first week." },
  { icon: Clock, title: "Flexible Hours", desc: "We care about output, not clock-watching. Work when you're most productive." },
  { icon: Award, title: "Learn & Grow Fast", desc: "Access to paid courses, certifications, and a learning budget for your growth." },
  { icon: ShieldCheck, title: "Competitive Salaries", desc: "We benchmark against the top 25% in the Indian market with 6-month reviews." },
  { icon: Users, title: "Work with Global Clients", desc: "Build projects for businesses in India, USA, Canada, UAE, and more." },
  { icon: MapPin, title: "Remote-Friendly", desc: "Many of our roles are fully remote or hybrid. Work from where you do best." }
];

const jobs = [
  {
    title: "Senior Full-Stack Developer",
    dept: "Engineering",
    loc: "New Delhi / Remote",
    type: "Full-Time",
    skills: ["React.js / Next.js", "Node.js / Express", "PostgreSQL / MongoDB", "AWS / Azure"],
    icon: Code
  },
  {
    title: "Digital Marketing Specialist",
    dept: "Marketing",
    loc: "New Delhi",
    type: "Full-Time",
    skills: ["Google Ads & Meta Ads", "SEO & Content Strategy", "GA4", "Email Marketing"],
    icon: TrendingUp
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    loc: "New Delhi / Remote",
    type: "Full-Time",
    skills: ["Figma (Required)", "User Research", "Mobile-First Design", "Prototyping"],
    icon: Palette
  },
  {
    title: "Mobile App Developer",
    dept: "Engineering",
    loc: "New Delhi / Remote",
    type: "Full-Time",
    skills: ["React Native", "iOS & Android Deployment", "REST API", "App Store Submission"],
    icon: Smartphone
  }
];

const process = [
  { step: "01", title: "Apply", desc: "Email your CV and a short note to hr.tripti@hiverift.com telling us who you are." },
  { step: "02", title: "Screening Call", desc: "A 20-minute call with our HR team to understand your experience and expectations." },
  { step: "03", title: "Skills Assessment", desc: "A short take-home task (2-3 hours max) relevant to your role." },
  { step: "04", title: "Final Interview", desc: "A 45-minute interview with the department head about technical + cultural fit." }
];

export default function CareersContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApplyClick = (title: string) => {
    setSelectedJob(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Light Theme Matching Home Page */}
      <section className="pt-32 pb-14 lg:pt-40 lg:pb-16 bg-gradient-to-b from-[#f4fcf7] via-white to-white relative overflow-hidden border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-xs font-bold text-[#15803d] uppercase tracking-wider">
                Join HiveRift • Build With Senior Engineers
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
              Build the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">
                Digital Engineering
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              We're hiring ambitious full-stack developers, UI/UX designers, and growth marketers who want to work on mission-critical client projects with top modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Why Work at <span className="text-emerald-600">HiveRift?</span></h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {perks.map((perk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-emerald-500 hover:bg-white transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-md mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <perk.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed ">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Current Open <br /><span className="text-emerald-600">Positions</span></h2>
            
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-emerald-300 transition-all"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <job.icon size={28} />
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-slate-100 text-[11px] font-black uppercase text-slate-500 rounded-full tracking-widest">{job.dept}</span>
                        <span className="px-3 py-1 bg-emerald-50 text-[11px] font-black uppercase text-emerald-600 rounded-full tracking-widest">{job.type}</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((s, i) => (
                          <span key={i} className="text-xs font-semibold text-gray-400 bg-slate-50 px-3 py-1 rounded-lg"># {s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleApplyClick(job.title)}
                    className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-3"
                  >
                    Apply Now <ArrowRight size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-gray-900 mb-16 text-center">How to <span className="text-emerald-600">Apply</span></h2>
          <div className="grid gap-16 relative before:absolute before:left-6 md:before:left-1/2 before:w-0.5 before:h-full before:bg-slate-300">
            {process.map((p, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start gap-12 md:gap-20 ${idx % 2 === 1 ? "md:flex-row-reverse text-left md:text-right" : ""}`}>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-emerald-600 rounded-2xl text-white font-black flex items-center justify-center shadow-xl z-10 transition-transform hover:scale-110">
                  {p.step}
                </div>
                <div className="md:w-1/2 pl-16 md:pl-0 pt-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-3">{p.title}</h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-lg">{p.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open App */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-6">Don't See a Role That Fits?</h2>
            <p className="text-slate-400 font-medium text-lg mb-10">
              We're always looking for exceptional people. Send your CV with the subject line 'Open Application' and tell us what you're great at.
            </p>
            <button 
              onClick={() => handleApplyClick("Global Application")}
              className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl"
            >
              Email Us <Mail size={24} />
            </button>
          </div>
        </div>
      </section>

      <JobApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />

      <Footer />
    </div>
  );
}

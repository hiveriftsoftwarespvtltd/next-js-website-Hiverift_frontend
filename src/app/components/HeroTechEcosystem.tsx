"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Smartphone,
  Server
} from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  x: number; // percentage
  y: number; // percentage
  icon: any;
  size?: "sm" | "md" | "lg";
}

const techNodes: TechNode[] = [
  { id: "react", name: "React", category: "Frontend", color: "#06b6d4", bgColor: "rgba(6, 182, 212, 0.1)", borderColor: "rgba(6, 182, 212, 0.3)", x: 12, y: 18, icon: Code2, size: "md" },
  { id: "nextjs", name: "Next.js", category: "Framework", color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.3)", x: 84, y: 16, icon: Layers, size: "lg" },
  { id: "nodejs", name: "Node.js", category: "Backend", color: "#22c55e", bgColor: "rgba(34, 197, 94, 0.1)", borderColor: "rgba(34, 197, 94, 0.3)", x: 6, y: 52, icon: Server, size: "md" },
  { id: "php", name: "PHP / Laravel", category: "Backend", color: "#818cf8", bgColor: "rgba(129, 140, 248, 0.1)", borderColor: "rgba(129, 140, 248, 0.3)", x: 90, y: 48, icon: Code2, size: "md" },
  { id: "flutter", name: "Flutter", category: "Mobile", color: "#38bdf8", bgColor: "rgba(56, 189, 248, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)", x: 16, y: 84, icon: Smartphone, size: "md" },
  { id: "aws", name: "AWS Cloud", category: "DevOps", color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)", x: 82, y: 82, icon: Cloud, size: "md" },
  { id: "mongodb", name: "MongoDB", category: "Database", color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.3)", x: 48, y: 8, icon: Database, size: "sm" },
  { id: "mysql", name: "MySQL", category: "Database", color: "#0284c7", bgColor: "rgba(2, 132, 199, 0.1)", borderColor: "rgba(2, 132, 199, 0.3)", x: 30, y: 92, icon: Database, size: "sm" },
  { id: "wordpress", name: "WordPress", category: "CMS", color: "#2563eb", bgColor: "rgba(37, 99, 235, 0.1)", borderColor: "rgba(37, 99, 235, 0.3)", x: 68, y: 92, icon: Globe, size: "sm" },
  { id: "ai", name: "AI Automation", category: "Intelligence", color: "#8b5cf6", bgColor: "rgba(139, 92, 246, 0.1)", borderColor: "rgba(139, 92, 246, 0.3)", x: 28, y: 6, icon: Cpu, size: "md" },
  { id: "seo", name: "SEO & Growth", category: "Marketing", color: "#059669", bgColor: "rgba(5, 150, 105, 0.1)", borderColor: "rgba(5, 150, 105, 0.3)", x: 70, y: 8, icon: TrendingUp, size: "md" },
];

export function HeroTechEcosystem() {
  const [activeNode, setActiveNode] = useState<string | null>("nextjs");

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[440px] sm:h-[490px] md:h-[530px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl p-4">
      {/* Background Grid & Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: "28px 28px"
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* SVG Connecting Lines between Central Hub and Tech Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {techNodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={`line-${node.id}`}>
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke={isActive ? "url(#activeGrad)" : "url(#lineGrad)"}
                strokeWidth={isActive ? "0.6" : "0.3"}
                strokeDasharray={isActive ? "none" : "1, 1"}
                className="transition-all duration-300"
              />
              {isActive && (
                <circle r="0.8" fill="#34d399">
                  <animateMotion
                    path={`M 50 50 L ${node.x} ${node.y}`}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Central Interface Hub */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 w-[240px] sm:w-[270px] bg-slate-900/90 backdrop-blur-md rounded-2xl border border-emerald-500/40 p-4 shadow-[0_0_35px_rgba(16,185,129,0.25)] text-left"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider flex items-center gap-1">
            HiveRift Engine
          </span>
        </div>

        {/* Central Display */}
        <div className="pt-3 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">Architecture</span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              Full-Stack Ready
            </span>
          </div>

          <div className="bg-slate-950/80 rounded-lg p-2.5 border border-slate-800 font-mono text-[11px] space-y-1">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400">❯</span>
              <span>build.sell.grow()</span>
            </div>
            <div className="text-[10px] text-slate-400 pl-4">
              ✔ 99.9% Uptime SLA
            </div>
            <div className="text-[10px] text-emerald-400/90 pl-4">
              ✔ SEO Optimized Core
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
            <div className="bg-slate-800/40 rounded-md p-1.5 border border-slate-800">
              <div className="text-[9px] text-slate-400 font-medium">Speed</div>
              <div className="text-[11px] font-bold text-emerald-400">&lt; 0.8s</div>
            </div>
            <div className="bg-slate-800/40 rounded-md p-1.5 border border-slate-800">
              <div className="text-[9px] text-slate-400 font-medium">SEO Score</div>
              <div className="text-[11px] font-bold text-teal-400">100/100</div>
            </div>
            <div className="bg-slate-800/40 rounded-md p-1.5 border border-slate-800">
              <div className="text-[9px] text-slate-400 font-medium">Security</div>
              <div className="text-[11px] font-bold text-cyan-400">A+ Grade</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting / Floating Tech Nodes */}
      {techNodes.map((node, i) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: isActive ? 1.08 : 1,
              y: [0, i % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.05 },
              y: {
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              position: "absolute",
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            className="z-30 cursor-pointer"
          >
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-lg ${
                isActive
                  ? "bg-slate-800 text-white shadow-emerald-500/20 scale-105"
                  : "bg-slate-900/80 text-slate-300 hover:text-white"
              }`}
              style={{
                borderColor: isActive ? node.color : node.borderColor,
                boxShadow: isActive ? `0 0 15px ${node.color}40` : undefined,
              }}
            >
              <div
                className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: node.bgColor, color: node.color }}
              >
                <Icon size={12} strokeWidth={2.5} />
              </div>
              <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
                {node.name}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Technology Ecosystem Label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 font-mono tracking-wider flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        HIVERIFT TECH ECOSYSTEM
      </div>
    </div>
  );
}

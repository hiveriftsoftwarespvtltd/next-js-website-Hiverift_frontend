"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Tablet,
  Code2,
  Zap,
  TrendingUp,
  ShieldCheck,
  Bell,
  Fingerprint,
  WifiOff,
  BatteryCharging,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Activity
} from "lucide-react";

export function MobileHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"app" | "code" | "performance">("app");
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const [activeScreen, setActiveScreen] = useState<"dashboard" | "wallet" | "biometric">("dashboard");
  const [showNotification, setShowNotification] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const triggerNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3800);
  };

  const sampleMobileCode = `// lib/presentation/controllers/sync_controller.dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hive_flutter/hive_flutter.dart';

class LocalFirstRepository {
  // Sub-10ms Encrypted Offline SQLite / Hive Cache
  Future<void> mutateWithOptimisticSync(Payload payload) async {
    final box = await Hive.openBox('secure_cache');
    await box.put(payload.id, payload.toJson());
    
    // Background BackgroundWorker when network resumes
    BackgroundSyncManager.enqueue(
      task: 'SYNC_UPSTREAM',
      endpoint: '/api/v2/telemetry',
      retries: 3,
    );
  }
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sampleMobileCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      
      {/* 1. Responsive Technical Authority Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm text-xs font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Flutter & React Native Enterprise</span>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
            60 FPS Native
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-sm text-xs font-bold text-white">
          <Fingerprint size={13} className="text-cyan-400" />
          <span>Offline-First Biometric Encryption</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-sm text-xs font-bold text-slate-300">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>100% App Store Approval Guarantee</span>
        </div>
      </div>

      {/* 2. Main Terminal / Device Simulator Frame */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          {/* OS Window Dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              iPhone 16 Pro // iOS 18.2 Core Simulator
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab("app")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "app" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone size={13} />
              <span>Interactive Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab("performance")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "performance" ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap size={13} />
              <span>Mobile Vitals</span>
            </button>
          </div>

          {/* Platform toggle */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <button
              onClick={() => setPlatform("ios")}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                platform === "ios" ? "bg-slate-800 text-emerald-400 border border-emerald-500/30" : "hover:text-slate-200"
              }`}
            >
              iOS
            </button>
            <button
              onClick={() => setPlatform("android")}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                platform === "android" ? "bg-slate-800 text-emerald-400 border border-emerald-500/30" : "hover:text-slate-200"
              }`}
            >
              Android
            </button>
          </div>

        </div>

        {/* Showcase Body */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] flex items-center justify-center">
          
          {/* TAB 1: INTERACTIVE APP SIMULATOR */}
          {activeTab === "app" && (
            <div className="w-full max-w-sm mx-auto">
              
              {/* Smartphone Frame */}
              <div className="relative rounded-[40px] border-4 border-slate-700 bg-slate-950 shadow-2xl overflow-hidden p-3.5 pt-5 pb-5">
                
                {/* Dynamic Island / Camera Notch */}
                <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-4 border border-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                {/* Simulated In-App Push Notification Alert */}
                <AnimatePresence>
                  {showNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="absolute top-12 left-4 right-4 bg-slate-900/95 border border-emerald-500/50 rounded-2xl p-3 shadow-2xl z-30 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-[10px]">
                          H
                        </div>
                        <span className="text-[11px] font-bold text-white">HiveRift Cloud</span>
                        <span className="text-[10px] text-slate-500 ml-auto font-mono">Just now</span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium">
                        Instant 60fps render confirmed. Background sync completed with 0 drop frames.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inside App Content */}
                <div className="bg-slate-900/90 rounded-3xl p-4 border border-slate-800/80 space-y-4">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>9:41 AM</span>
                    <div className="flex items-center gap-1.5">
                      <WifiOff size={11} className="text-emerald-400" />
                      <span>Offline Ready</span>
                      <BatteryCharging size={13} className="text-emerald-400" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">Enterprise Mobile</span>
                      <h4 className="text-base font-extrabold text-white">Production Sandbox</h4>
                    </div>
                    <button
                      onClick={triggerNotification}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition-colors"
                      title="Test Push Notification"
                    >
                      <Bell size={15} />
                    </button>
                  </div>

                  {/* Live Metric Widget */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-300 font-semibold">Native Render Loop</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400">
                        60 FPS Locked
                      </span>
                    </div>
                    <div className="text-2xl font-black font-mono text-white">0.38s Cold Start</div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      Hermes V8 Engine • JIT Enabled
                    </div>
                  </div>

                  {/* Interactive Screen Tabs */}
                  <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
                    <button
                      onClick={() => setActiveScreen("dashboard")}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeScreen === "dashboard" ? "bg-slate-800 text-white" : "text-slate-400"
                      }`}
                    >
                      Metrics
                    </button>
                    <button
                      onClick={() => setActiveScreen("wallet")}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeScreen === "wallet" ? "bg-slate-800 text-white" : "text-slate-400"
                      }`}
                    >
                      Offline DB
                    </button>
                    <button
                      onClick={() => setActiveScreen("biometric")}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeScreen === "biometric" ? "bg-slate-800 text-white" : "text-slate-400"
                      }`}
                    >
                      Face ID
                    </button>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={triggerNotification}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs transition-transform active:scale-95 flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                  >
                    <Bell size={13} />
                    <span>Simulate Push Notification</span>
                  </button>

                </div>

                {/* Home Indicator Bar */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-4" />

              </div>

            </div>
          )}

          {/* TAB 2: CODE ARCHITECTURE */}
          {activeTab === "code" && (
            <div className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Code2 size={14} />
                  lib/offline_first_storage.dart
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1 transition-colors"
                >
                  {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedCode ? "Copied" : "Copy Source"}</span>
                </button>
              </div>
              <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300">
                <code>{sampleMobileCode}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: PERFORMANCE VITALS */}
          {activeTab === "performance" && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* 1. FPS Dial */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">60</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Frame Rate</span>
                  <span className="text-[10px] text-emerald-400 font-mono">0 Drop Frames</span>
                </div>

                {/* 2. Cold Start */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400"
                        strokeDasharray="98, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">0.4s</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Cold Start</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Sub-Second Launch</span>
                </div>

                {/* 3. Crash-Free Sessions */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="99.9, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">99.9%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Crash-Free</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Zero Memory Leaks</span>
                </div>

                {/* 4. App Store Approval */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-teal-400"
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-black text-white text-base">100%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Store Approval</span>
                  <span className="text-[10px] text-teal-400 font-mono">1st Pass Guaranteed</span>
                </div>

              </div>

              {/* Vitals Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Activity size={14} className="text-emerald-400" />
                  <span>Battery & Thermal Throttling: <strong>Minimal ({"< 2%"} per hr)</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  <span>Security: <strong>Keychain & Keystore AES-256</strong></span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

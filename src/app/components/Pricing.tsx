"use client";

import { motion } from "motion/react";
import { Check, Info, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import { LeadPopup } from "./LeadPopup";

const websitePricing = [
  {
    title: "Starter",
    badgeLabel: "Starter Scope",
    description: "Local shops, solo founders & personal brands",
    features: ["Up to 5 Pages", "Template-Based Website", "Mobile Optimisation", "Basic SEO Setup", "1 Month Support", "2 Rounds Revisions"],
    popular: false
  },
  {
    title: "Business Pro",
    badgeLabel: "Business Scope",
    description: "Growing startups, mid-market businesses & SMEs",
    features: ["Up to 15 Pages", "Custom Design", "Mobile Optimisation", "Advanced SEO Setup", "WordPress / Headless CMS Integration", "3 Months Support", "5 Rounds Revisions"],
    popular: true,
    badge: "Most Enquired"
  },
  {
    title: "Growth",
    badgeLabel: "Enterprise Scope",
    description: "Scaling companies & high-volume digital platforms",
    features: ["Up to 30 Pages", "Custom Next.js + Headless CMS", "Full Technical SEO & Schema", "E-commerce Ready", "Headless CMS Option", "6 Months Support", "Unlimited Revisions"],
    popular: false
  }
];

const marketingPricing = [
  { service: "Starter", planTier: "Starter Retainer", seo: "5 pages", keywords: "10", blog: "1/mo", social: "1 platform, 6 posts", ads: "Campaign Setup", meta: "-", report: "Basic", manager: "Shared", contract: "3 months" },
  { service: "Growth", planTier: "Growth Retainer", seo: "15 pages", keywords: "25", blog: "2/mo", social: "2 platforms, 12 posts", ads: "Active Management", meta: "-", report: "Standard", manager: "Shared", contract: "3 months" },
  { service: "Scale", planTier: "Scale Retainer", seo: "25 pages", keywords: "50", blog: "4/mo", social: "3 platforms, 18 posts", ads: "High-Intent PMax", meta: "Included", report: "Full dashboard", manager: "Dedicated", contract: "6 months" },
  { service: "Dominate", planTier: "Enterprise Retainer", seo: "Unlimited", keywords: "100+", blog: "8/mo", social: "4 platforms, 24 posts", ads: "Omnichannel Scale", meta: "Included + A/B", report: "Executive + insights", manager: "Senior strategist", contract: "6 months" },
];

const appSolutions = [
  { type: "Business / Portfolio Website", scope: "Custom Milestone Scope" },
  { type: "E-commerce (Woo / Shopify / Custom)", scope: "Full Commerce Scope" },
  { type: "Custom Web Application (Next.js / Node)", scope: "Full-Stack Application Scope" },
  { type: "Android OR iOS App (Single Native)", scope: "Mobile Engineering Scope" },
  { type: "Android + iOS App (Cross-Platform Flutter/React Native)", scope: "Cross-Platform Mobile Scope" },
  { type: "Custom CRM / ERP Automation System", scope: "Enterprise System Scope" },
  { type: "AI Chatbot / Workflow Automation", scope: "AI Integration Scope" },
  { type: "Cloud Setup & DevOps Architecture", scope: "Infrastructure Architecture Scope" }
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"website" | "marketing" | "apps">("website");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsPopupOpen(true);
  };

  return (
    <section className="py-5 md:py-15 lg:py-15 bg-slate-50 relative overflow-hidden">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        selectedPlan={selectedPlan} 
      />
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight">
            Our Service <span className="text-emerald-600">Packages</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg px-4">
            Structured deliverables, transparent milestones, and dedicated engineering tailored precisely to your business scale.
          </p>

          {/* Tabs Control - Mobile Scrollable */}
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar mb-10 pb-2 px-2">
            <div className="flex bg-white p-1 rounded-2xl shadow-lg border border-gray-100 whitespace-nowrap">
              {["website", "marketing", "apps"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 md:px-8 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeTab === tab 
                      ? "bg-emerald-600 text-white shadow-lg" 
                      : "text-gray-500 hover:text-emerald-600"
                  }`}
                >
                  {tab === "website" ? "Websites" : tab === "marketing" ? "Growth Plans" : "Apps & Software"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === "website" && (
          <>
            {/* Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
              {websitePricing.map((plan) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl p-6 md:p-10 shadow-xl border-2 transition-all duration-500 hover:scale-[1.01] ${
                    plan.popular ? "border-emerald-500 ring-4 ring-emerald-500/5" : "border-gray-100"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-1.5 rounded-full text-xs font-bold shadow-xl">
                      {plan.badge}
                    </div>
                  )}
                  
                  <div className="mb-6 md:mb-8 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm font-medium">{plan.description}</p>
                  </div>

                  <div className="mb-8 p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100 text-center relative overflow-hidden">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                      {plan.badgeLabel}
                    </span>
                    <p className="text-sm font-semibold text-gray-700 mt-2">Tailored Scope & Milestones</p>
                  </div>

                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-xs md:text-sm text-gray-600 font-medium">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-emerald-600" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleSelectPlan(`Web Design: ${plan.title}`)}
                    className={`w-full py-4 rounded-xl md:rounded-2xl font-bold transition-all shadow-md ${
                    plan.popular ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-gray-900 text-white hover:bg-black"
                  }`}>
                    Request Package Scope
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-2">
              <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between shadow-2xl">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Enterprise</h2>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold mb-6">Corporates & Scaling Systems</p>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-8 tracking-tight">Custom Scope</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-xs text-gray-300 font-medium"><Check size={16} className="text-emerald-400" /> Unlimited & Scaling Architecture</li>
                    <li className="flex gap-3 text-xs text-gray-300 font-medium"><Check size={16} className="text-emerald-400" /> Dedicated Senior Engineering Squad</li>
                    <li className="flex gap-3 text-xs text-gray-300 font-medium"><Check size={16} className="text-emerald-400" /> 24/7 Priority SLA & DevOps Support</li>
                  </ul>
                </div>
                <button 
                  onClick={() => handleSelectPlan("Enterprise Solution")}
                  className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 shadow-lg"
                >
                  Contact Sales
                </button>
              </div>

              {/* Milestones Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl flex flex-col">
                <div className="flex items-center gap-3 mb-6 text-gray-900 font-bold text-lg">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Info size={18} className="text-emerald-600" />
                  </div>
                  <h4>Milestone Structure</h4>
                </div>
                <ul className="space-y-4 text-xs md:text-sm text-gray-600 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm"></div>
                    <div><span className="text-gray-900 font-bold">Phase 1: Kickoff</span> — Architecture & Design Approval</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm"></div>
                    <div><span className="text-gray-900 font-bold">Phase 2: Core Build</span> — Frontend & CMS Integration</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm"></div>
                    <div><span className="text-gray-900 font-bold">Phase 3: QA & Launch</span> — Performance, SEO & Final Handover</div>
                  </li>
                </ul>
              </div>

              {/* Guarantees Card */}
              <div className="bg-emerald-50/20 p-8 rounded-2xl border border-emerald-100 shadow-xl flex flex-col">
                <div className="flex items-center gap-3 mb-6 text-gray-900 font-bold text-lg">
                  <div className="w-8 h-8 bg-emerald-100/50 rounded-lg flex items-center justify-center">
                    <ShieldCheck size={18} className="text-emerald-600" />
                  </div>
                  <h4>Quality & Deliverables</h4>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm flex items-center gap-3">
                    <Zap size={16} className="text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-800">100% Code Ownership</p>
                      <p className="text-[11px] text-gray-500">Full source code & repository access upon completion</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm flex items-center gap-3">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-800">No Hidden Retainers</p>
                      <p className="text-[11px] text-gray-500">Every deliverable and warranty term agreed upfront</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "marketing" && (
           <div className="max-w-7xl mx-auto space-y-4">
             {/* Desktop Table */}
             <div className="hidden md:block overflow-x-auto pb-8 px-2">
               <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                 <thead className="bg-gray-900 text-white">
                   <tr>
                      {marketingPricing.map(p => (
                        <th key={p.service} className="p-6 text-center group/th">
                          <div className="text-base font-black tracking-tight text-white mb-2">{p.service}</div>
                          <div className="inline-block px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                            <div className="text-emerald-400 text-xs font-bold">{p.planTier}</div>
                          </div>
                        </th>
                      ))}
                   </tr>
                 </thead>
                 <tbody className="text-sm font-medium">
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">SEO (Pages)</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.seo}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Keywords</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.keywords}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Blogs</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.blog}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Social Media</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.social}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Google Ads</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.ads}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Meta Ads</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.meta}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Report Type</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.report}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6 font-semibold">Min. Contract</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.contract}</td>)}</tr>
                   <tr>
                     <td className="p-4 pl-6"></td>
                     {marketingPricing.map(p => (
                       <td key={p.service} className="p-4 text-center">
                         <button 
                           onClick={() => handleSelectPlan(`Marketing Retainer: ${p.service}`)}
                           className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
                         >
                           Request Scope
                         </button>
                       </td>
                     ))}
                   </tr>
                 </tbody>
               </table>
             </div>

             {/* Mobile Cards */}
             <div className="md:hidden space-y-6 px-2">
               {marketingPricing.map((item) => (
                 <div key={item.service} className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
                   <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                     <h3 className="text-xl font-bold text-emerald-600 uppercase tracking-wider">{item.service}</h3>
                     <span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">{item.planTier}</span>
                   </div>
                   <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-gray-100">
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">SEO Audit:</span> <span className="text-gray-700">{item.seo}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Keywords:</span> <span className="text-gray-700">{item.keywords}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Content/Blog:</span> <span className="text-gray-700">{item.blog}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Social Ads:</span> <span className="text-gray-700">{item.social}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Google Ads:</span> <span className="text-gray-700">{item.ads}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Reporting:</span> <span className="text-gray-700">{item.report}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-emerald-700">Contract:</span> <span className="text-emerald-700 font-bold">{item.contract}</span></div>
                   </div>
                   <button onClick={() => handleSelectPlan(`Marketing: ${item.service}`)} className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm">Request Retainer Scope</button>
                 </div>
               ))}
             </div>
           </div>
        )}

        {activeTab === "apps" && (
           <div className="max-w-7xl mx-auto space-y-6">
             {/* Desktop Table */}
             <div className="hidden md:block overflow-x-auto pb-8 px-2">
               <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                 <thead className="bg-emerald-600 text-white text-center">
                   <tr>
                     <th className="p-6 text-left font-bold uppercase tracking-widest text-[10px]">Solution Type</th>
                     <th className="p-6 bg-emerald-700 font-bold uppercase tracking-widest text-xs text-center">Engagement Model</th>
                     <th className="p-6 bg-emerald-800 font-bold uppercase tracking-widest text-xs text-center">Action</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm text-center font-medium">
                   {appSolutions.map((row, idx) => (
                     <tr key={idx} className="border-b border-gray-50 transition-colors hover:bg-slate-50">
                       <td className="p-4 pl-6 text-left font-bold text-gray-900">{row.type}</td>
                       <td className="p-4 font-semibold text-emerald-700">{row.scope}</td>
                       <td className="p-4">
                         <button 
                           onClick={() => handleSelectPlan(`Solution: ${row.type}`)}
                           className="px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors"
                         >
                           Enquire
                         </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>

             {/* Mobile Cards (Full 8 items) */}
             <div className="md:hidden space-y-4 px-2">
               {appSolutions.map((item, idx) => (
                 <div key={idx} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex flex-col gap-3">
                   <h3 className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{item.type}</h3>
                   <div className="flex justify-between items-end">
                     <div>
                       <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Engagement Model</p>
                       <p className="text-sm font-bold text-emerald-700">{item.scope}</p>
                     </div>
                   </div>
                   <button onClick={() => handleSelectPlan(`Solution: ${item.type}`)} className="mt-2 py-3 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-200 uppercase tracking-widest">Enquire Now</button>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>
    </section>
  );
}
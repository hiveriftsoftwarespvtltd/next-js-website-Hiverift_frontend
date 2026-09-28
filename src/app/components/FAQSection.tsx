"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const searchIntentFAQs = [
  {
    question: "What does a website development company do?",
    answer: "A professional website development company designs, engineers, tests, and deploys high-performing websites and web applications. This includes bespoke UI/UX design, frontend and backend coding, mobile responsiveness, technical SEO configuration, database setup, and ongoing security maintenance."
  },
  {
    question: "How does professional website development help a business?",
    answer: "A professionally built website establishes brand credibility, ensures instant loading across all devices, ranks higher in search engines, and converts visitors into paying customers. It acts as an automated 24/7 sales and customer acquisition engine for your business."
  },
  {
    question: "Can HiveRift develop custom websites?",
    answer: "Yes. HiveRift specializes in custom website development tailored specifically to your brand identity, business workflows, and audience needs. We do not use rigid cookie-cutter templates; every interface and component is engineered for speed, conversion, and longevity."
  },
  {
    question: "Can HiveRift build an eCommerce website?",
    answer: "Absolutely. We engineer scalable eCommerce websites equipped with dynamic product catalogues, smart faceted filters, secure shopping carts, customer accounts, inventory synchronization, and frictionless checkout funnels."
  },
  {
    question: "What is included in eCommerce development?",
    answer: "Our eCommerce development includes storefront UI/UX, product catalogue setup, inventory management, multi-gateway payment processing (UPI, credit/debit cards, net banking), automated order confirmation notifications, tax and shipping rule configurations, and customer portal management."
  },
  {
    question: "Can HiveRift integrate payment gateways?",
    answer: "Yes. We integrate all leading domestic and international payment gateways including Razorpay, Stripe, Cashfree, PayPal, PayU, and instant UPI QR payments with PCI-DSS compliant encryption and automated webhook handlers."
  },
  {
    question: "Can HiveRift develop custom software?",
    answer: "Yes. Our software engineering team develops custom web applications, internal ERP and CRM solutions, customer portals, billing dashboards, and cloud-based SaaS platforms engineered with Node.js, Next.js, Python, and scalable databases."
  },
  {
    question: "Can HiveRift build mobile applications?",
    answer: "Yes. We build native iOS and Android applications, as well as high-performance cross-platform mobile apps using Flutter and React Native, delivering smooth 60 FPS performance, offline capability, and native device feature access."
  },
  {
    question: "What digital marketing services does HiveRift provide?",
    answer: "HiveRift delivers full-funnel digital marketing services including Search Engine Optimization (SEO), high-intent Google Search Ads (PPC), Meta Ads (Instagram & Facebook), local map ranking, content strategy, conversion rate optimization (CRO), and advanced analytics tracking."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes. We provide complete technical SEO audits, keyword research, on-page optimization, semantic HTML structuring, Schema.org JSON-LD structured data, Google Search Console management, and local Google Business Profile optimization to ensure sustainable organic rankings."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. We regularly help companies revamp slow, outdated websites into modern, ultra-fast, and high-converting platforms while preserving existing organic search rankings, URL structures, and customer data."
  },
  {
    question: "Can you integrate WhatsApp into a website?",
    answer: "Yes. We integrate both direct WhatsApp click-to-chat widgets and official WhatsApp Business API endpoints for automated lead capture, instant order updates, and customer support notifications."
  },
  {
    question: "Can you integrate APIs and third-party systems?",
    answer: "Yes. We integrate REST and GraphQL APIs connecting CRM platforms (Zoho, Salesforce, HubSpot), logistics aggregators (Shiprocket, Delhivery), accounting tools, payment processors, and marketing automation software."
  },
  {
    question: "How does the HiveRift project process work?",
    answer: "Our proven process follows four clear phases: 01 Discovery & Requirement Scoping, 02 Architecture & UI/UX Wireframing, 03 Agile Sprint Development with regular staging previews, and 04 Zero-Downtime Launch, SEO Indexation, and continuous support."
  },
  {
    question: "How do I start a project with HiveRift?",
    answer: "You can start by submitting our Project Enquiry form with your requirements, scheduling a direct phone call at +91 88149 30229, or messaging our team on WhatsApp. We provide a preliminary technology consultation within 24 hours."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate structured FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": searchIntentFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-12 lg:py-14 bg-gradient-to-b from-white via-[#f4fbf7] to-white text-slate-900 relative overflow-hidden border-t border-emerald-100">
      {/* Schema.org FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-300/80 rounded-full mb-3 shadow-sm">
            <span className="text-[0.8125rem] font-bold text-[#15803d] uppercase tracking-wider">
              Topical Knowledge Base
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#10b981] to-[#0ea5e9]">Questions</span>
          </h2>

          <p className="mt-3 text-[1.125rem] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto">
            Clear, authoritative answers to the most common questions about our web development, custom software, and digital marketing capabilities.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {searchIntentFAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen
                    ? "bg-[#f0fbf5] border-[#10b981] shadow-md ring-2 ring-emerald-400/20"
                    : "bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? "text-emerald-900" : "text-slate-900"
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isOpen ? "bg-emerald-500 text-white rotate-180" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-emerald-100/90 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

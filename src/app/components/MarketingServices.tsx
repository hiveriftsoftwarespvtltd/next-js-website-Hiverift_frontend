"use client";

import { motion } from "motion/react";
import { 
  Search, 
  ThumbsUp, 
  Megaphone, 
  PenTool, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const marketingServices = [
  {
    title: "SEO Services",
    description: "Rank higher on Google and get consistent organic traffic.",
    icon: Search,
    color: "bg-blue-50 text-blue-600",
    hoverColor: "group-hover:bg-blue-600",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"]
  },
  {
    title: "Social Media Marketing",
    description: "Grow your brand and engage your audience on social platforms.",
    icon: ThumbsUp,
    color: "bg-pink-50 text-pink-600",
    hoverColor: "group-hover:bg-pink-600",
    features: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Content Creation", "Community Management"]
  },
  {
    title: "Paid Advertising",
    description: "Get instant leads and sales with high-converting ads.",
    icon: Megaphone,
    color: "bg-orange-50 text-orange-600",
    hoverColor: "group-hover:bg-orange-600",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Retargeting Ads", "Performance Tracking"]
  },
  {
    title: "Content Marketing",
    description: "Attract, engage, and convert your audience with content.",
    icon: PenTool,
    color: "bg-emerald-50 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-600",
    features: ["Blog Writing", "Website Content", "SEO Content", "Content Strategy", "Copywriting"]
  }
];

export function MarketingServices() {
  return (
    <section className="py-8 lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-8 sm:w-12 bg-emerald-200"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">Our Digital Marketing Services</h2>
            <div className="h-px w-8 sm:w-12 bg-emerald-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingServices.map((service, i) => (
            <div key={i} className="group bg-white border border-gray-100 p-5 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center ${service.hoverColor} group-hover:text-white transition-all duration-300`}>
                  <service.icon size={24} />
                </div>
              </div>
              
              <h3 className="text-lg font-black text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services" className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

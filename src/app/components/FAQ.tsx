"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { createFAQSchema } from "@/app/config/schema";

const faqs = [
  {
    question: "Is the website really free?",
    answer: "Yes, we offer a free high-converting website with our selected digital marketing plans. Our goal is to help you build a strong online presence from day one."
  },
  {
    question: "Will I own the website?",
    answer: "Absolutely! You will have 100% ownership of the website, domain, and content. We believe in transparency and empowering our clients."
  },
  {
    question: "How long does SEO take to work?",
    answer: "SEO is a long-term strategy. Typically, it takes 3-6 months to see significant results, though some improvements can be seen much sooner depending on competition."
  },
  {
    question: "Can I get leads quickly?",
    answer: "Yes! While SEO takes time, we use paid advertising (Google & Meta Ads) to generate targeted leads and sales within the first few days of your campaign."
  },
  {
    question: "What do I need to get started?",
    answer: "We just need basic information about your business, your goals, and any existing brand assets. Our team will handle the rest of the research and execution."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we specialize in helping startups and small-to-medium enterprises (SMEs) scale their business with result-driven digital strategies."
  }
];

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const displayFaqs = items || faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqSchema = createFAQSchema(displayFaqs);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {displayFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`border-2 transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === index ? "border-emerald-600 bg-emerald-50/20" : "border-gray-100 bg-white hover:border-emerald-200"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className={`text-base font-black transition-colors ${openIndex === index ? "text-emerald-700" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-emerald-600 text-white rotate-180" : "bg-gray-50 text-emerald-600"
                    }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <div className="px-6 pb-6 text-sm font-bold text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Phone, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { openEnquiryModal } from "./EnquiryModal";

export function MobileStickyBar() {
  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t-2 border-emerald-300 p-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2">
        {/* Call CTA */}
        <a
          href="tel:+918814930229"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0284c7] text-white active:scale-95 transition-transform shadow-md"
          aria-label="Call HiveRift"
        >
          <Phone size={16} className="text-white mb-0.5" />
          <span className="text-[10px] font-bold font-mono">Call Us</span>
        </a>

        {/* Popup Form Trigger CTA (Replacing WhatsApp CTA) */}
        <button
          onClick={openEnquiryModal}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#10b981] text-white active:scale-95 transition-transform shadow-md cursor-pointer"
          aria-label="Get Free Consultation"
        >
          <Calendar size={16} className="text-white mb-0.5" />
          <span className="text-[10px] font-bold font-mono">Consultation</span>
        </button>

        {/* Start Project Primary CTA */}
        <Link
          href="#enquiry"
          onClick={scrollToEnquiry}
          className="flex-[2] flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-black text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition-transform"
        >
          <span>Start Project</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

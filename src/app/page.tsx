import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { TrustStrip } from "@/app/components/TrustStrip";
import { CoreMastery } from "@/app/components/CoreMastery";
import { TechStack } from "@/app/components/TechStack";
import { ChallengesSolutions } from "@/app/components/ChallengesSolutions";
import { WhyHiveRift } from "@/app/components/WhyHiveRift";
import { DelhiNcrNetworkShowcase } from "@/app/components/DelhiNcrNetworkShowcase";
import { WorkProcess } from "@/app/components/WorkProcess";
import { IndustriesShowcase } from "@/app/components/IndustriesShowcase";
import { SelectedWork } from "@/app/components/SelectedWork";
import { CompanyResults } from "@/app/components/CompanyResults";
import { GoogleReviews } from "@/app/components/GoogleReviews";
import { ProjectEnquiry } from "@/app/components/ProjectEnquiry";
import { FAQSection } from "@/app/components/FAQSection";
import { FinalCTA } from "@/app/components/FinalCTA";
import { Footer } from "@/app/components/Footer";
import { MobileStickyBar } from "@/app/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Website Development Company in Delhi NCR | HiveRift",
  description: "Professional web design, apps, SEO, and software services in Delhi NCR for growth-focused brands.",
  alternates: {
    canonical: "https://hiverift.com",
  },
  openGraph: {
    title: "Web Development & Website Design Company in Delhi NCR | HiveRift",
    description:
      "Top web development company in Delhi NCR. We build fast custom websites, eCommerce stores, and mobile apps that drive leads and real business growth.",
    url: "https://hiverift.com",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* 1 & 2. Top Contact Bar + Header */}
      <Header />

      {/* 3. Hero — SEO Foundation + Technology Ecosystem Animation */}
      <Hero />

      {/* 4. Trust / Service Signals Strip */}
      <TrustStrip />

      {/* 5. Core Mastery: Website Development, eCommerce Development, Digital Marketing (Build, Sell, Grow) */}
      <CoreMastery />

      {/* 6. Technology Stack System */}
      <TechStack />

      {/* 7. Digital Challenges → Solutions */}
      <ChallengesSolutions />

      {/* 8. Why Businesses Choose HiveRift */}
      <WhyHiveRift />

      {/* 9. Delhi NCR Connected Engineering Network & Highlighted Map */}
      <DelhiNcrNetworkShowcase />

      {/* 10. How We Work (Animated 4-Step Timeline) */}
      <WorkProcess />

      {/* 10. Industries We Serve */}
      <IndustriesShowcase />

      {/* 11. Selected Work / Case Studies */}
      <SelectedWork />

      {/* 12. Company Results / Verified Metrics */}
      <CompanyResults />

      {/* 13. Google Reviews */}
      <GoogleReviews />

      {/* 14. Project Enquiry Form */}
      <ProjectEnquiry />

      {/* 20. FAQ — SEO Knowledge Base */}
      <FAQSection />

      {/* 21. Final High-Conversion CTA */}
      <FinalCTA />

      {/* 22. Footer */}
      <Footer />

      {/* Mobile Persistent Quick Actions */}
      <MobileStickyBar />

    </div>
  );
}
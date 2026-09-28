import { Metadata } from "next";
import LandingContactContent from "./LandingContactContent";

export const metadata: Metadata = {
  title: "Get a Custom Project Quote & Free Technical Consultation | HiveRift",
  description: "Request an accurate project estimate for Next.js web development, mobile apps, headless eCommerce, custom software, or AI automation. Fixed-price milestones and 24-hour turnaround.",
  keywords: [
    "hire web developers",
    "custom software development quote",
    "Next.js agency estimate",
    "mobile app development pricing",
    "headless eCommerce developers",
    "AI automation consultation",
    "software engineering agency quote"
  ],
};

export default function LandingContactPage() {
  return <LandingContactContent />;
}

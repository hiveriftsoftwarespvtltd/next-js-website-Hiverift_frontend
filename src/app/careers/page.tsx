import { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at HiveRift | Join Our Senior Engineering & Digital Team",
  description:
    "Build the future of digital engineering. Explore career opportunities at HiveRift for Full-Stack Next.js Developers, UI/UX Designers, and Digital Growth Specialists.",
  keywords: [
    "careers at HiveRift",
    "web developer jobs New Delhi",
    "Next.js developer openings",
    "full-stack software engineer jobs India",
    "UI UX designer careers",
    "digital marketing specialist jobs"
  ],
  openGraph: {
    title: "Careers at HiveRift | Join Our Senior Engineering & Digital Team",
    description:
      "Join an ambitious agency engineering high-performance web applications, scalable eCommerce, and AI solutions for global clients.",
    url: "https://hiverift.com/careers",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/careers",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}

import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact HiveRift | Project Quote & Consultation",
  description: "Request a custom quote for websites, apps, software, and digital growth in Delhi NCR.",
  keywords: [
    "contact HiveRift",
    "request web development quote",
    "hire Next.js developers",
    "hire custom software engineers India",
    "eCommerce development consultation",
    "project proposal HiveRift",
    "digital agency New Delhi contact"
  ],
  openGraph: {
    title: "Contact HiveRift | Request a Free Fixed-Price Project Quote",
    description:
      "Share your project requirements with HiveRift and discuss a practical technical approach with our team.",
    url: "https://hiverift.com/contact",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

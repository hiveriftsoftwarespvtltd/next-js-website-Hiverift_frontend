import { Metadata } from "next";
import AIMLContent from "./AIMLContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "AI & Machine Learning Company in Delhi NCR | HiveRift",
  description: "Custom AI agents, LLM integrations, and automation systems to reduce manual work and boost efficiency.",
  keywords: [
    "AI development company",
    "custom AI agents development",
    "LLM integration services",
    "machine learning consulting company",
    "enterprise AI automation solutions",
    "NLP natural language processing services",
    "AI engineers India"
  ],
  openGraph: {
    title: "Custom AI & Machine Learning Solutions | LLMs & Automation | HiveRift",
    description:
      "Transform business data into automated workflows and predictive intelligence with custom AI agents and machine learning engineering.",
    url: "https://hiverift.com/services/ai-ml",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/ai-ml",
  },
};

export default function AIMLPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI & Machine Learning", url: "/services/ai-ml" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AIMLContent />
    </>
  );
}
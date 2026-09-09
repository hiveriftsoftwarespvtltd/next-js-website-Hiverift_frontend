import { Metadata } from "next";
import AIMLContent from "./AIMLContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions | Enterprise Intelligence | HiveRift",
  description: "Transform your business with our AI and Machine Learning services. We build predictive models, computer vision, and NLP solutions for real ROI.",
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
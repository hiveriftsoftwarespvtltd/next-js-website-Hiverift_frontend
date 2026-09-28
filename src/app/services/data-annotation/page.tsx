import { Metadata } from "next";
import DataContent from "./DataContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Data Annotation Services for AI Training | HiveRift",
  description: "High-quality AI data labeling, computer vision tagging, and NLP annotation services for training models.",
  keywords: [
    "data annotation services",
    "AI training data labeling company",
    "computer vision image annotation",
    "NLP text classification services",
    "semantic segmentation data labeling",
    "audio speech transcription for AI",
    "human in the loop data annotation India"
  ],
  openGraph: {
    title: "Precision Data Annotation & AI Labeling Services | HiveRift",
    description:
      "Enterprise training data labeling with 99.5%+ verified quality benchmarks. Powering computer vision, NLP, and multimodal AI models.",
    url: "https://hiverift.com/services/data-annotation",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://hiverift.com/services/data-annotation",
  },
};

export default function DataAnnotationPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Data Annotation", url: "/services/data-annotation" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DataContent />
    </>
  );
}
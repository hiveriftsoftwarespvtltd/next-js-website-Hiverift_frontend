import { Metadata } from "next";
import DataContent from "./DataContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Precision Data Annotation Services | HiveRift",
  description: "High-accuracy data labeling for AI and Machine Learning. We provide bounding boxes, semantic segmentation, text tagging, and audio transcription.",
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
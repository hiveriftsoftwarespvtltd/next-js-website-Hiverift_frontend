import { Metadata } from "next";
import BlogContent from "./BlogContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Blog | Insights, Ideas & Real Talk | HiveRift",
  description: "Practical advice and insights for businesses navigating websites, digital marketing, mobile apps, and technology, written by the HiveRift team.",
};

export default function BlogPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogContent />
    </>
  );
}


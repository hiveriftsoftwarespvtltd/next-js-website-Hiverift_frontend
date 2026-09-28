import { Metadata } from "next";
import BlogContent from "./BlogContent";
import { createBreadcrumbSchema } from "@/app/config/schema";

export const metadata: Metadata = {
  title: "Engineering Insights, Architecture & Growth Playbooks | HiveRift",
  description: "Technical SEO, Next.js, eCommerce, AI, and app architecture insights from HiveRift's engineering team.",
  keywords: [
    "software engineering blog",
    "Next.js 15 tutorials",
    "headless eCommerce architecture",
    "React Native development",
    "Flutter app guide",
    "technical SEO best practices",
    "enterprise AI automation",
    "custom software development insights",
    "HiveRift tech blog"
  ],
  alternates: {
    canonical: "https://hiverift.com/blog",
  },
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


import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hiverift.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/mobile-development",
    "/services/ai-ml",
    "/services/data-annotation",
    "/services/cloud-devops",
    "/services/digital-marketing",
    "/services/software-development",
    "/services/ui-ux",
    "/services/ecommerce",
    "/blog",
    "/case-studies",
    "/careers",
    "/contact",
    "/pricing",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

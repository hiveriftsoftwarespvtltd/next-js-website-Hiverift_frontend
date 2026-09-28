import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/data/blogData";
import { FULL_INDUSTRIES_DATA } from "@/app/data/industryDetailsFull";
import { getAllIndustryKeywordParams } from "@/app/data/industryKeywordsData";
import { LOCATIONS_DATA } from "@/app/data/locationsData";
import { portfolioProjects } from "@/app/data/portfolioProjects";
import { quickAnswers } from "@/app/data/quickAnswers";
import { getAllRealEstateKeywordSlugs } from "@/app/data/realEstateKeywordsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/mobile-development",
    "/services/ecommerce",
    "/services/software-development",
    "/services/ui-ux",
    "/services/ai-ml",
    "/services/cloud-devops",
    "/services/data-annotation",
    "/services/digital-marketing",
    "/solutions",
    "/industries",
    "/industries/real-estate",
    "/case-studies",
    "/careers",
    "/contact",
    "/landing-contact",
    "/locations",
    "/pricing",
    "/privacy",
    "/terms",
    "/thank-you",
    "/blog",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : [
      "/services",
      "/industries",
      "/industries/real-estate",
      "/locations",
      "/blog",
      "/case-studies",
      "/contact",
      "/solutions",
      "/pricing",
      "/landing-contact",
    ].includes(route)
      ? 0.9
      : 0.8,
  }));

  const industryLandingEntries: MetadataRoute.Sitemap = Object.keys(FULL_INDUSTRIES_DATA)
    .filter((industryId) => industryId !== "real-estate")
    .map((industryId) => ({
      url: `${baseUrl}/industries/${industryId}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  const locationEntries: MetadataRoute.Sitemap = LOCATIONS_DATA.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const realEstateEntries: MetadataRoute.Sitemap = getAllRealEstateKeywordSlugs().map((slug) => ({
    url: `${baseUrl}/industries/real-estate/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const industryKeywordEntries: MetadataRoute.Sitemap = getAllIndustryKeywordParams().map(({ industryId, slug }) => ({
    url: `${baseUrl}/industries/${industryId}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${baseUrl}/case-studies/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const quickAnswerEntries: MetadataRoute.Sitemap = quickAnswers.map((answer) => ({
    url: `${baseUrl}/q/${answer.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...industryLandingEntries,
    ...locationEntries,
    ...realEstateEntries,
    ...industryKeywordEntries,
    ...caseStudyEntries,
    ...blogEntries,
    ...quickAnswerEntries,
  ];
}

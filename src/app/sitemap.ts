import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hiverift.com";

  // All public indexable routes
  const routes = [
    "",
    "/services",
    "/services/web-development",
    "/services/mobile-development",
    "/services/software-development",
    "/services/ai-ml",
    "/services/cloud-devops",
    "/services/ui-ux",
    "/services/digital-marketing",
    "/services/ecommerce",
    "/services/data-annotation",
    "/about",
    "/contact",
    "/careers",
    "/pricing",
    "/case-studies",
    "/blog",
    "/industries",
    "/solutions",
    "/privacy",
    "/terms",
    "/q/what-is-digital-marketing",
    "/q/why-website-important",
    "/q/how-can-we-help",
    "/q/results-timeline",
  ];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/services")) {
      priority = 0.9;
    } else if (route === "/contact" || route === "/about" || route === "/pricing") {
      priority = 0.8;
    } else if (route === "/terms" || route === "/privacy") {
      priority = 0.3;
      changeFrequency = "yearly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}

import { FULL_INDUSTRIES_DATA } from "./industryDetailsFull";
import { REAL_ESTATE_KEYWORDS_LIST, slugifyKeyword as slugifyRealEstate } from "./realEstateKeywordsData";
import { slugifyKeyword as slugifyIndustry } from "./industryKeywordsData";
import { LOCATIONS_DATA } from "./locationsData";

export interface GlobalSearchItem {
  id: string;
  title: string;
  category: "Keyword" | "Industry" | "Service" | "Location";
  badge: string;
  url: string;
  description: string;
}

const STATIC_SERVICES: { title: string; url: string; badge: string; description: string }[] = [
  {
    title: "Website Development",
    url: "/services/web-development",
    badge: "Core Service",
    description: "High-performance Next.js websites, corporate portals & web apps."
  },
  {
    title: "eCommerce Development",
    url: "/services/ecommerce",
    badge: "Core Service",
    description: "Shopify, WooCommerce & custom headless eCommerce stores."
  },
  {
    title: "Software & ERP Development",
    url: "/services/software-development",
    badge: "Core Service",
    description: "Custom ERPs, CRM systems, business automation & cloud software."
  },
  {
    title: "Mobile App Development",
    url: "/services/mobile-development",
    badge: "Core Service",
    description: "iOS & Android mobile apps built with React Native and Flutter."
  },
  {
    title: "AI & Machine Learning",
    url: "/services/ai-ml",
    badge: "Core Service",
    description: "AI agents, LLM integrations, predictive models & computer vision."
  },
  {
    title: "Cloud & DevOps Engineering",
    url: "/services/cloud-devops",
    badge: "Core Service",
    description: "AWS cloud architecture, Docker containers, CI/CD pipelines & SRE."
  },
  {
    title: "Digital Marketing & SEO",
    url: "/services/digital-marketing",
    badge: "Growth Marketing",
    description: "High-intent Google Ads, local SEO 3-pack & conversion optimization."
  },
  {
    title: "UI/UX & Product Design",
    url: "/services/ui-ux",
    badge: "Design",
    description: "User research, wireframing, Figma design systems & usability testing."
  },
  {
    title: "Data Annotation & Labeling",
    url: "/services/data-annotation",
    badge: "AI Infrastructure",
    description: "High-precision image, video, audio, and text datasets for AI models."
  }
];

// Build unified master search index
export function getAllSearchItems(): GlobalSearchItem[] {
  const items: GlobalSearchItem[] = [];

  // 1. Services
  for (const s of STATIC_SERVICES) {
    items.push({
      id: `service-${s.url}`,
      title: s.title,
      category: "Service",
      badge: s.badge,
      url: s.url,
      description: s.description
    });
  }

  // 2. Industries
  for (const [id, ind] of Object.entries(FULL_INDUSTRIES_DATA)) {
    items.push({
      id: `industry-${id}`,
      title: `${ind.title} Solutions`,
      category: "Industry",
      badge: ind.badge,
      url: id === "real-estate" ? "/industries/real-estate" : `/industries/${id}`,
      description: ind.description
    });
  }

  // 3. Real Estate Keywords
  for (const kw of REAL_ESTATE_KEYWORDS_LIST) {
    const slug = slugifyRealEstate(kw);
    items.push({
      id: `kw-re-${slug}`,
      title: kw,
      category: "Keyword",
      badge: "Real Estate Tech",
      url: `/industries/real-estate/${slug}`,
      description: `Dedicated technology solutions and web platforms for ${kw}.`
    });
  }

  // 4. All Other Industry Keywords
  for (const [indId, ind] of Object.entries(FULL_INDUSTRIES_DATA)) {
    if (indId === "real-estate") continue;
    for (const kw of ind.searchTerms) {
      const slug = slugifyIndustry(kw);
      items.push({
        id: `kw-${indId}-${slug}`,
        title: kw,
        category: "Keyword",
        badge: ind.title,
        url: `/industries/${indId}/${slug}`,
        description: `Dedicated technology solutions and web development for ${kw}.`
      });
    }
  }

  // 5. Locations
  for (const loc of LOCATIONS_DATA) {
    items.push({
      id: `loc-${loc.slug}`,
      title: loc.keyword,
      category: "Location",
      badge: loc.region,
      url: `/locations/${loc.slug}`,
      description: loc.metaDescription || `Local software and web engineering hub in ${loc.district}.`
    });
  }

  return items;
}

// Cached items for quick synchronous access
let cachedSearchItems: GlobalSearchItem[] | null = null;

export function getCachedSearchItems(): GlobalSearchItem[] {
  if (!cachedSearchItems) {
    cachedSearchItems = getAllSearchItems();
  }
  return cachedSearchItems;
}

export function searchGlobal(query: string): GlobalSearchItem[] {
  const all = getCachedSearchItems();
  const q = query.trim().toLowerCase();
  if (!q) {
    // Return curated recommendations
    return all.filter((item) =>
      item.category === "Service" ||
      item.title.includes("FinTech Website") ||
      item.title.includes("Real Estate Website") ||
      item.title.includes("SaaS Website") ||
      item.title.includes("Restaurant Website") ||
      item.title.includes("Consulting Firm")
    ).slice(0, 12);
  }

  // Split query terms for multi-word fuzzy matching
  const words = q.split(/\s+/).filter(Boolean);

  return all
    .filter((item) => {
      const titleLower = item.title.toLowerCase();
      const badgeLower = item.badge.toLowerCase();
      const descLower = item.description.toLowerCase();
      const catLower = item.category.toLowerCase();

      return words.every(
        (word) =>
          titleLower.includes(word) ||
          badgeLower.includes(word) ||
          descLower.includes(word) ||
          catLower.includes(word)
      );
    })
    .slice(0, 24);
}

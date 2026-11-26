import { Metadata } from "next";
import { blogPosts } from "@/app/data/blogData";
import BlogDetailContent from "./BlogDetailContent";
import { createArticleSchema, createBreadcrumbSchema } from "@/app/config/schema";
import { getBlogByIdFromApi } from "@/app/actions/adminActions";

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  let post = blogPosts.find((p) => p.id === Number(id) || String(p.id) === String(id) || p.slug === id);
  if (!post) {
    post = (await getBlogByIdFromApi(id)) || undefined;
  }

  if (!post) {
    return {
      title: "Article Details | HiveRift Blog",
      description: "Read latest articles and insights on HiveRift Blog.",
    };
  }

  const metaTitle = post.seo?.metaTitle || `${post.title} | HiveRift Blog`;
  const metaDescription = post.seo?.metaDescription || post.desc;
  const canonicalUrl = post.seo?.canonicalUrl || `https://hiverift.com/blog/${post.slug || post.id}`;
  const ogTitle = post.seo?.ogTitle || post.title;
  const ogDescription = post.seo?.ogDescription || post.desc;
  const ogImage = post.seo?.ogImage || post.image;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo?.focusKeyword ? [post.seo.focusKeyword, post.category, "HiveRift"] : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: "HiveRift",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  let post = blogPosts.find((p) => p.id === Number(id) || String(p.id) === String(id) || p.slug === id);
  if (!post) {
    post = (await getBlogByIdFromApi(id)) || undefined;
  }

  const initialPost = post || {
    id: id,
    title: "Loading Article...",
    category: "Insights",
    date: "Recent",
    readTime: "5 min read",
    author: "HiveRift Team",
    authorRole: "Tech Insights",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    desc: "Fetching article content from HiveRift backend...",
    content: {
      intro: "Loading full article details...",
      keyTakeaways: ["HiveRift Engineering", "Scalable Digital Solutions"],
      sections: [{ heading: "Overview", text: "Loading article body..." }],
      quote: "Delivering innovative digital solutions worldwide.",
      conclusion: "Thank you for reading HiveRift insights."
    }
  };

  const articleSchema = post
    ? createArticleSchema({
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.desc,
        url: `/blog/${post.slug || post.id}`,
        image: post.image,
        datePublished: post.date,
        authorName: post.author,
      })
    : null;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post ? post.title : "Article", url: `/blog/${post?.slug || id}` },
  ]);

  const allFaqs = post?.faqs?.length ? post.faqs : (post?.content?.faqs?.length ? post.content.faqs : []);
  const faqSchema = allFaqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  const jsonLdData = [
    ...(articleSchema ? [articleSchema] : []),
    breadcrumbSchema,
    ...(faqSchema ? [faqSchema] : [])
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <BlogDetailContent post={initialPost as any} />
    </>
  );
}


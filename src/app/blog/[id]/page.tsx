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
  let post = blogPosts.find((p) => p.id === Number(id) || String(p.id) === String(id));
  if (!post) {
    post = (await getBlogByIdFromApi(id)) || undefined;
  }

  return {
    title: post ? `${post.title} | HiveRift Blog` : "Article Details | HiveRift Blog",
    description: post ? post.desc : "Read latest articles and insights on HiveRift Blog.",
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  let post = blogPosts.find((p) => p.id === Number(id) || String(p.id) === String(id));
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
        title: post.title,
        description: post.desc,
        url: `/blog/${post.id}`,
        image: post.image,
        datePublished: post.date,
        authorName: post.author,
      })
    : null;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post ? post.title : "Article", url: `/blog/${id}` },
  ]);

  const jsonLdData = articleSchema ? [articleSchema, breadcrumbSchema] : [breadcrumbSchema];

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


import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: 상수로 관리
  const baseUrl = "https://notion-blog-nextjs.vercel.app";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ] as const;

  // TODO: Fix pageSize
  const { posts } = await getPublishedPosts({ pageSize: 9999 });

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.modifiedDate ? new Date(post.modifiedDate) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}

import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { cityPages } from "@/data/city-pages";

const BASE_URL = "https://studiokt.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cityPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...cityRoutes, ...blogRoutes];
}

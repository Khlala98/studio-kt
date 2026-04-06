"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import {
  type BlogPost,
  type BlogCategory,
  BLOG_CATEGORIES,
  formatDate,
} from "@/data/blog-posts";

type Filter = "Tous" | BlogCategory;

const FILTERS: Filter[] = ["Tous", ...BLOG_CATEGORIES];

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<Filter>("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  return (
    <>
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrer les articles par catégorie"
      >
        {FILTERS.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              role="tab"
              aria-selected={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-gold bg-gold text-navy"
                  : "border-border bg-white text-text-muted hover:border-gold hover:text-navy"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col p-6"
        aria-label={`Lire l'article : ${post.title}`}
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-xs font-semibold text-gold">
            {post.category}
          </span>
        </div>

        <h2 className="font-playfair text-xl font-bold text-navy transition-colors group-hover:text-gold md:text-2xl">
          {post.title}
        </h2>

        <p className="mt-3 flex-1 text-sm text-text-muted leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-4 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-gold" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold" />
            {post.readingTime} min
          </span>
        </div>

        <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
          Lire l&apos;article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  );
}

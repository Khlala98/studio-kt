import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Calendar, Clock, ChevronRight, MessageCircle, Mail } from "lucide-react";
import {
  blogPosts,
  getPostBySlug,
  getAllSlugs,
  formatDate,
  type ContentBlock,
} from "@/data/blog-posts";
import { siteConfig } from "@/data/site-config";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article introuvable — Studio KT",
    };
  }

  const url = `https://studiokt.fr/blog/${post.slug}`;

  return {
    title: `${post.title} — Studio KT`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.date,
      siteName: "Studio KT",
      locale: "fr_FR",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `https://studiokt.fr/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: "https://studiokt.fr",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: "https://studiokt.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://studiokt.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
  };

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <article className="bg-bg-main px-4 py-24 md:px-6 md:py-32">
      <Script
        id={`blogposting-jsonld-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="mb-8 flex flex-wrap items-center gap-1 text-xs text-text-muted"
        >
          <Link href="/" className="hover:text-gold">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-gold">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-navy" aria-current="page">
            {post.title}
          </span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-xs font-semibold text-gold">
            {post.category}
          </span>
          <h1 className="mt-4 font-playfair text-3xl font-bold text-navy md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" />
              {post.readingTime} min de lecture
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-5">
          {post.content.map((block, i) => (
            <ContentBlockRenderer key={i} block={block} />
          ))}
        </div>

        {/* CTA */}
        <CTA />

        {/* Related */}
        {related.length > 0 && (
          <aside className="mt-16">
            <h2 className="mb-6 font-playfair text-2xl font-bold text-navy">
              À lire aussi
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                >
                  <span className="text-xs font-semibold text-gold">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-playfair text-lg font-bold text-navy group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-10 font-playfair text-2xl font-bold text-navy md:text-3xl">
        {block.text}
      </h2>
    );
  }

  if (block.type === "ul" && block.items) {
    return (
      <ul className="ml-5 list-disc space-y-2 text-base text-text-muted leading-relaxed">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-base text-text-muted leading-relaxed md:text-lg">
      {block.text}
    </p>
  );
}

function CTA() {
  return (
    <div className="mt-16 overflow-hidden rounded-2xl border border-border-dark bg-navy p-8 md:p-10">
      <h2 className="font-playfair text-2xl font-bold text-white md:text-3xl">
        Besoin d&apos;un site ?
      </h2>
      <p className="mt-3 text-base text-text-light leading-relaxed">
        Studio KT conçoit votre site internet professionnel en cinq jours, sans
        abonnement, à partir de 499 €. Devis gratuit sous 48 heures.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-all duration-300 hover:bg-gold-light hover:shadow-lg"
          data-track="blog_cta_contact"
        >
          <Mail className="h-4 w-4" />
          Demander un devis
        </Link>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gold px-6 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
          data-track="blog_cta_whatsapp"
        >
          <MessageCircle className="h-4 w-4" />
          Discuter sur WhatsApp
        </a>
      </div>
    </div>
  );
}

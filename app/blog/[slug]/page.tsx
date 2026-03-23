import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  ChevronRight,
  Clock,
  User,
  Calendar,
  BookOpen,
} from "lucide-react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blog-posts";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${business.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      url: `${business.domain}/blog/${post.slug}`,
      images: [
        {
          url: `${business.domain}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
  };
}

function renderContent(content: string) {
  const parts = content.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <Link
          key={i}
          href={linkMatch[2]}
          className="text-[#E31837] font-semibold hover:underline"
        >
          {linkMatch[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function CTABox() {
  return (
    <div className="my-10 border-l-4 border-[#E31837] bg-[#E31837]/5 p-6 rounded-lg">
      <p className="font-heading text-xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-3">
        Book Your $49 Assessment
      </p>
      <p className="font-body text-[#64748b] text-sm mb-5">
        Credit applied toward your project. ESA licensed. No obligation.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${business.phoneFull}`}
          className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#C21430] transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          Call {business.phone}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1C1C1E] px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors text-sm"
        >
          Book Your $49 Assessment
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.relatedPosts);
  const relatedServiceData = post.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${business.domain}${post.featuredImage}`,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorCredential,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${business.domain}/logo.svg`,
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${business.domain}/blog/${post.slug}`,
    },
    wordCount: post.sections.reduce(
      (acc, s) => acc + s.content.split(/\s+/).length,
      0
    ),
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema,
          faqSchema(post.faqs),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-[#1C1C1E] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E31837] line-clamp-1">
              {post.title}
            </span>
          </nav>

          {/* Category badge */}
          <span className="eyebrow-label mb-6">
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm font-body">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E31837]/10 border border-[#E31837]/20">
              <User className="w-4 h-4 text-[#E31837]" />
              <span className="text-white">
                {post.author}, {post.authorCredential}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative w-full max-w-4xl mx-auto -mt-1">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <article className="lg:col-span-2">
            {post.sections.map((section, index) => (
              <div key={index}>
                <div className="mb-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-black text-[#1C1C1E] uppercase tracking-tight mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="font-body text-[#6B7280] leading-[1.85] text-base md:text-lg"
                      >
                        {renderContent(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA box after intro (index 0), mid-article, and before last */}
                {(index === 0 ||
                  index === Math.floor(post.sections.length / 2) ||
                  index === post.sections.length - 2) &&
                  index < post.sections.length - 1 && <CTABox />}
              </div>
            ))}

            {/* FAQ Section */}
            {post.faqs.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h2 className="font-heading text-2xl md:text-3xl font-black text-[#1C1C1E] uppercase tracking-tight mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="card-premium p-6"
                    >
                      <h3 className="font-heading text-lg font-bold text-[#1C1C1E] mb-2">
                        {faq.question}
                      </h3>
                      <p className="font-body text-[#6B7280] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Final CTA */}
            <CTABox />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Services Widget */}
              {relatedServiceData.length > 0 && (
                <div className="card-premium p-6">
                  <h3 className="text-lg font-bold text-[#1C1C1E] mb-4 font-heading uppercase tracking-tight">
                    Related Services
                  </h3>
                  <ul className="space-y-3">
                    {relatedServiceData.map((svc) =>
                      svc ? (
                        <li key={svc.slug}>
                          <Link
                            href={`/services/${svc.slug}`}
                            className="flex items-center gap-2 text-[#6B7280] hover:text-[#E31837] transition-colors text-sm font-medium"
                          >
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                            {svc.title}
                          </Link>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              )}

              {/* Emergency CTA */}
              <div className="bg-[#1C1C1E] rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Need Help Now?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  24/7 emergency electrical service across the GTA.
                </p>
                <a
                  href={`tel:${business.phoneFull}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#E31837] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#C21430] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {business.phone}
                </a>
                <p className="text-gray-500 text-xs mt-3">
                  ESA License {business.esaLicense}
                </p>
              </div>

              {/* Table of Contents */}
              <div className="card-premium p-6">
                <h3 className="text-lg font-bold text-[#1C1C1E] mb-4 font-heading uppercase tracking-tight">
                  In This Article
                </h3>
                <ul className="space-y-2">
                  {post.sections.map((section, index) => (
                    <li key={index}>
                      <span className="text-[#6B7280] text-sm leading-snug block">
                        {section.heading}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-[#1C1C1E] uppercase tracking-tight text-center mb-10">
              Related
              <br />
              <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
                Articles
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block card-premium p-0 overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.featuredImage}
                      alt={related.featuredImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E31837]/10 text-[#E31837] border border-[#E31837]/20 backdrop-blur-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-[#1C1C1E] mb-2 group-hover:text-[#E31837] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="font-body text-[#9CA3AF] text-sm line-clamp-2 mb-3">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                      <span>{related.readTime} min read</span>
                      <span className="text-[#E31837] font-semibold group-hover:underline flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

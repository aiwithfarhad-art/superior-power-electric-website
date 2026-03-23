import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Clock,
  BookOpen,
  ChevronRight,
  Shield,
} from "lucide-react";
import { business } from "@/data/business";
import {
  blogPosts,
  blogCategories,
  getBlogPostsByCategory,
} from "@/data/blog-posts";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Tips & Guides for Brampton Homeowners | Superior Power Electric",
  description:
    "Expert electrical tips, cost guides, and safety advice for Ontario homeowners. Panel upgrades, pot lights, EV chargers, and more from ESA licensed electricians.",
  alternates: {
    canonical: `${business.domain}/blog`,
  },
  openGraph: {
    title: "Electrical Tips & Guides for Brampton Homeowners | Superior Power Electric",
    description:
      "Expert electrical tips, cost guides, and safety advice for Ontario homeowners. Panel upgrades, pot lights, EV chargers, and more from ESA licensed electricians.",
    url: `${business.domain}/blog`,
    siteName: business.name,
    type: "website",
    locale: "en_CA",
  },
};

export default function BlogIndexPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Superior Power Electric Blog",
    description:
      "Expert electrical tips, cost guides, and safety advice for Ontario homeowners.",
    url: `${business.domain}/blog`,
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.domain,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${business.domain}/blog/${post.slug}`,
      datePublished: post.publishedDate,
      author: {
        "@type": "Person",
        name: post.author,
      },
    })),
  };

  // Featured post is the first one (highest conversion intent)
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  // Get categories that have posts
  const activeCategories = blogCategories.filter(
    (cat) => getBlogPostsByCategory(cat).length > 0
  );

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-[#1C1C1E] pt-32 pb-20 overflow-hidden">
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <nav
            className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E31837]">Blog</span>
          </nav>

          <span className="eyebrow-label mb-6">
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            Expert Electrical Guides
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
            Electrical Tips & Guides
            <br />
            <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
              for Brampton Homeowners
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Honest advice from ESA-licensed electricians. Cost guides, safety
            tips, and everything you need to know about your home&apos;s
            electrical system.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group card-premium p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featuredPost.featuredImage}
                alt={featuredPost.featuredImageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#E31837] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E31837]/10 text-[#E31837] border border-[#E31837]/20 mb-4">
                {featuredPost.category}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-black text-[#1C1C1E] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#E31837] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="font-body text-[#6B7280] leading-relaxed mb-4">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#9CA3AF] mb-6">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime} min read
                </span>
                <span>
                  By {featuredPost.author}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-[#E31837] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Read Full Guide
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts by Category */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              {activeCategories.map((category) => {
                const categoryPosts = getBlogPostsByCategory(category);
                return (
                  <div key={category} className="mb-12 last:mb-0">
                    <h2 className="font-heading text-xl font-black text-[#1C1C1E] uppercase tracking-tight mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 bg-[#E31837] rounded-full" />
                      {category}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {categoryPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="group block card-premium p-0 overflow-hidden"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={post.featuredImage}
                              alt={post.featuredImageAlt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E31837]/10 text-[#E31837] border border-[#E31837]/20 backdrop-blur-sm">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h3 className="font-heading text-base font-bold text-[#1C1C1E] mb-2 group-hover:text-[#E31837] transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h3>
                            <p className="font-body text-[#9CA3AF] text-sm line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime} min read
                              </span>
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
                );
              })}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Services Widget */}
                <div className="card-premium p-6">
                  <h3 className="text-lg font-bold text-[#1C1C1E] mb-4 font-heading uppercase tracking-tight">
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Panel Upgrades", href: "/services/panel-upgrades" },
                      { label: "Pot Lights", href: "/services/pot-lights" },
                      { label: "EV Chargers", href: "/services/ev-charger" },
                      { label: "Rewiring", href: "/services/rewiring" },
                      { label: "Knob & Tube", href: "/services/knob-and-tube" },
                      { label: "Lighting", href: "/services/lighting" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-[#6B7280] hover:text-[#E31837] transition-colors text-sm font-medium"
                        >
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency CTA */}
                <div className="bg-[#1C1C1E] rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Need an Electrician?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    $49 assessment credited toward your project. 24/7 emergency service.
                  </p>
                  <a
                    href={`tel:${business.phoneFull}`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#E31837] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#C21430] transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {business.phone}
                  </a>
                  <p className="text-gray-500 text-xs mt-3 flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    ESA License {business.esaLicense}
                  </p>
                </div>

                {/* Categories */}
                <div className="card-premium p-6">
                  <h3 className="text-lg font-bold text-[#1C1C1E] mb-4 font-heading uppercase tracking-tight">
                    Categories
                  </h3>
                  <ul className="space-y-2.5">
                    {blogCategories.map((cat) => {
                      const count = getBlogPostsByCategory(cat).length;
                      return (
                        <li
                          key={cat}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className={count > 0 ? "text-[#1C1C1E] font-medium" : "text-[#9CA3AF]"}>
                            {cat}
                          </span>
                          <span className="bg-[#F8F9FA] text-[#6B7280] text-xs px-2 py-0.5 rounded-full">
                            {count}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
